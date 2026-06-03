/* ═══════════════════════════════════════════
   SUPABASE CONFIG & HELPERS
═══════════════════════════════════════════ */

const SUPABASE_URL  = 'https://ypowdifzhpafluihdfsn.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlwb3dkaWZ6aHBhZmx1aWhkZnNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5NTgzNjIsImV4cCI6MjA5NTUzNDM2Mn0.0MdjzrA3icFInAEtuUJIkFbNA9Z83KW2yiJCMa852Pg';

const SB = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
window._supa = SB;
/* ── AUTH ── */
async function sbSignInGoogle() {
  const { error } = await SB.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: 'https://complicatedth1-pixel.github.io/english-app/index.html' }
  });
  if (error) console.error('Sign in error:', error.message);
}

async function sbSignOut() {
  await SB.auth.signOut();
  window.location.href = 'auth.html';
}

async function sbGetUser() {
  const { data: { user } } = await SB.auth.getUser();
  if (user) await sbUpsertProfile(user);
  return user;
}

async function sbGetSession() {
  const { data: { session } } = await SB.auth.getSession();
  return session;
}

/* ── PROFILE ── */
async function sbUpsertProfile(user) {
  await SB.from('profiles').upsert({
    id:         user.id,
    name:       user.user_metadata?.full_name || user.email,
    avatar_url: user.user_metadata?.avatar_url || null,
    email:      user.email,
    created_at: user.created_at
  }, { onConflict: 'id' });
}

async function sbGetProfile(userId) {
  const { data } = await SB.from('profiles').select('*').eq('id', userId).single();
  return data;
}

/* ── PROGRESS ── */
async function sbSaveAnswer({ userId, module, itemKey, questionId, chosen, correct, source }) {
  const { error } = await SB.from('progress').upsert({
    user_id:     userId,
    module,
    item_key:    itemKey,
    question_id: questionId,
    chosen,
    correct,
    source
  }, { onConflict: 'user_id,module,item_key,question_id' });
  if (error) console.error('sbSaveAnswer failed:', error.message, error.details);
  await sbUpsertStreak(userId);
}

/* Returns deduplicated progress rows — one per (module, item_key, question_id) */
async function sbGetProgress(userId) {
  const { data } = await SB.from('progress')
    .select('module, item_key, question_id, correct, source, created_at')
    .eq('user_id', userId)
    .order('created_at', { ascending: true });
  if (!data) return [];
  /* Deduplicate: keep latest per (module, item_key, question_id) */
  const seen = new Map();
  data.forEach(r => {
    const k = r.module + '|' + r.item_key + '|' + r.question_id;
    seen.set(k, r); // ascending order → last write wins = latest
  });
  return Array.from(seen.values());
}

async function sbGetModuleProgress(userId, module) {
  const { data, error } = await SB.from('progress')
    .select('item_key, question_id, chosen, correct, source')
    .eq('user_id', userId)
    .eq('module', module)
    .order('id', { ascending: true });
  if (error) { console.error('sbGetModuleProgress failed:', error.message); return []; }
  if (!data) return [];
  /* Deduplicate: keep first attempt per (item_key, question_id) */
  const seen = new Set();
  return data.filter(row => {
    const k = row.item_key + '||' + row.question_id;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

/* ── STREAKS ── */
async function sbUpsertStreak(userId) {
  const today = new Date().toISOString().split('T')[0];
  const { data: existing } = await SB.from('streaks')
    .select('id, questions_done')
    .eq('user_id', userId)
    .eq('date', today)
    .single();

  if (existing) {
    await SB.from('streaks')
      .update({ questions_done: existing.questions_done + 1 })
      .eq('id', existing.id);
  } else {
    await SB.from('streaks')
      .insert({ user_id: userId, date: today, questions_done: 1 });
  }
}

async function sbGetStreak(userId) {
  const { data } = await SB.from('streaks')
    .select('date, questions_done')
    .eq('user_id', userId)
    .order('date', { ascending: false })
    .limit(60);

  if (!data || data.length === 0) return { current: 0, total: 0 };

  const today = new Date().toISOString().split('T')[0];
  let streak = 0;
  let d = new Date(today);

  for (let i = 0; i < 60; i++) {
    const ds = d.toISOString().split('T')[0];
    const found = data.find(r => r.date === ds && r.questions_done > 0);
    if (found) { streak++; d.setDate(d.getDate() - 1); }
    else break;
  }
  const total = data.reduce((s, r) => s + (r.questions_done || 0), 0);
  return { current: streak, total };
}

/* ── AI QUESTION CACHE ── */
async function sbGetCachedQuestions(userId, module, itemKey, model) {
  const { data, error } = await SB.from('ai_questions_cache')
    .select('questions, model')
    .eq('user_id', userId)
    .eq('module', module)
    .eq('item_key', itemKey)
    .order('created_at', { ascending: false })
    .limit(1);
  if (error) { console.error('sbGetCachedQuestions failed:', error.message); return null; }
  return data?.[0]?.questions || null;
}

async function sbSaveCachedQuestions(userId, module, itemKey, model, questions) {
  await SB.from('ai_questions_cache').upsert({
    user_id: userId,
    module,
    item_key: itemKey,
    model,
    questions
  }, { onConflict: 'user_id,module,item_key,model' });
}

/* ── TEST SESSIONS ── */
async function sbSaveTestSession({ userId, module, subtopics, model, totalQuestions, timeAllocated, timeTaken, score, results }) {
  const { data } = await SB.from('test_sessions').insert({
    user_id: userId,
    module,
    subtopics,
    model,
    total_questions: totalQuestions,
    time_allocated: timeAllocated,
    time_taken: timeTaken,
    score,
    results
  }).select().single();
  return data;
}

async function sbGetTestHistory(userId, limit = 10) {
  const { data } = await SB.from('test_sessions')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit);
  return data || [];
}

/* ── LAST VISITED ── */
function setLastVisited(module, itemKey) {
  localStorage.setItem('lastVisited', JSON.stringify({ module, itemKey }));
}
function getLastVisited() {
  try { return JSON.parse(localStorage.getItem('lastVisited')); }
  catch { return null; }
}
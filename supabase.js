/* ═══════════════════════════════════════════
   SUPABASE CONFIG & HELPERS
   Replace SUPABASE_URL and SUPABASE_ANON_KEY
   with your actual values from supabase.com
═══════════════════════════════════════════ */

const SUPABASE_URL  = 'https://ypowdifzhpafluihdfsn.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlwb3dkaWZ6aHBhZmx1aWhkZnNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5NTgzNjIsImV4cCI6MjA5NTUzNDM2Mn0.0MdjzrA3icFInAEtuUJIkFbNA9Z83KW2yiJCMa852Pg';

const SB = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

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
  return user;
}

async function sbGetSession() {
  const { data: { session } } = await SB.auth.getSession();
  return session;
}

/* ── PROFILE ── */
async function sbUpsertProfile(user) {
  await SB.from('profiles').upsert({
    id: user.id,
    name: user.user_metadata?.full_name || user.email,
    avatar_url: user.user_metadata?.avatar_url || null
  }, { onConflict: 'id' });
}

async function sbGetProfile(userId) {
  const { data } = await SB.from('profiles').select('*').eq('id', userId).single();
  return data;
}

/* ── PROGRESS ── */
async function sbSaveAnswer({ userId, module, itemKey, questionId, chosen, correct, source }) {
  await SB.from('progress').insert({
    user_id: userId,
    module,
    item_key: itemKey,
    question_id: questionId,
    chosen,
    correct,
    source
  });
  await sbUpsertStreak(userId);
}

async function sbGetProgress(userId) {
  const { data } = await SB.from('progress')
    .select('module, item_key, question_id, correct, source')
    .eq('user_id', userId);
  return data || [];
}

async function sbGetModuleProgress(userId, module) {
  const { data } = await SB.from('progress')
    .select('item_key, question_id, chosen, correct, source')
    .eq('user_id', userId)
    .eq('module', module);
  return data || [];
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
  const { data } = await SB.from('ai_questions_cache')
    .select('questions')
    .eq('user_id', userId)
    .eq('module', module)
    .eq('item_key', itemKey)
    .eq('model', model)
    .single();
  return data?.questions || null;
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
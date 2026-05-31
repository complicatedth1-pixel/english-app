/* ═══════════════════════════════════════════
   READING SYSTEM — SUPABASE HELPERS
   Requires supabase.js to be loaded first (SB client)
═══════════════════════════════════════════ */

/* ── AUTH CHECK ── */
async function rdGetUser() {
  const { data: { user } } = await SB.auth.getUser();
  return user;
}

/* ── ADMIN CHECK ── */
async function rdIsAdmin(userId) {
  const { data } = await SB.from('reading_admins').select('user_id').eq('user_id', userId).single();
  return !!data;
}

/* ── USER STATE ── */
async function rdGetState(userId) {
  const { data } = await SB.from('reading_user_state').select('*').eq('user_id', userId).single();
  return data || { user_id: userId, current_day: 1, current_week: 1 };
}

async function rdUpsertState(userId, day, week) {
  await SB.from('reading_user_state').upsert(
    { user_id: userId, current_day: day, current_week: week, updated_at: new Date().toISOString() },
    { onConflict: 'user_id' }
  );
}

/* ── EXERCISES ── */
async function rdGetExercise(day, week) {
  const { data } = await SB.from('reading_exercises')
    .select('*')
    .eq('day', day)
    .eq('week', week)
    .single();
  return data;
}

async function rdGetAllExercises() {
  const { data } = await SB.from('reading_exercises')
    .select('*')
    .order('week', { ascending: true })
    .order('day', { ascending: true });
  return data || [];
}

async function rdSaveExercise(exercise) {
  const user = await rdGetUser();
  if (!user) throw new Error('Not authenticated');
  const { data, error } = await SB.from('reading_exercises')
    .insert({ ...exercise, created_by: user.id })
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function rdUpdateExercise(id, updates) {
  const { error } = await SB.from('reading_exercises').update(updates).eq('id', id);
  if (error) throw error;
}

async function rdDeleteExercise(id) {
  const { error } = await SB.from('reading_exercises').delete().eq('id', id);
  if (error) throw error;
}

/* ── SESSIONS ── */
async function rdSaveSession(sessionData) {
  const user = await rdGetUser();
  if (!user) return;
  await SB.from('reading_sessions').insert({ ...sessionData, user_id: user.id });
}

async function rdGetUserSessions(userId) {
  const { data } = await SB.from('reading_sessions')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  return data || [];
}

async function rdGetAllSessions() {
  // Admin only — fetches all users' sessions with profile info
  const { data } = await SB.from('reading_sessions')
    .select('*, profiles(name, avatar_url)')
    .order('created_at', { ascending: false });
  return data || [];
}

/* ── VARIABLE COMPUTATION ── */
function rdComputeVars(sessions) {
  if (!sessions.length) return { V: null, A: null, I: null, W: null, S: null, L: sessions.length };
  
  const withEx1 = sessions.filter(s => s.ex1_total > 0);
  const withEx2 = sessions.filter(s => s.ex2_total > 0);
  const withInterp = sessions.filter(s => s.ex2_interp_total > 0);
  const withInfer = sessions.filter(s => s.ex2_infer_total > 0);

  return {
    V: withEx1.length ? Math.round(withEx1.reduce((a,s) => a + s.ex1_score, 0) / withEx1.length) : null,
    A: withInterp.length ? Math.round(withInterp.reduce((a,s) => a + (s.ex2_interp_correct/s.ex2_interp_total*100), 0) / withInterp.length) : null,
    I: withInfer.length ? Math.round(withInfer.reduce((a,s) => a + (s.ex2_infer_correct/s.ex2_infer_total*100), 0) / withInfer.length) : null,
    W: withEx1.length ? Math.round(withEx1.reduce((a,s) => a + (s.ex1_read_time||0), 0) / withEx1.length) : null,
    S: withEx2.length ? Math.round(withEx2.reduce((a,s) => a + s.ex2_score, 0) / withEx2.length) : null,
    L: sessions.length
  };
}

/* ── ADMIN: ALL USERS ── */
async function rdGetAllUsers() {
  const { data } = await SB.from('reading_user_state')
    .select('*, profiles(name, avatar_url)')
    .order('updated_at', { ascending: false });
  return data || [];
}
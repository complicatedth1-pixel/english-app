/* ═══════════════════════════════════════════════════════════════
   reading_data.js — Supabase helpers for Reading module
   ═══════════════════════════════════════════════════════════════ */

const RD_URL = SUPABASE_URL;   // set in supabase.js globals
const RD_KEY = SUPABASE_ANON_KEY;

function rdClient() { return window._supa; }   // reuse supabase.js instance

/* ── Auth ─────────────────────────────────────────────────────── */
async function rdGetUser() {
  const { data: { user } } = await rdClient().auth.getUser();
  return user;
}

async function rdIsAdmin(uid) {
  const { data } = await rdClient()
    .from('reading_admins')
    .select('user_id')
    .eq('user_id', uid)
    .maybeSingle();
  return !!data;
}

/* ── User State ───────────────────────────────────────────────── */
async function rdGetState(uid) {
  const { data } = await rdClient()
    .from('reading_user_state')
    .select('*')
    .eq('user_id', uid)
    .maybeSingle();
  return data || { current_day: 1, current_week: 1 };
}

async function rdUpsertState(uid, day, week) {
  await rdClient().from('reading_user_state').upsert({
    user_id: uid, current_day: day, current_week: week,
    updated_at: new Date().toISOString()
  }, { onConflict: 'user_id' });
}

/* ── Exercises ────────────────────────────────────────────────── */

/**
 * Get exercise for a specific week + day.
 */
async function rdGetExercise(week, day) {
  const { data } = await rdClient()
    .from('reading_exercises')
    .select('*')
    .eq('week', week)
    .eq('day', day)
    .maybeSingle();
  return data;
}

/**
 * Get all exercises (admin).
 */
async function rdGetAllExercises() {
  const { data } = await rdClient()
    .from('reading_exercises')
    .select('*')
    .order('week', { ascending: true })
    .order('day',  { ascending: true });
  return data || [];
}

/**
 * Save (upsert) an exercise. Matches on week+day.
 */
async function rdSaveExercise(ex) {
  const { data, error } = await rdClient()
    .from('reading_exercises')
    .upsert(ex, { onConflict: 'week,day' })
    .select()
    .single();
  if (error) throw error;
  return data;
}

/**
 * Update a single exercise by id (for drag-drop question reorder).
 */
async function rdUpdateExercise(id, patch) {
  const { data, error } = await rdClient()
    .from('reading_exercises')
    .update(patch)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

async function rdDeleteExercise(id) {
  await rdClient().from('reading_exercises').delete().eq('id', id);
}

/* ── Sessions ─────────────────────────────────────────────────── */

async function rdSaveSession(data) {
  const { error } = await rdClient().from('reading_sessions').insert(data);
  if (error) throw error;
}

async function rdGetUserSessions(uid) {
  const { data } = await rdClient()
    .from('reading_sessions')
    .select('*')
    .eq('user_id', uid)
    .order('created_at', { ascending: false });
  return data || [];
}

async function rdGetAllUsers() {
  // Get all user states joined with profiles
  const { data: states } = await rdClient()
    .from('reading_user_state')
    .select('*');
  if (!states?.length) return [];

  const uids = states.map(s => s.user_id);
  const { data: profiles } = await rdClient()
    .from('profiles')
    .select('id, name, avatar_url')
    .in('id', uids);

  return states.map(s => ({
    ...s,
    profiles: profiles?.find(p => p.id === s.user_id) || null
  }));
}

/* ── Analytics helpers ────────────────────────────────────────── */

function rdComputeVars(sessions) {
  const normal  = sessions.filter(s => s.session_type === 'normal');
  const recalls = sessions.filter(s => s.session_type === 'recall');
  const all     = sessions;

  const avg = (arr, key) => {
    const vals = arr.map(s => s[key]).filter(v => v !== null && v !== undefined);
    return vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : null;
  };

  return {
    V: avg(all,    'ex1_score'),       // vocab recall
    S: avg(normal, 'ex2_score'),       // comprehension
    R: avg(recalls,'ex2_score'),       // recall retention
    L: all.length,                     // consistency
  };
}
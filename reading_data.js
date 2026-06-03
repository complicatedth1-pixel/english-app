/* ═══════════════════════════════════════════════════════════════
   reading_data.js — Supabase helpers for Reading module
   ═══════════════════════════════════════════════════════════════ */

/**
 * Returns the Supabase client.
 * window._supa is set by supabase.js — we guard against it not being
 * ready yet by throwing a clear error rather than a cryptic TypeError.
 */
function rdClient() {
  if (!window._supa) throw new Error('Supabase client not initialised yet. Ensure supabase.js loads before reading_data.js.');
  return window._supa;
}

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
  await rdClient().from('reading_user_state').upsert(
    { user_id: uid, current_day: day, current_week: week, updated_at: new Date().toISOString() },
    { onConflict: 'user_id' }
  );
}

/* ── Exercises ────────────────────────────────────────────────── */

/**
 * Get exercise for a specific week + day.
 * Column names match the NEW schema:
 *   ex1_blocks, ex1_blank_pos, ex1_recall_blanks,
 *   ex1_blank_positions, ex2_passage, ex2_questions, ex2_recall_map
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

/** Get all exercises (admin). */
async function rdGetAllExercises() {
  const { data } = await rdClient()
    .from('reading_exercises')
    .select('*')
    .order('week', { ascending: true })
    .order('day',  { ascending: true });
  return data || [];
}

/**
 * Save (upsert) an exercise. Conflict target is week+day unique constraint.
 * Payload keys must match DB columns exactly.
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

/** Update a single exercise by id. */
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
  const { error } = await rdClient().from('reading_exercises').delete().eq('id', id);
  if (error) throw error;
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
  const { data: profiles } = await rdClient()
    .from('profiles')
    .select('id, name, avatar_url');
  if (!profiles?.length) return [];

  const uids = profiles.map(p => p.id);
  const { data: states } = await rdClient()
    .from('reading_user_state')
    .select('*')
    .in('user_id', uids);

  return profiles.map(p => ({
    user_id: p.id,
    profiles: p,
    current_day:  states?.find(s => s.user_id === p.id)?.current_day  || 1,
    current_week: states?.find(s => s.user_id === p.id)?.current_week || 1,
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
    V: avg(all,     'ex1_score'),   // chain recall accuracy
    S: avg(normal,  'ex2_score'),   // comprehension (normal days)
    R: avg(recalls, 'ex2_score'),   // retention (recall days)
    L: all.length,                  // consistency (total sessions)
  };
}
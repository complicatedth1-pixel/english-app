/* ═══════════════════════════════════════════════════════════════

   reading_data.js — Supabase helpers for Reading module

   ═══════════════════════════════════════════════════════════════ */



function rdClient() {

  if (!window._supa) throw new Error('Supabase client not initialised yet.');

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



/* ── User Meta (profile + schedule) ──────────────────────────── */

/*

  Stores learner profile variables (V,S,W,I,A,G) and scheduling info

  (startDate, holidays[]) per user.



  Supabase table: reading_user_meta

    user_id   uuid  PK / FK → auth.users

    profile   jsonb   { V, S, W, I, A, G }

    start_date text   'YYYY-MM-DD'

    holidays  jsonb   ['YYYY-MM-DD', ...]

    updated_at timestamptz

*/

async function rdGetUserMeta(uid) {

  const { data, error } = await rdClient()

    .from('reading_user_meta')

    .select('*')

    .eq('user_id', uid)

    .maybeSingle();

  if (error && error.code !== 'PGRST116') throw error; // PGRST116 = row not found

  if (!data) return null;

  return {

    profile:   data.profile   || { V:3, S:3, W:2, I:2, A:2, G:3 },

    startDate: data.start_date || '',

    holidays:  data.holidays  || [],

  };

}



async function rdSaveUserMeta(uid, meta) {

  const { error } = await rdClient()

    .from('reading_user_meta')

    .upsert(

      {

        user_id:    uid,

        profile:    meta.profile   || {},

        start_date: meta.startDate || null,

        holidays:   meta.holidays  || [],

        updated_at: new Date().toISOString(),

      },

      { onConflict: 'user_id' }

    );

  if (error) throw error;

}



/* ── Exercises ────────────────────────────────────────────────── */

/*

  Exercises are now per-user.

  reading_exercises table must have a user_id column and

  a unique constraint on (user_id, week, day).



  Fallback: if user_id column doesn't exist yet, these queries

  will fail gracefully — add the column before deploying.

*/

async function rdGetExercise(week, day, uid) {

  let q = rdClient()

    .from('reading_exercises')

    .select('*')

    .eq('week', week)

    .eq('day',  day);

  if (uid) q = q.eq('user_id', uid);

  const { data } = await q.maybeSingle();

  return data;

}



async function rdGetAllExercises(uid) {

  let q = rdClient()

    .from('reading_exercises')

    .select('*')

    .order('week', { ascending: true })

    .order('day',  { ascending: true });

  if (uid) q = q.eq('user_id', uid);

  const { data } = await q;

  return data || [];

}



async function rdSaveExercise(ex) {

  // ex must include user_id for per-user scoping

  const { data, error } = await rdClient()

    .from('reading_exercises')

    .upsert(ex, { onConflict: 'user_id,week,day' })

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

  const { data: saved, error } = await rdClient().from('reading_sessions').insert(data).select().single();

  if (error) throw error;

  return saved;

}



async function rdGetUserSessions(uid) {

  const { data } = await rdClient()

    .from('reading_sessions')

    .select('*')

    .eq('user_id', uid)

    .order('created_at', { ascending: false });

  return data || [];

}



/* ── Question Results ─────────────────────────────────────────── */

async function rdSaveQuestionResults(results) {

  if (!results || !results.length) return;

  const { error } = await rdClient().from('reading_question_results').insert(results);

  if (error) throw error;

}



async function rdGetUserQuestionResults(uid) {

  const { data } = await rdClient()

    .from('reading_question_results')

    .select('*')

    .eq('user_id', uid)

    .order('created_at', { ascending: false });

  return data || [];

}



/* ── Users (admin) ────────────────────────────────────────────── */

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

    user_id:      p.id,

    profiles:     p,

    current_day:  states?.find(s => s.user_id === p.id)?.current_day  || 1,

    current_week: states?.find(s => s.user_id === p.id)?.current_week || 1,

  }));

}



/* ── Analytics ────────────────────────────────────────────────── */



function rdComputeVars(sessions) {

  const normal  = sessions.filter(s => s.session_type === 'normal');

  const recalls = sessions.filter(s => s.session_type === 'recall');

  const avg = (arr, key) => {

    const vals = arr.map(s => s[key]).filter(v => v !== null && v !== undefined);

    return vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : null;

  };

  return {

    V: avg(sessions, 'ex1_score'),

    S: avg(normal,   'ex2_score'),

    R: avg(recalls,  'ex2_score'),

    L: sessions.length,

  };

}



function rdComputeDetailedVars(qResults) {

  if (!qResults || !qResults.length) return null;



  const accFor = (rows) => {

    if (!rows.length) return null;

    return Math.round(rows.filter(r => r.correct).length / rows.length * 100);

  };



  const byLevel = (dim) => {

    const out = {};

    for (let lv = 1; lv <= 5; lv++) {

      const rows = qResults.filter(r => r[dim] === lv);

      if (rows.length) out[lv] = accFor(rows);

    }

    return out;

  };



  const speedMatrix = { fastCorrect: 0, fastWrong: 0, slowCorrect: 0, slowWrong: 0 };

  qResults.forEach(r => {

    if (!r.profile_xp || !r.time_taken) return;

    const ratio = r.time_taken / r.profile_xp;

    const fast  = ratio < 0.85;

    if (fast  &&  r.correct) speedMatrix.fastCorrect++;

    if (fast  && !r.correct) speedMatrix.fastWrong++;

    if (!fast &&  r.correct) speedMatrix.slowCorrect++;

    if (!fast && !r.correct) speedMatrix.slowWrong++;

  });



  const byPosition = {};

  qResults.forEach(r => {

    const pos = r.question_index;

    if (!byPosition[pos]) byPosition[pos] = [];

    byPosition[pos].push(r.correct);

  });

  const wmDecay = {};

  Object.entries(byPosition).forEach(([pos, results]) => {

    wmDecay[pos] = Math.round(results.filter(Boolean).length / results.length * 100);

  });



  const byType = {};

  const types = ['fact','vocab','imply','purpose','function','assume','infer','stance','weaken','apply','except','wm'];

  types.forEach(t => {

    const rows = qResults.filter(r => r.question_type === t);

    if (rows.length) byType[t] = accFor(rows);

  });



  return {

    I:           byLevel('profile_i'),

    A:           byLevel('profile_a'),

    V:           byLevel('profile_v'),

    G:           byLevel('profile_g'),

    WM:          byLevel('profile_wm'),

    Sp:          byLevel('profile_sp'),

    Sq:          byLevel('profile_sq'),

    Wp:          byLevel('profile_wp'),

    Wq:          byLevel('profile_wq'),

    speedMatrix,

    wmDecay,

    byType,

    totalQuestions: qResults.length,

  };

}
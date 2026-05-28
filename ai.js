/* ═══════════════════════════════════════════
   AI CONFIGURATION & QUESTION GENERATOR
═══════════════════════════════════════════ */

const AI_CFG = {
  claude: {
    label: 'Claude Sonnet 4',
    icon: '◆',
    url: 'https://api.anthropic.com/v1/messages',
    model: 'claude-sonnet-4-20250514',
    maxTok: 8000
  },
  gemini: {
    label: 'Gemini 2.5 Flash',
    icon: '✦',
    key: 'AIzaSyCqx0Vs0l1RM6EKZrb5UcAMAScJcrNgK_0',
    model: 'gemini-2.5-flash',
    get url() {
      return `https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent?key=${this.key}`;
    }
  },
  grok: {
    label: 'Groq Llama 3.3',
    icon: '⬡',
    key: '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',
    url: 'https://api.groq.com/openai/v1/chat/completions',
    model: 'llama-3.3-70b-versatile',
    maxTok: 8000
  }
};

/* Active model — persisted in localStorage */
function getActiveModel() {
  return localStorage.getItem('aiModel') || 'claude';
}
function setActiveModel(key) {
  localStorage.setItem('aiModel', key);
}

/* ── CORE CALL ── */
async function aiCall(prompt, modelKey) {
  const key = modelKey || getActiveModel();
  const cfg = AI_CFG[key];

  if (key === 'claude') {
    const res = await fetch(cfg.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: cfg.model, max_tokens: cfg.maxTok,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const d = await res.json();
    return d.content.map(c => c.text || '').join('');
  }

  if (key === 'gemini') {
    const res = await fetch(cfg.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    });
    const d = await res.json();
    return d.candidates?.[0]?.content?.parts?.[0]?.text || '';
  }

  if (key === 'grok') {
    const res = await fetch(cfg.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cfg.key}`
      },
      body: JSON.stringify({
        model: cfg.model, max_tokens: cfg.maxTok,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const d = await res.json();
    return d.choices?.[0]?.message?.content || '';
  }
}

/* ── PARSE JSON FROM AI RESPONSE ── */
function parseAIJson(raw) {
  const clean = raw.replace(/```json|```/g, '').trim();
  return JSON.parse(clean);
}

/* ── PROMPT BUILDERS ── */
const PROMPTS = {
  phrasal(baseVerb, verbs) {
    return `Generate 5 fill-in-the-blank questions testing phrasal verbs with base verb "${baseVerb}".
Phrasal verbs to test: ${verbs.join(', ')}
Difficulty: SSC CGL / CHSL exam level — tough, no trivial questions.
Rules:
- Each sentence must be natural, exam-style English
- 4 options per question, all from the same base verb group
- Each option has a "verb" (the phrasal verb) and a "hint" (Hindi meaning, max 5 words)
- Include "feedback" explaining why correct answer is right and distractors are wrong
- Questions must be RANDOM — do not reuse example sentences from training data

Respond ONLY with a JSON array. No markdown, no preamble:
[{"id":"q1","sentence":"...___...","correct":"exact phrasal verb","options":[{"verb":"...","hint":"..."}],"feedback":"..."}]`;
  },

  preposition(group, words) {
    return `Generate 5 fill-in-the-blank questions testing preposition usage for this group: "${group}".
Words to test: ${words.join(', ')} — all take the same preposition.
Difficulty: SSC CGL level — tough, vocabulary-focused.
Rules:
- Sentence must contextualise which specific word fits (not just the preposition)
- 4 options per question (the words themselves, not the prepositions)
- "hint" = brief Hindi meaning or usage clue, max 5 words
- "feedback" = why correct word fits and others don't

Respond ONLY with a JSON array. No markdown:
[{"id":"q1","sentence":"...___...","correct":"word","options":[{"verb":"word","hint":"..."}],"feedback":"..."}]`;
  },

  idiom(setName, idioms) {
    return `Generate 5 fill-in-the-blank questions testing idioms from "${setName}".
Idioms to test (pick 5 randomly): ${idioms.map(i => i.phrase).join(', ')}
Difficulty: SSC level — contextual, no giveaways.
Rules:
- Sentence must make the idiom meaningful in context
- 4 options per question (idiom phrases)
- "hint" = Hindi meaning, max 6 words
- Include "feedback" explaining correct answer and distractors

Respond ONLY with a JSON array. No markdown:
[{"id":"q1","sentence":"...___...","correct":"idiom phrase","options":[{"verb":"phrase","hint":"..."}],"feedback":"..."}]`;
  },

  grammar(ruleName, ruleDesc) {
    return `Generate 5 error-spotting or fill-in-the-blank questions testing this English grammar rule:
Rule: "${ruleName}"
Description: ${ruleDesc}
Difficulty: SSC CGL level — subtle errors, not obvious mistakes.
Rules:
- Mix of fill-in-the-blank and error-identification question types
- For fill-in-blank: 4 options, correct vs near-correct alternatives
- "hint" = very brief clue
- "feedback" = clear grammar explanation referencing the rule

Respond ONLY with a JSON array. No markdown:
[{"id":"q1","sentence":"...___...","correct":"answer","options":[{"verb":"...","hint":"..."}],"feedback":"..."}]`;
  },

  modal(modalName, uses) {
    return `Generate 5 fill-in-the-blank questions testing the modal verb "${modalName}".
Uses to cover: ${uses.join(', ')}
Difficulty: SSC CGL level — nuanced modal distinctions.
Rules:
- Each question should test a specific use of the modal
- 4 options: different modals or modal forms
- "hint" = usage label (e.g. "possibility", "obligation", "sambhavna")
- "feedback" = why this modal and not the others

Respond ONLY with a JSON array. No markdown:
[{"id":"q1","sentence":"...___...","correct":"modal","options":[{"verb":"...","hint":"..."}],"feedback":"..."}]`;
  },

  testBatch(module, subtopics, count) {
    return `Generate ${count} mixed fill-in-the-blank questions for an English test.
Module: ${module}
Topics/subtopics to cover: ${subtopics.join(', ')}
Difficulty: SSC CGL / CHSL competitive exam level — challenging questions.
Rules:
- Distribute questions evenly across all subtopics
- 4 options per question with Hindi hints
- Detailed feedback for each
- Questions must be varied and non-repetitive
- Tag each question with which subtopic it belongs to using "topic" field

Respond ONLY with a JSON array. No markdown:
[{"id":"q1","topic":"subtopic name","sentence":"...___...","correct":"answer","options":[{"verb":"...","hint":"..."}],"feedback":"..."}]`;
  }
};

/* ── GENERATE + CACHE ── */
async function generateAndCache({ userId, module, itemKey, promptText, onLoad, onReady, onError }) {
  const modelKey = getActiveModel();

  // Check cache first
  if (userId) {
    const cached = await sbGetCachedQuestions(userId, module, itemKey, modelKey);
    if (cached) { onReady(cached, 'cache'); return; }
  }

  onLoad();
  try {
    const raw  = await aiCall(promptText, modelKey);
    const qs   = parseAIJson(raw);
    qs.forEach((q, i) => { q.id = `${itemKey.replace(/\s+/g,'_')}_${modelKey}_${i}`; });
    if (userId) await sbSaveCachedQuestions(userId, module, itemKey, modelKey, qs);
    onReady(qs, 'fresh');
  } catch(err) {
    console.error('AI error:', err);
    onError(err);
  }
}
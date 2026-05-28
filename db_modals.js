/* ═══════════════════════════════════════════
   MODALS DATABASE
   Structure: DB_MOD[GroupName] = { intro, items[], questions[] }
═══════════════════════════════════════════ */

const DB_MOD = {

  'Can / Could': {
    intro: 'CAN expresses present ability, permission, or possibility. COULD expresses past ability, polite requests, or weaker possibility. These are among the most tested modals in SSC exams.',
    items: [
      { modal:'can',   use:'Present ability',       def_en:'To be able to do something now',             def_hi:'अभी कुछ कर सकना', example:'She <em>can</em> speak five languages fluently.', note:'' },
      { modal:'can',   use:'Permission (informal)', def_en:'To allow someone to do something',           def_hi:'अनुमति देना (अनौपचारिक)', example:'You <em>can</em> leave early today.', note:'Less formal than "may".' },
      { modal:'can',   use:'Possibility',           def_en:'Something that is sometimes true or possible',def_hi:'संभावना', example:'Excessive stress <em>can</em> lead to serious illness.', note:'' },
      { modal:'could', use:'Past ability',          def_en:'Was/were able to — completed past ability',  def_hi:'अतीत में कर सकना', example:'He <em>could</em> run 10 km at the age of twenty.', note:'' },
      { modal:'could', use:'Polite request',        def_en:'A more polite form of "can" for requests',   def_hi:'विनम्र अनुरोध', example:'<em>Could</em> you please forward this email?', note:'"Could" is more formal and polite than "can" for requests.' },
      { modal:'could', use:'Weak possibility',      def_en:'Something that might possibly be true',      def_hi:'कमज़ोर संभावना', example:'That sound <em>could</em> be an approaching storm.', note:'Weaker than "may/might".' },
    ],
    questions: [
      { id:'mod_cc_1', sentence:'When she was a child, she _____ recite entire chapters from memory.', correct:'could', options:[{verb:'could',hint:'past ability'},{verb:'can',hint:'present — wrong tense'},{verb:'may',hint:'permission — wrong'},{verb:'must',hint:'obligation — wrong'}], feedback:'"Could" expresses a past ability — something someone was able to do at a previous point in time. "Can" is for present ability. The phrase "when she was a child" confirms past tense.' },
      { id:'mod_cc_2', sentence:'_____ you give me a few minutes of your time?', correct:'Could', options:[{verb:'Could',hint:'polite request'},{verb:'Can',hint:'ability — less polite'},{verb:'Will',hint:'future — less polite'},{verb:'Shall',hint:'offer — wrong context'}], feedback:'"Could" is used for polite requests and is more formal than "can". In professional/formal contexts, "Could you…" is preferred over "Can you…".' },
      { id:'mod_cc_3', sentence:'Overexposure to radiation _____ cause long-term health damage.', correct:'can', options:[{verb:'can',hint:'general possibility'},{verb:'could',hint:'hypothetical — weaker'},{verb:'must',hint:'certainty — too strong'},{verb:'shall',hint:'future — wrong context'}], feedback:'"Can" is used for general truths or possibilities that are established facts. Overexposure causing damage is a known scientific fact — "can" (not "might") is correct here.' },
    ]
  },

  'May / Might': {
    intro: 'MAY expresses formal permission or a moderate possibility. MIGHT expresses a weaker, more remote possibility. The distinction is subtle but tested in SSC.',
    items: [
      { modal:'may',   use:'Formal permission',    def_en:'To grant or ask for permission formally',     def_hi:'औपचारिक अनुमति', example:'You <em>may</em> proceed with the presentation.', note:'"May" is more formal than "can" for permission.' },
      { modal:'may',   use:'Moderate possibility', def_en:'Something that is fairly likely to happen',   def_hi:'मध्यम संभावना', example:'It <em>may</em> rain this afternoon.', note:'~50% probability.' },
      { modal:'may',   use:'Concession (formal)',  def_en:'Used in formal writing to concede a point',   def_hi:'स्वीकृति (औपचारिक)', example:'That <em>may</em> be true, but the evidence suggests otherwise.', note:'' },
      { modal:'might', use:'Remote possibility',   def_en:'Something that is possible but less likely',   def_hi:'कम संभावना', example:'He <em>might</em> agree if we rephrase the proposal.', note:'Weaker than "may".' },
      { modal:'might', use:'Past possibility',     def_en:'Used in reported speech or past contexts',    def_hi:'अतीत की संभावना', example:'She thought it <em>might</em> be a mistake.', note:'Back-shift of "may" in reported speech.' },
      { modal:'might', use:'Polite suggestion',    def_en:'A tentative or very polite suggestion',       def_hi:'विनम्र सुझाव', example:'You <em>might</em> want to reconsider that approach.', note:'Very polite; avoids sounding direct.' },
    ],
    questions: [
      { id:'mod_mm_1', sentence:'The patient _____ be discharged tomorrow if the test results are satisfactory.', correct:'may', options:[{verb:'may',hint:'moderate possibility'},{verb:'might',hint:'remote possibility'},{verb:'shall',hint:'future plan — wrong'},{verb:'must',hint:'certainty — wrong'}], feedback:'"May" suggests a moderate (not remote) possibility — the discharge is quite likely given the condition. "Might" would suggest more doubt. Both are acceptable, but "may" is stronger and standard.' },
      { id:'mod_mm_2', sentence:'You _____ leave the examination hall before the time is up.', correct:'may not', options:[{verb:'may not',hint:'prohibition — formal'},{verb:'might not',hint:'possibility — wrong meaning'},{verb:'cannot',hint:'ability — wrong register'},{verb:'should not',hint:'advice — not prohibition'}], feedback:'"May not" expresses formal prohibition in official contexts like examinations. "Cannot" also works but "may not" is more formal. "Might not" would express uncertainty, not prohibition.' },
      { id:'mod_mm_3', sentence:'He mentioned that he _____ attend the conference, but he was not sure.', correct:'might', options:[{verb:'might',hint:'reported speech — back-shift of may'},{verb:'may',hint:'no back-shift in reported speech'},{verb:'will',hint:'no back-shift'},{verb:'can',hint:'wrong meaning'}], feedback:'"Might" is the back-shifted form of "may" in reported speech. "He said he may attend" becomes "He said he might attend." The phrase "was not sure" also signals a weaker possibility.' },
    ]
  },

  'Will / Would': {
    intro: 'WILL expresses future certainty, spontaneous decisions, and promises. WOULD expresses conditionals, polite requests, habitual past actions, and reported speech.',
    items: [
      { modal:'will',  use:'Future certainty',     def_en:'A definite future action or plan',            def_hi:'निश्चित भविष्य', example:'The train <em>will</em> depart at 6:30 AM.', note:'' },
      { modal:'will',  use:'Spontaneous decision', def_en:'A decision made at the moment of speaking',   def_hi:'तत्काल निर्णय', example:'I <em>will</em> carry that for you.', note:'Not planned in advance.' },
      { modal:'will',  use:'Promise / refusal',    def_en:'A commitment or refusal',                     def_hi:'वादा / इनकार', example:'I <em>will</em> never betray your trust.', note:'"Will not / won\'t" = refusal.' },
      { modal:'would', use:'Conditional',          def_en:'Result clause in Type 2 conditionals',        def_hi:'शर्त का परिणाम', example:'If I had more time, I <em>would</em> travel the world.', note:'' },
      { modal:'would', use:'Polite request',       def_en:'More formal than "will" for requests',        def_hi:'विनम्र अनुरोध', example:'<em>Would</em> you mind reviewing this draft?', note:'"Would" is softer and more formal.' },
      { modal:'would', use:'Habitual past',        def_en:'A regular action in the past (no longer done)',def_hi:'भूतकालीन आदत', example:'As a child, he <em>would</em> wake up at 5 AM every day.', note:'Similar to "used to" but focuses on actions, not states.' },
    ],
    questions: [
      { id:'mod_ww_1', sentence:'As a young officer, he _____ walk the entire patrol route on foot every night.', correct:'would', options:[{verb:'would',hint:'habitual past action'},{verb:'will',hint:'present/future — wrong'},{verb:'used to',hint:'also correct but "would" preferred here'},{verb:'could',hint:'ability — wrong meaning'}], feedback:'"Would" expresses a habitual past action — something done regularly in the past but no longer. "Used to" also works, but "would" is preferred when an adverb of frequency (every night) is present.' },
      { id:'mod_ww_2', sentence:'_____ you mind closing the window? There is a draught.', correct:'Would', options:[{verb:'Would',hint:'polite request'},{verb:'Will',hint:'less formal'},{verb:'Could',hint:'ability-framed request'},{verb:'May',hint:'permission — wrong context'}], feedback:'"Would you mind + gerund" is the most polite way to make a request in formal English. "Would" is preferred over "will" in formal written or professional contexts.' },
      { id:'mod_ww_3', sentence:'The contract specified that the vendor _____ deliver the goods within thirty days.', correct:'would', options:[{verb:'would',hint:'reported speech — back-shift of will'},{verb:'will',hint:'no back-shift — wrong'},{verb:'shall',hint:'formal obligation — possible'},{verb:'should',hint:'advice — wrong'}], feedback:'In reported speech / formal documents reporting an agreement, "will" back-shifts to "would". "The contract specified that the vendor would deliver" is the correct indirect form.' },
    ]
  },

  'Shall / Should': {
    intro: 'SHALL is used for first-person future, formal offers, and legal obligations. SHOULD expresses advice, expectation, and unfulfilled past obligation (should have).',
    items: [
      { modal:'shall',  use:'First person future',  def_en:'Formal future with I/we',                    def_hi:'प्रथम पुरुष भविष्य (औपचारिक)', example:'I <em>shall</em> return by sunset.', note:'More formal than "will" for I/we.' },
      { modal:'shall',  use:'Offer / suggestion',   def_en:'Offering or suggesting something (I/we)',     def_hi:'प्रस्ताव/सुझाव', example:'<em>Shall</em> I call a taxi for you?', note:'Only with "I" and "we".' },
      { modal:'shall',  use:'Legal / formal duty',  def_en:'Used in laws and formal obligations',         def_hi:'कानूनी बाध्यता', example:'All candidates <em>shall</em> report by 9 AM.', note:'Common in official notices, rules, contracts.' },
      { modal:'should', use:'Advice / recommendation',def_en:'What is the right or sensible thing to do', def_hi:'सलाह/सुझाव', example:'You <em>should</em> consult a doctor immediately.', note:'' },
      { modal:'should', use:'Expectation',           def_en:'Something that is expected to happen',       def_hi:'अपेक्षा', example:'The results <em>should</em> be out by Friday.', note:'Less certain than "will".' },
      { modal:'should', use:'Unfulfilled past duty', def_en:'Something that was right but was not done',  def_hi:'अपूर्ण कर्तव्य', example:'He <em>should have</em> informed us in advance.', note:'"Should have + past participle" = past regret or criticism.' },
    ],
    questions: [
      { id:'mod_ss_1', sentence:'According to the notification, all applicants _____ submit three photographs along with the form.', correct:'shall', options:[{verb:'shall',hint:'formal instruction/rule'},{verb:'should',hint:'advice — not strong enough'},{verb:'must',hint:'obligation — also possible'},{verb:'will',hint:'future — not as formal'}], feedback:'In official notices, government instructions, and formal rules, "shall" is used to express binding obligations. "Must" is also acceptable, but "shall" is the preferred formal register.' },
      { id:'mod_ss_2', sentence:'You _____ have backed up your files before the system update.', correct:'should', options:[{verb:'should',hint:'past unfulfilled advice'},{verb:'must',hint:'past deduction — wrong meaning'},{verb:'would',hint:'conditional — wrong'},{verb:'shall',hint:'future — wrong tense'}], feedback:'"Should have + past participle" expresses past advice that was not followed — a mild criticism or regret. "Must have" would mean a confident deduction about the past, not advice.' },
      { id:'mod_ss_3', sentence:'The package _____ arrive by Thursday according to the courier\'s tracking update.', correct:'should', options:[{verb:'should',hint:'expectation based on information'},{verb:'shall',hint:'first person only — wrong'},{verb:'must',hint:'strong certainty — too strong'},{verb:'might',hint:'weak possibility — too uncertain'}], feedback:'"Should" expresses an expectation or something that is supposed to happen. It is stronger than "might" but less certain than "will" or "must". Tracking information gives a reasonable expectation.' },
    ]
  },

  'Must / Ought to': {
    intro: 'MUST expresses strong necessity or logical deduction. OUGHT TO expresses moral duty or reasonable expectation. Both are tested in SSC for their nuanced differences.',
    items: [
      { modal:'must',    use:'Obligation (internal)', def_en:'Strong necessity arising from the speaker',   def_hi:'आंतरिक बाध्यता', example:'I <em>must</em> finish this report before midnight.', note:'Obligation felt personally.' },
      { modal:'must',    use:'Prohibition',           def_en:'Must not = it is forbidden',                 def_hi:'निषेध', example:'You <em>must not</em> disclose confidential data.', note:'"Must not" ≠ "need not". Must not = forbidden; need not = not necessary.' },
      { modal:'must',    use:'Logical deduction',     def_en:'A confident conclusion from evidence',       def_hi:'तार्किक निष्कर्ष', example:'He worked through the night; he <em>must</em> be exhausted.', note:'' },
      { modal:'ought to',use:'Moral obligation',      def_en:'What is the right or expected thing to do',  def_hi:'नैतिक कर्तव्य', example:'Citizens <em>ought to</em> pay their taxes honestly.', note:'"Ought to" is slightly weaker than "must" for obligation.' },
      { modal:'ought to',use:'Expectation',           def_en:'Something that should logically happen',     def_hi:'अपेक्षा', example:'With such preparation, she <em>ought to</em> pass easily.', note:'' },
    ],
    questions: [
      { id:'mod_mo_1', sentence:'You _____ not share your login credentials with anyone under any circumstances.', correct:'must', options:[{verb:'must',hint:'strong prohibition'},{verb:'should',hint:'advice — too soft'},{verb:'need',hint:'necessity — wrong'},{verb:'ought to',hint:'moral — not formal prohibition'}], feedback:'"Must not" expresses a strong prohibition — it is absolutely forbidden. "Should not" is softer advice. For security rules and strict policies, "must not" is the correct formal choice.' },
      { id:'mod_mo_2', sentence:'She has been studying for twelve hours; she _____ be mentally exhausted.', correct:'must', options:[{verb:'must',hint:'logical deduction from evidence'},{verb:'should',hint:'expectation — slightly weaker'},{verb:'may',hint:'50% possibility — not deduction'},{verb:'might',hint:'remote possibility — too weak'}], feedback:'"Must" expresses a near-certain logical deduction based on observed evidence (12 hours of study). "May/might" imply mere possibility. "Must be exhausted" = I am certain she is.' },
      { id:'mod_mo_3', sentence:'As responsible citizens, we _____ respect the laws of the country.', correct:'ought to', options:[{verb:'ought to',hint:'moral duty'},{verb:'must',hint:'obligation — stronger'},{verb:'will',hint:'future — wrong'},{verb:'can',hint:'ability — wrong'}], feedback:'"Ought to" expresses a moral obligation or duty — what responsible behaviour requires. "Must" is also possible but sounds more like a command. "Ought to" is more appropriate for civic/moral obligations.' },
    ]
  },

  'Need / Dare': {
    intro: 'NEED and DARE can function as either modal auxiliaries or main verbs. As modals, they do not take -s and are followed by the bare infinitive. SSC tests their modal usage.',
    items: [
      { modal:'need (modal)',  use:'Absence of necessity',  def_en:'It is not necessary (negative/question)',  def_hi:'ज़रूरत नहीं', example:'You <em>need not</em> attend if you are unwell.', note:'"Need not" = not necessary; different from "must not" = forbidden.' },
      { modal:'need (verb)',   use:'Necessity as main verb', def_en:'To require something (takes -s, to)',      def_hi:'ज़रूरत होना', example:'She <em>needs to</em> submit the form today.', note:'"Needs to" = main verb form.' },
      { modal:'dare (modal)',  use:'Courage to do something',def_en:'To have the boldness to do',              def_hi:'साहस होना', example:'He <em>dare not</em> challenge the chairman.', note:'Mostly used in negatives and questions.' },
      { modal:'dare (verb)',   use:'To be brave enough',    def_en:'Main verb form with "to"',                def_hi:'हिम्मत करना', example:'She <em>dared to</em> speak truth in public.', note:'"Dared to" = main verb, past tense.' },
    ],
    questions: [
      { id:'mod_nd_1', sentence:'You _____ worry about the examination; you are well prepared.', correct:'need not', options:[{verb:'need not',hint:'not necessary — modal'},{verb:'must not',hint:'forbidden — wrong meaning'},{verb:'should not',hint:'advice — different nuance'},{verb:'dare not',hint:'courage — wrong context'}], feedback:'"Need not" means it is not necessary. "Must not" means it is forbidden — completely different meaning. "You need not worry" = there is no necessity to worry.' },
      { id:'mod_nd_2', sentence:'He _____ confront the managing director even when the decision was clearly wrong.', correct:'dared to', options:[{verb:'dared to',hint:'had the courage — main verb'},{verb:'dare not',hint:'did not have courage — opposite'},{verb:'dare',hint:'modal — wrong tense'},{verb:'needed to',hint:'necessity — wrong meaning'}], feedback:'"Dared to" (main verb, past tense) means had the courage to do something. "Dare not" means lacked courage — the opposite. The word "even" implies the action required courage.' },
      { id:'mod_nd_3', sentence:'The volunteers _____ carry more than five kilograms each due to the weight restriction.', correct:'need not', options:[{verb:'need not',hint:'not necessary'},{verb:'must not',hint:'forbidden — wrong meaning'},{verb:'cannot',hint:'ability — wrong register'},{verb:'dare not',hint:'courage — wrong'}], feedback:'"Need not carry more" = it is not required to carry more. "Must not carry more" would mean it is forbidden. A weight restriction means you are not required to carry more, not that you are forbidden to.' },
    ]
  },

  'Used to / Would (past habits)': {
    intro: '"Used to" and "would" both describe past habits or states no longer true. However, USED TO can describe both past states and actions, while WOULD only describes repeated past actions — not states.',
    items: [
      { modal:'used to', use:'Past habit (action)',  def_en:'A repeated action in the past, now stopped',  def_hi:'भूतकालीन आदत (क्रिया)', example:'She <em>used to</em> jog every morning before work.', note:'' },
      { modal:'used to', use:'Past state',           def_en:'A state that existed in the past, now changed',def_hi:'भूतकालीन अवस्था', example:'This area <em>used to</em> be a dense forest.', note:'"Would" cannot replace "used to" for past states.' },
      { modal:'would',   use:'Past habit (action)',  def_en:'A repeated voluntary action in the past',     def_hi:'भूतकालीन आदत (स्वैच्छिक क्रिया)', example:'On Sundays, he <em>would</em> visit his grandfather.', note:'Cannot be used for states like "know", "believe", "live".' },
    ],
    questions: [
      { id:'mod_uu_1', sentence:'My grandfather _____ a famous musician in his youth.', correct:'used to be', options:[{verb:'used to be',hint:'past state — used to required'},{verb:'would be',hint:'would — wrong for states'},{verb:'was being',hint:'continuous — wrong'},{verb:'had been',hint:'past perfect — wrong context'}], feedback:'"Used to" is correct for past states (being a musician is a state). "Would be" cannot replace "used to" for states — this is the key distinction. "Would" is only for past repeated actions.' },
      { id:'mod_uu_2', sentence:'Every summer, the family _____ drive to the mountains for their annual vacation.', correct:'would', options:[{verb:'would',hint:'habitual past action with time signal'},{verb:'used to',hint:'also correct'},{verb:'could',hint:'ability — wrong'},{verb:'should',hint:'obligation — wrong'}], feedback:'Both "would" and "used to" are correct for past habitual actions. However, when a time adverb (every summer) is present and the action is clearly voluntary and repeated, "would" is often the preferred literary choice.' },
      { id:'mod_uu_3', sentence:'There _____ a magnificent temple at the site before it was demolished.', correct:'used to be', options:[{verb:'used to be',hint:'past state of existence'},{verb:'would be',hint:'would — wrong for existence/states'},{verb:'was',hint:'correct but "used to be" implies permanent change'},{verb:'had been',hint:'past perfect — implies specific sequence'}], feedback:'"Used to be" implies the temple existed as a state in the past and no longer does. "Would be" is wrong for states of existence. "Was" is correct but less emphatic — "used to be" clearly signals the permanent change.' },
    ]
  },

};
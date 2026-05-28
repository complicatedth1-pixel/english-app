/* ═══════════════════════════════════════════
   IDIOMS DATABASE
   Structure: DB_IDIOMS[SetName] = { setNumber, range, intro, idioms[] }
   NO hardcoded questions — AI generates them.
═══════════════════════════════════════════ */

const DB_IDIOMS = {

  'Set 1 (1–20)': {
    setNumber: 1, range: '1–20',
    intro: 'These 20 idioms are among the most frequently tested in SSC CGL, CHSL, and banking exams. They cover body language, attitude, and common situations.',
    idioms: [
      { id:'id_1_01', phrase:'A blessing in disguise',       meaning_en:'Something that seems bad initially but turns out to be good', meaning_hi:'जो बुरा लगे पर अच्छा निकले', example:'Losing that job was a blessing in disguise — he found a much better one.', note:'' },
      { id:'id_1_02', phrase:'Beat around the bush',         meaning_en:'To avoid speaking directly about a topic', meaning_hi:'घुमा-फिराकर बात करना', example:'Stop beating around the bush and tell me what happened.', note:'' },
      { id:'id_1_03', phrase:'Bite the bullet',              meaning_en:'To endure a painful or difficult situation bravely', meaning_hi:'दर्दनाक स्थिति को साहस से झेलना', example:'The company had to bite the bullet and announce massive layoffs.', note:'' },
      { id:'id_1_04', phrase:'Break the ice',                meaning_en:'To do something to ease tension in a social situation', meaning_hi:'अजनबीपन दूर करना', example:'She told a joke to break the ice at the conference.', note:'' },
      { id:'id_1_05', phrase:'Burn bridges',                 meaning_en:'To permanently destroy a relationship or opportunity', meaning_hi:'संबंध हमेशा के लिए खत्म करना', example:'Quitting so abruptly burned bridges with his former employer.', note:'' },
      { id:'id_1_06', phrase:'Caught red-handed',            meaning_en:'Discovered in the act of doing something wrong', meaning_hi:'रंगे हाथ पकड़ा जाना', example:'The cashier was caught red-handed stealing from the register.', note:'' },
      { id:'id_1_07', phrase:'Cost an arm and a leg',        meaning_en:'To be extremely expensive', meaning_hi:'बहुत महंगा होना', example:'The renovation of the historic building cost an arm and a leg.', note:'' },
      { id:'id_1_08', phrase:'Cut corners',                  meaning_en:'To do something poorly to save time or money', meaning_hi:'गुणवत्ता से समझौता करना', example:'The contractor cut corners, which led to the building collapsing.', note:'' },
      { id:'id_1_09', phrase:'Every cloud has a silver lining', meaning_en:'Every bad situation has a positive aspect', meaning_hi:'हर मुसीबत में उम्मीद की किरण', example:'She lost the match but improved her technique — every cloud has a silver lining.', note:'' },
      { id:'id_1_10', phrase:'Face the music',               meaning_en:'To accept the consequences of your actions', meaning_hi:'परिणाम भोगना', example:'After years of tax evasion, he finally had to face the music.', note:'' },
      { id:'id_1_11', phrase:'Give the benefit of the doubt', meaning_en:'To trust someone despite uncertainty', meaning_hi:'शक होने पर भी विश्वास करना', example:'The manager gave the new employee the benefit of the doubt despite the complaint.', note:'' },
      { id:'id_1_12', phrase:'Go back to the drawing board',  meaning_en:'To start planning something again from the beginning', meaning_hi:'नए सिरे से शुरू करना', example:'The prototype failed all tests, forcing the team to go back to the drawing board.', note:'' },
      { id:'id_1_13', phrase:'Hit the nail on the head',      meaning_en:'To describe something exactly right', meaning_hi:'बिल्कुल सही बात कहना', example:'Her analysis hit the nail on the head regarding the root causes of poverty.', note:'' },
      { id:'id_1_14', phrase:'Jump on the bandwagon',         meaning_en:'To follow a trend or popular activity', meaning_hi:'लहर में बह जाना', example:'Many brands jumped on the bandwagon of environmental campaigns.', note:'' },
      { id:'id_1_15', phrase:'Kill two birds with one stone',  meaning_en:'To accomplish two things with a single action', meaning_hi:'एक तीर से दो निशाने', example:'By working from home, she killed two birds with one stone — saving time and money.', note:'' },
      { id:'id_1_16', phrase:'Let the cat out of the bag',    meaning_en:'To accidentally reveal a secret', meaning_hi:'अनजाने में राज़ खुल जाना', example:'He let the cat out of the bag about the surprise party.', note:'' },
      { id:'id_1_17', phrase:'Miss the boat',                 meaning_en:'To miss an opportunity', meaning_hi:'अवसर गंवाना', example:'By delaying the application, she missed the boat for the scholarship.', note:'' },
      { id:'id_1_18', phrase:'Once in a blue moon',           meaning_en:'Very rarely', meaning_hi:'बहुत कम, कभी-कभी ही', example:'He visits his hometown once in a blue moon.', note:'' },
      { id:'id_1_19', phrase:'Pull someone\'s leg',           meaning_en:'To joke or tease someone', meaning_hi:'मज़ाक उड़ाना', example:'Don\'t worry — he was only pulling your leg about the exam results.', note:'' },
      { id:'id_1_20', phrase:'Sit on the fence',              meaning_en:'To avoid taking sides in a dispute', meaning_hi:'बीच में रहना, पक्ष न लेना', example:'The politician sat on the fence instead of supporting either side of the debate.', note:'' },
    ]
  },

  'Set 2 (21–40)': {
    setNumber: 2, range: '21–40',
    intro: 'This set focuses on idioms related to effort, secrecy, consequences and judgement — frequently appearing in SSC comprehension passages and vocabulary tests.',
    idioms: [
      { id:'id_2_01', phrase:'Spill the beans',              meaning_en:'To reveal secret information', meaning_hi:'राज़ उगलना', example:'One of the insiders spilled the beans about the merger.', note:'' },
      { id:'id_2_02', phrase:'Storm in a teacup',            meaning_en:'A big fuss over something trivial', meaning_hi:'तिल का ताड़ बनाना', example:'The argument was a storm in a teacup — it was over within minutes.', note:'' },
      { id:'id_2_03', phrase:'The ball is in your court',    meaning_en:'It is your turn to take action or make a decision', meaning_hi:'अब तुम्हारी बारी है', example:'I have made the offer — the ball is in your court now.', note:'' },
      { id:'id_2_04', phrase:'Throw caution to the wind',    meaning_en:'To take a risk without worrying about consequences', meaning_hi:'बिना सोचे जोखिम उठाना', example:'He threw caution to the wind and invested his entire savings in the startup.', note:'' },
      { id:'id_2_05', phrase:'Tie the knot',                 meaning_en:'To get married', meaning_hi:'शादी करना', example:'The couple tied the knot in a private ceremony.', note:'' },
      { id:'id_2_06', phrase:'Turn a blind eye',             meaning_en:'To deliberately ignore a problem or wrongdoing', meaning_hi:'आंखें मूंद लेना', example:'The supervisor turned a blind eye to the safety violations.', note:'' },
      { id:'id_2_07', phrase:'Under the weather',            meaning_en:'Feeling slightly ill or unwell', meaning_hi:'तबीयत ठीक न होना', example:'She felt under the weather and skipped the morning briefing.', note:'' },
      { id:'id_2_08', phrase:'Up in the air',                meaning_en:'Uncertain; not yet decided', meaning_hi:'अनिश्चित', example:'Plans for the annual retreat are still up in the air.', note:'' },
      { id:'id_2_09', phrase:'Wet behind the ears',          meaning_en:'Inexperienced or immature', meaning_hi:'कच्चा, अनुभवहीन', example:'He is still wet behind the ears but shows great potential.', note:'' },
      { id:'id_2_10', phrase:'Wolf in sheep\'s clothing',    meaning_en:'A dangerous person who appears harmless', meaning_hi:'भेड़ की खाल में भेड़िया', example:'The charming investor turned out to be a wolf in sheep\'s clothing.', note:'' },
      { id:'id_2_11', phrase:'Bury the hatchet',             meaning_en:'To end a conflict and make peace', meaning_hi:'दुश्मनी भूल जाना', example:'After years of rivalry, the two leaders finally buried the hatchet.', note:'' },
      { id:'id_2_12', phrase:'A penny for your thoughts',    meaning_en:'Used to ask what someone is thinking about', meaning_hi:'क्या सोच रहे हो?', example:'You have been quiet all evening — a penny for your thoughts.', note:'' },
      { id:'id_2_13', phrase:'Add fuel to the fire',         meaning_en:'To make a bad situation even worse', meaning_hi:'आग में घी डालना', example:'His provocative speech added fuel to the fire during the protests.', note:'' },
      { id:'id_2_14', phrase:'Bite more than one can chew',  meaning_en:'To take on more responsibility than you can handle', meaning_hi:'हद से ज़्यादा जिम्मेदारी लेना', example:'By managing three projects simultaneously, she bit off more than she could chew.', note:'' },
      { id:'id_2_15', phrase:'Blow one\'s own trumpet',      meaning_en:'To boast about one\'s own achievements', meaning_hi:'अपनी तारीफ आप करना', example:'Despite his success, he never blew his own trumpet.', note:'' },
      { id:'id_2_16', phrase:'Burn the midnight oil',        meaning_en:'To work or study late into the night', meaning_hi:'देर रात तक काम/पढ़ाई करना', example:'The team burned the midnight oil to meet the project deadline.', note:'' },
      { id:'id_2_17', phrase:'Carry the day',                meaning_en:'To win or be successful', meaning_hi:'जीत हासिल करना', example:'Her powerful argument carried the day in the boardroom debate.', note:'' },
      { id:'id_2_18', phrase:'Come a long way',              meaning_en:'To make significant progress', meaning_hi:'बहुत तरक्की करना', example:'Renewable energy technology has come a long way in the last decade.', note:'' },
      { id:'id_2_19', phrase:'Cut from the same cloth',      meaning_en:'To be very similar in character', meaning_hi:'एक ही थैली के चट्टे-बट्टे', example:'Those two brothers are cut from the same cloth — both are dishonest.', note:'' },
      { id:'id_2_20', phrase:'Dark horse',                   meaning_en:'An unknown competitor who unexpectedly succeeds', meaning_hi:'अप्रत्याशित विजेता', example:'The small-town candidate proved to be a dark horse in the election.', note:'' },
    ]
  },

  'Set 3 (41–60)': {
    setNumber: 3, range: '41–60',
    intro: 'This set contains idioms about pressure, deception, persistence and relationships — all commonly featured in SSC close reading and comprehension exercises.',
    idioms: [
      { id:'id_3_01', phrase:'Don\'t judge a book by its cover', meaning_en:'Do not judge someone by appearances alone', meaning_hi:'बाहरी दिखावे से मत परखो', example:'The quiet student turned out to be brilliant — don\'t judge a book by its cover.', note:'' },
      { id:'id_3_02', phrase:'Eleventh hour',                meaning_en:'At the last possible moment', meaning_hi:'आखिरी क्षण में', example:'The agreement was signed at the eleventh hour before the deadline.', note:'' },
      { id:'id_3_03', phrase:'Every dog has its day',        meaning_en:'Everyone gets a chance to succeed at some point', meaning_hi:'हर किसी का वक्त आता है', example:'After years of struggle, he finally got recognition — every dog has its day.', note:'' },
      { id:'id_3_04', phrase:'Feather in one\'s cap',        meaning_en:'An achievement or honour to be proud of', meaning_hi:'सम्मान की बात', example:'Winning the national award was a feather in her cap.', note:'' },
      { id:'id_3_05', phrase:'Fish out of water',            meaning_en:'Someone who is uncomfortable in their surroundings', meaning_hi:'जहां फिट न हो, वहां रहना', example:'At the formal gala, the farmer felt like a fish out of water.', note:'' },
      { id:'id_3_06', phrase:'Get cold feet',                meaning_en:'To suddenly become afraid or reluctant to do something', meaning_hi:'हिम्मत खोना', example:'He got cold feet before the interview and withdrew his application.', note:'' },
      { id:'id_3_07', phrase:'Give someone the cold shoulder', meaning_en:'To deliberately ignore someone', meaning_hi:'जानबूझकर अनदेखा करना', example:'Ever since the argument, she has been giving him the cold shoulder.', note:'' },
      { id:'id_3_08', phrase:'Go the extra mile',            meaning_en:'To make more effort than is expected', meaning_hi:'उम्मीद से ज़्यादा मेहनत करना', example:'The hotel staff always goes the extra mile for guest satisfaction.', note:'' },
      { id:'id_3_09', phrase:'Hang in there',               meaning_en:'To persist despite difficulties', meaning_hi:'टिके रहना', example:'The economy is struggling, but experts say we need to hang in there.', note:'' },
      { id:'id_3_10', phrase:'Have a chip on one\'s shoulder', meaning_en:'To feel resentful about something and be easily angered', meaning_hi:'नाराज़गी और गुस्से की भावना', example:'He has had a chip on his shoulder ever since he was passed over for promotion.', note:'' },
      { id:'id_3_11', phrase:'Hit the ground running',       meaning_en:'To start something energetically without delay', meaning_hi:'बिना देरी के पूरे दम से शुरू करना', example:'The new CEO hit the ground running with a major restructuring plan.', note:'' },
      { id:'id_3_12', phrase:'Hit the sack',                 meaning_en:'To go to bed', meaning_hi:'सोने जाना', example:'After a long day of meetings, she decided to hit the sack early.', note:'' },
      { id:'id_3_13', phrase:'In a nutshell',                meaning_en:'In brief; summing up the most essential points', meaning_hi:'संक्षेप में', example:'In a nutshell, the proposal requires cutting costs and increasing revenue.', note:'' },
      { id:'id_3_14', phrase:'In the same boat',             meaning_en:'In the same difficult situation as others', meaning_hi:'एक जैसी मुसीबत में होना', example:'During the lockdown, businesses across sectors were in the same boat.', note:'' },
      { id:'id_3_15', phrase:'Keep a stiff upper lip',       meaning_en:'To remain calm and controlled during hardship', meaning_hi:'मुसीबत में चेहरे पर शिकन न लाना', example:'Despite her personal loss, she kept a stiff upper lip throughout the trial.', note:'' },
      { id:'id_3_16', phrase:'Kick the bucket',              meaning_en:'To die (informal)', meaning_hi:'मर जाना (अनौपचारिक)', example:'The old landlord kicked the bucket leaving behind no will.', note:'Informal — avoid in formal writing.' },
      { id:'id_3_17', phrase:'Leave no stone unturned',      meaning_en:'To try every possible option in order to achieve something', meaning_hi:'कोई कोर-कसर न छोड़ना', example:'The investigators left no stone unturned in their search for evidence.', note:'' },
      { id:'id_3_18', phrase:'Let sleeping dogs lie',        meaning_en:'To avoid reviving old problems', meaning_hi:'सोते हुए कुत्ते को मत जगाओ', example:'Why bring up the old dispute? Let sleeping dogs lie.', note:'' },
      { id:'id_3_19', phrase:'Make ends meet',               meaning_en:'To have just enough money to live on', meaning_hi:'गुज़ारा करना', example:'With rising inflation, many middle-class families are struggling to make ends meet.', note:'' },
      { id:'id_3_20', phrase:'More than meets the eye',      meaning_en:'More complex or significant than it appears', meaning_hi:'जितना दिखता है उससे ज़्यादा है', example:'The case is more than meets the eye — it involves multiple agencies.', note:'' },
    ]
  },

  'Set 4 (61–80)': {
    setNumber: 4, range: '61–80',
    intro: 'Advanced idioms covering leadership, risk, timing and social dynamics. These are especially common in SSC CGL tier 2 and descriptive paper contexts.',
    idioms: [
      { id:'id_4_01', phrase:'Nail in the coffin',           meaning_en:'Something that ensures the failure of something already in decline', meaning_hi:'अंतिम प्रहार', example:'The bank\'s withdrawal of funding was the final nail in the coffin for the startup.', note:'' },
      { id:'id_4_02', phrase:'Not my cup of tea',            meaning_en:'Something one does not like or is not interested in', meaning_hi:'मेरी पसंद नहीं', example:'Abstract art is not really my cup of tea.', note:'' },
      { id:'id_4_03', phrase:'Off the top of one\'s head',  meaning_en:'Without thinking carefully or checking facts', meaning_hi:'बिना सोचे-समझे, तुरंत', example:'Off the top of my head, I cannot recall the exact figures.', note:'' },
      { id:'id_4_04', phrase:'On the fence',                meaning_en:'Undecided or neutral on an issue', meaning_hi:'किसी पक्ष में न होना', example:'The delegate remained on the fence about the proposed alliance.', note:'' },
      { id:'id_4_05', phrase:'On thin ice',                 meaning_en:'In a risky or precarious situation', meaning_hi:'खतरनाक स्थिति में होना', example:'After the third warning, he knew he was on thin ice with his employer.', note:'' },
      { id:'id_4_06', phrase:'Open a can of worms',         meaning_en:'To create a complicated problem by trying to solve another', meaning_hi:'नई मुसीबत खड़ी करना', example:'The audit opened a can of worms revealing multiple layers of fraud.', note:'' },
      { id:'id_4_07', phrase:'Over the moon',              meaning_en:'Extremely happy or excited', meaning_hi:'बेहद खुश', example:'She was over the moon when she received the scholarship offer.', note:'' },
      { id:'id_4_08', phrase:'Pass the buck',              meaning_en:'To shift responsibility to someone else', meaning_hi:'ज़िम्मेदारी दूसरे पर डालना', example:'Instead of owning the mistake, the manager passed the buck to his team.', note:'' },
      { id:'id_4_09', phrase:'Play devil\'s advocate',     meaning_en:'To argue the opposite side to test the strength of an argument', meaning_hi:'विपरीत पक्ष में तर्क देना', example:'I am not against the plan — I am just playing devil\'s advocate.', note:'' },
      { id:'id_4_10', phrase:'Put one\'s foot in one\'s mouth', meaning_en:'To say something embarrassing or tactless', meaning_hi:'गलत वक्त पर गलत बात कहना', example:'He really put his foot in his mouth by commenting on her weight.', note:'' },
      { id:'id_4_11', phrase:'Read between the lines',     meaning_en:'To understand the hidden meaning', meaning_hi:'छिपे अर्थ को समझना', example:'Reading between the lines, it was clear the review was not positive.', note:'' },
      { id:'id_4_12', phrase:'Rule of thumb',              meaning_en:'A broadly accurate practical principle', meaning_hi:'सामान्य नियम', example:'As a rule of thumb, spend no more than 30% of your income on housing.', note:'' },
      { id:'id_4_13', phrase:'Shoot oneself in the foot',  meaning_en:'To do something that harms one\'s own interests', meaning_hi:'खुद को नुकसान पहुंचाना', example:'By making unrealistic promises, he shot himself in the foot.', note:'' },
      { id:'id_4_14', phrase:'Sit on the fence',           meaning_en:'To avoid committing to a decision or opinion', meaning_hi:'पक्ष न लेना', example:'The government cannot keep sitting on the fence regarding climate policy.', note:'' },
      { id:'id_4_15', phrase:'Skating on thin ice',        meaning_en:'Doing something risky with possible serious consequences', meaning_hi:'जोखिम भरी जगह चलना', example:'By ignoring the compliance rules, the firm was skating on thin ice.', note:'' },
      { id:'id_4_16', phrase:'Spanner in the works',       meaning_en:'Something that disrupts or ruins a plan (British)', meaning_hi:'योजना में बाधा', example:'The unexpected strike threw a spanner in the works of the factory\'s production schedule.', note:'' },
      { id:'id_4_17', phrase:'Steal someone\'s thunder',  meaning_en:'To take credit or attention from someone else', meaning_hi:'किसी की चमक छीनना', example:'The junior employee stole the senior\'s thunder by presenting the idea first.', note:'' },
      { id:'id_4_18', phrase:'String along',              meaning_en:'To deceive someone into believing something false for a long time', meaning_hi:'झूठी उम्मीदें देते रहना', example:'The recruiter strung him along with promises of a job offer for months.', note:'' },
      { id:'id_4_19', phrase:'Take the bull by the horns', meaning_en:'To deal with a difficult problem directly and courageously', meaning_hi:'समस्या का सीधे सामना करना', example:'The new minister took the bull by the horns and tackled corruption head-on.', note:'' },
      { id:'id_4_20', phrase:'The elephant in the room',  meaning_en:'An obvious problem that no one wants to discuss', meaning_hi:'स्पष्ट समस्या जिसे कोई न उठाए', example:'Rising NPAs were the elephant in the room at the banking conference.', note:'' },
    ]
  },

  'Set 5 (81–100)': {
    setNumber: 5, range: '81–100',
    intro: 'The final set covers idioms about knowledge, control, opportunity and change. Mastering these completes your core idiom vocabulary for SSC and banking exams.',
    idioms: [
      { id:'id_5_01', phrase:'The tip of the iceberg',       meaning_en:'A small, visible part of a larger hidden problem', meaning_hi:'बड़ी समस्या का छोटा सा हिस्सा', example:'The disclosed fraud was merely the tip of the iceberg.', note:'' },
      { id:'id_5_02', phrase:'Throw in the towel',           meaning_en:'To give up or admit defeat', meaning_hi:'हार मान लेना', example:'Despite the setbacks, the entrepreneur refused to throw in the towel.', note:'' },
      { id:'id_5_03', phrase:'Throw someone under the bus',  meaning_en:'To blame someone else to protect oneself', meaning_hi:'अपना बचाव करने के लिए दूसरे को बलि देना', example:'To avoid punishment, the manager threw his own team under the bus.', note:'' },
      { id:'id_5_04', phrase:'Tickle someone\'s fancy',      meaning_en:'To appeal to or interest someone', meaning_hi:'किसी को पसंद आना', example:'The innovative design tickled the client\'s fancy immediately.', note:'' },
      { id:'id_5_05', phrase:'To be in someone\'s shoes',    meaning_en:'To experience someone else\'s situation', meaning_hi:'किसी की जगह होना', example:'I would not want to be in the prime minister\'s shoes during this crisis.', note:'' },
      { id:'id_5_06', phrase:'Touch and go',                meaning_en:'Uncertain, with a risk of failure', meaning_hi:'अनिश्चित, खतरनाक', example:'The patient\'s condition was touch and go for the first 48 hours.', note:'' },
      { id:'id_5_07', phrase:'Under one\'s belt',            meaning_en:'Having acquired experience or achievement', meaning_hi:'अनुभव हासिल करना', example:'With two successful projects under her belt, she was promoted quickly.', note:'' },
      { id:'id_5_08', phrase:'Up and coming',               meaning_en:'Likely to become successful in the future', meaning_hi:'उभरता हुआ, आशाजनक', example:'She is one of the most up and coming scientists in the country.', note:'' },
      { id:'id_5_09', phrase:'Vicious circle',              meaning_en:'A chain of events where each problem makes the next one worse', meaning_hi:'दुष्चक्र', example:'Poverty and poor education form a vicious circle that is hard to break.', note:'' },
      { id:'id_5_10', phrase:'Weather the storm',           meaning_en:'To survive a difficult period', meaning_hi:'कठिन समय से निकलना', example:'The company managed to weather the storm of the 2008 recession.', note:'' },
      { id:'id_5_11', phrase:'Whole nine yards',            meaning_en:'Everything that is possible or available', meaning_hi:'पूरा का पूरा, सब कुछ', example:'The event was planned perfectly — catering, décor, entertainment — the whole nine yards.', note:'' },
      { id:'id_5_12', phrase:'Wild goose chase',            meaning_en:'A futile search or pointless pursuit', meaning_hi:'व्यर्थ की भागदौड़', example:'The investigation turned into a wild goose chase with no leads.', note:'' },
      { id:'id_5_13', phrase:'Win hands down',             meaning_en:'To win easily and decisively', meaning_hi:'आसानी से जीत जाना', example:'The defending champion won the tournament hands down.', note:'' },
      { id:'id_5_14', phrase:'Wrap one\'s head around',    meaning_en:'To understand something complex', meaning_hi:'समझ में आना', example:'The complexity of the new tax code was difficult to wrap one\'s head around.', note:'' },
      { id:'id_5_15', phrase:'Write on the wall',          meaning_en:'A clear sign that something bad is about to happen', meaning_hi:'आने वाले संकट के संकेत', example:'The falling revenues were the writing on the wall for the company\'s collapse.', note:'' },
      { id:'id_5_16', phrase:'You can\'t teach an old dog new tricks', meaning_en:'It is difficult to make people change established habits', meaning_hi:'पुरानी आदतें नहीं बदलतीं', example:'He refused to learn the new software — you can\'t teach an old dog new tricks.', note:'' },
      { id:'id_5_17', phrase:'Zero in on',                meaning_en:'To focus attention on or identify exactly', meaning_hi:'ध्यान केंद्रित करना; सटीक पहचान करना', example:'After months of investigation, police finally zeroed in on the main suspect.', note:'' },
      { id:'id_5_18', phrase:'Come full circle',          meaning_en:'To return to the original situation or starting point', meaning_hi:'पूरे चक्र में वापस आना', example:'After working abroad for decades, he came full circle and returned to his hometown.', note:'' },
      { id:'id_5_19', phrase:'Burn one\'s boats',         meaning_en:'To take an irreversible action leaving no way back', meaning_hi:'वापसी का रास्ता बंद करना', example:'By publicising the allegations, she had effectively burned her boats.', note:'' },
      { id:'id_5_20', phrase:'A drop in the ocean',       meaning_en:'A small and insignificant amount compared to what is needed', meaning_hi:'ऊंट के मुंह में जीरा', example:'The government\'s relief package was a mere drop in the ocean for the displaced families.', note:'' },
    ]
  },

};
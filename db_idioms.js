/* ═══════════════════════════════════════════
   IDIOMS DATABASE
   Structure: DB_IDIOMS[SetName] = { setNumber, range, intro, idioms[] }
   NO hardcoded questions — AI generates them.
═══════════════════════════════════════════ */

const DB_IDIOMS = {

  'Set 1': {
  setNumber: 1,
  range: '1–20',
  intro: 'Beginnings, initial evaluations, aur basic behavioral concepts is initial set ka foundation hain.',
  idioms: [
    { 
      id: 'idiom_1', 
      phrase: 'A hot potato', 
      meaning_en: 'A controversial issue or difficult situation that is awkward to deal with and passed quickly to others', 
      meaning_hi: 'एक विवादास्पद मुद्दा जिसे कोई संभालना नहीं चाहता', 
      example: 'The new tax policy became a hot potato for the political party during elections.', 
      note: 'Derived from the physical action of dropping a cooked potato that is too hot to hold.' 
    },
    { 
      id: 'idiom_2', 
      phrase: 'A penny for your thoughts', 
      meaning_en: 'A way of asking what someone is thinking about when they have been quiet for a long time', 
      meaning_hi: 'आप क्या सोच रहे हैं? (मौन तोड़ने का तरीका)', 
      example: 'You have been staring out the window for ages; a penny for your thoughts?', 
      note: 'Dating back to the 16th century when a penny was a small token offered to share a secret.' 
    },
    { 
      id: 'idiom_3', 
      phrase: 'Actions speak louder than words', 
      meaning_en: 'What people actually do carries more weight and truth than what they merely say they will do', 
      meaning_hi: 'कथनी से करनी ज्यादा असरदार होती है / काम बोलता है', 
      example: 'He promises to clean the garage every week, but actions speak louder than words.', 
      note: 'An ancient moral concept emphasizing real performance over empty promises.' 
    },
    { 
      id: 'idiom_4', 
      phrase: 'Add insult to injury', 
      meaning_en: 'To worsen an already unfavorable or painful situation by adding a humiliating or offensive action', 
      meaning_hi: 'जले पर नमक छिड़कना', 
      example: 'They lost the tournament match, and to add insult to injury, their bus broke down on the way home.', 
      note: 'From an ancient fable where a bald man strikes his own head while trying to kill a fly.' 
    },
    { 
      id: 'idiom_5', 
      phrase: 'An arm and a leg', 
      meaning_en: 'An incredibly large, excessive, or exorbitant amount of money', 
      meaning_hi: 'बहुत ही महंगी वस्तु या भारी कीमत', 
      example: 'Getting front-row seats for the world cup final cost us an arm and a leg.', 
      note: 'Hyperbole suggesting an item costs as much as precious parts of the body.' 
    },
    { 
      id: 'idiom_6', 
      phrase: 'At the drop of a hat', 
      meaning_en: 'Instantly, immediately, and without any hesitation or prior planning', 
      meaning_hi: 'तुरंत / बिना किसी हिचकिचाहट के', 
      example: 'She loves traveling so much that she will pack her bags and leave at the drop of a hat.', 
      note: 'From old street fights or races that began the moment a hat was dropped as a signal.' 
    },
    { 
      id: 'idiom_7', 
      phrase: 'Back to the drawing board', 
      meaning_en: 'Starting a failed project, design, or strategy entirely over from the very beginning', 
      meaning_hi: 'नए सिरे से शुरुआत करना क्योंकि पुरानी योजना असफल हो गई', 
      example: 'Our marketing campaign failed to generate leads, so it is back to the drawing board.', 
      note: 'Coined by World War II artists depicting aircraft engineers starting fresh blueprints.' 
    },
    { 
      id: 'idiom_8', 
      phrase: 'Barking up the wrong tree', 
      meaning_en: 'Pursuing a mistaken line of thought, making an incorrect assumption, or accusing the wrong person', 
      meaning_hi: 'गलत दिशा में प्रयास करना या किसी बेकसूर पर शक करना', 
      example: 'If you think I stole your lunch, you are barking up the wrong tree; I wasn\'t even in the office.', 
      note: 'From hunting dogs barking at an empty tree while the prey has escaped elsewhere.' 
    },
    { 
      id: 'idiom_9', 
      phrase: 'Beat around the bush', 
      meaning_en: 'Avoiding the main, important point of a topic because it is uncomfortable or awkward', 
      meaning_hi: 'इधर-उधर की बातें करना / मुख्य मुद्दे से बचना', 
      example: 'Stop beating around the bush and tell me frankly if you have completed the assignment.', 
      note: 'From historical hunting where beaters hit surrounding foliage to flush out hidden game.' 
    },
    { 
      id: 'idiom_10', 
      phrase: 'Best of both worlds', 
      meaning_en: 'A highly advantageous situation where you enjoy the benefits of two completely different options', 
      meaning_hi: 'दोनों हाथों में लड्डू होना / दो अलग परिस्थितियों का पूरा लाभ उठाना', 
      example: 'Living in a quiet village while working in the nearby tech hub gives her the best of both worlds.', 
      note: 'Refers to achieving an ideal, conflict-free compromise.' 
    },
    { 
      id: 'idiom_11', 
      phrase: 'Bite off more than you can chew', 
      meaning_en: 'Taking on a major task, responsibility, or project that is far too difficult for your capacity', 
      meaning_hi: 'अपनी क्षमता से अधिक जिम्मेदारी उठा लेना', 
      example: 'By accepting three freelance jobs alongside his university classes, he bit off more than he could chew.', 
      note: 'A warning against overestimating one\'s capability, like taking a massive mouthful of food.' 
    },
    { 
      id: 'idiom_12', 
      phrase: 'Bite the bullet', 
      meaning_en: 'Forcing yourself to face a painful, inevitable, or difficult situation with courage', 
      meaning_hi: 'मजबूरी में किसी कठिन या अप्रिय परिस्थिति का डटकर सामना करना', 
      example: 'I have been avoiding the dental checkup, but I need to bite the bullet and go tomorrow.', 
      note: 'From old battlefield surgeries where wounded soldiers bit lead bullets to endure pain without anesthesia.' 
    },
    { 
      id: 'idiom_13', 
      phrase: 'Blessing in disguise', 
      meaning_en: 'Something that initially appears to be a bad event but ultimately leads to a highly positive result', 
      meaning_hi: 'आफत के रूप में छुपा हुआ वरदान', 
      example: 'Losing that old job was a blessing in disguise because it forced me to start my dream business.', 
      note: 'Refers to a divine or fortunate intervention hiding behind a temporary mask of misfortune.' 
    },
    { 
      id: 'idiom_14', 
      phrase: 'Burn the midnight oil', 
      meaning_en: 'To study, read, or work diligently deep into the night or early morning hours', 
      meaning_hi: 'देर रात तक जागकर कड़ी मेहनत करना', 
      example: 'The research team had to burn the midnight oil to submit the proposal before the deadline.', 
      note: 'Refers to using oil-fueled lamps for late-night labor prior to the widespread use of electricity.' 
    },
    { 
      id: 'idiom_15', 
      phrase: 'Don\'t judge a book by its cover', 
      meaning_en: 'You should not form an absolute opinion on the true character or value of something based purely on looks', 
      meaning_hi: 'बाहरी रूप-रंग से किसी के असली गुणों का अंदाजा नहीं लगाना चाहिए', 
      example: 'The restaurant looked shabby from the outside, but the food was incredible—never judge a book by its cover.', 
      note: 'A popular reminder that superficial packaging can be highly deceptive.' 
    },
    { 
      id: 'idiom_16', 
      phrase: 'Caught between a rock and a hard place', 
      meaning_en: 'Facing a severe dilemma where you must choose between two equally unpleasant or difficult options', 
      meaning_hi: 'आगे कुआँ पीछे खाई / दो कठिन विकल्पों के बीच फंसना', 
      example: 'If I accept the transfer I leave my family, but if I refuse I lose my job; I am caught between a rock and a hard place.', 
      note: 'Similar to the mythological concept of navigating between Scylla and Charybdis.' 
    },
    { 
      id: 'idiom_17', 
      phrase: 'Cross that bridge when you come to it', 
      meaning_en: 'Deal with a potential future problem only when it actually happens, rather than worrying beforehand', 
      meaning_hi: 'मुसीबत आने पर ही उसकी चिंता करना / पहले से परेशान न होना', 
      example: 'We might run out of budget next year, but let\'s cross that bridge when we come to it.', 
      note: 'Advises against borrowing trouble from the future.' 
    },
    { 
      id: 'idiom_18', 
      phrase: 'Cry over spilled milk', 
      meaning_en: 'Wasting time and energy regretting or complaining about past mistakes that cannot be undone', 
      meaning_hi: 'बीती बातों पर पछताना (अब पछताए होत क्या जब चिड़ियाँ चुग गई खेत)', 
      example: 'The contract is already signed and lost, so there is no use crying over spilled milk now.', 
      note: 'A reminder that focusing on unchangeable losses is entirely useless.' 
    },
    { 
      id: 'idiom_19', 
      phrase: 'Cry wolf', 
      meaning_en: 'To repeatedly raise false alarms so that people eventually ignore you when a real danger occurs', 
      meaning_hi: 'झूठा हल्ला मचाना / बार-बार मदद का झूठा नाटक करना', 
      example: 'If you keep crying wolf about feeling sick, no one will believe you when you actually need a doctor.', 
      note: 'Derived directly from Aesop\'s famous fable about the shepherd boy who tricked villagers.' 
    },
    { 
      id: 'idiom_20', 
      phrase: 'Curiosity killed the cat', 
      meaning_en: 'A warning that being overly inquisitive or interfering in matters that do not concern you can lead to danger', 
      meaning_hi: 'ज्यादा उत्सुकता या दूसरों के मामले में तांक-झांक करना भारी पड़ सकता है', 
      example: 'Don\'t try to crack open that old locked metal locker; remember curiosity killed the cat.', 
      note: 'Implies that cats are naturally nosy creatures that often trap themselves in hazardous spots.' 
    }
  ]
},
'Set 2': {
  setNumber: 2,
  range: '21–40',
  intro: 'Efficiency markers, physical states, aur shortcuts across plans is set ka focus area hain.',
  idioms: [
    { 
      id: 'idiom_21', 
      phrase: 'Cut corners', 
      meaning_en: 'To do a task in the cheapest, fastest, or easiest way possible while sacrificing quality and safety standards', 
      meaning_hi: 'समय या पैसा बचाने के लिए काम में कोताही बरतना / काम चोरी करना', 
      example: 'The builders cut corners on the concrete foundation, causing the wall to fracture within months.', 
      note: 'Derived from horse carriages taking a hazardous shorter route across field corners rather than staying on tracks.' 
    },
    { 
      id: 'idiom_22', 
      phrase: 'Cut the mustard', 
      meaning_en: 'To meet the expected performance standards, succeed, or prove to be adequate for a challenging job', 
      meaning_hi: 'उम्मीद के मुताबिक प्रदर्शन करना / कसौटी पर खरा उतरना', 
      example: 'We had to let the new developer go because his programming speed just didn\'t cut the mustard.', 
      note: 'From the old slang meaning of "mustard" as something highly genuine, sharp, or excellent.' 
    },
    { 
      id: 'idiom_23', 
      phrase: 'Devil\'s advocate', 
      meaning_en: 'To argue against a popular idea or take an opposing viewpoint simply for the sake of alternate debate', 
      meaning_hi: 'सिर्फ बहस की बारीकियों को जांचने के लिए जानबूझकर विपरीत पक्ष लेना', 
      example: 'I agree with the expansion plan, but let me play devil\'s advocate for a minute to find the flaws.', 
      note: 'Originated from an official Vatican role designed to thoroughly inspect defects in canonization cases.' 
    },
    { 
      id: 'idiom_24', 
      phrase: 'Don\'t count your chickens before they hatch', 
      meaning_en: 'Do not depend on or celebrate a future success or profit until it is completely guaranteed to happen', 
      meaning_hi: 'काम पूरा होने से पहले ही उसकी सफलता को पक्का मानकर योजना न बनाना', 
      example: 'You might get the global scholarship, but don\'t count your chickens before they hatch.', 
      note: 'Based on the traditional moral fable about a milkmaid who lost her milk while dreaming of future wealth.' 
    },
    { 
      id: 'idiom_25', 
      phrase: 'Don\'t put all your eggs in one basket', 
      meaning_en: 'Do not risk all your resources, funds, or efforts on a single investment plan or vulnerable scheme', 
      meaning_hi: 'एक ही जगह अपनी सारी पूंजी या किस्मत दांव पर न लगाना', 
      example: 'Spread your money across fixed deposits and mutual funds; don\'t put all your eggs in one basket.', 
      note: 'A timeless warning that if the single basket drops, every resource inside breaks instantly.' 
    },
    { 
      id: 'idiom_26', 
      phrase: 'Drastic times call for drastic measures', 
      meaning_en: 'Extreme, dangerous, or desperate situations require severe and radical actions to fix them', 
      meaning_hi: 'आपातकालीन परिस्थितियों में कड़े और असाधारण कदम उठाने पड़ते हैं', 
      example: 'When the company faced sudden bankruptcy, cutting half the workforce was a drastic measure.', 
      note: 'Derived from ancient Greek medical adages stating that extreme diseases need extreme cures.' 
    },
    { 
      id: 'idiom_27', 
      phrase: 'Elvis has left the building', 
      meaning_en: 'A humorous phrase indicating that a show, event, or gathering has completely concluded and everyone should leave', 
      meaning_hi: 'कार्यक्रम पूरी तरह समाप्त हो चुका है / अब रुकने का कोई फायदा नहीं', 
      example: 'The security started turning off the stadium lights; Elvis has left the building.', 
      note: 'Originally announced at the end of Elvis Presley concerts to disperse fans hoping for an encore.' 
    },
    { 
      id: 'idiom_28', 
      phrase: 'Every cloud has a silver lining', 
      meaning_en: 'Every difficult, sad, or negative situation contains a hidden positive aspect or cause for hope', 
      meaning_hi: 'हर निराशा में आशा की एक किरण छुपी होती है / हर बुरे वक्त के बाद अच्छा वक्त आता है', 
      example: 'Losing my flight turned out to be fine as I met an old friend at the airport; every cloud has a silver lining.', 
      note: 'A poetic metaphor coined by John Milton, referring to the sun shining behind dark rain clouds.' 
    },
    { 
      id: 'idiom_29', 
      phrase: 'Far cry from', 
      meaning_en: 'Something that is completely different from, inferior to, or far away in quality from another thing', 
      meaning_hi: 'किसी चीज से बिल्कुल अलग या बहुत दूर होना', 
      example: 'The final low-budget movie was a far cry from the magnificent script we originally read.', 
      note: 'Refers to a distance too great to be bridged even by a loud human shout.' 
    },
    { 
      id: 'idiom_30', 
      phrase: 'Feel under the weather', 
      meaning_en: 'Feeling slightly sick, unwell, exhausted, or out of sorts physically', 
      meaning_hi: 'तबीयत ठीक न होना / अस्वस्थ महसूस करना', 
      example: 'I won\'t be coming to the gym today because I am feeling a little under the weather.', 
      note: 'Maritime origin where sailors went below deck during severe storms to avoid getting seasick.' 
    },
    { 
      id: 'idiom_31', 
      phrase: 'Give the benefit of the doubt', 
      meaning_en: 'Choosing to believe someone\'s statement or intentions because you do not have clear proof to blame them', 
      meaning_hi: 'बिना सबूत के किसी की बात सच मान लेना / संदेह का लाभ देना', 
      example: 'She is rarely late for meetings, so let\'s give her the benefit of the doubt this one time.', 
      note: 'A legal concept of innocence until proven guilty adapted into everyday social etiquette.' 
    },
    { 
      id: 'idiom_32', 
      phrase: 'Hear it on the grapevine', 
      meaning_en: 'To learn some news, secrets, or operational rumors through casual gossip or informal channels', 
      meaning_hi: 'अफवाहों या उड़ती-उड़ती खबरों के माध्यम से कुछ पता चलना', 
      example: 'I heard it on the grapevine that the technology company is planning major layoffs next week.', 
      note: 'From the messy, tangled appearance of early telegraph lines during the American Civil War.' 
    },
    { 
      id: 'idiom_33', 
      phrase: 'Hit the nail on the head', 
      meaning_en: 'To state the absolute truth or identify the exact cause of a problem perfectly', 
      meaning_hi: 'बिल्कुल सटीक बात कहना / सही निष्कर्ष पर पहुंचना', 
      example: 'You hit the nail on the head when you said bad communication is destroying team unity.', 
      note: 'Refers to the neat precision required in carpentry to drive a nail straight down.' 
    },
    { 
      id: 'idiom_34', 
      phrase: 'Hit the sack', 
      meaning_en: 'To go to bed in order to sleep because you are completely exhausted', 
      meaning_hi: 'सोने जाना (थकान के कारण बिस्तर पर पड़ना)', 
      example: 'I have been packing boxes all day, so I am ready to hit the sack right now.', 
      note: 'From old military customs where soldiers slept on canvas bags packed tightly with straw.' 
    },
    { 
      id: 'idiom_35', 
      phrase: 'In the heat of the moment', 
      meaning_en: 'Saying or doing something rashly due to extreme excitement, anger, or emotion without thinking first', 
      meaning_hi: 'आवेश में आकर बिना सोचे-समझे कुछ कर बैठना', 
      example: 'He didn\'t mean to insult you; he just said those words in the heat of the moment.', 
      note: 'Refers to temporary mental blinding caused by intense situational pressure.' 
    },
    { 
      id: 'idiom_36', 
      phrase: 'It takes two to tango', 
      meaning_en: 'Both people involved in a conflict, argument, or shared activity are responsible for the outcome', 
      meaning_hi: 'एक हाथ से ताली नहीं बजती / दोनों पक्ष बराबर के जिम्मेदार होते हैं', 
      example: 'She blames him for the divorce, but it takes two to tango; they both stopped trying.', 
      note: 'From the famous Latin American ballroom dance that strictly requires a pair to function.' 
    },
    { 
      id: 'idiom_37', 
      phrase: 'Jump on the bandwagon', 
      meaning_en: 'To follow a popular trend, lifestyle, or opinion simply because it has become widely fashionable', 
      meaning_hi: 'बहती गंगा में हाथ धोना / भेड़चाल में शामिल होना', 
      example: 'Now that digital currencies are rising, every corporate firm wants to jump on the bandwagon.', 
      note: 'From old parade wagons carrying political speakers and musicians that drew crowds to follow behind.' 
    },
    { 
      id: 'idiom_38', 
      phrase: 'Keep something at bay', 
      meaning_en: 'To prevent an enemy, illness, or unwanted problem from advancing or affecting you', 
      meaning_hi: 'किसी मुसीबत या बीमारी को खुद से दूर रखना', 
      example: 'Drinking warm herbal tea daily helped keep the severe winter flu at bay.', 
      note: 'From hunting contexts where hounds held prey at a distance using deep barks.' 
    },
    { 
      id: 'idiom_39', 
      phrase: 'Kill two birds with one stone', 
      meaning_en: 'To accomplish two separate useful results or resolve two issues with a single action', 
      meaning_hi: 'एक तीर से दो शिकार / एक पंथ दो काज', 
      example: 'By cycling to my corporate workspace, I kill two birds with one stone: I stay fit and save fuel.', 
      note: 'Highlights extreme practical efficiency in executing everyday tasks.' 
    },
    { 
      id: 'idiom_40', 
      phrase: 'Last straw', 
      meaning_en: 'The final small setback in a long sequence of troubles that makes a situation completely unbearable', 
      meaning_hi: 'धैर्य की सीमा समाप्त कर देने वाली आखिरी छोटी मुसीबत', 
      example: 'When the office copy machine broke down too, it was the last straw on an already terrible day.', 
      note: 'From the proverb "it is the last straw that breaks the camel\'s heavy back."' 
    }
  ]
},
'Set 3': {
  setNumber: 3,
  range: '41–60',
  intro: 'Conversational timing, structural changes, aur disclosure of secrets occupies this tier.',
  idioms: [
    { 
      id: 'idiom_41', 
      phrase: 'Let the cat out of the bag', 
      meaning_en: 'To reveal a secret or surprise confidential plan accidentally or prematurely', 
      meaning_hi: 'अनजाने में कोई राज उजागर कर देना', 
      example: 'It was supposed to be a surprise birthday party, but Rohan let the cat out of the bag.', 
      note: 'From historic market scams where cheap cats were substituted for valuable piglets in sacks.' 
    },
    { 
      id: 'idiom_42', 
      phrase: 'Make a long story short', 
      meaning_en: 'To omit unnecessary details and get directly to the core point of an explanation', 
      meaning_hi: 'संक्षेप में कहना / बात को छोटा करके बताना', 
      example: 'To make a long story short, we missed our flight and spent the night at an airport motel.', 
      note: 'Used as a conversational bridge to wrap up a complicated narrative rapidly.' 
    },
    { 
      id: 'idiom_43', 
      phrase: 'Method to madness', 
      meaning_en: 'There is a logical, clever purpose or plan hidden behind actions that look completely chaotic', 
      meaning_hi: 'पागलपन जैसी दिखने वाली हरकतों के पीछे भी कोई गहरी समझ या योजना होना', 
      example: 'His unorganized desk looks like an absolute mess, but there is a clear method to his madness.', 
      note: 'Famously popularized by a line in Shakespeare\'s psychological drama Hamlet.' 
    },
    { 
      id: 'idiom_44', 
      phrase: 'Miss the boat', 
      meaning_en: 'To lose an excellent opportunity by failing to act quickly or being too slow to respond', 
      meaning_hi: 'अवसर हाथ से निकल जाना / मौका गंवा देना', 
      example: 'Real estate prices surged because he missed the boat on purchasing land last year.', 
      note: 'Metaphorical warning about arriving late at a harbor after a ship has departed.' 
    },
    { 
      id: 'idiom_45', 
      phrase: 'Not playing with a full deck', 
      meaning_en: 'Lacking basic intelligence, acting highly eccentric, or being mentally incompetent', 
      meaning_hi: 'कम अक्ल होना / मानसिक रूप से असंतुलित लगना', 
      example: 'The way he started talking to the traffic signal made us think he isn\'t playing with a full deck.', 
      note: 'Card game analogy implying a standard deck is missing vital cards to play correctly.' 
    },
    { 
      id: 'idiom_46', 
      phrase: 'On the ball', 
      meaning_en: 'Highly alert, competent, organized, and quick to understand and respond to new situations', 
      meaning_hi: 'बहुत सजग, फुर्तीला और समझदार होना', 
      example: 'The new design project manager is truly on the ball; she resolves issues before they expand.', 
      note: 'Likely from sports where athletes must maintain strict visual contact with a moving ball.' 
    },
    { 
      id: 'idiom_47', 
      phrase: 'Once in a blue moon', 
      meaning_en: 'An event or occurrence that happens very rarely or almost never in regular life', 
      meaning_hi: 'ईद का चांद होना / कभी-कभार होने वाली दुर्लभ घटना', 
      example: 'Since moving away to Canada, he visits his old parents only once in a blue moon.', 
      note: 'Based on the rare phenomenon of a second full moon appearing within a single calendar month.' 
    },
    { 
      id: 'idiom_48', 
      phrase: 'Picture paints a thousand words', 
      meaning_en: 'A visual graphic or image can convey a highly complex message much faster than a long text', 
      meaning_hi: 'एक तस्वीर हजार शब्दों के बराबर गहरी बात कह जाती है', 
      example: 'Instead of writing a long report, just show them the final sales chart; a picture paints a thousand words.', 
      note: 'Emphasizes the immediate cognitive impact of visual data over literature.' 
    },
    { 
      id: 'idiom_49', 
      phrase: 'Piece of cake', 
      meaning_en: 'A task, assignment, or job that is incredibly easy, simple, and effortless to complete', 
      meaning_hi: 'बहुत ही आसान काम (बायें हाथ का खेल)', 
      example: 'Don\'t worry about the basic driving test tomorrow; it is going to be a piece of cake for you.', 
      note: 'From 19th-century cakewalk traditions where decorated cakes were given as easy prizes.' 
    },
    { 
      id: 'idiom_50', 
      phrase: 'Pull the plug', 
      meaning_en: 'To abruptly stop providing funds, support, or resources, causing a project or activity to end', 
      meaning_hi: 'किसी योजना को दी जाने वाली मदद अचानक बंद करके उसे खत्म कर देना', 
      example: 'The investors decided to pull the plug on the new food app after sales dropped.', 
      note: 'Derived from disconnecting electrical power cords or hospital life-support machinery.' 
    },
    { 
      id: 'idiom_51', 
      phrase: 'Pull someone\'s leg', 
      meaning_en: 'To playfully trick, tease, or deceive someone as a lighthearted, harmless joke', 
      meaning_hi: 'मजाक में किसी की टांग खींचना', 
      example: 'Relax, I didn\'t actually lose your luxury watch; I was just pulling your leg!', 
      note: 'Originally meant physically tripping someone up in street pranks, later became verbal.' 
    },
    { 
      id: 'idiom_52', 
      phrase: 'Pull yourself together', 
      meaning_en: 'To control your extreme emotions, calm down, and regain your composure during a crisis', 
      meaning_hi: 'खुद को संभालना / अपनी भावनाओं और घबराहट पर काबू पाना', 
      example: 'I know you are terrified about the interview results, but pull yourself together and breathe.', 
      note: 'A psychological command to collect your scattered thoughts and stay stable.' 
    },
    { 
      id: 'idiom_53', 
      phrase: 'Rain on someone\'s parade', 
      meaning_en: 'To diminish or spoil someone\'s excitement, happy plans, or celebratory mood', 
      meaning_hi: 'रंग में भंग डालना / किसी की खुशी किरकिरी करना', 
      example: 'I hate to rain on your parade, but the weekend beach trip is canceled due to heavy rainfall.', 
      note: 'Metaphorical image of a sudden downpour ruining an elaborate outdoor celebration.' 
    },
    { 
      id: 'idiom_54', 
      phrase: 'Rock the boat', 
      meaning_en: 'To disrupt a smooth, satisfactory, or stable situation by introducing an unwanted controversy', 
      meaning_hi: 'चलती हुई शांत व्यवस्था में व्यवधान या विवाद खड़ा करना', 
      example: 'The team is happy with the current shift hours, so please don\'t rock the boat by asking for changes.', 
      note: 'Refers to destabilizing a small rowing boat by making sudden, uncoordinated weight shifts.' 
    },
    { 
      id: 'idiom_55', 
      phrase: 'See eye to eye', 
      meaning_en: 'To agree completely with someone else or share the exact same point of view on a topic', 
      meaning_hi: 'पूर्ण रूप से सहमत होना / एक जैसे विचार रखना', 
      example: 'The business partners rarely see eye to eye when it comes to international branding strategies.', 
      note: 'Visual metaphor for standing at the same level and looking at an issue along the same line.' 
    },
    { 
      id: 'idiom_56', 
      phrase: 'Shed crocodile tears', 
      meaning_en: 'To exhibit false, insincere, and hypocritical displays of sadness, grief, or empathy', 
      meaning_hi: 'घड़ियाली आंसू बहाना / दिखावटी दुख प्रकट करना', 
      example: 'The manager shed crocodile tears over the layoffs, but he was the one who authorized them.', 
      note: 'Based on an ancient biological myth that crocodiles weep while consuming their prey.' 
    },
    { 
      id: 'idiom_57', 
      phrase: 'Sit on the fence', 
      meaning_en: 'Remaining completely neutral, hesitant, or refusing to choose a side in a major argument', 
      meaning_hi: 'तटस्थ रहना / विवाद में किसी का भी पक्ष न लेना', 
      example: 'You can\'t sit on the fence forever; you need to vote for either the strategy or the budget.', 
      note: 'Visualizes an indecisive person balancing on a boundary divider rather than stepping onto a side.' 
    },
    { 
      id: 'idiom_58', 
      phrase: 'Speak of the devil', 
      meaning_en: 'A phrase spoken when the exact person you were just discussing unexpectedly arrives or calls', 
      meaning_hi: 'नाम लिया और हाजिर / शैतान का नाम लिया और शैतान हाजिर', 
      example: 'Did you hear what happened to Amit? Oh, speak of the devil, he just walked into the cafe!', 
      note: 'From an old medieval superstition warning that naming evil entities would summon them.' 
    },
    { 
      id: 'idiom_59', 
      phrase: 'Steal someone\'s thunder', 
      meaning_en: 'To take the attention, praise, or credit away from someone else\'s achievement by overshadowing them', 
      meaning_hi: 'किसी और की मेहनत का श्रेय या वाहवाही खुद लूट लेना', 
      example: 'My colleague stole my thunder by presenting my database design during the executive meeting.', 
      note: 'Originated from an 18th-century playwright whose unique metal thunder effect was stolen by an opera house.' 
    },
    { 
      id: 'idiom_60', 
      phrase: 'Take it with a grain of salt', 
      meaning_en: 'To listen to a statement or story with skepticism and not accept it as absolute fact', 
      meaning_hi: 'पूरी तरह सच न मानना / संदेह के साथ सुनना', 
      example: 'Take his grand business predictions with a grain of salt; he tends to exaggerate facts.', 
      note: 'From ancient medical texts claiming that swallowing poisons with a grain of salt neutralized danger.' 
    }
  ]
},
'Set 4': {
  setNumber: 4,
  range: '61–80',
  intro: 'Deadlines, unexpected shifts, aur extreme consequences define the perimeter of this group.',
  idioms: [
    { 
      id: 'idiom_61', 
      phrase: 'Taste of your own medicine', 
      meaning_en: 'Receiving the same negative, harsh, or unkind treatment that you have been giving to others', 
      meaning_hi: 'जैसी करनी वैसी भरनी / अपने ही बुरे व्यवहार का फल भुगतना', 
      example: 'He always interrupts people, so giving him a taste of his own medicine felt satisfying.', 
      note: 'Derived from old folk stories about a deceptive quack doctor who falls ill and is forced to take his own fake cures.' 
    },
    { 
      id: 'idiom_62', 
      phrase: 'The elephant in the room', 
      meaning_en: 'An obvious, massive problem or controversial matter that everyone knows about but avoids discussing', 
      meaning_hi: 'एक बड़ी समस्या या मुद्दा जिसके बारे में सब जानते हैं पर बात करने से बचते हैं', 
      example: 'The ongoing drop in company revenue was the elephant in the room that no director mentioned.', 
      note: 'Highlights the collective awkwardness of actively pretending a massive issue is invisible.' 
    },
    { 
      id: 'idiom_63', 
      phrase: 'Throw caution to the wind', 
      meaning_en: 'To act completely recklessly, taking massive risks without worrying about the dangerous outcomes', 
      meaning_hi: 'सारी परवाह छोड़ कर बड़ा खतरा मोल लेना', 
      example: 'He threw caution to the wind, quit his banking job, and invested everything into photography.', 
      note: 'Metaphor for casting protective hesitations and worries away into thin air like useless dust.' 
    },
    { 
      id: 'idiom_64', 
      phrase: 'Through thick and thin', 
      meaning_en: 'Supporting or staying loyal to someone through both excellent, happy times and severe hardships', 
      meaning_hi: 'हर अच्छे-बुरे हालात में / सुख-दुख में साथ निभाना', 
      example: 'Her elder sister had stood by her through thick and thin during her medical struggles.', 
      note: 'Originally a reference to traveling through safe open forests (thick) and dense, thorny woods (thin).' 
    },
    { 
      id: 'idiom_65', 
      phrase: 'Tie the knot', 
      meaning_en: 'To formally get married in a legal or religious ceremony', 
      meaning_hi: 'शादी के बंधन में बंधना / विवाह करना', 
      example: 'The young couple finally decided to tie the knot after dating for nearly eight years.', 
      note: 'Derived from ancient multi-cultural handfasting customs where the couple\'s hands were bound with cords.' 
    },
    { 
      id: 'idiom_66', 
      phrase: 'To catch someone red-handed', 
      meaning_en: 'To discover or catch someone in the middle of committing an illegal act or doing wrongdoing', 
      meaning_hi: 'रंगे हाथों पकड़ना / अपराध करते हुए मौके पर ही पकड़ना', 
      example: 'The security manager caught the store thief red-handed as he hid the perfumes in his jacket.', 
      note: 'From old Scottish forestry laws where a poacher was convicted only if caught with blood on their hands.' 
    },
    { 
      id: 'idiom_67', 
      phrase: 'To give the cold shoulder', 
      meaning_en: 'To deliberately ignore, treat with cold unfriendliness, or avoid interacting with someone', 
      meaning_hi: 'जानबूझकर उपेक्षा करना / बेरुखी दिखाना', 
      example: 'After their heavy argument on Tuesday, Priya gave him the cold shoulder all through the trip.', 
      note: 'From a medieval hosting custom of serving an unwelcome guest a cold cut of meat to signal departure.' 
    },
    { 
      id: 'idiom_68', 
      phrase: 'Under the weather', 
      meaning_en: 'Feeling mildly sick, indisposed, lacking physical energy, or suffering from a minor cold', 
      meaning_hi: 'अस्वस्थ महसूस करना / तबीयत नासाज होना', 
      example: 'I won\'t be attending the corporate seminar today as I am a bit under the weather.', 
      note: 'Linguistic variant of "feel under the weather" used identically across academic tests.' 
    },
    { 
      id: 'idiom_69', 
      phrase: 'Wild goose chase', 
      meaning_en: 'A completely foolish, hopeless, and frustrating search for something that is nonexistent or unattainable', 
      meaning_hi: 'व्यर्थ की भागदौड़ या निरर्थक खोज', 
      example: 'Following that anonymous online tip turned out to be a wild goose chase for the police force.', 
      note: 'Coined by Shakespeare, originally describing an old type of horse race where riders followed a erratic leader.' 
    },
    { 
      id: 'idiom_70', 
      phrase: 'You can\'t have your cake and eat it too', 
      meaning_en: 'You cannot possess two entirely conflicting things or desire benefits that cancel each other out', 
      meaning_hi: 'दोनों चीजें एक साथ हासिल नहीं हो सकतीं / चाहकर भी विरोधाभासी सुख एक साथ नहीं मिल सकते', 
      example: 'You want to save all your salary but also buy a luxury car; you can\'t have your cake and eat it too.', 
      note: 'Emphasizes that once a resource is completely consumed, it cannot remain as an asset.' 
    },
    { 
      id: 'idiom_71', 
      phrase: 'A drop in the bucket', 
      meaning_en: 'An amount or contribution so small that it has almost no noticeable effect on a massive problem', 
      meaning_hi: 'ऊंट के मुंह में जीरा / आवश्यकता की तुलना में बहुत कम मात्रा', 
      example: 'The $50 donation is kind, but it is just a drop in the bucket compared to the millions needed.', 
      note: 'Biblical origin comparing a tiny droplet to the vast capacity of a storage container.' 
    },
    { 
      id: 'idiom_72', 
      phrase: 'A glass cliff', 
      meaning_en: 'A situation where a woman or minority leader is promoted to a high leadership role during a crisis where the chance of failure is extremely high', 
      meaning_hi: 'संकट के समय किसी महिला या अल्पसंख्यक को उच्च पद देना जहां असफल होने का खतरा ज्यादा हो', 
      example: 'She was appointed CEO right as the firm faced bankruptcy, facing a classic glass cliff.', 
      note: 'Coined by researchers to describe corporate glass ceilings shifting into high-risk cliffs.' 
    },
    { 
      id: 'idiom_73', 
      phrase: 'A piece of the pie', 
      meaning_en: 'A share of financial profits, benefits, or direct participation in a successful business venture', 
      meaning_hi: 'मुनाफे या लाभ में अपना हिस्सा पाना', 
      example: 'When the software project succeeded, every programmer demanded a piece of the pie.', 
      note: 'Metaphor comparing corporate earnings to a pastry split among hungry participants.' 
    },
    { 
      id: 'idiom_74', 
      phrase: 'A storm in a teacup', 
      meaning_en: 'A lot of unnecessary anger, excitement, or worry about a completely trivial, unimportant matter', 
      meaning_hi: 'बात का बतंगड़ / छोटी सी बात पर बहुत बड़ा हंगामा खड़ा करना', 
      example: 'Their fierce argument about who left the kitchen lights on was just a storm in a teacup.', 
      note: 'British expression contrasting a violent ocean storm with a tiny domestic drinking vessel.' 
    },
    { 
      id: 'idiom_75', 
      phrase: 'An axe to grind', 
      meaning_en: 'Having a strong, hidden personal motive or selfish reason for doing something or expressing an opinion', 
      meaning_hi: 'अपना स्वार्थ सिद्ध करना / कोई गुप्त स्वार्थी उद्देश्य होना', 
      example: 'He claims he is helping the community, but he has an axe to grind regarding the land development.', 
      note: 'Popularized by a story regarding a boy tricked into doing hard work turning a grindstone for a stranger.' 
    },
    { 
      id: 'idiom_76', 
      phrase: 'At the eleventh hour', 
      meaning_en: 'At the absolute last possible moment right before a deadline or final closing point', 
      meaning_hi: 'ऐन वक्त पर / आखिरी क्षण में', 
      example: 'The contract terms were altered at the eleventh hour, just before signing.', 
      note: 'Derived from a biblical parable regarding laborers hired late in an 12-hour workday.' 
    },
    { 
      id: 'idiom_77', 
      phrase: 'Backseat driver', 
      meaning_en: 'A passenger or person who gives unwanted, annoying advice to the person actually controlling a task', 
      meaning_hi: 'काम न करते हुए भी केवल बेकार की सलाह देने वाला व्यक्ति', 
      example: 'Stop acting like a backseat driver and let me write the application code my way.', 
      note: 'Refers to an annoying vehicle passenger continuously instructing the driver on how to steer.' 
    },
    { 
      id: 'idiom_78', 
      phrase: 'Ball is in your court', 
      meaning_en: 'It is completely your responsibility or turn to take the next action or make a decision', 
      meaning_hi: 'अब फैसला तुम्हारे हाथ में है / अगला कदम तुम्हें उठाना है', 
      example: 'I have given you my final financial offer; now the ball is in your court.', 
      note: 'Derived from tennis or basketball where the game pauses until the player with the ball reacts.' 
    },
    { 
      id: 'idiom_79', 
      phrase: 'Barking up the wrong tree', 
      meaning_en: 'Pursuing a mistaken line of thought or accusing the wrong person', 
      meaning_hi: 'गलत दिशा में प्रयास करना (पुनरावृत्ति अभ्यास)', 
      example: 'If you expect him to give you a loan, you are barking up the wrong tree; he is broke.', 
      note: 'Maintained across testing patterns to ensure alternate sentence validation.' 
    },
    { 
      id: 'idiom_80', 
      phrase: 'Beating a dead horse', 
      meaning_en: 'Wasting energy, time, or arguments trying to revive or discuss a matter that has already been permanently settled', 
      meaning_hi: 'व्यर्थ का प्रयास करना / खत्म हो चुके मुद्दे पर समय गंवाना', 
      example: 'The budget cuts are final, so bringing it up at every staff meeting is just beating a dead horse.', 
      note: 'An image of a rider whipping an animal that is no longer physically capable of moving.' 
    }
  ]
},
'Set 5': {
  setNumber: 5,
  range: '81–100',
  intro: 'Risk exposures, workplace constraints, aur behavioral extremes closes the baseline phase.',
  idioms: [
    { 
      id: 'idiom_81', 
      phrase: 'Beggars can\'t be choosers', 
      meaning_en: 'People who are in desperate need of assistance or charity must accept whatever help is offered without complaining', 
      meaning_hi: 'ज़रूरतमंद लोगों को नखरे नहीं करने चाहिए / जो मिल जाए उसी में संतोष करना', 
      example: 'The shelter only had old jackets left, but beggars can\'t be choosers in this freezing cold.', 
      note: 'An ancient proverb advising humility when relying entirely on the generosity of others.' 
    },
    { 
      id: 'idiom_82', 
      phrase: 'Behind closed doors', 
      meaning_en: 'Taking place in absolute privacy, secrecy, and deliberately hidden away from the public or media', 
      meaning_hi: 'गुप्त रूप से / बंद दरवाजों के पीछे', 
      example: 'The political coalition deal was negotiated behind closed doors late last night.', 
      note: 'Refers to executive meetings intentionally held in rooms sealed off from spectators.' 
    },
    { 
      id: 'idiom_83', 
      phrase: 'Bite the hand that feeds you', 
      meaning_en: 'To behave aggressively, ungratefully, or cause harm to someone who supports, helps, or employs you', 
      meaning_hi: 'जिस थाली में खाना उसी में छेद करना / उपकार करने वाले का ही नुकसान करना', 
      example: 'Insulting the senior director who trained you is like biting the hand that feeds you.', 
      note: 'Derived from domestic animals turning around and viciously biting an owner offering food.' 
    },
    { 
      id: 'idiom_84', 
      phrase: 'Bite your tongue', 
      meaning_en: 'Forcing yourself to stay quiet or stop talking to prevent yourself from saying something rude or inappropriate', 
      meaning_hi: 'अपनी जुबान पर लगाम देना / कड़वी बात बोलने से खुद को रोकना', 
      example: 'I wanted to tell him how terrible his presentation design was, but I bit my tongue.', 
      note: 'A physical metaphor for using your teeth to physically restrain speech.' 
    },
    { 
      id: 'idiom_85', 
      phrase: 'Blood is thicker than water', 
      meaning_en: 'Family relationships, loyalty, and bonds are always more meaningful and stronger than ties with strangers or friends', 
      meaning_hi: 'अपना अपना होता है / परिवार के रिश्ते दोस्तों से ज्यादा गहरे होते हैं', 
      example: 'When the financial crisis struck, his cousins helped him; blood is thicker than water.', 
      note: 'An old proverb stating that genetic lineage commands absolute ancestral priority.' 
    },
    { 
      id: 'idiom_86', 
      phrase: 'Blow one\'s own trumpet', 
      meaning_en: 'To boast loudly, brag, or arrogantly talk about your own achievements and unique talents to get attention', 
      meaning_hi: 'अपने मुंह मियां मिट्ठू बनना / अपनी तारीफ खुद करना', 
      example: 'A humble leader doesn\'t need to constantly go around blowing his own trumpet.', 
      note: 'From ancient kingdoms where heralds blew brass horns to announce highly influential figures.' 
    },
    { 
      id: 'idiom_87', 
      phrase: 'Blue blood', 
      meaning_en: 'Belonging to a noble, royal, aristocratic, or highly privileged upper-class family line', 
      meaning_hi: 'शाही खानदान से होना / कुलीन वर्ग का होना', 
      example: 'The historic estate owner carries real blue blood in his family history.', 
      note: 'From Spain where pale aristocrats highlighted their blue veins to prove they didn\'t perform outdoor labor.' 
    },
    { 
      id: 'idiom_88', 
      phrase: 'Bolt from the blue', 
      meaning_en: 'A massive, shocking, and entirely unexpected piece of news or event that happens without warning', 
      meaning_hi: 'अचानक आई विपत्ति / बिना किसी पूर्व चेतावनी के बड़ा झटका लगना', 
      example: 'The sudden announcement of the factory closure came as a complete bolt from the blue to the workforce.', 
      note: 'Compares shocking developments to a lightning bolt dropping down from a completely clear, blue sky.' 
    },
    { 
      id: 'idiom_89', 
      phrase: 'Bone of contention', 
      meaning_en: 'The primary issue, subject, or dispute that causes long-lasting, bitter disagreement between people', 
      meaning_hi: 'झगड़े की जड़ / फसाद का मुख्य कारण', 
      example: 'The boundary wall location remains the main bone of contention between the two neighbors.', 
      note: 'A vivid image of two stray dogs aggressively fighting over a single dry bone.' 
    },
    { 
      id: 'idiom_90', 
      phrase: 'Break a leg', 
      meaning_en: 'A traditional, superstitious way to wish a performer or theater actor good luck right before a show', 
      meaning_hi: 'शुभकामनाएं देना (विशेषकर स्टेज परफॉर्मेंस से पहले)', 
      example: 'You have practiced your stage monologue for weeks; go out there tonight and break a leg!', 
      note: 'Old theater superstition that directly saying "good luck" would invite evil spirits to ruin the show.' 
    },
    { 
      id: 'idiom_91', 
      phrase: 'Break the ice', 
      meaning_en: 'To say or do something friendly to reduce tension and make people feel comfortable when meeting for the first time', 
      meaning_hi: 'बातचीत की शुरुआत करना / संकोच दूर करना', 
      example: 'The coordinator organized a quick digital game to break the ice among the new corporate trainees.', 
      note: 'From special icebreaker ships clearing frozen navigation paths so regular boats could follow.' 
    },
    { 
      id: 'idiom_92', 
      phrase: 'Bring home the bacon', 
      meaning_en: 'To earn the primary financial income or salary to completely support and feed your household', 
      meaning_hi: 'घर चलाने के लिए पैसे कमाना / जीविका चलाना', 
      example: 'While her husband looks after the infants, she works as an engineer to bring home the bacon.', 
      note: 'From old English town fairs where catching a greased pig meant keeping the food asset.' 
    },
    { 
      id: 'idiom_93', 
      phrase: 'Bull in a china shop', 
      meaning_en: 'A highly clumsy, reckless, or aggressive person who handles delicate situations in a destructive manner', 
      meaning_hi: 'अति संवेदनशील परिस्थिति में मूर्खतापूर्ण या अनियंत्रित व्यवहार करने वाला इंसान', 
      example: 'Don\'t let him handle the fragile diplomatic negotiations; he acts like a bull in a china shop.', 
      note: 'Contrasts a massive, powerful farm animal running wildly through a fine porcelain store.' 
    },
    { 
      id: 'idiom_94', 
      phrase: 'Burn bridges', 
      meaning_en: 'To permanently destroy relationships, connections, or career paths, leaving yourself with absolutely no way to go back', 
      meaning_hi: 'वापसी के सारे रास्ते हमेशा के लिए बंद कर देना / संबंध पूरी तरह समाप्त करना', 
      example: 'Even if you hate your current job, don\'t insult your colleagues and burn your bridges.', 
      note: 'Military tactic where an invading army set fire to river bridges to force their soldiers to push forward.' 
    },
    { 
      id: 'idiom_95', 
      phrase: 'Burn the candle at both ends', 
      meaning_en: 'To completely exhaust your health and energy by waking up early and sleeping late to work continuously', 
      meaning_hi: 'देर रात और सुबह लगकर अत्यधिक काम करना / अपनी सेहत को दांव पर लगाना', 
      example: 'Working a corporate shift by day and studying for your master\'s degree by night is burning the candle at both ends.', 
      note: 'Metaphorical warning that a candle lit from both sides burns down twice as fast.' 
    },
    { 
      id: 'idiom_96', 
      phrase: 'Bury the hatchet', 
      meaning_en: 'To officially stop an argument, settle an ongoing feud, and make peace with a long-time rival', 
      meaning_hi: 'पुरानी दुश्मनी भुलाकर समझौता कर लेना', 
      example: 'After years of fierce business competition, the two brothers finally decided to bury the hatchet.', 
      note: 'From Native American tribal traditions where actual weapons were buried underground during peace treaties.' 
    },
    { 
      id: 'idiom_97', 
      phrase: 'By leaps and bounds', 
      meaning_en: 'Progressing, developing, or expanding at an exceptionally rapid and astonishing speed', 
      meaning_hi: 'बहुत तेजी से प्रगति करना / दिन दूनी रात चौगुनी तरक्की होना', 
      example: 'The healthcare company\'s software development is expanding by leaps and bounds this fiscal year.', 
      note: 'Indicates rapid, massive movements forward rather than step-by-step progress.' 
    },
    { 
      id: 'idiom_98', 
      phrase: 'Call it a day', 
      meaning_en: 'To officially stop working on an activity, task, or job for the rest of the evening', 
      meaning_hi: 'आज के लिए काम बंद कर देना', 
      example: 'We have been debugging this software script for seven hours; let\'s call it a day and head home.', 
      note: 'A standard workplace phrase signifying that a sufficient amount of work has been completed.' 
    },
    { 
      id: 'idiom_99', 
      phrase: 'Call a spade a spade', 
      meaning_en: 'To speak completely bluntly, directly, and truthfully about something, without trying to soften it', 
      meaning_hi: 'साफ-साफ कड़वी बात कहना / खरी-खरी सुनाना', 
      example: 'Let\'s call a spade a spade: our current business model is losing cash and failing completely.', 
      note: 'Refers to calling a common, basic digging tool by its plain name instead of using fancy terms.' 
    },
    { 
      id: 'idiom_100', 
      phrase: 'Can\'t see the forest for the trees', 
      meaning_en: 'Being so focused on small, minor details that you fail to see or understand the entire major situation', 
      meaning_hi: 'छोटी-छोटी बातों में इतना खो जाना कि बड़ी तस्वीर न देख पाना', 
      example: 'He is obsessing over font styles but ignoring the overall website plan; he can\'t see the forest for the trees.', 
      note: 'A warning against losing perspective by looking closely at individual plants instead of the entire wood.' 
    }
  ]
},
'Set 6': {
    setNumber: 6,
    range: '101–120',
    intro: 'Chhate set mein bache hue master list ke idioms shuru hote hain. Inme daily communication ke unique phrases aur unke dynamic applications diye gaye hain.',
    idioms: [
      { id: 'idiom_101', phrase: 'A hard nut to crack', meaning_en: 'A difficult problem or a person hard to understand', meaning_hi: 'मुश्किल समस्या (कठिन व्यक्ति)', example: 'Solving this complex case proved to be a hard nut to crack.', note: 'Often used for tough challenges or stubborn people.' },
      { id: 'idiom_102', phrase: 'Look high and low', meaning_en: 'To search everywhere comprehensively', meaning_hi: 'हर जगह तलाश करना', example: 'I looked high and low for my missing keys but couldn\'t find them.', note: 'Implies a thorough and exhaustive search.' },
      { id: 'idiom_103', phrase: 'Lose heart', meaning_en: 'To lose courage or confidence', meaning_hi: 'हिम्मत हारना', example: 'Despite failing the first test, you shouldn\'t lose heart.', note: 'Used as an encouragement to stay positive.' },
      { id: 'idiom_104', phrase: 'Rub salt into the wound', meaning_en: 'To make a painful situation even worse', meaning_hi: 'घाव पर नमक छिड़कना (दुख और बढ़ाना)', example: 'Losing the match was bad enough, but his mockery rubbed salt into the wound.', note: 'Refers to aggravating someone\'s existing pain.' },
      { id: 'idiom_105', phrase: 'Call a spade a spade', meaning_en: 'To speak directly and bluntly about reality', meaning_hi: 'साफ-साफ कहना (खरी-खोटी सुनाना)', example: 'He doesn\'t beat around the bush; he always calls a spade a spade.', note: 'Praises straightforward honesty.' },
      { id: 'idiom_106', phrase: 'Hit the bottle', meaning_en: 'To start drinking heavily or excessively', meaning_hi: 'खूब शराब पीना', example: 'After losing his job, he unfortunately started to hit the bottle.', note: 'Informal expression for heavy drinking.' },
      { id: 'idiom_107', phrase: 'Get in a lather', meaning_en: 'To become unnecessarily excited, angry, or anxious', meaning_hi: 'बेवजह परेशान होना', example: 'There is no need to get in a lather over a small technical delay.', note: 'Implies overreacting to a minor problem.' },
      { id: 'idiom_108', phrase: 'Leaps and bounds', meaning_en: 'To progress or improve very rapidly', meaning_hi: 'तेजी से (उन्नति करना)', example: 'The company\'s profits are growing by leaps and bounds.', note: 'Highly common in professional growth contexts.' },
      { id: 'idiom_109', phrase: 'Fell short', meaning_en: 'To fail to reach a required standard or expectation', meaning_hi: 'कोई असर नहीं हुआ (कम पड़ना)', example: 'His performance fell short of the coach\'s expectations.', note: 'Opposite of "meeting expectations."' },
      { id: 'idiom_110', phrase: 'Called for', meaning_en: 'To demand or require a specific action', meaning_hi: 'मांग की (आवश्यकता थी)', example: 'The urgent crisis called for immediate intervention by the authorities.', note: 'Indicates absolute necessity.' },
      { id: 'idiom_111', phrase: 'Took to heart', meaning_en: 'To take criticism or an event very seriously and personally', meaning_hi: 'गंभीरता से लेना (दिल पर लेना)', example: 'She took his casual remarks to heart and felt deeply upset.', note: 'Refers to deep emotional impact.' },
      { id: 'idiom_112', phrase: 'Wears his heart on his sleeve', meaning_en: 'To openly show one\'s true emotions', meaning_hi: 'भावनाएं जाहिर करना', example: 'Everyone knows he loves her because he wears his heart on his sleeve.', note: 'Similar to idiom 85.' },
      { id: 'idiom_113', phrase: 'Point-blank', meaning_en: 'Directly and bluntly, without any hesitation', meaning_hi: 'सीधे तौर पर (बिना घुमाए)', example: 'She refused his invitation point-blank.', note: 'Mainly used for firm rejections or questions.' },
      { id: 'idiom_114', phrase: 'Scapegoats', meaning_en: 'A person blamed for the wrongdoings of others', meaning_hi: 'दूसरों के पापों की सजा पाने वाला (बलि का बकरा)', example: 'The innocent manager was made a scapegoat for the company\'s financial failure.', note: 'Derived from ancient sacrificial rituals.' },
      { id: 'idiom_115', phrase: 'Sorted out', meaning_en: 'To resolve a problem or organize a messy situation', meaning_hi: 'समाधान कर दिया (सुलझा दिया)', example: 'Don\'t worry, the issues with your account have been sorted out.', note: 'Very popular in everyday customer service.' },
      { id: 'idiom_116', phrase: 'Take exception', meaning_en: 'To object strongly or feel offended by something', meaning_hi: 'आपत्ति करना', example: 'I take exception to your rude remarks about my family.', note: 'A formal way to declare an objection.' },
      { id: 'idiom_117', phrase: 'Pay off old scores', meaning_en: 'To settle an old grudge or take revenge', meaning_hi: 'पुरानी रंजिश निकालना (बदला लेना)', example: 'He used the meeting as an opportunity to pay off old scores.', note: 'Implies lingering resentment.' },
      { id: 'idiom_118', phrase: 'Fond of her own voice', meaning_en: 'Someone who talks excessively and doesn\'t listen to others', meaning_hi: 'दूसरों की नहीं सुनता (बस अपनी बोलता रहे)', example: 'It\'s hard to have a dialogue with her because she is too fond of her own voice.', note: 'Describes an arrogant or narcissistic talker.' },
      { id: 'idiom_119', phrase: 'Grease anybody\'s palm', meaning_en: 'To bribe someone to get a favor done', meaning_hi: 'रिश्वत देना', example: 'You might have to grease his palm to get the license quickly.', note: 'Slang term for financial corruption.' },
      { id: 'idiom_120', phrase: 'Left me in the lurch', meaning_en: 'To abandon someone in a difficult situation when they need help', meaning_hi: 'मुसीबत में साथ छोड़ दिया', example: 'When the business failed, my partner left me in the lurch.', note: 'Implies betrayal of trust.' }
    ]
  },

  'Set 7': {
    setNumber: 7,
    range: '121–140',
    intro: 'Yeh set comprehension, state of mind aur decision making ke complex structures par focused hai.',
    idioms: [
      { id: 'idiom_121', phrase: 'On the brink', meaning_en: 'Very close to a crucial or dangerous situation', meaning_hi: 'कगार पर (लगभग)', example: 'The two countries are currently on the brink of war.', note: 'Often associated with disaster or breakthrough.' },
      { id: 'idiom_122', phrase: 'All Greek', meaning_en: 'Completely unintelligible or impossible to understand', meaning_hi: 'समझ से बाहर (बिल्कुल न समझ में आना)', example: 'This computer programming language is all Greek to me.', note: 'Popularized by Shakespeare\'s Julius Caesar.' },
      { id: 'idiom_123', phrase: 'From pillar to post', meaning_en: 'From one place to another without any definitive result', meaning_hi: 'इधर-उधर भटकना (बिना उद्देश्य के)', example: 'The poor refugee was driven from pillar to post for his papers.', note: 'Describes exhausting and futile movement.' },
      { id: 'idiom_124', phrase: 'In lieu of', meaning_en: 'In place of; instead of', meaning_hi: 'के बदले में', example: 'They gave us vouchers in lieu of a cash refund.', note: 'A formal prepositional phrase of French origin.' },
      { id: 'idiom_125', phrase: 'Turned a deaf ear', meaning_en: 'To intentionally ignore what someone is saying', meaning_hi: 'कोई ध्यान नहीं दिया (अनसुना कर दिया)', example: 'The management turned a deaf ear to the workers\' demands.', note: 'Shows deliberate ignorance.' },
      { id: 'idiom_126', phrase: 'Tooth and nail', meaning_en: 'With maximum effort, energy, and determination', meaning_hi: 'पूरी कोशिश के साथ', example: 'They fought tooth and nail to protect their ancestral property.', note: 'Often paired with verbs like fight or argue.' },
      { id: 'idiom_127', phrase: 'Made his mark', meaning_en: 'To achieve distinct success or recognition in a field', meaning_hi: 'अपनी पहचान बनाई', example: 'He quickly made his mark as a brilliant defense lawyer.', note: 'Signifies permanent recognition.' },
      { id: 'idiom_128', phrase: 'Green-eyed', meaning_en: 'Jealous or envious of someone else', meaning_hi: 'ईर्ष्यालु', example: 'The green-eyed monster of jealousy ruined their friendship.', note: 'Famously coined by Shakespeare.' },
      { id: 'idiom_129', phrase: 'Pros and cons', meaning_en: 'The advantages and disadvantages of a situation', meaning_hi: 'पक्ष और विपक्ष', example: 'We must weigh the pros and cons before making a decision.', note: 'Derived from Latin "pro et contra."' },
      { id: 'idiom_130', phrase: 'Esprit de corps', meaning_en: 'A feeling of pride and mutual loyalty shared by members of a group', meaning_hi: 'एकता (संगठन में सामूहिक भावना)', example: 'The rigorous training built a strong esprit de corps among the soldiers.', note: 'French term commonly used in defense and sports teams.' },
      { id: 'idiom_131', phrase: 'Above board', meaning_en: 'Honest, open, and legally clean', meaning_hi: 'खुला (बिना छुपाव के)', example: 'The entire business transaction was completely fair and above board.', note: 'Implies transparency.' },
      { id: 'idiom_132', phrase: 'For a consideration', meaning_en: 'In exchange for a fee or payment', meaning_hi: 'अगर उसे भुगतान किया जाता (किसी लालच में)', example: 'He agreed to drop the charges against his neighbor for a consideration.', note: 'Legal and financial context.' },
      { id: 'idiom_133', phrase: 'Lock, stock and barrel', meaning_en: 'Including everything; completely', meaning_hi: 'पूरी तरह से (सब कुछ)', example: 'They sold their business lock, stock and barrel.', note: 'Refers to the components of a historical firearm.' },
      { id: 'idiom_134', phrase: 'All at sea', meaning_en: 'Completely confused and unable to decide what to do', meaning_hi: 'हैरान (समझ न आना)', example: 'When the exam paper arrived, I was all at sea.', note: 'Derived from navigation metaphor.' },
      { id: 'idiom_135', phrase: 'Ride the high horse', meaning_en: 'To behave in an arrogant or superior manner', meaning_hi: 'अहंकारी व्यवहार करना', example: 'Stop riding the high horse and talk to us normally.', note: 'Criticizes snobbish behavior.' },
      { id: 'idiom_136', phrase: 'Kept our fingers crossed', meaning_en: 'To hope for a positive or successful outcome', meaning_hi: 'आशा करना (उम्मीद में इंतजार करना)', example: 'We kept our fingers crossed during the job interview results.', note: 'Common gesture of luck.' },
      { id: 'idiom_137', phrase: 'In the family way', meaning_en: 'A euphemism for being pregnant', meaning_hi: 'गर्भवती', example: 'They are buying a bigger house because she is in the family way.', note: 'A polite, traditional idiom.' },
      { id: 'idiom_138', phrase: 'Fool\'s errand', meaning_en: 'A task that is completely pointless or bound to fail', meaning_hi: 'बेकार का काम (व्यर्थ का प्रयास)', example: 'Sending him to find a map without internet was a fool\'s errand.', note: 'Saves time by warning against useless tasks.' },
      { id: 'idiom_139', phrase: 'Pulled a long face', meaning_en: 'To look sad, disappointed, or unhappy', meaning_hi: 'निराश लग रहा था (मुंह लटका लिया)', example: 'He pulled a long face when he found out the party was canceled.', note: 'Refers to facial expressions of grief.' },
      { id: 'idiom_140', phrase: 'Ended in smoke', meaning_en: 'To come to nothing; to yield no practical result', meaning_hi: 'बेकार हो जाना (कोई परिणाम न निकलना)', example: 'All his grand business plans unfortunately ended in smoke.', note: 'Describes wasted efforts.' }
    ]
  },

  'Set 8': {
    setNumber: 8,
    range: '141–160',
    intro: 'Is set mein opportunities, failures aur efforts se related expressions maujood hain.',
    idioms: [
      { id: 'idiom_141', phrase: 'Dashed my hopes', meaning_en: 'To destroy someone\'s plans or optimism completely', meaning_hi: 'आशा तोड़ दी (निराश किया)', example: 'The rejection letter completely dashed my hopes of studying abroad.', note: 'Deals with sudden disappointments.' },
      { id: 'idiom_142', phrase: 'Lion\'s share', meaning_en: 'The largest or major part of something', meaning_hi: 'बड़ा हिस्सा (शेर का हिस्सा)', example: 'The oldest brother inherited the lion\'s share of the estate.', note: 'From Aesop\'s fables.' },
      { id: 'idiom_143', phrase: 'Bird\'s eye view', meaning_en: 'An overall or panoramic view from above', meaning_hi: 'सारांश दृश्य (समग्र नजरिया)', example: 'The rooftop restaurant gives a stunning bird\'s eye view of the city.', note: 'Can mean literal height or a conceptual summary.' },
      { id: 'idiom_144', phrase: 'Eleventh hour', meaning_en: 'At the very last possible moment', meaning_hi: 'अंतिम समय पर', example: 'The contract was signed at the eleventh hour just before midnight.', note: 'Biblical origin.' },
      { id: 'idiom_145', phrase: 'On the spur of the moment', meaning_en: 'Spontaneously, without any prior planning', meaning_hi: 'आवेश में (बिना सोचे-समझे)', example: 'We decided to go on a road trip on the spur of the moment.', note: 'Highlights impulsive actions.' },
      { id: 'idiom_146', phrase: 'Eke out', meaning_en: 'To manage to make a living with great difficulty', meaning_hi: 'पूरा करना (जैसे गुजर-बसर करना)', example: 'The poor farmer struggled to eke out a living from the dry land.', note: 'Often used with "living."' },
      { id: 'idiom_147', phrase: 'In the doldrums', meaning_en: 'In a state of stagnation, depression, or boredom', meaning_hi: 'उदास राज्य में (निराश)', example: 'The retail sector has been in the doldrums all winter.', note: 'Oceanic origin referring to windless areas.' },
      { id: 'idiom_148', phrase: 'In vogue', meaning_en: 'In current fashion or style; highly popular', meaning_hi: 'फैशन में (लोकप्रिय)', example: 'Vintage clothing styles are back in vogue this season.', note: 'Common in design and lifestyle.' },
      { id: 'idiom_149', phrase: 'Wild goose chase', meaning_en: 'A frustrating, hopeless search for something unobtainable', meaning_hi: 'व्यर्थ की खोज (बेकार का प्रयास)', example: 'Looking for a rare book in this small shop was a wild goose chase.', note: 'Introduced by Shakespeare.' },
      { id: 'idiom_150', phrase: 'Draw the long bow', meaning_en: 'To exaggerate stories or claims greatly', meaning_hi: 'बढ़ा-चढ़ाकर बताना (अतिशयोक्ति)', example: 'He likes to draw the long bow when talking about his wealth.', note: 'Refers to historical archers boasting.' },
      { id: 'idiom_151', phrase: 'Count on', meaning_en: 'To rely or depend heavily on someone', meaning_hi: 'भरोसा करना (निर्भर होना)', example: 'You can always count on me during times of trouble.', note: 'Indicates reliability.' },
      { id: 'idiom_152', phrase: 'Bird of passage', meaning_en: 'A transient person who moves frequently from place to place', meaning_hi: 'कम समय रहने वाला (प्रवासी)', example: 'He never stays in one city for long; he\'s a bird of passage.', note: 'Analogous to migratory birds.' },
      { id: 'idiom_153', phrase: 'Pyrrhic victory', meaning_en: 'A victory won at an excessive cost that ruins the winner', meaning_hi: 'महंगी जीत (जीत जिसमें हार ज्यादा हो)', example: 'Winning the lawsuit was a Pyrrhic victory due to high legal fees.', note: 'Named after King Pyrrhus of Epirus.' },
      { id: 'idiom_154', phrase: 'Jaundiced eye', meaning_en: 'A prejudiced, cynical, or pessimistic viewpoint', meaning_hi: 'पक्षपातपूर्ण दृष्टि (तिरस्कार से देखना)', example: 'He views all political promises with a jaundiced eye.', note: 'Implies negative bias.' },
      { id: 'idiom_155', phrase: 'Flog a dead horse', meaning_en: 'To waste energy on a lost cause or finished issue', meaning_hi: 'मरी हुई लाश पर वार (बेकार प्रयास)', example: 'Trying to revive that obsolete project is just flogging a dead horse.', note: 'Warns against wasting resources.' },
      { id: 'idiom_156', phrase: 'Die in harness', meaning_en: 'To die while still actively employed or serving in office', meaning_hi: 'काम करते हुए मरना (सेवा में मृत्यु)', example: 'The dedicated president wished to die in harness.', note: 'Respected dedication phrase.' },
      { id: 'idiom_157', phrase: 'Steal the show', meaning_en: 'To attract the most attention and praise in a performance', meaning_hi: 'सबकी प्रशंसा पाना (चुरा लेना)', example: 'The child actor stole the show with his brilliant performance.', note: 'Highly positive idiom.' },
      { id: 'idiom_158', phrase: 'Turn down', meaning_en: 'To reject an offer, proposal, or application', meaning_hi: 'मना कर दिया (अस्वीकार)', example: 'She turned down the job offer because the salary was low.', note: 'Phrasal verb used as an idiom.' },
      { id: 'idiom_159', phrase: 'Take to one\'s heels', meaning_en: 'To run away swiftly from danger or trouble', meaning_hi: 'भाग जाना', example: 'As soon as they saw the police, the thieves took to their heels.', note: 'Visualizes running away.' },
      { id: 'idiom_160', phrase: 'Drink life to the lees', meaning_en: 'To live life to the absolute fullest and enjoy every drop of experience', meaning_hi: 'पूरा जीवन जीना (रोमांच से भरपूर)', example: 'He traveled the world, determined to drink life to the lees.', note: 'From Tennyson\'s poem "Ulysses."' }
    ]
  },

  'Set 9': {
    setNumber: 9,
    range: '161–180',
    intro: 'Yeh set caution, suspicion, secret actions aur general problems se deal karne wale idioms par built hai.',
    idioms: [
      { id: 'idiom_161', phrase: 'Down in the mouth', meaning_en: 'Feeling visibly depressed, sad, or discouraged', meaning_hi: 'बहुत उदास (मुंह लटकाना)', example: 'Why look so down in the mouth? Things will get better.', note: 'Refers to down-turned facial expressions.' },
      { id: 'idiom_162', phrase: 'Smell a rat', meaning_en: 'To suspect that something dishonest or deceptive is happening', meaning_hi: 'शक होना (कुछ गड़बड़ मालूम पड़ना)', example: 'When he offered a deal that was too good to be true, I smelled a rat.', note: 'Highlights intuition against fraud.' },
      { id: 'idiom_163', phrase: 'In cold blood', meaning_en: 'Deliberately, ruthlessly, and without emotional provocation', meaning_hi: 'सोच-समझकर (बेरहमी से)', example: 'The criminal planned and executed the crime in cold blood.', note: 'Often used in true-crime contexts.' },
      { id: 'idiom_164', phrase: 'Give up', meaning_en: 'To stop making an effort; to surrender or abandon hope', meaning_hi: 'छोड़ देना (त्याग देना)', example: 'Never give up on your dreams, no matter how hard it gets.', note: 'A universally used phrase.' },
      { id: 'idiom_165', phrase: 'Put off', meaning_en: 'To postpone an event or a task to a later date', meaning_hi: 'टाल दिया (स्थगित करना)', example: 'Don\'t put off until tomorrow what you can do today.', note: 'Procrastination warning.' },
      { id: 'idiom_166', phrase: 'White elephant', meaning_en: 'A costly possession that is useless and difficult to maintain', meaning_hi: 'महंगी लेकिन बेकार चीज़', example: 'The new stadium turned out to be a white elephant for the city.', note: 'Originates from ancient Thai royal gifts.' },
      { id: 'idiom_167', phrase: 'Take someone for a ride', meaning_en: 'To deceive, cheat, or trick someone maliciously', meaning_hi: 'धोखा देना', example: 'Be careful with that salesman; he might take you for a ride.', note: 'Warns against smooth scammers.' },
      { id: 'idiom_168', phrase: 'Strain every nerve', meaning_en: 'To exert the maximum possible physical or mental effort', meaning_hi: 'पूरी कोशिश करना', example: 'He strained every nerve to cross the finish line first.', note: 'Depicts supreme athletic or academic effort.' },
      { id: 'idiom_169', phrase: 'Forlorn hope', meaning_en: 'A persistent plan or hope that has almost no chance of success', meaning_hi: 'कमजोर उम्मीद (जिसकी सफलता दूर हो)', example: 'His attempt to restart the vintage computer was a forlorn hope.', note: 'Military origin meaning a vanguard unit.' },
      { id: 'idiom_170', phrase: 'In abeyance', meaning_en: 'A state of temporary suspension or inactivity', meaning_hi: 'स्थगित (रुका हुआ)', example: 'The construction of the highway is held in abeyance until approvals.', note: 'Common in legislative or formal projects.' },
      { id: 'idiom_171', phrase: 'To get at', meaning_en: 'To reach, imply, or discover something hidden', meaning_hi: 'पहुंचना (तक पहुंचना)', example: 'What exactly are you trying to get at with these questions?', note: 'Can mean literal reach or conceptual implication.' },
      { id: 'idiom_172', phrase: 'Fool\'s paradise', meaning_en: 'A state of temporary happiness based on false beliefs or illusions', meaning_hi: 'झूठी खुशियाँ (भ्रम में रहना)', example: 'If you think he will pay you back without an agreement, you are living in a fool\'s paradise.', note: 'Warns against ignoring reality.' },
      { id: 'idiom_173', phrase: 'An axe to grind', meaning_en: 'To have a hidden selfish motive or personal agenda', meaning_hi: 'स्वार्थ होना (अपना मतलब)', example: 'He is volunteering for the project because he has an axe to grind.', note: 'Popularized by Benjamin Franklin stories.' },
      { id: 'idiom_174', phrase: 'Bell the cat', meaning_en: 'To perform a highly dangerous task for the common good', meaning_hi: 'मुश्किल काम करना (खतरा मोल लेना)', example: 'Everyone wants the boss to change the rules, but who will bell the cat?', note: 'From an old fable about mice and a cat.' },
      { id: 'idiom_175', phrase: 'Rainy days', meaning_en: 'Future times of financial hardship or unexpected trouble', meaning_hi: 'बुरा समय', example: 'It is wise to save a portion of your salary for rainy days.', note: 'Deals with proactive financial planning.' },
      { id: 'idiom_176', phrase: 'Alpha and the omega', meaning_en: 'The beginning and the end; the absolute entirety of something', meaning_hi: 'आदि और अंत', example: 'For him, professional football was the alpha and the omega of life.', note: 'From the first and last letters of the Greek alphabet.' },
      { id: 'idiom_177', phrase: 'Lay bare', meaning_en: 'To fully reveal or expose something hidden or secret', meaning_hi: 'उजागर कर देना (खोल देना)', example: 'The investigative journalist laid bare the absolute truth about the scam.', note: 'Unmasking reality.' },
      { id: 'idiom_178', phrase: 'Stem from', meaning_en: 'To originate from or be caused by a specific source', meaning_hi: 'उत्पन्न होना (जड़ से)', example: 'Most of his financial anxieties stem from poor investments.', note: 'Causal link phrase.' },
      { id: 'idiom_179', phrase: 'Stir up a hornet\'s nest', meaning_en: 'To cause massive trouble, anger, or controversy intentionally', meaning_hi: 'बवाल खड़ा करना', example: 'His comments about changing the traditions stirred up a hornet\'s nest.', note: 'Vivid imagery of insect agitation.' },
      { id: 'idiom_180', phrase: 'To get along', meaning_en: 'To maintain a harmonious or friendly relationship with someone', meaning_hi: 'साथ चलना (समायोजन बना कर रहना)', example: 'The new employee manages to get along beautifully with everyone.', note: 'Refers to social compatibility.' }
    ]
  },

  'Set 10': {
    setNumber: 10,
    range: '181–200',
    intro: 'Yeh set active strategies, direct interaction aur unique phrases par focused hai jo exams mein bar-bar aate hain.',
    idioms: [
      { id: 'idiom_181', phrase: 'Make up', meaning_en: 'To reconcile or resolve a quarrel; also means to invent a story', meaning_hi: 'सुलह करना (मेकअप करना)', example: 'They had an argument but decided to make up quickly.', note: 'Can mean beauty cosmetics or relationship reconciliation.' },
      { id: 'idiom_182', phrase: 'With might and main', meaning_en: 'With all possible strength, power, and effort', meaning_hi: 'पूरी ताकत से', example: 'The rowers pulled with might and main against the heavy current.', note: 'Old English poetic phrasing.' },
      { id: 'idiom_183', phrase: 'Iron will', meaning_en: 'An exceptionally strong, unyielding determination', meaning_hi: 'दृढ़ संकल्प', example: 'Her iron will allowed her to overcome critical physical injuries.', note: 'Similar to "man of iron."' },
      { id: 'idiom_184', phrase: 'Uphill task', meaning_en: 'A highly difficult task requiring immense and continuous effort', meaning_hi: 'मुश्किल काम', example: 'Convincing the traditional board members will be an uphill task.', note: 'Metaphorical steep climb.' },
      { id: 'idiom_185', phrase: 'Turn the tables', meaning_en: 'To completely reverse a situation to gain an advantage over a rival', meaning_hi: 'स्थिति पलट देना (बाजी पलटना)', example: 'With a surprise counter-attack, the team managed to turn the tables.', note: 'Derived from board game reversals.' },
      { id: 'idiom_186', phrase: 'Turn a blind eye', meaning_en: 'To pretend not to notice something wrong deliberately', meaning_hi: 'अनदेखा करना', example: 'The security guards turned a blind eye to minor entry violations.', note: 'Supposedly originated from Admiral Nelson placing a telescope to his blind eye.' },
      { id: 'idiom_187', phrase: 'Up a blind alley', meaning_en: 'Following a course of action that leads to no progress or success', meaning_hi: 'गलत राह पर (जहां सफलता न मिले)', example: 'The police realized their current line of questioning was up a blind alley.', note: 'Refers to a dead-end street.' },
      { id: 'idiom_188', phrase: 'Blood is thicker than water', meaning_en: 'Family relationships and loyalties are stronger than any other bonds', meaning_hi: 'अपना अपना होता है (खून पानी से गाढ़ा होता है)', example: 'When he needed real help, he turned to his family because blood is thicker than water.', note: 'Ancient proverbial wisdom.' },
      { id: 'idiom_189', phrase: 'Squeaky wheel gets the grease', meaning_en: 'The person who complains or makes their needs known loudest gets attention', meaning_hi: 'रोने वाले की ही सुनवाई होती है', example: 'If you want a room upgrade, complain now; the squeaky wheel gets the grease.', note: 'Highlights American approach to proactive demanding.' },
      { id: 'idiom_190', phrase: 'Run out of steam', meaning_en: 'To suddenly lose momentum, energy, or enthusiasm to finish a task', meaning_hi: 'हिम्मत हारना (उत्साह खत्म हो जाना)', example: 'The long marathon runner ran out of steam near the last kilometer.', note: 'Originates from 19th-century steam engine mechanics.' },
      { id: 'idiom_191', phrase: 'Go for broke', meaning_en: 'To risk absolutely everything in an all-out effort to succeed', meaning_hi: 'सब कुछ दांव पर लगा देना', example: 'The startup decided to go for broke with their final revolutionary product launch.', note: 'Gambling slang origin.' },
      { id: 'idiom_192', phrase: 'Sleep with the fishes', meaning_en: 'A euphemism for being murdered and disposed of in water', meaning_hi: 'मर जाना (समाप्त हो जाना)', example: 'In classic mob movies, characters who betray the family sleep with the fishes.', note: 'Famously popularized by gangster pop culture like The Godfather.' },
      { id: 'idiom_193', phrase: 'To go down like a lead balloon', meaning_en: 'To fail miserably or receive a highly negative reaction', meaning_hi: 'बुरी तरह असफल होना (कोई प्रभाव न पड़ना)', example: 'His joke about the company budget went down like a lead balloon.', note: 'Vividly states lack of buoyancy/appeal.' },
      { id: 'idiom_194', phrase: 'To get one\'s walking papers', meaning_en: 'To be officially dismissed or fired from a job', meaning_hi: 'नौकरी से निकाल दिया जाना', example: 'The underperforming executive finally got his walking papers yesterday.', note: 'Harsh termination slang.' },
      { id: 'idiom_195', phrase: 'There\'s no such thing as a free lunch', meaning_en: 'Everything has an underlying cost; nothing is completely free', meaning_hi: 'कुछ भी मुफ्त में नहीं मिलता', example: 'They gave us a free phone, but the monthly tariff is huge — there\'s no such thing as a free lunch.', note: 'Often abbreviated as TNSTAAFL in economics.' },
      { id: 'idiom_196', phrase: 'To chew someone out', meaning_en: 'To scold or reprimand someone harshly and aggressively', meaning_hi: 'किसी को डांटना (फटकार लगाना)', example: 'The drill sergeant chewed the recruit out for having a messy uniform.', note: 'Common in military and informal context.' },
      { id: 'idiom_197', phrase: 'To chip on his shoulder', meaning_en: 'To maintain a persistent bad attitude due to a deep past grievance', meaning_hi: 'पुरानी रंजिश रखना (लड़ाई के मूड में रहना)', example: 'He walks around with a chip on his shoulder, ready to argue with anyone.', note: 'Refers to historical daring rituals of throwing wood chips.' },
      { id: 'idiom_198', phrase: 'To shoot the breeze', meaning_en: 'To engage in casual, relaxed, and aimless conversation', meaning_hi: 'गपशप करना (अनौपचारिक बातचीत)', example: 'We sat on the front porch for hours just shooting the breeze.', note: 'Relaxed social slang.' },
      { id: 'idiom_199', phrase: 'Get someone\'s goat', meaning_en: 'To intentionally irritate or deeply annoy someone', meaning_hi: 'किसी को गुस्सा दिलाना', example: 'His condescending tone really managed to get my goat.', note: 'Supposedly from keeping goats calm next to racehorses.' },
      { id: 'idiom_200', phrase: 'Spick and span', meaning_en: 'Completely neat, clean, spotless, and well-organized', meaning_hi: 'साफ-सुथरा (चकाचक)', example: 'She spent the entire morning making sure the house was spick and span.', note: 'Refers to shiny new ships historically.' }
    ]
  },

  'Set 11': {
    setNumber: 11,
    range: '201–220',
    intro: 'Set 11 incorporates formal, strategic, and corporate terms frequently evaluated in competitive scenarios.',
    idioms: [
      { id: 'idiom_201', phrase: 'The thin end of the wedge', meaning_en: 'A minor action that will inevitably lead to something much more serious and damaging', meaning_hi: 'हानिकारक विकास की शुरुआत', example: 'Allowing small budget cuts is just the thin end of the wedge.', note: 'Warns against a slippery slope.' },
      { id: 'idiom_202', phrase: 'Know the ropes', meaning_en: 'To be fully experienced and familiar with the specific details or operations of a system', meaning_hi: 'बारीकियों को समझना (पूरी जानकारी होना)', example: 'Ask senior staff members; they truly know the ropes around here.', note: 'Nautical origin from handling sailing ropes.' },
      { id: 'idiom_203', phrase: 'On tiptoe', meaning_en: 'Full of intense anticipation, excitement, or alertness', meaning_hi: 'अत्यधिक उत्साहित', example: 'The children were standing on tiptoe waiting for Santa Claus.', note: 'Physical posture metaphor.' },
      { id: 'idiom_204', phrase: 'Have kittens', meaning_en: 'To become exceptionally nervous, anxious, or upset over something', meaning_hi: 'चिंतित होना (परेशान होना)', example: 'My mother will have kittens if she finds out I damaged the car.', note: 'British colloquialism.' },
      { id: 'idiom_205', phrase: 'While away', meaning_en: 'To pass time casually and lazily without doing much work', meaning_hi: 'समय बर्बाद करना (बेकार में गंवाना)', example: 'We decided to while away the afternoon reading books by the pool.', note: 'Deals with peaceful leisure.' },
      { id: 'idiom_206', phrase: 'Turn up', meaning_en: 'To arrive, appear unexpectedly, or be found after a search', meaning_hi: 'आ जाना (प्रकट होना)', example: 'Don\'t worry about the missing wallet; it will turn up eventually.', note: 'Phrasal idiom.' },
      { id: 'idiom_207', phrase: 'By a long chalk', meaning_en: 'By a very large margin; completely or undoubtedly', meaning_hi: 'अधिकांशतः', example: 'This is the best film of the entire franchise by a long chalk.', note: 'British idiom based on historic tavern scores.' },
      { id: 'idiom_208', phrase: 'A purple weight', meaning_en: 'A highly ornate, ornate, or overly grand portion of a literary piece', meaning_hi: 'साहित्यिक रचना में भव्य भाग', example: 'The historical novel contains an impressive purple weight describing the coronation.', note: 'Literary criticism terminology.' },
      { id: 'idiom_209', phrase: 'A quid pro quo', meaning_en: 'A clear favor or advantage granted in return for something specific', meaning_hi: 'बदला में कुछ (बराबर का बदला)', example: 'They gave him the promotion as a quid pro quo for keeping the secret.', note: 'Latin term frequently used in politics and law.' },
      { id: 'idiom_210', phrase: 'Under a cloud', meaning_en: 'Under suspicion of wrongdoing or out of favor with others', meaning_hi: 'संदेह के बारे में (घेरे में)', example: 'The accountant left the corporate office under a cloud of mystery.', note: 'Deals with reputation damage.' },
      { id: 'idiom_211', phrase: 'Sweeping statement', meaning_en: 'An overgeneralized, inaccurate statement that ignores important details', meaning_hi: 'सामान्यीकृत कथन (हर चीज पर लागू)', example: 'Saying all teenagers are irresponsible is a highly sweeping statement.', note: 'Criticizes unfair generalizations.' },
      { id: 'idiom_212', phrase: 'To a hair', meaning_en: 'With absolute accuracy and precision; down to the smallest detail', meaning_hi: 'बिल्कुल सटीक (तनिक भी अंतर न होना)', example: 'The description of the suspect matched his appearance to a hair.', note: 'Implies perfect measurement.' },
      { id: 'idiom_213', phrase: 'Let the grass grow under one\'s feet', meaning_en: 'To delay action or fail to act through sheer laziness', meaning_hi: 'आलसी बनकर रहना', example: 'If you want to win this business deal, you can\'t let the grass grow under your feet.', note: 'Warns against procrastination.' },
      { id: 'idiom_214', phrase: 'Fights shy of', meaning_en: 'To intentionally avoid a person or task out of mistrust or reluctance', meaning_hi: 'अविश्वास के कारण बचना', example: 'He always fights shy of joining large corporate discussions.', note: 'Depicts active evasion.' },
      { id: 'idiom_215', phrase: 'Sink or swim', meaning_en: 'To fail or succeed entirely based on one\'s own independent efforts', meaning_hi: 'अपने बूते सफल या असफल होना', example: 'In this competitive market, new businesses must learn to sink or swim.', note: 'Indicates zero external assistance.' },
      { id: 'idiom_216', phrase: 'Cut the mustard', meaning_en: 'To meet the required standards or expectations successfully', meaning_hi: 'संतोषजनक ढंग से काम करना', example: 'The new recruit didn\'t quite cut the mustard during training.', note: 'American origin meaning high adequacy.' },
      { id: 'idiom_217', phrase: 'Vote with one\'s feet', meaning_en: 'To express strong dissatisfaction by walking out or leaving an organization', meaning_hi: 'वहां से चले जाना (असंतोष दिखाना)', example: 'When the ticket prices increased, customers voted with their feet.', note: 'Active form of consumer protest.' },
      { id: 'idiom_218', phrase: 'Touch and go', meaning_en: 'An extremely delicate, risky, or uncertain situation', meaning_hi: 'अनिश्चित स्थिति (मुश्किल से होना)', example: 'It was touch and go whether the doctors could save his hand.', note: 'Implies suspense and risk.' },
      { id: 'idiom_219', phrase: 'A benjamin\'s portion', meaning_en: 'The largest share or an exceptionally massive amount of something', meaning_hi: 'बड़ा हिस्सा', example: 'He received a benjamin\'s portion of the inheritance cake.', note: 'Derived from Biblical literature.' },
      { id: 'idiom_220', phrase: 'To put one\'s hand to plough', meaning_en: 'To commit oneself firmly to a large, difficult task', meaning_hi: 'काम पर लग जाना', example: 'Once you put your hand to the plough, don\'t look back.', note: 'Agricultural commitment metaphor.' }
    ]
  },

  'Set 12': {
    setNumber: 12,
    range: '221–240',
    intro: 'Is set mein classic idioms hain jo major turning points aur extreme situations ko depict karte hain.',
    idioms: [
      { id: 'idiom_221', phrase: 'To move heaven and earth', meaning_en: 'To try every possible method and make supreme efforts to achieve a goal', meaning_hi: 'हर संभव प्रयास करना', example: 'The mother moved heaven and earth to get medical help for her child.', note: 'Depicts boundless effort.' },
      { id: 'idiom_222', phrase: 'To pour oil on troubled waters', meaning_en: 'To try and soothe or calm down an angry argument or dispute', meaning_hi: 'झगड़ा शांत करना', example: 'His diplomatic intervention managed to pour oil on troubled waters.', note: 'Refers to physical effect of oil slowing waves.' },
      { id: 'idiom_223', phrase: 'Open pandora\'s box', meaning_en: 'To start a process that creates numerous complex problems', meaning_hi: 'परेशानियों का पिटारा खोलना', example: 'The new tax investigation opened a massive pandora\'s box.', note: 'From Greek mythology.' },
      { id: 'idiom_224', phrase: 'Break the ice', meaning_en: 'To start a conversation to help people feel relaxed in a social setting', meaning_hi: 'शुरुआती झिझक दूर करना (बातचीत शुरू करना)', example: 'He cracked a joke to break the ice during the meeting.', note: 'Popular in professional workshops.' },
      { id: 'idiom_225', phrase: 'It takes two to tango', meaning_en: 'Both parties involved in a bad situation or argument are responsible', meaning_hi: 'दोनों पक्ष जिम्मेदार होते हैं', example: 'Don\'t just blame him for the fight; it takes two to tango.', note: 'Stresses mutual accountability.' },
      { id: 'idiom_226', phrase: 'Icing on the cake', meaning_en: 'An extra benefit or feature that makes a good situation even better', meaning_hi: 'अतिरिक्त लाभ (जैसे केक पर आइसिंग)', example: 'Getting the promotion was great, and the company car was icing on the cake.', note: 'Highly positive aesthetic idiom.' },
      { id: 'idiom_227', phrase: 'Devil\'s advocate', meaning_en: 'A person who expresses a contrary opinion just to provoke debate', meaning_hi: 'जानबूझकर विपक्ष की बात करने वाला', example: 'I agree with your plan, but let me play devil\'s advocate for a moment.', note: 'From historical Catholic canonization procedures.' },
      { id: 'idiom_228', phrase: 'Blessing in disguise', meaning_en: 'Something that initially seems very bad but results in a good outcome', meaning_hi: 'आपदा में लाभ (पहले बुरा फिर अच्छा होना)', example: 'Missing that train was a blessing in disguise because it crashed.', note: 'Identical to idiom 44.' },
      { id: 'idiom_229', phrase: 'Cat got your tongue', meaning_en: 'A phrase asked to someone who is inexplicably silent or refusing to speak', meaning_hi: 'मुंह क्यों बंद है? (बोल क्यों नहीं रहे?)', example: 'What\'s the matter? Cat got your tongue?', note: 'Playful or mocking informal question.' },
      { id: 'idiom_230', phrase: 'Read the riot act', meaning_en: 'To issue a severe, final warning to stop misbehaving immediately', meaning_hi: 'कड़ी फटकार लगाना (राज़ीनामा पढ़ाना)', example: 'The headmaster read the riot act to the disruptive students.', note: 'Based on historical British law against unruly crowds.' },
      { id: 'idiom_231', phrase: 'Out of the woods', meaning_en: 'Out of danger, difficulty, or critical health problems', meaning_hi: 'खतरे से बाहर आना', example: 'The patient is recovering well but is not completely out of the woods yet.', note: 'Common in medical or financial updates.' },
      { id: 'idiom_232', phrase: 'Be in the black', meaning_en: 'To be financially successful and making a clear profit', meaning_hi: 'कमाई का खर्च से अधिक होना (मुनाफे में)', example: 'After two years of absolute losses, our company is finally in the black.', note: 'Based on historic ledger ink choices.' },
      { id: 'idiom_233', phrase: 'Give stick', meaning_en: 'To criticize, mock, or scold someone severely', meaning_hi: 'आलोचना करना (डांटना)', example: 'His friends gave him a lot of stick for wearing a bright suit.', note: 'British slang.' },
      { id: 'idiom_234', phrase: 'Chew the fat', meaning_en: 'To chat in an aimless, friendly, and prolonged manner', meaning_hi: 'देर तक गपशप करना', example: 'They spent the evening drinking coffee and chewing the fat.', note: 'Similar to "shooting the breeze."' },
      { id: 'idiom_235', phrase: 'Bread and butter', meaning_en: 'A person\'s main source of stable income or livelihood', meaning_hi: 'आमदनी का मुख्य स्रोत (रोजी-रोटी)', example: 'Teaching music lessons is my primary bread and butter.', note: 'Deals with baseline economic survival.' },
      { id: 'idiom_236', phrase: 'Bed of thorns', meaning_en: 'A situation full of extreme difficulties, suffering, and anxiety', meaning_hi: 'कठिनाइयों से भरा (घने कांटों जैसा)', example: 'His life as a displaced political refugee has been a bed of thorns.', note: 'Absolute opposite of a "bed of roses."' },
      { id: 'idiom_237', phrase: 'Back on one\'s feet', meaning_en: 'Fully recovered from an illness or a serious financial crisis', meaning_hi: 'बीमारी के बाद स्वस्थ होना', example: 'It took him six months after the accident to get back on his feet.', note: 'Restoration metaphor.' },
      { id: 'idiom_238', phrase: 'Bronx cheer', meaning_en: 'A loud, mocking sound made with the lips to show total disapproval', meaning_hi: 'नकारात्मक प्रोत्साहन (व्यंग्य से प्रोत्साहित करना)', example: 'The angry crowd gave the poor performer a loud Bronx cheer.', note: 'American theatrical slang for a raspberry sound.' },
      { id: 'idiom_239', phrase: 'Neck of the woods', meaning_en: 'A specific neighborhood, area, or region where someone lives', meaning_hi: 'आस-पास का क्षेत्र (इलाका)', example: 'If you are ever in our neck of the woods, please visit us.', note: 'Friendly colloquial phrase.' },
      { id: 'idiom_240', phrase: 'Beet red', meaning_en: 'To have a dark red face due to deep embarrassment or extreme anger', meaning_hi: 'शर्म या गुस्से से लाल होना', example: 'His face turned beet red when he forgot his lines on stage.', note: 'Visual comparison to the vegetable.' }
    ]
  },

  'Set 13': {
    setNumber: 13,
    range: '241–260',
    intro: 'Modern behavior traits, conversational responses, aur everyday situations is set ka hissa hain.',
    idioms: [
      { id: 'idiom_241', phrase: 'Kitty corner', meaning_en: 'Diagonally opposite or across from a specific location', meaning_hi: 'तिरछी दूरी पर (विकर्ण विपरीत स्थान)', example: 'The bakery is situated kitty corner to the main library.', note: 'Also pronounced as "cater-cornered."' },
      { id: 'idiom_242', phrase: 'Get the boot', meaning_en: 'To be abruptly dismissed, fired, or kicked out', meaning_hi: 'नौकरी से निकाला जाना', example: 'He got the boot for consistently arriving late to the shop.', note: 'Very direct informal slang.' },
      { id: 'idiom_243', phrase: 'Ace in the hole', meaning_en: 'A powerful, hidden resource kept secret until absolutely needed', meaning_hi: 'गुप्त हथियार (जरूरत तक छुपा संसाधन)', example: 'Our surprise legal witness was our real ace in the hole.', note: 'Poker card origin.' },
      { id: 'idiom_244', phrase: 'Run helter-skelter', meaning_en: 'To run around in a chaotic, disorderly, and rushed manner', meaning_hi: 'अव्यवस्थित रूप से भागना', example: 'When the sudden rain started, people ran helter-skelter for shelter.', note: 'Depicts immediate panic.' },
      { id: 'idiom_245', phrase: 'Throw out of gears', meaning_en: 'To disrupt the smooth operation or planning of a system completely', meaning_hi: 'व्यवस्था बाधित करना', example: 'The power outage threw the entire factory production out of gears.', note: 'Mechanical failure metaphor.' },
      { id: 'idiom_246', phrase: 'Quite the thing', meaning_en: 'Highly fashionable, acceptable, or popular at the current moment', meaning_hi: 'बहुत फैशनेबल और लोकप्रिय', example: 'Eco-friendly sustainable packaging is quite the thing now.', note: 'Social trend phrase.' },
      { id: 'idiom_247', phrase: 'All mouth no trousers', meaning_en: 'Someone who talks boastfully but lacks the courage or ability to act', meaning_hi: 'दिखावटी बातें करना (करतूत कुछ नहीं)', example: 'Don\'t worry about his threats; he is all mouth and no trousers.', note: 'British/Irish insult meaning empty talk.' },
      { id: 'idiom_248', phrase: 'Be in the air', meaning_en: 'A feeling, idea, or rumor that is noticeable or prevalent everywhere', meaning_hi: 'हर किसी के दिमाग में छाया होना', example: 'With spring around the corner, romance was definitely in the air.', note: 'Refers to pervasive atmospheres.' },
      { id: 'idiom_249', phrase: 'Children should be seen and not heard', meaning_en: 'An old-fashioned rule stating that children should not speak before elders', meaning_hi: 'बच्चे बड़ों के सामने चुप रहें', example: 'My strict grandfather firmly believed that children should be seen and not heard.', note: 'Traditional strict parenting idiom.' },
      { id: 'idiom_250', phrase: 'Ease somebody\'s mind', meaning_en: 'To reduce someone\'s anxiety, worry, or mental distress', meaning_hi: 'किसी की चिंता दूर करना', example: 'The medical test results finally managed to ease her mind.', note: 'Comforting idiom.' },
      { id: 'idiom_251', phrase: 'The nitty-gritty', meaning_en: 'The most practical, essential, and basic details of a matter', meaning_hi: 'विषय का सबसे जरूरी या वास्तविक हिस्सा', example: 'Let\'s stop wasting time and get down to the nitty-gritty of the contract.', note: 'Core focus idiom.' },
      { id: 'idiom_252', phrase: 'To quit on someone', meaning_en: 'To stop helping or abandon someone precisely when they need you', meaning_hi: 'जरूरत पड़ने पर साथ छोड़ना', example: 'I trusted him, but he decided to quit on me during the crisis.', note: 'Relates to reliability failures.' },
      { id: 'idiom_253', phrase: 'Excuse my French', meaning_en: 'An apology phrase used for accidentally swearing or using bad language', meaning_hi: 'गाली देने के लिए माफी माँगना', example: 'He is an absolute idiot, if you\'ll excuse my French.', note: 'Humorous conversational disclaimer.' },
      { id: 'idiom_254', phrase: 'Chicken out', meaning_en: 'To decide not to do something out of pure fear or cowardice', meaning_hi: 'डर से पीछे हट जाना', example: 'He wanted to go skydiving but chickened out at the absolute last minute.', note: 'Popular youth slang.' },
      { id: 'idiom_255', phrase: 'A bad hair day', meaning_en: 'A humorous day where everything seems to go systematically wrong', meaning_hi: 'जब सब कुछ गलत हो जाए (बुरा दिन)', example: 'I lost my keys, spilled coffee, and missed the train — it\'s a total bad hair day.', note: 'Modern casual idiom.' },
      { id: 'idiom_256', phrase: 'A penny for your thoughts', meaning_en: 'A friendly way to ask a silent person what they are thinking about', meaning_hi: 'क्या सोच रहे हो? (प्रश्न करने का ढंग)', example: 'You have been staring out the window for an hour; a penny for your thoughts?', note: 'Gentle query phrase.' },
      { id: 'idiom_257', phrase: 'All in a day\'s work', meaning_en: 'Accepting difficult or unusual tasks as a normal part of one\'s job', meaning_hi: 'बहुत मुश्किल काम भी रोज का हिस्सा मान लेना', example: 'Dealing with angry customers is all in a day\'s work for a receptionist.', note: 'Shows professional stoicism.' },
      { id: 'idiom_258', phrase: 'A picture paints a thousand words', meaning_en: 'A visual image can convey a complex message far faster than words', meaning_hi: 'एक तस्वीर हजार शब्दों के बराबर होती है', example: 'Showing the graph of losses made the problem clear — a picture paints a thousand words.', note: 'Stresses visual communication.' },
      { id: 'idiom_259', phrase: 'To bid defiance', meaning_en: 'To openly disregard, oppose, or challenge authority recklessly', meaning_hi: 'लापरवाही से अनदेखा करना', example: 'The rebels decided to bid defiance to the tyrannical governor\'s decree.', note: 'Formal and historical tone.' },
      { id: 'idiom_260', phrase: 'Get on somebody\'s nerves', meaning_en: 'To persistently irritate, annoy, or vex someone intensely', meaning_hi: 'चिढ़ पैदा करना', example: 'The constant clicking of his pen is starting to get on my nerves.', note: 'Highly common daily complaint.' }
    ]
  },

  'Set 14': {
    setNumber: 14,
    range: '261–280',
    intro: 'Social conflicts, personal perceptions aur decision dilemmas par mabni hai yeh section.',
    idioms: [
      { id: 'idiom_261', phrase: 'Eyebrow raising', meaning_en: 'Causing clear surprise, shock, disbelief, or mild disapproval', meaning_hi: 'चौका देने वाला (सदमा देने वाला)', example: 'His sudden resignation from the company was truly eyebrow raising.', note: 'Visual indicator of surprise.' },
      { id: 'idiom_262', phrase: 'Be glad to see the back of', meaning_en: 'To be genuinely happy when an unpleasant person finally leaves', meaning_hi: 'किसी के जाने पर खुश होना', example: 'He was a terrible roommate; I was glad to see the back of him.', note: 'Relief at someone\'s exit.' },
      { id: 'idiom_263', phrase: 'With bated breath', meaning_en: 'In a state of extreme anxiety, suspense, or excited anticipation', meaning_hi: 'उत्सुकता से (सांस रोककर)', example: 'The crowd waited with bated breath for the final lottery announcement.', note: 'Classic dramatic phrasing.' },
      { id: 'idiom_264', phrase: 'Add insult to injury', meaning_en: 'To worsen an already bad situation by mocking or hurting further', meaning_hi: 'जखम पर नमक छिड़कना (बुरा करके और बुरा करना)', example: 'They canceled his contract and, to add insult to injury, refused to pay his dues.', note: 'Similar to "rubbing salt in wounds."' },
      { id: 'idiom_265', phrase: 'Tie the knot', meaning_en: 'An informal expression meaning to get married', meaning_hi: 'शादी करना', example: 'After dating for seven long years, they finally decided to tie the knot.', note: 'Very popular wedding idiom.' },
      { id: 'idiom_266', phrase: 'Easier said than done', meaning_en: 'Something that sounds exceptionally easy in theory but is very hard in reality', meaning_hi: 'कहना आसान करना मुश्किल', example: 'Finding a cheap apartment in Mumbai is definitely easier said than done.', note: 'Reality check phrase.' },
      { id: 'idiom_267', phrase: 'A red rag to a bull', meaning_en: 'An action or topic that is certain to make a specific person violently angry', meaning_hi: 'बहुत गुस्सा दिलाने वाली बात या काम', example: 'Mentioning his ex-partner\'s name is like a red rag to a bull.', note: 'Based on popular bullfighting misconceptions.' },
      { id: 'idiom_268', phrase: 'Be under no illusions', meaning_en: 'To fully understand and accept the harsh, realistic truth of a situation', meaning_hi: 'सच्चाई से पूरी तरह वाकिफ होना', example: 'We are under no illusions about the immense challenges facing our startup.', note: 'Implies pragmatic awareness.' },
      { id: 'idiom_269', phrase: 'Level playing field', meaning_en: 'A situation where everyone has an absolutely equal opportunity to succeed', meaning_hi: 'हर किसी को बराबर का मौका होना', example: 'The new regulations ensure a completely level playing field for all tech firms.', note: 'Fair competition terminology.' },
      { id: 'idiom_270', phrase: 'To gird up the loins', meaning_en: 'To prepare oneself physically or mentally for hard work or a long struggle', meaning_hi: 'कड़ी मेहनत के लिए तैयार होना', example: 'It\'s time to gird up our loins and prepare for the final examinations.', note: 'Ancient biblical clothing metaphor.' },
      { id: 'idiom_271', phrase: 'Evil twin', meaning_en: 'A humorous imaginary entity blamed for one\'s own bad behavior or mistakes', meaning_hi: 'काला स्वाँग (बुरे व्यवहार को सही ठहराने के लिए काल्पनिक जुड़वां)', example: 'I didn\'t eat the entire cake; it must have been my evil twin.', note: 'Playful pop culture idiom.' },
      { id: 'idiom_272', phrase: 'Be in the red', meaning_en: 'To be losing money, in debt, or running a clear financial deficit', meaning_hi: 'नुकसान या कर्ज में होना', example: 'The corporate account is currently in the red by thousands of dollars.', note: 'Opposite of "being in the black."' },
      { id: 'idiom_273', phrase: 'In cahoots with', meaning_en: 'Secretly plotting or conspiring with someone to do something dishonest', meaning_hi: 'साठ-गांठ करना (बुरे उद्देश्य से मिलकर काम करना)', example: 'The corrupt politician was found to be in cahoots with local smugglers.', note: 'Implies shady alliances.' },
      { id: 'idiom_274', phrase: 'Come true', meaning_en: 'A dream, hope, or prediction that materializes or becomes reality', meaning_hi: 'सच होना (जैसे सपना)', example: 'Winning the national championship made his lifelong dream come true.', note: 'Positive achievement phrase.' },
      { id: 'idiom_275', phrase: 'Catch red-handed', meaning_en: 'To catch someone in the absolute middle of committing a crime or wrongdoing', meaning_hi: 'रंगे हाथों पकड़ना', example: 'The security guard managed to catch the shoplifter red-handed.', note: 'Historical origin from catching poachers with blood on hands.' },
      { id: 'idiom_276', phrase: 'To feel blue', meaning_en: 'To feel deeply sad, depressed, melancholy, or unhappy', meaning_hi: 'दुखी होना', example: 'Whenever it rains continuously for days, I tend to feel blue.', note: 'Connects blue color to sadness.' },
      { id: 'idiom_277', phrase: 'No strings attached', meaning_en: 'An offer or agreement given without any hidden conditions or restrictions', meaning_hi: 'बिना किसी शर्त के (समझौता)', example: 'They offered him a massive financial grant with absolutely no strings attached.', note: 'Implies complete freedom.' },
      { id: 'idiom_278', phrase: 'A bird in the hand is worth two in the bush', meaning_en: 'It is better to keep what you securely have than risk it to get more', meaning_hi: 'अपनी सुरक्षित चीज़, दूसरे की संभावित चीज़ से बेहतर', example: 'Don\'t quit your stable job for an unverified startup offer; a bird in the hand is worth two in the bush.', note: 'Classic proverb on risk management.' },
      { id: 'idiom_279', phrase: 'A doubting Thomas', meaning_en: 'A deeply skeptical person who refuses to believe anything without direct evidence', meaning_hi: 'शक्की स्वभाव का व्यक्ति (जो बिना सबूत न माने)', example: 'He is a total doubting Thomas; he won\'t believe the news until he sees it.', note: 'Derived from the Biblical disciple Thomas.' },
      { id: 'idiom_280', phrase: 'Pass the buck', meaning_en: 'To shift the blame or responsibility of an issue to someone else', meaning_hi: 'दोष दूसरे पर मढ़ देना', example: 'Instead of solving the error, the lazy employee tried to pass the buck.', note: 'From poker game markers historically.' }
    ]
  },

  'Set 15': {
    setNumber: 15,
    range: '281–300',
    intro: 'Is set mein risk evaluation, behavioral changes aur realistic scenarios ke dynamic representations hain.',
    idioms: [
      { id: 'idiom_281', phrase: 'Put a brave face', meaning_en: 'To pretend to be happy, confident, or safe when facing immense trouble', meaning_hi: 'मुश्किल में भी साहसी बने रहना', example: 'Despite losing her wallet, she put on a brave face and smiled.', note: 'Masking real vulnerability.' },
      { id: 'idiom_282', phrase: 'Take a back seat', meaning_en: 'To choose a less active or secondary role in an enterprise', meaning_hi: 'पीछे हट जाना (कम महत्वपूर्ण भूमिका लेना)', example: 'The founder stepped down and took a back seat in operations.', note: 'Yielding control voluntarily.' },
      { id: 'idiom_283', phrase: 'A Hobson\'s choice', meaning_en: 'A free choice in which only one actual option is offered', meaning_hi: 'कोई विकल्प न होना (जो दिया है वही लेना हो)', example: 'Take this tiny room or leave; it\'s a classic Hobson\'s choice.', note: 'From Thomas Hobson, a stable owner who offered only the horse closest to the door.' },
      { id: 'idiom_284', phrase: 'To lose ground to somebody/something', meaning_en: 'To lose an advantageous position or market share to a rival', meaning_hi: 'स्थिति/हिस्सा गंवाना', example: 'The old smartphone brand is rapidly losing ground to newer tech competitors.', note: 'Common in commercial analysis.' },
      { id: 'idiom_285', phrase: 'To kick the bucket', meaning_en: 'An informal, slang expression meaning to die', meaning_hi: 'मर जाना (गुजर जाना)', example: 'The old billionaire kicked the bucket without writing a final will.', note: 'Euphemism for death.' },
      { id: 'idiom_286', phrase: 'A long face', meaning_en: 'An unhappy, sad, or visibly disappointed facial expression', meaning_hi: 'निराश लग रहा था (मुंह फुलाना)', example: 'Why do you have such a long face on a beautiful weekend morning?', note: 'Identical context to idiom 139.' },
      { id: 'idiom_287', phrase: 'Make someone the scapegoat for something', meaning_en: 'To unfairly place the blame of a group disaster entirely on one person', meaning_hi: 'दूसरों के पाप की सजा दिलाना (बलि का बकरा बनाना)', example: 'They made the junior clerk the scapegoat for the entire accounting error.', note: 'See idiom 114.' },
      { id: 'idiom_288', phrase: 'Keep your chin up', meaning_en: 'An encouraging phrase telling someone to stay positive in hard times', meaning_hi: 'बुरे समय में प्रोत्साहित करना (हिम्मत बढ़ाना)', example: 'Keep your chin up! I am sure you will find a fantastic job very soon.', note: 'Expression of emotional support.' },
      { id: 'idiom_289', phrase: 'To poke one\'s nose into someone\'s affairs', meaning_en: 'To pry, meddle, or interfere uninvited into other people\'s private business', meaning_hi: 'दूसरे के कामों में दखल देना', example: 'I wish my nosey neighbors would stop poking their noses into my personal affairs.', note: 'Warns against intrusive curiosity.' },
      { id: 'idiom_290', phrase: 'Going to the dogs', meaning_en: 'Something that is deteriorating rapidly in quality or morality', meaning_hi: 'अच्छी स्थिति का बिगड़ जाना (बुरे दौर में जाना)', example: 'Standards at this historic hotel are truly going to the dogs lately.', note: 'Depicts continuous decay.' },
      { id: 'idiom_291', phrase: 'A fly in the ointment', meaning_en: 'A minor irritation or drawback that completely spoils a great situation', meaning_hi: 'मजा किरकिरा करना (बीच में आड़े आना)', example: 'The party was perfect; the only fly in the ointment was the loud air-conditioner.', note: 'Biblical origin.' },
      { id: 'idiom_292', phrase: 'A leopard can\'t/doesn\'t change its spots', meaning_en: 'People cannot change their innate, deeply ingrained character or habits', meaning_hi: 'स्वभाव कभी नहीं बदलता (नीयत नहीं बदलती)', example: 'He promised to stop lying, but a leopard doesn\'t change its spots.', note: 'Stresses permanent human nature.' },
      { id: 'idiom_293', phrase: 'Take something with a pinch of salt', meaning_en: 'To view a claim or story with healthy skepticism or doubt', meaning_hi: 'पूरी तरह सच न मानना (संदेह के साथ विश्वास करना)', example: 'Take his exaggerated travel stories with a healthy pinch of salt.', note: 'Also used as "grain of salt."' },
      { id: 'idiom_294', phrase: 'To cut corners', meaning_en: 'To do a task fast and cheaply by sacrificing safety or quality standards', meaning_hi: 'छोटा रास्ता अपनाना (गुणवत्ता घटाना/समय बचाना)', example: 'The contractor cut corners on building materials, causing cracks.', note: 'Condemns reckless cost-cutting.' },
      { id: 'idiom_295', phrase: 'From the horse\'s mouth', meaning_en: 'Getting authentic information directly from the absolute primary source', meaning_hi: 'आधिकारिक स्रोत से (सीधे मुख्य व्यक्ति से)', example: 'I know the company is expanding; I heard it straight from the horse\'s mouth.', note: 'From racing culture where checking a horse\'s teeth gives accurate age.' },
      { id: 'idiom_296', phrase: 'On the rocks', meaning_en: 'A relationship or business venture that is experiencing severe failure', meaning_hi: 'विफल होने की कगार पर (बर्बाद होने वाला)', example: 'After months of constant fighting, their marriage is clearly on the rocks.', note: 'Metaphor from ships breaking on rocks.' },
      { id: 'idiom_297', phrase: 'To go overboard', meaning_en: 'To act with excessive enthusiasm or do way too much of an activity', meaning_hi: 'अत्यधिक करना (बहुत ज्यादा उत्साह में करना)', example: 'She went completely overboard with the lavish birthday decorations.', note: 'Warns against lack of moderation.' },
      { id: 'idiom_298', phrase: 'Bend over backwards', meaning_en: 'To exert extraordinary effort to help, please, or accommodate someone', meaning_hi: 'खुश करने के लिए बहुत अधिक मेहनत करना (सिर पर पैर रखना)', example: 'We bent over backwards to make sure the international clients were comfortable.', note: 'Shows intense dedication.' },
      { id: 'idiom_299', phrase: 'Best of both worlds', meaning_en: 'An ideal situation where one enjoys the benefits of two distinct opportunities simultaneously', meaning_hi: 'दो अलग-अलग अवसरों का एक साथ मिला हुआ लाभ', example: 'Living in a quiet suburb while working in the vibrant city offers the best of both worlds.', note: 'Highly desirable scenario.' },
      { id: 'idiom_300', phrase: 'To burn the candle at both ends', meaning_en: 'To exhaust oneself by working late at night and waking early morning continuously', meaning_hi: 'बहुत अधिक मेहनत करना (देर रात तक जाग कर काम करना)', example: 'Holding two jobs and studying means he is burning the candle at both ends.', note: 'Warns against mental burnout.' }
    ]
  },

  'Set 16': {
    setNumber: 16,
    range: '301–320',
    intro: 'Set 16 provides an overview of everyday situational expressions and career landmarks.',
    idioms: [
      { id: 'idiom_301', phrase: 'Every dog has its day', meaning_en: 'Everyone will experience good fortune, success, or fame at least once in life', meaning_hi: 'हर किसी की बारी आती है (हर कोई एक न एक दिन सफल होता है)', example: 'Don\'t be discouraged by current failures; remember every dog has its day.', note: 'Timeless encouraging proverb.' },
      { id: 'idiom_302', phrase: 'Rift in the lute', meaning_en: 'A minor flaw or small disagreement that eventually destroys harmony over time', meaning_hi: 'कलह की शुरुआत (मधुरता में दरार)', example: 'Their silent arguments over budget was the first real rift in the lute.', note: 'Poetic musical metaphor.' },
      { id: 'idiom_303', phrase: 'Making a mountain of a molehill', meaning_en: 'Exaggerating a tiny, trivial issue into a massive, catastrophic problem', meaning_hi: 'बात का बतंगड़ बनाना (छोटी बात बढ़ा-चढ़ाकर कहना)', example: 'It was just a tiny typographical error; stop making a mountain out of a molehill.', note: 'Criticizes emotional overreactions.' },
      { id: 'idiom_304', phrase: 'Has no bearing', meaning_en: 'Having absolutely no relevance, connection, or influence on a subject', meaning_hi: 'कोई संबंध नहीं होना', example: 'Your past personal choices have no bearing on your current professional capability.', note: 'Common in objective debates.' },
      { id: 'idiom_305', phrase: 'Take the rough with the smooth', meaning_en: 'To accept both the difficult hardships and good benefits of life equally', meaning_hi: 'सुख-दुख दोनों को एक समान स्वीकार करना', example: 'Running a business is tough, but you have to take the rough with the smooth.', note: 'Promotes resilience.' },
      { id: 'idiom_306', phrase: 'Came to a head', meaning_en: 'A tense situation that reaches a critical crisis point requiring immediate action', meaning_hi: 'संकट की स्थिति में पहुँचना', example: 'The long-standing conflict between partners finally came to a head yesterday.', note: 'Refers to reaching a turning point.' },
      { id: 'idiom_307', phrase: 'Over head and ears', meaning_en: 'Completely, deeply, and overwhelmingly involved in something', meaning_hi: 'पूरी तरह से (पूर्णतः)', example: 'He fell over head and ears in love with his brilliant colleague.', note: 'Commonly used for debt or romance.' },
      { id: 'idiom_308', phrase: 'See through the design', meaning_en: 'To detect or realize the hidden deceptive plot or conspiracy of a rival', meaning_hi: 'चाल समझ जाना (साजिश भांपना)', example: 'The experienced politician immediately managed to see through their clever design.', note: 'Implies sharp perception.' },
      { id: 'idiom_309', phrase: 'In a nutshell', meaning_en: 'Stating a long story or facts in a very brief, clear, and concise manner', meaning_hi: 'संक्षेप में (सीधी और सरल भाषा में)', example: 'To put it in a nutshell, the entire corporate project failed due to zero funding.', note: 'Excellent tool for summarizing.' },
      { id: 'idiom_310', phrase: 'Carry the can', meaning_en: 'To accept the official blame or responsibility for a shared failure', meaning_hi: 'दोष स्वीकार करना (गलती अपने सिर लेना)', example: 'The junior designer was forced to carry the can for the team\'s error.', note: 'British colloquialism.' },
      { id: 'idiom_311', phrase: 'It is high time', meaning_en: 'The correct time for an action has already passed; it must be done immediately', meaning_hi: 'बहुत देर हो चुकी है (अब होना चाहिए था)', example: 'It is high time you started preparing seriously for your career exams.', note: 'Always followed by past tense verbs structurally.' },
      { id: 'idiom_312', phrase: 'Red tape', meaning_en: 'Excessive, rigid bureaucratic regulations and paperwork that delay progress', meaning_hi: 'औपचारिक प्रक्रियाएँ (सरकारी चक्कर)', example: 'The foreign investment was delayed for months due to endless government red tape.', note: 'From historical packets of legal documents tied with red tape.' },
      { id: 'idiom_313', phrase: 'Backseat driving', meaning_en: 'Giving unwanted, uninvited, and annoying advice to someone doing a task', meaning_hi: 'बिना जिम्मेदारी के सलाह देना (उपदेश देना)', example: 'I don\'t need your constant backseat driving while I am managing this project.', note: 'Criticizes armchair critics.' },
      { id: 'idiom_314', phrase: 'Bee in bonnet', meaning_en: 'To be completely obsessed with a specific idea or issue constantly', meaning_hi: 'पागलपन या किसी एक चीज का जुनून सवार होना', example: 'He has a strange bee in his bonnet about moving to a remote island.', note: 'Depicts eccentric preoccupation.' },
      { id: 'idiom_315', phrase: 'Hard of hearing', meaning_en: 'Experiencing partial deafness or difficulty hearing sounds clearly', meaning_hi: 'कान का कम सुनना (कम सुनाई देना)', example: 'Please speak up slightly because my elderly grandmother is a bit hard of hearing.', note: 'Polite clinical descriptor.' },
      { id: 'idiom_316', phrase: 'Chequered career', meaning_en: 'A career marked by striking shifts, fortunes, and alternate ups and downs', meaning_hi: 'विविध अनुभवों वाला कार्यक्षेत्र (उतार-चढ़ाव भरा जीवन)', example: 'The veteran actor had a highly fascinating and chequered career.', note: 'Pattern compared to a chessboard.' },
      { id: 'idiom_317', phrase: 'Carried off his feet', meaning_en: 'To be overwhelmed with sudden intense emotion, excitement, or enthusiasm', meaning_hi: 'बेहोश हो जाना (पैरों से उखड़ना)', example: 'He was completely carried off his feet by the massive public applause.', note: 'Emotional whirlwind metaphor.' },
      { id: 'idiom_318', phrase: 'Held in camera', meaning_en: 'A legal trial or official meeting held privately behind closed doors without the public', meaning_hi: 'जनता के लिए खुला न होना (बंद कमरे में)', example: 'Due to sensitive national security details, the court case was held in camera.', note: 'Latin legal phrase meaning in a chamber.' },
      { id: 'idiom_319', phrase: 'Prodigal son', meaning_en: 'A reckless, wasteful person who squanders resources but returns home repentant', meaning_hi: 'खर्चीला व्यक्ति (उड़ाऊ पुत्र)', example: 'The family welcomed their prodigal son back after he lost his savings abroad.', note: 'Derived from a popular Biblical parable.' },
      { id: 'idiom_320', phrase: 'Tight corner', meaning_en: 'An exceptionally difficult, awkward, or dangerous situation to handle', meaning_hi: 'मुश्किल स्थिति में', example: 'Finding myself without money in a foreign land put me in a very tight corner.', note: 'Stresses confinement by problems.' }
    ]
  },

  'Set 17': {
    setNumber: 17,
    range: '321–340',
    intro: 'Thorough efforts, behavioral traits aur classic comparisons is segment ki specialty hain.',
    idioms: [
      { id: 'idiom_321', phrase: 'Leave no stone unturned', meaning_en: 'To make every possible effort and explore every avenue to achieve a goal', meaning_hi: 'हर संभव कोशिश करना (सफलता के लिए)', example: 'The detective vowed to leave no stone unturned to find the missing painting.', note: 'Ancient Greek mythological origin.' },
      { id: 'idiom_322', phrase: 'Fed up', meaning_en: 'Bored, annoyed, or deeply frustrated with an ongoing bad situation', meaning_hi: 'तंग आ चुका (नाराज और परेशान)', example: 'I am completely fed up with the continuous delays of the public transit.', note: 'Informal but highly common adjective phrase.' },
      { id: 'idiom_323', phrase: 'Knows the ins and outs', meaning_en: 'To be completely familiar with all the intricate details and hidden facts of a matter', meaning_hi: 'सब बारीकियाँ जानना (हर पहलू जानना)', example: 'As a twenty-year veteran, he knows the complete ins and outs of the law firm.', note: 'Implies mastery.' },
      { id: 'idiom_324', phrase: 'Take heart', meaning_en: 'To gain courage, optimism, and renewed confidence during distress', meaning_hi: 'हिम्मत लेना (साहस बटोरना)', example: 'Take heart, my friend; your hard work will definitely yield rewards soon.', note: 'Antonym of "losing heart."' },
      { id: 'idiom_325', phrase: 'Get a gold star', meaning_en: 'To receive distinct praise, recognition, or a symbolic award for excellent work', meaning_hi: 'अच्छे काम के लिए प्रशंसा मिलना', example: 'The project leader got a gold star from the company director.', note: 'From school classroom grading stamps.' },
      { id: 'idiom_326', phrase: 'Donkey\'s years', meaning_en: 'An exceptionally long period of time', meaning_hi: 'बहुत लंबा समय (वर्षों)', example: 'They have been living as neighbors in this old colony for donkey\'s years.', note: 'Rhyming pun on "donkey\'s ears" which are proverbially long.' },
      { id: 'idiom_327', phrase: 'The whole nine yards', meaning_en: 'Everything possible; the full extent or complete item without exception', meaning_hi: 'पूरी चीज़ (पूर्ण रूप से)', example: 'When he builds a house, he wants luxury furniture, pool, the whole nine yards.', note: 'American colloquialism.' },
      { id: 'idiom_328', phrase: 'Hit the nail on the head', meaning_en: 'To describe a situation or answer a complex question perfectly and accurately', meaning_hi: 'एकदम सही निशाना लगाना (सही बात कहना)', example: 'Your analysis of our financial losses completely hit the nail on the head.', note: 'Praises precise clarity.' },
      { id: 'idiom_329', phrase: 'Get out of hand', meaning_en: 'To spiral completely out of control or become unmanageable', meaning_hi: 'काबू से बाहर होना', example: 'The celebration quickly got out of hand when uninvited guests arrived.', note: 'Requires urgent intervention.' },
      { id: 'idiom_330', phrase: 'To give the slip', meaning_en: 'To successfully escape, evade, or dodge someone pursuing you', meaning_hi: 'बच निकलना (चकमा देना)', example: 'The clever thief managed to give the slip to the tracking police squad.', note: 'Common in action thrillers.' },
      { id: 'idiom_331', phrase: 'A sea change', meaning_en: 'A profound, radical, or complete transformation over time', meaning_hi: 'आमूल-चूल परिवर्तन (क्रांतिकारी बदलाव)', example: 'Online streaming caused a major sea change in how we consume media.', note: 'Coined by Shakespeare in The Tempest.' },
      { id: 'idiom_332', phrase: 'A stone\'s throw', meaning_en: 'An exceptionally short distance away', meaning_hi: 'बहुत करीब दूरी पर', example: 'The local grocery shop is situated just a stone\'s throw from my house.', note: 'Similar to idiom 88.' },
      { id: 'idiom_333', phrase: 'A lot on your plate', meaning_en: 'Having a massive number of responsibilities or problems to handle at once', meaning_hi: 'बहुत सारी जिम्मेदारियाँ होना', example: 'With the new baby and my exams, I have a lot on my plate right now.', note: 'Metaphor from food serving size.' },
      { id: 'idiom_334', phrase: 'A safe pair of hands', meaning_en: 'A highly reliable, competent, and trustworthy person to manage critical tasks', meaning_hi: 'भरोसेमंद व्यक्ति', example: 'The company treasurer is incredibly careful — a safe pair of hands.', note: 'From cricket or football goalkeeper praise.' },
      { id: 'idiom_335', phrase: 'To pigeon hole', meaning_en: 'To unfairly classify or categorize someone into a rigid stereotype', meaning_hi: 'किसी को वर्गीकृत करना (दाग लगाना)', example: 'The directors tried to pigeon hole him as an actor who only plays villains.', note: 'Refers to small sorting slots.' },
      { id: 'idiom_336', phrase: 'To hold a brief for', meaning_en: 'To act as a supportive advocate or argue in defense of someone', meaning_hi: 'किसी के पक्ष में वकालत करना (समर्थन करना)', example: 'I don\'t hold a brief for his rude behavior, but he was highly stressed.', note: 'Legal origins.' },
      { id: 'idiom_337', phrase: 'To blow hot and cold', meaning_en: 'To constantly keep changing one\'s opinions, enthusiasm, or feelings unpredictably', meaning_hi: 'एक समय साथ मित्रता और शत्रुता दिखाना', example: 'I don\'t know if he likes the project; he keeps blowing hot and cold.', note: 'Derived from ancient fables.' },
      { id: 'idiom_338', phrase: 'Get up on the wrong side of the bed', meaning_en: 'To wake up in a highly irritable, bad-tempered mood for no reason', meaning_hi: 'सुबह से चिड़चिड़े होना (गलत पैर से उठना)', example: 'Don\'t argue with the manager today; he got up on the wrong side of the bed.', note: 'Superstitious Roman origin.' },
      { id: 'idiom_339', phrase: 'To make no bones about', meaning_en: 'To speak completely frankly and directly about something without hesitation', meaning_hi: 'साफ-साफ कहना (बिना झिझक कहना)', example: 'She made no bones about her total dislike for the new policy.', note: 'Implies absolute transparency.' },
      { id: 'idiom_340', phrase: 'A wolf in sheep\'s clothing', meaning_en: 'A dangerous, malicious person who pretends to be harmless and friendly', meaning_hi: 'दिखने में भोला पर वास्तव में खतरनाक (भेड़ के भेस में भेड़िया)', example: 'Be careful with that smooth advisor; he is a wolf in sheep\'s clothing.', note: 'From Aesop\'s Fables and biblical text.' }
    ]
  },

  'Set 18': {
    setNumber: 18,
    range: '341–360',
    intro: 'Cautionary guidelines, professional strategies aur conversational idioms is set mein bundled hain.',
    idioms: [
      { id: 'idiom_341', phrase: 'Flash in the pan', meaning_en: 'A sudden, brief success that cannot be sustained or repeated', meaning_hi: 'जल्दी सफल होकर बुझ जाने वाला (अल्पकालिक प्रतिभा)', example: 'His amazing first novel turned out to be a flash in the pan.', note: 'From historical flintlock firearms misfiring.' },
      { id: 'idiom_342', phrase: 'Keep under one\'s hat', meaning_en: 'To keep a specific piece of information strictly secret', meaning_hi: 'रहस्य छुपाना (सीक्रेट रखना)', example: 'I\'m getting a massive raise, but please keep it under your hat.', note: 'Informal confidentiality phrase.' },
      { id: 'idiom_343', phrase: 'Carry a chip on one\'s shoulder', meaning_en: 'To harbor continuous resentment over a past insult or perceived disadvantage', meaning_hi: 'बीती बात को लेकर रंजिश रखना', example: 'Because he grew up poor, he always carries a chip on his shoulder.', note: 'See idiom 197.' },
      { id: 'idiom_344', phrase: 'If it\'s not one thing, it\'s another', meaning_en: 'A phrase used when multiple annoying problems keep happening consecutively', meaning_hi: 'एक मुसीबत जाती है तो दूसरी आती है (लगातार परेशानियाँ)', example: 'First the car broke down, now the internet is gone — if it\'s not one thing, it\'s another.', note: 'Exasperated sigh idiom.' },
      { id: 'idiom_345', phrase: 'Don\'t count your chickens before they hatch', meaning_en: 'Do not rely on prospective profits or success until they are fully realized', meaning_hi: 'अंडे से चूजे निकलने से पहले गिनती मत करो (पहले से खुश होना ठीक नहीं)', example: 'You haven\'t received the job offer yet, so don\'t buy a car; don\'t count your chickens before they hatch.', note: 'Classic wise proverb.' },
      { id: 'idiom_346', phrase: 'Finding their feet', meaning_en: 'To adjust, gain confidence, and become familiar with a new environment or job', meaning_hi: 'काम को समझना और आत्मविश्वास हासिल करना', example: 'The new recruits are slowly finding their feet in the dynamic tech department.', note: 'Developmental phase phrase.' },
      { id: 'idiom_347', phrase: 'Lend me your ears', meaning_en: 'A polite, historical formula asking an audience to pay close attention to a speech', meaning_hi: 'ध्यान से सुनो (ध्यान मांगने का तरीका)', example: 'Friends, Romans, countrymen, lend me your ears.', note: 'Famously from Shakespeare\'s Julius Caesar.' },
      { id: 'idiom_348', phrase: 'Get down to brass tacks', meaning_en: 'To start focusing entirely on the basic, most important practical facts of a matter', meaning_hi: 'स्थिति के महत्वपूर्ण तथ्यों पर चर्चा करना', example: 'Let\'s stop discussing theories and get straight down to brass tacks.', note: 'American mercantile history origin.' },
      { id: 'idiom_349', phrase: 'Go against the grain', meaning_en: 'Something that completely opposes one\'s natural tendencies, principles, or desires', meaning_hi: 'अपने सिद्धांतों के विरुद्ध जाना', example: 'Cheating on an exam completely goes against my grain.', note: 'Woodworking metaphor.' },
      { id: 'idiom_350', phrase: 'Bite the bullet', meaning_en: 'To bravely face a highly painful, inevitable situation with courage', meaning_hi: 'कठिन काम डटकर करना (बिना झिझक सामना करना)', example: 'I have to bite the bullet and tell the boss about the critical system error.', note: 'From historical battlefield surgeries where patients bit on lead bullets.' },
      { id: 'idiom_351', phrase: 'Always a bridesmaid never a bride', meaning_en: 'Someone who always comes close to prime success or recognition but never quite achieves it', meaning_hi: 'हमेशा दूसरे नंबर पर आना (कभी पहला न आना)', example: 'He finished second in the tournament for the fourth time — always a bridesmaid, never a bride.', note: 'Captures continuous near-misses.' },
      { id: 'idiom_352', phrase: 'It\'s Greek to me', meaning_en: 'Completely incomprehensible to understand', meaning_hi: 'बिल्कुल समझ में न आना (जैसे ग्रीक भाषा)', example: 'See idiom 122 for contextual application.', note: 'Interchangeable with "all Greek."' },
      { id: 'idiom_353', phrase: 'Put one\'s cards on the table', meaning_en: 'To be completely honest about one\'s true intentions or secret plans', meaning_hi: 'ईमानदार होना (सब कुछ खोलकर रख देना)', example: 'During negotiation, we decided to put our cards on the table.', note: 'Card game transparency metaphor.' },
      { id: 'idiom_354', phrase: 'Get a taste of your own medicine', meaning_en: 'To receive the same bad or mean treatment that you have been giving to others', meaning_hi: 'जैसे करोगे वैसे भरोगे (वैसा ही व्यवहार मिलना)', example: 'The office bully finally got a taste of his own medicine today.', note: 'Karma-based colloquialism.' },
      { id: 'idiom_355', phrase: 'Off and on', meaning_en: 'Intermittently; happening occasionally rather than continuously', meaning_hi: 'रुक-रुक कर (कभी-कभी)', example: 'It rained off and on throughout the entire afternoon.', note: 'Also used as "on and off."' },
      { id: 'idiom_356', phrase: 'Got the green light', meaning_en: 'To receive official permission to proceed with a project or plan', meaning_hi: 'आगे बढ़ने की अनुमति मिलना', example: 'The creative team finally got the green light to produce the film.', note: 'Traffic light metaphor.' },
      { id: 'idiom_357', phrase: 'Looking for a needle in a haystack', meaning_en: 'Attempting to find a minor item or hidden detail in an impossibly vast area', meaning_hi: 'असंभव काम करना (तिनकों के ढेर में सुई ढूंढना)', example: 'Searching for a specific lost email in this generic spam folder is like looking for a needle in a haystack.', note: 'Highlights extreme task difficulty.' },
      { id: 'idiom_358', phrase: 'With open arms', meaning_en: 'To welcome or receive someone with immense warmth, enthusiasm, and affection', meaning_hi: 'गर्मजोशी से (स्वागत करना)', example: 'The rural villagers welcomed the traveling doctors with open arms.', note: 'Shows sincere hospitality.' },
      { id: 'idiom_359', phrase: 'Up in arms', meaning_en: 'To be extremely angry, rebellious, or protesting loudly against a policy', meaning_hi: 'गुस्सा होना (विरोध करना)', example: 'Local residents are up in arms about the massive new commercial development.', note: 'Military rebellion origin.' },
      { id: 'idiom_360', phrase: 'Work against the clock', meaning_en: 'To work with extreme speed to finish a task before a strict deadline', meaning_hi: 'बहुत जल्दबाजी में काम करना', example: 'The rescue crew worked against the clock to find survivors.', note: 'Time-sensitive pressure.' }
    ]
  },

  'Set 19': {
    setNumber: 19,
    range: '361–380',
    intro: 'Confrontation, health parameters aur hidden capabilities ko explore karne wale idioms.',
    idioms: [
      { id: 'idiom_361', phrase: 'Run around in circles', meaning_en: 'To expand massive energy on futile activities without making any actual progress', meaning_hi: 'बिना उपलब्धि के कुछ करते रहना', example: 'We have been discussing the same issue all day and just running around in circles.', note: 'Criticizes lack of structural direction.' },
      { id: 'idiom_362', phrase: 'Left out in cold', meaning_en: 'To ignore, neglect, or exclude someone from a group dynamic', meaning_hi: 'नज़रअंदाज किया जाना', example: 'When the team went out to celebrate, the intern was left out in the cold.', note: 'Social isolation idiom.' },
      { id: 'idiom_363', phrase: 'Bed of roses', meaning_en: 'An exceptionally comfortable, luxurious, and easy situation in life', meaning_hi: 'सुखद स्थिति (गुलाब की सेज)', example: 'Corporate life is certainly not a simple bed of roses.', note: 'Antonym of "bed of thorns."' },
      { id: 'idiom_364', phrase: 'Make a beeline for', meaning_en: 'To move rapidly and directly toward a specific destination', meaning_hi: 'सीधे जाना (लक्ष्य की ओर)', example: 'As soon as he entered the reception, he made a beeline for the food buffet.', note: 'Based on the straight flight path of bees returning to a hive.' },
      { id: 'idiom_365', phrase: 'At daggers drawn', meaning_en: 'In a state of extreme, bitter hostility and open enmity with someone', meaning_hi: 'बहुत अधिक दुश्मनी (बुरा दुश्मन होना)', example: 'The two rival business families have been at daggers drawn for decades.', note: 'Visualizes unsheathed weapons ready to strike.' },
      { id: 'idiom_366', phrase: 'Costs an arm and a leg', meaning_en: 'Something that is exceptionally expensive or exorbitantly priced', meaning_hi: 'बहुत महंगा', example: 'Buying a luxury apartment in downtown Manhattan costs an arm and a leg.', note: 'Hyperbole for extreme cost.' },
      { id: 'idiom_367', phrase: 'Pull yourself together', meaning_en: 'To regain emotional control over one\'s actions and calm down during distress', meaning_hi: 'शांत हो जाओ', example: 'Stop crying, pull yourself together, and face the panel confidently.', note: 'Command for self-mastery.' },
      { id: 'idiom_368', phrase: 'Lead someone by the nose', meaning_en: 'To dominate, control, or guide someone completely like a submissive animal', meaning_hi: 'किसी पर हावी होना', example: 'She completely dominates her husband and leads him by the nose.', note: 'From historical animal husbandry using nose rings.' },
      { id: 'idiom_369', phrase: 'A dark horse', meaning_en: 'An unknown or underestimated competitor who surprises everyone by winning', meaning_hi: 'अज्ञात प्रतिभा (जिसके बारे में कम जानकारी हो)', example: 'No one expected him to pass the exam, but he proved to be a real dark horse.', note: 'Popularized by Benjamin Disraeli novels.' },
      { id: 'idiom_370', phrase: 'Of the first water', meaning_en: 'Of the absolute finest and highest quality or grade possible', meaning_hi: 'सर्वोत्तम गुणवत्ता का', example: 'He is a gentleman of the first water.', note: 'Historic diamond grading term.' },
      { id: 'idiom_371', phrase: 'To make castles in the air', meaning_en: 'To day-dream or create highly unrealistic, impossible plans for the future', meaning_hi: 'हवाई किले बनाना (असंभव सपने देखना)', example: 'Instead of studying, he just sits around making castles in the air about becoming rich.', note: 'Warns against lack of ground reality.' },
      { id: 'idiom_372', phrase: 'A square peg in a round hole', meaning_en: 'An individual who is completely unsuited for their current job or environment', meaning_hi: 'गलत जगह पर होना (अनुपयुक्त वातावरण में)', example: 'An artist working as an aggressive accountant is like a square peg in a round hole.', note: 'Depicts structural mismatch.' },
      { id: 'idiom_373', phrase: 'Cut to the quick', meaning_en: 'To deeply wound or cause intense emotional hurt to someone\'s feelings', meaning_hi: 'बहुत अधिक ठेस पहुँचाना (आहत करना)', example: 'Her harsh, mocking remarks cut the young student to the quick.', note: 'Refers to reaching the sensitive flesh under fingernails.' },
      { id: 'idiom_374', phrase: 'Bolt from the blue', meaning_en: 'A sudden, completely unexpected piece of bad news or catastrophic event', meaning_hi: 'अचानक आपदा आना', example: 'The sudden closure of the stable factory came as a total bolt from the blue.', note: 'Compares the event to a lightning strike from a clear blue sky.' },
      { id: 'idiom_375', phrase: 'Lend an ear', meaning_en: 'To listen sympathetically, patiently, and attentively to someone speaking', meaning_hi: 'ध्यान देना', example: 'If you have problems, I am always ready to lend a sympathetic ear.', note: 'Gentle conversational idiom.' },
      { id: 'idiom_376', phrase: 'On tenterhooks', meaning_en: 'In a state of extreme suspense, anxiety, or nervous anticipation', meaning_hi: 'चिंतित', example: 'We were kept on tenterhooks all afternoon waiting for our final lab reports.', note: 'From historical textile manufacturing hooks used to stretch cloth.' },
      { id: 'idiom_377', phrase: 'In the pink', meaning_en: 'In absolute peak physical condition and brilliant health', meaning_hi: 'अच्छे स्वास्थ्य में', example: 'After weeks of clean eating and exercise, he is fully in the pink.', note: 'Highly positive medical descriptor.' },
      { id: 'idiom_378', phrase: 'Butterfly in the stomach', meaning_en: 'Experiencing a fluttering, nervous sensation inside before a big event', meaning_hi: 'घबराहट होना', example: 'Before walking out onto the stage, she always gets severe butterflies in her stomach.', note: 'Physical manifestation of anxiety.' },
      { id: 'idiom_379', phrase: 'Actions speak louder than words', meaning_en: 'What a person actually does carries far more value and meaning than what they promise', meaning_hi: 'करना कहने से बेहतर है', example: 'Stop making grand promises to help and actually do something; actions speak louder than words.', note: 'Core moral proverb.' },
      { id: 'idiom_380', phrase: 'At the drop of a hat', meaning_en: 'Instantly, immediately, and without any hesitation or prior reason', meaning_hi: 'तुरंत', example: 'He is highly hot-tempered and ready to fight at the drop of a hat.', note: 'From historical race signals involving dropping hats.' }
    ]
  },

  'Set 20': {
    setNumber: 20,
    range: '381–400',
    intro: 'Time frames, workplace excellence aur surprise accomplishments ka balanced collection.',
    idioms: [
      { id: 'idiom_381', phrase: 'Till the cows come home', meaning_en: 'For an exceptionally long, practically indefinite period of time', meaning_hi: 'बहुत लंबे समय तक', example: 'You can argue with him till the cows come home, but he will never change his mind.', note: 'Based on slow-moving cattle routines.' },
      { id: 'idiom_382', phrase: 'In the teeth of tough resistance', meaning_en: 'Directly opposing and defying heavy, aggressive opposition or obstacles', meaning_hi: 'सख्त विरोध के बावजूद', example: 'The bold reform bill was passed in the teeth of tough parliamentary resistance.', note: 'Indicates courage against adversity.' },
      { id: 'idiom_383', phrase: 'At sea', meaning_en: 'Completely lost, baffled, or thoroughly confused about a topic', meaning_hi: 'हैरान (समझ न आना)', example: 'See idiom 134 for absolute parallel execution.', note: 'Nautical confusion metaphor.' },
      { id: 'idiom_384', phrase: 'Made off', meaning_en: 'To escape rapidly with stolen goods or money', meaning_hi: 'लेकर भागना (धन या चीज़ें चुराना)', example: 'The street pickpocket made off with her expensive diamond necklace.', note: 'Common in local crime reporting.' },
      { id: 'idiom_385', phrase: 'For good', meaning_en: 'Permanently; forever without any intention of returning or reversing', meaning_hi: 'हमेशा के लिए', example: 'He decided to leave his hometown and relocate to Canada for good.', note: 'Indicates finality.' },
      { id: 'idiom_386', phrase: 'Come rain or shine', meaning_en: 'No matter what happens; under any external circumstances without exception', meaning_hi: 'चाहे कुछ भी हो (हर हाल में)', example: 'I will go for my morning run daily, come rain or shine.', note: 'Stresses unyielding commitment.' },
      { id: 'idiom_387', phrase: 'To be thrown in at the deep end', meaning_en: 'To be forced to handle a highly difficult situation or job without preparation', meaning_hi: 'बहुत जल्दी मुश्किल काम सीखने को मिलना', example: 'On his very first day as a lawyer, he was thrown in at the deep end with a massive case.', note: 'Swimming pool metaphor.' },
      { id: 'idiom_388', phrase: 'To blaze a trail', meaning_en: 'To do something completely innovative and lead the way for future followers', meaning_hi: 'कुछ नया शुरू करना', example: 'She truly blazed a trail for women entrepreneurs in biotech.', note: 'From marking paths through wild forests.' },
      { id: 'idiom_389', phrase: 'To steal her brother\'s thunder', meaning_en: 'To take the attention or praise away from someone else\'s achievement prematurely', meaning_hi: 'सफलता में सारी सराहना अपने नाम करना', example: 'Announcing her engagement at her brother\'s graduation party completely stole his thunder.', note: 'From a historical theater producer\'s invented thunder sound effect being stolen.' },
      { id: 'idiom_390', phrase: 'Be an old hat', meaning_en: 'Something that is obsolete, old-fashioned, or boringly familiar', meaning_hi: 'पुराना हो चुका (आउटडेटेड)', example: 'That old computer software is complete old hat now.', note: 'Informal critique of outdated items.' },
      { id: 'idiom_391', phrase: 'Head in the clouds', meaning_en: 'Living in an impractical fantasy; absent-minded day dreaming', meaning_hi: 'दिवास्वप्न देखना (ख्याली पुलाव पकाना)', example: 'He never pays attention to realities; he always has his head in the clouds.', note: 'Opposite of "having feet on the ground."' },
      { id: 'idiom_392', phrase: 'Green thumb', meaning_en: 'An exceptional, natural talent for gardening and making plants grow well', meaning_hi: 'बागवानी में प्रतिभा होना', example: 'My aunt can grow anything beautifully; she has a brilliant green thumb.', note: 'Highly common horticultural praise.' },
      { id: 'idiom_393', phrase: 'To bark up the wrong tree', meaning_en: 'Pursuing a completely mistaken line of thought or blaming the wrong person', meaning_hi: 'किसी चीज़ का कारण गलत समझना (गलत व्यक्ति को दोष देना)', example: 'If you think I stole your wallet, you are barking up the wrong tree.', note: 'From hunting dogs mistakenly barking at empty trees.' },
      { id: 'idiom_394', phrase: 'To take the bull by the horns', meaning_en: 'To face a difficult, dangerous situation directly with decisive courage', meaning_hi: 'खतरे का सामना करना (मुश्किलों का सामना करना)', example: 'Instead of worrying about debt, take the bull by the horns and negotiate a payment plan.', note: 'Encourages proactive direct action.' },
      { id: 'idiom_395', phrase: 'Pass the hat', meaning_en: 'To collect financial contributions or donations from a group of people', meaning_hi: 'पैसे इकट्ठा करना (चंदा माँगना)', example: 'The workers decided to pass the hat around to help their injured colleague.', note: 'From historical street performers collecting money.' },
      { id: 'idiom_396', phrase: 'As the crow flies', meaning_en: 'In a perfectly straight line across a landscape, ignoring roads', meaning_hi: 'सबसे छोटा रास्ता (सीधी दूरी)', example: 'The tourist village is only ten kilometers away from here as the crow flies.', note: 'Geographical navigation idiom.' },
      { id: 'idiom_397', phrase: 'In a pickle', meaning_en: 'Caught up in a highly messy, awkward, or difficult situation', meaning_hi: 'मुसीबत में', example: 'I am in a real pickle because I forgot my passport at home.', note: 'Informal and light-hearted distress expression.' },
      { id: 'idiom_398', phrase: 'Rule the roost', meaning_en: 'To be the absolute dominant person who makes all key decisions in a group', meaning_hi: 'सारे फैसले खुद लेना (सब पर हुकूमत करना)', example: 'In that traditional corporate office, it is the senior director who rules the roost.', note: 'From poultry yard dynamics.' },
      { id: 'idiom_399', phrase: 'Acid test', meaning_en: 'A definitive, conclusive test that proves the absolute worth or truth of something', meaning_hi: 'सच या झूठ का ठोस सबूत (अंतिम परीक्षा)', example: 'The upcoming high-stakes match will be the real acid test for the new coach.', note: 'From historical gold rush testing using nitric acid.' },
      { id: 'idiom_400', phrase: 'Late in the day', meaning_en: 'At a stage that is way too advanced to make any positive alterations or improvements', meaning_hi: 'इतनी देर हो गई कि अब कुछ फायदा नहीं', example: 'It\'s a bit too late in the day to change the entire layout of the building now.', note: 'Deals with missing critical intervention windows.' }
    ]
  },

  'Set 21': {
    setNumber: 21,
    range: '401–420',
    intro: 'This set encompasses performance indices, failure analysis, and behavioral insights.',
    idioms: [
      { id: 'idiom_401', phrase: 'Draw a blank', meaning_en: 'To fail to recall information or get an absolute zero result during an effort', meaning_hi: 'असफल होना', example: 'I tried to remember his name during the meeting but unfortunately drew a blank.', note: 'Commonly evaluated in standard competitive examinations.' },
      { id: 'idiom_402', phrase: 'Left-handed compliment', meaning_en: 'An insult disguised elegantly as a polite compliment', meaning_hi: 'तारीफ में अपमान (दो टूक तारीफ)', example: 'Saying my dress hides my weight is a classic left-handed compliment.', note: 'Also known as a backhanded compliment.' },
      { id: 'idiom_403', phrase: 'Put your best foot forward', meaning_en: 'To exert maximum effort to make the finest possible initial impression', meaning_hi: 'पूरी कोशिश करना', example: 'During a critical job interview, you must put your best foot forward.', note: 'Exhortation for high performance.' },
      { id: 'idiom_404', phrase: 'At snail\'s pace', meaning_en: 'Moving or progressing at an exceptionally slow speed', meaning_hi: 'बहुत धीरे-धीरे करना', example: 'Traffic on the main highway was moving at a painful snail\'s pace.', note: 'Vivid animal speed comparison.' },
      { id: 'idiom_405', phrase: 'Make no headway', meaning_en: 'To experience absolute failure in making any forward progress', meaning_hi: 'आगे बढ़ने में असमर्थ होना', example: 'Despite long hours of intense negotiations, we made no headway.', note: 'Nautical origin referring to forward movement.' },
      { id: 'idiom_406', phrase: 'Make short work of something', meaning_en: 'To finish or consume something exceptionally fast and efficiently', meaning_hi: 'जल्दी निपटा देना', example: 'The hungry boys made short work of the giant pizza.', note: 'Implies swift processing.' },
      { id: 'idiom_407', phrase: 'Be an open book', meaning_en: 'A person whose life, motives, and emotions are completely transparent and easy to know', meaning_hi: 'जिसके बारे में सब कुछ जानना आसान हो (साफ किताब)', example: 'I don\'t keep secrets from my team; my professional life is an open book.', note: 'Praises complete transparency.' },
      { id: 'idiom_408', phrase: 'Cross the bridge', meaning_en: 'To deal with a prospective problem only when it actually arrives, not before', meaning_hi: 'ज़रूरत पड़ने पर किसी चीज़ से निपटना', example: 'Don\'t worry about prospective tax audits now; we will cross that bridge when we come to it.', note: 'Proverbial advice against premature worrying.' },
      { id: 'idiom_409', phrase: 'Is a hard nut to crack', meaning_en: 'An identical structure evaluated across exam shifts indicating a tough challenge', meaning_hi: 'हल करना मुश्किल है', example: 'See idiom 101 for operational usage rules.', note: 'Parallel phrasing variant.' },
      { id: 'idiom_410', phrase: 'Run into rough weather', meaning_en: 'To encounter severe unexpected difficulties or opposition in an enterprise', meaning_hi: 'कठिनाइयों का सामना करना', example: 'The political reform bill rapidly ran into rough weather in congress.', note: 'Sailing crisis metaphor.' },
      { id: 'idiom_411', phrase: 'Hit the sack', meaning_en: 'An informal, highly popular expression meaning to go to bed to sleep', meaning_hi: 'सोने जाना', example: 'I am thoroughly exhausted after work; it\'s time for me to hit the sack.', note: 'Derived from historical military straw sacks used as mattresses.' },
      { id: 'idiom_412', phrase: 'Took to their heels', meaning_en: 'The past tense execution of running away rapidly from trouble', meaning_hi: 'भाग गए', example: 'See idiom 159 for dynamic base conceptualization.', note: 'Grammatical shift variant.' },
      { id: 'idiom_413', phrase: 'At their wits\' end', meaning_en: 'So thoroughly worried and confused that one has no idea what action to take next', meaning_hi: 'बहुत हैरान (समझ में न आना)', example: 'Faced with mounting debts, the poor family was completely at their wits\' end.', note: 'Indicates ultimate psychological exhaustion.' },
      { id: 'idiom_414', phrase: 'Full of beans', meaning_en: 'Exhibiting immense energy, vitality, liveliness, and good spirits', meaning_hi: 'जिंदादिल और ऊर्जावान', example: 'The enthusiastic kids were completely full of beans after the school trip.', note: 'From stable talk referring to horses well-fed on energy-rich beans.' },
      { id: 'idiom_415', phrase: 'Off the record', meaning_en: 'Information given unofficially that must not be published or quoted publicly', meaning_hi: 'आधिकारिक रूप से दर्ज नहीं (अनाधिकारिक)', example: 'The minister spoke off the record to the political journalists.', note: 'Core press and media terminology.' },
      { id: 'idiom_416', phrase: 'Kept in the dark', meaning_en: 'To be intentionally kept completely uninformed about a matter or secret', meaning_hi: 'अनभिज्ञ रखा जाना', example: 'The workforce was kept in the dark about the prospective corporate merger plans.', note: 'Implies systematic exclusion.' },
      { id: 'idiom_417', phrase: 'Pie in the sky', meaning_en: 'An empty, highly unrealistic hope or plan that is impossible to achieve', meaning_hi: 'कुछ असंभव (जो मिल न सके)', example: 'His grand dreams of becoming an overnight multi-millionaire are just pie in the sky.', note: 'From a historical radical labor union song mockingly promising food in heaven.' },
      { id: 'idiom_418', phrase: 'Sell like hot cakes', meaning_en: 'To be bought or sold exceptionally fast and in massive quantities', meaning_hi: 'तेजी से बिकना', example: 'The tickets for the global rock concert sold like hot cakes within minutes.', note: 'Commercial success indicator.' },
      { id: 'idiom_419', phrase: 'In the same boat', meaning_en: 'Sharing the exact same difficult or unpleasant situation as others', meaning_hi: 'एक जैसी स्थिति में', example: 'Don\'t complain about inflation to me; we are both in the exact same boat.', note: 'Promotes mutual empathy.' },
      { id: 'idiom_420', phrase: 'In the driver\'s seat', meaning_en: 'Being in complete charge, control, or leadership of a situation', meaning_hi: 'नियंत्रण में या अगुवाई करना', example: 'With the veteran manager in the driver\'s seat, the corporate project succeeded.', note: 'Automotive control metaphor.' }
    ]
  },

  'Set 22': {
    setNumber: 22,
    range: '421–440',
    intro: 'Is set mein individual struggles, physical movements aur psychological triggers ke metrics diye gaye hain.',
    idioms: [
      { id: 'idiom_421', phrase: 'Fight his own battles', meaning_en: 'To resolve one\'s own individual problems or conflicts without expecting external help', meaning_hi: 'अपने काम खुद निपटाना', example: 'He is mature enough now to stand up and fight his own battles.', note: 'Stresses personal independence.' },
      { id: 'idiom_422', phrase: 'Taking a toll on', meaning_en: 'Causing systematic damage, wear and tear, or suffering over a period of time', meaning_hi: 'नकारात्मक प्रभाव डालना', example: 'Working twelve hours daily is rapidly taking a serious toll on his physical health.', note: 'Common in stress analysis.' },
      { id: 'idiom_423', phrase: 'On shank\'s mare', meaning_en: 'A humorous, old-fashioned expression meaning to travel entirely on foot', meaning_hi: 'पैदल', example: 'Since my vehicle broke down, I had to travel all the way on shank\'s mare.', note: 'Shank refers to the lower leg bone.' },
      { id: 'idiom_424', phrase: 'A snake in the grass', meaning_en: 'A hidden, treacherous enemy who pretends to be a completely loyal friend', meaning_hi: 'गुप्त शत्रु (घात लगाकर बैठा दुश्मन)', example: 'I trusted my colleague, but he proved to be a malicious snake in the grass.', note: 'Warns against internal sabotage; similar to idiom 423.' },
      { id: 'idiom_425', phrase: 'Blow one\'s own trumpet', meaning_en: 'To boastfully praise one\'s own achievements, talents, or successes self-indulgently', meaning_hi: 'अपनी तारीफ आप करना', example: 'Nobody likes a colleague who constantly blows his own trumpet during lunch.', note: 'Criticizes arrogant bragging.' },
      { id: 'idiom_426', phrase: 'Dead heat', meaning_en: 'A race or competitive contest that finishes in an absolute, perfect tie', meaning_hi: 'बराबरी की टक्कर (जीत बराबर होना)', example: 'The final sprint ended in a thrilling dead heat between both top athletes.', note: 'Racing terminology.' },
      { id: 'idiom_427', phrase: 'Back to square one', meaning_en: 'To be forced to return to the absolute beginning of a task due to an error', meaning_hi: 'वहीं से फिर शुरू करना (पहले जैसी स्थिति)', example: 'Our software codes failed testing, so it\'s back to square one for the team.', note: 'From historical board games or radio football commentary zones.' },
      { id: 'idiom_428', phrase: 'To throw a fit', meaning_en: 'To suddenly become exceptionally angry, violent, or emotionally hysterical', meaning_hi: 'अत्यधिक गुस्सा दिखाना', example: 'My father threw a massive fit when he saw the broken glass window.', note: 'Depicts sudden anger displays.' },
      { id: 'idiom_429', phrase: 'The bee\'s knees', meaning_en: 'An informal slang expression meaning an exceptional, outstanding, or excellent person or thing', meaning_hi: 'असाधारण (बेहतरीन)', example: 'Have you tried their new chocolate pastry? It is absolutely the bee\'s knees.', note: '1920s American nonsensical slang praising quality.' },
      { id: 'idiom_430', phrase: 'Hold water', meaning_en: 'An argument or theory that is logically sound, valid, and stands up to scrutiny', meaning_hi: 'वैध होना (तार्किक रूप से सही)', example: 'His weak alibi simply does not hold water under close police verification.', note: 'Metaphor from an uncracked bucket holding water.' },
      { id: 'idiom_431', phrase: 'Bring to light', meaning_en: 'To reveal, uncover, or make public hidden secrets or critical facts', meaning_hi: 'स्पष्ट रूप से उजागर करना', example: 'The audit managed to bring a massive financial fraud to light.', note: 'Illuminating hidden truth.' },
      { id: 'idiom_432', phrase: 'A close-fisted person', meaning_en: 'An identical dynamic variant emphasizing extreme miserliness', meaning_hi: 'कंजूस व्यक्ति', example: 'See idiom 63 for exact structural application notes.', note: 'Vocabulary match structure.' },
      { id: 'idiom_433', phrase: 'Chicken-hearted', meaning_en: 'Lacking courage; thoroughly cowardly, fearful, and timid', meaning_hi: 'डरपोक', example: 'The chicken-hearted soldier refused to step out into the dark night.', note: 'Animal-based insult for low bravery.' },
      { id: 'idiom_434', phrase: 'By and by', meaning_en: 'Gradually; slowly over a period of time; eventually', meaning_hi: 'धीरे-धीरे (क्रमशः)', example: 'Don\'t worry, your physical injuries will heal fully by and by.', note: 'Soft, transitional idiom.' },
      { id: 'idiom_435', phrase: 'Pull a fast one', meaning_en: 'To successfully trick, cheat, or play a clever, deceptive joke on someone', meaning_hi: 'किसी को ठगना या धोखा देना', example: 'Don\'t try to pull a fast one on me; I know exactly how much this costs.', note: 'Warns against clever scammers.' },
      { id: 'idiom_436', phrase: 'See eye to eye', meaning_en: 'To be in complete agreement with someone on a specific matter', meaning_hi: 'किसी से सहमत होना', example: 'The directors rarely see eye to eye when it comes to budgeting updates.', note: 'Refers to shared conceptual alignment.' },
      { id: 'idiom_437', phrase: 'Like a dying duck in a thunderstorm', meaning_en: 'Looking exceptionally dejected, hopeless, miserable, or thoroughly depressed', meaning_hi: 'उदासीन (हताश)', example: 'He sat in the corner looking like a dying duck in a thunderstorm after failing.', note: 'Vivid, humorous British hyperbole.' },
      { id: 'idiom_438', phrase: 'To paddle one\'s own canoe', meaning_en: 'To act completely independently and manage one\'s life without relying on others', meaning_hi: 'अपने बूते पर निर्भर रहना', example: 'He left home early to learn how to paddle his own canoe in the city.', note: 'Self-reliance metaphor.' },
      { id: 'idiom_439', phrase: 'Look down upon', meaning_en: 'To view someone as thoroughly inferior, low-class, or unworthy of respect', meaning_hi: 'किसी को तुच्छ समझना', example: 'It is highly unethical to look down upon people due to their simple profession.', note: 'Condemns snobbish prejudice.' },
      { id: 'idiom_440', phrase: 'Keep abreast of', meaning_en: 'To ensure one stays fully updated with the latest news, trends, or developments', meaning_hi: 'स्वयं को अपडेट रखना', example: 'A doctor must constantly read journals to keep abreast of modern medical tech.', note: 'Core professional survival metric.' }
    ]
  },

  'Set 23': {
    setNumber: 23,
    range: '441–460',
    intro: 'Strategic action plans, crisp communication goals aur classic failures ka structured map.',
    idioms: [
      { id: 'idiom_441', phrase: 'Give a piece of one\'s mind', meaning_en: 'To scold, reprimand, or express intense anger to someone directly for an error', meaning_hi: 'किसी को खरी-खोटी सुनाना (डांटना)', example: 'I am going to give the reckless driver a real piece of my mind.', note: 'Unloading verbal frustration.' },
      { id: 'idiom_442', phrase: 'Come to the point', meaning_en: 'To speak directly about the core topic without wasting time on trivialities', meaning_hi: 'मुद्दे की बात करना (सीधे बात करना)', example: 'Stop beating around the bush and come straight to the point.', note: 'Antonym of idiom 7.' },
      { id: 'idiom_443', phrase: 'At large', meaning_en: 'A dangerous criminal who is currently free, at liberty, and not captured by police', meaning_hi: 'आज़ाद (पकड़ में न होना / फरार)', example: 'The escaped convict is still at large, warning local residents.', note: 'Law enforcement terminology.' },
      { id: 'idiom_444', phrase: 'Cut and dried', meaning_en: 'A situation, decision, or solution that is completely pre-determined, clear, and settled', meaning_hi: 'पहले से तय (बिना किसी बदलाव के)', example: 'The interview process felt fully cut and dried from the beginning.', note: 'Implies zero flexibility.' },
      { id: 'idiom_445', phrase: 'Make off with', meaning_en: 'To run away with stolen goods or money efficiently', meaning_hi: 'लेकर भागना', example: 'The smart cat made off with the entire piece of fish.', note: 'Identical context to idiom 384.' },
      { id: 'idiom_446', phrase: 'Kill two birds with one stone', meaning_en: 'To achieve two distinct goals or solve two problems with one single action', meaning_hi: 'एक तीर से दो निशान (एक प्रयास में दो काम करना)', example: 'By cycling to work, I get exercise and save money — killing two birds with one stone.', note: 'Highly popular efficiency proverb.' },
      { id: 'idiom_447', phrase: 'The acid test', meaning_en: 'The definitive, ultimate metric of truth or quality', meaning_hi: 'अंतिम परख (सच्चाई जांचने का पक्का तरीका)', example: 'See idiom 399 for technical application background data.', note: 'Reinforced core exam phrase.' },
      { id: 'idiom_448', phrase: 'Blind alley', meaning_en: 'An action plan that leads to absolute stagnation or an impasse', meaning_hi: 'वह स्थिति जहाँ कोई प्रगति न हो (गतिरोध)', example: 'See idiom 187 for operational mapping rules.', note: 'Structural synonym.' },
      { id: 'idiom_449', phrase: 'A moot point', meaning_en: 'A topic that is highly open to argument, debatable, or completely irrelevant now', meaning_hi: 'विवादित मुद्दा', example: 'Whether we should have hired him is a moot point now since he left.', note: 'From historical mock legal assemblies called moots.' },
      { id: 'idiom_450', phrase: 'Will-o\'-the-wisp', meaning_en: 'Something that is completely deceptive, elusive, and impossible to catch or achieve', meaning_hi: 'जो हासिल न हो सके (धोखेबाज आशा)', example: 'Chasing overnight internet fame is often just pursuing a will-o\'-the-wisp.', note: 'Based on swamp gas lights that fool travelers.' },
      { id: 'idiom_451', phrase: 'To go through fire and water', meaning_en: 'To face and endure absolutely any danger or extreme hardship to achieve a goal', meaning_hi: 'सफलता के लिए कई खतरों का सामना करना (आग-पानी से गुजरना)', example: 'The loyal soldier was ready to go through fire and water for his commander.', note: 'Depicts unyielding devotion.' },
      { id: 'idiom_452', phrase: 'To put a spoke in one\'s wheel', meaning_en: 'To intentionally obstruct, delay, or ruin someone\'s execution plans', meaning_hi: 'प्रगति में बाधा डालना', example: 'By refusing to sign the papers, he put a major spoke in our wheels.', note: 'Metaphor from jamming a rod into a moving carriage wheel.' },
      { id: 'idiom_453', phrase: 'At loggerheads', meaning_en: 'In a state of stubborn, intense disagreement or dispute with someone', meaning_hi: 'किसी से विवाद में', example: 'The union leaders and the management are completely at loggerheads.', note: 'Implies a structural deadlock.' },
      { id: 'idiom_454', phrase: 'Adam\'s ale', meaning_en: 'A humorous, old-fashioned expression meaning pure drinking water', meaning_hi: 'पानी', example: 'After a long trek in the heat, nothing tastes better than cold Adam\'s ale.', note: 'Alludes to Adam in Eden having only water to drink.' },
      { id: 'idiom_455', phrase: 'To go to somebody\'s head', meaning_en: 'Success making someone highly arrogant; or alcohol causing slight intoxication', meaning_hi: 'चक्कर या हल्का नशा होना (सिर चढ़ना)', example: 'Don\'t let sudden fame and media praise go straight to your head.', note: 'Deals with ego inflation or intoxication.' },
      { id: 'idiom_456', phrase: 'To make amends', meaning_en: 'To compensate, apologize, or make up for a past wrong or damage caused', meaning_hi: 'भरपाई करना (क्षतिपूर्ति)', example: 'He bought her flowers to make amends for his rude behavior last night.', note: 'Restorative justice idiom.' },
      { id: 'idiom_457', phrase: 'Go for a song', meaning_en: 'Something bought or sold exceptionally cheaply for a very small price', meaning_hi: 'बहुत सस्ते में बिकना', example: 'During the bankruptcy auction, luxury items went completely for a song.', note: 'Highlights extreme bargains.' },
      { id: 'idiom_458', phrase: 'Make an ass out of', meaning_en: 'To make someone look thoroughly foolish, stupid, or ridiculous publicly', meaning_hi: 'किसी को मूर्ख बनाना या बेवकूफ दिखाना', example: 'He drank way too much at the corporate party and made an absolute ass out of himself.', note: 'Social embarrassment warning.' },
      { id: 'idiom_459', phrase: 'Mealy-mouthed', meaning_en: 'Afraid or unwilling to speak the direct truth clearly; soft-spoken and deceptive', meaning_hi: 'साफ बोलने से डरना (दो टूक न कहना)', example: 'We need a bold leader, not a mealy-mouthed politician who avoids tough topics.', note: 'Criticizes evasive speaking style.' },
      { id: 'idiom_460', phrase: 'By fits and starts', meaning_en: 'Happening irregularly, spasmodically, and with frequent abrupt stops', meaning_hi: 'अनियमित रूप से', example: 'The old generator works only by fits and starts.', note: 'Antonym of "steady progress."' }
    ]
  },

  'Set 24': {
    setNumber: 24,
    range: '461–480',
    intro: 'Time constraints, physical effort indexes aur baseline communication features yahan balanced hain.',
    idioms: [
      { id: 'idiom_461', phrase: 'To have a finger in every pie', meaning_en: 'To be involved in way too many diverse tasks or meddle in everyone\'s business', meaning_hi: 'कई कार्यों में शामिल होना (हर काम में दखल)', example: 'See idiom 41 for structural pairing patterns.', note: 'Implies multi-tasking or over-meddling.' },
      { id: 'idiom_462', phrase: 'To make up one\'s mind', meaning_en: 'To come to a definitive, firm decision about something', meaning_hi: 'निर्णय लेना', example: 'You need to make up your mind about which college to join.', note: 'Core decision idiom.' },
      { id: 'idiom_463', phrase: 'Not to mince matters', meaning_en: 'To speak the blunt truth clearly without trying to soften it or be polite', meaning_hi: 'दूसरों को भ्रमित न करना (साफ कहना)', example: 'Not to mince matters, your work quality has been absolutely terrible lately.', note: 'Direct feedback phrase.' },
      { id: 'idiom_464', phrase: 'Live from hand to mouth', meaning_en: 'To survive with barely enough money or food to cover immediate daily needs', meaning_hi: 'गुजारा करना (जैसे-तैसे चलना)', example: 'Due to severe unemployment, many laborers live poorly from hand to mouth.', note: 'Economic hardship index.' },
      { id: 'idiom_465', phrase: 'To steal a march', meaning_en: 'To secretly gain an early strategic advantage over a competitor', meaning_hi: 'बढ़त लेना (आगे निकल जाना)', example: 'By launching their app early, they successfully managed to steal a march on rivals.', note: 'Military strategy origin.' },
      { id: 'idiom_466', phrase: 'In a jiffy', meaning_en: 'An informal expression meaning happening exceptionally fast; in a tiny moment', meaning_hi: 'बहुत जल्दी (झटपट)', example: 'Don\'t leave; I will fix your broken laptop screen in a jiffy.', note: 'Implies immediate service speed.' },
      { id: 'idiom_467', phrase: 'Herculean task', meaning_en: 'A colossal task requiring immense extraordinary physical or mental strength', meaning_hi: 'बहुत मुश्किल काम', example: 'Rebuilding the entire earthquake-shattered city is a truly Herculean task.', note: 'Derived from the twelve mythological labors of Hercules.' },
      { id: 'idiom_468', phrase: 'Ended in a fiasco', meaning_en: 'A venture that finishes as a complete, humiliating, and disorganized failure', meaning_hi: 'पूरी तरह नाकामयाब (बुरी तरह असफल)', example: 'The lavishly budgeted corporate event ended in a total fiasco due to poor planning.', note: 'Highlights total organizational collapse.' },
      { id: 'idiom_469', phrase: 'Sow wild oats', meaning_en: 'To behave wildly, foolishly, and irresponsibly when young before settling down', meaning_hi: 'मूर्खता में समय बर्बाद करना', example: 'He spent his youth sowing his wild oats before joining the family firm.', note: 'Refers to wild botanical growth metaphor.' },
      { id: 'idiom_470', phrase: 'To accept the gauntlet', meaning_en: 'To formally and courageously accept a difficult challenge or open invitation to fight', meaning_hi: 'चुनौती स्वीकार करना', example: 'The young champion decided to accept the gauntlet thrown by the title-holder.', note: 'From medieval knighthood customs of throwing heavy iron gloves.' },
      { id: 'idiom_471', phrase: 'Pillar to post', meaning_en: 'Bouncing unproductively from one location or system to another', meaning_hi: 'एक जगह से दूसरी जगह', example: 'See idiom 123 for complete structural reference mappings.', note: 'Exhausting movement phrase.' },
      { id: 'idiom_472', phrase: 'Hobson\'s choice', meaning_en: 'An identical high-frequency exam variant indicating absolute zero options', meaning_hi: 'कोई वास्तविक विकल्प न होना (यह लो या पड़ो रहो)', example: 'See idiom 283 for complete analytical history context.', note: 'Duplicated metric check.' },
      { id: 'idiom_473', phrase: 'To have bitten off more than you can chew', meaning_en: 'Attempting to take on a task or responsibility that is far too big for one\'s capacity', meaning_hi: 'अपनी क्षमता से ज्यादा काम ले लेना', example: 'By managing three huge independent projects, he has bitten off more than he can chew.', note: 'Warns against over-ambition.' },
      { id: 'idiom_474', phrase: 'Out of print', meaning_en: 'A book that is no longer being printed or published by the company', meaning_hi: 'पुस्तक का प्रकाशक से उपलब्ध न होना', example: 'This rare historical textbook is unfortunately completely out of print now.', note: 'Publishing sector phrase.' },
      { id: 'idiom_475', phrase: 'Bear the palm', meaning_en: 'To win a contest; to be distinctly victorious and praised', meaning_hi: 'जीतना (विजयी होना)', example: 'In the national debate competition, our college managed to bear the palm.', note: 'From ancient Roman customs of awarding palm branches to winners.' },
      { id: 'idiom_476', phrase: 'To give the devil his due', meaning_en: 'To fairly acknowledge the good qualities or achievements of an unpleasant person you dislike', meaning_hi: 'बुरे व्यक्ति को भी उसका उचित सम्मान देना', example: 'I thoroughly dislike his attitude, but to give the devil his due, he is a brilliant coder.', note: 'Stresses objective fairness.' },
      { id: 'idiom_477', phrase: 'On thin ice', meaning_en: 'In a highly risky, dangerous, and precarious situation where errors cause disaster', meaning_hi: 'खतरनाक स्थिति में (जोखिम में)', example: 'Arriving late for the third time this week puts you on exceptionally thin ice with the boss.', note: 'Metaphor from walking on fragile frozen lakes.' },
      { id: 'idiom_478', phrase: 'To have something on the brain', meaning_en: 'To be completely obsessed and constantly talking about one specific topic continuously', meaning_hi: 'किसी चीज़ का दिमाग पर सवार होना (जुनून)', example: 'Ever since he saw the sports car, he has had it entirely on the brain.', note: 'Mental preoccupation indicator.' },
      { id: 'idiom_479', phrase: 'Not one\'s cup of tea', meaning_en: 'Something that does not align with one\'s personal taste, preference, or interest', meaning_hi: 'पसंद या विकल्प न होना (अपनी पसंद का न होना)', example: 'Thank you for the opera invitation, but classical music is simply not my cup of tea.', note: 'Polite, soft refusal phrase.' },
      { id: 'idiom_480', phrase: 'In bad taste', meaning_en: 'Something that is thoroughly offensive, rude, crude, or socially inappropriate', meaning_hi: 'अनुपयुक्त या अभद्र', example: 'Making jokes about the recent tragic accident was in highly bad taste.', note: 'Condemns social violations.' }
    ]
  },

  'Set 25': {
    setNumber: 25,
    range: '481–500',
    intro: 'Emotional breakthroughs, clarity indexes aur industrial race models ka analysis.',
    idioms: [
      { id: 'idiom_481', phrase: 'Once and for all', meaning_en: 'Finally and completely; settling a long-standing issue permanently', meaning_hi: 'हमेशा के लिए (अंतिम बार)', example: 'Let\'s sign the contract and settle this property dispute once and for all.', note: 'Indicates ultimate finality.' },
      { id: 'idiom_482', phrase: 'To have a sigh of relief', meaning_en: 'To feel an immediate, massive wave of psychological comfort after anxiety ends', meaning_hi: 'राहत की साँस लेना', example: 'When the lost child was safely found, everyone breathed a deep sigh of relief.', note: 'Physical response to stress termination.' },
      { id: 'idiom_483', phrase: 'To be on cloud nine', meaning_en: 'Experiencing supreme, absolute happiness and ecstatic joy', meaning_hi: 'बेहद खुश होना', example: 'She was completely on cloud nine after receiving her acceptance letter.', note: 'Meteorological scaling metaphor for extreme joy.' },
      { id: 'idiom_484', phrase: 'Give somebody a ring', meaning_en: 'An informal expression meaning to call someone on the telephone', meaning_hi: 'किसी को फोन करना', example: 'Give me a ring as soon as you land safely at the international airport.', note: 'Telecom slang.' },
      { id: 'idiom_485', phrase: 'Learn by heart', meaning_en: 'To memorize something completely and perfectly word for word', meaning_hi: 'कंठस्थ करना (रट लेना)', example: 'The young actor had to learn the entire Shakespearean monologue by heart.', note: 'Rote learning idiom.' },
      { id: 'idiom_486', phrase: 'To wrangle over an ass\'s shadow', meaning_en: 'To engage in a loud, angry argument over completely trivial, petty matters', meaning_hi: 'मामूली बात पर झगड़ना', example: 'Stop wasting corporate meeting hours wrangling over an ass\'s shadow.', note: 'From an ancient Greek fable about a traveler renting a donkey.' },
      { id: 'idiom_487', phrase: 'Make one\'s flesh creep', meaning_en: 'To cause someone to feel immense horror, disgust, or deep fear', meaning_hi: 'डराना (रोंगटे खड़े कर देना)', example: 'The gruesome details of the old haunted house story made my flesh creep.', note: 'Physical reaction to terror.' },
      { id: 'idiom_488', phrase: 'Damp squib', meaning_en: 'An event that is highly anticipated but turns out to be a complete disappointment', meaning_hi: 'पूरी तरह असफल (बेकार)', example: 'The heavily advertised new movie turned out to be a total damp squib.', note: 'From a historical wet firework that fails to explode.' },
      { id: 'idiom_489', phrase: 'In black and white', meaning_en: 'Stating something clearly and permanently in writing or official print', meaning_hi: 'बहुत साफ विकल्प (सफेद और काले की तरह स्पष्ट)', example: 'I won\'t believe your job offer until I see it clearly in black and white.', note: 'Demands written documentation.' },
      { id: 'idiom_490', phrase: 'Out of date', meaning_en: 'Old-fashioned, obsolete, invalid, or no longer usable', meaning_hi: 'पुराना (प्रचलन से बाहर)', example: 'This technological textbook contains heavily out of date data.', note: 'Opposite of "up to date."' },
      { id: 'idiom_491', phrase: 'It goes without saying', meaning_en: 'Something that is so completely obvious that it doesn\'t need to be stated', meaning_hi: 'जो स्पष्ट हो (कहने की जरूरत नहीं)', example: 'It goes without saying that hard work is essential for academic success.', note: 'Introduces self-evident truths.' },
      { id: 'idiom_492', phrase: 'To let someone off', meaning_en: 'To excuse, pardon, or release someone from punishment or duty', meaning_hi: 'किसी को दोषमुक्त करना', example: 'The kind traffic officer decided to let him off with just a light warning.', note: 'Lenient treatment phrase.' },
      { id: 'idiom_493', phrase: 'Call it a day', meaning_en: 'To officially stop working on a task for the rest of the current day', meaning_hi: 'काम खत्म करना (कार्यवाही समाप्त करना)', example: 'We have been coding for ten hours straight; let\'s call it a day.', note: 'Very popular office wrap-up phrase.' },
      { id: 'idiom_494', phrase: 'Get the message', meaning_en: 'To finally understand a subtle hint or implied meaning clearly', meaning_hi: 'भाव समझ जाना (संकेत समझना)', example: 'He kept looking at his watch, and I finally got the message and left.', note: 'Deals with reading social cues.' },
      { id: 'idiom_495', phrase: 'Keep at bay', meaning_en: 'To successfully prevent something dangerous from coming close or harming you', meaning_hi: 'नियंत्रण में रखना', example: 'Proper sanitation and regular washing help keep dangerous infections at bay.', note: 'Defensive control phrase.' },
      { id: 'idiom_496', phrase: 'To go off the air', meaning_en: 'To permanently or temporarily stop broadcasting a radio or TV program', meaning_hi: 'प्रसारण बंद कर देना', example: 'The controversial chat show went completely off the air last night.', note: 'Media sector idiom.' },
      { id: 'idiom_497', phrase: 'To make a fuss about', meaning_en: 'To show excessive, unnecessary excitement, worry, or anger over a minor thing', meaning_hi: 'हंगामा खड़ा करना', example: 'Stop making such a massive fuss about a tiny stain on your shirt.', note: 'Criticizes overreactions.' },
      { id: 'idiom_498', phrase: 'To keep the wolf from the door', meaning_en: 'To earn just enough baseline money to stave off starvation and poverty', meaning_hi: 'भूख से बचाना', example: 'He works two manual labor jobs just to keep the wolf away from the door.', note: 'Depicts basic economic survival.' },
      { id: 'idiom_499', phrase: 'Teething problems', meaning_en: 'Minor operational problems encountered during the initial stage of a venture', meaning_hi: 'शरूआती समस्याएँ', example: 'The new mobile application had a few teething problems during launch week.', note: 'Metaphor from infants growing teeth.' },
      { id: 'idiom_500', phrase: 'Rat race', meaning_en: 'The fierce, exhausting, and highly competitive modern struggle for wealth or power', meaning_hi: 'प्रतिस्पर्धा का संघर्ष भरा जीवन (चूहादौड़ी)', example: 'He quit the stressful corporate rat race to live peacefully in a quiet village.', note: 'Critiques stressful hyper-competitive lifestyles.' }
    ]
  },

  'Set 26': {
    setNumber: 26,
    range: '501–520',
    intro: 'Effort metrics, societal norms aur personal status indicators ka balanced data framework.',
    idioms: [
      { id: 'idiom_501', phrase: 'Spin one\'s wheels', meaning_en: 'Expending massive effort without making any real forward progress', meaning_hi: 'बहुत मेहनत करना लेकिन कोई लाभ न होना', example: 'I am just spinning my wheels trying to fix this ancient engine.', note: 'Automotive tire spinning metaphor.' },
      { id: 'idiom_502', phrase: 'Throw up the sponge', meaning_en: 'To officially surrender, give up, or acknowledge total defeat', meaning_hi: 'हार मान लेना (समर्पण कर देना)', example: 'Faced with crushing losses, the boxer finally decided to throw up the sponge.', note: 'From historical prize fighting where coaches threw a sponge into the ring to stop a fight.' },
      { id: 'idiom_503', phrase: 'Beat a dead horse', meaning_en: 'An identical dynamic shift of wasting effort on an already finished matter', meaning_hi: 'विषय का बेकार में दोहराना (बेकार में मेहनत करना)', example: 'See idiom 155 for primary semantic guidelines.', note: 'Reinforced metric structure.' },
      { id: 'idiom_504', phrase: 'Ball is in your court', meaning_en: 'It is now completely your responsibility to take the next action or decision', meaning_hi: 'अब आपकी बारी है (अगला निर्णय आपको लेना है)', example: 'I have made my final financial offer; now the ball is in your court.', note: 'Tennis court boundary metaphor.' },
      { id: 'idiom_505', phrase: 'Gnash your teeth', meaning_en: 'To express deep, helpless anger, frustration, or intense resentment openly', meaning_hi: 'गुस्सा जाहिर करना (दांत पीसना)', example: 'He could only gnash his teeth in silent rage as his rival won.', note: 'Physical indicator of intense anger.' },
      { id: 'idiom_506', phrase: 'Tempt providence', meaning_en: 'To act with reckless foolishness and take unnecessary big risks', meaning_hi: 'जानबूझकर खतरा मोल लेना (भाग्य को ललकारना)', example: 'Driving a vehicle at high speeds on dark, slippery roads is tempting providence.', note: 'Providence refers to protective fate.' },
      { id: 'idiom_507', phrase: 'Within an ace of', meaning_en: 'Coming exceptionally close to an event or on the very verge of it', meaning_hi: 'बहुत नजदीक (लगभग)', example: 'The racing car was within an ace of winning when its tire exploded.', note: 'Dice or card value calculation proximity.' },
      { id: 'idiom_508', phrase: 'Beyond the pale', meaning_en: 'Completely unacceptable, improper, or outside the boundaries of civil behavior', meaning_hi: 'अस्वीकार्य', example: 'His racist and insulting remarks during dinner were completely beyond the pale.', note: 'Pale historically referred to defensive fence boundaries of safe territories.' },
      { id: 'idiom_509', phrase: 'The royal road', meaning_en: 'An exceptionally easy, direct, and comfortable path to achieving success', meaning_hi: 'आसान तरीका', example: 'There is absolutely no simple royal road to mastering complex mathematics.', note: 'Originates from ancient geometry declarations to kings.' },
      { id: 'idiom_510', phrase: 'Whiter than white', meaning_en: 'Exhibiting total, absolute honesty and perfect moral integrity above suspicion', meaning_hi: 'पूरी तरह ईमानदार', example: 'The anti-corruption bureau officer maintained a reputation that was whiter than white.', note: 'Praises flawless ethical records.' },
      { id: 'idiom_511', phrase: 'On the bum', meaning_en: 'Living an unstable, wandering life as a vagrant or homeless person', meaning_hi: 'आवारा जीवन जीना', example: 'He spent two chaotic years traveling across states on the bum.', note: 'Slang descriptor for homelessness.' },
      { id: 'idiom_512', phrase: 'For days on end', meaning_en: 'Continuously and uninterrupted for multiple long days consecutively', meaning_hi: 'लगातार कई दिनों तक', example: 'During monsoon, it rained intensely for days on end without stopping.', note: 'Stresses heavy duration.' },
      { id: 'idiom_513', phrase: 'On the button', meaning_en: 'Perfectly accurate, precise, or exactly on time', meaning_hi: 'बिल्कुल सटीक', example: 'He arrived at the laboratory at 9:00 AM sharp, right on the button.', note: 'Precision indicator slang.' },
      { id: 'idiom_514', phrase: 'The tip of the iceberg', meaning_en: 'A tiny visible part of a much larger, highly complex hidden problem', meaning_hi: 'बहुत बड़ी समस्या का सतही भाग (हिमशैल का सिरा)', example: 'The initial accounting error of ten dollars was just the tip of the iceberg.', note: 'Scientific physical metaphor.' },
      { id: 'idiom_515', phrase: 'Tide over', meaning_en: 'To help or support someone through a temporary period of severe difficulty or resource shortage', meaning_hi: 'मुश्किल समय में सहारा देना', example: 'Could you lend me a hundred dollars just to tide me over until payday?', note: 'Nautical rising tide assistance metaphor.' },
      { id: 'idiom_516', phrase: 'Stand corrected', meaning_en: 'To formally admit that you made a mistake and accept correct data', meaning_hi: 'गलती मान लेना (स्वीकार करना)', example: 'I realize my data dates were wrong; I stand corrected.', note: 'Polite professional disclaimer.' },
      { id: 'idiom_517', phrase: 'Behind the eight ball', meaning_en: 'In an exceptionally tough, highly disadvantageous, or losing position', meaning_hi: 'नुकसान की स्थिति में (बाजी पर)', example: 'Failing to submit the project on time leaves us behind the eight ball.', note: 'From pool/billiards game mechanics.' },
      { id: 'idiom_518', phrase: 'A ghost of a chance', meaning_en: 'The absolute smallest, minimal, or most unlikely possibility of success', meaning_hi: 'बहुत छोटी संभावना', example: 'Without real study, you don\'t have even a ghost of a chance of passing.', note: 'Hyperbole for structural impossibility.' },
      { id: 'idiom_519', phrase: 'To bring to heel', meaning_en: 'To force someone to submit fully to authority or obey instructions strictly', meaning_hi: 'किसी को आज्ञा मानने को मजबूर करना', example: 'The strict manager used pay cuts to bring the rebellious workers to heel.', note: 'From dog training commands.' },
      { id: 'idiom_520', phrase: 'Long in the tooth', meaning_en: 'Advanced in age; getting visibly old or elderly', meaning_hi: 'बूढ़ा होना (उम्रदराज़)', example: 'This vintage office computer printing system is getting a bit long in the tooth.', note: 'From judging a horse\'s old age by receding gum lines.' }
    ]
  },

  'Set 27': {
    setNumber: 27,
    range: '521–540',
    intro: 'Character values, behavioral shifts aur sudden disruptions ka conceptual map.',
    idioms: [
      { id: 'idiom_521', phrase: 'The salt of the earth', meaning_en: 'An exceptionally good, thoroughly honest, kind, and reliable person', meaning_hi: 'बहुत अच्छा और ईमानदार/दयालु व्यक्ति', example: 'Our rural village doctor is truly the salt of the earth.', note: 'Biblical praise emphasizing essential human worth.' },
      { id: 'idiom_522', phrase: 'Flies off at a tangent', meaning_en: 'Suddenly changing the topic of discussion to an unrelated matter abruptly', meaning_hi: 'अप्रासंगिक विषय पर बात करने लगना (भटक जाना)', example: 'It is hard to have an agenda meeting with her because she always flies off at a tangent.', note: 'Mathematical geometry metaphor.' },
      { id: 'idiom_523', phrase: 'Going places', meaning_en: 'Showing immense talent and destined to be highly successful in life', meaning_hi: 'प्रतिभाशाली और सफल', example: 'That young software engineer is highly innovative; he is definitely going places.', note: 'Positive professional upward trajectory.' },
      { id: 'idiom_524', phrase: 'Get the sack', meaning_en: 'To be dismissed, terminated, or officially fired from a job link', meaning_hi: 'नौकरी से निकाला जाना', example: 'See idiom 194 and 242 for comparative structural links.', note: 'From historical tradesmen packing tools in a sack upon firing.' },
      { id: 'idiom_525', phrase: 'Of no avail', meaning_en: 'Completely useless, ineffective, and yielding absolutely zero results', meaning_hi: 'बेकार (व्यर्थ)', example: 'All our strenuous rescue efforts were unfortunately of no avail.', note: 'Formal failure phrase.' },
      { id: 'idiom_526', phrase: 'Bone to pick', meaning_en: 'Having a grievance or unpleasant issue that needs to be discussed and settled with someone', meaning_hi: 'झगड़े का कारण', example: 'Step into my office; I have a serious bone to pick with you regarding your late submission.', note: 'Metaphor from two dogs fighting over a bone.' },
      { id: 'idiom_527', phrase: 'Pull someone up on something', meaning_en: 'To criticize, scold, or hold someone accountable for an error directly', meaning_hi: 'आलोचना करना (डांटना)', example: 'The supervisor pulled him up on his highly careless logging data error.', note: 'Accountability checking phrase.' },
      { id: 'idiom_528', phrase: 'A cut above', meaning_en: 'Distinctly superior, better, or higher in quality than others nearby', meaning_hi: 'काफी बेहतर (श्रेष्ठ)', example: 'His custom architectural design work is a clear cut above the rest.', note: 'Praises competitive excellence.' },
      { id: 'idiom_529', phrase: 'Balloon goes up', meaning_en: 'The precise moment when a tense situation becomes serious, dangerous, or dynamic', meaning_hi: 'स्थिति अप्रिय/गंभीर होना', example: 'When the tax audit reports are published, the balloon will definitely go up.', note: 'From battlefield signalling systems historical.' },
      { id: 'idiom_530', phrase: 'Part and parcel', meaning_en: 'An essential, integral, and unavoidable component of an experience', meaning_hi: 'महत्वपूर्ण हिस्सा', example: 'Long hours of study are part and parcel of preparing for competitive exams.', note: 'Legal property documentation origin.' },
      { id: 'idiom_531', phrase: 'Gate crasher', meaning_en: 'An uninvited person who sneaks into a party or event without a ticket', meaning_hi: 'बिना बुलाए मेहमान', example: 'Security caught a few local gate crashers at the lavish wedding reception.', note: 'Social intrusion slang.' },
      { id: 'idiom_532', phrase: 'As daft as a brush', meaning_en: 'Extremely silly, foolish, or comical in behavior', meaning_hi: 'बेहद मूर्ख', example: 'Don\'t take his wild theories seriously; he is as daft as a brush.', note: 'British colloquial comparison.' },
      { id: 'idiom_533', phrase: 'Of his own accord', meaning_en: 'Acting entirely voluntarily and by one\'s own independent free choice', meaning_hi: 'अपनी मर्जी से (स्वेच्छा से)', example: 'The honest witness stepped out and spoke to the police of his own accord.', note: 'Zero external pressure implied.' },
      { id: 'idiom_534', phrase: 'Beef up', meaning_en: 'To strengthen, reinforce, or increase the power or security of something', meaning_hi: 'मजबूत करना', example: 'The bank decided to heavily beef up its digital firewall protection.', note: 'Slang for adding mass/muscle/power.' },
      { id: 'idiom_535', phrase: 'Catch one\'s breath', meaning_en: 'To rest briefly to restore normal breathing after exertion or sudden shock', meaning_hi: 'सदमा या आश्चर्य (साँस रुक जाना)', example: 'The stunning scenic beauty of the valleys made me catch my breath.', note: 'Physical response to aesthetic shock or labor.' },
      { id: 'idiom_536', phrase: 'Cook one\'s goose', meaning_en: 'To completely ruin someone\'s prospective plans, chances, or reputation permanent', meaning_hi: 'किसी की आशा पर पानी फेर देना', example: 'Getting caught cheating completely cooked his goose for the scholarship.', note: 'Destruction of prospects.' },
      { id: 'idiom_537', phrase: 'Do away with', meaning_en: 'To completely abolish, eliminate, or destroy a rule or system', meaning_hi: 'नष्ट कर देना', example: 'The corporate office decided to do away with the traditional dress code.', note: 'Phrasal termination idiom.' },
      { id: 'idiom_538', phrase: 'Give me a hand', meaning_en: 'A standard informal request asking someone to assist them with a physical task', meaning_hi: 'मेरी मदद करो', example: 'Could you please give me a hand moving this heavy wooden table?', note: 'Popular cooperative phrase.' },
      { id: 'idiom_539', phrase: 'Looked blank', meaning_en: 'Showing a complete lack of expression, understanding, or response on one\'s face', meaning_hi: 'बिना किसी भावना के (भावशून्य)', example: 'When I asked him the physics question, he just looked blank.', note: 'Indicates confusion or shock.' },
      { id: 'idiom_540', phrase: 'On the brink of disaster', meaning_en: 'Standing dangerously close to an absolute structural catastrophe', meaning_hi: 'विनाश के कगार पर', example: 'The highly debt-ridden airline is currently on the brink of disaster.', note: 'See idiom 121 for expanded context.' }
    ]
  },

  'Set 28': {
    setNumber: 28,
    range: '541–560',
    intro: 'Is set mein public behavior modeling, secrets leakage aur self-correction frameworks shaamil hain.',
    idioms: [
      { id: 'idiom_541', phrase: 'Playing to the gallery', meaning_en: 'Behaving in an exaggerated manner to win cheap popularity or applause from the common crowd', meaning_hi: 'जनता को खुश करना', example: 'The politician focused on playing to the gallery instead of discussing policy.', note: 'Theatrical origin from cheap balcony seating called the gallery.' },
      { id: 'idiom_542', phrase: 'Trumped up', meaning_en: 'Completely fabricated, invented, or false charges or accusations', meaning_hi: 'मनगढ़ंत (झूठा आरोप)', example: 'He was completely acquitted when the court discovered the charges were trumped up.', note: 'Implies a deliberate legal frame-up.' },
      { id: 'idiom_543', phrase: 'Passed himself off', meaning_en: 'To falsely pretend to be someone else to deceive a crowd successfully', meaning_hi: 'खुद को छुपाया (भेष बदलना)', example: 'The clever con artist passed himself off as an expert financial doctor.', note: 'Deceptive impersonation phrase.' },
      { id: 'idiom_544', phrase: 'Gave the game away', meaning_en: 'To accidentally reveal a hidden secret, trick, or plan to a rival', meaning_hi: 'रहस्य उजागर कर दिया', example: 'His nervous face completely gave the entire surprise game away.', note: 'Accidental disclosure indicator.' },
      { id: 'idiom_545', phrase: 'Gone down the drain', meaning_en: 'Resources, time, or money that are completely lost and wasted forever', meaning_hi: 'हमेशा के लिए खो गया', example: 'When the corporate venture failed, all our hard savings went down the drain.', note: 'Vivid domestic waste metaphor.' },
      { id: 'idiom_546', phrase: 'On good terms', meaning_en: 'Maintaining a friendly, smooth, and harmonious relationship with someone', meaning_hi: 'मित्रवत था (अच्छे संबंध)', example: 'Despite their quiet divorce, they managed to remain on excellent terms.', note: 'Social harmony index.' },
      { id: 'idiom_547', phrase: 'Set forth', meaning_en: 'To describe, present, or explain facts clearly in a speech or document', meaning_hi: 'कहा (व्यक्त किया)', example: 'The company director set forth his brilliant future vision in the meeting.', note: 'Formal presentation phrasing.' },
      { id: 'idiom_548', phrase: 'Hadn\'t a leg to stand on', meaning_en: 'Having absolutely no valid logic, proof, or legal position to support a claim', meaning_hi: 'उसके पास ज्यादा उम्मीद नहीं थी (बिना सहारे)', example: 'Without physical receipts, his warranty claim hadn\'t a leg to stand on.', note: 'Total lack of structural support.' },
      { id: 'idiom_549', phrase: 'Show the white feather', meaning_en: 'An identical core exam text structure reflecting immediate cowardice', meaning_hi: 'कायरता के लक्षण दिखाना', example: 'See idiom 26 for deep historical cockfighting background.', note: 'Duplicated thematic check.' },
      { id: 'idiom_550', phrase: 'To give it a shot', meaning_en: 'An informal expression meaning to try or attempt an activity for the first time', meaning_hi: 'कुछ प्रयास करना (आजमाना)', example: 'I have never played golf before, but I am ready to give it a shot.', note: 'Encouraging action phrase.' },
      { id: 'idiom_551', phrase: 'Eat one\'s words', meaning_en: 'To be forced to publicly retract a statement or admit you were completely wrong', meaning_hi: 'अपनी कही हुई बात वापस लेना (मुकर जाना)', example: 'He predicted I would fail, but my victory forced him to eat his words.', note: 'Humiliating self-retraction.' },
      { id: 'idiom_552', phrase: 'Rose-coloured glasses', meaning_en: 'An overly optimistic, naive, and unrealistic view of a situation ignoring problems', meaning_hi: 'जीवन के प्रति सकारात्मक दृष्टिकोण', example: 'She views life through rose-coloured glasses and misses critical risks.', note: 'Visual filter metaphor.' },
      { id: 'idiom_553', phrase: 'One track mind', meaning_en: 'Thinking persistently about only one specific topic to the exclusion of all else', meaning_hi: 'हमेशा एक ही चीज़ के बारे में सोचना', example: 'When exams approach, he has a strict one track mind focused entirely on grades.', note: 'Intense cognitive focus.' },
      { id: 'idiom_554', phrase: 'On the double', meaning_en: 'Moving or doing a task at a very fast, rapid pace immediately', meaning_hi: 'तेज गति से', example: 'The supervisor ordered the crew to finish the bridge setup on the double.', note: 'Military marching speed command.' },
      { id: 'idiom_555', phrase: 'Over one\'s head', meaning_en: 'Something that is way too complex, difficult, or deep for a person to understand', meaning_hi: 'समझने की क्षमता से बाहर (कठिन)', example: 'The advanced mathematics lecture went completely over my head.', note: 'Cognitive height metaphor.' },
      { id: 'idiom_556', phrase: 'Breath of fresh air', meaning_en: 'A clean, refreshing, and welcome new change or person in a boring environment', meaning_hi: 'कोई नया और तरोताजा करने वाला', example: 'The innovative young executive was a true breath of fresh air for the traditional board.', note: 'Highly positive rejuvenation indicator.' },
      { id: 'idiom_557', phrase: 'To call the shots', meaning_en: 'To act as the absolute director in charge who makes all major rules', meaning_hi: 'प्रभारी व्यक्ति होना (कमान संभालना)', example: 'In this house, it is definitely my mother who calls all the shots.', note: 'From billiards or marksmanship target calling.' },
      { id: 'idiom_558', phrase: 'A nine days\' wonder', meaning_en: 'Something that causes massive sensational excitement for a short time but is quickly forgotten', meaning_hi: 'थोड़े समय का सनसनी (अल्पकालिक)', example: 'That viral internet pop video proved to be a simple nine days\' wonder.', note: 'Ephemeral fame idiom.' },
      { id: 'idiom_559', phrase: 'Cast a slur', meaning_en: 'To deliberately insult, damage, or bring dishonor to someone\'s reputation', meaning_hi: 'क्षतिग्रस्त (बदनाम करना)', example: 'His modern critical remarks cast an unfair slur on the veteran professor\'s legacy.', note: 'Reputational attack phrase.' },
      { id: 'idiom_560', phrase: 'Brought to book', meaning_en: 'To officially hold someone accountable and punish them for an error', meaning_hi: 'जवाबदेह ठहराया', example: 'The corrupt layout designers were finally caught and brought to book.', note: 'See idiom 559 and 584.' }
    ]
  },

  'Set 29': {
    setNumber: 29,
    range: '561–580',
    intro: 'Corporate compliance levels, strategic wins aur relational boundaries ka detailed review.',
    idioms: [
      { id: 'idiom_561', phrase: 'Lay our heads together', meaning_en: 'To sit down together and consult cooperatively to solve a complex problem', meaning_hi: 'परामर्श से काम करना (मिलकर सोचना)', example: 'Let\'s lay our heads together and plan the annual budget distribution.', note: 'Collaborative problem solving.' },
      { id: 'idiom_562', phrase: 'Up to the mark', meaning_en: 'Meeting the required standard of quality, performance, or health', meaning_hi: 'आवश्यक मानक के अनुसार', example: 'His recent work submission was simply not up to the mark.', note: 'Common performance rating phrase.' },
      { id: 'idiom_563', phrase: 'Wild fire', meaning_en: 'Information, news, or rumors spreading with extreme, uncontrollable speed', meaning_hi: 'तेजी से फैलना (अग्नि की तरह)', example: 'The shocking news of the corporate merger spread like wild fire across town.', note: 'Highly dramatic speed metaphor.' },
      { id: 'idiom_564', phrase: 'Do a good turn', meaning_en: 'To perform a helpful, kind act or favor for someone selflessly', meaning_hi: 'सेवा प्रदान करना (भलाई करना)', example: 'He tries to do a good turn for an elder person every single day.', note: 'Boy Scout operational model proverb.' },
      { id: 'idiom_565', phrase: 'Carry the day', meaning_en: 'To be distinctly successful or win a crucial battle or debate contest', meaning_hi: 'जीत हासिल करना', example: 'Her brilliant final arguments managed to carry the day for the team.', note: 'Signifies ultimate triumph.' },
      { id: 'idiom_566', phrase: 'Eye-wash', meaning_en: 'A deceptive, insincere action meant to hide the truth; pure pretense', meaning_hi: 'धोखा', example: 'The official internal safety investigation was just a superficial eye-wash.', note: 'Visual trickery critique.' },
      { id: 'idiom_567', phrase: 'Cry over spilt milk', meaning_en: 'Wasting time regretting past mistakes or accidents that cannot be altered', meaning_hi: 'व्यर्थ पछताना (गिरा दूध रोना)', example: 'You failed the exam, but stop crying over spilt milk and study now.', note: 'Identical context to idiom 566/734.' },
      { id: 'idiom_568', phrase: 'First and foremost', meaning_en: 'The most critical, essential, and primary point to consider before all else', meaning_hi: 'सबसे महत्वपूर्ण पहलू', example: 'First and foremost, we must ensure absolute safety parameters for workers.', note: 'Structural prioritizing phrase.' },
      { id: 'idiom_569', phrase: 'Apple of one\'s eye', meaning_en: 'A person who is cherished, loved intensely, and minded above everyone else', meaning_hi: 'बहुत प्यारा', example: 'The little grandson is completely the apple of his grandfather\'s eye.', note: 'Ancient structural phrasing referring to the sensitive pupil of the eye.' },
      { id: 'idiom_570', phrase: 'Behind one\'s back', meaning_en: 'Doing or saying something secretly in a person\'s absence, often deceitfully', meaning_hi: 'किसी की अनुपस्थिति में (पीठ पीछे)', example: 'It is highly unprofessional to talk maliciously about your friends behind their back.', note: 'Condemns betrayal.' },
      { id: 'idiom_571', phrase: 'At one\'s beck and call', meaning_en: 'Being completely submissive and always ready to obey someone\'s orders instantly', meaning_hi: 'आदेश का पालन करने को तैयार होना', example: 'The billionaire expects his staff to be at his constant beck and call.', note: 'Implies a total lack of personal freedom.' },
      { id: 'idiom_572', phrase: 'By the skin of one\'s teeth', meaning_en: 'Barely escaping disaster or managing to achieve a goal by the absolute narrowest margin', meaning_hi: 'बाल-बाल बचना', example: 'He passed the tough engineering exam by the absolute skin of his teeth.', note: 'Biblical origin from the Book of Job.' },
      { id: 'idiom_573', phrase: 'Pull the plug', meaning_en: 'To abruptly stop providing resources or terminate a project permanent', meaning_hi: 'किसी चीज़ को जारी रहने से रोकना', example: 'The corporate bank decided to pull the plug on our underperforming project.', note: 'Medical life-support or electrical device metaphor.' },
      { id: 'idiom_574', phrase: 'Wag the dog', meaning_en: 'Invert relationship priorities by letting a minor fact distract attention from a major issue', meaning_hi: 'महत्वपूर्ण से कम महत्वपूर्ण की तरफ ध्यान भटकाना', example: 'The minor political scandal was amplified just to wag the dog away from economic losses.', note: 'From the phrase "a dog is smarter than its tail."' },
      { id: 'idiom_575', phrase: 'Water under the bridge', meaning_en: 'Past events or disagreements that are over, forgiven, and no longer matter now', meaning_hi: 'पिछली बातें अब महत्वपूर्ण नहीं', example: 'We had serious arguments years ago, but that\'s all water under the bridge now.', note: 'Promotes moving forward.' },
      { id: 'idiom_576', phrase: 'Saved by the bell', meaning_en: 'Escaping a difficult, awkward situation at the absolute last second due to an interruption', meaning_hi: 'अंतिम समय पर बचाया जाना', example: 'I didn\'t know the answer, but the school bell rang and I was saved by the bell.', note: 'From boxing matches where the round bell saves a downed fighter.' },
      { id: 'idiom_577', phrase: 'Down to the wire', meaning_en: 'A tense situation whose final outcome remains completely uncertain until the last moment', meaning_hi: 'जिसका परिणाम अंतिम समय तक अनिश्चित हो', example: 'The presidential election results are tight and going straight down to the wire.', note: 'From horse racing track finish line wires.' },
      { id: 'idiom_578', phrase: 'To the letter', meaning_en: 'Following instructions or execution paths perfectly down to every single written word', meaning_hi: 'पूरी तरह (हर शब्द का पालन)', example: 'The meticulous pharmacist followed the strict chemical recipe to the letter.', note: 'Demands rigid compliance.' },
      { id: 'idiom_579', phrase: 'Neck and neck', meaning_en: 'Running completely even, level, and neck-to-neck in a close competition', meaning_hi: 'साथ-साथ (बराबरी पर)', example: 'Both massive companies are neck and neck in the current smartphone race.', note: 'Horse racing metaphor for equal performance.' },
      { id: 'idiom_580', phrase: 'To knock off', meaning_en: 'To finish working for the day; or to complete a task quickly', meaning_hi: 'काम करना बंद करना', example: 'It\'s 5:00 PM already; let\'s knock off and go home.', note: 'Popular shifting/labor slang.' }
    ]
  },

  'Set 30': {
    setNumber: 30,
    range: '581–600',
    intro: 'Set 30 addresses focus elements, task allocation models, and behavioral critique criteria.',
    idioms: [
      { id: 'idiom_581', phrase: 'To keep the powder dry', meaning_en: 'To remain fully prepared for immediate action or trouble ahead', meaning_hi: 'किसी भी काम के लिए तैयार रहना', example: 'Keep your financial powder dry for prospective investment drops.', note: 'From historic military routines of keeping gunpowder dry from rain.' },
      { id: 'idiom_582', phrase: 'In the wake of', meaning_en: 'Happening as a direct consequence or result following a major event', meaning_hi: 'के परिणाम स्वरूप', example: 'In the wake of the severe economic recession, many companies closed.', note: 'From the tracking waves left behind a moving ship.' },
      { id: 'idiom_583', phrase: 'To fizzle out', meaning_en: 'To slowly decrease in power or enthusiasm and fail weakly over time', meaning_hi: 'धीरे-धीरे असफल होना', example: 'The grand public protests unfortunately fizzled out due to continuous rain.', note: 'Depicts gradual failure.' },
      { id: 'idiom_584', phrase: 'Dress down', meaning_en: 'To scold or reprimand someone harshly; also means wearing casual clothes', meaning_hi: 'डांटना', example: 'The angry manager gave the late staff a severe dressing down.', note: 'Dual meaning: verbal scolding or casual dressing.' },
      { id: 'idiom_585', phrase: 'To bring to book', meaning_en: 'An identical target pattern checking legal punishment enforcement metrics', meaning_hi: 'दोषी को सजा दिलाना', example: 'See idiom 560 for unified analytical parameters mapping.', note: 'Accountability matching.' },
      { id: 'idiom_586', phrase: 'At the outset', meaning_en: 'At the absolute beginning or initialization of a process', meaning_hi: 'शुरुआत में ही', example: 'At the very outset of our venture, we faced massive regulatory doubts.', note: 'Process initiation indicator.' },
      { id: 'idiom_587', phrase: 'At home in', meaning_en: 'Feeling completely comfortable, fluent, and highly skilled in a specific field', meaning_hi: 'सहज होना (जैसे घर में हो)', example: 'As a veteran coder, he is fully at home in data algorithms.', note: 'Implies relaxed expertise.' },
      { id: 'idiom_588', phrase: 'A beehive', meaning_en: 'An exceptionally busy, active, and crowded location full of industrious movement', meaning_hi: 'व्यस्त स्थान (छत्ता)', example: 'The newsroom became a massive beehive during election night.', note: 'Compares human work to industrious bees.' },
      { id: 'idiom_589', phrase: 'To win laurels', meaning_en: 'To earn great honors, distinct prestige, public accolades, or recognition', meaning_hi: 'बड़ी प्रतिष्ठा अर्जित करना', example: 'The brilliant young scientist managed to win laurels worldwide.', note: 'From ancient Greek customs of crowning heroes with laurel wreaths.' },
      { id: 'idiom_590', phrase: 'All-thumbs', meaning_en: 'Visibly clumsy, awkward, or uncoordinated physically with hands', meaning_hi: 'फूहड़ (अनाड़ी)', example: 'When it comes to delicate knitting tasks, I am completely all-thumbs.', note: 'Humorous hyperbole depicting hands made only of clumsy thumbs.' },
      { id: 'idiom_591', phrase: 'Rises with the lark', meaning_en: 'Waking up exceptionally early in the morning daily', meaning_hi: 'बहुत जल्दी उठना', example: 'My traditional grandfather always rises beautifully with the lark.', note: 'Based on early singing birds.' },
      { id: 'idiom_592', phrase: 'Go dutch', meaning_en: 'An arrangement where each person pays their own individual share of a restaurant bill', meaning_hi: 'खर्चा बांटना', example: 'We decided to go dutch on our very first friendly dinner date.', note: 'Popular dining terminology.' },
      { id: 'idiom_593', phrase: 'Keep a level head', meaning_en: 'Remaining perfectly calm, rational, sensible, and composed during a crisis', meaning_hi: 'समझदार था', example: 'During the stock crash, keeping a level head saved his finances.', note: 'Praises emotional balance.' },
      { id: 'idiom_594', phrase: 'Go for the jugular', meaning_en: 'Aggressively attacking a rival\'s absolute weakest point to cause total defeat', meaning_hi: 'पूरी ताकत से हमला करना (कमजोर बिंदु पर हमला)', example: 'During the corporate debate, the lawyer went straight for the jugular.', note: 'From predatory animals attacking the critical jugular vein of prey.' },
      { id: 'idiom_595', phrase: 'Queer somebody\'s pitch', meaning_en: 'To intentionally ruin or spoil someone\'s carefully planned business setup or chances', meaning_hi: 'किसी की योजना बिगाड़ना', example: 'By offering massive discounts early, they queered our entire market pitch.', note: 'Historic British street vendor market slot terminology.' },
      { id: 'idiom_596', phrase: 'To make the grade', meaning_en: 'To successfully meet a necessary standard and achieve victory', meaning_hi: 'सफल होना', example: 'He worked hard but unfortunately didn\'t quite make the grade for the national squad.', note: 'Performance fulfillment indicator.' },
      { id: 'idiom_597', phrase: 'To be up and doing', meaning_en: 'Actively working, busy, and taking dynamic steps to accomplish tasks', meaning_hi: 'सक्रिय रूप से लगे रहना', example: 'If you want to finish the layout today, you must be up and doing early.', note: 'Call for immediate activity.' },
      { id: 'idiom_598', phrase: 'By the rule of thumb', meaning_en: 'A broad, practical guideline based entirely on experience rather than precise science', meaning_hi: 'मोटे अनुभव से (अनुमानित)', example: 'As a rule of thumb, always save twenty percent of your regular earnings.', note: 'Practical heuristic metric.' },
      { id: 'idiom_599', phrase: 'To foam at one\'s mouth', meaning_en: 'A repeated variant emphasizing intense, uncontrolled rage', meaning_hi: 'बहुत गुस्सा होना', example: 'See idiom 79 for precise behavioral mapping definitions.', note: 'Anger variant analysis.' },
      { id: 'idiom_600', phrase: 'To burn a hole in the pocket', meaning_en: 'Money that someone is exceptionally eager to spend quickly and carelessly', meaning_hi: 'पैसा जल्दी खर्च होना (जेब में छेद करना)', example: 'The bonus money was burning a serious hole in his pocket.', note: 'Depicts low financial control.' }
    ]
  },

  'Set 31': {
    setNumber: 31,
    range: '601–620',
    intro: 'Historical metaphors, conversational strategy matrices, aur social boundary errors.',
    idioms: [
      { id: 'idiom_601', phrase: 'Elbow room', meaning_en: 'Adequate physical space or conceptual freedom to move and perform tasks comfortably', meaning_hi: 'काम करने के लिए पर्याप्त जगह देना', example: 'The new spacious laboratory design gives researchers great elbow room.', note: 'Spatial freedom metric.' },
      { id: 'idiom_602', phrase: 'To play fast and loose', meaning_en: 'To behave in an irresponsible, unreliable, or deceitful manner with rules or feelings', meaning_hi: 'लापरवाह बर्ताव करना', example: 'The contractor was caught playing fast and loose with international safety laws.', note: 'From an ancient deceptive cheating game at fairs.' },
      { id: 'idiom_603', phrase: 'Fabian policy', meaning_en: 'A policy of deliberate cautious delays and avoiding direct battles to win over time', meaning_hi: 'धीमी गति से सुधार की नीति', example: 'The management adopted a Fabian policy to wear out the protesting union.', note: 'Named after Roman general Fabius Maximus.' },
      { id: 'idiom_604', phrase: 'To eat humble pie', meaning_en: 'To be completely humiliated and forced to apologize meekly for an error', meaning_hi: 'माफी माँगनी पड़ना', example: 'When his software predictions failed, he was forced to eat humble pie.', note: 'From umble pie, made from low-class deer entrails historically.' },
      { id: 'idiom_605', phrase: 'To pick up the gauntlet', meaning_en: 'To officially accept a formal challenge thrown down by a rival', meaning_hi: 'चुनौती स्वीकार करना', example: 'The young chess master decided to pick up the gauntlet and play.', note: 'Complementary pair to idiom 470.' },
      { id: 'idiom_606', phrase: 'To cool one\'s heels', meaning_en: 'To be forced to wait for a long time before being allowed to see someone', meaning_hi: 'कुछ समय के लिए इंतजार करवाना', example: 'The arrogant secretary left the clients to cool their heels in the lobby for an hour.', note: 'Depicts intentional administrative delays.' },
      { id: 'idiom_607', phrase: 'To cut the Gordian knot', meaning_en: 'To solve an exceptionally complex problem rapidly by taking bold, direct action', meaning_hi: 'मुश्किल समस्या का समाधान करना', example: 'The minister cut the Gordian knot of long boundary legal disputes by a unified decree.', note: 'From the legend of Alexander the Great slicing a legendary knot.' },
      { id: 'idiom_608', phrase: 'An olive branch', meaning_en: 'An open offer or symbolic gesture of peace or reconciliation to end a conflict', meaning_hi: 'शांति का प्रस्ताव (जैतून की टहनी)', example: 'The management extended an olive branch by offering higher basic healthcare.', note: 'Ancient classical and biblical symbol of peace.' },
      { id: 'idiom_609', phrase: 'The primrose path', meaning_en: 'A life path focused purely on easy pleasures and luxury that leads to ruin', meaning_hi: 'आनंद की खोज', example: 'The young heir followed the primrose path of heavy partying straight to bankruptcy.', note: 'Famously used in Shakespeare\'s Hamlet.' },
      { id: 'idiom_610', phrase: 'Lead somebody to the altar', meaning_en: 'To marry someone formally', meaning_hi: 'किसी से शादी करना', example: 'After a year of romance, he proudly led her to the altar.', note: 'Church wedding architecture metaphor.' },
      { id: 'idiom_611', phrase: 'In pawn', meaning_en: 'To leave something valuable as collateral for a cash loan with a pawnbroker', meaning_hi: 'गिरवी रखा हुआ', example: 'His family jewelry is unfortunately held in pawn until he clears the debt.', note: 'Financial distress indicator.' },
      { id: 'idiom_612', phrase: 'Something up one\'s sleeve', meaning_en: 'Having a secret plan, resource, or trick kept ready for future surprise use', meaning_hi: 'वैकल्पिक योजना होना', example: 'Don\'t celebrate victory yet; the clever strategist has something up his sleeve.', note: 'From magicians or cheaters hiding items in long sleeves.' },
      { id: 'idiom_613', phrase: 'To take off', meaning_en: 'To remove clothing; or a vehicle leaving the ground rapidly; or succeeding fast', meaning_hi: 'हटाना (उतारना)', example: 'The new business venture is starting to take off beautifully.', note: 'Multi-functional phrase.' },
      { id: 'idiom_614', phrase: 'Led by the nose', meaning_en: 'A repeated exam core metric tracking absolute control dominance metrics', meaning_hi: 'किसी को पूरी तरह नियंत्रित करना', example: 'See idiom 368 for deep background operational specifications.', note: 'Control variant check.' },
      { id: 'idiom_615', phrase: 'To catch somebody on the hop', meaning_en: 'To surprise, catch, or approach someone when they are completely unprepared', meaning_hi: 'किसी को अचानक पकड़ना (असावधानी में)', example: 'The surprise audit completely caught the corporate accountants on the hop.', note: 'British colloquialism.' },
      { id: 'idiom_616', phrase: 'Make mark', meaning_en: 'Attaining definitive baseline recognition and permanent fame', meaning_hi: 'स्वयं को प्रतिष्ठित करना', example: 'See idiom 127 for comprehensive baseline execution details.', note: 'Recognition tracking phrase.' },
      { id: 'idiom_617', phrase: 'Jump down your throat', meaning_en: 'To react with sudden, excessive anger and scold someone aggressively', meaning_hi: 'किसी पर बुरी तरह झूलना (गुस्से से डांटना)', example: 'I only asked a simple question; there is no need to jump down my throat.', note: 'Criticizes aggressive overreactions.' },
      { id: 'idiom_618', phrase: 'Struck a chill to the heart', meaning_en: 'To fill someone with sudden, intense horror, dread, or extreme fear', meaning_hi: 'किसी को डरा देना', example: 'The sudden cold midnight scream struck a profound chill to her heart.', note: 'Fear indicator.' },
      { id: 'idiom_619', phrase: 'To cast pearls before a swine', meaning_en: 'Offering highly valuable or beautiful items to an unappreciative, ignorant person', meaning_hi: 'अयोग्य व्यक्ति को मूल्यवान वस्तु देना (सूअर के आगे मोती डालना)', example: 'Explaining complex poetry to that rude crowd is like casting pearls before swine.', note: 'Biblical wisdom phrase.' },
      { id: 'idiom_620', phrase: 'No love lost', meaning_en: 'A state of intense mutual dislike, ill-will, or open animosity between two people', meaning_hi: 'तीव्र नापसंदगी', example: 'There is absolutely no love lost between the two political rivals.', note: 'Indicates historical friction.' }
    ]
  },

  'Set 32': {
    setNumber: 32,
    range: '621–640',
    intro: 'This section incorporates task splitting metrics, emergency plans, and futility parameters.',
    idioms: [
      { id: 'idiom_621', phrase: 'Clear as mud', meaning_en: 'Completely confusing, obscure, and impossible to understand clearly', meaning_hi: 'भ्रमित करने वाला (समझना मुश्किल)', example: 'The ambiguous manual instructions were as clear as mud.', note: 'Sarcastic phrase highlighting zero clarity.' },
      { id: 'idiom_622', phrase: 'Streak of bad luck', meaning_en: 'A continuous, consecutive series of unfortunate events or failures', meaning_hi: 'लगातार बदकिस्मती', example: 'He experienced a painful streak of bad luck when his shop burned down.', note: 'Depicts persistent adversity.' },
      { id: 'idiom_623', phrase: 'Make mountains out of molehills', meaning_en: 'An identical structure evaluated across shifts tracing emotional inflation errors', meaning_hi: 'छोटी बात को बढ़ा-चढ़ाकर कहना', example: 'See idiom 303 for master contextual rules alignment maps.', note: 'Exaggeration variant.' },
      { id: 'idiom_624', phrase: 'To split hours', meaning_en: 'Wasting time overanalyzing trivial details or making petty micro-distinctions', meaning_hi: 'मामूली बातों पर ध्यान देना', example: 'Stop splitting hours over font colors and focus on project data content.', note: 'Criticizes micro-management.' },
      { id: 'idiom_625', phrase: 'To take a leap in the dark', meaning_en: 'Taking a highly risky action or decision without having any idea of the prospective outcome', meaning_hi: 'बिना अंदाज़ के जोखिम भरा काम करना', example: 'Quitting his job without any future savings was a massive leap in the dark.', note: 'Highlights high structural risk.' },
      { id: 'idiom_626', phrase: 'Batten down the hatches', meaning_en: 'Preparing carefully for a prospective crisis or upcoming difficult situation', meaning_hi: 'मुश्किल स्थिति के लिए तैयार होना', example: 'With an audit approaching, our department must batten down the hatches.', note: 'Nautical origin preparing a ship for a storm.' },
      { id: 'idiom_627', phrase: 'Go at equal speed', meaning_en: 'To maintain the exact same pace or progress level as someone else', meaning_hi: 'साथ चलना (बराबर गति से)', example: 'New employees must work hard to go at equal speed with the veterans.', note: 'Pace matching index.' },
      { id: 'idiom_628', phrase: 'To talk through one\'s hat', meaning_en: 'To speak completely foolishly, making claims without knowing facts', meaning_hi: 'बकवास करना (असंगत बातें)', example: 'Ignore his statements on economics; he is simply talking through his hat.', note: 'Critiques uninformed blather.' },
      { id: 'idiom_629', phrase: 'To give/get the bird', meaning_en: 'To receive a highly negative reaction, booing, or dismissal from an audience or job', meaning_hi: 'उपहास या नौकरी से निकाला जाना', example: 'The poor stand-up comedian got the bird from the aggressive audience.', note: 'Theatrical slang for rejection.' },
      { id: 'idiom_630', phrase: 'All and sundry', meaning_en: 'Everyone without any exception, distinction, or individual discrimination', meaning_hi: 'बिना भेदभाव के सभी', example: 'The local community feast was completely open to all and sundry.', note: 'Collective inclusion phrasing.' },
      { id: 'idiom_631', phrase: 'To worship the rising sun', meaning_en: 'To respect or flatter only the person who is currently rising into high power', meaning_hi: 'सत्ता/पद पर आने वाले व्यक्ति का सम्मान करना', example: 'Opportunistic politicians always rush to worship the rising sun.', note: 'Condemns self-serving flattery.' },
      { id: 'idiom_632', phrase: 'To have brush with', meaning_en: 'To experience a brief, minor conflict, encounter, or altercation with someone', meaning_hi: 'हल्की झड़प/टकराव होना', example: 'He had a minor brush with the local traffic police yesterday morning.', note: 'Brief contact metric.' },
      { id: 'idiom_633', phrase: 'To pull one\'s socks up', meaning_en: 'To make an urgent, determined effort to improve one\'s performance or behavior', meaning_hi: 'कड़ी कोशिश करना', example: 'If you want to stay in the core team, you must pull your socks up.', note: 'Call for immediate self-improvement.' },
      { id: 'idiom_634', phrase: 'Dog in the manger', meaning_en: 'Someone who prevents others from enjoying or using something they do not even need themselves', meaning_hi: 'जो दूसरों को उस चीज़ का उपयोग करने से रोके जो खुद उसके काम न आए', example: 'He won\'t let anyone use the old car even though it sits rusting; what a dog in the manger.', note: 'From an old Aesop fable about a dog in a cattle feeding box.' },
      { id: 'idiom_635', phrase: 'To set the people by ears', meaning_en: 'To intentionally incite, provoke, or cause people to fight and argue bitterly', meaning_hi: 'लोगों को लड़ने के लिए उकसाना', example: 'The deceptive agent tried to set the local faction members by the ears.', note: 'Stirring internal group conflict.' },
      { id: 'idiom_636', phrase: 'To give chapter and verse for a thing', meaning_en: 'To provide absolute, precise details, references, and exact evidence for a claim', meaning_hi: 'सबूत देना या सारा विवरण बताना', example: 'The careful researcher could give chapter and verse for every historic claim.', note: 'From giving exact biblical citations.' },
      { id: 'idiom_637', phrase: 'To plough the sands', meaning_en: 'Engaging in an activity that is completely futile, useless, and yields zero results', meaning_hi: 'व्यर्थ के काम में लगा रहना', example: 'Trying to educate that stubborn, closed-minded person is just ploughing the sands.', note: 'Vivid agricultural impossibility metaphor.' },
      { id: 'idiom_638', phrase: 'To take umbrage', meaning_en: 'To feel deeply offended, insulted, or annoyed by an action or remark', meaning_hi: 'नराज होना', example: 'She took severe umbrage at his casual joke about her professional accent.', note: 'Formal offense registration.' },
      { id: 'idiom_639', phrase: 'To fight to the bitter end', meaning_en: 'To continue fighting or struggling with supreme determination until the absolute final result, regardless of pain', meaning_hi: 'अंत तक संघर्ष करना', example: 'The brave legal defense team vowed to fight the corrupt case to the bitter end.', note: 'Ultimate resilience indicator.' },
      { id: 'idiom_640', phrase: 'To give a false colouring', meaning_en: 'To misrepresent, distort, or present a situation in a deliberately deceptive light', meaning_hi: 'गलत ढंग से पेश करना', example: 'His biased report gave a highly false colouring to the peaceful meeting.', note: 'Deceptive narrative mapping.' }
    ]
  },

  'Set 33': {
    setNumber: 33,
    range: '641–660',
    intro: 'Quantification errors, behavioral patterns aur high-speed operations is segment ka focus hain.',
    idioms: [
      { id: 'idiom_641', phrase: 'To take the wind out of another\'s sails', meaning_en: 'To gain an advantage over a rival by anticipating their actions or destroying their argument unexpectedly', meaning_hi: 'दूसरे से आगे निकल जाना', example: 'By publishing the data early, we took the wind out of our competitor\'s sails.', note: 'Sailing tactics metaphor.' },
      { id: 'idiom_642', phrase: 'To carry the coal to newcastle', meaning_en: 'Doing a task that is completely redundant because the destination already has an abundance of it', meaning_hi: 'व्यर्थ का काम करना (जहाँ पहले से प्रचुरता हो)', example: 'Bringing apples to this orchard farm is like carrying coal to Newcastle.', note: 'Newcastle was a primary historical British coal-mining hub.' },
      { id: 'idiom_643', phrase: 'A baker\'s dozen', meaning_en: 'A specific count meaning exactly thirteen in number', meaning_hi: 'तेरह', example: 'The local donut shop gave me a baker\'s dozen instead of twelve.', note: 'From old English laws where bakers added an extra loaf to avoid short-weight penalties.' },
      { id: 'idiom_644', phrase: 'A bull in a china shop', meaning_en: 'An exceptionally clumsy person operating in a highly delicate, fragile social situation', meaning_hi: 'अनाड़ी व्यक्ति (जहाँ नाजुकपन चाहिए)', example: 'Handling diplomatic peace talks with his rude temper is like a bull in a china shop.', note: 'Warns against reckless clumsiness.' },
      { id: 'idiom_645', phrase: 'Hard-pressed', meaning_en: 'Experiencing extreme difficulties, financial strain, or heavy time pressure', meaning_hi: 'कठिनाइयों में', example: 'The hospital staff was hard-pressed due to the sudden winter emergency surge.', note: 'Stressed capability index.' },
      { id: 'idiom_646', phrase: 'To be at one\'s finger\'s end', meaning_en: 'To have accurate knowledge or information readily available and mastered perfectly', meaning_hi: 'पूरी तरह से वाकिफ होना', example: 'All the regulatory codes of the city are completely at his finger\'s end.', note: 'Identical context loop to idiom 865.' },
      { id: 'idiom_647', phrase: 'To pull strings', meaning_en: 'Using secret personal influence or powerful connections to gain an unfair advantage', meaning_hi: 'व्यक्तिगत प्रभाव का उपयोग करना', example: 'He didn\'t pass the interview; his wealthy father pulled strings behind the scenes.', note: 'Metaphor from controlling a puppet with hidden strings.' },
      { id: 'idiom_648', phrase: 'To be old as the hills', meaning_en: 'Something that is exceptionally ancient, old, or common knowledge for a long time', meaning_hi: 'बहुत पुराना होना', example: 'That specific advice about saving money is as old as the hills.', note: 'Hyperbole for extreme age.' },
      { id: 'idiom_649', phrase: 'To mind one\'s p\'s and q\'s', meaning_en: 'To be exceptionally careful about one\'s manners, politeness, and language behavior', meaning_hi: 'सतर्क रहना', example: 'When you meet the royal delegates, make sure to mind your p\'s and q\'s.', note: 'Historically from printing typeset alignments or tavern pint/quart records.' },
      { id: 'idiom_650', phrase: 'As duck takes to water', meaning_en: 'Doing an activity easily, naturally, and completely without prior training', meaning_hi: 'स्वाभाविक रूप से आसानी से करना', example: 'He picked up the guitar and started playing as a duck takes to water.', note: 'Natural talent indicator.' },
      { id: 'idiom_651', phrase: 'Made away with', meaning_en: 'Escaping rapidly with stolen materials or wealth', meaning_hi: 'लेकर भागना', example: 'See idiom 384 and 445 for exact multi-shift synchronization rules.', note: 'Parallel phrasing metric.' },
      { id: 'idiom_652', phrase: 'Feel his pulse', meaning_en: 'To subtly sound out or try to discover a person\'s true views or hidden intentions', meaning_hi: 'उसके विचार जानना', example: 'Before presenting the main proposal, let\'s feel the manager\'s pulse on funding.', note: 'Medical metaphor applied to corporate strategy.' },
      { id: 'idiom_653', phrase: 'Swan-song', meaning_en: 'The absolute final creative performance, work, or public appearance of an artist before retirement or death', meaning_hi: 'मृत्यु से पहले कवि या संगीतकार की अंतिम कृति', example: 'The legendary actor\'s final poignant film was a magnificent swan-song.', note: 'From ancient beliefs that silent swans sing a beautiful song right before dying.' },
      { id: 'idiom_654', phrase: 'To oil the knocker', meaning_en: 'To bribe a low-level servant or doorman to gain easy entry into a house', meaning_hi: 'छोटे कर्मचारी को घूस देना', example: 'We had to oil the knocker slightly to secure an immediate meeting with the director.', note: 'Obsolete British administrative corruption slang.' },
      { id: 'idiom_655', phrase: 'To live fast', meaning_en: 'Living a highly extravagant, reckless life full of heavy spending and fast pleasure', meaning_hi: 'अपव्ययी जीवन जीना', example: 'The rockstar lived fast and unfortunately exhausted his wealth early.', note: 'Unstable hedonistic lifestyle index.' },
      { id: 'idiom_656', phrase: 'To take a leaf out of somebody\'s book', meaning_en: 'To copy, imitate, or follow the successful habits or actions of someone else', meaning_hi: 'किसी की नकल करना', example: 'You should take a leaf out of your brother\'s book and study regularly.', note: 'Encourages positive emulation.' },
      { id: 'idiom_657', phrase: 'To have one\'s heart in one\'s boots', meaning_en: 'Feeling utterly disappointed, deeply discouraged, or extremely anxious', meaning_hi: 'बहुत निराश होना', example: 'When he saw the terrible score sheet, his heart was completely in his boots.', note: 'Depicts structural sinking of emotions.' },
      { id: 'idiom_658', phrase: 'To strike one\'s colours', meaning_en: 'To officially surrender, give up a struggle, or yield to a superior force', meaning_hi: 'समर्पण करना', example: 'Faced with a hostile takeover bid, the corporate board finally struck its colours.', note: 'Nautical military origin from lowering a ship\'s flag (colours) to admit defeat.' },
      { id: 'idiom_659', phrase: 'To ride hell for leather', meaning_en: 'To ride a horse or move a vehicle at absolute breakneck, maximum possible speed', meaning_hi: 'तेज गति से दौड़ना', example: 'The dispatch rider rode hell for leather to deliver the emergency message.', note: 'Implies furious urgent travel speed.' },
      { id: 'idiom_660', phrase: 'To speak daggers', meaning_en: 'To speak to someone with extreme, visible bitterness, hostility, and sharp cruelty', meaning_hi: 'किसी से कठोरता से बोलना', example: 'Her cold, angry words spoke daggers to his sensitive heart.', note: 'Shakespearean verbal attack metaphor from Hamlet.' }
    ]
  },

  'Set 34': {
    setNumber: 34,
    range: '661–680',
    intro: 'This section details complex professional dilemmas, task organizations, and environmental evaluations.',
    idioms: [
      { id: 'idiom_661', phrase: 'Be in the mire', meaning_en: 'Caught up in a highly messy, difficult, or embarrassing problem situation', meaning_hi: 'कठिनाइयों में', example: 'His finances are deeply in the mire due to systematic market losses.', note: 'Mire refers to deep swamp mud.' },
      { id: 'idiom_662', phrase: 'To give a rap on the knuckles', meaning_en: 'To issue a mild, quick reprimand or light scolding to someone for a minor error', meaning_hi: 'फटकार लगाना', example: 'The supervisor gave him a quick rap on the knuckles for arriving late.', note: 'From historical schoolhouse physical corrections.' },
      { id: 'idiom_663', phrase: 'To cry wolf', meaning_en: 'To raise a false alarm repeatedly so that when real danger arrives, you are ignored', meaning_hi: 'झूठा खतरा बताना (शेर! शेर! करना)', example: 'If you keep complaining about fake errors, nobody will help when there is a real crash; don\'t cry wolf.', note: 'Derived from the famous Aesop fable.' },
      { id: 'idiom_664', phrase: 'To drive home', meaning_en: 'To emphasize a crucial point strongly and clearly to ensure complete understanding', meaning_hi: 'जोर देना', example: 'The coach used video graphs to drive home the importance of defense tactics.', note: 'Implies forcing a point down securely.' },
      { id: 'idiom_665', phrase: 'Halcyon days', meaning_en: 'A golden period of absolute peace, happiness, and prosperity in the past', meaning_hi: 'सुखद दिन', example: 'He fondly remembered the calm halcyon days of his childhood youth.', note: 'From Greek myths of a bird that calmed winter seas to nest.' },
      { id: 'idiom_666', phrase: 'Fell on stony ground', meaning_en: 'Advice or warnings that are completely ignored or fail to have any positive effect', meaning_hi: 'बहुत कम सफलता मिलना / नज़रअंदाज किया जाना', example: 'My strict structural warnings about market drops unfortunately fell on stony ground.', note: 'Biblical seed sowing agriculture metaphor.' },
      { id: 'idiom_667', phrase: 'Has all his ducks in a row', meaning_en: 'To be perfectly prepared, highly organized, and fully ready for a venture', meaning_hi: 'सुव्यवस्थित है', example: 'Before pitching to the international investors, make sure you have all your ducks in a row.', note: 'From mother ducks walking with aligned ducklings.' },
      { id: 'idiom_668', phrase: 'To carve out a niche', meaning_en: 'To successfully establish a distinct, specialized secure role or position for oneself', meaning_hi: 'अपने लिए एक विशेष स्थान विकसित करना', example: 'She managed to carve out a brilliant niche for herself as an eco-architect.', note: 'Implies professional differentiation.' },
      { id: 'idiom_669', phrase: 'Cock and bull story', meaning_en: 'An absurd, highly far-fetched, and unbelievable story used as a false excuse', meaning_hi: 'मनगढ़ंत कहानी (असंभव कहानी)', example: 'He gave the principal a ridiculous cock and bull story about why he lost his books.', note: 'From historical tavern names or coaching inns travelers telling tall tales.' },
      { id: 'idiom_670', phrase: 'Another kettle of fish', meaning_en: 'A matter that is completely different from the current topic being discussed', meaning_hi: 'पूरी तरह अलग मामला', example: 'Managing local sales is fine, but handling global export is a completely different kettle of fish.', note: 'Highlights categorical differences.' },
      { id: 'idiom_671', phrase: 'Sitting on the fence', meaning_en: 'Remaining completely neutral or delaying a decision between two rival factions', meaning_hi: 'निर्णय न लेना (अनिश्चित)', example: 'See idiom 670 and 978 for operational strategy tracking.', note: 'Criticizes indecisive neutrality.' },
      { id: 'idiom_672', phrase: 'Tilt at windmills', meaning_en: 'Wasting energy attacking completely imaginary enemies or fighting hopeless, absurd battles', meaning_hi: 'अस्तित्वहीन दुश्मनों से लड़ने में समय बर्बाद करना', example: 'Arguing against automated industry changes is like tilting at windmills.', note: 'From Cervantes\' famous novel Don Quixote.' },
      { id: 'idiom_673', phrase: 'Changed hands', meaning_en: 'To pass ownership or control of a property or asset from one person to another', meaning_hi: 'स्वामित्व बदलना', example: 'The historic mansion down the street has changed hands multiple times.', note: 'Commercial asset phrase.' },
      { id: 'idiom_674', phrase: 'Brain drain', meaning_en: 'The mass migration of highly educated, talented professionals from one nation to another for better wealth', meaning_hi: 'बेहतर अवसरों के लिए दूसरे देश में जाना', example: 'Developing economies must improve local funding to prevent systematic brain drain.', note: 'Socio-economic dynamic metric.' },
      { id: 'idiom_675', phrase: 'Be in eclipse', meaning_en: 'Experiencing a period of significantly reduced success, power, or public popularity', meaning_hi: 'कम सफल', example: 'The veteran director\'s career has unfortunately been in eclipse lately.', note: 'Astronomical shadow metaphor.' },
      { id: 'idiom_676', phrase: 'Ways and means', meaning_en: 'The operational methods, options, and resources needed to accomplish a specific goal', meaning_hi: 'कुछ हासिल करने के तरीके', example: 'We must find innovative ways and means to reduce our monthly operational costs.', note: 'Common in legislative budget frameworks.' },
      { id: 'idiom_677', phrase: 'Big ticket', meaning_en: 'Something that is exceptionally expensive or involving a massive amount of money', meaning_hi: 'बहुत महंगा', example: 'Luxury cars and international cruises are highly big ticket items.', note: 'Commercial retail slang.' },
      { id: 'idiom_678', phrase: 'Spiff up', meaning_en: 'To dress up neatly or clean and improve the visual appearance of something significantly', meaning_hi: 'अपने आप को साफ-सुथरा बनाना', example: 'We spent the morning spiffing up the office lobby before the clients arrived.', note: 'Aesthetic enhancement slang.' },
      { id: 'idiom_679', phrase: 'Run wild', meaning_en: 'To grow or behave completely without any control, discipline, or boundaries', meaning_hi: 'बिना नियंत्रण के व्यवहार करना', example: 'The weeds in the old backyard were allowed to run completely wild.', note: 'Depicts unbridled chaos.' },
      { id: 'idiom_680', phrase: 'Wind down', meaning_en: 'To slowly reduce activity levels or relax fully after a period of intense work', meaning_hi: 'गतिविधि के बाद आराम करना', example: 'Let\'s listen to quiet music to wind down after a highly stressful day.', note: 'From relaxation of mechanical clock springs.' }
    ]
  },

  'Set 35': {
    setNumber: 35,
    range: '681–700',
    intro: 'Analytical metrics, behavioral filters aur daily lifestyle challenges yahan segmented hain.',
    idioms: [
      { id: 'idiom_681', phrase: 'Mellow out', meaning_en: 'An informal expression meaning to calm down, relax, and become friendly', meaning_hi: 'बिना ज्यादा किए आनंद लेना', example: 'He used to be very hot-tempered, but he has mellowed out significantly with age.', note: 'Casual behavior tracking.' },
      { id: 'idiom_682', phrase: 'A paper tiger', meaning_en: 'A country or organization that appears powerful and dangerous but is actually weak', meaning_hi: 'जो दिखने में खतरनाक लगे पर असल में कमजोर', example: 'The rival firm\'s legal threats proved to be a simple paper tiger.', note: 'Famous translation of Chinese political phraseology.' },
      { id: 'idiom_683', phrase: 'Penny-wise and pound-foolish', meaning_en: 'Extremely careful saving small amounts of money but wasteful with massive sums', meaning_hi: 'छोटी बचत के चक्कर में बड़ा नुकसान उठाना', example: 'Buying low-grade tires to save a few dollars but causing an accident is penny-wise and pound-foolish.', note: 'British currency units warning against foolish economizing.' },
      { id: 'idiom_684', phrase: 'Pin back your ears', meaning_en: 'To listen to an announcement with absolute, undivided attention', meaning_hi: 'किसी चीज़ को ध्यान से सुनना', example: 'Pin back your ears because these exam instructions are highly critical.', note: 'Direct physical alert idiom.' },
      { id: 'idiom_685', phrase: 'Turncoat', meaning_en: 'A traitorous person who switches political factions or alliances to gain advantage', meaning_hi: 'जो एक समूह छोड़कर दूसरे में शामिल हो जाए (दलबदलू)', example: 'The corporate defector was labeled a opportunistic turncoat by his old team.', note: 'From historical soldiers turning their coats inside out to show rival badges.' },
      { id: 'idiom_686', phrase: 'Say your piece', meaning_en: 'To state your true opinion or clear perspective on a matter directly and fully', meaning_hi: 'अपनी राय व्यक्त करना', example: 'I have listened to everyone; now let me stand up and say my piece.', note: 'Call for honest feedback.' },
      { id: 'idiom_687', phrase: 'Top-notch', meaning_en: 'Exhibiting the absolute highest, premium quality or grade possible', meaning_hi: 'सर्वोच्च गुणवत्ता का', example: 'The catering services at the new luxury resort were absolutely top-notch.', note: 'Praises supreme execution standards.' },
      { id: 'idiom_688', phrase: 'Under the table', meaning_en: 'Making illegal, secret, unrecorded financial payments to someone as a bribe', meaning_hi: 'गुप्त रूप से भुगतान करना (काले में)', example: 'The corrupt official received thousands of dollars under the table to clear papers.', note: 'Deals with shady cash corruption.' },
      { id: 'idiom_689', phrase: 'Walking on eggshells', meaning_en: 'Being exceptionally cautious with your words and actions to avoid making someone angry', meaning_hi: 'किसी को ठेस न पहुँचाने के लिए सावधानी से बोलना', example: 'When the boss is in an volatile mood, everyone walks on eggshells.', note: 'Depicts fragile psychological environments.' },
      { id: 'idiom_690', phrase: 'Neither fish nor fowl', meaning_en: 'Something that doesn\'t fit cleanly into any regular category or definition; ambiguous', meaning_hi: 'वर्णन करना मुश्किल (न यहाँ का न वहाँ का)', example: 'The experimental vehicle design was strange, neither fish nor fowl.', note: 'Categorical confusion idiom.' },
      { id: 'idiom_691', phrase: 'Elephant in the room', meaning_en: 'A massive, obvious problem that everyone knows about but avoids discussing because it is awkward', meaning_hi: 'वह स्पष्ट समस्या जिसे टाला जा रहा हो', example: 'His continuous poor performance was the clear elephant in the room during the meeting.', note: 'Vivid behavioral avoidance metaphor.' },
      { id: 'idiom_692', phrase: 'The ship has sailed', meaning_en: 'An opportunity that has already passed and is completely missed forever', meaning_hi: 'अवसर बीत गया', example: 'If you haven\'t invested in the project yet, that ship has sailed.', note: 'Finality of missed opportunity.' },
      { id: 'idiom_693', phrase: 'Outside the box', meaning_en: 'Thinking in a highly creative, unconventional, and innovative manner', meaning_hi: 'रचनात्मक और अपरंपरागत रूप से सोचना', example: 'To solve this unique scientific crisis, we must think completely outside the box.', note: 'Derived from corporate structural puzzle solutions.' },
      { id: 'idiom_694', phrase: 'Throw cold water', meaning_en: 'To intentionally discourage or express extreme negativity about a creative plan', meaning_hi: 'हतोत्साहित करना', example: 'Please stop throwing cold water on every innovative idea I present.', note: 'Dampening enthusiasm.' },
      { id: 'idiom_695', phrase: 'Bide one\'s time', meaning_en: 'Waiting patiently for the absolute perfect opportunity to take dynamic action', meaning_hi: 'अवसर की प्रतीक्षा करना', example: 'The clever predator decided to bide its time behind the dense bushes.', note: 'Strategic patience indicator.' },
      { id: 'idiom_696', phrase: 'Down the road', meaning_en: 'At a point in the prospective future; later on', meaning_hi: 'भविष्य में', example: 'The long-term infrastructure choices will impact us heavily down the road.', note: 'Time horizon idiom.' },
      { id: 'idiom_697', phrase: 'Scratching their heads', meaning_en: 'Feeling thoroughly baffled, confused, or unable to understand a complex problem', meaning_hi: 'हैरान', example: 'The baffling technical glitch left the expert IT engineers scratching their heads.', note: 'Physical manifestation of confusion.' },
      { id: 'idiom_698', phrase: 'Back against the wall', meaning_en: 'Stuck in an exceptionally tough, desperate situation with almost no options left', meaning_hi: 'कठिन परिस्थिति (जहाँ से बच निकलना मुश्किल हो)', example: 'With mounting legal debts, the entrepreneur has his back against the wall.', note: 'Defensive crisis posture.' },
      { id: 'idiom_699', phrase: 'Play his cards right', meaning_en: 'Acting with tactical cleverness to ensure maximum possible success in a venture', meaning_hi: 'इस तरह कार्य करना जिससे अधिकतम लाभ हो', example: 'If he plays his cards right, he could secure a massive corporate partnership.', note: 'Card game calculation metaphor.' },
      { id: 'idiom_700', phrase: 'Same boat', meaning_en: 'An identical high-frequency tracking variant matching mutual hardship contexts', meaning_hi: 'एक जैसी कठिन स्थिति में होना', example: 'See idiom 419 for absolute standard execution metrics.', note: 'Hardship alignment check.' }
    ]
  },

  'Set 36': {
    setNumber: 36,
    range: '701–720',
    intro: 'This set encapsulates cultural markers, performance axioms, and strategic behavioral constraints.',
    idioms: [
      { id: 'idiom_701', phrase: 'Piece of cake', meaning_en: 'An action or task that is exceptionally easy to accomplish successfully', meaning_hi: 'बहुत आसान काम', example: 'Passing that basic computer driving test was a complete piece of cake.', note: 'Universal colloquialism for ease.' },
      { id: 'idiom_702', phrase: 'Fall between two stools', meaning_en: 'Failing to achieve either of two alternatives because of indecision or poor transition', meaning_hi: 'दो लक्ष्यों में से कोई भी हासिल न कर पाना', example: 'The movie tried to be an action thriller and a romance, but fell between two stools.', note: 'Double objective failure metaphor.' },
      { id: 'idiom_703', phrase: 'Step on anyone\'s toes', meaning_en: 'To offend, insult, or annoy someone by interfering in their specific area of responsibility', meaning_hi: 'किसी को नाराज करने या ठेस पहुँचाने से बचना', example: 'I want to help with design, but I don\'t want to step on the lead artist\'s toes.', note: 'Respecting professional domains.' },
      { id: 'idiom_704', phrase: 'ABC', meaning_en: 'The absolute entry-level, fundamental facts or basic knowledge of a subject', meaning_hi: 'बहुत सामान्य ज्ञान (प्राथमिक बातें)', example: 'Understanding supply and demand is the basic ABC of modern economics.', note: 'Primary alphabet comparison.' },
      { id: 'idiom_705', phrase: 'Cut to the chase', meaning_en: 'Wasting no time and coming straight to the most important practical facts immediately', meaning_hi: 'बिना समय बर्बाद किए मुद्दे पर आना', example: 'We have limited time, so please cut to the chase and state the budget numbers.', note: 'From silent movie era film editing styles where transitions skipped talk to reach action chases.' },
      { id: 'idiom_706', phrase: 'The proof of the pudding is in the eating', meaning_en: 'The true value, quality, or success of something can only be verified by testing it directly', meaning_hi: 'किसी चीज़ को करके ही पता चलता है कि वह अच्छी है या बुरी', example: 'The software design looks beautiful on paper, but the proof of the pudding is in the eating.', note: 'Traditional empiricism proverb.' },
      { id: 'idiom_707', phrase: 'New York minute', meaning_en: 'An exceptionally brief instant; happening incredibly fast', meaning_hi: 'बहुत कम समय (झटपट)', example: 'If they offered me a global corporate job, I would accept it in a New York minute.', note: 'American hyperbole celebrating hyper-fast urban pace.' },
      { id: 'idiom_708', phrase: 'Cat\'s pajamas', meaning_en: 'An old-fashioned, humorous expression meaning a thoroughly excellent, highly appealing item', meaning_hi: 'उत्कृष्ट और बेहतरीन', example: 'His new customizable sports car design is absolutely the cat\'s pajamas.', note: '1920s nonsensical praise jargon; similar to idiom 429.' },
      { id: 'idiom_709', phrase: 'Fit the bill', meaning_en: 'To be completely suitable, appropriate, or perfectly meeting specific requirements', meaning_hi: 'पूरी तरह उपयुक्त', example: 'Your excellent communication skills fit the bill perfectly for this PR job.', note: 'Fulfillment of dynamic expectations.' },
      { id: 'idiom_710', phrase: 'Breathed his last', meaning_en: 'A polite, respectful euphemism meaning passed away or died', meaning_hi: 'मृत्यु हो गई', example: 'The venerable freedom fighter peacefully breathed his last this morning.', note: 'Dignified death notification phrase.' },
      { id: 'idiom_711', phrase: 'Get upper hand', meaning_en: 'To successfully gain a position of advantage, command, or control over a rival', meaning_hi: 'ताकत या बढ़त हासिल करना', example: 'With superior market analysis, our firm managed to get the upper hand.', note: 'Competitive edge metric.' },
      { id: 'idiom_712', phrase: 'Lick your wounds', meaning_en: 'Going away in isolation to slowly recover confidence after a humiliating defeat', meaning_hi: 'बुरे अनुभव से उबरने के लिए अकेले जाना', example: 'After losing the primary election, the candidate went home to lick his wounds.', note: 'Animal behavior metaphor.' },
      { id: 'idiom_713', phrase: 'Never judge a book by its cover', meaning_en: 'One must never assess the true inner value or character of something based entirely on external appearances', meaning_hi: 'दिखावट से धोखा हो सकता है', example: 'The old hotel looked ruined outside, but inside it was luxury — never judge a book by its cover.', note: 'Universally evaluated safety proverb.' },
      { id: 'idiom_714', phrase: 'One step at a time', meaning_en: 'Progressing slowly, carefully, and systematically through a complex process', meaning_hi: 'धीरे-धीरे और सावधानी से काम करना', example: 'Learning a complex foreign language requires mastering it one step at a time.', note: 'Promotes methodical patience.' },
      { id: 'idiom_715', phrase: 'As water under the bridge', meaning_en: 'An identical strategic match tracking historical disputes that no longer have impact', meaning_hi: 'अब कोई महत्वपूर्ण नहीं रहा', example: 'See idiom 575 for structural application rules parameters.', note: 'Friction resolution indicator.' },
      { id: 'idiom_716', phrase: 'Walking on air', meaning_en: 'Feeling exceptionally happy, elated, and blissfully joyful', meaning_hi: 'बहुत प्रसन्न (खुशी से झूमना)', example: 'Ever since she got her dream job, she has been walking on air.', note: 'Joy-induced floating metaphor.' },
      { id: 'idiom_717', phrase: 'Listen with half an ear', meaning_en: 'Paying careless, highly inattentive attention to what someone is saying', meaning_hi: 'पूरा ध्यान न देना', example: 'He was watching TV and listened to my complaints with half an ear.', note: 'Criticizes poor listening habits.' },
      { id: 'idiom_718', phrase: 'Dyed in the wool', meaning_en: 'Holding unyielding, deep-seated opinions or beliefs that will never alter', meaning_hi: 'दृढ़ विश्वास (न बदलने वाला)', example: 'My uncle is a dyed in the wool traditionalist who rejects all digital formats.', note: 'From raw wool dyed before spinning, making the color permanent.' },
      { id: 'idiom_719', phrase: 'Let sleeping dogs lie', meaning_en: 'To intentionally avoid reopening an old sensitive issue that could cause trouble', meaning_hi: 'उन मामलों में हस्तक्षेप न करना जो स्थिति बिगाड़ सकते हैं', example: 'They had arguments last year, but don\'t mention it now; let sleeping dogs lie.', note: 'Pragmatic advice for peace preservation.' },
      { id: 'idiom_720', phrase: 'A stitch in time saves nine', meaning_en: 'Dealing with a minor problem immediately saves immense exhausting labor later on', meaning_hi: 'समय पर समस्या सुलझाने से बाद में परेशानी नहीं होती', example: 'Fix that tiny roof leak now before monsoon arrives; a stitch in time saves nine.', note: 'Classic tailoring efficiency proverb.' }
    ]
  },

  'Set 37': {
    setNumber: 37,
    range: '721–740',
    intro: 'Philosophical paradigms, moral parameters, aur communication filters ka integrated database map.',
    idioms: [
      { id: 'idiom_721', phrase: 'Fight fire with fire', meaning_en: 'Using the exact same aggressive methods or tactics as your rival to defeat them', meaning_hi: 'दूसरे की रणनीति का उपयोग करके उसका मुकाबला करना', example: 'When the rival company launched massive discount coupons, we fought fire with fire.', note: 'Reciprocal combat strategy metaphor.' },
      { id: 'idiom_722', phrase: 'Straight and narrow', meaning_en: 'The path of absolute honesty, strict moral integrity, and law-abiding behavior', meaning_hi: 'ईमानदार और नैतिक तरीका', example: 'After leaving prison, he worked exceptionally hard to stay on the straight and narrow.', note: 'Refers to standard ethical pathways.' },
      { id: 'idiom_723', phrase: 'Someone\'s ears are burning', meaning_en: 'A subconscious feeling or playful belief that other people are currently talking about you elsewhere', meaning_hi: 'लगना कि दूसरे आपके बारे में बात कर रहे हैं', example: 'We were just discussing your amazing performance; your ears must be burning.', note: 'Superstitious conversational idiom.' },
      { id: 'idiom_724', phrase: 'Turn one\'s stomach', meaning_en: 'Causing someone to feel immense physical nausea, disgust, or moral revulsion', meaning_hi: 'किसी चीज़ से मिचली आना', example: 'The shocking sight of waste dumping near the clean river truly turned my stomach.', note: 'Physical or psychological revulsion descriptor.' },
      { id: 'idiom_725', phrase: 'The world is your oyster', meaning_en: 'You are in an ideal position where all life opportunities and successes are open to you', meaning_hi: 'आपके पास जीवन से जो चाहो पाने का अवसर है', example: 'You have a premium degree and speak four languages; the world is completely your oyster.', note: 'Coined by Shakespeare in The Merry Wives of Windsor.' },
      { id: 'idiom_726', phrase: 'Cast one\'s bread upon the waters', meaning_en: 'Doing good deeds selflessly without expecting any immediate reward, trusting it returns later', meaning_hi: 'बिना प्रतिफल की इच्छा के अच्छा करना', example: 'Help those young students out of pure kindness; cast your bread upon the waters.', note: 'Biblical wisdom phrase from Ecclesiastes.' },
      { id: 'idiom_727', phrase: 'Birds of a feather flock together', meaning_en: 'People who share identical characters, tastes, or habits naturally assemble together', meaning_hi: 'एक जैसे स्वभाव के लोग एक साथ रहते हैं', example: 'All the tech enthusiasts in college hang out together — birds of a feather flock together.', note: 'Universally evaluated sociology proverb.' },
      { id: 'idiom_728', phrase: 'No man is an island', meaning_en: 'No human being can live fully self-sufficiently without relying on relationships with a community', meaning_hi: 'कोई भी व्यक्ति पूरी तरह अकेले जीने में सक्षम नहीं', example: 'You need to cooperate with neighbors; remember no man is an island.', note: 'Famously coined by poet John Donne.' },
      { id: 'idiom_729', phrase: 'Better late than never', meaning_en: 'It is far better for a good action to happen late than to never happen at all', meaning_hi: 'कभी न करने से देर से करना बेहतर है', example: 'He finally apologized to his old parents after ten long years — better late than never.', note: 'Reassuring behavioral proverb.' },
      { id: 'idiom_730', phrase: 'The pen is mightier than the sword', meaning_en: 'Written words, ideas, and journalism carry far greater permanent impact than physical violence', meaning_hi: 'लिखित शब्दों का प्रभाव हिंसा से अधिक होता है', example: 'The investigative article collapsed the entire corrupt regime — the pen is mightier than the sword.', note: 'Coined by Edward Bulwer-Lytton.' },
      { id: 'idiom_731', phrase: 'Beggars can\'t be choosers', meaning_en: 'People who depend completely on the charity of others must accept what is given without complaining', meaning_hi: 'दूसरों पर निर्भर व्यक्ति को जो मिले उसी में संतोष करना चाहिए', example: 'When you are asking for a free room, you cannot demand a balcony; beggars can\'t be choosers.', note: 'Wise situational pragmatism proverb.' },
      { id: 'idiom_732', phrase: 'Forewarned is forearmed', meaning_en: 'Prior warning or advance knowledge allows someone to prepare perfectly for a crisis', meaning_hi: 'पहले से चेतावनी मिलने पर लाभ होता है', example: 'Knowing the tough exam questions format beforehand helped us immensely — forewarned is forearmed.', note: 'Encourages proactive disaster preparation.' },
      { id: 'idiom_733', phrase: 'A bad workman blames his tools', meaning_en: 'An unskilled or incompetent person always attributes their failure to poor equipment quality', meaning_hi: 'असफल व्यक्ति अपनी गलती छुपाने के लिए बहाने बनाता है', example: 'He failed to bake the cake correctly and blamed the oven; a bad workman blames his tools.', note: 'Critiques refusal of accountability.' },
      { id: 'idiom_734', phrase: 'Empty bags can\'t stand upright', meaning_en: 'A starving or severely impoverished person cannot maintain high moral duties or function well', meaning_hi: 'गरीब या भूखा व्यक्ति अपने कर्तव्य अच्छे से नहीं निभा सकता', example: 'Provide free baseline meals to poor workers; remember empty bags can\'t stand upright.', note: 'Socio-economic proverb on human limits.' },
      { id: 'idiom_735', phrase: 'Don\'t cry over spilled milk', meaning_en: 'An identical metric duplication evaluating past failure lamentation warnings', meaning_hi: 'जो हो चुका उसके लिए पछताना व्यर्थ है', example: 'See idiom 567 and 734 for clean comparative execution trees.', note: 'Futility proverb check.' },
      { id: 'idiom_736', phrase: 'Better safe than sorry', meaning_en: 'It is far wiser to take annoying precautions than to run a risk and face disaster later', meaning_hi: 'हालाँकि सावधानी उबाऊ हो, लेकिन जोखिम न लेना ही बेहतर', example: 'Wear a high-grade helmet even for exceptionally short trips; better safe than sorry.', note: 'Baseline safety protocol proverb.' },
      { id: 'idiom_737', phrase: 'It is never too late to mend', meaning_en: 'It is always possible to alter your bad character, improve behavior, and make structural corrections', meaning_hi: 'सुधार करने में कभी देर नहीं होती', example: 'He quit his bad addictions at the age of sixty, proving it is never too late to mend.', note: 'Promotes personal transformation optimism.' },
      { id: 'idiom_738', phrase: 'The wise man has long ears and a short tongue', meaning_en: 'A clever, sensible individual speaks very little and listens intently to gather facts', meaning_hi: 'चतुर व्यक्ति कम बोलता और अधिक सुनता है', example: 'Observe the senior lawyer\'s quiet composure; the wise man has long ears and a short tongue.', note: 'Praises silent observation wisdom.' },
      { id: 'idiom_739', phrase: 'A honey tongue, a heart of gall', meaning_en: 'Exhibiting extremely sweet, flattering words externally while harboring bitter malice internally', meaning_hi: 'मीठा बोलना लेकिन दिल में कड़वाहट होना', example: 'Be cautious with that manipulative corporate manager; he has a honey tongue but a heart of gall.', note: 'Warns against hypocritical deceit.' },
      { id: 'idiom_740', phrase: 'The bigger, the better', meaning_en: 'A general simple phrase stating that larger size or scale enhances efficiency or quality', meaning_hi: 'बड़ा हमेशा बेहतर होता है', example: 'When it comes to corporate display screens for auditorium, the bigger, the better.', note: 'Common scale scaling preference phrase.' }
    ]
  },

  'Set 38': {
    setNumber: 38,
    range: '741–760',
    intro: 'Modern workplace dilemmas, sudden termination metrics aur precise conversations ka compilation.',
    idioms: [
      { id: 'idiom_741', phrase: 'An empty vessel makes much noise', meaning_en: 'Incompetent, foolish individuals are always the loudest talkers boasting around', meaning_hi: 'मूर्ख लोग सबसे अधिक बकवास करते हैं', example: 'He knows absolutely nothing about tech but talks all day; an empty vessel makes much noise.', note: 'Classic proverb critiquing superficial blather.' },
      { id: 'idiom_742', phrase: 'Lost in the clouds', meaning_en: 'Being thoroughly confused, absent-minded, or impractical about a matter', meaning_hi: 'भ्रमित', example: 'During complex tax lectures, he looks completely lost in the clouds.', note: 'Similar to idiom 391.' },
      { id: 'idiom_743', phrase: 'Wry face', meaning_en: 'A distorted facial expression showing disappointment, mild disgust, or dry mockery', meaning_hi: 'निराश रूप', example: 'He pulled a wry face when he tasted the sugarless herbal tea.', note: 'Visual indicator of mild discontent.' },
      { id: 'idiom_744', phrase: 'Rock the boat', meaning_en: 'To disrupt a smooth, stable ongoing situation by introducing controversial changes', meaning_hi: 'संतुलन बिगाड़ना', example: 'The team operations are running perfectly, so please do not rock the boat with updates.', note: 'Warns against unnecessary disruption.' },
      { id: 'idiom_745', phrase: 'Be given the axe', meaning_en: 'To suffer immediate termination from a job or sudden cancellation of a project', meaning_hi: 'नौकरी छूटना', example: 'Our underperforming marketing project was suddenly given the axe by directors.', note: 'Corporate termination jargon; see idiom 524.' },
      { id: 'idiom_746', phrase: 'Go cold turkey', meaning_en: 'To abruptly and completely stop an addictive habit or drug dependency all at once', meaning_hi: 'एकदम से (धीरे-धीरे नहीं) छोड़ना', example: 'He decided to stop smoking completely and went cold turkey overnight.', note: 'From physical skin appearance similarities to a cold plucked turkey during immediate withdrawal.' },
      { id: 'idiom_747', phrase: 'To talk turkey', meaning_en: 'Engaging in an honest, completely direct, and practical business discussion', meaning_hi: 'ईमानदारी और सीधे चर्चा करना', example: 'Let\'s stop wasting hours on minor terms and get down to talking turkey about pricing.', note: 'American colonial trading origin.' },
      { id: 'idiom_748', phrase: 'Fat chance', meaning_en: 'A highly sarcastic expression meaning absolutely zero or minimal probability of success', meaning_hi: 'बहुत कम या कोई संभावना नहीं', example: 'Fat chance he will clean his room without being ordered directly.', note: 'Sarcastic reverse hyperbole.' },
      { id: 'idiom_749', phrase: 'Throw someone under the bus', meaning_en: 'Sacrificing or betraying a close colleague selfishly to protect yourself from blame', meaning_hi: 'अपनी बचाने के लिए दूसरे को नुकसान पहुँचाना', example: 'The team leader threw his junior assistant under the bus to hide his own scheduling error.', note: 'Condemns self-serving institutional betrayal.' },
      { id: 'idiom_750', phrase: 'Cup of Joe', meaning_en: 'An American slang expression meaning a hot cup of standard coffee', meaning_hi: 'एक कप कॉफी', example: 'I always need a strong cup of Joe before starting my morning office routine.', note: 'Possibly derived from US Navy Admiral Josephus Daniels banning alcohol on ships.' },
      { id: 'idiom_751', phrase: 'Knuckle sandwich', meaning_en: 'A violent punch or strike delivered directly to someone\'s mouth', meaning_hi: 'मुंह पर मुक्का', example: 'If he insults my sister again, I will give him a swift knuckle sandwich.', note: 'Aggressive street slang.' },
      { id: 'idiom_752', phrase: 'Can of worms', meaning_en: 'A highly complex, messy problem situation that creates endless trouble when opened', meaning_hi: 'बहुत मुश्किल मुद्दा', example: 'Investigating that old land deal opened a massive, complicated can of worms.', note: 'Similar to "opening Pandora\'s box."' },
      { id: 'idiom_753', phrase: 'Join the club', meaning_en: 'A conversational phrase expressing ironic sympathy for sharing the same bad problem', meaning_hi: 'दूसरों के प्रति सहानुभूति', example: 'You are completely exhausted and broke? Join the club, my friend.', note: 'Casual empathy bonding slang.' },
      { id: 'idiom_754', phrase: 'Name will be mud', meaning_en: 'A person\'s reputation becoming thoroughly ruined and disgraced due to a blunder', meaning_hi: 'बुरी प्रतिष्ठा', example: 'If you fail to deliver this critical client file, your professional name will be mud.', note: 'Derived from Dr. Samuel Mudd who treated Lincoln\'s assassin.' },
      { id: 'idiom_755', phrase: 'Hole and corner', meaning_en: 'Activities performed in a highly secret, underhanded, and suspicious manner', meaning_hi: 'गुप्त', example: 'We must avoid all hole and corner methods and maintain absolute transparency.', note: 'Shady secrecy critique.' },
      { id: 'idiom_756', phrase: 'Hanging fire', meaning_en: 'A decision or action that is being delayed or remaining undecided due to hitches', meaning_hi: 'निर्णय लेने में देरी', example: 'The final approval for our project expansion budget is currently hanging fire.', note: 'From historical firearms delaying ignition.' },
      { id: 'idiom_757', phrase: 'Like a dog with two tails', meaning_en: 'Exhibiting extreme, visible happiness and immense joy over an event', meaning_hi: 'बहुत खुश', example: 'Ever since he bought the vintage bike, he has been like a dog with two tails.', note: 'Vivid pet happiness imagery.' },
      { id: 'idiom_758', phrase: 'Said a mouthful', meaning_en: 'Making a statement that is exceptionally true, important, significant, or profound', meaning_hi: 'सटीक टिप्पणी', example: 'When you said that corporate loyalty is rare nowadays, you truly said a mouthful.', note: 'Agreement validation phrase.' },
      { id: 'idiom_759', phrase: 'Clear the air', meaning_en: 'Engaging in open, frank discussions to eliminate hidden tension or misunderstandings in a group', meaning_hi: 'खुलकर चर्चा करना', example: 'Let\'s arrange a team lunch to address grievances and clear the air once and for all.', note: 'Conflict resolution metric.' },
      { id: 'idiom_760', phrase: 'Laid it on the line', meaning_en: 'Stating facts with absolute clarity, firmness, and without hiding any harsh truth', meaning_hi: 'स्पष्ट रूप से बोलना', example: 'The doctor laid it on the line regarding the absolute necessity of urgent surgery.', note: 'Direct ultimate declaration.' }
    ]
  },

  'Set 39': {
    setNumber: 39,
    range: '761–780',
    intro: 'Social stratifications, professional competency indices aur casual interactions is section mein balanced hain.',
    idioms: [
      { id: 'idiom_761', phrase: 'Out of the top drawer', meaning_en: 'Belonging to the highest possible social class or exhibiting premium, peak quality', meaning_hi: 'उच्च सामाजिक स्थिति', example: 'Her family manners and sophisticated accent are clearly out of the top drawer.', note: 'Refers to keeping premium items in the top dresser drawer.' },
      { id: 'idiom_762', phrase: 'Top up their grants', meaning_en: 'To add extra money to an existing financial grant to increase its value', meaning_hi: 'में वृद्धि करना', example: 'The educational university decided to top up their research grants for scholars.', note: 'Financial supplement phrasing.' },
      { id: 'idiom_763', phrase: 'Top dog around', meaning_en: 'The absolute dominant leader, boss, or most important influential person in a group', meaning_hi: 'सबसे महत्वपूर्ण व्यक्ति', example: 'In the corporate technology market, their company is definitely the top dog around.', note: 'From fighting pit layouts historically.' },
      { id: 'idiom_764', phrase: 'Thin on top', meaning_en: 'A polite, slightly humorous description meaning someone is balding or losing head hair', meaning_hi: 'बाल झड़ना (गंजा होना)', example: 'He is getting slightly thin on top as he approaches his fifties.', note: 'Polite physical trait description.' },
      { id: 'idiom_765', phrase: 'As thick as two short planks', meaning_en: 'An informal insult meaning someone is exceptionally stupid or dull-witted', meaning_hi: 'बहुत मूर्ख', example: 'Ignore his ridiculous arguments; he is as thick as two short planks.', note: 'Vivid wooden comparison insult popular in British English.' },
      { id: 'idiom_766', phrase: 'Thin time of it', meaning_en: 'Experiencing a highly difficult, uncomfortable period full of financial shortages or hardship', meaning_hi: 'बिना पैसे के मुश्किल होना', example: 'During the severe industry lockdown, freelance writers had a very thin time of it.', note: 'Hardship index.' },
      { id: 'idiom_767', phrase: 'Make a killing in the stock market', meaning_en: 'To make an exceptionally massive financial profit very quickly in trade', meaning_hi: 'तेजी से पैसा कमाना', example: 'By investing early in biotech shares, he made a massive killing in the stock market.', note: 'indicators of sudden wealth.' },
      { id: 'idiom_768', phrase: 'Up to your ears', meaning_en: 'Deeply, overwhelmingly involved in a task or buried under problems', meaning_hi: 'किसी चीज़ में बहुत व्यस्त या गहराई से शामिल होना', example: 'I can\'t join you for dinner tonight; I am up to my ears in pending accounting files.', note: 'Height metaphor; similar to idiom 200.' },
      { id: 'idiom_769', phrase: 'Deadwood', meaning_en: 'People or items in an organization that are no longer productive, useful, or adding value', meaning_hi: 'जो लोग या चीज़ें अब उपयोगी न हों', example: 'The new corporate CEO decided to fire the unproductive deadwood from senior staff layers.', note: 'From forestry where dead branches are cleared to allow healthy growth.' },
      { id: 'idiom_770', phrase: 'Along in years', meaning_en: 'Getting visibly old, advanced in age, or elderly', meaning_hi: 'बूढ़ा होना', example: 'Though she is getting along in years, her memory remains absolutely flawless.', note: 'Polite euphemism for aging; see idiom 520.' },
      { id: 'idiom_771', phrase: 'A babe in the woods', meaning_en: 'An exceptionally innocent, naive, and defenseless person operating in a dangerous, complex field', meaning_hi: 'जो खतरनाक स्थिति में मासूम/भोला हो', example: 'Entering the ruthless real estate sector without an advisor makes you a babe in the woods.', note: 'From an old nursery tale about lost innocent children.' },
      { id: 'idiom_772', phrase: 'A gala day', meaning_en: 'A very special, joyful day full of public celebrations, festivities, and holidays', meaning_hi: 'उत्सव का दिन', example: 'The day our city soccer team won the championship cup was a massive gala day.', note: 'Joyous public occasion indicator.' },
      { id: 'idiom_773', phrase: 'Few and far between', meaning_en: 'Extremely rare, scarce, happening infrequently, or limited in number', meaning_hi: 'संख्या में कम और दूर', example: 'Good, honest real estate deals in this popular city are few and far between.', note: 'Scarcity validation metric.' },
      { id: 'idiom_774', phrase: 'Light fingered person', meaning_en: 'Someone who is a clever thief or prone to habitual shoplifting seamlessly', meaning_hi: 'चोर व्यक्ति', example: 'Keep your personal bags closed; there might be a few light fingered persons in the crowd.', note: 'Warns against pickpockets subtly.' },
      { id: 'idiom_775', phrase: 'Himself to himself', meaning_en: 'A quiet, deeply introverted person who prefers isolation and avoids socializing with others', meaning_hi: 'दूसरों से बात करना पसंद न करना', example: 'The old researcher living upstairs always keeps completely himself to himself.', note: 'Describes extreme introversion.' },
      { id: 'idiom_776', phrase: 'Keep tabs on', meaning_en: 'To closely watch, monitor, track, or supervise someone\'s movements or actions continuously', meaning_hi: 'निगरानी में रखना', example: 'The security manager uses automated cameras to keep close tabs on inventory shifts.', note: 'Continuous monitoring slang.' },
      { id: 'idiom_777', phrase: 'In the teeth of', meaning_en: 'An identical shift match evaluating dynamic action in direct defiance of major resistance', meaning_hi: 'के सामने (प्रतिरोध के बावजूद)', example: 'See idiom 382 for master regulatory parsing benchmarks.', note: 'Defiance metric.' },
      { id: 'idiom_778', phrase: 'To talk shop', meaning_en: 'To talk about one\'s specialized profession or office work during purely casual social settings', meaning_hi: 'अपने पेशे के बारे में ही बात करना', example: 'Even during the family dinner, the two doctors could only talk shop all evening.', note: 'Socially boring professional chat.' },
      { id: 'idiom_779', phrase: 'Chicken feed', meaning_en: 'An exceptionally tiny, trivial, or insignificant amount of money', meaning_hi: 'पैसे की छोटी रकम', example: 'To a giant billionaire corporation, a thousand-dollar fine is just pure chicken feed.', note: 'Metaphor from low-cost grain used to feed poultry.' },
      { id: 'idiom_780', phrase: 'To kick up a row', meaning_en: 'To create a loud, aggressive public scene, argument, or heavy disturbance out of anger', meaning_hi: 'हंगामा करना', example: 'The angry customer started to kick up a major row when his refund request was rejected.', note: 'Creating severe friction.' }
    ]
  },

  'Set 40': {
    setNumber: 40,
    range: '781–800',
    intro: 'Historic legal formulations, power dimensions, aur group performance targets is set mein hain.',
    idioms: [
      { id: 'idiom_781', phrase: 'To wash one\'s dirty linen in public', meaning_en: 'To discuss highly private family arguments or scandals openly in front of strangers', meaning_hi: 'अजनबियों के सामने निजी कलह की चर्चा करना', example: 'Keep your private disputes at home; there is no need to wash your dirty linen in public.', note: 'Warns against publicizing private conflicts.' },
      { id: 'idiom_782', phrase: 'Whale of a time', meaning_en: 'An informal expression meaning to have an exceptionally exciting, wonderful, and fantastic time', meaning_hi: 'खूब आनंद लेना', example: 'The children had an absolute whale of a time at the theme amusement park.', note: 'Hyperbole comparing massive size of a whale to immense fun.' },
      { id: 'idiom_783', phrase: 'Candle at both ends', meaning_en: 'An identical structural repetition evaluating physical and mental burnout markers', meaning_hi: 'अधिक काम करके खुद को थका देना', example: 'See idiom 300 for original background operational guidelines mappings.', note: 'Burnout metric verification.' },
      { id: 'idiom_784', phrase: 'Strike gold', meaning_en: 'To discover a highly lucrative source of wealth or achieve massive unexpected success in an enterprise', meaning_hi: 'किसी चीज़ में बड़ी सफलता पाना', example: 'By creating that simple smartphone game app, the young developers struck major gold.', note: 'From historical gold mining discoveries.' },
      { id: 'idiom_785', phrase: 'Have your cake and eat it too', meaning_en: 'Attempting to enjoy two completely incompatible advantages at the exact same time; impossible balance', meaning_hi: 'दोनों लाभ एक साथ प्राप्त करना', example: 'You want a high corporate salary but no working hours — you can\'t have your cake and eat it too.', note: 'Proverbial lesson on choices and absolute limits.' },
      { id: 'idiom_786', phrase: 'Salad days', meaning_en: 'A past carefree period of early youth marked by innocence, idealism, and lack of real experience', meaning_hi: 'युवावस्था और अनुभवहीनता का काल', example: 'Back in my college salad days, we spent hours discussing philosophy without a single worry.', note: 'Coined by Shakespeare in Antony and Cleopatra.' },
      { id: 'idiom_787', phrase: 'Power behind the throne', meaning_en: 'The influential person who exerts actual control and makes decisions behind a visible dummy leader', meaning_hi: 'वह व्यक्ति जिसके पास वास्तविक नियंत्रण और शक्ति हो', example: 'The quiet political advisor is the real strategic power behind the throne.', note: 'Exposes real institutional control layouts.' },
      { id: 'idiom_788', phrase: 'Sauce for the goose', meaning_en: 'What is considered acceptable, fair, or a rule for one person must apply equally to others', meaning_hi: 'जो पुरुष के लिए उचित समझा जाए वह महिला के लिए भी उचित हो', example: 'If he is allowed a flexible schedule, she must be too — what is sauce for the goose is sauce for the gander.', note: 'Classic proverb demanding total egalitarian fairness.' },
      { id: 'idiom_789', phrase: 'Lynch law', meaning_en: 'The illegal execution or punishment of an alleged criminal by a violent mob without a legal trial', meaning_hi: 'भीड़ का कानून', example: 'Civilized legal societies must firmly reject brutal lynch law and enforce proper judicial court trials.', note: 'Named after historical figures associated with vigilante justice panels.' },
      { id: 'idiom_790', phrase: 'Tread on the toes', meaning_en: 'An identical dynamic checking structural boundary intervention errors with authorities', meaning_hi: 'किसी को अपमानित या परेशान करना', example: 'See idiom 703 for operational matching framework guidelines.', note: 'Boundary violation check.' },
      { id: 'idiom_791', phrase: 'Worth a jew\'s eye', meaning_en: 'An old-fashioned expression meaning something that is exceptionally valuable or highly precious', meaning_hi: 'बहुत मूल्यवान चीज़', example: 'This rare, antique first-edition textbook is easily worth a jew\'s eye to a collector.', note: 'Historical phrase based on historical ransom dynamics.' },
      { id: 'idiom_792', phrase: 'Scream blue murder', meaning_en: 'To make an exceptionally loud, extravagant public protest or scream intensely out of anger', meaning_hi: 'बहुत शोर मचाना और जोरदार विरोध करना', example: 'The shop union will scream blue murder if you reduce their baseline health allowance.', note: 'Depicts vocal, aggressive group protest.' },
      { id: 'idiom_793', phrase: 'Small talk', meaning_en: 'Casual, polite conversation about minor, non-controversial topics during social functions', meaning_hi: 'ह हल्की-फुल्की बातचीत', example: 'They spent the first ten minutes of the formal corporate dinner engaging in light small talk.', note: 'Essential social lubricant terminology.' },
      { id: 'idiom_794', phrase: 'Die is cast', meaning_en: 'A crucial decision has been finalized, made, and cannot be altered or undone now', meaning_hi: 'निर्णय ले लिया गया (अब पीछे नहीं हट सकते)', example: 'I have officially resigned and mailed the letters — the die is cast.', note: 'Famously declared by Julius Caesar when crossing the Rubicon river.' },
      { id: 'idiom_795', phrase: 'Standing up', meaning_en: 'Actively advocating, defending, or supporting a specific cause or oppressed person', meaning_hi: 'के पक्ष में वकालत करना', example: 'Thank you for standing up for me during the aggressive corporate board debate.', note: 'Supportive alignment indicator.' },
      { id: 'idiom_796', phrase: 'Put in a word', meaning_en: 'To subtly make a supportive recommendation for someone to an authority figure', meaning_hi: 'सिफारिश करना', example: 'I will put in a good word for your application with the managing hiring director.', note: 'Subtle assistance phrase.' },
      { id: 'idiom_797', phrase: 'The ordinary members', meaning_en: 'The baseline rank-and-file members of an organization, excluding the elite leadership core', meaning_hi: 'आम सदस्य', example: 'The new policy changes were fiercely rejected by the ordinary members of the club.', note: 'Group segmentation descriptor.' },
      { id: 'idiom_798', phrase: 'Bite the dust', meaning_en: 'To fail miserably, be totally defeated, break down, or drop dead', meaning_hi: 'मारा जाना (पराजित होना)', example: 'My old office laptop finally bit the dust yesterday afternoon after six years.', note: 'Classic combat or device failure hyperbole.' },
      { id: 'idiom_799', phrase: 'Run amok', meaning_en: 'To behave in a completely wild, frenzied, chaotic, and violently out-of-control manner', meaning_hi: 'बेकाबू होकर हिंसक व्यवहार करना', example: 'An angry rogue elephant ran amok through the local crowded village bazaar.', note: 'Derived from the historical Malaysian cultural term "amuk" depicting a state of homicidal frenzy.' },
      { id: 'idiom_800', phrase: 'Figure out', meaning_en: 'To successfully understand, calculate, solve, or unravel a complex problem situation', meaning_hi: 'समझना', example: 'It took the expert developers three long hours to figure out the software code error.', note: 'Universal logic operational phrase.' }
    ]
  },

  'Set 41': {
    setNumber: 41,
    range: '801–820',
    intro: 'Corporate performance indices, legal arguments, aur lifestyle comforts ka micro-data mapping.',
    idioms: [
      { id: 'idiom_801', phrase: 'To cross swords', meaning_en: 'To engage in a sharp argument, bitter dispute, or open conflict with someone', meaning_hi: 'लड़ना (झगड़ा करना)', example: 'The two hot-tempered lawyers crossed swords during the corporate board meeting.', note: 'Fencing combat imagery applied to debates.' },
      { id: 'idiom_802', phrase: 'To have an easy time of it', meaning_en: 'Experiencing a period of absolute comfort, smooth progress, and zero difficulties', meaning_hi: 'कोई समस्या या कठिनाई न होना', example: 'With grandfather\'s massive wealth backing him, he had a very easy time of it in business.', note: 'Indicates high luxury or lack of obstacles.' },
      { id: 'idiom_803', phrase: 'To stand to one\'s guns', meaning_en: 'To bravely maintain one\'s position or opinion despite heavy, aggressive criticism', meaning_hi: 'मुश्किलों के बावजूद डटे रहना', example: 'Despite intense corporate board opposition, the director stood firmly to his guns.', note: 'Military artillery defensive stand metaphor.' },
      { id: 'idiom_804', phrase: 'To get into a scrape', meaning_en: 'Finding oneself awkwardly tangled up in an embarrassing or difficult problem situation', meaning_hi: 'मुश्किल स्थिति में फंसना', example: 'The careless youth got into a serious legal scrape after damaging public property.', note: 'Deals with minor but awkward trouble.' },
      { id: 'idiom_805', phrase: 'To haul over the coals', meaning_en: 'To severely scold, reprimand, or hold someone accountable for a major error', meaning_hi: 'कड़ी फटकार लगाना', example: 'The director hauled the accountant over the coals for missing critical balance entries.', note: 'From historical medieval torture practices of pulling people over hot coals.' },
      { id: 'idiom_806', phrase: 'To turn the other cheek', meaning_en: 'To respond to physical or verbal aggression with absolute non-violence and patience', meaning_hi: 'हिंसा के जवाब में अहिंसा से प्रतिक्रिया देना', example: 'When he insulted my background, I chose to be calm and turn the other cheek.', note: 'Biblical moral principle from the Sermon on the Mount.' },
      { id: 'idiom_807', phrase: 'To keep the ball rolling', meaning_en: 'To ensure that an ongoing activity, conversation, or project continues with momentum', meaning_hi: 'गतिविधि जारी रखना', example: 'Crack another joke to keep the conversational ball rolling during dinner.', note: 'Momentum preservation phrase.' },
      { id: 'idiom_808', phrase: 'To drink like a fish', meaning_en: 'To habitually consume massive, excessive amounts of alcohol regularly', meaning_hi: 'शराबी होना (बहुत शराब पीना)', example: 'He spends all his evening bar-hopping and drinking like a fish.', note: 'Vivid hydration comparison applied to intoxication.' },
      { id: 'idiom_809', phrase: 'Hush money', meaning_en: 'A bribe paid to someone to ensure they keep a scandalous secret silent', meaning_hi: 'चुप्पी खरीदने के लिए दी गई रिश्वत', example: 'The corrupt politician paid the witness massive hush money to hide the scam.', note: 'Illegality and corruption terminology.' },
      { id: 'idiom_810', phrase: 'To disabuse one\'s mind', meaning_en: 'To free someone from a completely false belief, illusion, or misunderstanding', meaning_hi: 'गलत धारणा दूर करना', example: 'Let me disabuse your mind immediately: hard work is the only way to pass, there are no shortcuts.', note: 'Correcting misinformation forcefully.' },
      { id: 'idiom_811', phrase: 'To pay one back in the same coin', meaning_en: 'To retaliate by treating someone with the exact same bad treatment they gave you', meaning_hi: 'जवाबी कार्रवाई करना (बदला लेना)', example: 'By exposing his rival\'s past error, he successfully paid him back in the same coin.', note: 'Proverbial eye-for-an-eye dynamic.' },
      { id: 'idiom_812', phrase: 'To live in clover', meaning_en: 'Living a life of absolute luxury, extreme comfort, wealth, and prosperity', meaning_hi: 'बहुत आराम और विलासिता में रहना', example: 'After winning the multi-million dollar national lottery, they are living fully in clover.', note: 'From cattle being exceptionally happy when feeding in nutrient-rich clover fields.' },
      { id: 'idiom_813', phrase: 'Pin-money', meaning_en: 'A small amount of extra allowance money kept for personal minor expenses', meaning_hi: 'महिला को उसके खर्च के लिए दी गई राशि', example: 'Historically, husbands granted their wives a small amount of weekly pin-money.', note: 'From historical eras when straight dress pins were expensive items.' },
      { id: 'idiom_814', phrase: 'To turn the cover', meaning_en: 'To successfully pass the most dangerous phase of a crisis or turn a corner safely', meaning_hi: 'संकट टालना', example: 'The doctors are confident that the critical patient has finally turned the cover.', note: 'Crisis resolution indicator.' },
      { id: 'idiom_815', phrase: 'To run amuck', meaning_en: 'An identical lexical variant tracing homicidal frenzied behavior lines', meaning_hi: 'उन्माद में इधर-उधर भागना', example: 'See idiom 799 for integrated cultural history tracking data.', note: 'Spelling variant check.' },
      { id: 'idiom_816', phrase: 'In double-quick time', meaning_en: 'At an exceptionally rapid, double-speed pace immediately', meaning_hi: 'बहुत जल्दी', example: 'The fast track project was completed in absolute double-quick time.', note: 'See idiom 554 for march speed context.' },
      { id: 'idiom_817', phrase: 'By fair means or foul', meaning_en: 'Attempting to achieve a goal by using absolutely any method, honest or dishonest', meaning_hi: 'ईमानदार या बेईमान, किसी भी तरीके से', example: 'The ruthless candidate was determined to win the election by fair means or foul.', note: 'Indicates total lack of ethical boundaries.' },
      { id: 'idiom_818', phrase: 'To cut the tackle', meaning_en: 'To stop redundant aimless discussions and get straight down to core action initialization', meaning_hi: 'बात बंद करना और शुरू करना', example: 'Let\'s cut the tackle and start writing down the software system codes.', note: 'Nautical setup simplification metaphor.' },
      { id: 'idiom_819', phrase: 'To play on a fiddle', meaning_en: 'Wasting valuable energy on completely minor, trivial, or useless activities', meaning_hi: 'मामूली चीजों में व्यस्त रहना', example: 'Stop playing on a fiddle with layout borders and check the financial core data.', note: 'Criticizes poor priority allocation.' },
      { id: 'idiom_820', phrase: 'To go to each other hammer and tongs', meaning_en: 'To argue or fight with someone with immense, loud violence, energy, and fury', meaning_hi: 'जोरदार बहस करना', example: 'The neighbors spent all morning going to each other hammer and tongs over parking.', note: 'From blacksmith tools working raw metal with intense force and noise.' }
    ]
  },

  'Set 42': {
    setNumber: 42,
    range: '821–840',
    intro: 'This segment tracks leadership traits, communication shortcuts, and sudden behavior shocks.',
    idioms: [
      { id: 'idiom_821', phrase: 'A man of weight', meaning_en: 'An exceptionally important, influential, and highly respected person in a community', meaning_hi: 'महत्वपूर्ण व्यक्ति', example: 'The senior judge is a man of weight whose opinion impacts policies.', note: 'Weight implies conceptual and social gravity/influence.' },
      { id: 'idiom_822', phrase: 'Pell-mell', meaning_en: 'In a state of wild, hurried, reckless confusion and disorder', meaning_hi: 'जल्दबाजी में अव्यवस्था', example: 'The crowd rushed pell-mell out of the stadium when fire alarms rang.', note: 'From French phrases depicting mixing and crowding confusedly.' },
      { id: 'idiom_823', phrase: 'To put one on one\'s mettle', meaning_en: 'To challenge someone to perform at their absolute highest ability and prove their worth', meaning_hi: 'अपना सर्वश्रेष्ठ करने के लिए प्रोत्साहित करना', example: 'The high-stakes final championship match really put the young player on his mettle.', note: 'Mettle denotes character courage and capability.' },
      { id: 'idiom_824', phrase: 'Clinched the issue', meaning_en: 'To settle an ongoing dispute or decide a matter conclusively by a final action', meaning_hi: 'निर्णय कर दिया (तय कर दिया)', example: 'His surprise presentation of physical receipts completely clinched the issue.', note: 'Final settlement phrase.' },
      { id: 'idiom_825', phrase: 'Person after my own heart', meaning_en: 'An individual who shares the exact same tastes, ideas, values, and preferences as you', meaning_hi: 'बिल्कुल अपनी पसंद का व्यक्ति', example: 'You love hiking and reading history? You are truly a person after my own heart.', note: 'Expression of high affinity and compatibility.' },
      { id: 'idiom_826', phrase: 'Threw cold water', meaning_en: 'The past tense execution of discouraging creative plans aggressively', meaning_hi: 'हतोत्साहित किया', example: 'See idiom 694 for comparative conceptual grounding grids.', note: 'Enthusiasm dampening tracking.' },
      { id: 'idiom_827', phrase: 'Goes to dogs', meaning_en: 'An identical conceptual variant mapping progressive structural decay parameters', meaning_hi: 'बर्बाद हो जाता है', example: 'See idiom 290 for absolute baseline execution notes.', note: 'Decay indicator check.' },
      { id: 'idiom_828', phrase: 'To spruce up', meaning_en: 'To neat, clean, and smartly enhance the visual appearance of a person or room', meaning_hi: 'साफ-सुथरा और आकर्षक बनाना', example: 'He spent an hour sprucing himself up for the grand corporate award function.', note: 'From 16th-century smart leather goods imported from Prussia (Spruce).' },
      { id: 'idiom_829', phrase: 'Chicken scratch', meaning_en: 'Extremely messy, cramped, and illegible handwriting that is impossible to read', meaning_hi: 'बहुत खराब लिखावट (जो पढ़ना मुश्किल हो)', example: 'The doctor\'s prescription was written in pure incomprehensible chicken scratch.', note: 'Humorous comparison to tracks left by poultry feet in mud.' },
      { id: 'idiom_830', phrase: 'An old hand', meaning_en: 'An exceptionally experienced, expert veteran in a specific field of activity', meaning_hi: 'अनुभवी', example: 'Our senior flight engineer is an old hand at handling complex engine glitches.', note: 'Implies decades of practical mastery; opposite of a novice.' },
      { id: 'idiom_831', phrase: 'Put to the sword', meaning_en: 'To execute, slaughter, or kill enemies ruthlessly in war', meaning_hi: 'मार डालना या मृत्युदंड देना', example: 'The ruthless invading army put the entire defending fortress garrison to the sword.', note: 'Historical combat hyperbole.' },
      { id: 'idiom_832', phrase: 'On the ball', meaning_en: 'Being exceptionally alert, fully knowledgeable, competent, and quick to respond to changes', meaning_hi: 'जानकर और सक्षम', example: 'The young assistant is incredibly sharp; she is always right on the ball.', note: 'From sports field focus where players must keep attention on the ball.' },
      { id: 'idiom_833', phrase: 'To shrug off', meaning_en: 'To intentionally dismiss or treat a criticism or problem as completely unimportant', meaning_hi: 'किसी चीज़ के महत्व को नज़रअंदाज करना', example: 'He managed to casually shrug off all the negative media reviews of his book.', note: 'Physical shoulder gesture applied to mental resilience.' },
      { id: 'idiom_834', phrase: 'Think on feet', meaning_en: 'To think rapidly, logically, and make excellent decisions instantly under pressure', meaning_hi: 'मुश्किल स्थिति में तुरंत अच्छे विचार और निर्णय लेना', example: 'A live television anchor must learn how to think quickly on their feet.', note: 'Demands zero latency execution.' },
      { id: 'idiom_835', phrase: 'In for a penny, in for a pound', meaning_en: 'Since you have started an activity, you must fully commit to finishing it regardless of cost', meaning_hi: 'किसी काम के लिए पूरी तरह प्रतिबद्ध होना', example: 'The project budget increased, but we are in for a penny, in for a pound now.', note: 'British currency proverb stating absolute commitment.' },
      { id: 'idiom_836', phrase: 'Boil the ocean', meaning_en: 'Attempting to take on an impossibly vast, unrealistic, or unachievable task wasteful', meaning_hi: 'कोई असंभव या बहुत मुश्किल काम करने की कोशिश करना', example: 'Don\'t try to analyze every single web link; that is just trying to boil the ocean.', note: 'Corporate critique of hyper-ambitious wasting tasks.' },
      { id: 'idiom_837', phrase: 'A rare bird', meaning_en: 'An exceptionally unique, unusual, outstanding individual or uncommon phenomenon', meaning_hi: 'असाधारण व्यक्ति या चीज़', example: 'An honest corporate real estate agent is a truly rare bird nowadays.', note: 'From Latin "rara avis" meaning a unique marvel.' },
      { id: 'idiom_838', phrase: 'Hang in there', meaning_en: 'An encouraging expression telling someone to remain resilient and not quit during a crisis', meaning_hi: 'मुश्किल काम को दृढ़ता से जारी रखना', example: 'I know the training is exhausting, but hang in there; it ends this week.', note: 'Popular perseverance phrase.' },
      { id: 'idiom_839', phrase: 'In high dudgeon', meaning_en: 'Experiencing a state of intense, visible indignation, offense, or angry resentment', meaning_hi: 'नराजगी से', example: 'The insulted manager walked out of the conference room in high dudgeon.', note: 'Formal description of dignified anger behavior.' },
      { id: 'idiom_840', phrase: 'Go to seed', meaning_en: 'To deteriorate drastically in physical appearance, health, or quality through sheer neglect', meaning_hi: 'देखभाल की कमी से बिखर जाना', example: 'The historic sports club has been allowed to go completely to seed lately.', note: 'From useful garden plants growing old, stop flowering, and turning purely to seed clusters.' }
    ]
  },

  'Set 43': {
    setNumber: 43,
    range: '841–860',
    intro: 'Behavioral anomalies, language filters aur personal resilience frameworks is set ka focus hain.',
    idioms: [
      { id: 'idiom_841', phrase: 'Come unglued', meaning_en: 'To completely lose emotional control, break down under intense mental stress, or fail structurally', meaning_hi: 'अपना संयम खो देना', example: 'Faced with multiple system errors, the nervous controller came completely unglued.', note: 'Depicts total structural or psychological collapse.' },
      { id: 'idiom_842', phrase: 'Pull for', meaning_en: 'To actively cheer, encourage, support, or hope for the victory of a specific competitor', meaning_hi: 'प्रोत्साहित करना', example: 'All the local residents are pulling for the neighborhood boy in the finals.', note: 'Support alignment slang.' },
      { id: 'idiom_843', phrase: 'Dress the part', meaning_en: 'To wear the exact appropriate clothing to suit a specific job, social role, or status expectations', meaning_hi: 'उपयुक्त दिखना', example: 'If you want clients to respect you as an executive, you must dress the part.', note: 'Theatrical alignment applied to professional clothing choices.' },
      { id: 'idiom_844', phrase: 'Scope out', meaning_en: 'To make a careful, preliminary evaluation or reconnaissance scan of a situation or area', meaning_hi: 'प्रारंभिक निरीक्षण करना', example: 'Let\'s visit the site early to scope out the entire venue area before setup.', note: 'Visual assessment phrasing.' },
      { id: 'idiom_845', phrase: 'What a small world', meaning_en: 'A conversational exclamation expressing immense surprise at an unexpected meeting of connections', meaning_hi: 'कितना संयोग है!', example: 'Meeting my old childhood neighbor in a remote London cafe made us shout: what a small world!', note: 'Celebrates amazing social coincidences.' },
      { id: 'idiom_846', phrase: 'Raising eyebrows', meaning_en: 'An identical metric duplication tracking social shock or mild ethical disapproval triggers', meaning_hi: 'आश्चर्य/झटका दिखाना', example: 'See idiom 261 for comprehensive behavioral analysis records.', note: 'Disapproval marker check.' },
      { id: 'idiom_847', phrase: 'Step up the plate', meaning_en: 'Taking on responsibility to perform a difficult action or handle a crisis courageously', meaning_hi: 'कुछ मुश्किल करने की जिम्मेदारी लेना', example: 'When the team captain was injured, the rookie stepped up to the plate brilliantly.', note: 'From American baseball where batters step up to home plate to face pitches.' },
      { id: 'idiom_848', phrase: 'The Holy Grail', meaning_en: 'An ultimate, highly elusive object or goal that is sought after with supreme devotion', meaning_hi: 'एक महत्वपूर्ण वस्तु या लक्ष्य', example: 'Finding a perfectly secure and clean renewable energy source is the holy grail of modern physics.', note: 'From medieval Arthurian legends tracking the sacred cup of Christ.' },
      { id: 'idiom_849', phrase: 'Pardon my French', meaning_en: 'An identical match for conversational profanity disclaimers evaluation lines', meaning_hi: 'मेरी अनुचित भाषा के लिए माफी माँगना', example: 'See idiom 253 for operational dialogue interaction guidelines.', note: 'Language disclaimer check.' },
      { id: 'idiom_850', phrase: 'You scratch my back, I\'ll scratch yours', meaning_en: 'A mutual arrangement where two people help each other for hidden reciprocal selfish advantage', meaning_hi: 'आप मेरी मदद करो मैं आपकी मदद करूँगा (आपसी स्वार्थ)', example: 'Clear my file early and I will approve your budget grant — you scratch my back, I\'ll scratch yours.', note: 'Stresses transactional self-interest partnerships.' },
      { id: 'idiom_851', phrase: 'Bend one\'s ear', meaning_en: 'To talk to someone persistently and for a very long time, often to complain or bore them', meaning_hi: 'किसी से लंबे समय तक बात करना', example: 'He caught me in the hallway and bent my ear for an hour regarding his parking issues.', note: 'Monopolizing someone\'s listening time.' },
      { id: 'idiom_852', phrase: 'Up and doing', meaning_en: 'An identical dynamic evaluated across shifts tracking rapid activity initialization models', meaning_hi: 'फिर से सक्रिय', example: 'See idiom 597 for structural baseline usage instructions.', note: 'Activity marker check.' },
      { id: 'idiom_853', phrase: 'Hang up one\'s hat', meaning_en: 'To permanently settle down, reside, or find a comfortable home in a specific location', meaning_hi: 'कहीं निवास करना', example: 'After decades of global travel, the sailor finally decided to hang up his hat in this village.', note: 'Domestic settling metaphor.' },
      { id: 'idiom_854', phrase: 'Turn the corner', meaning_en: 'To successfully pass the most critical, dangerous phase of an illness or financial crisis and start improving', meaning_hi: 'गंभीर अवस्था को सफलतापूर्वक पार करना', example: 'Company profits are finally rising; we have definitely turned the corner.', note: 'Identical context map loop to idiom 814.' },
      { id: 'idiom_855', phrase: 'Heavy tidings', meaning_en: 'A formal expression meaning highly tragic, sad, or distressing news', meaning_hi: 'बुरी खबर', example: 'The herald arrived at the palace bearing heavy tidings of battlefield losses.', note: 'Archaic and dramatic vocabulary format.' },
      { id: 'idiom_856', phrase: 'Dog\'s chance', meaning_en: 'An absolute zero, minimal, or hopeless probability of achieving success', meaning_hi: 'बिल्कुल कोई उम्मीद नहीं', example: 'Without real technological training, you have a dog\'s chance in this modern industry.', note: 'See idiom 518 for parallel structural semantics.' },
      { id: 'idiom_857', phrase: 'Life in the raw', meaning_en: 'Life experienced in its harshest, most basic, natural state without any modern comforts or shielding', meaning_hi: 'जीवन का प्राकृतिक, बिना सजावट वाला रूप', example: 'Living as a remote arctic researcher teaches you all about life in the raw.', note: 'Unvarnished reality descriptor.' },
      { id: 'idiom_858', phrase: 'Zero tolerance', meaning_en: 'A strict policy that permits absolutely zero leniency or exceptions for wrongdoing or rule violations', meaning_hi: 'असामाजिक व्यवहार की अस्वीकार्यता', example: 'The educational academy enforces absolute zero tolerance toward cheating behavior.', note: 'Rigid compliance framework.' },
      { id: 'idiom_859', phrase: 'Flesh and blood', meaning_en: 'Human nature with its natural physical limits, needs, vulnerability, or referring to family bloodlines', meaning_hi: 'व्यक्ति का शारीरिक शरीर और उसकी ज़रूरतें', example: 'I cannot work twenty hours straight; I am only flesh and blood.', note: 'Emphasizes basic human fragility or biological lineage.' },
      { id: 'idiom_860', phrase: 'To go the extra mile', meaning_en: 'To make an extra, special effort beyond what is strictly required to ensure absolute excellence', meaning_hi: 'कुछ हासिल करने के लिए विशेष प्रयास करना', example: 'Our customer support crew always goes the extra mile to assist confused users.', note: 'Highly praised corporate performance metric.' }
    ]
  },
  'Set 44': {
  setNumber: 44,
  range: '861–880',
  intro: 'Social behavior errors, reputation indicators, aur precise evaluations is set ka baseline hain.',
  idioms: [
    { 
      id: 'idiom_861', 
      phrase: 'Fixed in one\'s ways', 
      meaning_en: 'Stubbornly refusing to alter old habits, routines, or traditional opinions', 
      meaning_hi: 'अपने करने के तरीके को नहीं बदलना चाहते', 
      example: 'My elderly grandfather is completely fixed in his ways and rejects smartphones.', 
      note: 'Depicts rigid behavioral habits.' 
    },
    { 
      id: 'idiom_862', 
      phrase: 'Fuddy-duddy', 
      meaning_en: 'An old-fashioned, highly conservative, and boringly traditional person who opposes modern updates', 
      meaning_hi: 'बहुत रूढ़िवादी व्यक्ति', 
      example: 'Stop being such an old fuddy-duddy and try this new digital gaming app.', 
      note: 'Lighthearted conversational critique of obsolete mindsets.' 
    },
    { 
      id: 'idiom_863', 
      phrase: 'Graveyard shift', 
      meaning_en: 'A work shift running through the middle of the dark night until early morning hours', 
      meaning_hi: 'सुबह के शुरुआती घंटों तक चलने वाली काम की पाली', 
      example: 'Working the quiet graveyard shift at the local hospital is exceptionally exhausting.', 
      note: 'From historical night watch routines or cemetery bells watch systems.' 
    },
    { 
      id: 'idiom_864', 
      phrase: 'Whistle in the dark', 
      meaning_en: 'Trying to appear brave and confident when you are actually feeling terrified or uncertain', 
      meaning_hi: 'निडर होने का दिखावा करना', 
      example: 'His calm statements about project funding were just whistling in the dark.', 
      note: 'Faking bravery to ward off fear.' 
    },
    { 
      id: 'idiom_865', 
      phrase: 'To have at one\'s fingertips', 
      meaning_en: 'To have information, knowledge, or data readily available for immediate use', 
      meaning_hi: 'पूरी जानकारी उंगलियों पर होना', 
      example: 'Our lead researcher has all the global market statistics right at her fingertips.', 
      note: 'Represents quick mental access and thorough preparation.' 
    },
    { 
      id: 'idiom_866', 
      phrase: 'Bad blood', 
      meaning_en: 'Feelings of hatred, ill-will, or bitter animosity between people or families due to past arguments', 
      meaning_hi: 'पुरानी दुश्मनी या आपसी मनमुटाव', 
      example: 'There has been bad blood between the two neighboring families for generations.', 
      note: 'Refers to long-standing, deep-seated resentment.' 
    },
    { 
      id: 'idiom_867', 
      phrase: 'On the level', 
      meaning_en: 'Honest, trustworthy, sincere, and perfectly legal', 
      meaning_hi: 'ईमानदार और भरोसेमंद', 
      example: 'You can trust his business proposal completely; the entire deal is on the level.', 
      note: 'Derived from the freemasonry tool (the level) symbolizing honesty and equality.' 
    },
    { 
      id: 'idiom_868', 
      phrase: 'A bitter pill to swallow', 
      meaning_en: 'An unpleasant, painful fact or situation that is unavoidable and must be accepted', 
      meaning_hi: 'एक कड़वी सच्चाई जिसे स्वीकार करना ही पड़े', 
      example: 'Failing the final medical entrance examination was a bitter pill to swallow for him.', 
      note: 'Compares harsh reality to unpleasant medicine.' 
    },
    { 
      id: 'idiom_869', 
      phrase: 'Under a cloud', 
      meaning_en: 'Under suspicion, distrusted, or disgraced due to suspected wrongdoing', 
      meaning_hi: 'संदेह के घेरे में होना', 
      example: 'The chief accountant left the firm under a cloud after the audit discrepancy was found.', 
      note: 'Metaphor for a shadow of doubt hanging over someone.' 
    },
    { 
      id: 'idiom_870', 
      phrase: 'Upset the apple cart', 
      meaning_en: 'To ruin, spoil, or disrupt carefully made plans or a stable situation', 
      meaning_hi: 'बने-बनाए काम या योजना को बिगाड़ देना', 
      example: 'Please don\'t bring up the budget issues now and upset the apple cart.', 
      note: 'Originates from physically knocking over a vendor’s neatly arranged cart.' 
    },
    { 
      id: 'idiom_871', 
      phrase: 'Wild goose chase', 
      meaning_en: 'A foolish, hopeless, and frustrating search for something that is nonexistent or unattainable', 
      meaning_hi: 'व्यर्थ की भागदौड़ या निरर्थक खोज', 
      example: 'Following that anonymous tip sent the police team on a wild goose chase across the city.', 
      note: 'Coined by Shakespeare, originally referring to a type of unpredictable horse race.' 
    },
    { 
      id: 'idiom_872', 
      phrase: 'A drop in the ocean', 
      meaning_en: 'An amount so small that it has very little or no meaningful effect on a large situation', 
      meaning_hi: 'ऊंट के मुंह में जीरा / बहुत छोटी मात्रा', 
      example: 'The small donation is generous, but it is just a drop in the ocean compared to what we need.', 
      note: 'Highlights extreme insufficiency.' 
    },
    { 
      id: 'idiom_873', 
      phrase: 'Cry over spilled milk', 
      meaning_en: 'To waste time worrying, regretting, or complaining about past mistakes that cannot be changed', 
      meaning_hi: 'बीती बातों पर पछताना (अब पछताए होत क्या जब चिड़ियाँ चुग गई खेत)', 
      example: 'The contract is already lost, so there is no use crying over spilled milk now.', 
      note: 'A reminder that focusing on irreversible past losses is useless.' 
    },
    { 
      id: 'idiom_874', 
      phrase: 'Barking up the wrong tree', 
      meaning_en: 'Pursuing a mistaken line of thought or accusing the completely wrong person', 
      meaning_hi: 'गलत दिशा में प्रयास करना या गलत इंसान पर शक करना', 
      example: 'If you think I took your missing keys, you are barking up the wrong tree; I wasn\'t even home.', 
      note: 'From hunting dogs barking at an empty tree while the prey is elsewhere.' 
    },
    { 
      id: 'idiom_875', 
      phrase: 'Face the music', 
      meaning_en: 'To accept and confront the unpleasant consequences, criticism, or punishment for your actions', 
      meaning_hi: 'किए का परिणाम भुगतना / आलोचना का सामना करना', 
      example: 'After breaking the classroom window, the student had to go to the principal\'s office and face the music.', 
      note: 'Likely originating from military drumbeats or theater performers stepping onto the stage.' 
    },
    { 
      id: 'idiom_876', 
      phrase: 'Hit the nail on the head', 
      meaning_en: 'To describe exactly what is causing a situation or to state the absolute truth perfectly', 
      meaning_hi: 'बिल्कुल सटीक बात कहना', 
      example: 'You hit the nail on the head when you identified communication as our main problem.', 
      note: 'Refers to the precision of carpentry.' 
    },
    { 
      id: 'idiom_877', 
      phrase: 'Keep your chin up', 
      meaning_en: 'An encouraging phrase telling someone to remain brave, cheerful, and hopeful in difficult times', 
      meaning_hi: 'कठिन समय में भी हिम्मत न हारना और खुश रहना', 
      example: 'Keep your chin up! I am absolutely sure you will pass the interview next time.', 
      note: 'A physical metaphor for maintaining pride and optimism.' 
    },
    { 
      id: 'idiom_878', 
      phrase: 'Piece of cake', 
      meaning_en: 'An action, task, or job that is incredibly easy and effortless to complete', 
      meaning_hi: 'बहुत ही आसान काम (बायें हाथ का खेल)', 
      example: 'Don\'t stress about the basic driving test; it is going to be a piece of cake for you.', 
      note: 'Originated from cake-walk competitions where cake was a easily won prize.' 
    },
    { 
      id: 'idiom_879', 
      phrase: 'Bite the bullet', 
      meaning_en: 'To force yourself to do something difficult, painful, or unpleasant that you have been avoiding', 
      meaning_hi: 'मजबूरी में किसी कठिन परिस्थिति का डटकर सामना करना', 
      example: 'I finally decided to bite the bullet and visit the dentist for my tooth extraction surgery.', 
      note: 'Historically derived from wounded soldiers biting on lead bullets during battlefield surgery without anesthesia.' 
    },
    { 
      id: 'idiom_880', 
      phrase: 'Spill the beans', 
      meaning_en: 'To accidentally or prematurely reveal a secret, surprise, or confidential information', 
      meaning_hi: 'भेद खोल देना / गुप्त बात ज़ाहिर करना', 
      example: 'We wanted the birthday party to be a complete surprise, but Rohan went ahead and spilled the beans.', 
      note: 'Ties back to ancient Greek voting systems where colored beans were counted to reveal secret results.' 
    }
  ]
},
'Set 45': {
  setNumber: 45,
  range: '881–900',
  intro: 'Risk taking, mental strain, decision points, aur psychological pressure shifts is set ka main theme hain.',
  idioms: [
    { 
      id: 'idiom_881', 
      phrase: 'Burn the midnight oil', 
      meaning_en: 'To study or work late into the night or early morning hours', 
      meaning_hi: 'देर रात तक जागकर कड़ी मेहनत या पढ़ाई करना', 
      example: 'She had to burn the midnight oil for a whole week to prepare for her final bar exams.', 
      note: 'Refers to the historical use of oil lamps before electricity.' 
    },
    { 
      id: 'idiom_882', 
      phrase: 'Cold feet', 
      meaning_en: 'A sudden loss of courage or confidence to go through with a planned big event or commitment', 
      meaning_hi: 'अंतिम समय पर घबरा जाना या हिम्मत खो देना', 
      example: 'The groom got cold feet just a day before the grand wedding and wanted to postpone it.', 
      note: 'Often used to describe pre-wedding or pre-performance anxiety.' 
    },
    { 
      id: 'idiom_883', 
      phrase: 'Cost an arm and a leg', 
      meaning_en: 'To be extremely, exceptionally expensive', 
      meaning_hi: 'बहुत ही महंगा होना', 
      example: 'Buying that luxury sports car is going to cost him an arm and a leg.', 
      note: 'Hyperbolic expression emphasizing a high personal sacrifice or price tag.' 
    },
    { 
      id: 'idiom_884', 
      phrase: 'Cut corners', 
      meaning_en: 'To do something in the easiest, cheapest, or fastest way while ignoring rules or quality standards', 
      meaning_hi: 'पैसे या समय बचाने के लिए काम में कोताही बरतना', 
      example: 'The construction company cut corners on building materials, which led to structural cracks.', 
      note: 'Derived from taking a shorter path across corners rather than following the main track.' 
    },
    { 
      id: 'idiom_885', 
      phrase: 'Don\'t count your chickens before they hatch', 
      meaning_en: 'Do not assume a future success or profit until it actually, certainly happens', 
      meaning_hi: 'काम पूरा होने से पहले ही उसकी सफलता को पक्का न मानना', 
      example: 'You might get the promotion, but don\'t count your chickens before they hatch.', 
      note: 'A classic warning against premature optimism based on Aesop’s fables.' 
    },
    { 
      id: 'idiom_886', 
      phrase: 'Let the cat out of the bag', 
      meaning_en: 'To accidentally reveal a secret that was supposed to stay hidden', 
      meaning_hi: 'अनजाने में कोई राज उजागर कर देना', 
      example: 'It was a surprise party, but Rohit let the cat out of the bag by asking her about the venue.', 
      note: 'Comes from old market scams where pig lets were swapped out for cheap cats in bags.' 
    },
    { 
      id: 'idiom_887', 
      phrase: 'Once in a blue moon', 
      meaning_en: 'An event or occurrence that happens very rarely or almost never', 
      meaning_hi: 'ईद का चांद होना / कभी-कभार होने वाली घटना', 
      example: 'Since moving abroad, he calls his childhood friends only once in a blue moon.', 
      note: 'Based on the rare astronomical appearance of a second full moon in a single calendar month.' 
    },
    { 
      id: 'idiom_888', 
      phrase: 'Pull someone\'s leg', 
      meaning_en: 'To playfully tease, trick, or fool someone as a harmless joke', 
      meaning_hi: 'मजाक में किसी की टांग खींचना', 
      example: 'Don\'t get angry; I was just pulling your leg when I said the flight was cancelled.', 
      note: 'Historically meant tripping someone up, but evolved into light conversational teasing.' 
    },
    { 
      id: 'idiom_889', 
      phrase: 'See eye to eye', 
      meaning_en: 'To fully agree with someone or share the exact same opinion on a matter', 
      meaning_hi: 'पूर्ण रूप से सहमत होना / एक जैसे विचार रखना', 
      example: 'The business partners rarely see eye to eye when it comes to marketing strategy.', 
      note: 'Visual metaphor for looking at an issue from the exact same level and perspective.' 
    },
    { 
      id: 'idiom_890', 
      phrase: 'Take it with a grain of salt', 
      meaning_en: 'To listen to a statement with skepticism and not accept it as absolute truth', 
      meaning_hi: 'पूरी तरह सच न मानना / संदेह के साथ सुनना', 
      example: 'You should take his grand political predictions with a grain of salt; he is often wrong.', 
      note: 'From ancient medical remedies where taking a threat or poison with salt made it easier to swallow.' 
    },
    { 
      id: 'idiom_891', 
      phrase: 'The last straw', 
      meaning_en: 'The final minor problem in a series of setbacks that makes a situation completely unbearable', 
      meaning_hi: 'धैर्य की सीमा समाप्त कर देने वाली आखिरी छोटी मुसीबत', 
      example: 'When the internet stopped working too, it was the last straw on an already terrible workday.', 
      note: 'From the proverb "it is the last straw that breaks the camel\'s back."' 
    },
    { 
      id: 'idiom_892', 
      phrase: 'Through thick and thin', 
      meaning_en: 'To support someone consistently through both excellent times and severe hardships', 
      meaning_hi: 'सुख-दुख में / हर अच्छे-बुरे हालात में साथ रहना', 
      example: 'Her best friend had stayed loyal to her through thick and thin since primary school.', 
      note: 'Originally referred to navigating through safe open woods and dense, difficult brushwood.' 
    },
    { 
      id: 'idiom_893', 
      phrase: 'Under the weather', 
      meaning_en: 'Feeling slightly unwell, sick, tired, or lacking energy', 
      meaning_hi: 'तबीयत ठीक न होना / अस्वस्थ महसूस करना', 
      example: 'I won\'t be attending the morning meeting today as I am feeling a bit under the weather.', 
      note: 'Maritime origin where sick sailors went below deck to protect themselves from bad weather.' 
    },
    { 
      id: 'idiom_894', 
      phrase: 'Break a leg', 
      meaning_en: 'A superstitious way to wish a performer or speaker good luck right before a show', 
      meaning_hi: 'शुभकामनाएं देना (विशेषकर किसी स्टेज परफॉर्मेंस से पहले)', 
      example: 'Go out there on the theater stage tonight and break a leg!', 
      note: 'Old theatrical superstition that directly wishing someone good luck would actually bring bad luck.' 
    },
    { 
      id: 'idiom_895', 
      phrase: 'Call it a day', 
      meaning_en: 'To stop working on an activity or task for the rest of the day', 
      meaning_hi: 'आज के लिए काम बंद कर देना', 
      example: 'We have finished coding the main module, so let\'s call it a day and head home.', 
      note: 'Common workplace phrase signifying the formal end of an effort.' 
    },
    { 
      id: 'idiom_896', 
      phrase: 'Get out of hand', 
      meaning_en: 'To become chaotic, unruly, or completely out of control', 
      meaning_hi: 'नियंत्रण से बाहर हो जाना / बात हाथ से निकल जाना', 
      example: 'The protest started peacefully, but things quickly got out of hand when the barricades broke.', 
      note: 'Derived from losing physical grip or control over the reins of a horse.' 
    },
    { 
      id: 'idiom_897', 
      phrase: 'Go back to the drawing board', 
      meaning_en: 'To start revising a failed plan or project entirely from the very beginning', 
      meaning_hi: 'नए सिरे से योजना बनाना शुरू करना', 
      example: 'Our design prototype failed the safety stress test, so it\'s back to the drawing board.', 
      note: 'Comes from engineers and architects drafting original blueprints on literal drawing boards.' 
    },
    { 
      id: 'idiom_898', 
      phrase: 'Hang in there', 
      meaning_en: 'An encouraging phrase telling someone to remain patient and determined during a crisis', 
      meaning_hi: 'मुश्किल समय में हिम्मत बनाए रखना', 
      example: 'I know the training phase is brutal right now, but hang in there; it gets easier.', 
      note: 'Colloquial phrase often associated with staying physically suspended to avoid falling.' 
    },
    { 
      id: 'idiom_899', 
      phrase: 'Jump on the bandwagon', 
      meaning_en: 'To adopt a popular trend, opinion, or activity simply because everyone else is doing it', 
      meaning_hi: 'बहती गंगा में हाथ धोना / भेड़चाल में शामिल होना', 
      example: 'Many legacy businesses are jumping on the AI bandwagon without a clear long-term strategy.', 
      note: 'From old political campaigns where a parade wagon carried musicians to attract followers.' 
    },
    { 
      id: 'idiom_900', 
      phrase: 'Keep something at bay', 
      meaning_en: 'To prevent an enemy, problem, or illness from coming close or worsening', 
      meaning_hi: 'किसी मुसीबत या बीमारी को खुद से दूर रखना', 
      example: 'Drinking warm lemon water and exercising daily helps keep seasonal winter colds at bay.', 
      note: 'From hunting contexts where hounds cornered prey, keeping it at a safe distance.' 
    }
  ]
},
'Set 46': {
  setNumber: 46,
  range: '901–920',
  intro: 'Communication gaps, situational awareness, aur relationship dynamics is set ka focus hain.',
  idioms: [
    { 
      id: 'idiom_901', 
      phrase: 'Leave no stone unturned', 
      meaning_en: 'To try every possible course of action or look everywhere in order to achieve something', 
      meaning_hi: 'कोई कसर न छोड़ना / हर संभव प्रयास करना', 
      example: 'The detective promised that he would leave no stone unturned to find the missing artifacts.', 
      note: 'Originates from an ancient Greek legend about looking for a hidden treasure beneath stones.' 
    },
    { 
      id: 'idiom_902', 
      phrase: 'Let sleeping dogs lie', 
      meaning_en: 'To avoid interfering in a situation or bringing up an old issue that could cause trouble', 
      meaning_hi: 'गड़े मुर्दे न उखाड़ना / शांत मामले को न भड़काना', 
      example: 'They argued about it years ago, but it is best to let sleeping dogs lie now.', 
      note: 'A warning that disturbing a peaceful but volatile situation will provoke a bad reaction.' 
    },
    { 
      id: 'idiom_903', 
      phrase: 'Make a long story short', 
      meaning_en: 'To skip over unimportant details and get directly to the main point of an explanation', 
      meaning_hi: 'संक्षेप में कहना / बात को छोटा करना', 
      example: 'To make a long story short, we missed our connecting flight and had to stay at a hotel.', 
      note: 'Used in conversation to transition directly to the conclusion.' 
    },
    { 
      id: 'idiom_904', 
      phrase: 'Method to one\'s madness', 
      meaning_en: 'A purpose or logical plan behind actions that appear completely chaotic, strange, or crazy', 
      meaning_hi: 'अजीब या पागलपन जैसी हरकतों के पीछे भी कोई निश्चित वजह होना', 
      example: 'His messy filing system looks terrible, but there is a method to his madness.', 
      note: 'Famously used in Shakespeare\'s play Hamlet.' 
    },
    { 
      id: 'idiom_905', 
      phrase: 'Miss the boat', 
      meaning_en: 'To lose an excellent opportunity by being too slow to act or respond', 
      meaning_hi: 'मौका गंवा देना / अवसर हाथ से निकल जाना', 
      example: 'Real estate prices doubled because he missed the boat on buying property last year.', 
      note: 'Metaphor for arriving too late at the dock to board a departing ship.' 
    },
    { 
      id: 'idiom_906', 
      phrase: 'Not playing with a full deck', 
      meaning_en: 'Lacking mental competence, intelligence, or acting in a highly eccentric, foolish manner', 
      meaning_hi: 'कम अक्ल होना / मानसिक रूप से असंतुलित लगना', 
      example: 'The way he was shouting at the wall made people think he wasn\'t playing with a full deck.', 
      note: 'Card-playing metaphor suggesting a standard deck is missing crucial cards.' 
    },
    { 
      id: 'idiom_907', 
      phrase: 'On the ball', 
      meaning_en: 'Being highly alert, knowledgeable, competent, and quick to understand or react to things', 
      meaning_hi: 'बहुत सतर्क और फुर्तीला होना', 
      example: 'The young intern is really on the ball; she anticipates what we need before we even ask.', 
      note: 'Likely derived from sports like baseball or cricket where keeping an eye on the ball is vital.' 
    },
    { 
      id: 'idiom_908', 
      phrase: 'Out of the blue', 
      meaning_en: 'Happening completely unexpectedly, suddenly, and without any prior warning', 
      meaning_hi: 'अचानक और बिना किसी चेतावनी के (आसमान से टपकना)', 
      example: 'An old university classmate called me out of the blue after ten years of no contact.', 
      note: 'Short for a lightning bolt appearing out of a clear, blue sky.' 
    },
    { 
      id: 'idiom_909', 
      phrase: 'Penny for your thoughts', 
      meaning_en: 'A friendly spoken phrase used to ask what someone is thinking about when they are very quiet', 
      meaning_hi: 'तुम क्या सोच रहे हो? (मौन तोड़ने के लिए प्रयुक्त)', 
      example: 'You have been staring out the window for twenty minutes; a penny for your thoughts?', 
      note: 'Dating back hundreds of years when a penny was a meaningful token to offer for a confidence.' 
    },
    { 
      id: 'idiom_910', 
      phrase: 'Picture paints a thousand words', 
      meaning_en: 'A visual image can convey a complex story or emotional message much faster than prose', 
      meaning_hi: 'एक तस्वीर हजार शब्दों के बराबर होती है', 
      example: 'The graph showed the economic collapse perfectly; truly, a picture paints a thousand words.', 
      note: 'Emphasizes the immediate, deep impact of visual documentation.' 
    },
    { 
      id: 'idiom_911', 
      phrase: 'Play devil\'s advocate', 
      meaning_en: 'To argue against an idea or take an opposing side just for the sake of thorough debate', 
      meaning_hi: 'बहस को मजबूत बनाने के लिए जानबूझकर विपरीत पक्ष की दलील देना', 
      example: 'I agree with your plan, but let me play devil\'s advocate to see if there are any hidden flaws.', 
      note: 'Originated from a formal church role designed to find flaws in arguments for sainthood.' 
    },
    { 
      id: 'idiom_912', 
      phrase: 'Pull yourself together', 
      meaning_en: 'To calm down, control your extreme emotions, and regain your composure during a crisis', 
      meaning_hi: 'खुद को संभालना / अपनी भावनाओं पर काबू पाना', 
      example: 'I know you are panicked about the news, but pull yourself together and help me look for it.', 
      note: 'A mental command to stop yourself from breaking apart emotionally.' 
    },
    { 
      id: 'idiom_913', 
      phrase: 'Rain on someone\'s parade', 
      meaning_en: 'To ruin someone\'s happy mood, excitement, celebrations, or carefully laid plans', 
      meaning_hi: 'रंग में भंग डालना / किसी की खुशी किरकिरी करना', 
      example: 'I don\'t want to rain on your parade, but the outdoor event might get cancelled due to a strike.', 
      note: 'Metaphor for a sudden downpour ruining an outdoor celebratory procession.' 
    },
    { 
      id: 'idiom_914', 
      phrase: 'Rock the boat', 
      meaning_en: 'To disrupt a stable, comfortable situation by causing trouble or introducing a controversial change', 
      meaning_hi: 'चलती हुई शांत व्यवस्था में व्यवधान या विवाद खड़ा करना', 
      example: 'Everyone is happy with the current schedule, so please don\'t rock the boat by asking for shifts.', 
      note: 'Refers to unbalancing a small water boat by making sudden, unnecessary movements.' 
    },
    { 
      id: 'idiom_915', 
      phrase: 'Save your breath', 
      meaning_en: 'To stop wasting your time and energy trying to convince someone who will never change their mind', 
      meaning_hi: 'अपनी जुबान या ऊर्जा व्यर्थ न करना', 
      example: 'Save your breath; he is too stubborn to listen to any logical explanations anyway.', 
      note: 'Advises against talking when the outcome cannot be altered.' 
    },
    { 
      id: 'idiom_916', 
      phrase: 'See which way the wind blows', 
      meaning_en: 'To wait patiently for a situation to develop before making a final decision', 
      meaning_hi: 'हवा का रुख देखना / परिस्थिति को भांपना', 
      example: 'Instead of investing now, let\'s see which way the wind blows after the elections.', 
      note: 'A nautical and agricultural practice of checking wind direction before taking action.' 
    },
    { 
      id: 'idiom_917', 
      phrase: 'Sit on the fence', 
      meaning_en: 'Remaining completely neutral, indecisive, or refusing to choose a side in an argument', 
      meaning_hi: 'तटस्थ रहना / किसी भी पक्ष का समर्थन न करना', 
      example: 'You can\'t sit on the fence forever; you have to choose which department you support.', 
      note: 'Visualizes someone sitting directly on top of a boundary divider instead of stepping to one side.' 
    },
    { 
      id: 'idiom_918', 
      phrase: 'Skeleton in the closet', 
      meaning_en: 'A shocking, deeply embarrassing, or scandalous secret from the past kept hidden from the public', 
      meaning_hi: 'कोई पुराना शर्मनाक या छुपा हुआ गहरा राज', 
      example: 'The famous politician had a major skeleton in the closet involving tax fraud.', 
      note: 'Metaphorical reference to hiding a dark, physical proof of wrongdoing away from sight.' 
    },
    { 
      id: 'idiom_919', 
      phrase: 'Speak of the devil', 
      meaning_en: 'A phrase used when the specific person you were just talking about unexpectedly appears', 
      meaning_hi: 'नाम लिया और हाजिर / शैतान का नाम लिया और शैतान हाजिर', 
      example: 'Did you hear what Priya said? Oh, speak of the devil, here she comes!', 
      note: 'From an old proverb warning that speaking of evil forces would summon them.' 
    },
    { 
      id: 'idiom_920', 
      phrase: 'Steal someone\'s thunder', 
      meaning_en: 'To take the attention, praise, or credit away from someone else\'s achievement by doing it first', 
      meaning_hi: 'किसी और की वाहवाही या श्रेय खुद लूट लेना', 
      example: 'My sister stole my thunder by announcing her engagement right during my graduation party.', 
      note: 'Originated from a 18th-century playwright whose custom sound-effect method was copied by a rival.' 
    }
  ]
},
'Set 47': {
  setNumber: 47,
  range: '921–940',
  intro: 'Financial states, communication deadlocks, aur interpersonal priorities is set ke core concepts hain.',
  idioms: [
    { 
      id: 'idiom_921', 
      phrase: 'Straight from the horse\'s mouth', 
      meaning_en: 'Hearing information directly from the highest, most authoritative source', 
      meaning_hi: 'विश्वसनीय या सीधे मूल स्रोत से जानकारी मिलना', 
      example: 'I know the company is expanding because I heard it straight from the horse\'s mouth—the CEO.', 
      note: 'From horse racing circles where evaluating a horse\'s age via its teeth was the only reliable proof.' 
    },
    { 
      id: 'idiom_922', 
      phrase: 'Take forty winks', 
      meaning_en: 'To take a very short, refreshing nap or sleep during the daytime', 
      meaning_hi: 'दिन के समय झपकी लेना', 
      example: 'After a heavy lunch, he usually likes to take forty winks before returning to his desk.', 
      note: 'A colloquial way of quantifying a brief resting period.' 
    },
    { 
      id: 'idiom_923', 
      phrase: 'The elephant in the room', 
      meaning_en: 'An obvious, massive problem or controversial issue that everyone knows about but refuses to discuss', 
      meaning_hi: 'एक ऐसी बड़ी समस्या जिसके बारे में कोई बात नहीं करना चाहता', 
      example: 'No one wanted to talk about the massive budget cuts, which was the elephant in the room.', 
      note: 'Highlights the awkwardness of avoiding an impossible-to-miss reality.' 
    },
    { 
      id: 'idiom_924', 
      phrase: 'Throw caution to the wind', 
      meaning_en: 'To act completely recklessly, taking immense risks without worrying about the dangerous outcomes', 
      meaning_hi: 'सारी परवाह छोड़ कर बड़ा खतरा मोल लेना', 
      example: 'He threw caution to the wind, quit his stable corporate job, and invested everything in a startup.', 
      note: 'Metaphor for casting protective worries away like useless dust.' 
    },
    { 
      id: 'idiom_925', 
      phrase: 'Tie the knot', 
      meaning_en: 'To get married in a formal ceremony', 
      meaning_hi: 'शादी के बंधन में बंधना / विवाह करना', 
      example: 'The young couple finally decided to tie the knot after dating for nearly six years.', 
      note: 'Derived from ancient marriage customs involving physically binding the couple\'s hands together.' 
    },
    { 
      id: 'idiom_926', 
      phrase: 'Time flies', 
      meaning_en: 'A phrase used to express how quickly time seems to pass by without us noticing', 
      meaning_hi: 'समय का तेजी से बीत जाना (समय को पंख लग जाना)', 
      example: 'It feels like we just arrived here, but it\'s already midnight; time flies!', 
      note: 'From the Latin phrase "tempus fugit."' 
    },
    { 
      id: 'idiom_927', 
      phrase: 'To be in the driving seat', 
      meaning_en: 'To be in complete control of a situation, project, or organization', 
      meaning_hi: 'स्थिति पर पूर्ण नियंत्रण होना / नेतृत्व संभालना', 
      example: 'With the veteran director in the driving seat, the film production went completely smooth.', 
      note: 'Vehicle control metaphor applied to management.' 
    },
    { 
      id: 'idiom_928', 
      phrase: 'To catch someone red-handed', 
      meaning_en: 'To discover or catch someone in the middle of committing a crime or doing something wrong', 
      meaning_hi: 'रंगे हाथों पकड़ना / अपराध करते हुए पकड़ना', 
      example: 'The security guards caught the shoplifter red-handed as he was stuffing items into his coat.', 
      note: 'Historically from ancient laws where a poacher had to be caught with actual blood on their hands.' 
    },
    { 
      id: 'idiom_929', 
      phrase: 'To give someone the cold shoulder', 
      meaning_en: 'To deliberately ignore, treat coldly, or be unfriendly to someone you know', 
      meaning_hi: 'जानबूझकर उपेक्षा करना / बेरुखी दिखाना', 
      example: 'After their massive argument, she gave him the cold shoulder all through the dinner party.', 
      note: 'From a medieval custom of serving an unwelcome guest a cold cut of meat rather than a warm meal.' 
    },
    { 
      id: 'idiom_930', 
      phrase: 'To grease someone\'s palm', 
      meaning_en: 'To secretly bribe someone in order to get a favor or speed up a bureaucratic process', 
      meaning_hi: 'रिश्वत देना / चांदी का जूता मारना', 
      example: 'He had to grease the clerk\'s palm to get his building permit approved without delays.', 
      note: 'A crude metaphor for making a transaction smooth using money like a lubricant.' 
    },
    { 
      id: 'idiom_931', 
      phrase: 'To add insult to injury', 
      meaning_en: 'To make an already bad or painful situation even worse by adding an offensive or humiliating action', 
      meaning_hi: 'जले पर नमक छिड़कना', 
      example: 'They fired him from the job, and to add insult to injury, they refused to pay his last week\'s travel allowance.', 
      note: 'Dating back to ancient fables where a fly bites a wound, increasing the pain.' 
    },
    { 
      id: 'idiom_932', 
      phrase: 'Water under the bridge', 
      meaning_en: 'Past problems, events, or arguments that have been forgiven, forgotten, and can no longer be changed', 
      meaning_hi: 'बीती बातें / पुरानी बातें जिन्हें भुला दिया गया हो', 
      example: 'We had our differences in high school, but that is all water under the bridge now.', 
      note: 'Visualizes water flowing away down a river, never to return.' 
    },
    { 
      id: 'idiom_933', 
      phrase: 'Wear one\'s heart on one\'s sleeve', 
      meaning_en: 'To show your intimate feelings, vulnerabilities, and emotions openly instead of hiding them', 
      meaning_hi: 'अपने जज्बातों को सरेआम जाहिर करना / दिल की बात छुपा न पाना', 
      example: 'You always know when he is upset because he wears his heart on his sleeve.', 
      note: 'From medieval jousting tournaments where knights wore a lady’s token on their arm armor.' 
    },
    { 
      id: 'idiom_934', 
      phrase: 'Weather the storm', 
      meaning_en: 'To successfully survive or endure a highly difficult, challenging period without being ruined', 
      meaning_hi: 'मुश्किल परिस्थिति का सामना करके सुरक्षित बाहर निकलना', 
      example: 'The retail industry managed to weather the economic storm by moving sales online.', 
      note: 'A nautical term for a ship handling rough sea winds safely.' 
    },
    { 
      id: 'idiom_935', 
      phrase: 'When pigs fly', 
      meaning_en: 'An ironic phrase used to say that something is absolutely impossible and will never happen', 
      meaning_hi: 'जो कभी नहीं हो सकता (नौ दिन चले अढ़ाई कोस या असंभव बात)', 
      example: 'He promises to pay back the borrowed money tomorrow, but yes, when pigs fly!', 
      note: 'Using a ridiculous, unnatural image to mock unrealistic claims.' 
    },
    { 
      id: 'idiom_936', 
      phrase: 'With a heavy heart', 
      meaning_en: 'Doing or saying something while feeling an immense amount of sadness, grief, or regret', 
      meaning_hi: 'दुखी मन से / भारी मन से', 
      example: 'With a heavy heart, the principal announced the permanent closure of the historical school.', 
      note: 'Associates extreme sorrow with physical weight in the chest.' 
    },
    { 
      id: 'idiom_937', 
      phrase: 'Wolf in sheep\'s clothing', 
      meaning_en: 'A dangerous, malicious, or dishonest person who pretends to be harmless, kind, and friendly', 
      meaning_hi: 'बगुला भगत / कपटी मित्र (भेड़ की खाल में भेड़िया)', 
      example: 'Be careful of that sweet advisor; he is a wolf in sheep\'s clothing out to take your money.', 
      note: 'Derived from ancient biblical parables and Aesop’s fables.' 
    },
    { 
      id: 'idiom_938', 
      phrase: 'Wouldn\'t be caught dead', 
      meaning_en: 'Disliking something intensely so much that you would be completely embarrassed to ever be seen doing it', 
      meaning_hi: 'किसी काम को करने में अत्यंत शर्मिंदगी महसूस करना (कभी न करना)', 
      example: 'I wouldn\'t be caught dead wearing such an ugly, outdated neon tracksuit to a corporate function.', 
      note: 'An extreme hyperbole emphasizing profound aversion.' 
    },
    { 
      id: 'idiom_939', 
      phrase: 'You can\'t judge a book by its cover', 
      meaning_en: 'You should not form an opinion on the true value or character of something based purely on appearances', 
      meaning_hi: 'बाहरी रूप-रंग से किसी के आंतरिक गुणों का अंदाजा नहीं लगाया जा सकता', 
      example: 'The hotel looked rundown from outside, but inside it was luxury; you can\'t judge a book by its cover.', 
      note: 'A reminder that packaging can be highly deceptive.' 
    },
    { 
      id: 'idiom_940', 
      phrase: 'Zero tolerance', 
      meaning_en: 'A policy of punishing all breaches of a rule immediately, severely, and without any exceptions', 
      meaning_hi: 'पूर्ण निषेध नीति / किसी भी गलती को बर्दाश्त न करना', 
      example: 'Our corporate office has a policy of zero tolerance toward workplace bullying or harassment.', 
      note: 'An unyielding stance on discipline.' 
    }
  ]
},
'Set 48': {
  setNumber: 48,
  range: '941–960',
  intro: 'Social pressure tactics, deceptive behaviors, aur core survival instincts is set ka standard scale hain.',
  idioms: [
    { 
      id: 'idiom_941', 
      phrase: 'Behind closed doors', 
      meaning_en: 'Taking place in absolute privacy, secrecy, and away from public knowledge or observation', 
      meaning_hi: 'गुप्त रूप से / बंद कमरों में', 
      example: 'The board of directors made the decision to sell off the company branches behind closed doors.', 
      note: 'Refers to meetings intentionally closed off to the press and public.' 
    },
    { 
      id: 'idiom_942', 
      phrase: 'Blow one\'s own trumpet', 
      meaning_en: 'To boast loudly or talk proudly about your own achievements, talents, or successes', 
      meaning_hi: 'अपने मुंह मियां मिट्ठू बनना / खुद की तारीफ खुद करना', 
      example: 'No one likes working with him because he is always blowing his own trumpet during coffee breaks.', 
      note: 'Derived from ancient heralds sounding horns to announce kings or people of high rank.' 
    },
    { 
      id: 'idiom_943', 
      phrase: 'Bone of contention', 
      meaning_en: 'A core issue, subject, or dispute that causes ongoing, bitter disagreement between people', 
      meaning_hi: 'झगड़े की जड़ / फसाद की वजह', 
      example: 'The ancestral property division has been a major bone of contention between the two brothers.', 
      note: 'Image of two dogs aggressively fighting over a single dry bone.' 
    },
    { 
      id: 'idiom_944', 
      phrase: 'Bring home the bacon', 
      meaning_en: 'To earn the primary income or money to support and provide for your household', 
      meaning_hi: 'घर का खर्च चलाने के लिए आजीविका कमाना', 
      example: 'Ever since his father retired from service, he has been working two jobs to bring home the bacon.', 
      note: 'From old country fairs where winning a greased pig competition meant bringing food home.' 
    },
    { 
      id: 'idiom_945', 
      phrase: 'Burn bridges', 
      meaning_en: 'To destroy relationships, paths, or connections permanently, leaving you with no way to go back', 
      meaning_hi: 'वापसी के सारे रास्ते बंद कर देना / रिश्ते हमेशा के लिए खत्म कर लेना', 
      example: 'Don\'t insult your boss when you quit; it is never a wise strategy to burn your bridges.', 
      note: 'Military origin where an advancing army burned structures behind them to prevent retreat.' 
    },
    { 
      id: 'idiom_946', 
      phrase: 'By leaps and bounds', 
      meaning_en: 'Progressing or changing at an incredibly rapid, astonishing pace', 
      meaning_hi: 'दिन दूनी रात चौगुनी / बहुत तेजी से प्रगति करना', 
      example: 'The software startup\'s user base is growing by leaps and bounds every single month.', 
      note: 'Indicates geometric or massive visible progress.' 
    },
    { 
      id: 'idiom_947', 
      phrase: 'Call a spade a spade', 
      meaning_en: 'To speak completely bluntly, directly, and truthfully about something, even if it is rude', 
      meaning_hi: 'साफ-साफ कहना / खरी-खरी सुनाना', 
      example: 'Let\'s call a spade a spade: the current product design is an absolute failure.', 
      note: 'Refers to using direct, unembellished terms for basic tools.' 
    },
    { 
      id: 'idiom_948', 
      phrase: 'Chew the fat', 
      meaning_en: 'To have a long, casual, and friendly chat with someone about unimportant everyday things', 
      meaning_hi: 'आराम से बैठकर लंबी अनौपचारिक बातचीत या गपशप करना', 
      example: 'We sat on the front porch for hours just chewing the fat about our old high school adventures.', 
      note: 'Possibly from sailors or farmers chewing on tough pork fat while talking at leisure.' 
    },
    { 
      id: 'idiom_949', 
      phrase: 'Chink in one\'s armor', 
      meaning_en: 'A minor but critical vulnerability or weakness in an otherwise strong character or system', 
      meaning_hi: 'कच्चा पहलू / किसी मजबूत व्यवस्था की इकलौती कमजोरी', 
      example: 'His short temper is the only real chink in his armor as an otherwise brilliant corporate executive.', 
      note: 'Refers to a physical gap or crack in a knight\'s protective metal suit.' 
    },
    { 
      id: 'idiom_950', 
      phrase: 'Close shave', 
      meaning_en: 'A very narrow escape from a dangerous accident, disaster, or complete failure', 
      meaning_hi: 'बाल-बाल बचना', 
      example: 'The speeding truck missed our car by inches; that was an incredibly close shave.', 
      note: 'Refers to a razor blade passing incredibly close to the skin without cutting it.' 
    },
    { 
      id: 'idiom_951', 
      phrase: 'Crocodile tears', 
      meaning_en: 'A false, insincere display of grief, sadness, or regret by a hypocritical person', 
      meaning_hi: 'घड़ियाली आंसू / दिखावटी सहानुभूति', 
      example: 'The corrupt politician shed crocodile tears for the poor factory workers during his televised speech.', 
      note: 'Based on an ancient myth that crocodiles weep tears while consuming their prey.' 
    },
    { 
      id: 'idiom_952', 
      phrase: 'Curiosity killed the cat', 
      meaning_en: 'A warning phrase telling someone to stop poking around or asking questions about unnecessary matters', 
      meaning_hi: 'ज्यादा उत्सुकता या दूसरों के मामले में दखल देना नुकसानदेह हो सकता है', 
      example: 'Don\'t try to open that locked storage drawer; remember that curiosity killed the cat.', 
      note: 'Highlights how unnecessary experimentation can lead to unwanted trouble.' 
    },
    { 
      id: 'idiom_953', 
      phrase: 'Dark horse', 
      meaning_en: 'A contestant, candidate, or team whose true abilities are unknown but who wins unexpectedly', 
      meaning_hi: 'छुपा रुस्तम / अप्रत्याशित रूप से जीतने वाला', 
      example: 'Nobody expected the local club to win the national chess cup, but they proved to be a dark horse.', 
      note: 'From horse racing where an unknown horse’s form is kept hidden from bettors.' 
    },
    { 
      id: 'idiom_954', 
      phrase: 'Don\'t put all your eggs in one basket', 
      meaning_en: 'Do not risk all your resources, money, or efforts on a single plan, venture, or investment', 
      meaning_hi: 'एक ही जगह अपना सारा दांव या पूंजी न लगाना', 
      example: 'Spread your investments across stocks and gold; don\'t put all your eggs in one basket.', 
      note: 'Warns that if the single basket drops, everything is broken and lost at once.' 
    },
    { 
      id: 'idiom_955', 
      phrase: 'Down to earth', 
      meaning_en: 'Practical, realistic, humble, and completely unpretentious in attitude', 
      meaning_hi: 'व्यावहारिक और विनम्र होना (जमीन से जुड़ा होना)', 
      example: 'Despite becoming a billionaire tech icon, she remains incredibly down to earth and friendly.', 
      note: 'Contrasts a realistic mindset with having one\'s head lost in the clouds.' 
    },
    { 
      id: 'idiom_956', 
      phrase: 'Drive someone up the wall', 
      meaning_en: 'To annoy, irritate, or make someone completely frustrated and angry', 
      meaning_hi: 'किसी को बहुत ज्यादा परेशान या चिढ़ाना (नाक में दम करना)', 
      example: 'The loud, non-stop drilling noise from the next-door apartment is driving me up the wall.', 
      note: 'Metaphorical for being driven crazy enough to want to scale a wall to escape.' 
    },
    { 
      id: 'idiom_957', 
      phrase: 'Feather in one\'s cap', 
      meaning_en: 'An honor, achievement, or distinction that you can be immensely proud of', 
      meaning_hi: 'शानदार उपलब्धि / चार चांद लगाना (टोपी में पंख लगना)', 
      example: 'Winning the prestigious international design award was another great feather in her cap.', 
      note: 'From old warrior customs of adding a physical feather to headgear for every enemy defeated.' 
    },
    { 
      id: 'idiom_958', 
      phrase: 'Fish out of water', 
      meaning_en: 'Feeling intensely uncomfortable, awkward, and out of place in an unfamiliar environment', 
      meaning_hi: 'असहज महसूस करना / अपने क्षेत्र से बाहर होना', 
      example: 'As a quiet academic attending a wild Hollywood celebrity party, I felt like a fish out of water.', 
      note: 'Compares human discomfort to a fish physically removed from its vital element.' 
    },
    { 
      id: 'idiom_959', 
      phrase: 'Fit as a fiddle', 
      meaning_en: 'Being in perfect, excellent physical health, energy, and condition', 
      meaning_hi: 'हट्टा-कट्टा होना / पूरी तरह से स्वस्थ होना', 
      example: 'My grandfather exercises every morning and is as fit as a fiddle even at eighty.', 
      note: 'Originally meant "fit" in the sense of being appropriate or well-tuned like a musical instrument.' 
    },
    { 
      id: 'idiom_960', 
      phrase: 'Fly off the handle', 
      meaning_en: 'To lose one\'s temper completely and explode in sudden, uncontrolled anger over a minor thing', 
      meaning_hi: 'अचानक आपा खो बैठना / अत्यधिक क्रोधित होना', 
      example: 'He is under so much pressure that he will fly off the handle if you ask a simple question.', 
      note: 'From an old axe head flying off its wooden handle when swung too aggressively.' 
    }
  ]
},
'Set 49': {
  setNumber: 49,
  range: '961–980',
  intro: 'Social faux pas, structural basics, aur operational adjustments represents this group.',
  idioms: [
    { 
      id: 'idiom_961', 
      phrase: 'Follow in someone\'s footsteps', 
      meaning_en: 'To do the exact same job, profession, or live life in the same way as someone before you', 
      meaning_hi: 'किसी के पदचिह्नों पर चलना / उनके जैसा काम करना', 
      example: 'She decided to follow in her mother\'s footsteps and became a pediatric surgeon.', 
      note: 'Visualizes walking along a path cleared by a predecessor.' 
    },
    { 
      id: 'idiom_962', 
      phrase: 'Get cold feet', 
      meaning_en: 'To feel sudden panic or doubt that stops you from completing a big planned action', 
      meaning_hi: 'घबराहट के कारण पीछे हट जाना', 
      example: 'He wanted to do the bungee jump, but got cold feet right when he reached the platform edge.', 
      note: 'Repetition in usage variants emphasizing physical paralysis due to psychological fear.' 
    },
    { 
      id: 'idiom_963', 
      phrase: 'Gift of the gab', 
      meaning_en: 'The natural talent to speak easily, confidently, and persuasively to influence people', 
      meaning_hi: 'भाषण कला में निपुण होना / बात करने की अनोखी कला', 
      example: 'As a successful car salesman, Amit definitely possesses the true gift of the gab.', 
      note: 'Often tied to Irish folklore and kissing the Blarney Stone to gain eloquence.' 
    },
    { 
      id: 'idiom_964', 
      phrase: 'Give the benefit of the doubt', 
      meaning_en: 'To choose to believe someone\'s good intentions because you have no definitive proof otherwise', 
      meaning_hi: 'बिना सबूत के किसी की बात पर विश्वास कर लेना / संदेह का लाभ देना', 
      example: 'He arrived late again, but let\'s give him the benefit of the doubt; traffic was terrible.', 
      note: 'Legal concept adapted into regular polite social conversation.' 
    },
    { 
      id: 'idiom_965', 
      phrase: 'Go the extra mile', 
      meaning_en: 'To make a special effort or do much more than what is strictly required of you', 
      meaning_hi: 'उम्मीद से बढ़कर या विशेष प्रयास करना', 
      example: 'Our luxury hotel host went the extra mile and drove us to the clinic when I fell ill.', 
      note: 'Derived from ancient Roman laws where citizens could be forced to carry soldier gear for a mile.' 
    },
    { 
      id: 'idiom_966', 
      phrase: 'Green-eyed monster', 
      meaning_en: 'A literary term representing extreme jealousy or envy', 
      meaning_hi: 'ईर्ष्या या जलन की भावना', 
      example: 'When his colleague got the brand-new corner office, the green-eyed monster appeared.', 
      note: 'Coined by Shakespeare in Othello to describe how jealousy devours a person.' 
    },
    { 
      id: 'idiom_967', 
      phrase: 'Hear it on the grapevine', 
      meaning_en: 'To learn about some news or rumors through casual, informal gossip or hearsay', 
      meaning_hi: 'अफवाहों के जरिए कोई खबर सुनना', 
      example: 'I heard it on the grapevine that our manager is planning to resign next month.', 
      note: 'From the chaotic appearance of early telegraph lines that looked like tangled grape vines.' 
    },
    { 
      id: 'idiom_968', 
      phrase: 'Hit the sack', 
      meaning_en: 'To go to bed in order to sleep because you are exhausted', 
      meaning_hi: 'सोने जाना', 
      example: 'I am incredibly exhausted after that long flight, so I am going to hit the sack early.', 
      note: 'From old military days when soldiers slept on canvas bags stuffed with straw.' 
    },
    { 
      id: 'idiom_969', 
      phrase: 'In hot water', 
      meaning_en: 'To be in serious trouble, facing severe anger, criticism, or official reprimands', 
      meaning_hi: 'बड़ी मुसीबत या परेशानी में होना', 
      example: 'He found himself in hot water with tax authorities after failing to declare his extra income.', 
      note: 'Metaphor for being placed in a painful, scalding situation.' 
    },
    { 
      id: 'idiom_970', 
      phrase: 'In the nick of time', 
      meaning_en: 'Happening at the absolute last possible moment right before it is too late', 
      meaning_hi: 'बिल्कुल ठीक समय पर / अंतिम क्षण में', 
      example: 'The ambulance arrived in the nick of time and managed to stabilize the cardiac patient.', 
      note: 'From an old custom of carving "nicks" or notches on sticks to keep track of precise score or time.' 
    },
    { 
      id: 'idiom_971', 
      phrase: 'Keep an eye on', 
      meaning_en: 'To watch, monitor, or look after someone or something carefully', 
      meaning_hi: 'कड़ी नजर रखना / देखभाल करना', 
      example: 'Please keep an eye on my luggage while I go to the restroom at the terminal.', 
      note: 'An instruction for sustained visual vigilance.' 
    },
    { 
      id: 'idiom_972', 
      phrase: 'Keep body and soul together', 
      meaning_en: 'To manage to earn just enough money or find food to stay alive and survive severe poverty', 
      meaning_hi: 'जैसे-तैसे केवल अपना अस्तित्व बनाए रखना / पेट पालना', 
      example: 'During the economic depression, his meager wages could barely keep body and soul together.', 
      note: 'Refers to preventing death, which is seen as the separation of spirit from the physical frame.' 
    },
    { 
      id: 'idiom_973', 
      phrase: 'Kill two birds with one stone', 
      meaning_en: 'To achieve two separate useful results or accomplish two goals using just a single action', 
      meaning_hi: 'एक पंथ दो काज / एक तीर से दो शिकार', 
      example: 'By cycling to the office, I kill two birds with one stone: I save money and get my daily workout.', 
      note: 'Highlights extreme efficiency in planning.' 
    },
    { 
      id: 'idiom_974', 
      phrase: 'Live from hand to mouth', 
      meaning_en: 'To survive with barely enough money or food to satisfy immediate daily needs without savings', 
      meaning_hi: 'कंगाली में दिन काटना / केवल रोज की जरूरतों के लायक कमाना', 
      example: 'The poor laborer lives from hand to mouth, spending his daily wages on food each evening.', 
      note: 'Depicts a state where food goes directly from the hand that found it straight into the mouth.' 
    },
    { 
      id: 'idiom_975', 
      phrase: 'Look before you leap', 
      meaning_en: 'A warning to consider the potential dangers or consequences carefully before making a major choice', 
      meaning_hi: 'बिना विचारे जो करे सो पाछे पछताय / सोच-समझकर कदम उठाना', 
      example: 'Think carefully before investing your life savings; always look before you leap.', 
      note: 'Advises verifying safe landing ground before making a physical or metaphorical jump.' 
    },
    { 
      id: 'idiom_976', 
      phrase: 'Make mountains out of molehills', 
      meaning_en: 'To exaggerate a tiny, insignificant problem and treat it like a massive disaster', 
      meaning_hi: 'राई का पहाड़ बनाना / छोटी सी बात को बहुत बड़ा बनाना', 
      example: 'It was just a tiny typo in the internal draft; stop making mountains out of molehills.', 
      note: 'Contrasts a tiny dirt pile made by a burrowing mole with a massive natural peak.' 
    },
    { 
      id: 'idiom_977', 
      phrase: 'Man of straw', 
      meaning_en: 'A person who has a weak character, no real financial means, or a fake argument set up to be easily defeated', 
      meaning_hi: 'कमजोर चरित्र वाला व्यक्ति / जिसका कोई वजूद न हो', 
      example: 'He acts like a powerful business mogul, but when the debt collectors arrived, he proved to be a man of straw.', 
      note: 'Derived from stuffing scarecrows with dry grass, offering no actual physical resistance.' 
    },
    { 
      id: 'idiom_978', 
      phrase: 'Nip it in the bud', 
      meaning_en: 'To stop a bad situation, problem, or habit at its earliest stage before it can grow into a crisis', 
      meaning_hi: 'शुरुआत में ही कुचल देना / बुराई को प्रारंभ में ही समाप्त करना', 
      example: 'We must nip this corporate insubordination in the bud before it ruins team morale completely.', 
      note: 'A gardening term for cutting away a bad plant bud before it blooms into an unmanageable weed.' 
    },
    { 
      id: 'idiom_979', 
      phrase: 'No love lost between', 
      meaning_en: 'Mutual dislike, animosity, or bad relations between two specific people or groups', 
      meaning_hi: 'आपसी तालमेल बिल्कुल न होना / कड़वाहट होना', 
      example: 'There is no love lost between the two political rivals; they refuse to sit in the same room.', 
      note: 'Implies that no affection ever existed between them, so none could be wasted or lost.' 
    },
    { 
      id: 'idiom_980', 
      phrase: 'Not my cup of tea', 
      meaning_en: 'Something that does not align with your personal tastes, preferences, or interests', 
      meaning_hi: 'पसंद का न होना / अपने बस की बात न होना', 
      example: 'Thanks for inviting me to the heavy metal rock concert, but it is really not my cup of tea.', 
      note: 'A traditional British standard for defining individual preferences.' 
    }
  ]
},
'Set 50': {
  setNumber: 50,
  range: '981–1000',
  intro: 'Strategic closures, high-stakes trade-offs, aur structural milestones completed values is milestone set ka framework hain.',
  idioms: [
    { 
      id: 'idiom_981', 
      phrase: 'Over the top', 
      meaning_en: 'Actions that are extremely exaggerated, excessive, dramatic, or inappropriate for the situation', 
      meaning_hi: 'बहुत ज्यादा बढ़ा-चढ़ाकर करना / मर्यादा के पार', 
      example: 'Her glittering neon outfit with huge feathers was a bit over the top for a casual lunch.', 
      note: 'Originally a grim military phrase for soldiers climbing out of trenches in World War I.' 
    },
    { 
      id: 'idiom_982', 
      phrase: 'Pass the buck', 
      meaning_en: 'To shift the blame or responsibility for a mistake onto someone else to avoid trouble', 
      meaning_hi: 'अपनी जिम्मेदारी या दोष दूसरों पर मढ़ देना', 
      example: 'When the project failed, the manager tried to pass the buck to his junior designers.', 
      note: 'From frontier poker games where a marker (buck) was passed to show whose turn it was to deal.' 
    },
    { 
      id: 'idiom_983', 
      phrase: 'Pay through the nose', 
      meaning_en: 'To pay an unreasonably high, excessive, or exorbitant amount of money for something', 
      meaning_hi: 'बहुत भारी कीमत चुकाना / बहुत महंगा दाम देना', 
      example: 'We had to pay through the nose for a basic hotel room because of the tourist season rush.', 
      note: 'Likely from historical Viking taxes where non-payers suffered severe facial mutilation.' 
    },
    { 
      id: 'idiom_984', 
      phrase: 'Put your foot down', 
      meaning_en: 'To use your authority firmly to stop something from happening or to demand compliance', 
      meaning_hi: 'कड़ाई से विरोध करना / दृढ़ता से अपनी बात रखना', 
      example: 'The father put his foot down and refused to let his teenage son stay out past midnight.', 
      note: 'Metaphor for pushing down hard on a vehicle brake or establishing a firm physical stance.' 
    },
    { 
      id: 'idiom_985', 
      phrase: 'Read between the lines', 
      meaning_en: 'To discover a hidden, implied meaning that is not stated openly in the actual words', 
      meaning_hi: 'छिपे हुए अर्थ को समझना / बिना कहे बात को भांपना', 
      example: 'Reading between the lines of his resignation note, it is clear he was forced to leave.', 
      note: 'Derived from cryptography where secret messages were hidden using invisible ink between lines.' 
    },
    { 
      id: 'idiom_986', 
      phrase: 'Rule of thumb', 
      meaning_en: 'A broad, practical, and general guideline based on experience rather than precise science', 
      meaning_hi: 'एक व्यावहारिक नियम जो अनुभव पर आधारित हो', 
      example: 'As a general rule of thumb, you should save at least twenty percent of your monthly salary.', 
      note: 'From old craftsmen who used their physical thumb width as a rough measurement tool.' 
    },
    { 
      id: 'idiom_987', 
      phrase: 'See red', 
      meaning_en: 'To become suddenly, intensely, and uncontrollably angry', 
      meaning_hi: 'अत्यधिक क्रोधित होना / गुस्से से लाल होना', 
      example: 'I saw red when I found out that he had deliberately lied to my face about the money.', 
      note: 'Based on the traditional belief that bulls get provoked into a fury by a matador\'s red cape.' 
    },
    { 
      id: 'idiom_988', 
      phrase: 'Smell a rat', 
      meaning_en: 'To suspect that something dishonest, deceptive, or treacherous is happening behind your back', 
      meaning_hi: 'दाल में कुछ काला लगना / संदेह होना', 
      example: 'When they asked for my banking password over a casual text, I immediately smelled a rat.', 
      note: 'Refers to hunting dogs or cats detecting the hidden, unpleasant scent of an uninvited pest.' 
    },
    { 
      id: 'idiom_989', 
      phrase: 'Take the bull by the horns', 
      meaning_en: 'To confront a terrifying, difficult problem directly and with complete courage', 
      meaning_hi: 'मुसीबत का डटकर मुकाबला करना / साहसपूर्वक सामना करना', 
      example: 'Instead of avoiding the conflict, she took the bull by the horns and spoke to her landlord.', 
      note: 'A vivid image of a rancher physically grabbing a charging animal to regain control.' 
    },
    { 
      id: 'idiom_990', 
      phrase: 'Take with a pinch of salt', 
      meaning_en: 'To approach a claim or news with caution and healthy skepticism', 
      meaning_hi: 'पूरी तरह सच न मानते हुए संदेह रखना', 
      example: 'His dramatic traveling stories should always be taken with a pinch of salt.', 
      note: 'A slight linguistic variant of "grain of salt" widely used across various dictionaries.' 
    },
    { 
      id: 'idiom_991', 
      phrase: 'The icing on the cake', 
      meaning_en: 'An extra special feature or advantage that makes an already excellent situation even better', 
      meaning_hi: 'सोने पर सुहागा / किसी अच्छी चीज को और बेहतर बनाना', 
      example: 'Getting the job was great, but the free company car was the real icing on the cake.', 
      note: 'Refers to decorative sugar frosting layered onto a baked cake that is already delicious.' 
    },
    { 
      id: 'idiom_992', 
      phrase: 'Turn a blind eye', 
      meaning_en: 'To deliberately pretend not to notice something wrong, illegal, or unethical that is happening', 
      meaning_hi: 'जानबूझकर अनदेखा करना / आंखें मूंद लेना', 
      example: 'The security warden turned a blind eye when the students smuggled snacks into the hall.', 
      note: 'Famously attributed to Admiral Nelson holding his telescope up to his blind eye to ignore a signal.' 
    },
    { 
      id: 'idiom_993', 
      phrase: 'Up in the air', 
      meaning_en: 'An issue or plan that is completely undecided, uncertain, or unresolved', 
      meaning_hi: 'अनिश्चित होना / जिसका फैसला अभी अधर में लटका हो', 
      example: 'Our international holiday plans are still up in the air due to the pending visa approvals.', 
      note: 'Visualizes objects floating without landing on solid ground.' 
    },
    { 
      id: 'idiom_994', 
      phrase: 'Walking on thin ice', 
      meaning_en: 'Taking a massive, dangerous risk that could easily lead to total disaster or punishment', 
      meaning_hi: 'जोखिम भरा काम करना / खतरे के साए में होना', 
      example: 'You are walking on thin ice by showing up late to work three days in a single week.', 
      note: 'From the physical danger of walking on weak frozen sheets of winter water.' 
    },
    { 
      id: 'idiom_995', 
      phrase: 'A blessing in disguise', 
      meaning_en: 'An unfortunate event or setback that eventually results in a highly positive outcome', 
      meaning_hi: 'आपत्ति के रूप में वरदान / शुरुआती नुकसान जो बाद में वरदान साबित हो', 
      example: 'Losing that old job was a blessing in disguise because it led me to start my own firm.', 
      note: 'Highlights how bad fortunes can hide unexpected fortunes.' 
    },
    { 
      id: 'idiom_996', 
      phrase: 'Beat around the bush', 
      meaning_en: 'To avoid speaking directly about the main topic because it is uncomfortable or difficult', 
      meaning_hi: 'इधर-उधर की बातें करना / मुख्य बात पर न आना', 
      example: 'Stop beating around the bush and tell me exactly how much money you need.', 
      note: 'From historical hunting where assistants beat bushes to scare birds out rather than hitting them directly.' 
    },
    { 
      id: 'idiom_997', 
      phrase: 'Bite off more than you can chew', 
      meaning_en: 'To take on a commitment, task, or responsibility that is far too big or difficult for you to handle', 
      meaning_hi: 'अपनी क्षमता से अधिक काम की जिम्मेदारी उठा लेना (जितनी चादर हो उतना पैर न फैलाना)', 
      example: 'By managing three huge software projects at once, he bit off more than he could chew.', 
      note: 'A warning against greed or overestimating your physical/mental capabilities.' 
    },
    { 
      id: 'idiom_998', 
      phrase: 'Burn the candle at both ends', 
      meaning_en: 'To exhaust yourself physically and mentally by waking up early and sleeping late to work', 
      meaning_hi: 'अपनी ऊर्जा को अत्यधिक काम करके नष्ट करना / देर रात और सुबह लगकर काम करना', 
      example: 'With university classes by day and a job by night, she is burning the candle at both ends.', 
      note: 'Metaphor for consuming your life resource twice as fast as normal.' 
    },
    { 
      id: 'idiom_999', 
      phrase: 'Best of both worlds', 
      meaning_en: 'A situation where you can enjoy the advantages of two entirely different opportunities at once', 
      meaning_hi: 'दोनों हाथों में लड्डू होना / दो अलग-अलग परिस्थितियों का पूरा लाभ मिलना', 
      example: 'Living in a quiet suburb while working in the nearby metropolis gives him the best of both worlds.', 
      note: 'Refers to balancing conflicting structural benefits perfectly.' 
    },
    { 
      id: 'idiom_1000', 
      phrase: 'Back to square one', 
      meaning_en: 'Having to return to the absolute beginning of a process or plan because of a total failure', 
      meaning_hi: 'फिर से शुरुआती बिंदु पर आ जाना / जहां से चले थे वहीं पहुंच जाना', 
      example: 'The investors rejected our entire design, so we are completely back to square one.', 
      note: 'Likely originating from early radio sports commentary boards or old traditional children\'s board games.' 
    }
  ]
}

};
var DB_GRAMMAR = {

  'Rule_01_Each_vs_Every': {
    intro: 'Each aur Every dono singular verb lete hain. Each = pronoun + adjective dono ho sakta hai; Every = sirf adjective. Each = 2 ya zyada logon ke liye; Every = sirf 2 se zyada ke liye. Jab bhi singular verb ka sawaal ho in dono ke saath, yaad raho: "ek ek karke".',
    words: [
      {
        word: 'Each',
        preposition: 'singular verb',
        def_en: 'Used for two or more persons/things, considered individually. Can be both pronoun and adjective.',
        def_hi: 'Do ya zyada logon/cheezein ke liye, ek ek karke sochte hue. Pronoun aur adjective dono roop mein use hota hai.',
        example: 'Each of the students has submitted the assignment on time.',
        note: 'Each can stand alone as pronoun: "Each has a book." Every cannot do this — "Every has a book" is wrong.'
      },
      {
        word: 'Every',
        preposition: 'singular verb',
        def_en: 'Used for more than two persons/things, seen as a group but treated individually. Only used as adjective.',
        def_hi: 'Do se zyada logon ke liye, group mein dekhte hue. Sirf adjective ke roop mein use hota hai, pronoun nahi.',
        example: 'Every student in the class has passed the exam.',
        note: 'Every cannot be followed by "of": "Every of my friends" is WRONG. Use "Each of my friends" instead.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"Each of the students <u>(A)</u> have submitted <u>(B)</u> their assignment on time. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"Rule: Each/Every always takes a singular verb. Wrong: 'have submitted' is plural. Correct: 'has submitted'. Why: 'Each of the students' acts as a singular subject — think of it as referring to one student at a time."},
      {type:"Fill in the Blank",q:"He has a book in _____ hand.",opts:["every","each","either","any"],ans:1,exp:"Rule: Every = more than 2 things; Each = 2 or more things. Wrong: 'every hand' implies more than 2 hands. Correct: 'each hand'. Why: A person has exactly 2 hands, so Each is the right choice here."},
      {type:"Sentence Correction",q:"Every of my friends is very talented.",opts:["Every of","Each of","All of","Some of"],ans:1,exp:"Rule: Every is only an adjective, never a pronoun. Wrong: 'Every of my friends' — Every cannot be followed by 'of'. Correct: 'Each of my friends'. Why: Each can act as both adjective and pronoun; Every cannot."},
      {type:"Fill in the Blank",q:"_____ player in the team is expected to give their best.",opts:["Each","Every","All","Both"],ans:1,exp:"'Every' is used for more than two (a whole team = many players). 'Every player' treats the group collectively but individually. 'Each' would also work grammatically here, but 'Every' emphasizes the whole group."},
      {type:"Error Spotting",q:"Every one of the boys <u>(A)</u> were present <u>(B)</u> at the meeting. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"'Every one of' takes a singular verb. 'Were' (plural) is wrong. Correct: 'Every one of the boys WAS present at the meeting.' Think of it as 'every single one = singular'."}
    ]
  },

  'Rule_02_Both_Not_vs_Neither_Nor': {
    intro: 'Both aur Not kabhi saath nahi aate. Jab do logon ke baare mein negative statement deni ho toh Neither...nor use karo. Neither always singular countable noun ke pehle aata hai. Yaad rakho: Both = positive (donon), Neither = negative (koi bhi nahi).',
    words: [
      {
        word: 'Neither...nor',
        preposition: 'singular verb',
        def_en: 'Used to make a negative statement about two people or things simultaneously. Always replaces "Both...not".',
        def_hi: 'Do logon ya cheezein ke baare mein ek saath negative statement dene ke liye. "Both...not" ki jagah hamesha yahi use karo.',
        example: 'Neither Ram nor Shyam is going to the party.',
        note: 'Both + not = ALWAYS WRONG. Neither + nor = correct. Also, "Neither" takes singular countable noun: "Neither boy" (not "Neither boys").'
      },
      {
        word: 'Both...and',
        preposition: 'plural verb',
        def_en: 'Used for positive statements about two people/things together. Always followed by "and", never "as well as".',
        def_hi: 'Do logon ke baare mein positive statement ke liye. Hamesha "and" ke saath, kabhi "as well as" ke saath nahi.',
        example: 'Both Ram and Shyam are going to the party.',
        note: '"Both...not" is never correct in formal English. Convert it to "Neither...nor" whenever you see a negative meaning with "both".'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"Both Ram and Shyam are not going to the party.",opts:["Both Ram and Shyam are not","Neither Ram nor Shyam is","Neither Ram and Shyam are","Either Ram or Shyam are"],ans:1,exp:"Rule: Both and Not are never used together in a sentence. Wrong: 'Both Ram and Shyam are not going' — Both+Not is incorrect. Correct: 'Neither Ram nor Shyam is going'. Why: To negate two subjects together, use Neither...Nor, not Both...Not."},
      {type:"Error Spotting",q:"This is a war which <u>(A)</u> both sides cannot <u>(B)</u> win. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"Rule: Both + negative (cannot/not) is always wrong. Wrong: 'both sides cannot win'. Correct: 'neither side can win'. Why: Both implies two together doing something; its negative form is Neither."},
      {type:"Fill in the Blank",q:"_____ of the two solutions is correct.",opts:["Both","Neither","Either","None"],ans:1,exp:"'Neither' is used for a negative statement about two things. 'Neither of the two solutions is correct' — meaning not this one, not that one. 'Either' would mean 'one of the two (you can pick)'."},
      {type:"Sentence Correction",q:"Both the brothers are not hardworking.",opts:["Both the brothers are not","Neither brother is","Neither of the brothers are","Either of the brothers is not"],ans:1,exp:"'Both...not' is incorrect. To negate both, use 'Neither'. 'Neither brother is hardworking' uses singular verb correctly with 'neither'."},
      {type:"Error Spotting",q:"Neither of the students <u>(A)</u> were able to <u>(B)</u> answer the question. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"'Neither of' takes a singular verb. 'Were' (plural) is wrong. Correct: 'Neither of the students WAS able to answer the question.' Neither = not one, not the other = singular."}
    ]
  },

  'Rule_03_Who_Whom_Which_That': {
    intro: 'Who/Whom = logon aur named domestic animals ke liye. Which = non-domestic animals aur non-living cheezein. That = sabke liye (no restriction). Lekin "all, any, the only, the same, none, superlative" ke baad SIRF "that" aata hai — who/which nahi.',
    words: [
      {
        word: 'Who / Whom',
        preposition: 'for people',
        def_en: 'Used for people and named/domestic animals. "Who" = subject; "Whom" = object. Test: he/she = who; him/her = whom.',
        def_hi: 'Logon aur ghar ke/named jaanwaron ke liye. Who = subject; Whom = object. Test: he/she aata ho toh who; him/her aata ho toh whom.',
        example: 'The man who called you is my uncle. / The man whom you called is my uncle.',
        note: 'Test trick: Replace with he/she/him/her. "He called" → who. "You called him" → whom. Never use "who" for non-living things.'
      },
      {
        word: 'That',
        preposition: 'after all/same/none/superlative',
        def_en: 'Used for people, animals, or things. MANDATORY after: all, any, the only, the same, none, superlative degrees. Cannot be omitted in these cases.',
        def_hi: 'Sabke liye use ho sakta hai. Lekin "all, any, the only, the same, none, superlative" ke baad ZARURI hai "that" — who/which nahi chalega.',
        example: 'She is the best student that I have ever taught.',
        note: 'Mnemonic: SANS = Same, All, None, Superlative → always "that". The same book THAT (not which). All THAT glitters (not which).'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"This is the same book <u>(A)</u> which you <u>(B)</u> were reading. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"Rule: After 'the same', always use 'that' — never 'which'. Wrong: 'the same book which'. Correct: 'the same book that'. Why: Certain words (the same, all, any, none, the only) must be followed by 'that' in a relative clause."},
      {type:"Fill in the Blank",q:"The bomb, _____ killed 15 people, was the worst of a series of terrorist outrages.",opts:["who","whom","which","that"],ans:2,exp:"Rule: Which is used for non-living things and non-domestic animals. Wrong: Using 'who' for a bomb (non-living). Correct: 'which killed 15 people'. Why: Who/Whom are only for people; Which is for things and non-domestic animals."},
      {type:"Sentence Correction",q:"He spent up the little amount which he had.",opts:["which he had","that he had","what he had","all he had"],ans:1,exp:"Rule: After all, the little, none, the only, the same — always use 'that', never 'which'. Wrong: 'the little amount which he had'. Correct: 'the little amount that he had'. Why: These words trigger a mandatory 'that' rule in relative clauses."},
      {type:"Fill in the Blank",q:"She is the only student _____ passed the difficult test.",opts:["which","who","that","whom"],ans:2,exp:"After 'the only', mandatory use of 'that'. 'She is the only student THAT passed' is correct. 'Who' would be wrong here because 'the only' triggers the 'that' rule."},
      {type:"Error Spotting",q:"He is the tallest boy <u>(A)</u> who I have ever seen. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"After a superlative degree ('tallest'), 'that' must be used, not 'who'. Correct: 'He is the tallest boy THAT I have ever seen.' Superlative → mandatory 'that'."}
    ]
  },

  'Rule_04_Conditional_Sentences': {
    intro: 'Teen types ke conditional sentences hain. Type I: Simple Present + will/shall (possible future). Type II: Simple Past + would (hypothetical/theoretical). Type III: Past Perfect + would have + V3 (impossible, too late). Scientific/universal truths pe ye rules nahi lagte — wahan Simple Present hi rehta hai dono clauses mein.',
    words: [
      {
        word: 'Type I Conditional',
        preposition: 'if + present → will',
        def_en: 'Possible/real condition in the future. Structure: If + Simple Present, will/shall/can/may + V1.',
        def_hi: 'Possible future condition. If + Simple Present, will/shall/can/may + V1. Kuch hone ki achi possibility hai.',
        example: 'If it rains, I will stay at home.',
        note: 'Type I = realistic/likely. "If I study hard, I will pass." The condition is genuinely possible.'
      },
      {
        word: 'Type II Conditional',
        preposition: 'if + past → would',
        def_en: 'Hypothetical/unreal condition in present or future. Structure: If + Simple Past, would/could/might + V1.',
        def_hi: 'Hypothetical condition — jo probably nahi hoga. If + Simple Past, would + V1.',
        example: 'If I studied hard, I would pass.',
        note: 'Type II = imaginary/unlikely. "If I were a bird, I would fly" — you are not a bird. Note: "If I were" (not "was") for all persons in Type II.'
      },
      {
        word: 'Type III Conditional',
        preposition: 'if + past perfect → would have',
        def_en: 'Impossible condition — refers to the past, too late to change. Structure: If + Past Perfect, would/could/might + have + V3.',
        def_hi: 'Impossible past condition — ab kuch nahi badla ja sakta. If + Past Perfect, would have + V3.',
        example: 'If I had studied hard, I would have passed.',
        note: 'Type III = regret about the past. Action was NOT done, and now it is too late. Always need "have" before V3 in main clause.'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"If I studied, I would have passed the exam.",opts:["If I studied, I would have passed","If I had studied, I would have passed","If I study, I would pass","If I studied, I would pass"],ans:3,exp:"Rule: Type II conditional = If + Simple Past → would + V1 (base verb). Wrong: 'would have passed' is Type III (impossible/past). Correct: 'If I studied, I would pass'. Why: Type II is for hypothetical present/future situations — not past ones."},
      {type:"Fill in the Blank",q:"If water reaches 100 degrees Celsius, it _____.",opts:["will boil","would boil","boils","boiled"],ans:2,exp:"Rule: Conditional rules do NOT apply to universal/scientific truths. Wrong: 'will boil' adds unnecessary future tense. Correct: 'boils' (Simple Present). Why: Universal truths always happen, so both clauses use Simple Present regardless of 'if'."},
      {type:"Error Spotting",q:"If we had found him earlier, <u>(A)</u> we could arrested him <u>(B)</u> and saved the crime. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"Rule: Type III conditional = Past Perfect in if-clause, and would/could/might + have + V3 in main clause. Wrong: 'we could arrested him' — missing 'have'. Correct: 'we could have arrested him'. Why: Type III is for impossible past situations — you always need 'have + past participle'."},
      {type:"Fill in the Blank",q:"If I _____ a million rupees, I would donate half of it.",opts:["have","had","have had","will have"],ans:1,exp:"Type II conditional (hypothetical): If + Simple Past. 'If I had a million rupees' (hypothetical — I don't have it). Main clause: 'would donate' (would + V1). 'Had' is the correct Simple Past form here."},
      {type:"Sentence Correction",q:"If he will come, I will tell him the truth.",opts:["If he will come","If he comes","If he had come","If he came"],ans:1,exp:"In Type I conditional, the if-clause uses Simple Present (not future). 'If he will come' is wrong. Correct: 'If he COMES, I will tell him the truth.' Never use 'will' in the if-clause of Type I."}
    ]
  },

  'Rule_05_One_of_the_Plural': {
    intro: '"One of the + Plural Noun" ek common structure hai. Jab koi who/that nahi aata aur noun direct subject hai toh singular verb. Lekin jab who/that aata hai (noun direct subject nahi hai), toh plural verb use hoti hai un logon ke liye jinhein who/that point karta hai. "The only one of" hamesha singular verb leta hai.',
    words: [
      {
        word: 'One of the',
        preposition: '+ plural noun',
        def_en: 'Structure requires a plural noun. Verb agreement depends on whether a relative clause (who/that) follows.',
        def_hi: 'Plural noun chahiye saath mein. Verb ka agreement depend karta hai ki who/that aata hai ya nahi.',
        example: 'One of the boys is absent. / One of the boys who are present is my friend.',
        note: 'No who/that → singular verb (refers to "one"). With who/that → plural verb (refers to the plural noun). "The only one of the" → always singular verb.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"She is one of the mothers who <u>(A)</u> is really working <u>(B)</u> hard. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"Rule: In 'one of the + plural noun + who/that', the verb agrees with the plural noun. Wrong: 'is really working' — singular verb for a plural antecedent. Correct: 'are really working'. Why: 'who' refers back to 'mothers' (plural), not to 'one' (singular)."},
      {type:"Fill in the Blank",q:"Rina is the only one of the girls who _____ ever been to India.",opts:["have","has","had","having"],ans:1,exp:"Rule: 'The only one of the + Noun + who/that' always takes a singular verb. Wrong: 'have ever been' — plural verb. Correct: 'has ever been'. Why: 'The only one' pinpoints a single individual, so the verb stays singular."},
      {type:"Sentence Correction",q:"One of the student was selected to visit NASA.",opts:["One of the student","One of a student","One of the students","One among students"],ans:2,exp:"The phrase 'one of the' is always followed by a plural noun. Correct: 'One of the students'."},
      {type:"Fill in the Blank",q:"Mohan is one of the students who _____ regularly.",opts:["comes","come","has come","came"],ans:1,exp:"'One of the students who' → who refers back to 'students' (plural) → plural verb 'come'. 'Mohan is one of the students who come regularly.'"},
      {type:"Error Spotting",q:"He is one of the best players <u>(A)</u> that has ever played for India. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"'One of the best players that' → 'that' refers to 'players' (plural) → plural verb needed. Correct: 'that HAVE ever played for India.' The relative pronoun refers to the plural noun, not to 'one'."}
    ]
  },

  'Rule_06_Number_Unit_Noun': {
    intro: 'Jab Number + Unit + Noun/Adjective ek compound adjective ki tarah use ho, toh Unit hamesha singular form mein hoti hai. "A ten-inch snake" — inch plural nahi hoga. "Two five-hundred-rupee notes" — rupee plural nahi hoga. Ye ek hyphenated compound adjective ka rule hai.',
    words: [
      {
        word: 'Number + Unit + Noun',
        preposition: 'singular unit form',
        def_en: 'When number + unit + noun form a compound adjective, the unit is always singular (no "s"). This is a compound modifier rule.',
        def_hi: 'Jab number + unit + noun ek compound adjective banate hain, unit hamesha singular (bina "s" ke). Compound modifier ka niyam.',
        example: 'She bought a two-litre bottle. / He is a six-foot man.',
        note: 'Key sign: if there are hyphens OR if the unit describes a noun — keep it singular. "A 10-rupee note" not "a 10-rupees note".'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"He saw a ten-inches snake in the garden.",opts:["a ten-inches snake","a ten-inch snake","a ten inch snakes","ten-inch a snake"],ans:1,exp:"When Number + Unit + Noun are combined (as a compound adjective), the unit is always in singular form. 'Ten-inch' not 'ten-inches'."},
      {type:"Fill in the Blank",q:"She gave me two five-hundred-_____ notes.",opts:["rupees","rupee","rupee's","rupees'"],ans:1,exp:"In the structure Number + Unit + Noun, the unit is always singular. So 'five-hundred-rupee notes' is correct."},
      {type:"Fill in the Blank",q:"I need a _____ rope for this job.",opts:["ten-feet","ten-foot","tens-foot","ten-foots"],ans:1,exp:"Unit in a compound adjective is always singular. 'Ten-foot rope' (not 'ten-feet'). Even though 'feet' is the normal plural of 'foot', in compound modifiers we use the singular form."},
      {type:"Error Spotting",q:"He is a six-feet tall man, <u>(A)</u> isn't he? <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Six-feet tall man' uses unit as compound adjective — should be singular. Correct: 'He is a six-foot tall man.' Unit must be singular when used as part of a compound modifier before a noun."},
      {type:"Sentence Correction",q:"She won a two-hundreds-metre race.",opts:["two-hundreds-metre race","two-hundred-metre race","two-hundred-metres race","two-hundreds-metres race"],ans:1,exp:"Both the number 'hundred' and the unit 'metre' must be in singular form in a compound adjective. 'Two-hundred-metre race' is correct."}
    ]
  },

  'Rule_07_Time_Money_Distance': {
    intro: 'Jab time, money, speed, weight, height, ya distance ek hi tarike se use/cover ki jaaye toh singular verb. Jab alag alag tareekon se cover ki jaaye toh plural verb. Ye rule tab laagu hota hai jab ye expressions subject ki tarah kaam karein.',
    words: [
      {
        word: 'One way → singular',
        preposition: 'singular verb',
        def_en: 'Expressions of time/money/distance used as one unit or covered in one way take a singular verb.',
        def_hi: 'Time/money/distance ek hi unit mein ya ek hi tarike se ho toh singular verb.',
        example: 'Five thousand rupees is his salary. / Ten miles is a long distance.',
        note: '"Five thousand rupees is his salary" — treated as one sum. "Two years is a long time" — treated as one period.'
      },
      {
        word: 'Multiple ways → plural',
        preposition: 'plural verb',
        def_en: 'When covered/used in various ways or installments, a plural verb is used.',
        def_hi: 'Jab alag alag tareekon ya installments mein ho toh plural verb.',
        example: 'Ten miles are to be covered partly by car and rest on foot.',
        note: '"Partly by car AND rest on foot" = two different ways → plural. The dividing word to watch for is "and", "partly", "some...rest".'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"Ten miles <u>(A)</u> need to be covered <u>(B)</u> partly by car and rest on foot. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:3,exp:"The distance is being covered by two means (car AND foot), so plural 'need' is correct here. The sentence as written is actually correct — 'need' (plural) matches the multiple-means coverage. No error."},
      {type:"Sentence Correction",q:"Five thousand rupees are his salary.",opts:["are his salary","is his salary","were his salary","have been his salary"],ans:1,exp:"When an amount is treated as a single sum (one unit), a singular verb is used. 'Five thousand rupees is his salary' is correct."},
      {type:"Fill in the Blank",q:"Six weeks _____ not long enough to master grammar.",opts:["are","were","is","have been"],ans:2,exp:"'Six weeks' viewed as a single period of time takes a singular verb. 'Six weeks is not long enough' is correct."},
      {type:"Fill in the Blank",q:"Twenty kilometres _____ a long distance to walk.",opts:["are","were","is","have been"],ans:2,exp:"'Twenty kilometres' as one measurement/distance takes singular verb. 'Twenty kilometres is a long distance to walk.'"},
      {type:"Error Spotting",q:"Three hundred rupees <u>(A)</u> were found in his pocket. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"Three hundred rupees as a single sum/amount takes singular verb. 'Were' is wrong. Correct: 'Three hundred rupees WAS found in his pocket.'"}
    ]
  },

  'Rule_08_Comparison_Same_Category': {
    intro: 'Comparison mein koi cheez khud se compare nahi ho sakti. Same category mein compare karte waqt "any other" use karo. Different category se compare karte waqt "all" use karo. Gold IS a metal, toh "any other metal" use karo. Diamond is NOT a metal, toh "all metals" use karo.',
    words: [
      {
        word: 'Any other',
        preposition: 'same category comparison',
        def_en: 'Used when comparing within the same category to exclude the subject from comparison with itself.',
        def_hi: 'Same category mein compare karte waqt khud ko exclude karne ke liye "any other" use karo.',
        example: 'Sachin is better than any other cricketer in the team.',
        note: '"Any other" excludes the subject. "Gold is more precious than any other metal" — gold is a metal, so we say "any OTHER metal" to exclude gold itself.'
      },
      {
        word: 'All / All other',
        preposition: 'cross-category comparison',
        def_en: 'Used when comparing across different categories, OR within same category using "all other" (not just "all").',
        def_hi: 'Different categories ke beech compare karte waqt. Ya same category mein "all other" use karo.',
        example: 'Diamond is more precious than all metals.',
        note: '"Diamond is NOT a metal" — so it can be compared to "all metals" (no exclusion needed). But Kalidasa WAS a poet → use "all other poets", not "all poets".'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"Gold is more precious than all metals.",opts:["than all metals","than any other metals","than all other metals","than any metals"],ans:1,exp:"Gold is itself a metal, so 'all metals' would include gold itself — illogical. Use 'any other metal' to exclude gold from the comparison. 'Gold is more precious than any other metal.'"},
      {type:"Error Spotting",q:"Kalidasa was more famous <u>(A)</u> than all poets. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"Kalidasa was himself a poet, so comparing him to 'all poets' includes Kalidasa himself — illogical. It should be 'all other poets' or 'any other poet'."},
      {type:"Sentence Correction",q:"Diamond is more precious than any other metals.",opts:["than any other metals","than all metals","than any metals","No correction needed"],ans:3,exp:"Diamond is NOT a metal, so it can correctly be compared to 'all metals'. 'Diamond is more precious than all metals' is correct. No error!"},
      {type:"Fill in the Blank",q:"Mumbai is larger than _____ city in Maharashtra.",opts:["all","any","any other","all other"],ans:2,exp:"Mumbai IS a city in Maharashtra, so we exclude it from comparison using 'any other city'. 'Mumbai is larger than any other city in Maharashtra.' 'Any' alone would include Mumbai itself."},
      {type:"Error Spotting",q:"Iron is more useful <u>(A)</u> than any metal. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"Iron is itself a metal. Comparing it to 'any metal' would include iron itself. Correct: 'Iron is more useful than any OTHER metal.' Use 'any other' when subject belongs to the category."}
    ]
  },

  'Rule_09_Since_vs_For': {
    intro: '"For" duration/period ke liye use hota hai (2 ghante, 3 saal, 5 din). "Since" specific point of time ke liye (last Tuesday, 2008, midnight). In dono ke pehle hamesha Perfect ya Perfect Continuous tense use hoti hai. "Since" ke baad Simple Past tense aata hai clause mein.',
    words: [
      {
        word: 'For',
        preposition: 'duration of time',
        def_en: 'Used for a period/duration: for two hours, for three years, for a week. Always used with Perfect tense.',
        def_hi: 'Period ya duration ke liye: do ghante se, teen saal se. Hamesha Perfect tense ke saath.',
        example: 'I have been waiting for two hours.',
        note: '"For" = a stretch of time you can measure. "For 5 years", "for a month". If you can put "a period of ___" before it, use "for".'
      },
      {
        word: 'Since',
        preposition: 'point of time',
        def_en: 'Used for a specific point in time: since Monday, since 2010, since morning. Always used with Perfect tense. After "since", Simple Past follows.',
        def_hi: 'Specific time point ke liye: Monday se, 2010 se, subah se. Perfect tense ke saath. "Since" ke baad Simple Past.',
        example: 'I have been working here since 2015.',
        note: '"Since" = a starting point on the calendar/clock. "Since last night", "since I graduated". After "since" in a clause: Simple Past (not Past Perfect).'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"I've only known her _____ the beginning of last week.",opts:["for","since","from","during"],ans:1,exp:"'The beginning of last week' is a specific point in time, not a duration. So 'since' is correct. 'For' would require a duration like 'for one week'."},
      {type:"Error Spotting",q:"I had been waiting for him since the time <u>(A)</u> I had completed my graduation. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"After 'since', Simple Past tense must be used, not Past Perfect. Correct: 'since the time I completed my graduation'."},
      {type:"Fill in the Blank",q:"He has been here _____ 6 months.",opts:["since","for","from","during"],ans:1,exp:"'6 months' is a period/duration of time, not a specific point. So 'for' is correct: 'He has been here for 6 months.'"},
      {type:"Fill in the Blank",q:"She has been unwell _____ last Monday.",opts:["for","since","from","during"],ans:1,exp:"'Last Monday' is a specific point in time (not a duration). 'Since' is correct. 'She has been unwell since last Monday.'"},
      {type:"Error Spotting",q:"He has been playing cricket for <u>(A)</u> he was a child. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'He was a child' is a specific starting point, not a duration. 'For' is wrong here — use 'since'. Correct: 'He has been playing cricket SINCE he was a child.'"}
    ]
  },

  'Rule_10_Sequence_Past_Actions': {
    intro: 'Jab do kaam past mein hue hon, pehle wala kaam Past Perfect Tense (had + V3) mein hoga aur baad wala Simple Past (V2) mein. "Before" aur "after" in dono actions ko connect karte hain. Yaad rakhne ka tarika: PEHLA → Past Perfect, BAAD WALA → Simple Past.',
    words: [
      {
        word: 'Earlier action',
        preposition: 'Past Perfect (had + V3)',
        def_en: 'The action that happened FIRST in the past uses Past Perfect Tense (had + V3).',
        def_hi: 'Jo kaam PEHLE hua, woh Past Perfect mein hoga (had + V3).',
        example: 'The patient had died before the doctor arrived.',
        note: '"Had died" happened first, "arrived" happened second. Before = pehle wala before ke pehle. After = pehle wala after ke baad.'
      },
      {
        word: 'Later action',
        preposition: 'Simple Past (V2)',
        def_en: 'The action that happened SECOND/LATER in the past uses Simple Past Tense (V2).',
        def_hi: 'Jo kaam BAAD MEIN hua, woh Simple Past mein hoga (V2 form).',
        example: 'He finished the work after we had met him.',
        note: 'Key words: "before" — the action before "before" is the later one. "After" — the action after "after" happened first (earlier).'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"The patient died before the doctor arrived.",opts:["died before the doctor arrived","had died before the doctor arrived","died before the doctor had arrived","had died before the doctor had arrived"],ans:1,exp:"Dying happened BEFORE the doctor arrived. The earlier action uses Past Perfect. Correct: 'The patient had died before the doctor arrived.'"},
      {type:"Error Spotting",q:"He <u>(A)</u> had finished the work after <u>(B)</u> we had met him. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"Finishing the work happened AFTER meeting him, so finishing is the LATER action → Simple Past. Meeting is earlier → Past Perfect. Correct: 'He finished the work after we had met him.'"},
      {type:"Fill in the Blank",q:"I finished the book after I _____ from college.",opts:["return","returned","had returned","have returned"],ans:2,exp:"Returning from college happened BEFORE finishing the book. The earlier action takes Past Perfect. Correct: 'after I had returned from college'."},
      {type:"Fill in the Blank",q:"When I reached the station, the train _____.",opts:["left","had left","has left","was leaving"],ans:1,exp:"The train's departure happened BEFORE I reached the station. Earlier action = Past Perfect. 'When I reached the station, the train HAD LEFT.'"},
      {type:"Error Spotting",q:"She submitted the assignment after she <u>(A)</u> finished all the research. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"Finishing research happened BEFORE submitting the assignment. Earlier action needs Past Perfect. Correct: 'after she HAD FINISHED all the research.'"}
    ]
  },

  'Rule_11_Possessive_Before_Gerund': {
    intro: 'Gerund (V1+ing jo noun ki tarah kaam kare) ke pehle hamesha Possessive Adjective aana chahiye — objective case nahi. "Me borrowing" galat hai kyunki "me" objective hai. "My borrowing" sahi hai kyunki "my" possessive adjective hai. Gerund = noun ki tarah kaam karne wala "-ing" form.',
    words: [
      {
        word: 'Possessive + Gerund',
        preposition: 'my/his/her before -ing',
        def_en: 'Before a gerund (V1+ing used as noun), always use possessive adjective (my, his, her, our, their, your) — NOT objective case (me, him, her).',
        def_hi: 'Gerund se pehle hamesha Possessive Adjective (my, his, her) — objective case (me, him, her) nahi.',
        example: 'I hope you don\'t mind my borrowing your car.',
        note: 'Test: if "-ing" word is a noun (subject/object of sentence) → it is a gerund → use possessive before it. "His singing pleased everyone" — singing is subject, so "his" (possessive) is correct.'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"I hope you don't mind me borrowing your car.",opts:["me borrowing","my borrowing","I borrowing","mine borrowing"],ans:1,exp:"Before a gerund ('borrowing' acts as a noun here), we always use a possessive adjective. 'me' is objective case — wrong. 'my borrowing' is correct."},
      {type:"Error Spotting",q:"I know his reading <u>(A)</u> every night has <u>(B)</u> helped him pass the test. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:3,exp:"'His reading' is correct — 'his' is a possessive adjective before the gerund 'reading'. The sentence is grammatically correct."},
      {type:"Fill in the Blank",q:"_____ coming late disturbed everyone in the class.",opts:["Him","His","He","Himself"],ans:1,exp:"'Coming late' is a gerund acting as the subject. Before a gerund subject, use possessive adjective. 'His coming late disturbed everyone.'"},
      {type:"Sentence Correction",q:"The teacher objected to him talking in class.",opts:["to him talking","to his talking","to he talking","to himself talking"],ans:1,exp:"'Talking' is a gerund (noun). Before gerund, use possessive adjective 'his', not objective 'him'. 'The teacher objected to his talking in class.'"},
      {type:"Fill in the Blank",q:"Do you mind _____ sitting here?",opts:["me","my","I","mine"],ans:1,exp:"'Sitting' is a gerund. 'Mind' takes an object, and the gerund 'sitting' is that object. Before gerund, use possessive: 'my sitting'. 'Do you mind my sitting here?'"}
    ]
  },

  'Rule_12_Law_of_Inversion': {
    intro: 'Inversion = verb subject se pehle aana. Jab sentence kisi adverb se shuru ho toh inversion hoti hai. Partial Inversion: Adverb + Helping Verb + Subject + Main Verb. Complete Inversion: Adverb + Main Verb + Subject. "No sooner...than", "Hardly/Scarcely...when", "Seldom", "Never" — ye sab inversion trigger karte hain.',
    words: [
      {
        word: 'Partial Inversion',
        preposition: 'adverb + HV + S + MV',
        def_en: 'Adverb + Helping Verb + Subject + Main Verb. Used with: hardly, scarcely, seldom, never, rarely, no sooner.',
        def_hi: 'Adverb + Helping Verb + Subject + Main Verb. "Rarely did he go there."',
        example: 'Rarely did he go there. / Never have I seen such beauty.',
        note: '"No sooner" pairs with "than". "Hardly/Scarcely/Barely" pair with "when". This is non-negotiable — mixing them is an error.'
      },
      {
        word: 'No sooner...than',
        preposition: 'than (not when)',
        def_en: '"No sooner" always pairs with "than". "Hardly/Scarcely/Barely" pair with "when". Never mix them.',
        def_hi: '"No sooner" hamesha "than" ke saath. "Hardly/Scarcely/Barely" hamesha "when" ke saath.',
        example: 'No sooner had I entered than it began to rain.',
        note: 'Memory trick: No Sooner = THAN (both are "formal/serious" words). Hardly/Scarcely = WHEN (both are "softer" words). Never use "No sooner...when".'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"Rarely he did go there.",opts:["Rarely he did go","Rarely did he go","Rarely he goes","Rarely goes he"],ans:1,exp:"When an adverb like 'Rarely' begins a sentence, Law of Inversion is followed: Adverb + Helping Verb + Subject + Main Verb. 'Rarely did he go' is correct (Partial Inversion)."},
      {type:"Error Spotting",q:"No sooner had I entered the class <u>(A)</u> when it began to rain. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"'No sooner' always pairs with 'than', never with 'when'. 'Hardly/Scarcely' pair with 'when'. Correct: 'No sooner had I entered the class than it began to rain.'"},
      {type:"Sentence Correction",q:"He never goes to temple. Neither she does.",opts:["Neither she does","Neither does she","She neither does","Neither she do"],ans:1,exp:"'Neither' at the start of a sentence triggers inversion. The helping verb 'does' must come before subject 'she'. Correct: 'Neither does she.'"},
      {type:"Fill in the Blank",q:"Scarcely had he sat down _____ the phone rang.",opts:["than","when","before","then"],ans:1,exp:"'Scarcely' pairs with 'when' (not 'than'). 'Scarcely had he sat down WHEN the phone rang.' Only 'No sooner' takes 'than'."},
      {type:"Error Spotting",q:"Seldom I have seen <u>(A)</u> such a beautiful sunset. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Seldom' at the beginning triggers inversion: Adverb + Helping Verb + Subject. Correct: 'Seldom HAVE I seen such a beautiful sunset.' The helping verb must come before the subject."}
    ]
  },

  'Rule_13_Articles_Primary_Secondary': {
    intro: 'School, college, church, bed, hospital, market, prison, temple jaise jagahon ke liye — primary purpose mein koi article nahi. Secondary purpose (koi bhi aur kaam) ke liye "the" use karo. Worship ke liye church jaana = primary = no article. Meeting ke liye church jaana = secondary = "the church".',
    words: [
      {
        word: 'Primary Purpose',
        preposition: 'no article',
        def_en: 'When a place is used for its main/intended purpose, no definite article "the" is used.',
        def_hi: 'Jab jagah apne asli kaam ke liye use ho, "the" nahi lagta.',
        example: 'She goes to school every day. / He is in hospital (as a patient).',
        note: 'School = studying (primary). Hospital = treatment (primary). Church = worship (primary). In these cases, NO "the".'
      },
      {
        word: 'Secondary Purpose',
        preposition: '"the" required',
        def_en: 'When a place is used for any purpose OTHER than its primary one, "the" is required.',
        def_hi: 'Jab jagah kisi aur kaam ke liye use ho (secondary), "the" zaruri hai.',
        example: 'He went to the school to meet the teacher (not as a student).',
        note: 'The teacher going to "the school" (not to study), a visitor going to "the hospital" (not as patient) — secondary purpose, so "the" is used.'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"We go to _____ church on Fridays.",opts:["the","a","an","No article"],ans:3,exp:"Going to church on Fridays means going there to worship — this is the PRIMARY purpose of a church. No article 'the' is needed: 'We go to church on Fridays.'"},
      {type:"Error Spotting",q:"The politician <u>(A)</u> was sent to the jail <u>(B)</u> for corruption. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"A politician is sent to jail for punishment — this is jail's PRIMARY purpose. So 'the' should NOT be used. Correct: 'was sent to jail'."},
      {type:"Sentence Correction",q:"His home is just beside temple.",opts:["beside temple","beside a temple","beside the temple","beside temples"],ans:2,exp:"Being beside the temple is a SECONDARY purpose (not worship). When a place is used for secondary purpose, 'the' is used. 'Beside the temple' is correct."},
      {type:"Fill in the Blank",q:"He was admitted to _____ hospital after the accident.",opts:["the","a","an","no article"],ans:3,exp:"Being admitted to hospital as a patient is the PRIMARY purpose of a hospital. No article needed. 'He was admitted to hospital after the accident.'"},
      {type:"Error Spotting",q:"The principal went to school <u>(A)</u> to check the attendance records. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"The principal going to check attendance is a SECONDARY purpose (not as a student). 'The' must be used. Correct: 'The principal went to THE school to check the attendance records.'"}
    ]
  },

  'Rule_14_Hardly_Scarcely_Barely': {
    intro: '"Hardly", "Scarcely", "Barely", "No sooner" sentence ke shuru mein aane par inversion hoti hai. Ye sab negative meaning wale words hain. Hardly/Scarcely/Barely ke baad "when" aata hai. No sooner ke baad "than" aata hai. Aur kyunki ye words negative hain, question tag mein positive verb aati hai.',
    words: [
      {
        word: 'Hardly / Scarcely / Barely',
        preposition: '+ inversion + when',
        def_en: 'These adverbs at sentence start trigger inversion (helping verb before subject) and are followed by "when". They carry negative meaning → positive question tag.',
        def_hi: 'Ye adverbs shuru mein aayein toh inversion hoti hai. Baad mein "when" aata hai. Negative meaning → positive question tag.',
        example: 'Hardly had I sat down when the phone rang.',
        note: 'Hardly/Scarcely/Barely → WHEN. No sooner → THAN. Never swap these. Also: "Hardly" already means "almost not", so never say "hardly...not".'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"Hardly _____ I begun to speak when I was interrupted.",opts:["have","had","has","did"],ans:1,exp:"'Hardly' at the beginning triggers inversion: Hardly + helping verb + subject. The helping verb 'had' comes before 'I'. Correct: 'Hardly had I begun to speak when I was interrupted.'"},
      {type:"Error Spotting",q:"No sooner had I arrived <u>(A)</u> when they all started to argue. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"'No sooner' must be followed by 'than', not 'when'. Only Hardly/Scarcely/Barely use 'when'. Correct: 'No sooner had I arrived than they all started to argue.'"},
      {type:"Fill in the Blank",q:"Scarcely had she finished eating _____ the guests arrived.",opts:["than","when","before","then"],ans:1,exp:"'Scarcely' pairs with 'when'. 'Scarcely had she finished eating WHEN the guests arrived.' Only 'No sooner' uses 'than'."},
      {type:"Error Spotting",q:"Barely had we reached home <u>(A)</u> than it started raining heavily. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"'Barely' (like Hardly/Scarcely) pairs with 'when', not 'than'. Only 'No sooner' uses 'than'. Correct: 'Barely had we reached home WHEN it started raining heavily.'"},
      {type:"Fill in the Blank",q:"He hardly ever goes out, _____ he?",opts:["doesn't","does","hasn't","did"],ans:1,exp:"'Hardly' carries negative meaning → positive question tag. Main verb is 'goes' (Simple Present with 'does'). Positive tag: 'does he?' 'He hardly ever goes out, does he?'"}
    ]
  },

  'Rule_15_Reflexive_Pronouns_Object': {
    intro: 'Kuch words ko hamesha object chahiye: enjoy, avail, absent, pride, adjust, reconcile, acquit, amuse, resign, avenge, exert, apply, adapt. Agar koi aur object nahi hai toh reflexive pronoun (myself, himself, herself) use karo. Lekin kuch words ke saath reflexive pronoun kabhi nahi aata — jaise hide, keep, stop, qualify, bathe.',
    words: [
      {
        word: 'Verbs needing reflexive',
        preposition: 'enjoy/avail/pride + himself',
        def_en: 'Certain verbs always require an object. If no other object is present, use a reflexive pronoun (myself, himself, herself, etc.).',
        def_hi: 'Kuch verbs ko hamesha object chahiye. Agar koi object nahi hai toh reflexive pronoun lagao.',
        example: 'He availed himself of the opportunity. / She enjoyed herself at the party.',
        note: 'Mnemonic: EPARARA verbs (Enjoy, Pride, Avail, Resign, Acquit, Reconcile, Absent, Apply) → need reflexive when no other object.'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"She has qualified herself for the post.",opts:["qualified herself","qualified","qualified her","qualifies herself"],ans:1,exp:"'Qualify' is a word that does NOT take a reflexive pronoun as object. Correct: 'She has qualified for the post.'"},
      {type:"Error Spotting",q:"He <u>(A)</u> enjoyed the party <u>(B)</u> very much. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:3,exp:"'Enjoy' must have an object. Here 'the party' is the object, so no reflexive pronoun is needed. The sentence is correct as 'the party' serves as the object."},
      {type:"Fill in the Blank",q:"She availed _____ of the opportunity.",opts:["her","herself","she","hers"],ans:1,exp:"'Avail' always requires an object. Since no other object is mentioned, reflexive pronoun 'herself' is used. 'She availed herself of the opportunity.'"},
      {type:"Sentence Correction",q:"He absented from the class yesterday.",opts:["absented from","absented himself from","absent himself from","was absent himself from"],ans:1,exp:"'Absent' (as a verb) requires a reflexive pronoun as object. 'He absented himself from the class yesterday.' Without reflexive, the sentence is incomplete."},
      {type:"Fill in the Blank",q:"The accused _____ himself of all charges.",opts:["acquit","acquitted","acquits","acquitting"],ans:1,exp:"'Acquit' requires a reflexive pronoun ('himself') — it's already in the sentence. The verb form needed is Simple Past: 'acquitted'. 'The accused acquitted himself of all charges.'"}
    ]
  },

  'Rule_16_No_Reflexive_Pronouns': {
    intro: '"Hide, keep, stop, turn, qualify, bathe, move, rest, shave" jaise words ke baad reflexive pronouns KABHI nahi aate. Ye verbs intransitive meaning mein use hote hain — inhein reflexive object ki zaroorat nahi. "He hid himself" galat hai; "He hid" sahi hai.',
    words: [
      {
        word: 'No-reflexive verbs',
        preposition: 'never + himself/herself',
        def_en: 'These verbs NEVER take reflexive pronouns: hide, keep, stop, turn, qualify, bathe, move, rest, shave.',
        def_hi: 'Ye verbs reflexive pronoun kabhi nahi lete: hide, keep, stop, turn, qualify, bathe, move, rest, shave.',
        example: 'He hid in the cave. / She bathed in the river.',
        note: 'Memory: these are actions you do TO yourself inherently — no need to state "himself". "He shaved" (not "he shaved himself"). "She rested" (not "she rested herself").'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"He hid himself <u>(A)</u> in the cave <u>(B)</u> and thus saved his life. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Hide' is a word that is never followed by a reflexive pronoun. 'Hid himself' is incorrect. Correct: 'He hid in the cave and thus saved his life.'"},
      {type:"Sentence Correction",q:"He stopped himself and took a deep breath.",opts:["stopped himself and","stopped and","had stopped himself and","stops himself and"],ans:1,exp:"'Stop' does not take a reflexive pronoun. Correct: 'He stopped and took a deep breath.'"},
      {type:"Fill in the Blank",q:"The child needs to bathe _____ every day.",opts:["himself","herself","itself","[no pronoun needed]"],ans:3,exp:"'Bathe' never takes a reflexive pronoun. 'The child needs to bathe every day' — no reflexive needed or correct here."},
      {type:"Error Spotting",q:"She rested herself <u>(A)</u> for an hour <u>(B)</u> after the long journey. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Rest' never takes a reflexive pronoun. 'Herself' is wrong here. Correct: 'She rested for an hour after the long journey.'"},
      {type:"Sentence Correction",q:"He shaved himself before going to the interview.",opts:["shaved himself before","shaved before","was shaving himself before","had shaved himself before"],ans:1,exp:"'Shave' does not take a reflexive pronoun. 'He shaved before going to the interview.' Remove 'himself'."}
    ]
  },

  'Rule_17_As_Well_As_Agreement': {
    intro: '"As well as, together with, along with, and not, in addition to, like, unlike, with, rather than, except, no less than, nothing but, more than one" — in sab se do subjects jude hon toh verb hamesha PEHLE wale subject ke saath agree karti hai. Dusre subject ko ignore karo verb ke liye.',
    words: [
      {
        word: 'As well as / Along with',
        preposition: 'verb with FIRST subject',
        def_en: 'When subjects are connected by these phrases, verb agrees with the FIRST (main) subject only.',
        def_hi: 'In phrases se subjects jude hon toh verb sirf PEHLE subject ke saath agree karti hai.',
        example: 'John, as well as Mary, wants to drop the course.',
        note: '"John" is first subject (singular) → singular verb "wants". Mary is secondary — ignore for verb agreement. Think: "as well as Mary" is parenthetical (in brackets mentally).'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"The club members, along with his owner, <u>(A)</u> were arrested. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:3,exp:"'Along with' — verb agrees with first subject 'The club members' (plural). 'Were' is the correct plural verb. No error here."},
      {type:"Fill in the Blank",q:"John, as well as Mary, _____ to drop the course.",opts:["want","wants","wanted","have wanted"],ans:1,exp:"When subjects are connected by 'as well as', the verb agrees with the FIRST subject. 'John' is singular, so 'wants' (singular) is correct."},
      {type:"Sentence Correction",q:"He, and not his friends, are found guilty.",opts:["are found guilty","is found guilty","were found guilty","have been found guilty"],ans:1,exp:"'And not' connects the subjects. Verb agrees with the first subject 'He' (singular). 'He, and not his friends, is found guilty.'"},
      {type:"Fill in the Blank",q:"The teacher, together with her students, _____ going on the trip.",opts:["are","were","is","have been"],ans:2,exp:"'Together with' — verb agrees with first subject 'The teacher' (singular). 'Is going' is correct. 'Students' is secondary — ignored for verb agreement."},
      {type:"Error Spotting",q:"Ram, no less than Shyam, <u>(A)</u> are responsible for this. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"'No less than' — verb agrees with first subject 'Ram' (singular). 'Are' is wrong. Correct: 'Ram, no less than Shyam, IS responsible for this.'"}
    ]
  },

  'Rule_18_Noun_vs_Verb_Similar': {
    intro: '"Advice" (Noun) vs "Advise" (Verb). "Practice" (Noun) vs "Practise" (Verb — British English). "Belief" (Noun) vs "Believe" (Verb). Sentence mein noun chahiye ya verb — yeh dekho. Subject-verb structure mein verb chahiye; "my/the/a" ke baad noun chahiye.',
    words: [
      {
        word: 'Advice / Advise',
        preposition: 'noun / verb',
        def_en: 'Advice (noun) = the suggestion given. Advise (verb) = to give a suggestion. In US English, "practice" serves as both.',
        def_hi: 'Advice (noun) = di gayi salah. Advise (verb) = salah dena. Sentence mein position dekho — verb chahiye ya noun.',
        example: 'I advise you to follow this advice.',
        note: '"Advice" rhymes with "ice" (noun). "Advise" rhymes with "wise" (verb). Same pattern: practice/practise, belief/believe, licence/license.'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"I _____ you to practice a lot since practice makes a man perfect.",opts:["advice","advise","advised","advising"],ans:1,exp:"'Advise' is the verb form. In the sentence, we need a verb ('I advise you'). 'Advice' is a noun. So 'advise' is correct."},
      {type:"Error Spotting",q:"It is my belief <u>(A)</u> that my students <u>(B)</u> are very talented. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:3,exp:"'Belief' is the correct noun form here. 'Believe' would be the verb. The sentence uses 'belief' correctly as a noun after 'my'. No error."},
      {type:"Fill in the Blank",q:"The doctor's _____ was to rest for a week.",opts:["advise","advice","advisement","advising"],ans:1,exp:"After possessive 'doctor's', a noun is needed. 'Advice' is the noun form. 'The doctor's advice was to rest for a week.'"},
      {type:"Sentence Correction",q:"May I have your advise on this matter?",opts:["your advise","your advice","your advising","you advice"],ans:1,exp:"'Your' (possessive) needs a noun after it. 'Advice' is the noun. 'May I have your advice on this matter?' 'Advise' is a verb and cannot follow 'your'."},
      {type:"Fill in the Blank",q:"I _____ in hard work and dedication.",opts:["belief","believe","believing","believed in"],ans:1,exp:"'Believe' is the verb form. The sentence needs a verb ('I believe'). 'Belief' is a noun and cannot be the main verb of a sentence without modification."}
    ]
  },

  'Rule_19_Three_Cases_Pronouns': {
    intro: 'Pronouns ke teen cases hain: Subjective (I, we, you, he, she, it, they), Objective (me, us, you, him, her, it, them), Possessive Adjective (my, our, your, his, her, its, their). Comparison mein subjective se subjective compare karo, objective se objective.',
    words: [
      {
        word: 'Comparison Rule',
        preposition: 'subjective with subjective',
        def_en: 'In comparisons, compare subjective with subjective and objective with objective. "She is taller than I" (not "me") because "she" (subjective) is compared to another person.',
        def_hi: 'Comparisons mein subjective se subjective compare karo. "She is taller than I" — "she" aur "I" dono subjective hain.',
        example: 'She is taller than I. / He likes her more than me.',
        note: 'Test: complete the hidden verb. "She is taller than I [am]." The hidden verb after "than" tells you which case to use. "He likes her more than [he likes] me" → objective "me" is object of hidden "likes".'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"She is taller than me.",opts:["taller than me","taller than I","taller than mine","taller than myself"],ans:1,exp:"In comparisons, subjective case is compared to subjective case. 'She' (subjective) is compared to 'I' (subjective), not 'me' (objective). Correct: 'She is taller than I.'"},
      {type:"Error Spotting",q:"She likes chocolates more than <u>(A)</u> me. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"We cannot compare 'chocolates' (thing) with 'me' (person). The comparison is between 'she' and the pronoun, so subjective 'I' must be used: 'more than I.'"},
      {type:"Fill in the Blank",q:"Nobody in the class is as intelligent as _____.",opts:["me","I","mine","myself"],ans:1,exp:"Comparing subjects: 'Nobody' (subject) is compared to another subject. Subjective case 'I' is correct. 'Nobody is as intelligent as I [am].'"},
      {type:"Sentence Correction",q:"He is a better player than me.",opts:["than me","than I","than mine","than myself"],ans:1,exp:"Comparing two players (subjects): 'He' (subjective) compared to 'I' (subjective). 'He is a better player than I [am].' 'Me' (objective) is wrong."},
      {type:"Fill in the Blank",q:"My sister is not as tall as _____.",opts:["me","I","mine","myself"],ans:1,exp:"'My sister' (subject) is being compared to another subject. Use subjective case 'I'. 'My sister is not as tall as I [am].'"}
    ]
  },

  'Rule_20_Who_vs_Whom': {
    intro: '"Who" = subjective pronoun (verb ka subject). "Whom" = objective pronoun (verb ya preposition ka object). Test: who/whom ki jagah he/she ya him/her lagao. He/She fit ho → Who. Him/Her fit ho → Whom. Yeh simple test kabhi fail nahi karta.',
    words: [
      {
        word: 'Who (subject)',
        preposition: 'subject of verb',
        def_en: 'Who = subject pronoun. Used when the pronoun is the subject of a verb. Test: replace with he/she.',
        def_hi: 'Who = subject pronoun. Verb ka kaam karne wala. Test: he/she fit ho toh who.',
        example: 'Jyoti is the girl who got the job. (She got the job → who)',
        note: 'Who = he/she substitute. In "The man who called" — he called → who. Quick test always works.'
      },
      {
        word: 'Whom (object)',
        preposition: 'object of verb/preposition',
        def_en: 'Whom = object pronoun. Used when the pronoun is the object of a verb or preposition. Test: replace with him/her.',
        def_hi: 'Whom = object pronoun. Verb ya preposition ka object. Test: him/her fit ho toh whom.',
        example: 'Mrs. Dixit consulted an astrologer whom she met. (She met him → whom)',
        note: 'Whom = him/her substitute. "The man whom you called" — you called him → whom. After prepositions (to, for, with), always use whom.'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"Mrs. Dixit consulted an astrologer _____ she met in Sonpur.",opts:["who","whom","which","that"],ans:1,exp:"Test: 'She met him in Sonpur' — 'him' → use 'whom'. 'Whom' is correct as it functions as the object of the verb 'met'."},
      {type:"Fill in the Blank",q:"Jyoti is the girl _____ got the job.",opts:["whom","which","who","that"],ans:2,exp:"Test: 'She got the job' — 'she' → use 'who'. 'Who' is correct as it is the subject of the verb 'got'."},
      {type:"Error Spotting",q:"Whom can we turn <u>(A)</u> to in a time of crisis? <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:3,exp:"Test: 'Can we turn to her?' — 'her' → use 'whom'. 'Whom' is correct. No error in the sentence."},
      {type:"Fill in the Blank",q:"To _____ did you give the letter?",opts:["who","whom","which","whose"],ans:1,exp:"After preposition 'to', objective case is needed. 'Whom' is objective. Test: 'You gave the letter to him' → him → whom. 'To whom did you give the letter?'"},
      {type:"Error Spotting",q:"Who did you speak to <u>(A)</u> at the conference? <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Speak to' — the pronoun is the object of the preposition 'to'. Test: 'You spoke to him' → him → whom. Correct: 'Whom did you speak to at the conference?' (though 'who' is colloquially accepted, formally 'whom' is required)."}
    ]
  },

  'Rule_21_No_Possessive_Before_Words': {
    intro: '"Separation, excuse, mention, favour, pardon, leave, report, sight" jaise words ke pehle possessive case nahi aata. Inke pehle "of + objective case" use karo. "Your separation" galat; "Separation from you" ya "the separation of you" sahi. Possessive = your, his, her, my, their, our.',
    words: [
      {
        word: 'No-possessive words',
        preposition: 'of + objective case',
        def_en: 'Words like separation, excuse, mention, favour, pardon, leave, report, sight do NOT take possessive case before them. Use "of + objective" instead.',
        def_hi: 'Separation, excuse, mention jaise words ke pehle possessive nahi aata. "Of + objective" use karo.',
        example: 'Separation from you pains me. (Not: Your separation pains me.)',
        note: 'These words resist possession because the action they describe naturally involves "from" or "of". "Mention of him" — not "his mention". "Report of her" — not "her report".'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"Your separation pains me a lot and I become sad.",opts:["Your separation","Separation from you","Your separating","You separation"],ans:1,exp:"'Separation' does not take possessive case. 'Your separation' is incorrect. Correct: 'Separation from you pains me a lot.'"},
      {type:"Error Spotting",q:"His mention <u>(A)</u> in the story <u>(B)</u> received great applause. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Mention' does not take possessive case before it. 'His mention' is incorrect. Correct: 'The mention of him in the story received great applause.'"},
      {type:"Fill in the Blank",q:"I am grateful for _____ of the matter to the manager.",opts:["your report","the report","report of you","his report"],ans:1,exp:"'Report' does not take possessive. 'The report of the matter' or 'reporting the matter' is correct. 'Your report' (possessive) is incorrect usage."},
      {type:"Sentence Correction",q:"Her sight pleased the audience.",opts:["Her sight","The sight of her","Sight of her","Her sighting"],ans:1,exp:"'Sight' does not take possessive. Correct: 'The sight of her pleased the audience.' Not 'Her sight'."},
      {type:"Fill in the Blank",q:"He begged for _____ for arriving late.",opts:["her pardon","pardon of her","the pardon of her","the pardon"],ans:0,exp:"Actually, 'her pardon' here means asking HER to pardon (her = the person granting pardon, not possessive of pardon). This is acceptable. BUT if meaning 'pardon granted to him', use 'his pardon' → which would be wrong → 'pardon for him'. Context determines."}
    ]
  },

  'Rule_22_Each_Other_vs_One_Another': {
    intro: '"Each other" sirf do logon/cheezein ke liye use hota hai. "One another" do se zyada logon ke liye. Formal grammar mein yeh distinction maintain karna zaroori hai. "Peter and Mary" (2 log) → each other. "All students" (2+ log) → one another.',
    words: [
      {
        word: 'Each other',
        preposition: 'for exactly two',
        def_en: 'Used when referring to exactly two people or things in a reciprocal relationship.',
        def_hi: 'Bilkul do logon ya cheezein ke beech use hota hai. Ek doosre ke liye.',
        example: 'Peter and Mary helped each other with the project.',
        note: '"Each other" = 2 people. Simple rule: if you can count them and there are exactly 2 → each other. More than 2 → one another.'
      },
      {
        word: 'One another',
        preposition: 'for more than two',
        def_en: 'Used when referring to more than two people or things in a reciprocal relationship.',
        def_hi: 'Do se zyada logon ya cheezein ke beech use hota hai.',
        example: 'All citizens should love one another.',
        note: '"One another" = 3 or more people. "The five friends helped one another." If in doubt about group size, "one another" is the safer formal choice.'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"All citizens should love each other.",opts:["love each other","love one another","love one other","love another"],ans:1,exp:"'All citizens' refers to more than two people. 'Each other' is used for exactly two. For more than two, 'one another' is correct."},
      {type:"Fill in the Blank",q:"Peter and Mary helped _____ with their project.",opts:["one another","each other","themselves","the other"],ans:1,exp:"Peter and Mary = two people. 'Each other' is used for exactly two people. 'One another' is for more than two."},
      {type:"Fill in the Blank",q:"The three friends always supported _____.",opts:["each other","one another","themselves","the others"],ans:1,exp:"Three friends = more than two. 'One another' is used for more than two people. 'The three friends always supported one another.'"},
      {type:"Error Spotting",q:"The two brothers fought with one another <u>(A)</u> constantly. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Two brothers' = exactly two people. 'Each other' should be used, not 'one another'. Correct: 'The two brothers fought with EACH OTHER constantly.'"},
      {type:"Fill in the Blank",q:"The five team members congratulated _____ after the win.",opts:["each other","one another","themselves","the other"],ans:1,exp:"Five team members = more than two. 'One another' is correct for groups of more than two. 'The five team members congratulated one another.'"}
    ]
  },

  'Rule_23_Seldom_or_Never': {
    intro: '"Seldom or never" aur "Seldom, if ever" dono sahi hain. Lekin "Seldom or ever" GALAT hai. Isi tarah "Little or nothing" aur "Little, if anything" sahi hain; "Little or everything" galat hai. Rule: negative expressions ko negative pairs ki zaroorat hoti hai.',
    words: [
      {
        word: 'Seldom or never ✓',
        preposition: 'correct pairing',
        def_en: '"Seldom or never" and "Seldom, if ever" are both correct. "Seldom or ever" is ALWAYS wrong.',
        def_hi: '"Seldom or never" aur "Seldom, if ever" dono theek. "Seldom or ever" hamesha galat.',
        example: 'He seldom or never comes to class. / He seldom, if ever, comes to class.',
        note: 'Think logically: "seldom" = rarely. Pairing with "never" (more negative) makes sense. "Ever" is positive → cannot pair with "seldom". "Seldom or NEVER" — both lean negative.'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"Seldom or ever does he come to my house.",opts:["Seldom or ever","Seldom or never","Seldom, if ever","Either B or C"],ans:3,exp:"'Seldom or ever' is incorrect. Both 'Seldom or never' and 'Seldom, if ever' are correct alternatives. Option D (either B or C) is the best answer."},
      {type:"Error Spotting",q:"I can find little <u>(A)</u> or anything <u>(B)</u> on this table. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"'Little or anything' is incorrect. The correct phrases are 'little or nothing' or 'little, if anything'. 'Little or anything' does not exist as a standard expression."},
      {type:"Fill in the Blank",q:"He _____ goes out at night.",opts:["seldom or ever","seldom or never","seldom if never","seldom and never"],ans:1,exp:"'Seldom or never' is the correct pairing. 'Seldom or ever' is wrong. 'He seldom or never goes out at night.'"},
      {type:"Sentence Correction",q:"There was little or everything he could do about the situation.",opts:["little or everything","little or nothing","little, if anything","Either B or C"],ans:3,exp:"'Little or everything' is incorrect (opposites cannot be paired this way). Both 'little or nothing' and 'little, if anything' are correct. Either B or C works."},
      {type:"Fill in the Blank",q:"She _____ misses a chance to learn something new.",opts:["seldom or ever","seldom, if ever","little or ever","seldom or anything"],ans:1,exp:"'Seldom, if ever' is the correct formal expression meaning almost never. 'She seldom, if ever, misses a chance to learn something new.'"}
    ]
  },

  'Rule_24_Very_Superlative': {
    intro: '"Very" ke saath superlative degree use karte waqt "the" pehle aata hai: "the very best", "the very worst". "Much" ke saath superlative use karte waqt "the" superlative ke pehle aata hai: "much the best". "Very" positive degree ke saath; "Much" comparative degree aur past participle ke saath.',
    words: [
      {
        word: 'the very + superlative',
        preposition: 'the → very → superlative',
        def_en: 'Word order: "the very best" (the + very + superlative). NOT "very the best".',
        def_hi: 'Word order: "the very best" (the + very + superlative). "Very the best" galat hai.',
        example: 'She is the very best student in the class.',
        note: '"The very best" = extreme emphasis on superlative. "Very" here means "absolutely" or "exactly". The order is non-negotiable: THE → VERY → SUPERLATIVE.'
      },
      {
        word: 'much + comparative',
        preposition: 'much before comparative',
        def_en: '"Much" amplifies comparative degree: "much better", "much stronger". For superlative: "much the best". Never use "very" with comparative.',
        def_hi: '"Much" comparative degree ke saath. "Very" sirf positive degree ke saath. "Very better" GALAT hai.',
        example: 'He is much stronger than his brother.',
        note: '"Very" only before positive adjectives (very good, very tall). "Much" before comparatives (much better, much taller) and past participles (much respected).'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"He is very the best student of my class.",opts:["very the best","the very best","much the best","very best"],ans:1,exp:"With superlative degree + 'very', the correct order is 'the very best' (the + very + superlative). 'Very the best' is incorrect word order."},
      {type:"Error Spotting",q:"He is the much best <u>(A)</u> student of my class. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Much the best' is correct (much + the + superlative). 'The much best' is wrong word order. Correct: 'He is much the best student of my class.'"},
      {type:"Fill in the Blank",q:"He is _____ smarter than all other students.",opts:["very","much","the very","the much"],ans:1,exp:"'Much' is used with comparative degree (smarter = comparative). 'Much smarter than' is correct. 'Very' is used with positive degree adjectives."},
      {type:"Fill in the Blank",q:"This is _____ beautiful painting I have ever seen.",opts:["very","much","the very","a very"],ans:2,exp:"With superlative implied ('I have ever seen' = superlative context), use 'the very'. 'This is the very most beautiful painting' — or simpler: 'the very best painting I have ever seen.'"},
      {type:"Error Spotting",q:"She is very better <u>(A)</u> than her sister. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Very' cannot be used with comparative degree ('better'). Use 'much': 'She is MUCH better than her sister.' 'Very' is only for positive degree adjectives."}
    ]
  },

  'Rule_25_Use_of_Enough': {
    intro: '"Enough" ka use do tarah hota hai. Adjective ki tarah (noun ke pehle): "enough sugar", "enough time". Adverb ki tarah (adjective ke baad): "big enough", "old enough". Rule: adjective + enough, kabhi enough + adjective nahi (adverb use mein).',
    words: [
      {
        word: 'Enough as adjective',
        preposition: 'enough + noun',
        def_en: 'As an adjective, "enough" comes BEFORE the noun it modifies. "Enough money", "enough time".',
        def_hi: 'Adjective ki tarah "enough" noun ke PEHLE aata hai. "Enough money", "enough time".',
        example: 'Do you have enough money for the trip?',
        note: 'Adjective use: enough + noun. "We have enough food." Easy to remember: adjectives usually precede nouns.'
      },
      {
        word: 'Enough as adverb',
        preposition: 'adjective + enough',
        def_en: 'As an adverb, "enough" comes AFTER the adjective it modifies. "Big enough", "tall enough", "not old enough".',
        def_hi: 'Adverb ki tarah "enough" adjective ke BAAD aata hai. "Big enough", "tall enough".',
        example: 'You are not big enough for basketball.',
        note: 'Adverb use: adjective + enough. "She is smart enough." Common error: "She is enough smart" — WRONG. Always adjective THEN enough.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"He has enough sugar <u>(A)</u> to last <u>(B)</u> through winter. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:3,exp:"'Enough sugar' — 'enough' is used as adjective before noun 'sugar'. This is correct. No error in the sentence."},
      {type:"Sentence Correction",q:"You are not enough big for basketball.",opts:["not enough big","not big enough","not enough bigger","not enough biggest"],ans:1,exp:"When 'enough' qualifies an adjective, it comes AFTER the adjective: 'adjective + enough'. Correct: 'You are not big enough for basketball.'"},
      {type:"Fill in the Blank",q:"He is _____ to drive a car.",opts:["enough old","old enough","enough older","quite enough old"],ans:1,exp:"Adverb use of 'enough': adjective comes FIRST, then 'enough'. 'Old enough to drive' — correct. 'Enough old' is wrong."},
      {type:"Fill in the Blank",q:"Is there _____ room for all of us?",opts:["room enough","enough room","quite room","room quite enough"],ans:1,exp:"Adjective use of 'enough': enough + noun. 'Enough room for all of us' is correct. 'Room enough' reverses the order (though poetic usage exists, standard is 'enough room')."},
      {type:"Error Spotting",q:"She is enough intelligent <u>(A)</u> to handle this problem. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Enough intelligent' is wrong — when modifying an adjective, 'enough' must come AFTER: 'intelligent enough'. Correct: 'She is intelligent enough to handle this problem.'"}
    ]
  },

  'Rule_26_Adverb_As': {
    intro: '"As" adverb ki tarah kuch verbs ke saath use hota hai: treat, define, regard, describe, respect, depict, portray, view, know. Lekin kuch verbs ke saath "as" KABHI nahi aata: elect, name, think, consider, call, make, choose, appoint. In words ke saath "as" mat lagao.',
    words: [
      {
        word: 'As-allowed verbs',
        preposition: 'treat/define/regard + as',
        def_en: '"As" can be used with: treat, define, regard, describe, respect, depict, portray, view, know.',
        def_hi: '"As" in verbs ke saath chal sakta hai: treat, define, regard, describe, view, know.',
        example: 'Biology is defined as the science of living beings.',
        note: 'These verbs describe what something IS or how it is SEEN/TREATED. "Regard as", "treat as", "know as" all make sense logically.'
      },
      {
        word: 'No-as verbs',
        preposition: 'elect/name/consider — no as',
        def_en: '"As" CANNOT be used with: elect, name, think, consider, call, make, choose, appoint.',
        def_hi: '"As" in verbs ke saath KABHI nahi: elect, name, think, consider, call, make, choose, appoint.',
        example: 'She was elected Chair. / He thinks her a fool.',
        note: 'These are "naming" verbs — they directly assign a name/role without "as". "They elected him president" (not "as president"). "I consider him intelligent" (not "as intelligent").'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"She was elected as <u>(A)</u> Chair of the Board <u>(B)</u> of Governors. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'As' cannot be used with 'elected'. Correct: 'She was elected Chair of the Board of Governors' (without 'as')."},
      {type:"Fill in the Blank",q:"Biology is _____ the science of living beings.",opts:["defined as","defined to be","elected as","called as"],ans:0,exp:"'Define' can take 'as': 'Biology is defined as the science of living beings.' 'As' can be used with 'defined, regarded, described, treated' etc."},
      {type:"Sentence Correction",q:"He thinks her as a fool.",opts:["thinks her as a fool","thinks her a fool","thinks her to be fool","thinks of her as fool"],ans:1,exp:"'Think' (in the sense of consider) does NOT take 'as'. Correct: 'He thinks her a fool.' No 'as' after 'thinks'."},
      {type:"Fill in the Blank",q:"The committee _____ him the new chairman.",opts:["appointed as","appointed","elected as","chose as"],ans:1,exp:"'Appoint' does not take 'as'. 'The committee appointed him the new chairman.' (without 'as'). 'Appointed as' is a common error."},
      {type:"Error Spotting",q:"We regard him <u>(A)</u> as an expert in the field. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:3,exp:"'Regard' is in the allowed list — it CAN take 'as'. 'Regard him as an expert' is perfectly correct. No error."}
    ]
  },

  'Rule_27_Although_Never_But': {
    intro: '"Although/Though" ek subordinating conjunction hai. Yeh optionally "yet" ke saath pair ho sakta hai main clause mein. Lekin "although/though...but" HAMESHA galat hai. "But" aur "although" ek saath kabhi nahi aate. "Yet" optional hai — ho bhi sakta hai, na bhi.',
    words: [
      {
        word: 'Although / Though',
        preposition: 'never with but',
        def_en: '"Although/Though" introduces a subordinate clause. Optional pair: "yet". FORBIDDEN pair: "but". One subordinating conjunction is enough.',
        def_hi: '"Although/Though" subordinate clause shuru karta hai. "Yet" optional. "But" forbidden. Ek conjunction kaafi hai.',
        example: 'Although she is rich, she is very humble. / Although she is rich, yet she is humble.',
        note: 'Simple rule: sentence can have ONE main conjunction. "Although" does the contrast job. Adding "but" is like adding a second conjunction — redundant and wrong.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"Although she is rich, <u>(A)</u> but she thinks twice before spending a penny. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"'Although' as a subordinating conjunction never takes 'but' in the main clause. Correct: Either 'Although she is rich, she thinks twice...' or 'She is rich, but she thinks twice...'"},
      {type:"Fill in the Blank",q:"Although she is rich, _____ she thinks twice before spending a penny.",opts:["but","yet","so","however"],ans:1,exp:"'Although' can optionally pair with 'yet' in the main clause. 'Yet' is acceptable. 'But' is never acceptable with 'although'."},
      {type:"Sentence Correction",q:"Though he tried hard, but he could not succeed.",opts:["Though he tried hard, but","Though he tried hard,","Although he tried hard, but","Even though he tried hard, but"],ans:1,exp:"'Though/Although' never pairs with 'but'. Remove 'but'. Correct: 'Though he tried hard, he could not succeed.' Or 'He tried hard, but he could not succeed.'"},
      {type:"Fill in the Blank",q:"_____ he was tired, he kept working.",opts:["Although but","Although yet","Although","Both although and yet"],ans:2,exp:"'Although' alone is correct — it introduces the subordinate clause. No additional conjunction needed. 'Although he was tired, he kept working.'"},
      {type:"Error Spotting",q:"Even though she was unwell, <u>(A)</u> yet she attended all her classes. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:3,exp:"'Even though...yet' is an acceptable pairing. 'Yet' is optional with 'although/though/even though'. The sentence is grammatically correct. No error."}
    ]
  },

  'Rule_28_Stative_Verbs': {
    intro: 'Kuch verbs "-ing" form mein kabhi nahi aate — inhe Stative Verbs kehte hain. Teen categories: Possession (own, belong, have, include, possess, owe, contain), Perception (see, smell, taste, hear, feel, appear, seem), Feeling (love, know, think, hate, want, need, desire, wish, like). "I am knowing" galat; "I know" sahi.',
    words: [
      {
        word: 'Stative Verbs — Possession',
        preposition: 'no -ing form',
        def_en: 'Possession verbs never use continuous tense: own, belong, have, include, possess, owe, contain, comprise, consist.',
        def_hi: 'Possession verbs continuous tense mein kabhi nahi aate.',
        example: 'I own a car. (NOT: I am owning a car.)',
        note: 'Possession = static state, not an action happening right now. States don\'t progress over time — they just ARE. This is why -ing (continuous) is wrong.'
      },
      {
        word: 'Stative Verbs — Senses/Feelings',
        preposition: 'no -ing form',
        def_en: 'Perception verbs (see, smell, taste, hear, feel) and feeling verbs (love, hate, want, know, need) never use continuous tense.',
        def_hi: 'Perception aur feeling verbs continuous tense mein nahi aate.',
        example: 'This sauce tastes strange. (NOT: is tasting). She has always hated jazz. (NOT: has been hating)',
        note: 'Exception: some verbs have dual meaning. "Think" as opinion = stative ("I think he is wrong"). "Think" as active process = dynamic ("I am thinking about your offer"). Context determines.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"I <u>(A)</u> am owning <u>(B)</u> a car. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"'Own' is a stative verb (possession) and cannot be used in continuous (-ing) form. Correct: 'I own a car.'"},
      {type:"Sentence Correction",q:"This sauce is tasting strange.",opts:["is tasting strange","tastes strange","has been tasting strange","was tasting strange"],ans:1,exp:"'Taste' in the sense of perception is a stative verb — no ING form. Correct: 'This sauce tastes strange.'"},
      {type:"Error Spotting",q:"She has always been <u>(A)</u> hating <u>(B)</u> jazz. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"'Hate' is a feeling/stative verb and cannot be used in continuous form. Correct: 'She has always hated jazz.'"},
      {type:"Fill in the Blank",q:"The box _____ ten apples.",opts:["is containing","contains","has been containing","was containing"],ans:1,exp:"'Contain' is a stative verb (possession category) — no continuous form. 'The box contains ten apples.' Simple Present is correct."},
      {type:"Error Spotting",q:"I am knowing <u>(A)</u> the answer to that question. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Know' is a stative verb (feeling/mental state) — cannot be used in continuous form. Correct: 'I know the answer to that question.'"}
    ]
  },

  'Rule_29_Perfect_Tense_Words': {
    intro: 'Kuch words hamesha Perfect Tense maangite hain: ever, never, yet, already, now, just now, until now, always, occasionally, often, lately, recently, so far, up to now. In words ke saath Simple Past use karna galat hai. Hamesha Present Perfect ya Past Perfect use karo.',
    words: [
      {
        word: 'Perfect-tense trigger words',
        preposition: 'have/has/had + V3',
        def_en: 'Words like ever, never, yet, already, just, recently, lately, so far, until now ALWAYS require Perfect tense (Present or Past Perfect).',
        def_hi: 'Ever, never, yet, already, recently, lately, so far — in words ke saath hamesha Perfect tense chahiye.',
        example: 'He has already gone there. / I have never seen this before.',
        note: 'These words signal a time frame that connects past to present (or past to another past event). Simple Past is "closed" (specific time); Perfect tense is "open" (up to now). Hence Perfect is required.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"He went there <u>(A)</u> already. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Already' requires Perfect Tense. 'Went' (Simple Past) cannot be used with 'already'. Correct: 'He has gone there already' or 'He had gone there already.'"},
      {type:"Sentence Correction",q:"Aman completed his work up to now.",opts:["completed his work up to now","has not completed his work up to now","had completed his work up to now","completes his work up to now"],ans:1,exp:"'Up to now' requires Perfect Tense with negative. Correct: 'Aman has not completed his work up to now.'"},
      {type:"Fill in the Blank",q:"The train _____ already left.",opts:["had","has","will have","was"],ans:1,exp:"'Already' requires Perfect Tense. 'The train has already left' is correct (Present Perfect)."},
      {type:"Fill in the Blank",q:"I have _____ visited the Taj Mahal.",opts:["yet","never","ago","before"],ans:1,exp:"'Never' is a Perfect tense trigger word. 'I have never visited the Taj Mahal' is correct. Note: 'yet' (in negatives/questions: 'I haven't visited yet') also works."},
      {type:"Error Spotting",q:"She recently joined <u>(A)</u> a new company. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Recently' is a Perfect tense trigger word. Simple Past 'joined' is wrong. Correct: 'She has recently joined a new company.' (Present Perfect)."}
    ]
  },

  'Rule_30_Collective_Nouns': {
    intro: 'Collective noun + saath mein kaam → singular verb. Collective noun + alag alag kaam → plural verb. "The jury is taking a decision" (saath mein) → singular. "The jury are arguing among themselves" (alag alag) → plural. Police, cattle, clergy, folk — ye hamesha plural noun hain.',
    words: [
      {
        word: 'Collective noun — together',
        preposition: 'singular verb',
        def_en: 'When all members of a collective noun are doing the SAME task together, use singular verb.',
        def_hi: 'Jab sabhi ek saath ek hi kaam kar rahe hon, singular verb.',
        example: 'The jury has reached a verdict. / The team is playing well.',
        note: 'Think: are they acting as ONE unit or as MANY individuals? One unit → singular. Many individuals (each doing something different) → plural.'
      },
      {
        word: 'Always-plural nouns',
        preposition: 'plural verb always',
        def_en: 'Police, cattle, clergy, folk, vermin, infantry, cavalry, people are always plural — always take plural verb.',
        def_hi: 'Police, cattle, clergy, folk — ye hamesha plural noun hain, hamesha plural verb lete hain.',
        example: 'The police are investigating the case.',
        note: 'These are NOT collective nouns — they ARE plural nouns. "The police is" is always wrong. Same for "cattle are", "clergy are".'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"The jury <u>(A)</u> are taking a decision. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"When a collective noun acts as one unit doing the same task, singular verb is used. 'Jury taking a decision' = all together. Correct: 'The jury is taking a decision.'"},
      {type:"Fill in the Blank",q:"The police _____ investigating the case.",opts:["is","was","are","has been"],ans:2,exp:"'Police' is a plural noun (not a collective noun). Plural nouns always take plural verbs. Correct: 'The police are investigating the case.'"},
      {type:"Sentence Correction",q:"The army is marching towards the Himalayas.",opts:["The army is","The army are","The army were","The army has"],ans:0,exp:"The army is marching as a whole (all together, same direction) = collective acting as one unit → singular verb 'is'. The sentence is already correct!"},
      {type:"Fill in the Blank",q:"The committee _____ divided in their opinion.",opts:["is","was","are","has been"],ans:2,exp:"'Divided in their opinion' = each member has a different view = different tasks. Treat as plural. 'The committee ARE divided in their opinion.'"},
      {type:"Error Spotting",q:"Cattle is considered <u>(A)</u> sacred in India. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Cattle' is always a plural noun — takes plural verb. 'Is' is wrong. Correct: 'Cattle ARE considered sacred in India.'"}
    ]
  },

  'Rule_31_Preposition_To_With_Ior': {
    intro: 'Kuch words ke baad hamesha preposition "to" aata hai: prefer, superior, inferior, junior, senior, addicted, exterior, posterior, known, ancillary. Important rule: "-ior" suffix wale words hamesha "to" lete hain, "than" nahi. "Superior to" sahi; "superior than" galat.',
    words: [
      {
        word: '-ior words + to',
        preposition: 'always to, never than',
        def_en: 'Any word ending in "-ior" (superior, inferior, junior, senior, exterior, posterior, ulterior) ALWAYS takes preposition "to", never "than".',
        def_hi: '"-ior" ending wale words hamesha "to" lete hain, "than" kabhi nahi.',
        example: 'He is senior to me. / This is inferior to that.',
        note: 'Memory trick: -IOR + TO. The "-ior" ending is a Latin suffix, and Latin comparatives used "to" not "than". Other words: prefer (to), addicted (to), known (to).'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"Breastfeeding is superior _____ bottle-feeding for babies.",opts:["than","from","to","over"],ans:2,exp:"'Superior' (ends in -ior) always takes preposition 'to'. 'Superior to' is correct. Never 'superior than'."},
      {type:"Error Spotting",q:"He is junior than <u>(A)</u> me in this organization. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Junior' (ends in -ior) takes preposition 'to', not 'than'. Correct: 'He is junior to me in this organization.'"},
      {type:"Fill in the Blank",q:"Too much alcohol is injurious _____ your health.",opts:["for","to","of","on"],ans:1,exp:"'Injurious to' is the correct collocation. 'Injurious to your health' is correct."},
      {type:"Fill in the Blank",q:"I prefer tea _____ coffee.",opts:["than","over","to","from"],ans:2,exp:"'Prefer' always takes 'to'. 'I prefer tea to coffee.' Never 'prefer...than'. 'Prefer' is in the same family as -ior words for preposition 'to'."},
      {type:"Error Spotting",q:"He is addicted to <u>(A)</u> junk food. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:3,exp:"'Addicted to' is the correct preposition. 'To' is correctly used here. No error."}
    ]
  },

  'Rule_32_As_As_vs_So_As': {
    intro: '"As...as" positive aur negative dono sentences mein use hota hai. "So...as" sirf negative sentences mein. Dono ke beech blanks mein positive degree adjective aata hai. Yaad rakho: "Not so...as" = negative me sahi. "So...as" positive mein = GALAT.',
    words: [
      {
        word: 'As...as',
        preposition: 'positive and negative',
        def_en: '"As...as" is used in both positive and negative comparisons of equality.',
        def_hi: '"As...as" positive aur negative dono mein chal sakta hai.',
        example: 'He is as good as Ram. / He is not as good as Ram.',
        note: '"As...as" is universal for equal comparisons. "So...as" is restricted to NEGATIVE sentences only. When in doubt, "as...as" is safer.'
      },
      {
        word: 'Not so...as',
        preposition: 'negative only',
        def_en: '"So...as" is ONLY used in negative sentences (with "not"). Using "so...as" in positive sentences is wrong.',
        def_hi: '"So...as" sirf negative sentences mein (not ke saath). Positive mein "so...as" galat hai.',
        example: 'He is not so clever as his brother.',
        note: '"He is so clever as his brother" (positive) = WRONG. "He is not so clever as his brother" (negative) = correct. Positive must use "as...as".'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"He is so good as Ram.",opts:["so good as Ram","as good as Ram","so good than Ram","as good than Ram"],ans:1,exp:"'So...as' is used only in negative sentences. For a positive statement of equality, 'as...as' must be used. 'He is as good as Ram.'"},
      {type:"Error Spotting",q:"He is not so good as <u>(A)</u> Ram. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:3,exp:"'Not so...as' is correct for negative sentences. 'He is not so good as Ram' is perfectly correct. No error."},
      {type:"Fill in the Blank",q:"The new model is not _____ the old one.",opts:["so good as","as good as","better than","good as"],ans:0,exp:"Negative sentence: 'not so good as' OR 'not as good as' — both are acceptable. 'So good as' in negative context is correct. Both A and B would work, but A is what's listed here."},
      {type:"Sentence Correction",q:"She is not as tall so her sister.",opts:["as tall so","as tall as","so tall as","not so tall than"],ans:1,exp:"'As...as' for equal comparison. 'Not as tall as her sister' is correct. 'As tall so' is not a valid structure."},
      {type:"Fill in the Blank",q:"He works _____ his father.",opts:["as hard as","so hard as","as harder than","so hard than"],ans:0,exp:"Positive comparison of equality: use 'as...as'. 'He works as hard as his father.' 'So hard as' would need 'not' before it."}
    ]
  },

  'Rule_33_Times_No_Comparative': {
    intro: '"Times" ke baad comparative degree adjective KABHI nahi aata. "Three times larger" galat; "three times as large as" sahi. Lekin agar "times" likhit nahi ho (sirf "twice" likha ho), toh comparative chal sakta hai. "Twice cheaper" acceptable hai.',
    words: [
      {
        word: 'Times + as...as',
        preposition: 'never times + comparative',
        def_en: '"Times" is NEVER followed by a comparative adjective (-er form). Use "times as [adjective] as" instead.',
        def_hi: '"Times" ke baad comparative kabhi nahi. "Times as...as" use karo.',
        example: 'This book is three times as large as that book.',
        note: '"Three times larger" = WRONG. "Three times as large as" = CORRECT. The trick: after "times", always use "as + positive degree + as" structure.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"This book is three times larger <u>(A)</u> than that book. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Times' cannot be followed by comparative degree. 'Three times larger' is incorrect. Correct: 'This book is three times as large as that book.'"},
      {type:"Sentence Correction",q:"It is twice cheaper than that.",opts:["twice cheaper than","twice as cheap as","twice cheapest of","two times cheaper than"],ans:0,exp:"When 'times' is not written (just 'twice'), comparative can be used. 'Twice cheaper' is acceptable. So option A (original) is fine!"},
      {type:"Fill in the Blank",q:"This building is four times _____ that one.",opts:["taller than","as tall as","more taller than","tallest of"],ans:1,exp:"After 'times', use 'as + adjective + as'. 'Four times as tall as that one.' Never 'four times taller than'."},
      {type:"Error Spotting",q:"India's population is three times <u>(A)</u> as large as that of <u>(B)</u> Australia. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:3,exp:"'Three times as large as' correctly uses 'as...as' after 'times'. 'That of Australia' correctly avoids repeating 'population'. No error."},
      {type:"Sentence Correction",q:"This phone is five times more expensive than that.",opts:["five times more expensive than","five times as expensive as","five times expensiver than","five time as expensive as"],ans:1,exp:"After 'times', use 'as + positive adjective + as'. 'Five times as expensive as' is correct. 'Five times more expensive' uses comparative — wrong with 'times'."}
    ]
  },

  'Rule_34_Narration_Statement': {
    intro: 'Indirect speech hamesha ek statement hoti hai, question nahi. Statement structure: Subject + Helping Verb + Main Verb. Question structure: Question word + Helping verb + Subject + Main Verb. Indirect speech mein helping verb subject ke BAAD aata hai, pehle nahi.',
    words: [
      {
        word: 'Indirect Speech Structure',
        preposition: 'subject + verb order',
        def_en: 'In indirect (reported) speech, questions convert to statement order: Subject + Verb (not Verb + Subject as in direct questions).',
        def_hi: 'Indirect speech mein question statement ban jaata hai: Subject + Verb order. Question order (Verb + Subject) nahi.',
        example: 'Direct: "Where are you going?" → Indirect: He asked me where I was going.',
        note: 'Key sign of error: helping verb BEFORE subject in indirect speech (question order preserved) = WRONG. "He asked where was I going" → wrong. "He asked where I was going" → correct.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"He asked me <u>(A)</u> where are you going. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"In indirect speech, a question becomes a statement structure: Subject + Verb. 'Where are you going' is question structure. Correct: 'He asked me where I was going.'"},
      {type:"Sentence Correction",q:"He asked me what was my name.",opts:["what was my name","what my name was","what is my name","what my name is"],ans:1,exp:"In indirect speech, statement structure is used: Subject + Verb (what my name was). Not question structure (what was my name). Correct: 'what my name was'."},
      {type:"Fill in the Blank",q:"She asked him where _____ going.",opts:["was he","he was","is he","he is"],ans:1,exp:"Indirect speech: statement order = Subject + Verb. 'He was' (subject first) is correct. 'Was he' (question order) is wrong in indirect speech."},
      {type:"Sentence Correction",q:"He wanted to know why did I leave early.",opts:["why did I leave","why I had left","why I left","Both B and C"],ans:3,exp:"'Why did I leave' is question order — wrong in indirect speech. Both 'why I had left' (tense back-shifted) and 'why I left' are acceptable statement structures. Both B and C are correct."},
      {type:"Error Spotting",q:"She told me that she <u>(A)</u> will come the next day. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"In indirect speech with past reporting verb ('told'), 'will' changes to 'would'. Correct: 'She told me that she WOULD come the next day.'"}
    ]
  },

  'Rule_35_Or_Nor_Nearest_Subject': {
    intro: '"Or, nor, neither/nor, either/or, not only/but also" se connected subjects mein verb NEAREST subject ke saath agree karti hai (jo verb ke sabse paas ho). Agar nearest subject singular hai toh singular verb; agar plural hai toh plural verb.',
    words: [
      {
        word: 'Nearest Subject Rule',
        preposition: 'verb with closest subject',
        def_en: 'With or, nor, neither/nor, either/or, not only/but also — verb agrees with the NEAREST subject (closest to the verb).',
        def_hi: 'In conjunctions se connected subjects mein verb nearest (verb ke sabse paas wale) subject ke saath agree karti hai.',
        example: 'Either the teacher or the students are wrong.',
        note: '"Teacher or students are" — nearest subject is "students" (plural) → plural verb "are". "Students or teacher is" — nearest is "teacher" (singular) → singular "is".'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"Either the bears or the lion have <u>(A)</u> escaped from the zoo. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"With 'either...or', the verb agrees with the nearest subject. The nearest subject is 'lion' (singular), so 'has' should be used, not 'have'. Correct: '...the lion has escaped.'"},
      {type:"Fill in the Blank",q:"Not only the teachers but also the Principal _____ happy.",opts:["are","were","is","have been"],ans:2,exp:"Nearest subject to the verb is 'Principal' (singular). 'Not only...but also' follows nearest subject rule. 'Is' is correct."},
      {type:"Fill in the Blank",q:"Neither Ram nor his friends _____ invited to the party.",opts:["was","is","were","has been"],ans:2,exp:"Nearest subject is 'friends' (plural). 'Neither/nor' follows nearest subject rule. 'Were' (plural) is correct."},
      {type:"Sentence Correction",q:"Either you or I are responsible for this.",opts:["you or I are","you or I am","I or you are","I or you am"],ans:1,exp:"Nearest subject to verb is 'I' (first person singular). First person singular verb = 'am'. 'Either you or I am responsible for this.'"},
      {type:"Error Spotting",q:"Neither the students nor the teacher <u>(A)</u> were present. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"Nearest subject is 'teacher' (singular). Singular verb required. 'Were' is wrong. Correct: 'Neither the students nor the teacher WAS present.'"}
    ]
  },

  'Rule_36_Two_Qualities_More': {
    intro: 'Jab ek hi object ki DO qualities compare ki jaayein, hamesha "more" word use karo — comparative degree (-er form) mat use karo. "This shirt is more red than white" (not "redder than white"). Yeh rule tab laagu hota hai jab comparison ek hi cheez ki different qualities ke beech ho.',
    words: [
      {
        word: 'More for two qualities',
        preposition: 'more + adjective (not -er)',
        def_en: 'When comparing two qualities of the SAME object, always use "more + positive adjective", never the comparative (-er) form.',
        def_hi: 'Ek hi cheez ki do qualities compare karte waqt "more" use karo, comparative form nahi.',
        example: 'He is more brave than wise. / This cloth is more green than blue.',
        note: '"More brave than wise" = comparing two qualities (brave vs wise) of ONE person. Never "braver than wise". The -er form is for comparing the SAME quality in TWO different things.'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"This shirt is redder than white.",opts:["redder than white","more red than white","more white than red","more red or white"],ans:2,exp:"When comparing two qualities (red vs white) of the same object (shirt), use 'more'. 'This shirt is more white than red' or 'more red than white'. Never use 'redder than'."},
      {type:"Error Spotting",q:"This umbrella is more beautiful <u>(A)</u> than strong. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:3,exp:"Comparing two qualities (beautiful vs strong) of the same object (umbrella) — 'more' is correctly used. 'More beautiful than strong' is correct. No error."},
      {type:"Fill in the Blank",q:"He is _____ clever than honest.",opts:["cleverer","more","much","very"],ans:1,exp:"Comparing two qualities (clever vs honest) of the same person — use 'more'. 'He is MORE clever than honest.' Never 'cleverer than honest'."},
      {type:"Sentence Correction",q:"She is braver than generous.",opts:["braver than generous","more brave than generous","more generous than brave","more braver than generous"],ans:1,exp:"Comparing two qualities (brave vs generous) of the same person — use 'more'. 'She is MORE brave than generous.' Not 'braver than generous'."},
      {type:"Fill in the Blank",q:"This painting is _____ colorful than artistic.",opts:["more","much more","colorfuler","the more"],ans:0,exp:"Comparing two qualities (colorful vs artistic) of the same painting. Use 'more + adjective'. 'This painting is more colorful than artistic.'"}
    ]
  },

  'Rule_37_More_Than_One_Many_A': {
    intro: '"More than one + singular noun + singular verb". "Many a + singular noun + singular verb". "Many + plural noun + plural verb". "A good many / A great many + plural noun + plural verb". Yaad karo: More than one aur Many a dono singular verb lete hain despite plural meaning.',
    words: [
      {
        word: 'More than one / Many a',
        preposition: 'singular noun + singular verb',
        def_en: '"More than one + singular noun + singular verb". "Many a + singular noun + singular verb". Despite plural meaning, singular grammar.',
        def_hi: '"More than one" aur "Many a" plural meaning ke bawajood singular noun aur singular verb lete hain.',
        example: 'More than one student is absent. / Many a student is struggling.',
        note: '"More than one" is paradoxically singular. Why? "One" dominates the phrase grammatically. Same with "many a" — "a" (article) keeps it singular.'
      },
      {
        word: 'A great many / A good many',
        preposition: 'plural noun + plural verb',
        def_en: '"A great many" and "a good many" take plural noun and plural verb.',
        def_hi: '"A great many" aur "a good many" plural noun aur plural verb lete hain.',
        example: 'A great many students are absent today.',
        note: '"A great many" = a very large number (plural). Contrast: "many a" (singular) vs "many" / "a great many" (plural).'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"More than one student <u>(A)</u> are absent today. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"'More than one' takes singular noun and singular verb. 'More than one student IS absent today.' 'Are' should be replaced by 'is'."},
      {type:"Fill in the Blank",q:"A great many students _____ absent today.",opts:["is","was","are","has been"],ans:2,exp:"'A great many' takes plural noun and plural verb. 'A great many students are absent today.'"},
      {type:"Sentence Correction",q:"Many a student are struggling with grammar.",opts:["Many a student are","Many a student is","Many students is","Many a students are"],ans:1,exp:"'Many a + singular noun + singular verb'. 'Many a student is struggling' is correct."},
      {type:"Fill in the Blank",q:"More than one solution _____ been proposed.",opts:["have","has","had","were"],ans:1,exp:"'More than one' takes singular verb. 'More than one solution HAS been proposed.'"},
      {type:"Error Spotting",q:"A good many people <u>(A)</u> is opposed to this policy. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"'A good many' takes plural verb. 'Is' is wrong. Correct: 'A good many people ARE opposed to this policy.'"}
    ]
  },

  'Rule_38_Doubt_Doubtful': {
    intro: '"Doubt" aur "doubtful" ke saath "if" ya "whether" use karo. "No doubt" aur "not doubtful" ke saath "that" use karo. Rule simple: doubt present hai → uncertainty (if/whether). Doubt absent (no doubt/not doubtful) → certainty (that).',
    words: [
      {
        word: 'Doubt / Doubtful',
        preposition: 'if / whether',
        def_en: 'When "doubt" or "doubtful" is used (uncertainty present), use "if" or "whether" as connector.',
        def_hi: '"Doubt" ya "doubtful" ke saath uncertainty hai → "if" ya "whether" use karo.',
        example: 'I doubt whether he will come. / It is doubtful if she passed.',
        note: '"Doubt" = uncertainty → "whether/if" (both imply alternatives). "No doubt" = certainty → "that" (only one certain outcome). The logic is intuitive.'
      },
      {
        word: 'No doubt / Not doubtful',
        preposition: 'that',
        def_en: 'When "no doubt" or "not doubtful" is used (certainty), use "that" as connector.',
        def_hi: '"No doubt" ya "not doubtful" ke saath certainty hai → "that" use karo.',
        example: 'There is no doubt that he will win.',
        note: '"That" introduces a definite fact. "I have no doubt that..." = I am certain. No alternative is implied. Hence "that" (not "whether").'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"I have no doubt whether <u>(A)</u> it will rain or not. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'No doubt' requires 'that' as connector, not 'whether'. Correct: 'I have no doubt that it will rain.'"},
      {type:"Fill in the Blank",q:"There is a doubt _____ he goes there or not.",opts:["that","whether","which","what"],ans:1,exp:"'Doubt' (not 'no doubt') takes 'if' or 'whether'. 'There is a doubt whether he goes there or not.'"},
      {type:"Fill in the Blank",q:"It is not doubtful _____ she is the best candidate.",opts:["whether","if","that","which"],ans:2,exp:"'Not doubtful' = certainty → 'that'. 'It is not doubtful THAT she is the best candidate.'"},
      {type:"Sentence Correction",q:"I doubt that he will pass this exam.",opts:["doubt that","doubt whether","doubt if","Either B or C"],ans:3,exp:"'Doubt' takes 'if' or 'whether' — not 'that'. Both 'doubt whether' and 'doubt if' are correct. 'Doubt that' is wrong."},
      {type:"Fill in the Blank",q:"There is no doubt _____ he is the best player on the team.",opts:["whether","if","that","which"],ans:2,exp:"'No doubt' = certainty → 'that'. 'There is no doubt THAT he is the best player on the team.'"}
    ]
  },

  'Rule_39_Narration_Tense_Exceptions': {
    intro: 'Indirect speech mein tense peeche shift hota hai — lekin teen exceptions hain jahan tense NAHI badalta: (1) Universal Truths (hamesha Simple Present), (2) Historical Facts (hamesha Simple Present), (3) Proverbs (hamesha Simple Present). Habitual facts mein tense normally badalta hai.',
    words: [
      {
        word: 'Universal Truths',
        preposition: 'always Simple Present',
        def_en: 'Universal/scientific truths remain in Simple Present tense in indirect speech, even with past reporting verb.',
        def_hi: 'Universal/scientific truths indirect speech mein bhi Simple Present mein rehti hain.',
        example: 'He said that the earth revolves around the sun.',
        note: 'Universal truth = always true, will always be true. Tense shifting would change the meaning (implying it was only true in the past). Examples: "Honey is sweet", "The sun rises in the east".'
      },
      {
        word: 'Historical Facts',
        preposition: 'always Simple Present',
        def_en: 'Historical facts remain in Simple Present in indirect speech. They are treated as permanent truths.',
        def_hi: 'Historical facts bhi indirect speech mein Simple Present mein rehte hain.',
        example: 'The teacher said that Kalidas is the Shakespeare of India.',
        note: 'Historical facts, like universal truths, are considered permanent. "The Battle of Panipat was fought in 1526" — remains present tense in indirect: "...that the Battle of Panipat IS fought in 1526."'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"He told me that honey <u>(A)</u> was sweet. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"'Honey is sweet' is a universal truth. Universal truths always remain in Simple Present tense in indirect speech, even when the reporting verb is past. Correct: 'He told me that honey is sweet.'"},
      {type:"Sentence Correction",q:"The teacher said that Kalidas was the Shakespeare of India.",opts:["was the Shakespeare","is the Shakespeare","has been the Shakespeare","had been the Shakespeare"],ans:1,exp:"This is a historical fact. Historical facts are reported in Simple Present in indirect speech. Correct: 'The teacher said that Kalidas is the Shakespeare of India.'"},
      {type:"Fill in the Blank",q:"The science teacher told us that water _____ at 100 degrees Celsius.",opts:["boiled","had boiled","boils","was boiling"],ans:2,exp:"'Water boils at 100°C' is a scientific/universal truth. Tense does not change in indirect speech for universal truths. 'Boils' (Simple Present) is correct."},
      {type:"Sentence Correction",q:"He said that honesty was the best policy.",opts:["honesty was the best policy","honesty is the best policy","honesty had been the best policy","honesty would be the best policy"],ans:1,exp:"'Honesty is the best policy' is a proverb. Proverbs do not change tense in indirect speech. Simple Present 'is' remains. Not 'was'."},
      {type:"Fill in the Blank",q:"My teacher said that the moon _____ around the earth.",opts:["revolved","had revolved","revolves","was revolving"],ans:2,exp:"Universal truth: the moon revolves around the earth (always). Tense remains Simple Present in indirect speech. 'Revolves' is correct."}
    ]
  },

  'Rule_40_Little_A_Little_The_Little': {
    intro: '"Little" = na ke barabar (negative). "A little" = thoda sa (positive). "The little" = jo bhi hai woh sab. Countable ke liye: "Few" = na ke barabar, "A few" = kuch (positive), "The few" = jo bhi hain woh sab. Uncountable ke liye little/a little/the little; countable ke liye few/a few/the few.',
    words: [
      {
        word: 'Little / A little / The little',
        preposition: 'uncountable nouns',
        def_en: 'Little = hardly any (negative). A little = some (positive). The little = all that exists.',
        def_hi: 'Little = na ke barabar (negative). A little = thoda sa (positive). The little = jo bhi thoda bahut hai woh sab.',
        example: 'There is little milk (hardly any). / There is a little milk (some). / Use the little milk you have.',
        note: '"Little" = negative pessimistic. "A little" = positive optimistic. Think: "a" (article) adds positivity. Same logic for few/a few.'
      },
      {
        word: 'Few / A few / The few',
        preposition: 'countable nouns',
        def_en: 'Few = hardly any (negative). A few = some (positive). The few = all of them that exist.',
        def_hi: 'Few = bahut kam (negative). A few = kuch (positive). The few = jo bhi thode bahut hain woh sab.',
        example: 'He has few friends (almost none). / He has a few friends (some).',
        note: '"The few" and "the little" both mean: whatever limited amount exists, all of it. "He spent the little money he had" = spent ALL of his meager savings.'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"I cannot make tea since there is _____ milk.",opts:["a little","the little","little","few"],ans:2,exp:"'Little' means 'hardly any' (negative). Since there's no milk to make tea, 'little' (hardly any) is correct. 'A little' would be positive (some milk exists)."},
      {type:"Fill in the Blank",q:"He lost _____ friends he had.",opts:["few","a few","the few","little"],ans:2,exp:"'The few' means 'all that are available' — he lost ALL the friends he had. 'The few' is correct."},
      {type:"Sentence Correction",q:"A little knowledge is dangerous.",opts:["A little knowledge","Little knowledge","The little knowledge","Few knowledge"],ans:0,exp:"'A little knowledge' is correct — 'a little' means some but not much. 'A little knowledge is dangerous' is a well-known saying. The sentence is already correct."},
      {type:"Fill in the Blank",q:"She has _____ money left — not enough for dinner.",opts:["little","a little","the little","few"],ans:0,exp:"'Little' = hardly any (negative connotation). The context 'not enough for dinner' confirms negative meaning. 'She has little money left.'"},
      {type:"Fill in the Blank",q:"Would you like _____ more tea?",opts:["little","few","a little","a few"],ans:2,exp:"'Tea' is uncountable, so use 'little/a little' (not few). Positive/offering context → 'a little'. 'Would you like a little more tea?' — polite offer."}
    ]
  },

  'Rule_41_Objective_After_Preposition': {
    intro: 'Preposition ke baad hamesha Objective Case (me, us, you, him, her, it, them) aata hai — subjective case nahi. "But" aur "except" preposition ki tarah kaam kar sakte hain — inke baad bhi objective case. Verb "Let" ke baad bhi objective case aata hai.',
    words: [
      {
        word: 'Preposition + objective',
        preposition: 'me/him/her after prep',
        def_en: 'After any preposition, always use objective case pronoun (me, him, her, us, them). Never subjective (I, he, she, we, they).',
        def_hi: 'Preposition ke baad hamesha objective case (me, him, her) — subjective case (I, he, she) nahi.',
        example: 'Between you and me. / None but him is going.',
        note: '"Between you and I" = WRONG (classic error). "Between" is a preposition → objective case "me". "None but he" → "but" as preposition → objective "him".'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"None but he <u>(A)</u> is going to the party. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'But' here works as a preposition, so objective case is needed. 'He' is subjective case. Correct: 'None but him is going to the party.'"},
      {type:"Sentence Correction",q:"There is good friendship between you and I.",opts:["between you and I","between you and me","between you and myself","between I and you"],ans:1,exp:"'Between' is a preposition, so objective case must follow. 'I' is subjective; 'me' is objective. Correct: 'between you and me'."},
      {type:"Fill in the Blank",q:"Everyone except _____ was invited to the party.",opts:["I","he","him","his"],ans:2,exp:"'Except' acts as a preposition here. After preposition, objective case. 'Him' (objective) is correct. 'He' (subjective) is wrong."},
      {type:"Sentence Correction",q:"Let you and I decide this matter.",opts:["Let you and I","Let you and me","Let I and you","Let me and you"],ans:1,exp:"'Let' + verb requires objective case for pronouns. 'Let you and me decide' — 'me' (objective) is correct, not 'I' (subjective)."},
      {type:"Fill in the Blank",q:"This is a secret between _____ and _____ only.",opts:["you and I","I and you","you and me","me and you"],ans:2,exp:"'Between' is a preposition → objective case. 'Between you and me' is correct. 'Between you and I' is a very common but incorrect usage."}
    ]
  },

  'Rule_42_Pronoun_Sequence': {
    intro: 'Teen persons + "and" + Positive sentence mein order 2-3-1 (You, He, I). Negative/blame sentence mein order 1-2-3 (I, You, He). Do persons ke liye: Positive mein (2,3), (2,1), (3,1). Negative mein (1,2), (2,3), (1,3). Yaad rakho: positive mein dusron ko pehle rakho; negative/blame mein khud pehle lo zimmedari.',
    words: [
      {
        word: 'Positive sentence order',
        preposition: '2nd, 3rd, 1st (231)',
        def_en: 'In positive sentences with all three persons: order is 2nd person, 3rd person, 1st person (231). "You, he and I".',
        def_hi: 'Positive sentence mein teen persons ka order: 2nd, 3rd, 1st (231). "You, he and I".',
        example: 'You, he and I are good friends.',
        note: 'Positive = good things → speaker (1st person) is humble, puts others first. Order 231 = polite/courteous. In negative, speaker takes blame first (order 123).'
      },
      {
        word: 'Negative/blame order',
        preposition: '1st, 2nd, 3rd (123)',
        def_en: 'In negative/blame sentences: order is 1st person, 2nd person, 3rd person (123). "I, you and he are guilty."',
        def_hi: 'Negative/blame sentence mein order: 1st, 2nd, 3rd (123). "I, you and he are guilty."',
        example: 'I, you and he are responsible for this mistake.',
        note: 'Negative = bad things → speaker (1st person) takes blame first (honest/accountable). Order 123 in blame sentences.'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"I, you and he are good friends.",opts:["I, you and he","You, he and I","He, you and I","You and I and he"],ans:1,exp:"Positive sentence with all three persons → sequence 231 (2nd person, 3rd person, 1st person). Correct: 'You, he and I are good friends.'"},
      {type:"Error Spotting",q:"I, you and he <u>(A)</u> are guilty of the crime. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:3,exp:"In negative/blame sense (guilty), the sequence 123 is used (1st, 2nd, 3rd person). 'I, you and he are guilty' follows the 123 order. No error!"},
      {type:"Fill in the Blank",q:"_____ are going to win this match.",opts:["I, he and you","You, I and he","You, he and I","He, I and you"],ans:2,exp:"Positive sentence (winning = good) with all three persons → order 231 (2nd, 3rd, 1st). 'You, he and I are going to win this match.'"},
      {type:"Sentence Correction",q:"You, I and he were absent from class.",opts:["You, I and he","I, you and he","You, he and I","He, you and I"],ans:2,exp:"Being absent — neutral/slightly negative. Treat as negative/neutral situation → order 231 applies as well. 'You, he and I were absent' (2nd, 3rd, 1st). Actually this depends on context; generally positive order 231 is used unless blame is clear."},
      {type:"Fill in the Blank",q:"_____ are responsible for the accident.",opts:["You, he and I","I, you and he","He, you and I","You, I and he"],ans:1,exp:"'Responsible for accident' = blame/negative. Use order 123 (1st, 2nd, 3rd person). 'I, you and he are responsible for the accident.'"}
    ]
  },

  'Rule_43_Superfluous_Errors': {
    intro: 'Superfluous = zaroorat se zyada. Common examples: "previous records" (records already means previous), "return back" (return = come back), "past history", "final destination", "suppose if" (suppose = if), "retreat back" (retreat = go back). Ek word already doosre ka meaning include kare — toh ek hata do.',
    words: [
      {
        word: 'Redundant words',
        preposition: 'remove the duplicate',
        def_en: 'Superfluous = more than necessary. When one word already includes the meaning of another, using both is redundant (an error).',
        def_hi: 'Jab ek word pehle se hi doosre ka meaning rakhta ho, dono use karna error hai.',
        example: '"Return back" → just "return". "Past history" → just "history". "Repeat again" → just "repeat".',
        note: 'Test: does removing one word change the meaning? If no → the removed word was superfluous. "Suppose if" → "if" alone OR "suppose" alone — adding both is redundant.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"India broke all previous records <u>(A)</u> in today's match. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Records' always implies 'previous'. Using 'previous records' is redundant (superfluous). Correct: 'India broke all records in today's match.'"},
      {type:"Sentence Correction",q:"Suppose if you won the Oscar, what would you do?",opts:["Suppose if you won","Suppose you won","If you supposed you won","Supposing if you won"],ans:1,exp:"'Suppose' itself means 'if', so using both 'suppose' and 'if' is superfluous. Use either 'Suppose you won' or 'If you won'."},
      {type:"Error Spotting",q:"The army <u>(A)</u> retreated back from the conflict zone. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"'Retreat' itself means 'to withdraw/go back'. Adding 'back' is redundant. Correct: 'The army retreated from the conflict zone.'"},
      {type:"Sentence Correction",q:"He returned back home after a long trip.",opts:["returned back home","returned home","went back home","Either B or C"],ans:1,exp:"'Return' already means 'come/go back'. 'Back' is redundant. 'He returned home after a long trip.' Simply 'returned home'."},
      {type:"Error Spotting",q:"The final destination <u>(A)</u> of the journey was Mumbai. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Destination' is always the final point — 'final' is redundant. Correct: 'The destination of the journey was Mumbai.' Remove 'final'."}
    ]
  },

  'Rule_44_Apostrophe_Non_Living': {
    intro: 'Non-living cheezein ke saath apostrophe (\'s) NAHI lagate. "Table\'s legs" galat; "legs of the table" sahi. EXCEPTIONS: Apostrophe chal sakta hai — time ke saath (a week\'s time), weight, distance, place, idiom, unit, personification, heavenly body ke saath.',
    words: [
      {
        word: 'Apostrophe with non-living',
        preposition: 'use of + noun instead',
        def_en: 'Apostrophe (\'s) is NOT used with non-living things. Use "of + noun" structure instead.',
        def_hi: 'Non-living cheezein ke saath apostrophe nahi. "Of + noun" structure use karo.',
        example: '"The legs of the table" (not "The table\'s legs")',
        note: 'Apostrophe = possession. Non-living things technically cannot "possess". Exception: time expressions ("a day\'s work"), distance ("a mile\'s distance") — these are acceptable idioms.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"The table's legs <u>(A)</u> were broken <u>(B)</u> in the accident. No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"Apostrophe ('s) is not used with non-living things like 'table'. Correct: 'The legs of the table were broken.'"},
      {type:"Fill in the Blank",q:"We gave ourselves a _____ vacation.",opts:["weeks","week's","week","weeks'"],ans:1,exp:"'Week' is a unit of time. Apostrophe CAN be used with time expressions. 'A week's vacation' is correct (one week's duration)."},
      {type:"Sentence Correction",q:"The book's cover was torn.",opts:["The book's cover","The cover of the book","A book's cover","The books cover"],ans:1,exp:"'Book' is a non-living thing — apostrophe should not be used. Correct: 'The cover of the book was torn.'"},
      {type:"Fill in the Blank",q:"The _____ edge was sharp.",opts:["knife's","edge of the knife","knife edge","knifes'"],ans:1,exp:"'Knife' is non-living — no apostrophe. 'The edge of the knife was sharp.' Use 'of + noun' structure."},
      {type:"Error Spotting",q:"We stopped at a day's <u>(A)</u> journey from the city. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:3,exp:"'Day' is a time expression — apostrophe IS allowed with time. 'A day\'s journey' is correct. Exception rule applies here. No error."}
    ]
  },

  'Rule_45_Past_Point_Time_Simple_Past': {
    intro: 'Jab past ka specific time mention ho (yesterday, 10 days ago, last year, last week), hamesha Simple Past Tense use karo. Present Perfect (have/has + V3) kabhi nahi chal sakti aise time expressions ke saath. "I have gone yesterday" = GALAT. "I went yesterday" = SAHI.',
    words: [
      {
        word: 'Specific past time markers',
        preposition: 'Simple Past only',
        def_en: 'Words like yesterday, last week, last year, ago, in 2010 (specific past year) require Simple Past tense. Present Perfect CANNOT be used.',
        def_hi: 'Yesterday, last week, last year, ago ke saath hamesha Simple Past. Present Perfect kabhi nahi.',
        example: 'I went to the market yesterday. / She called last week.',
        note: 'Present Perfect = no specific time (connection to present). Simple Past = specific completed time. "Yesterday" closes the time → Simple Past. No overlap with present.'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"I have gone to the market yesterday to purchase a car.",opts:["have gone to the market yesterday","went to the market yesterday","had gone to the market yesterday","was going to the market yesterday"],ans:1,exp:"'Yesterday' is a specific past time marker. Present Perfect ('have gone') cannot be used. Simple Past 'went' is correct."},
      {type:"Error Spotting",q:"The company's shares <u>(A)</u> have dived by 90p on the stock market last week. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Last week' is a specific past time. Present Perfect 'have dived' is wrong. Correct: 'The company's shares dived by 90p last week.' (Simple Past)."},
      {type:"Fill in the Blank",q:"She _____ this book two days ago.",opts:["has read","have read","read","had read"],ans:2,exp:"'Two days ago' is a specific past time marker. Simple Past 'read' is correct. 'Has read' (Present Perfect) cannot be used with 'ago'."},
      {type:"Sentence Correction",q:"They have visited Paris last summer.",opts:["have visited Paris last summer","visited Paris last summer","had visited Paris last summer","were visiting Paris last summer"],ans:1,exp:"'Last summer' = specific past time. Simple Past 'visited' is correct. Present Perfect 'have visited' cannot be used with specific past time markers."},
      {type:"Fill in the Blank",q:"He _____ the match yesterday.",opts:["has won","have won","won","had won"],ans:2,exp:"'Yesterday' = specific past time → Simple Past. 'Won' is correct. 'Has won' (Present Perfect) cannot be used with 'yesterday'."}
    ]
  },

  'Rule_46_Unique_Excellent_No_Most': {
    intro: 'Absolute meaning wale words ke saath "most" kabhi nahi aata: unique, excellent, perfect, ideal, entire, complete, chief, round, square, total, whole, singular, annual, golden, deaf, blind, right, empty, circular, wrong, impossible. Ye words pehle se hi apni extreme state describe karte hain — comparision ho hi nahi sakta.',
    words: [
      {
        word: 'Absolute adjectives',
        preposition: 'never with most/very',
        def_en: 'Words like unique, perfect, ideal, complete, entire, excellent cannot be graded with "most", "very", or "quite". They are already absolute.',
        def_hi: 'Unique, perfect, ideal, complete jaise words "most" ya "very" ke saath kabhi nahi aate. Ye pehle se absolute hain.',
        example: 'He is an excellent student. (NOT: He is the most excellent student.)',
        note: '"Perfect" means 100% — you cannot be "more perfect" or "most perfect". "Unique" means one of a kind — you cannot be "very unique". These words are binary (you either are or aren\'t).'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"He is the most excellent student <u>(A)</u> in the class. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Excellent' is an absolute quality — cannot be graded. Using 'most excellent' is incorrect. Correct: 'He is an excellent student in the class.'"},
      {type:"Sentence Correction",q:"He is completely perfect.",opts:["completely perfect","perfect","the most perfect","very perfect"],ans:1,exp:"'Perfect' is an absolute quality. 'Completely perfect' is redundant — if something is perfect, it needs no qualifier. Simply say 'He is perfect.'"},
      {type:"Fill in the Blank",q:"This is a _____ solution to the problem.",opts:["most ideal","very ideal","more ideal","ideal"],ans:3,exp:"'Ideal' is an absolute adjective — cannot be graded. 'Most ideal', 'very ideal', 'more ideal' are all wrong. Simply 'an ideal solution' is correct."},
      {type:"Error Spotting",q:"She has a very unique style <u>(A)</u> of speaking. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Unique' means one of a kind — cannot be modified by 'very'. 'Very unique' is incorrect. Correct: 'She has a unique style of speaking.'"},
      {type:"Sentence Correction",q:"This is the most complete report I have read.",opts:["the most complete","the complete","a complete","most completely"],ans:1,exp:"'Complete' is an absolute adjective — cannot be graded with 'most'. 'The most complete' is wrong. Correct: 'This is a complete report I have read.'"}
    ]
  },

  'Rule_47_Quite_All_Never_Together': {
    intro: '"Quite" aur "All" kabhi saath use nahi hote. Sirf ek hi use karo. Important distinction: "Quiet" (noun) = khamoshi ki awastha; "Quite" (adverb) = bilkul/kaafi. "Quite all right" galat; "Quite right" ya "All right" mein se ek choose karo.',
    words: [
      {
        word: 'Quite / All',
        preposition: 'never together',
        def_en: '"Quite" and "All" are NEVER used together. Use one or the other. Also note: Quiet = noun (silence state); Quite = adverb (completely/rather).',
        def_hi: '"Quite" aur "All" kabhi saath nahi aate. Ek choose karo. Quiet (noun) aur Quite (adverb) alag cheezein hain.',
        example: 'He is quite well. OR He is all well. (NOT: He is quite all well.)',
        note: 'Common exam error: "quite all right" → wrong. Use either "quite right" or "all right". "Quite" = to a certain/full extent. "All" = completely. Both mean similar things → redundant together.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"He is quite all well. <u>(A)</u> No error <u>(B)</u>",opts:["A","B","No error","Correct as is"],ans:0,exp:"'Quite' and 'all' cannot be used together. Use either 'quite well' or 'all well' — not both. Correct: 'He is quite well.'"},
      {type:"Fill in the Blank",q:"He has done _____ the work.",opts:["quite all","quite","all","both quite and all"],ans:2,exp:"'Quite' and 'all' cannot be used together. Use 'all' alone: 'He has done all the work.'"},
      {type:"Fill in the Blank",q:"The room was _____ after the lecture ended.",opts:["quite all quiet","quite quiet","all quite","quite all quite"],ans:1,exp:"'Quite quiet' is correct (adverb + adjective). Note: 'quiet' here is the adjective (silent). 'Quite quiet' means fairly silent. 'Quite all' together is wrong."},
      {type:"Sentence Correction",q:"He is quite all right.",opts:["quite all right","quite right","all right","Either B or C"],ans:3,exp:"'Quite all' together is incorrect. Use either 'quite right' or 'all right' (both are acceptable separately). Both B and C are correct answers."},
      {type:"Error Spotting",q:"She understood the concept quite <u>(A)</u> well. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:3,exp:"'Quite well' — 'quite' (adverb) modifying 'well' (adverb). This is perfectly correct. 'Quite' and 'well' are not the problematic pair. No error."}
    ]
  },

  'Rule_48_Ago_Before': {
    intro: '"Ago" ke saath Simple Past tense use hota hai. "Before" ke saath Past Perfect tense use hota hai (jab past action doosre past action se pehle ki ho). "Two years ago" → Simple Past. "Before she came" (pehle ka kaam) → Past Perfect.',
    words: [
      {
        word: 'Ago + Simple Past',
        preposition: 'Simple Past only',
        def_en: '"Ago" is always used with Simple Past tense. Past Perfect (had + V3) cannot be used with "ago".',
        def_hi: '"Ago" ke saath hamesha Simple Past. Past Perfect "ago" ke saath galat hai.',
        example: 'He went there two days ago.',
        note: '"Ago" = specific past time (measured from now). Like "yesterday" and "last week" → Simple Past. "He had gone two days ago" = WRONG. "He went two days ago" = CORRECT.'
      },
      {
        word: 'Before + Past Perfect',
        preposition: 'Past Perfect (earlier action)',
        def_en: '"Before" in past context requires Past Perfect for the earlier action.',
        def_hi: 'Past context mein "before" ke saath pehle wale action ke liye Past Perfect.',
        example: 'The patient had died before the doctor arrived.',
        note: '"Before she arrived, he had left." — "had left" (Past Perfect) = earlier action. "arrived" (Simple Past) = later action. "Before" signals sequence of past events.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"He had gone <u>(A)</u> two seconds ago. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Ago' requires Simple Past tense. 'Had gone' (Past Perfect) is wrong. Correct: 'He went two seconds ago.'"},
      {type:"Fill in the Blank",q:"The patient _____ before the doctor arrived.",opts:["died","had died","has died","was dying"],ans:1,exp:"'Before' refers to an earlier past action. The earlier action takes Past Perfect. 'The patient had died before the doctor arrived.'"},
      {type:"Fill in the Blank",q:"She left the company three months _____.",opts:["before","since","ago","prior"],ans:2,exp:"Specific past time measured from now → 'ago'. Simple Past verb used. 'She left the company three months ago.'"},
      {type:"Sentence Correction",q:"He had finished the work two hours ago.",opts:["had finished the work two hours ago","finished the work two hours ago","has finished the work two hours ago","finishes the work two hours ago"],ans:1,exp:"'Two hours ago' = specific past time → Simple Past. 'Had finished' (Past Perfect) cannot be used with 'ago'. Correct: 'He finished the work two hours ago.'"},
      {type:"Fill in the Blank",q:"I _____ the letter before she asked for it.",opts:["wrote","had written","write","was writing"],ans:1,exp:"Two past actions with 'before' — writing happened earlier (Past Perfect). 'I had written the letter before she asked for it.'"}
    ]
  },

  'Rule_49_Common_vs_Split_Possession': {
    intro: 'Common Possession: dono noun closely connected (shared ownership) → sirf AAKHIRI noun par apostrophe. "Ram and Shyam\'s car" = ek car dono ki. Split Possession: alag alag ownership → DONO nouns par apostrophe. "Ram\'s and Shyam\'s cars" = alag alag gaadiyaan.',
    words: [
      {
        word: 'Common Possession',
        preposition: 'apostrophe on LAST noun',
        def_en: 'When two people share the same thing: apostrophe only on the LAST noun. Singular noun + singular verb.',
        def_hi: 'Dono log ek hi cheez share karein: sirf aakhiri noun par apostrophe. Singular noun aur verb.',
        example: "Ram and Shyam's car is being repaired. (one car, shared)",
        note: "Last noun gets apostrophe = they share ONE thing. 'Jack and Jill's house' = one house belonging to both. Singular noun → singular verb."
      },
      {
        word: 'Split Possession',
        preposition: 'apostrophe on EACH noun',
        def_en: 'When two people each own separately: apostrophe on EACH noun. Plural noun + plural verb.',
        def_hi: 'Alag alag ownership: dono nouns par apostrophe. Plural noun aur verb.',
        example: "Ram's and Shyam's cars are being repaired. (separate cars)",
        note: "Each noun gets apostrophe = they each have their OWN thing. 'Jack's and Jill's houses' = Jack has a house, Jill has a house. Plural noun → plural verb."
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"Ram's and Shyam's car is being decorated.",opts:["Ram's and Shyam's car is","Ram and Shyam's car is","Ram's and Shyam's cars are","Ram and Shyam's cars are"],ans:2,exp:"'Ram's and Shyam's' (apostrophe on each) = split possession = each has their own car → plural 'cars' and plural verb 'are'. Correct: 'Ram's and Shyam's cars are being decorated.'"},
      {type:"Fill in the Blank",q:"Ram and Shyam's car _____ being decorated for the wedding.",opts:["are","is","were","have been"],ans:1,exp:"'Ram and Shyam's' (apostrophe only on Shyam) = common possession = one car belonging to both → singular verb 'is'. The sentence is correct."},
      {type:"Fill in the Blank",q:"John and Mary's _____ is on the table.",opts:["laptops are","laptop is","laptops is","laptop are"],ans:1,exp:"'John and Mary's' (last noun only) = common possession = one shared laptop. Singular 'laptop' + singular 'is'. 'John and Mary's laptop is on the table.'"},
      {type:"Sentence Correction",q:"Tom's and Jerry's house is on the same street.",opts:["Tom's and Jerry's house is","Tom and Jerry's house is","Tom's and Jerry's houses are","Tom and Jerry's houses are"],ans:2,exp:"'Tom's and Jerry's' = split possession (each has their own house) → plural 'houses' + plural 'are'. 'Tom's and Jerry's houses are on the same street.'"},
      {type:"Fill in the Blank",q:"_____ office is on the third floor. (They share one office)",opts:["Priya's and Neha's","Priya and Neha's","Priya's and Neha","Priya and Neha"],ans:1,exp:"Shared (common) possession → apostrophe on LAST noun only. 'Priya and Neha's office is on the third floor.'"}
    ]
  },

  'Rule_50_Its_vs_Its_Apostrophe': {
    intro: '"It\'s" = It is (contraction). "Its" = possession (no apostrophe). Common error: "it\'s" ko possession ke liye use karna. Possessive pronouns (yours, ours, its, theirs, his, hers, whose) mein KABHI apostrophe nahi aata. Apostrophe in case mein HATA do.',
    words: [
      {
        word: "It's = It is",
        preposition: 'contraction only',
        def_en: '"It\'s" = "It is" or "It has" (contraction). For possession, use "its" (no apostrophe).',
        def_hi: '"It\'s" = "It is" ya "It has". Possession ke liye "its" (bina apostrophe ke).',
        example: "It's raining. (It is raining) / The dog wagged its tail. (possession)",
        note: 'Test: can you replace "it\'s" with "it is"? If yes → it\'s is correct. If no → use "its". "Its" with apostrophe = always wrong in formal English.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"The child is carrying it's <u>(A)</u> book. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'It's' means 'it is'. For possession, use 'its' (no apostrophe). Correct: 'The child is carrying its book.'"},
      {type:"Fill in the Blank",q:"_____ called a miracle.",opts:["Its","It's","Its'","'Its"],ans:1,exp:"'It's called a miracle' = 'It is called a miracle'. 'It's' is the contraction of 'it is', which is needed here."},
      {type:"Fill in the Blank",q:"The company lost _____ best employees last year.",opts:["it's","its","it","its'"],ans:1,exp:"Possession (company's employees) → 'its' (no apostrophe). 'The company lost its best employees.' 'It\'s' would mean 'it is' — wrong here."},
      {type:"Sentence Correction",q:"The bird spread it's wings and flew away.",opts:["it's wings","its wings","its' wings","it wings"],ans:1,exp:"Possession (bird's wings) → 'its' (no apostrophe). 'It\'s' (= it is) is wrong for possession. 'The bird spread its wings.'"},
      {type:"Fill in the Blank",q:"_____ been a long time since we met.",opts:["Its","It's","Its'","Itself"],ans:1,exp:"'It's been a long time' = 'It has been a long time'. 'It\'s' as contraction of 'it has' is correct here."}
    ]
  },

  'Rule_51_A_number_The_number': {
    intro: '"A number of + Plural Noun + Plural Verb". "The number of + Plural Noun + Singular Verb". "A variety of" + Plural Verb; "The variety of" + Singular Verb. Yaad karo: "a" = many (plural feel); "the" = specific number (singular entity).',
    words: [
      {
        word: 'A number of',
        preposition: '+ plural verb',
        def_en: '"A number of" + plural noun + plural verb. Means "many/several".',
        def_hi: '"A number of" = bahut saare. Plural noun aur plural verb.',
        example: 'A number of students are waiting outside.',
        note: '"A number" = an unspecified large amount → plural meaning. "The number" = a specific count = a single entity → singular.'
      },
      {
        word: 'The number of',
        preposition: '+ singular verb',
        def_en: '"The number of" + plural noun + singular verb. The "number" itself is the subject (singular).',
        def_hi: '"The number of" = ek specific count. Singular verb.',
        example: 'The number of students is increasing every year.',
        note: '"The number" is a singular noun (it IS the number). "The number of students IS 30" — 30 is singular data. Contrast with "A number of students ARE present" — many students (plural).'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"A number of students <u>(A)</u> is waiting here. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"'A number of' always takes a plural verb. 'A number of students ARE waiting here.' 'Is' should be replaced by 'are'."},
      {type:"Fill in the Blank",q:"The number of employees taking legal action _____ increasing.",opts:["are","were","is","have been"],ans:2,exp:"'The number of' takes singular verb. 'The number of employees taking legal action IS increasing.'"},
      {type:"Fill in the Blank",q:"A number of books _____ missing from the library.",opts:["is","was","are","has been"],ans:2,exp:"'A number of' takes plural verb. 'A number of books ARE missing from the library.'"},
      {type:"Sentence Correction",q:"The number of accidents are increasing every year.",opts:["accidents are increasing","accidents is increasing","accident is increasing","accident are increasing"],ans:1,exp:"'The number of' → singular verb. 'The number of accidents IS increasing every year.'"},
      {type:"Fill in the Blank",q:"A variety of flowers _____ available in the market.",opts:["is","was","are","has been"],ans:2,exp:"'A variety of' = many types → plural verb. 'A variety of flowers ARE available in the market.'"}
    ]
  },

  'Rule_52_It_Is_Time': {
    intro: '"It is time" / "It is high time" ke do structures: (1) Agar subject nahi aata baad mein → "to + V1" use karo. (2) Agar subject aata hai → V2 (Simple Past form) use karo. Yaad karo: "It is time to leave" (no subject). "It is time he left" (subject = he, verb = V2 form "left").',
    words: [
      {
        word: 'It is time to + V1',
        preposition: 'no subject follows',
        def_en: 'When no subject follows "It is time", use "to + V1" (infinitive).',
        def_hi: 'Agar "It is time" ke baad koi subject nahi aata → "to + V1".',
        example: 'It is time to leave. / It is time to work hard.',
        note: '"It is time to sleep" — no specific person mentioned, general statement. Structure: It is time + to + V1.'
      },
      {
        word: 'It is time + subject + V2',
        preposition: 'subject follows → V2',
        def_en: 'When a subject follows "It is time", use V2 (Simple Past form) of the verb, even though the meaning is present.',
        def_hi: '"It is time" ke baad subject aaye → V2 (Simple Past form). Present time ke liye bhi V2 use hota hai.',
        example: 'It is time he worked hard. / It is high time she left.',
        note: 'Paradox: present urgency but past verb form. "It is time he worked" = he should work NOW, but we use past tense "worked". This is a subjunctive-like construction.'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"It is time he _____ hard.",opts:["work","works","worked","had worked"],ans:2,exp:"When subject ('he') follows 'It is time', use V2 (past form). 'It is time he worked hard' — past form 'worked' is used for present urgency."},
      {type:"Sentence Correction",q:"It is time to working hard.",opts:["time to working","time to work","time for work","high time working"],ans:1,exp:"When no subject follows 'It is time', use 'to + V1'. 'It is time to work hard' — infinitive without 'to+ing'."},
      {type:"Fill in the Blank",q:"It is high time you _____ your mistakes.",opts:["correct","corrects","corrected","have corrected"],ans:2,exp:"Subject 'you' follows 'It is high time' → V2 form. 'It is high time you corrected your mistakes.'"},
      {type:"Sentence Correction",q:"It is time to going to bed.",opts:["to going to bed","to go to bed","for going to bed","going to bed"],ans:1,exp:"'It is time + to + V1'. No subject follows. 'It is time to go to bed.' 'To going' is wrong — use base form V1."},
      {type:"Fill in the Blank",q:"It is time _____ the problem seriously.",opts:["address","addresses","to address","addressed"],ans:2,exp:"No specific subject after 'It is time' → 'to + V1'. 'It is time to address the problem seriously.'"}
    ]
  },

  'Rule_53_Angry_With_At': {
    intro: '"Angry with" = person ya living thing ke liye. "Angry at" = cheez, situation, ya non-living cause ke liye. Yahi rule "Annoy" ke saath bhi — "annoyed with person" / "annoyed at thing".',
    words: [
      {
        word: 'Angry with',
        preposition: 'with + person/living',
        def_en: '"Angry with" is used when referring to a person or living being.',
        def_hi: '"Angry with" person ya living being ke liye.',
        example: 'I am angry with Shyam for lying.',
        note: '"With" = person-to-person. "He is angry with her." Same for "annoyed with him", "pleased with them", "disappointed with her".'
      },
      {
        word: 'Angry at',
        preposition: 'at + thing/situation',
        def_en: '"Angry at" is used when referring to a thing, situation, event, or non-living cause.',
        def_hi: '"Angry at" cheez, situation ya non-living cause ke liye.',
        example: 'She was angry at the decision. / He is angry at the noise.',
        note: '"At" = situation/thing. "Angry at the traffic". "Angry at the result". Non-living → "at".'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"The local residents were angry _____ the lack of parking spaces.",opts:["with","at","on","about"],ans:1,exp:"'Lack of parking spaces' is not a living thing — it's a situation/thing. 'Angry at' is used for non-living things/situations. Correct: 'angry at the lack of parking spaces.'"},
      {type:"Fill in the Blank",q:"I am angry _____ Shyam because he did not go to the class.",opts:["at","on","with","about"],ans:2,exp:"'Shyam' is a person (living thing). 'Angry with' is used for persons/living things. Correct: 'I am angry with Shyam.'"},
      {type:"Fill in the Blank",q:"She was annoyed _____ the constant interruptions.",opts:["with","at","on","of"],ans:1,exp:"'Constant interruptions' is a situation (non-living). 'Annoyed at' is used for situations/things. 'She was annoyed at the constant interruptions.'"},
      {type:"Fill in the Blank",q:"He was angry _____ his dog for barking all night.",opts:["at","with","about","by"],ans:1,exp:"'Dog' is a living being. 'Angry with' is used for living beings. 'He was angry with his dog.'"},
      {type:"Error Spotting",q:"She was angry at <u>(A)</u> her friend for not calling. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Friend' is a person (living). 'Angry with' should be used for persons. Correct: 'She was angry WITH her friend for not calling.'"}
    ]
  },

  'Rule_54_Know_Not_Direct_Infinitive': {
    intro: '"Know" ke baad directly "to" (infinitive) nahi aata. Beech mein how, when, why, where, what, which koi question word zaruri hai. "I know to swim" GALAT; "I know how to swim" SAHI. Yeh rule sirf "know" verb ke saath laagu hota hai.',
    words: [
      {
        word: 'Know + question word + to',
        preposition: 'how/when/why/where before to',
        def_en: '"Know" is NOT directly followed by infinitive "to". A question word (how, when, where, why, what) must come between "know" and "to".',
        def_hi: '"Know" ke baad seedha "to" nahi. Beech mein how/when/where/why zaruri.',
        example: 'I know how to swim. / Do you know where to go?',
        note: '"I know to drive" = WRONG. "I know how to drive" = CORRECT. The question word bridges "know" and the action. This is because "know" requires specification of manner/place/time.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"I don't know to make tea; <u>(A)</u> hence you should help me out. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Know' cannot be directly followed by 'to + infinitive'. Use 'how': 'I don't know how to make tea.' The word 'how/when/why/where' must be inserted."},
      {type:"Fill in the Blank",q:"Do you know _____ the Post Office is?",opts:["how","where","to","which"],ans:1,exp:"'Know' requires a question word (how/where/when/why) before any following clause. 'Do you know where the Post Office is?' is correct."},
      {type:"Sentence Correction",q:"She knows to play the guitar.",opts:["knows to play","knows how to play","knows playing","know how playing"],ans:1,exp:"'Know' + 'to play' directly = wrong. Insert 'how': 'She knows how to play the guitar.'"},
      {type:"Fill in the Blank",q:"He didn't know _____ react in that situation.",opts:["to","how to","what","where"],ans:1,exp:"'Know' + 'how to react' — question word 'how' is needed between 'know' and infinitive 'to react'. 'He didn't know how to react.'"},
      {type:"Error Spotting",q:"I know where to <u>(A)</u> find the best food in this city. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:3,exp:"'Know where to find' — 'where' is the question word between 'know' and 'to find'. This is correct structure. No error."}
    ]
  },

  'Rule_55_Else_But_Other_Than': {
    intro: '"Else" hamesha "but" ke saath aata hai. "Other" aur "rather" hamesha "than" ke saath aate hain. "Nothing else but", "no other person than", "I would rather...than" — ye correct patterns hain. Kabhi "else than" ya "other but" mat likho.',
    words: [
      {
        word: 'Else + but',
        preposition: 'else → but',
        def_en: 'The adverb "else" is always followed by "but". Never "else than" or "else except".',
        def_hi: '"Else" ke baad hamesha "but". "Else than" galat.',
        example: 'It is nothing else but a lie.',
        note: '"Nothing else but the truth." — common phrase using this rule. "Else" = other/different → "but" shows exception. Similar: "nobody else but him".'
      },
      {
        word: 'Other / Rather + than',
        preposition: 'other/rather → than',
        def_en: '"Other" and "rather" are always followed by "than". Never "other but" or "rather but".',
        def_hi: '"Other" aur "rather" ke baad hamesha "than".',
        example: 'He met no other person than Ram. / I would rather stay than go.',
        note: '"Other than" = except/apart from. "Rather than" = in preference to. Both mandatory with "than".'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"It is nothing else _____ mere foolishness.",opts:["than","but","as","except"],ans:1,exp:"'Else' is always followed by 'but'. 'Nothing else but mere foolishness' is correct. Never 'else than'."},
      {type:"Fill in the Blank",q:"He met no other person _____ Ram.",opts:["but","except","than","as"],ans:2,exp:"'Other' is always followed by 'than'. 'No other person than Ram' is correct."},
      {type:"Fill in the Blank",q:"I think I would rather stay at home this evening _____ go out.",opts:["but","as","than","except"],ans:2,exp:"'Rather' is always followed by 'than'. 'I would rather stay...than go out' is correct."},
      {type:"Error Spotting",q:"It was nothing else than <u>(A)</u> a misunderstanding. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Else' must be followed by 'but', not 'than'. Correct: 'It was nothing else BUT a misunderstanding.'"},
      {type:"Fill in the Blank",q:"She would rather resign _____ accept such unfair terms.",opts:["but","or","than","and"],ans:2,exp:"'Rather' always pairs with 'than'. 'She would rather resign THAN accept such unfair terms.'"}
    ]
  },

  'Rule_56_Sort_Type_Kind': {
    intro: '"Sort, type, kind, variety" jaise words hamesha singular verb lete hain — chahe inke baad jo bhi aaye. "This type of articles IS sold" (not "are"). Yaad karo: type/sort/kind khud singular subject hai — baad wala noun just qualifier hai.',
    words: [
      {
        word: 'Sort / Type / Kind / Variety',
        preposition: '+ singular verb',
        def_en: 'Words like sort, type, kind, variety are always followed by a singular verb, regardless of the noun that follows.',
        def_hi: 'Sort, type, kind, variety hamesha singular verb lete hain.',
        example: 'This type of question is difficult. / That sort of people is unreliable.',
        note: 'Subject = "type/sort/kind" (singular) → singular verb. "This type of articles IS" — the subject is "type" (singular), not "articles". Articles just describes what type.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"This type of articles <u>(A)</u> are sold in the market. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:1,exp:"'Type' (and sort, kind) takes a singular verb. 'This type of articles IS sold in the market.' 'Are' should be 'is'."},
      {type:"Fill in the Blank",q:"Any kind of racism _____ abhorrent to me.",opts:["are","were","is","have been"],ans:2,exp:"'Kind' takes a singular verb. 'Any kind of racism IS abhorrent to me.'"},
      {type:"Fill in the Blank",q:"This sort of mistakes _____ unacceptable.",opts:["are","were","is","have been"],ans:2,exp:"'Sort' takes singular verb. 'This sort of mistakes IS unacceptable.' Subject is 'sort', not 'mistakes'."},
      {type:"Error Spotting",q:"What sort of people <u>(A)</u> are they? <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:3,exp:"In a question, 'What sort of people are they?' — here 'they' is the subject (not 'sort'), so plural 'are' is correct. No error."},
      {type:"Sentence Correction",q:"These kind of movies are not suitable for children.",opts:["These kind of movies are","This kind of movie is","These kinds of movies are","This kind of movies are"],ans:1,exp:"'Kind' takes singular. 'This kind of movie IS not suitable' is the most grammatically clean form. 'This kind of movies IS' is also accepted."}
    ]
  },

  'Rule_57_In_Inside_Into': {
    intro: '"Inside" → movement (bahar se andar). "In" → static position (pehle se andar hai). "Into" → movement toward entering, ya state change. "Come into the house" (movement). "I am in the class" (already there). "I came inside the class" (movement, outside to inside).',
    words: [
      {
        word: 'In (static)',
        preposition: 'already inside',
        def_en: '"In" implies being already inside — a static position. No movement involved.',
        def_hi: '"In" = pehle se andar hai, koi movement nahi.',
        example: 'I am in the classroom.',
        note: '"In" = where you are. No movement. "She is in the kitchen." Static position.'
      },
      {
        word: 'Into (movement to inside)',
        preposition: 'movement entering',
        def_en: '"Into" implies movement toward and entering something. Also used for change of state.',
        def_hi: '"Into" = movement karte hue andar jaana. Ya state change.',
        example: 'Come into the house. / Water turned into ice.',
        note: '"Into" = where you are going. "Go into the room", "fall into the water". Also: transformation — "turn water into wine".'
      },
      {
        word: 'Inside (movement from outside)',
        preposition: 'from outside to inside',
        def_en: '"Inside" implies movement from outside to inside (entering). Often used as both preposition and adverb.',
        def_hi: '"Inside" = bahar se andar aana (movement).',
        example: 'I came inside the house.',
        note: '"Inside" emphasizes the transition from exterior to interior. "Please come inside" = come from outside to inside. "Inside the box" = within.'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"Come _____ the house.",opts:["in","inside","into","within"],ans:2,exp:"'Into' implies movement toward entering something — coming from outside to inside. 'Come into the house.'"},
      {type:"Fill in the Blank",q:"I am _____ the class.",opts:["into","inside","in","within"],ans:2,exp:"'In' implies a static position — already inside. 'I am in the class' (already there, not moving)."},
      {type:"Fill in the Blank",q:"I came _____ the class.",opts:["in","into","inside","within"],ans:2,exp:"'Inside' implies movement from outside to inside. 'I came inside the class' is correct for movement from outside to inside."},
      {type:"Fill in the Blank",q:"The cat jumped _____ the box.",opts:["in","inside","into","within"],ans:2,exp:"'Into' implies movement entering something. 'The cat jumped into the box' — movement from outside to inside of the box."},
      {type:"Error Spotting",q:"She walked in <u>(A)</u> the room and sat down. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Walked in' implies entering — movement from outside to inside. Should be 'walked INTO the room'. 'In' is static; 'into' shows movement entering."}
    ]
  },

  'Rule_58_With_vs_By': {
    intro: '"With" = non-living instrument ke liye. "By" = living agent ke liye. Exception: "by" time reference ke liye bhi use hota hai ("by five o\'clock"). "We write WITH a pen" (pen non-living). "The book was written BY Shakespeare" (Shakespeare living person).',
    words: [
      {
        word: 'With + non-living',
        preposition: 'instrument',
        def_en: '"With" is used when the instrument is a non-living thing.',
        def_hi: '"With" non-living cheez (instrument) ke liye.',
        example: 'He killed the snake with a stick.',
        note: '"With" = tool/instrument. "Write with a pen", "cut with a knife", "cook with fire". Non-living objects used as instruments → "with".'
      },
      {
        word: 'By + living agent',
        preposition: 'agent (person/animal)',
        def_en: '"By" is used when referring to a living being as the agent/doer of an action.',
        def_hi: '"By" living being (agent) ke liye. Passive sentences mein bhi "by" agent ke liye.',
        example: 'The book was written by Premchand.',
        note: '"By" = who did it (agent). "By Shakespeare", "by the teacher", "by my dog". In passive voice, "by" always introduces the living agent.'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"We write _____ a pen.",opts:["by","with","using","through"],ans:1,exp:"A pen is a non-living instrument. 'With' is used with non-living things. 'We write with a pen.'"},
      {type:"Fill in the Blank",q:"The book was translated _____ a well-known author.",opts:["with","by","through","using"],ans:1,exp:"A well-known author is a living person (agent). 'By' is used for living things. 'The book was translated by a well-known author.'"},
      {type:"Fill in the Blank",q:"The painting was created _____ a brush.",opts:["by","with","using","through"],ans:1,exp:"'Brush' is a non-living instrument. 'With' is correct. 'The painting was created with a brush.'"},
      {type:"Fill in the Blank",q:"The project was completed _____ the team.",opts:["with","by","using","through"],ans:1,exp:"'Team' = group of living people (agent). 'By' is used for living agents. 'The project was completed by the team.'"},
      {type:"Error Spotting",q:"He swept the floor by <u>(A)</u> a broom. <u>(B)</u> No error <u>(C)</u>",opts:["A","B","C","No error"],ans:0,exp:"'Broom' is a non-living instrument. 'With' should be used. Correct: 'He swept the floor WITH a broom.'"}
    ]
  },

  'Rule_59_Start_Not_From': {
    intro: '"Start" ke saath preposition "from" KABHI nahi aata. "Start" ke saath "on" aata hai. "My exams start from Monday" GALAT; "My exams start on Monday" SAHI. "From" continuation imply karta hai — start ek event hai jo sirf ek baar shuru hota hai.',
    words: [
      {
        word: 'Start + on',
        preposition: 'on, never from',
        def_en: '"Start" is NEVER followed by "from". Use "on" with "start" for time reference.',
        def_hi: '"Start" ke baad "from" kabhi nahi. Time ke liye "on" use karo.',
        example: 'My exams start on Monday.',
        note: 'However: "from Monday onwards" (without start) is acceptable. "Start from" is the error. "He will prepare from Monday" (without start) is fine. The verb "start" + "from" = always wrong.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"My exams start from Monday. <u>(A)</u> No error <u>(B)</u>",opts:["A","B","No error","Correct as is"],ans:0,exp:"'From' is not used with 'start'. 'Start' takes 'on'. Correct: 'My exams start on Monday.' 'From' implies continuation (starting again and again), which is illogical."},
      {type:"Sentence Correction",q:"He will start his preparation from Monday.",opts:["start his preparation from Monday","start his preparation on Monday","start his preparation Monday","begin his preparation from Monday"],ans:1,exp:"'Start' + 'on' (not 'from'). 'He will start his preparation on Monday.'"},
      {type:"Fill in the Blank",q:"The new session starts _____ June.",opts:["from","since","on","in"],ans:2,exp:"'Start' takes 'on' for specific dates/days. 'The new session starts on June.' (Or 'in June' if no specific date — but 'from' with 'start' is always wrong.)"},
      {type:"Fill in the Blank",q:"Classes will _____ Monday after the holidays.",opts:["start from","start on","begin from","resume from"],ans:1,exp:"'Start' + 'on' for day reference. 'Classes will start on Monday after the holidays.'"},
      {type:"Error Spotting",q:"The sale starts from tomorrow. <u>(A)</u> No error <u>(B)</u>",opts:["A","B","No error","Correct"],ans:0,exp:"'Start from' is incorrect. Correct: 'The sale starts tomorrow' (no preposition needed with 'tomorrow') or 'The sale starts on Saturday' (with specific day)."}
    ]
  },

  'Rule_60_To_V1ing_Special': {
    intro: 'Normal infinitive: "to + V1". Lekin kuch special cases mein "to + V1+ing" use hota hai: be used to, accustomed to, addicted to, with a view to, look forward to, given to, prone to, devoted to, in addition to, confess to, disposed to, come to. Ye "to" preposition hai — isliye gerund (-ing) use hota hai.',
    words: [
      {
        word: 'to + V1+ing phrases',
        preposition: 'gerund after these "to"s',
        def_en: 'In these phrases, "to" is a preposition (not part of infinitive), so it must be followed by gerund (V1+ing), not base verb.',
        def_hi: 'In phrases mein "to" preposition hai, toh V1+ing (gerund) chahiye, not base verb.',
        example: 'I look forward to hearing from you. / She is accustomed to working late.',
        note: 'Test: can you replace "to" with another preposition (like "for", "at")? If yes → "to" is a preposition → gerund follows. "Look forward TO hearing" — "to" = preposition.'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"These measures have been taken with a view to _____ the company's profits.",opts:["increase","increasing","increased","increases"],ans:1,exp:"'With a view to' requires 'V1+ing' (gerund). 'With a view to increasing the company's profits.' NOT 'to increase'."},
      {type:"Error Spotting",q:"I look forward to hear (A) from you. (B) No error (C)",opts:["A","B","C","No error"],ans:0,exp:"'Look forward to' requires V1+ing form. 'Look forward to hearing from you.' 'Hear' (V1) is incorrect here; 'hearing' is correct."},
      {type:"Fill in the Blank",q:"I am not accustomed to _____ treated like this.",opts:["be","being","been","have been"],ans:1,exp:"'Accustomed to' requires V1+ing. 'Accustomed to being treated' is correct."},
      {type:"Fill in the Blank",q:"She is given to _____ long walks in the evening.",opts:["take","taking","have taken","took"],ans:1,exp:"'Given to' requires gerund (V1+ing). 'She is given to taking long walks in the evening.'"},
      {type:"Error Spotting",q:"He confessed to take (A) the money from the drawer. (B) No error (C)",opts:["A","B","C","No error"],ans:0,exp:"'Confess to' requires V1+ing (gerund). 'Take' is wrong. Correct: 'He confessed to TAKING the money from the drawer.'"}
    ]
  },
 
  'Rule_61_A_vs_An': {
    intro: '"A" consonant sounds se pehle aata hai, "An" vowel sounds se pehle. Vowels hain: a, e, i, o, u. LEKIN sound matter karta hai, spelling nahi: "a university" (u sounds like "yu" = consonant sound), "an M.Tech graduate" (M sounds like "em" = vowel sound). "Y" aur "W" se shuru hone wale words mein hamesha "a" use hota hai.',
    words: [
      {
        word: 'A / An',
        preposition: 'based on sound',
        def_en: '"A" before consonant sounds; "An" before vowel sounds. The SOUND of the first letter determines the article, not the spelling.',
        def_hi: 'Consonant sound se pehle "A"; vowel sound se pehle "An". Pehle letter ki AWAAZ decide karti hai, spelling nahi.',
        example: 'A European university / An honest man / An NCC cadet / A one-eyed girl',
        note: 'European → "Yu-ropean" (consonant y-sound) → "a". Honest → silent H, starts with vowel sound "o" → "an". One → "wun" (consonant w-sound) → "a".'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"She is studying at _____ European university.",opts:["a","an","the","no article"],ans:0,exp:"'European' starts with vowel letter 'E' but sounds like 'Yu-ropean' (consonant sound 'y'). So 'a European university' is correct."},
      {type:"Fill in the Blank",q:"He is _____ NCC cadet.",opts:["a","an","the","no article"],ans:1,exp:"'NCC' is pronounced as 'en-see-see' — starts with vowel sound 'en'. So 'an NCC cadet' is correct."},
      {type:"Fill in the Blank",q:"She is _____ one-eyed girl.",opts:["a","an","the","no article"],ans:0,exp:"'One' starts with 'w' sound ('wun'). Words starting with 'w' and 'y' sounds use 'a'. 'A one-eyed girl' is correct."}
    ]
  },
 
  'Rule_62_The_When_To_Use': {
    intro: '"The" tab use karo: mountain ranges, bays/gulfs, group of islands, canals, ships, religious books, government branches, armed forces, deserts, political parties, musical instruments, rivers, oceans, seas, newspapers, superlative degree, unique things, metaphors, country abbreviations (USA, UK) ke pehle.',
    words: [
      {
        word: 'The',
        preposition: 'definite article',
        def_en: 'Used before specific/unique nouns, mountain ranges, rivers, oceans, musical instruments, newspapers, superlatives, abbreviations of countries.',
        def_hi: 'Specific/unique nouns, mountain ranges, rivers, oceans, musical instruments, newspapers, superlatives, country abbreviations ke pehle use hota hai.',
        example: 'The Himalayas / The Ganga / The Times of India / The guitar / The USA',
        note: 'Mountain RANGES take "the" (The Himalayas), but mountain PEAKS do NOT (Everest, not "The Everest").'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"_____ Himalayas is the highest mountain range.",opts:["A","An","The","No article"],ans:2,exp:"Mountain ranges take 'The' before them. 'The Himalayas' is correct. Note: Mountain peaks do NOT take 'the' (just 'Everest', not 'the Everest')."},
      {type:"Error Spotting",q:"Delhi is (A) the Paris of India. (B) No error (C)",opts:["A","B","C","No error"],ans:3,exp:"When 'the' is used before a proper noun as a metaphor (Delhi is being compared to Paris), it is correct. 'Delhi is the Paris of India' is correctly using 'the' with a metaphor. No error."},
      {type:"Fill in the Blank",q:"He plays _____ guitar very well.",opts:["a","an","the","no article"],ans:2,exp:"Musical instruments are preceded by 'the'. 'He plays the guitar' is correct."}
    ]
  },
 
  'Rule_63_Omission_of_The': {
    intro: '"The" nahi aata: cities, countries (non-abbreviated), continents, streets, singular lakes and bays, mountain peaks, single islands, languages, sports, seasons (generally), meals, God (without qualification), life, money ke pehle.',
    words: [
      {
        word: 'No Article',
        preposition: 'zero article',
        def_en: 'No article before names of cities, countries (non-abbreviated), languages, sports, meals, mountain peaks, single islands, seasons (general).',
        def_hi: 'Cities, countries, languages, sports, meals, mountain peaks, single islands, seasons ke pehle koi article nahi.',
        example: 'India / English / cricket / breakfast / Everest / summer',
        note: 'Years never take "the": "in 2009" (correct), "in the 2009" (wrong).'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"I started working here (A) in the 2009. (B) No error (C)",opts:["A","B","C","No error"],ans:1,exp:"Years do not take 'the' before them. 'In 2009' is correct, not 'in the 2009'."},
      {type:"Fill in the Blank",q:"She is learning _____ Spanish.",opts:["the","a","an","no article"],ans:3,exp:"Names of languages do not take any article. 'She is learning Spanish' is correct (no article before the language name)."},
      {type:"Error Spotting",q:"The Mount Everest (A) is the highest peak (B) in the world. No error (C)",opts:["A","B","C","No error"],ans:0,exp:"Mountain peaks do NOT take 'the'. Only mountain ranges take 'the'. Correct: 'Mount Everest is the highest peak' (not 'The Mount Everest')."}
    ]
  },
 
  'Rule_64_The_Adjective_Plural_Noun': {
    intro: 'Jab "the" kisi adjective ke pehle aata hai, toh wo poore group ko represent karta hai aur plural noun ke barabar hota hai. "The poor" = poor people; "The rich" = rich people. Ye hamesha plural verb lete hain.',
    words: [
      {
        word: 'The + Adjective',
        preposition: 'plural verb',
        def_en: '"The" before an adjective represents the entire group and equals a plural noun. Always takes plural verb.',
        def_hi: '"The" + adjective = pura group = plural noun. Hamesha plural verb.',
        example: 'The poor are not always dishonest. / The rich must help the poor.',
        note: '"The honest are respected" — "the honest" = honest people (plural). Never use singular verb with "the + adjective".'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"The poor _____ not always dishonest.",opts:["is","was","are","has been"],ans:2,exp:"'The poor' = poor people (plural noun). It takes plural verb 'are'. 'The poor are not always dishonest.'"},
      {type:"Error Spotting",q:"The honest (A) is respected (B) by everyone. No error (C)",opts:["A","B","C","No error"],ans:1,exp:"'The honest' = honest people (plural). Should take plural verb 'are respected'. 'The honest ARE respected by everyone.'"}
    ]
  },
 
  'Rule_65_Same_Noun_Repeated_Preposition': {
    intro: 'Jab ek hi noun preposition ke through repeat hota hai, dono nouns singular form mein hone chahiye. "Village after village" (sahi), "Villages after villages" (galat). "Book after book", "city after city" — hamesha singular.',
    words: [
      {
        word: 'Noun + Preposition + Same Noun',
        preposition: 'singular form both times',
        def_en: 'When the same noun is connected by a preposition (repeated noun), both must be in singular form.',
        def_hi: 'Jab ek hi noun preposition se connect ho (repeated noun), dono singular form mein hone chahiye.',
        example: 'Village after village was destroyed. / Book after book had been read.',
        note: '"Villages after villages" = WRONG. The pattern is always singular + preposition + singular.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"Villages after villages (A) were destroyed by the terrorists. (B) No error (C)",opts:["A","B","C","No error"],ans:0,exp:"When same nouns are connected by preposition, both must be singular. 'Village after village were destroyed by the terrorists.' (singular forms used)"},
      {type:"Sentence Correction",q:"Books after books had been read by him.",opts:["Books after books","Book after book","Book after books","Books after book"],ans:1,exp:"Both nouns must be in singular form when the same noun is connected by a preposition. 'Book after book had been read by him.'"}
    ]
  },
 
  'Rule_66_Irregular_Compound_Plurals': {
    intro: 'Irregular plurals yaad karo: Dormouse→Dormice, Goose→Geese, Louse→Lice, Tooth→Teeth, Woman→Women. Compound nouns mein plural principal word par banta hai: Daughter-in-law→Daughters-in-law, Passer-by→Passers-by, Commander-in-chief→Commanders-in-chief.',
    words: [
      {
        word: 'Compound Noun Plurals',
        preposition: 'plural on principal word',
        def_en: 'In compound nouns, the PRINCIPAL (main) word takes the plural form, not the last word.',
        def_hi: 'Compound nouns mein principal (main) word plural hota hai, last word nahi.',
        example: 'Passers-by / Daughters-in-law / Commanders-in-chief / Mothers-in-law',
        note: '"Sister-in-laws" = WRONG (sister is principal word). "Sisters-in-law" = CORRECT.'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"Several _____ witnessed the accident.",opts:["passer-bys","passers-by","passer-by","passers-bies"],ans:1,exp:"For compound nouns, the principal word takes the plural. 'Passer' is the principal word → 'Passers-by' is correct."},
      {type:"Error Spotting",q:"Both my sister-in-laws (A) attended (B) the ceremony. No error (C)",opts:["A","B","C","No error"],ans:0,exp:"'Sister' is the principal word in 'sister-in-law'. Plural: 'sisters-in-law', not 'sister-in-laws'. Correct: 'Both my sisters-in-law attended the ceremony.'"}
    ]
  },
 
  'Rule_67_Male_Female_vs_Man_Woman': {
    intro: '"Male/Female" + noun = characteristics describe karta hai (us gender ke liye designed). "Man/Woman" + noun = person ki profession/identity batata hai. "Female doctor" = doctor designed for females. "Woman doctor" = doctor jo ek woman hai.',
    words: [
      {
        word: 'Male/Female vs Man/Woman',
        preposition: 'before nouns',
        def_en: '"Male/Female" describes characteristics or design. "Man/Woman" describes the gender identity of the person in that profession.',
        def_hi: '"Male/Female" = characteristics/design. "Man/Woman" = person ki gender identity us profession mein.',
        example: 'Woman doctor (the doctor is a woman) / Female doctor (a doctor for females)',
        note: 'If a man goes to a female doctor, it implies a doctor meant for females (unusual). More likely he visited a woman doctor (a doctor who is a woman).'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"Raj went to a female doctor to get himself treated.",opts:["female doctor to get himself treated","woman doctor to get himself treated","male doctor to get himself treated","female doctor to treat himself"],ans:1,exp:"Raj is going to a doctor who is a woman (the doctor's gender/identity). 'Woman doctor' means the doctor is a woman. 'Female doctor' would mean a doctor designed for females (wrong context)."},
      {type:"Fill in the Blank",q:"She went to a _____ doctor.",opts:["female","woman","lady","man"],ans:0,exp:"'She' is a female patient going to a doctor. This context suggests the doctor is designed/preferred for females → 'female doctor'. (Though 'woman doctor' also works for the doctor's gender)."}
    ]
  },
 
  'Rule_68_Antecedent_Rule': {
    intro: 'Relative pronoun se pehle aane wala noun/pronoun "Antecedent" kehlata hai. Jab sentence mein koi antecedent NA ho, toh "who/whom/which" ki jagah "whoever/whomever/whatever" use karo.',
    words: [
      {
        word: 'Antecedent',
        preposition: 'before relative pronoun',
        def_en: 'The noun/pronoun just before a relative pronoun is its antecedent. Without an antecedent, use whoever/whomever/whatever.',
        def_hi: 'Relative pronoun se ठीक पहले आने वाला noun/pronoun उसका antecedent है। Antecedent na ho toh whoever/whomever use karo.',
        example: 'Ram met him who they say helped us. (him = antecedent) / Ram met whoever they say helped us. (no antecedent)',
        note: 'Without antecedent: "whoever" serves as both antecedent and relative pronoun in one word.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"Ram met him (A) who they say has helped us. (B) No error (C)",opts:["A","B","C","No error"],ans:3,exp:"'Him' is the antecedent of 'who'. 'Ram met him who they say has helped us' — 'him' is a valid antecedent for 'who'. The sentence is correct. No error."},
      {type:"Fill in the Blank",q:"Ram met _____ they say has helped us. (no clear antecedent)",opts:["him who","whom","whoever","the person whom"],ans:2,exp:"When there is no antecedent, use 'whoever/whomever'. 'Ram met whoever they say has helped us.' 'Whoever' serves as both antecedent and relative pronoun."}
    ]
  },
 
  'Rule_69_Question_Tags_Basic': {
    intro: 'Positive statement → negative question tag. Negative statement → positive question tag. Question tag mein wahi helping verb aur wahi tense use karo jo main statement mein hai.',
    words: [
      {
        word: 'Question Tags',
        preposition: 'same verb + opposite polarity',
        def_en: 'Positive main clause → negative tag. Negative main clause → positive tag. Same helping verb and tense as main clause.',
        def_hi: 'Positive statement → negative tag. Negative statement → positive tag. Wahi helping verb aur tense jo main clause mein.',
        example: 'He has worked hard, hasn\'t he? / He has not worked hard, has he?',
        note: 'The question tag must ALWAYS match the tense of the main clause exactly.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"He has worked very hard on this project, (A) don't he? (B) No error (C)",opts:["A","B","C","No error"],ans:1,exp:"The main clause uses 'has' (Present Perfect). The question tag must use the same helping verb. Also 'don't he' is wrong. Correct: 'hasn't he?' (negative tag for positive statement, same tense)."},
      {type:"Fill in the Blank",q:"He has not worked hard on this project, _____ he?",opts:["hasn't","has","doesn't","didn't"],ans:1,exp:"Negative statement (has not) → positive question tag → 'has he?' The same helping verb ('has') is used. Correct: 'has he?'"}
    ]
  },
 
  'Rule_70_Question_Tag_Amnt': {
    intro: 'English mein "amn\'t" jaisa koi word NAHI hai. "I am..." ke saath question tag "aren\'t I?" hota hai (jo "am I not?" ka short form hai). "I am working very hard, aren\'t I?" — SAHI.',
    words: [
      {
        word: "aren't I",
        preposition: 'question tag for I am',
        def_en: '"Amn\'t" does not exist in English. The correct question tag for "I am..." is "aren\'t I?" which stands for "am I not?".',
        def_hi: '"Amn\'t" English mein hai hi nahi. "I am..." ke saath hamesha "aren\'t I?" use karo.',
        example: "I am working very hard, aren't I?",
        note: '"Amn\'t I?" = WRONG. "Aren\'t I?" = CORRECT (though technically irregular, it is standard usage).'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"I am working very hard for my students, amn't I?",opts:["amn't I?","aren't I?","isn't I?","am I not?"],ans:1,exp:"'Amn't' does not exist. For 'I am + ...', the correct question tag is 'aren't I?' which means 'am I not?'. 'Aren't I?' is the standard form."},
      {type:"Error Spotting",q:"I am doing the work which you gave me, (A) don't I? (B) No error (C)",opts:["A","B","C","No error"],ans:1,exp:"The main clause is in Present Continuous (am doing). The question tag must match the same tense and helping verb. Correct: 'aren't I?' (not 'don't I?')."}
    ]
  },
 
  'Rule_71_Seldom_Barely_Positive_Tag': {
    intro: 'Seldom, barely, hardly, scarcely, never jaisi words negative meaning deti hain. Isliye inke baad hamesha POSITIVE question tag aata hai (jaise negative statements mein aata hai).',
    words: [
      {
        word: 'Seldom / Barely / Hardly / Scarcely / Never',
        preposition: 'positive question tag follows',
        def_en: 'These words carry negative meaning, so they are followed by a POSITIVE question tag (same rule as negative statements).',
        def_hi: 'Ye words negative meaning deti hain, isliye inke baad positive question tag aata hai.',
        example: "He seldom comes to my house, does he? / They have barely enough, have they?",
        note: '"Seldom comes → does he?" (positive tag, not "doesn\'t he?"). The negative meaning is already in the word itself.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"He seldom comes to my house, (A) doesn't he? (B) No error (C)",opts:["A","B","C","No error"],ans:1,exp:"'Seldom' gives negative meaning, so a POSITIVE question tag is used. 'Doesn't he?' is negative. Correct: 'He seldom comes to my house, does he?'"},
      {type:"Fill in the Blank",q:"They have barely enough to pay the rent this month, _____ they?",opts:["haven't","don't","have","hasn't"],ans:2,exp:"'Barely' = negative meaning → positive question tag. 'Have they?' is the positive tag (using 'have' from the main clause). Correct: 'have they?'"}
    ]
  },
 
  'Rule_72_Question_Tag_Same_Tense': {
    intro: 'Question tag hamesha main statement ke SAME TENSE mein hona chahiye. Present Continuous hai toh tag bhi Present Continuous auxiliary use karega. Simple Past hai toh "did/didn\'t" use hoga.',
    words: [
      {
        word: 'Question Tag — Tense Match',
        preposition: 'same tense as main clause',
        def_en: 'The question tag must always be in the same tense as the main statement. Match the auxiliary verb exactly.',
        def_hi: 'Question tag hamesha main statement ke same tense mein. Auxiliary verb exactly match karni chahiye.',
        example: "I am doing the work, aren't I? / He went to the market, didn't he?",
        note: 'Present Continuous (am/is/are + V-ing) → tag uses am/is/are. Simple Past → tag uses did/didn\'t.'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"I am doing the work, don't I?",opts:["don't I?","aren't I?","didn't I?","isn't I?"],ans:1,exp:"Main statement is Present Continuous (am doing). Question tag must use same auxiliary. Correct: 'aren't I?' (from 'am' in Present Continuous → aren't for negative tag)."},
      {type:"Fill in the Blank",q:"He went to the market, _____ he?",opts:["doesn't","didn't","hadn't","hasn't"],ans:1,exp:"Main clause is Simple Past ('went'). Question tag for Simple Past uses 'did/didn't'. Positive statement → negative tag: 'didn't he?'"}
    ]
  },
 
  'Rule_73_Each_Every_Plural_Tag': {
    intro: '"Each" ya "Every" wale sentences mein main clause mein noun/pronoun singular hota hai, LEKIN question tag mein Each/Every ke baad aane wala noun/pronoun PLURAL treat hota hai → plural verb use hoti hai tag mein.',
    words: [
      {
        word: 'Each/Every in Question Tags',
        preposition: 'plural verb in tag',
        def_en: 'Main clause: singular verb. Question tag: treat noun after Each/Every as plural — use "they/haven\'t they/aren\'t they" etc.',
        def_hi: 'Main clause mein singular verb, lekin question tag mein Each/Every ka noun plural treat hota hai.',
        example: "Every girl is very talented, aren't they? / Each one has to work hard, haven't they?",
        note: '"Every girl is..., isn\'t she?" = WRONG. Always use plural "they" in the tag.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"Every girl is very talented, (A) isn't she? (B) No error (C)",opts:["A","B","C","No error"],ans:1,exp:"In question tags for 'Each/Every + noun', the noun is treated as PLURAL. 'Every girl' → tag uses 'they'. Correct: 'Every girl is very talented, aren't they?'"},
      {type:"Fill in the Blank",q:"Each one has to work hard to make both ends meet, _____ they?",opts:["hasn't","haven't","has","have"],ans:1,exp:"With 'Each', the question tag treats the noun as plural. Positive statement → negative tag. 'Haven't they?' is correct."}
    ]
  },
 
  'Rule_74_Collective_Noun_Tags': {
    intro: 'Collective noun + sab units ek saath kaam kar rahe hain (same task) → question tag mein singular ("it"). Collective noun + units alag alag kaam kar rahe hain → question tag mein plural ("they").',
    words: [
      {
        word: 'Collective Noun Question Tags',
        preposition: 'it (single task) / they (different tasks)',
        def_en: 'Collective noun acting as one unit (same task) → singular "it" in tag. Acting as individuals (different tasks) → plural "they" in tag.',
        def_hi: 'Collective noun ek kaam karega toh "it", alag alag kaam karein toh "they".',
        example: "The jury has taken the decision, hasn't it? / The audience took their seats, didn't they?",
        note: 'Jury deciding = one decision together = "it". Audience taking seats = each person takes own seat = different tasks = "they".'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"The jury has taken the decision, _____ it?",opts:["hasn't","haven't","didn't","don't"],ans:0,exp:"The jury took ONE decision together (acting as one unit). Treat as singular → 'hasn't it?' Positive statement → negative tag."},
      {type:"Error Spotting",q:"The audience took the seats, (A) didn't it? (B) No error (C)",opts:["A","B","C","No error"],ans:1,exp:"'Took the seats' = each member took their own separate seat (different tasks). Treat as plural → 'didn't they?' Correct: 'The audience took the seats, didn't they?'"}
    ]
  },
 
  'Rule_75_Imperative_Shall_We': {
    intro: 'Imperative sentences aur proposals ke liye hamesha "shall we" question tag use hota hai. "Let us/Let\'s..." ke baad hamesha "shall we?" aata hai.',
    words: [
      {
        word: 'Imperative / Let us → shall we?',
        preposition: 'shall we in tag',
        def_en: 'Imperative sentences and proposals (Let us/Let\'s...) always use "shall we?" as the question tag.',
        def_hi: 'Imperative sentences aur proposals (Let us/Let\'s) mein hamesha "shall we?" question tag hota hai.',
        example: "Let us go for a walk, shall we? / Let us consider all possibilities, shall we?",
        note: '"Don\'t we?" or "will we?" after "Let us" = WRONG. Only "shall we?" is correct.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"Let us go for a walk, (A) don't we? (B) No error (C)",opts:["A","B","C","No error"],ans:1,exp:"Imperative/proposal sentences (Let us...) always use 'shall we?' as question tag. 'Don't we?' is incorrect. Correct: 'Let us go for a walk, shall we?'"},
      {type:"Fill in the Blank",q:"Let us consider all the possibilities, _____ we?",opts:["don't","shall","will","would"],ans:1,exp:"'Let us + verb' = proposal → question tag is 'shall we?' always. 'Let us consider all possibilities, shall we?'"}
    ]
  },
 
  'Rule_76_In_On_At_Time_Place': {
    intro: '"At": specific time point (at 4 pm, at night) ya chhoti jagah (at Rohini). "On": surface/day/date (on Sunday, on 15th August). "In": area/volume/year/month (in 1947, in April, in Delhi). Order: At < On < In (size ke hisaab se).',
    words: [
      {
        word: 'At / On / In',
        preposition: 'time and place',
        def_en: 'At = specific point (time/small place). On = surface/day/date. In = area/volume/year/month/large place.',
        def_hi: 'At = specific time point ya chhoti jagah. On = surface/day/date. In = area/volume/year/month/badi jagah.',
        example: 'At 2.30 pm / On Sunday / On 15th August / In 2009 / In April / In Delhi',
        note: 'Dates → On. Years → In. Clock times → At. Days → On.'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"My birthday is _____ 30 May.",opts:["at","in","on","by"],ans:2,exp:"Specific dates use 'on'. 'My birthday is on 30 May.' Days and dates always take 'on'."},
      {type:"Fill in the Blank",q:"She started working here _____ 2009.",opts:["on","at","in","by"],ans:2,exp:"Years take 'in'. 'She started working here in 2009.'"},
      {type:"Fill in the Blank",q:"There's a meeting _____ 2.30 this afternoon.",opts:["on","in","at","by"],ans:2,exp:"Specific clock time takes 'at'. 'There's a meeting at 2.30 this afternoon.'"}
    ]
  },
 
  'Rule_77_Both_Followed_By_And': {
    intro: '"Both" hamesha "and" ke saath aata hai, kabhi "as well as" ke saath nahi. "Both Ram and Shyam" (sahi). "Both Ram as well as Shyam" (galat).',
    words: [
      {
        word: 'Both...and',
        preposition: 'and (never as well as)',
        def_en: '"Both" is ALWAYS followed by "and" and NEVER by "as well as".',
        def_hi: '"Both" ke baad hamesha "and" — kabhi "as well as" nahi.',
        example: 'Both Ram and Shyam are good at English.',
        note: '"Both...as well as" = ALWAYS WRONG. Only "both...and" is grammatically correct.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"Both Ram as well as (A) Shyam are good at English. (B) No error (C)",opts:["A","B","C","No error"],ans:0,exp:"'Both' must be followed by 'and', never 'as well as'. Correct: 'Both Ram and Shyam are good at English.'"},
      {type:"Fill in the Blank",q:"I felt both happy _____ sad at the same time.",opts:["as well as","and","or","but"],ans:1,exp:"'Both' is always followed by 'and'. 'I felt both happy and sad.' Never use 'both...as well as'."}
    ]
  },
 
  'Rule_78_Lest_Should': {
    intro: '"Lest" ka matlab hai "warna/is darr se ki". "Lest" ke baad hamesha "should" ya koi helping verb nahi aata — "would" ya "will" KABHI nahi aata lest ke baad.',
    words: [
      {
        word: 'Lest',
        preposition: 'should or no helping verb',
        def_en: '"Lest" means "for fear that/otherwise". Always followed by "should" or no helping verb. NEVER "would" or "will".',
        def_hi: '"Lest" ke baad "should" ya koi helping verb nahi — "would/will" kabhi nahi.',
        example: 'Work hard, lest you should fail. / Work hard, lest you fail.',
        note: '"Lest you would fail" = WRONG. Both "lest you fail" and "lest you should fail" are correct.'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"Work hard, lest you would fail.",opts:["lest you would fail","lest you fail","lest you should fail","Either B or C"],ans:3,exp:"'Lest' takes either 'should' or no helping verb. 'Would' is incorrect. Both 'lest you fail' and 'lest you should fail' are correct."},
      {type:"Error Spotting",q:"He cut the remark out of the final program (A) lest it should offend listeners. (B) No error (C)",opts:["A","B","C","No error"],ans:3,exp:"'Lest it should offend' — 'should' after 'lest' is correct. The sentence is grammatically perfect. No error."}
    ]
  },
 
  'Rule_79_Until_vs_Unless': {
    intro: '"Until": time oriented (time ki baat karta hai). "Unless": action oriented (condition/action ki baat karta hai). "Till" aur "Until" same meaning rakhte hain, lekin "till" sentence ke shuru mein use nahi ho sakta (unlike "until").',
    words: [
      {
        word: 'Until vs Unless',
        preposition: 'time vs condition',
        def_en: '"Until/Till" = time-oriented condition. "Unless" = action/condition-oriented. "Till" cannot begin a sentence.',
        def_hi: '"Until/Till" = time ke baare mein. "Unless" = action/condition ke baare mein. "Till" sentence shuru nahi kar sakta.',
        example: 'Wait until sunset. (time) / Unless you study, you will fail. (condition)',
        note: '"Until sunset" = time reference. "Unless you work" = action/condition reference. Never confuse the two.'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"Wait for me _____ sunset.",opts:["unless","until","lest","before"],ans:1,exp:"'Until sunset' refers to a point in TIME. 'Until' is used for time-oriented conditions. 'Wait for me until sunset.'"},
      {type:"Fill in the Blank",q:"_____ the government reduces the tax, the tax-payer base will not increase.",opts:["Until","Lest","Unless","Before"],ans:2,exp:"This refers to an ACTION (reducing tax) as a condition. 'Unless' is action-oriented. 'Unless the government reduces the tax...'"}
    ]
  },
 
  'Rule_80_Parallelism': {
    intro: 'Sentence mein similar function wale elements same grammatical form mein hone chahiye. Series gerunds (-ing) se shuru hoi toh gerunds se continue karo. Infinitives (to+V1) se shuru hoi toh infinitives se.',
    words: [
      {
        word: 'Parallelism',
        preposition: 'same grammatical form in series',
        def_en: 'Elements alike in function must be alike in construction. Same grammatical form throughout a series.',
        def_hi: 'Series mein sab elements same grammatical form mein hone chahiye — gerunds saath, infinitives saath.',
        example: 'I like singing, dancing, and walking. (all gerunds) / to cook, to rest, and to prepare. (all infinitives)',
        note: '"I like singing, dancing, and to walk" = WRONG. "To walk" breaks the parallelism of gerunds.'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"I like singing, dancing, and to walk.",opts:["singing, dancing, and to walk","singing, dancing, and walking","to sing, to dance, and walking","singing, to dance, and walking"],ans:1,exp:"Parallelism requires all elements in a series to be in the same form. 'Singing' and 'dancing' are gerunds, so 'walking' (not 'to walk') must be used. 'I like singing, dancing, and walking.'"},
      {type:"Error Spotting",q:"He asked his mother to cook, to rest, and (A) prepare the dish. (B) No error (C)",opts:["A","B","C","No error"],ans:1,exp:"The series starts with infinitives (to cook, to rest). The third element must also be an infinitive: 'to prepare' (not just 'prepare'). Correct: 'to cook, to rest, and to prepare.'"}
    ]
  },
 
  'Rule_81_Proper_Prepositions': {
    intro: 'Specific preposition collocations: superior/inferior/junior/senior + TO; older/better/different + THAN/FROM; responsible/famous + FOR; reaction/response + TO; attempt + AT; inquiry/research + INTO; knowledge/experience + OF.',
    words: [
      {
        word: 'Preposition Collocations',
        preposition: 'fixed pairs',
        def_en: 'Certain adjectives and nouns always pair with specific prepositions: superior to, famous for, inquiry into, knowledge of, attempt at.',
        def_hi: 'Kuch adjectives aur nouns hamesha specific prepositions ke saath aate hain.',
        example: 'He is superior to me. / The inquiry into the case continues. / He is famous for his work.',
        note: '"Superior than" = WRONG. "Superior to" = CORRECT. "-ior" words (superior, inferior, junior, senior) always take "to".'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"He is superior than (A) and older than me. (B) No error (C)",opts:["A","B","C","No error"],ans:0,exp:"'Superior' (ends in -ior) takes 'to', not 'than'. Correct: 'He is superior to and older than me.' 'Older' correctly takes 'than'."},
      {type:"Fill in the Blank",q:"The police inquiry _____ the theft continues.",opts:["about","into","of","for"],ans:1,exp:"'Inquiry' takes preposition 'into'. 'The police inquiry into the theft continues.'"}
    ]
  },
 
  'Rule_82_Too_Much_vs_Much_Too': {
    intro: '"Too much + uncountable noun" = adjective ke roop mein (excessive quantity). "Much too + adjective" = adverb ke roop mein (far too / bahut zyada). Test: noun ke pehle → "too much"; adjective ke pehle → "much too".',
    words: [
      {
        word: 'Too much vs Much too',
        preposition: 'noun vs adjective',
        def_en: '"Too much" before nouns (excessive quantity). "Much too" before adjectives (equivalent to "far too").',
        def_hi: '"Too much" nouns ke pehle. "Much too" adjectives ke pehle.',
        example: 'There is too much sugar. (noun) / He is much too strong. (adjective)',
        note: '"He is too much strong" = WRONG. "He is much too strong" = CORRECT. "Much too" amplifies the adjective.'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"He is too much strong.",opts:["too much strong","much too strong","too strong","much stronger"],ans:1,exp:"'Strong' is an adjective. 'Much too' is used before adjectives (as adverb). 'He is much too strong' is correct."},
      {type:"Error Spotting",q:"There is much too sugar. (A) No error (B)",opts:["A","B","No error","Correct"],ans:0,exp:"'Sugar' is a noun. Before nouns, 'too much' is used (as adjective). 'Much too' is for adjectives. Correct: 'There is too much sugar.'"}
    ]
  },
 
  'Rule_83_Possessive_Case_Followed_By_Noun': {
    intro: 'Possessive case (his, her, my, their, our, its, your) ke baad hamesha NOUN aana chahiye. Possessive case akela nahi khadha reh sakta — noun zaroor follow karega.',
    words: [
      {
        word: 'Possessive + Noun',
        preposition: 'noun must follow',
        def_en: 'A possessive case (his, her, my, their, our, its, your) must always be followed by a noun.',
        def_hi: 'Possessive case ke baad hamesha noun aana chahiye.',
        example: 'His belongings were lost. / Her surroundings are not clean.',
        note: '"His" alone cannot stand — "his belongings", "his house", etc. are correct structures.'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"His _____ were lost.",opts:["belongings","own","belonging","property"],ans:0,exp:"'His' (possessive case) must be followed by a noun. 'His belongings were lost' — 'belongings' is the noun. The sentence is correctly structured."},
      {type:"Error Spotting",q:"His surrounding (A) are not clean. (B) No error (C)",opts:["A","B","C","No error"],ans:3,exp:"'His surroundings are not clean' — 'surroundings' is a noun following the possessive 'his'. The sentence is correct. Note: 'surroundings' is always plural."}
    ]
  },
 
  'Rule_84_Politics_Singular_Plural': {
    intro: '"Politics" as a field/subject → singular verb. "Politics" as political beliefs/activities → plural verb. Similarly, "Mathematics" as a subject → singular; as calculations → plural. "Statistics" as a subject → singular; as data → plural.',
    words: [
      {
        word: 'Politics / Mathematics / Statistics',
        preposition: 'singular (subject) / plural (activity/data)',
        def_en: 'As a subject/field → singular verb. As beliefs/activities/data → plural verb.',
        def_hi: 'Subject ke roop mein → singular verb. Beliefs/activities/data ke roop mein → plural verb.',
        example: 'Politics is a dirty game. (subject) / His politics are different from mine. (beliefs)',
        note: 'Context determines whether singular or plural: "Politics is..." (the field) vs "His politics are..." (his views).'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"Politics _____ a very dirty game.",opts:["are","were","is","have been"],ans:2,exp:"'Politics' as a field/subject takes singular verb. 'Politics is a very dirty game.'"},
      {type:"Fill in the Blank",q:"His politics _____ different from mine.",opts:["is","was","are","has been"],ans:2,exp:"'His politics' = his political beliefs/views → plural meaning → plural verb. 'His politics are different from mine.'"}
    ]
  },
 
  'Rule_85_Mathematics_Statistics_Data': {
    intro: '"Mathematics": subject ke roop mein → singular. Calculations ke roop mein → plural. "Statistics": subject → singular. Data ke roop mein → plural. "Data" always plural hai; singular = Datum.',
    words: [
      {
        word: 'Data / Datum',
        preposition: 'plural (data) / singular (datum)',
        def_en: '"Data" is always plural; its singular form is "datum". Takes plural verb.',
        def_hi: '"Data" hamesha plural hai; singular = datum. Plural verb lega.',
        example: 'Data warn us that it will rain. / Mathematics is a difficult subject.',
        note: '"Data warns us" = WRONG. "Data warn us" = CORRECT. Data is plural.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"Mathematics (A) are a difficult subject. (B) No error (C)",opts:["A","B","C","No error"],ans:1,exp:"'Mathematics' as a subject takes singular verb. 'Mathematics IS a difficult subject.' 'Are' is incorrect."},
      {type:"Fill in the Blank",q:"Data _____ us that it will rain today.",opts:["warns","warn","is warning","has warned"],ans:1,exp:"'Data' is plural (singular = Datum). Plural subject takes plural verb. 'Data warn us...' is correct."}
    ]
  },
 
  'Rule_86_Article_A_One_of_Many_The_Only_One': {
    intro: '"A" = "one of many" ka matlab hai. "The" = "the only one" ka matlab hai. Possessive case ke saath "A" use hota hai; objective case ke saath "The". "A brother of mine" (mere kai bhai hain). "The brother of me" (sirf ek bhai).',
    words: [
      {
        word: 'A (one of many) vs The (only one)',
        preposition: 'possessive vs objective case',
        def_en: '"A" = one of many (used with possessive case). "The" = the only one (used with objective case).',
        def_hi: '"A" = bahut mein se ek (possessive case ke saath). "The" = sirf ek (objective case ke saath).',
        example: 'A brother of mine is a scientist. / The brother of me is a doctor.',
        note: '"A brother of mine" → possessive "mine" + "A". "The brother of me" → objective "me" + "The".'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"_____ brother of mine is a scientist.",opts:["The","A","An","No article"],ans:1,exp:"'A brother of mine' = one of many brothers. 'A' with possessive case ('mine'). 'The brother of me' would suggest only one brother."},
      {type:"Sentence Correction",q:"The brother of me is a doctor.",opts:["The brother of me","A brother of mine","The brother of mine","A brother of me"],ans:1,exp:"For possessive case ('mine'), use article 'A'. 'A brother of mine is a doctor.' For objective case ('me'), use 'The': 'The brother of me' would mean one specific brother."}
    ]
  },
 
  'Rule_87_Too_Also_As_Well_Placement': {
    intro: '"Also" sentence ke END mein NAHI aa sakta. "Too" aur "As well" end mein aa sakte hain. "Also" verb ke pehle ya auxiliary aur main verb ke beech mein aata hai. "Too" (high intensity) akela nahi reh sakta — "to" ya "that" clause chahiye.',
    words: [
      {
        word: 'Also / Too / As well',
        preposition: 'placement rules',
        def_en: '"Also" cannot end a sentence. "Too" and "as well" can. "Too" (meaning excessive) needs a "to" or "that" clause to complete it.',
        def_hi: '"Also" sentence end mein nahi. "Too"/"as well" end mein aa sakte hain. "Too" (excessive) ko complete clause chahiye.',
        example: 'I have also brought a bag. / I have brought a bag too. / She is too beautiful to ignore.',
        note: '"I have brought a bag also" = WRONG. "I have also brought a bag" OR "I have brought a bag too" = CORRECT.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"I have brought a bag also. (A) No error (B)",opts:["A","B","No error","Correct as is"],ans:0,exp:"'Also' cannot be placed at the end of a sentence. Correct: 'I have also brought a bag' or use 'too'/'as well' at end: 'I have brought a bag too.'"},
      {type:"Sentence Correction",q:"She is too beautiful.",opts:["too beautiful","very beautiful","beautiful too","much beautiful"],ans:1,exp:"'Too' in the sense of 'high intensity' cannot stand alone — the sentence is incomplete. 'Too beautiful to...' or 'too beautiful for...' is needed. 'Very beautiful' is the simplest correct form."}
    ]
  },
 
  'Rule_88_Optative_V1_Base': {
    intro: 'Optative sentences prayer, wish, ya curse express karte hain. Ye "May" ya "Wish" se shuru hote hain. Subject singular ho ya plural, hamesha V1 (base form) use karo. Kabhi kabhi "may" hidden hota hai.',
    words: [
      {
        word: 'Optative Sentences',
        preposition: 'V1 base form always',
        def_en: 'Optative sentences express prayer/wish/curse. Start with "May" or "Wish". Always use V1 (base form) regardless of subject.',
        def_hi: 'Prayer/wish/curse express karne wale sentences. "May" ya "Wish" se shuru. Hamesha V1 (base form).',
        example: 'May God bless you! / Long live the king! (May is hidden)',
        note: '"May God blesses you" = WRONG. "May God bless you" = CORRECT. V1, never V3 or V-ing.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"May God blesses (A) you! (B) No error (C)",opts:["A","B","C","No error"],ans:0,exp:"In optative sentences (with 'May'), always use V1 (base form), regardless of subject. 'Blesses' is wrong. Correct: 'May God bless you!'"},
      {type:"Fill in the Blank",q:"Long _____ the king!",opts:["lives","live","lived","will live"],ans:1,exp:"'Long live the king' is an optative sentence (wish). 'May' is hidden. Use V1 (base form): 'live'. 'Long live the king!' is correct."}
    ]
  },
 
  'Rule_89_Pseudo_Subjects': {
    intro: 'Jab sentence mein participle phrase ke shuru mein koi subject na ho, toh "It" pseudo subject ke roop mein use karo. "Being a rainy day, I did not go to school" galat hai kyunki "I" rainy day se related nahi hai. Sahi: "It being a rainy day, I did not go to school."',
    words: [
      {
        word: 'Pseudo Subject — It',
        preposition: 'used when no subject for participle',
        def_en: 'When a participle phrase at the start of a sentence has no logical subject, add "It" as a pseudo subject.',
        def_hi: 'Jab shuruat mein participle phrase ka koi subject na ho, "It" pseudo subject add karo.',
        example: 'It being a rainy day, I did not go to school.',
        note: 'If the participle refers to the main subject, no pseudo subject needed: "Being ill, he did not come" (he was ill = correct).'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"Being a rainy day, I did not go to school.",opts:["Being a rainy day, I","It being a rainy day, I","Being rainy, I","It was a rainy day, I"],ans:1,exp:"'Rainy day' has no subject. 'I' (main subject) is not the rainy day. So we add 'It' as pseudo subject: 'It being a rainy day, I did not go to school.'"},
      {type:"Error Spotting",q:"Being ill, (A) he did not come to class. (B) No error (C)",opts:["A","B","C","No error"],ans:3,exp:"'Being ill' refers to 'he' (the main subject). 'He' WAS ill, so the participle phrase relates correctly to the main subject. No pseudo subject needed. No error."}
    ]
  },
 
  'Rule_90_Infinitive_Noun_Preposition': {
    intro: 'Jab infinitive (to + V1) sentence mein kisi noun ke baare mein baat karta ho / us noun ko modify karta ho, toh infinitive ke baad PREPOSITION zaroor aata hai. "The child has no bed to sleep in" ("in" connects "sleep" to "bed").',
    words: [
      {
        word: 'Infinitive + Preposition (when modifying noun)',
        preposition: 'preposition connects infinitive to noun',
        def_en: 'When an infinitive modifies/refers to a noun, the infinitive must be followed by a preposition that connects it back to the noun.',
        def_hi: 'Jab infinitive kisi noun ko modify kare, toh infinitive ke baad preposition aana chahiye jo noun se connect kare.',
        example: 'The child has no bed to sleep in. / I have a pen to write with.',
        note: '"The child has no bed to sleep" = WRONG (missing "in"). "To sleep in" → "in" connects "sleep" back to "bed".'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"The child has no bed to sleep. (A) No error (B)",opts:["A","B","No error","Correct"],ans:0,exp:"The infinitive 'to sleep' modifies noun 'bed'. Infinitive talking about noun must be followed by preposition. Correct: 'The child has no bed to sleep in.' ('in' connects sleep to bed)"},
      {type:"Fill in the Blank",q:"I have a pen to write _____.",opts:["on","in","with","for"],ans:2,exp:"'To write' modifies noun 'pen'. We write WITH a pen, so 'with' is the correct preposition. 'I have a pen to write with.'"}
    ]
  },
 
  'Rule_91_Two_Helping_Verbs_Main_Verb_Both': {
    intro: 'Jab sentence mein do alag helping verbs hon, toh main verb dono ke baad explicitly likhni chahiye (shared/omit nahi karna). "I have never watched and will never watch this movie." (Har helping verb ke baad main verb ka sahi form).',
    words: [
      {
        word: 'Two Helping Verbs — Write Main Verb Twice',
        preposition: 'after each helping verb',
        def_en: 'When two different helping verbs are used, write the main verb in its proper form after EACH helping verb. Do not share/omit.',
        def_hi: 'Do alag helping verbs hone par, main verb dono ke baad sahi form mein likhni chahiye. Share nahi karna.',
        example: 'I have never watched and will never watch this movie.',
        note: '"I have never and will never watch" = WRONG. Each helping verb needs its own main verb form: "watched" (after have) + "watch" (after will).'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"I have never and will never watch this movie.",opts:["have never and will never watch","have never watched and will never watch","never have and will watch","have never watched and will never watched"],ans:1,exp:"When two helping verbs require the same main verb, write the main verb in its proper form after EACH helping verb. 'Have never watched AND will never watch.'"},
      {type:"Error Spotting",q:"I have never watched (A) and will never watch this movie. (B) No error (C)",opts:["A","B","C","No error"],ans:3,exp:"The main verb 'watched' appears after the first helping verb (have) in past participle, and 'watch' appears after 'will'. Both forms are correct for their respective auxiliaries. No error."}
    ]
  },
 
  'Rule_92_Words_Always_Plural': {
    intro: 'Ye words hamesha plural hote hain aur plural verb lete hain: belongings, savings, congratulations, scissors, proceeds, surroundings, regards, pliers, tongs, jeans, pyjamas, shorts, contents, outskirts, glasses, clothes, thanks, goggles, premises, earrings, tidings.',
    words: [
      {
        word: 'Always Plural Words',
        preposition: 'plural verb always',
        def_en: 'These words are always plural: belongings, savings, scissors, regards, surroundings, clothes, jeans, glasses, premises, etc.',
        def_hi: 'Ye words hamesha plural hain: belongings, savings, scissors, regards, clothes, jeans, glasses, premises, etc.',
        example: 'His regards were conveyed. / Your clothes are dirty. / The scissors are on the table.',
        note: '"His regards was conveyed" = WRONG. "His regards WERE conveyed" = CORRECT. No singular form exists for these.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"His regards (A) was conveyed to his parents. (B) No error (C)",opts:["A","B","C","No error"],ans:1,exp:"'Regards' is always plural. It must take a plural verb. Correct: 'His regards WERE conveyed to his parents.'"},
      {type:"Fill in the Blank",q:"Your clothes _____ dirty.",opts:["is","was","are","has been"],ans:2,exp:"'Clothes' is always plural. Plural verb 'are' is required. 'Your clothes are dirty.'"}
    ]
  },
 
  'Rule_93_Words_Always_Singular': {
    intro: 'Ye words hamesha singular hote hain (singular verb lete hain): Mathematics, Physics, Statistics, News, Economics, Innings, Politics, Athletics, Gymnastics, Gallows, Mechanics, Summons, Classics. Agenda bhi English mein singular treat hota hai.',
    words: [
      {
        word: 'Always Singular Words',
        preposition: 'singular verb always',
        def_en: 'These words are always singular: Mathematics, Physics, News, Economics, Athletics, Gymnastics, Mechanics, etc.',
        def_hi: 'Ye words hamesha singular hain: Mathematics, Physics, News, Economics, Athletics, etc.',
        example: 'This news was broadcast. / Athletics is a popular sport. / Mathematics is difficult.',
        note: '"These news" = WRONG. "This news" = CORRECT. News always takes singular article and verb.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"These news (A) were broadcast from All India Radio. (B) No error (C)",opts:["A","B","C","No error"],ans:0,exp:"'News' is always singular. 'These news' is wrong — should be 'This news'. Also 'were broadcast' → 'was broadcast'. Correct: 'This news was broadcast from All India Radio.'"},
      {type:"Fill in the Blank",q:"Athletics _____ a popular sport in schools.",opts:["are","were","is","have been"],ans:2,exp:"'Athletics' is always singular (takes singular verb). 'Athletics IS a popular sport in schools.'"}
    ]
  },
 
  'Rule_94_Uncountable_Nouns_No_Plural': {
    intro: 'Ye words uncountable nouns hain — inका plural form EXIST HI NAHI KARTA: equipment, furniture, jewellery, luggage, machinery, poetry, scenery, information, advice, baggage, hair. Inhe kabhi plural form mein mat likho.',
    words: [
      {
        word: 'Uncountable Nouns',
        preposition: 'no plural form',
        def_en: 'These nouns have no plural form: equipment, furniture, jewellery, luggage, machinery, poetry, scenery, information, advice, baggage, hair.',
        def_hi: 'In nouns ka plural form nahi hota: equipment, furniture, luggage, information, advice, etc.',
        example: 'His luggage was booked. / He gave me good information.',
        note: '"Luggages", "informations", "advices", "furnitures" = ALL WRONG. Never add "s" to these nouns.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"His luggages (A) was booked. (B) No error (C)",opts:["A","B","C","No error"],ans:0,exp:"'Luggage' is uncountable — no plural form. 'Luggages' does not exist. Correct: 'His luggage was booked.'"},
      {type:"Sentence Correction",q:"He has given me a good information.",opts:["a good information","good information","an information","some informations"],ans:1,exp:"'Information' is uncountable — cannot be preceded by 'a/an' or pluralized. Correct: 'He has given me good information.' (no article, no plural)."}
    ]
  },
 
  'Rule_95_As_Soon_As_Not_Than': {
    intro: '"As soon as" ke baad "than" kabhi NAHI aata ("than" sirf "No sooner" ke baad aata hai). Type I conditional: Simple Present → will/shall/can/may + V1. Type II: Simple Past → would + V1. Type III: Past Perfect → would have + V3.',
    words: [
      {
        word: 'As soon as (not than)',
        preposition: 'no "than" after as soon as',
        def_en: '"As soon as" is NEVER followed by "than". "Than" pairs with "No sooner". Also: conditional types follow specific tense patterns.',
        def_hi: '"As soon as" ke baad "than" kabhi nahi. "No sooner...than" sahi hai.',
        example: 'As soon as I complete the work, I will go. / No sooner did I arrive than it rained.',
        note: '"As soon as...than" = WRONG. "No sooner...than" = CORRECT.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"As soon as I complete the work (A) than I will go to his house. (B) No error (C)",opts:["A","B","C","No error"],ans:1,exp:"'As soon as' is NOT followed by 'than'. 'Than' is used after 'No sooner'. Correct: 'As soon as I complete the work, I will go to his house.'"},
      {type:"Fill in the Blank",q:"As soon as _____ comes, I will ask him this question.",opts:["he came","he comes","he had come","he will come"],ans:1,exp:"Type I conditional: 'as soon as' clause uses Simple Present; main clause uses 'will'. 'As soon as he comes, I will ask him.'"}
    ]
  },
 
  'Rule_96_Possessive_After_All_Both': {
    intro: 'Possessive case hamesha "all" aur "both" ke BAAD aata hai. "All my students" (sahi), "My all students" (galat). "Both my friends" (sahi), "My both friends" (galat).',
    words: [
      {
        word: 'All/Both + Possessive',
        preposition: 'possessive after all/both',
        def_en: 'Possessive case (my, his, her, their, etc.) must always come AFTER "all" and "both", never before.',
        def_hi: 'Possessive case hamesha "all" aur "both" ke baad aata hai, pehle nahi.',
        example: 'All my students are talented. / Both my friends are here.',
        note: '"My all students" = WRONG. "My both friends" = WRONG. Possessive always follows all/both.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"My all students (A) are very talented. (B) No error (C)",opts:["A","B","C","No error"],ans:0,exp:"Possessive case comes AFTER 'all'. 'My all students' is incorrect. Correct: 'All my students are very talented.'"},
      {type:"Sentence Correction",q:"My both friends are very talented.",opts:["My both friends","Both my friends","Both of my friends","Either B or C"],ans:3,exp:"Possessive comes after 'both'. 'Both my friends' is correct. 'Both of my friends' is also acceptable. Both B and C are correct."}
    ]
  },
 
  'Rule_97_Superfluous_Sentences': {
    intro: '"As" + "so" saath nahi aate. "Due to" + "the reason" saath nahi aate (redundant). "As soon as" + "than" nahi aata. "Since/Because" + "so" saath nahi aate (result clause).',
    words: [
      {
        word: 'Superfluous Words',
        preposition: 'avoid redundant connectors',
        def_en: 'Certain connectors are never used together: As...so; Due to the reason; Since/Because...so; As soon as...than.',
        def_hi: 'Kuch connectors saath kabhi nahi aate: As...so; Due to the reason; Since/Because...so.',
        example: 'As he was unwell, he didn\'t come. (not "...so he didn\'t come") / Due to illness, he was absent.',
        note: '"As he was unwell, so he didn\'t come" = WRONG. Use either "As...he didn\'t come" OR "He was unwell, so he didn\'t come".'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"As he was unwell, (A) so he didn't come to class. (B) No error (C)",opts:["A","B","C","No error"],ans:1,exp:"'As' (meaning because) is not used with 'so'. They are both connectors for reason and cannot be used together. Correct: Either 'As he was unwell, he didn't come' OR 'He was unwell, so he didn't come.'"},
      {type:"Sentence Correction",q:"Due to the reason that he is not well, he did not come to the class.",opts:["Due to the reason that","Due to","Because of the reason that","The reason is that"],ans:1,exp:"'Due to' and 'the reason' are never used together (redundant). Correct: 'Due to sickness, he did not come to class.' Or simply 'Because he is not well...'"}
    ]
  },
 
  'Rule_98_Usage_of_Quantity': {
    intro: '"Quantity" ke saath "little" ya "few" kabhi nahi aata. "Quantity" sirf "small" ke saath use ho sakta hai. "Little quantity" = GALAT. "Small quantity" = SAHI.',
    words: [
      {
        word: 'Quantity + small',
        preposition: 'only "small" with quantity',
        def_en: '"Quantity" cannot be used with "little", "few", "less". It can ONLY be used with "small".',
        def_hi: '"Quantity" ke saath sirf "small" — "little/few/less" kabhi nahi.',
        example: 'A small quantity of food was wasted.',
        note: '"Little quantity" = WRONG. "Few quantity" = WRONG. "Small quantity" = ONLY CORRECT FORM.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"Little quantity of food (A) was wasted. (B) No error (C)",opts:["A","B","C","No error"],ans:0,exp:"'Little quantity' is incorrect — 'quantity' cannot be used with 'little/few'. Only 'small' can be used with 'quantity'. Correct: 'A small quantity of food was wasted.'"},
      {type:"Fill in the Blank",q:"_____ quantity of food was wasted.",opts:["Little","Few","A small","Less"],ans:2,exp:"'Quantity' can only be paired with 'small'. 'A small quantity of food was wasted.' 'Little/few/less quantity' are all incorrect."}
    ]
  },
 
  'Rule_99_Confusing_Verb_Forms': {
    intro: 'Important verb forms yaad karo: Fly-Flew-Flown (udna). Flow-Flowed-Flowed (behna). Find-Found-Found. Found-Founded-Founded (establish karna). Hang(prisoner)-Hanged-Hanged. Hang(cheez)-Hung-Hung.',
    words: [
      {
        word: 'Fly/Flow/Find/Found/Hang',
        preposition: 'V1-V2-V3 forms',
        def_en: 'Fly→Flew→Flown. Flow→Flowed→Flowed. Find→Found→Found. Found(establish)→Founded→Founded. Hang(prisoner)→Hanged→Hanged. Hang(object)→Hung→Hung.',
        def_hi: 'Fly→Flew→Flown. Flow→Flowed→Flowed. Hang(prisoner)→Hanged. Hang(object)→Hung.',
        example: 'The water overflowed. / The clock was hung. / She founded the organization.',
        note: '"Overflown" (V3 of fly) ≠ "Overflowed" (V3 of flow). Water flows → overflowed. Birds fly → flown.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"The water (A) overflown from the banks. (B) No error (C)",opts:["A","B","C","No error"],ans:1,exp:"'Flow' (to flow like water) uses V2/V3 = 'flowed' (regular). 'Overflown' is V3 of 'fly'. Correct: 'The water overflowed from the banks.'"},
      {type:"Fill in the Blank",q:"The clock was _____ on the wall.",opts:["hanged","hung","hang","flown"],ans:1,exp:"'Hang' for objects (non-prisoners) uses Hung-Hung. 'The clock was hung on the wall.' 'Hanged' is used specifically for executing prisoners."},
      {type:"Sentence Correction",q:"The secretary has found this organization.",opts:["has found this organization","has founded this organization","had found this organization","found this organization"],ans:1,exp:"'Found' = to discover/locate. 'Founded' = to establish. The secretary ESTABLISHED the organization, so 'founded' (V3 of 'Found=establish') is correct."}
    ]
  },
 
  'Rule_100_Different_Forms_of_Lie': {
    intro: 'Teen alag verbs hain: (1) Lie-Lied-Lied: jhooth bolna. (2) Lay-Laid-Laid: kuch rakhna (object chahiye). (3) Lie-Lay-Lain: horizontal position mein hona (koi object nahi chahiye).',
    words: [
      {
        word: 'Lie / Lay / Lie (3 different verbs)',
        preposition: 'V1-V2-V3 for each',
        def_en: '(1) Lie-Lied-Lied = to say something untrue. (2) Lay-Laid-Laid = to place/put (needs object). (3) Lie-Lay-Lain = to be horizontal (no object).',
        def_hi: '(1) Lie-Lied-Lied = jhooth bolna. (2) Lay-Laid-Laid = rakhna (object ke saath). (3) Lie-Lay-Lain = letna (bina object).',
        example: 'She lied to her parents. / A pen lay on the desk. / She laid the baby on the bed.',
        note: 'Lay (V2 of Lie=to recline) vs Laid (V2 of Lay=to place) — most commonly confused pair.'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"She _____ to her parents about her new car.",opts:["lied","lay","laid","lain"],ans:0,exp:"To say something untrue → Lie-Lied-Lied. Past tense: 'lied'. 'She lied to her parents.'"},
      {type:"Fill in the Blank",q:"A pen _____ on the desk.",opts:["lied","laid","lay","lain"],ans:2,exp:"'Lie (to be in horizontal position)' V2 = 'lay'. A pen lying (being) on the desk (Simple Past) = 'lay'. 'A pen lay on the desk.'"},
      {type:"Fill in the Blank",q:"She _____ the baby on the bed.",opts:["lay","lied","laid","lain"],ans:2,exp:"'Lay-Laid-Laid' = to place something (takes object). Object = 'the baby'. Past tense = 'laid'. 'She laid the baby on the bed.'"}
    ]
  },
 
  'Rule_101_Die_Of_vs_Die_From': {
    intro: '"Die of": disease ke liye use hota hai. "Die from": reason/cause ke liye (disease nahi). "He died of cancer" (disease) vs "She died from overwork" (reason/cause).',
    words: [
      {
        word: 'Die of / Die from',
        preposition: 'of (disease) / from (cause)',
        def_en: '"Die of" = used with diseases. "Die from" = used with reasons/causes (not diseases).',
        def_hi: '"Die of" = bimari ke liye. "Die from" = wajah/cause ke liye (bimari nahi).',
        example: 'He died of cancer. (disease) / Trees are dying from acid rain. (cause)',
        note: 'Cancer, cholera, fever → "died of". Overwork, starvation, accident → "died from".'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"He died _____ cancer.",opts:["from","of","due to","by"],ans:1,exp:"Cancer is a disease. 'Die of' is used with diseases. 'He died of cancer.'"},
      {type:"Fill in the Blank",q:"Trees are dying _____ acid rain.",opts:["of","from","due","by"],ans:1,exp:"Acid rain is a reason/cause (not a disease). 'Die from' is used with reasons/causes. 'Trees are dying from acid rain.'"}
    ]
  },
 
  'Rule_102_Beside_vs_Besides': {
    intro: '"Beside": preposition meaning "ke bagal mein / next to". "Besides": linking adverb meaning "ke alawa / in addition to". Dono bilkul alag words hain alag meanings ke saath.',
    words: [
      {
        word: 'Beside vs Besides',
        preposition: 'next to vs in addition to',
        def_en: '"Beside" = at the side of/next to (preposition). "Besides" = in addition to/also (adverb/preposition).',
        def_hi: '"Beside" = bagal mein (preposition). "Besides" = ke alawa (adverb/preposition).',
        example: 'Come sit beside me. (next to) / Do you play any sport besides basketball? (in addition to)',
        note: '"Beside" and "Besides" are completely different — never interchange them.'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"Come and sit here _____ me.",opts:["besides","beside","besides of","next of"],ans:1,exp:"'Beside' = next to/at the side of. 'Come and sit here beside me' = sit next to me."},
      {type:"Fill in the Blank",q:"Do you play any other sports _____ basketball?",opts:["beside","besides","next to","by"],ans:1,exp:"'Besides' = in addition to. 'Do you play any sports besides basketball?' = any sports IN ADDITION TO basketball."}
    ]
  },
 
  'Rule_103_Friendly_Miserly_Only_Adjectives': {
    intro: '"Friendly, miserly, cowardly, monthly, yearly, weekly, manly, orderly" sirf adjectives hain — KABHI adverb nahi. Inhe adverb ki jagah use karna hai toh "in a friendly manner" jaise phrase use karo.',
    words: [
      {
        word: 'Friendly/Miserly/Cowardly etc.',
        preposition: 'adjectives only, not adverbs',
        def_en: 'These words ending in "-ly" are ADJECTIVES only, not adverbs. Cannot be used to modify verbs directly.',
        def_hi: 'Ye "-ly" words sirf adjectives hain, adverbs nahi. Verb ko directly modify nahi kar sakte.',
        example: 'He behaved in a friendly manner. (not "behaved friendly")',
        note: '"He behaved friendly" = WRONG. "He behaved in a friendly manner" = CORRECT. Add "in a ___ manner" to use adverbially.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"He behaved friendly. (A) No error (B)",opts:["A","B","No error","Correct"],ans:0,exp:"'Friendly' is an adjective, not an adverb. Cannot describe verb 'behaved'. Correct: 'He behaved in a friendly manner.'"},
      {type:"Sentence Correction",q:"She spoke to him cowardly.",opts:["spoke to him cowardly","spoke to him in a cowardly manner","cowardly spoke to him","spoke cowardly to him"],ans:1,exp:"'Cowardly' is an adjective only — cannot be used as an adverb. Rewrite as: 'spoke to him in a cowardly manner' (adjective modifying 'manner')."}
    ]
  },
 
  'Rule_104_Position_of_Adverbs': {
    intro: 'Adverbs teen jagah aa sakte hain: (a) Sentence ke shuru mein, (b) Helping verb aur main verb ke beech, (c) Sentence ke end mein. Adverb KABHI main verb aur uske object ke beech mein NAHI aa sakta. Exception: "too", "even", "only" kahin bhi aa sakte hain.',
    words: [
      {
        word: 'Adverb Placement',
        preposition: 'never between verb and object',
        def_en: 'Adverb positions: (a) start of sentence, (b) between auxiliary and main verb, (c) end of sentence. NEVER between main verb and its object.',
        def_hi: 'Adverb kahan aa sakta hai: sentence start, auxiliary-main verb beech, ya end. Kabhi verb aur object ke beech mein nahi.',
        example: 'He often comes to my house. (not "He comes often to my house")',
        note: '"He tells always the truth" = WRONG. "He always tells the truth" = CORRECT. Adverb before main verb.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"He comes often to my house. (A) No error (B)",opts:["A","B","No error","Correct"],ans:0,exp:"'Often' is an adverb. It cannot be placed between the main verb 'comes' and its object 'to my house'. Correct: 'He often comes to my house.'"},
      {type:"Sentence Correction",q:"He tells always the truth.",opts:["tells always the truth","always tells the truth","tells the truth always","always the truth tells"],ans:1,exp:"Adverb 'always' should not be placed between main verb and object. Correct position: before main verb. 'He always tells the truth.'"}
    ]
  },
 
  'Rule_105_Order_of_Adverbs_MPT': {
    intro: 'Jab sentence mein kai adverbs hon, toh MPT order follow karo: Manner → Place → Time. "I walked slowly (manner) down the street (place) yesterday (time)." Ye order hamesha follow karna chahiye.',
    words: [
      {
        word: 'Manner → Place → Time (MPT)',
        preposition: 'order of multiple adverbs',
        def_en: 'When multiple adverbs appear, follow MPT order: Manner first, then Place, then Time.',
        def_hi: 'Kai adverbs hone par: pehle Manner, phir Place, phir Time (MPT).',
        example: 'He ran quickly (M) to school (P) yesterday (T).',
        note: '"I walked yesterday slowly" = WRONG (T before M). "I walked slowly yesterday" = CORRECT (M then T).'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"I walked yesterday slowly. (A) No error (B)",opts:["A","B","No error","Correct"],ans:0,exp:"Correct order of adverbs is Manner → Place → Time (MPT). 'Yesterday' (time) cannot come before 'slowly' (manner). Correct: 'I walked slowly yesterday.'"},
      {type:"Sentence Correction",q:"He ran quickly to school yesterday.",opts:["ran quickly to school yesterday","ran to school yesterday quickly","ran yesterday to school quickly","quickly ran to school yesterday"],ans:0,exp:"Order: 'quickly' (Manner) → 'to school' (Place) → 'yesterday' (Time) = MPT order. 'He ran quickly to school yesterday' is already in correct MPT order!"}
    ]
  },
 
  'Rule_106_Very_vs_Much': {
    intro: '"Very": positive degree adjective ke pehle aata hai. "Much": comparative degree aur past participle ke pehle aata hai. Superlative adjectives ke saath "very" mat use karo — "much" ya "by far" use karo.',
    words: [
      {
        word: 'Very vs Much',
        preposition: 'positive vs comparative/past participle',
        def_en: '"Very" before positive degree adjectives. "Much" before comparative degree and past participles. Not "very" with superlatives.',
        def_hi: '"Very" positive degree adjective ke pehle. "Much" comparative degree aur past participle ke pehle.',
        example: 'It is very interesting. / He is much weaker than Shyam. / This is the very best. (emphasis)',
        note: '"Very weaker" = WRONG. "Much weaker" = CORRECT. "Much" = comparative; "very" = positive.'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"It is _____ interesting.",opts:["much","very","many","too"],ans:1,exp:"'Interesting' is a positive degree adjective (present participle used as adjective). 'Very' is used with positive degree: 'It is very interesting.'"},
      {type:"Fill in the Blank",q:"He is _____ weaker than Shyam.",opts:["very","too","much","quite"],ans:2,exp:"'Weaker' is comparative degree. 'Much' is used with comparative degree. 'He is much weaker than Shyam.'"},
      {type:"Error Spotting",q:"This is the very best wine (A) I have tasted. (B) No error (C)",opts:["A","B","C","No error"],ans:3,exp:"'Very' can be used to emphasize superlatives and is also used with 'first, next, last'. 'The very best' is correct for emphasis. No error."}
    ]
  },
 
  'Rule_107_Between_Followed_By_And': {
    intro: '"Between" hamesha "and" ke saath aata hai, kabhi "to" ke saath nahi. "From" + "to" sahi hai. "Between 4 pm to 5 pm" GALAT; "between 4 pm and 5 pm" SAHI; "from 4 pm to 5 pm" bhi SAHI.',
    words: [
      {
        word: 'Between...and',
        preposition: 'and (never to)',
        def_en: '"Between" is always followed by "and", NEVER by "to". "From...to" is correct; "between...to" is not.',
        def_hi: '"Between" ke baad hamesha "and" — kabhi "to" nahi. "From...to" sahi hai.',
        example: 'Between 4 pm and 5 pm (correct) / From 4 pm to 5 pm (correct) / Between 4 pm to 5 pm (WRONG)',
        note: '"Between you and me" = CORRECT. "Between you to me" = WRONG.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"He will distribute the sweets between 4 pm (A) to 5 pm. (B) No error (C)",opts:["A","B","C","No error"],ans:1,exp:"'Between' must be followed by 'and', not 'to'. Correct: 'between 4 pm AND 5 pm.' Or use 'from 4 pm to 5 pm' (from...to is correct)."},
      {type:"Fill in the Blank",q:"There is good friendship between you _____ him.",opts:["to","and","with","or"],ans:1,exp:"'Between' must always be followed by 'and'. 'There is good friendship between you and him.'"}
    ]
  },
 
  'Rule_108_Uncountable_Nouns_With_S_Different_Meaning': {
    intro: 'Kuch uncountable nouns mein "s/es" add karne par meaning badal jaati hai: Advice (salah) → Advices (information). Air (hawa) → Airs (arrogance). Wood (lakdi) → Woods (jungle). Iron (dhatu) → Irons (chains/zanjeer). Force (taaqat) → Forces (sena).',
    words: [
      {
        word: 'Meaning Changes with Plural',
        preposition: 'different meanings',
        def_en: 'Adding s/es to these nouns changes their meaning: Advices=information, Airs=arrogance, Woods=forest, Irons=chains, Forces=army.',
        def_hi: 'In nouns mein s/es add karne par meaning badal jaati hai.',
        example: 'The judge ordered that the irons (chains) be removed. / The Indian forces (army) are brave.',
        note: '"Irons" = chains/fetters (not plural of iron metal). Context determines which meaning applies.'
      }
    ],
    questions: [
      {type:"Fill in the Blank",q:"The judge ordered that the _____ of the under-trial should be removed.",opts:["iron","irons","ironies","ironing"],ans:1,exp:"'Irons' (plural of iron) means fetters/chains. 'The judge ordered that the irons of the under-trial should be removed' — meaning the chains should be removed."},
      {type:"Fill in the Blank",q:"The Indian _____ are known for their bravery.",opts:["force","forces","forceful","forcing"],ans:1,exp:"'Forces' (plural) = troops/army. 'The Indian Forces are known for their bravery.'"}
    ]
  },
 
  'Rule_109_English_Teacher_vs_Teacher_of_English': {
    intro: '"English teacher" literally "teacher from England" hota hai (wrong usage). "Mathematics teacher" literally "teacher made of mathematics" (wrong). Sahi form: "Teacher of English", "Teacher of Mathematics", "Members of his family" (not "family members").',
    words: [
      {
        word: 'Teacher of English (not English teacher)',
        preposition: 'of + subject',
        def_en: '"English teacher" = teacher from England. "Teacher of English" = teacher who teaches English. Always use "Teacher of [Subject]".',
        def_hi: '"English teacher" = England ka teacher (galat). "Teacher of English" = English padhane wala teacher (sahi).',
        example: 'He is a teacher of Mathematics. / All the members of his family were present.',
        note: '"Family members" = WRONG. "Members of his family" = CORRECT. Same logic applies.'
      }
    ],
    questions: [
      {type:"Sentence Correction",q:"I am an English teacher.",opts:["an English teacher","a teacher of English","an English-speaking teacher","a English teacher"],ans:1,exp:"'English teacher' = teacher from England (wrong meaning). Correct: 'a teacher of English' (teacher who teaches English)."},
      {type:"Error Spotting",q:"All his family members (A) were going to the temple. (B) No error (C)",opts:["A","B","C","No error"],ans:0,exp:"'Family members' implies 'members made of family' — wrong. Correct: 'All the members of his family were going to the temple.'"}
    ]
  },
 
  'Rule_110_Possessive_Adjective_One_vs_His': {
    intro: '"One\'s" sirf tab use karo jab subject "One" ho. Jab subject "Every, Each, Everyone" etc. ho, toh "his" use karo (ya "her" jab gender clear ho). "His" aur "one\'s" possessive ADJECTIVES hain (pronouns nahi).',
    words: [
      {
        word: "One's vs His",
        preposition: 'one → one\'s / everyone → his',
        def_en: '"One\'s" only when subject is "One". "His/Her" when subject is "Every/Each/Everyone" etc.',
        def_hi: '"One\'s" sirf "One" ke liye. "His" = "Every/Each/Everyone" ke liye.',
        example: "One should do one's duty. / Everyone should do his duty.",
        note: '"Everyone should do one\'s duty" = WRONG. "Everyone should do his duty" = CORRECT.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"Everyone should do one's duty. (A) No error (B)",opts:["A","B","No error","Correct"],ans:0,exp:"When subject is 'Everyone' (not 'One'), use 'his' (not 'one's'). 'One's' is used only when subject is 'One'. Correct: 'Everyone should do his duty.'"},
      {type:"Fill in the Blank",q:"One should do _____ duty.",opts:["his","one's","their","our"],ans:1,exp:"When subject is 'One', use 'one's'. 'One should do one's duty.' If subject is 'Everyone/Each', use 'his'."}
    ]
  },
 
  'Rule_111_Fewer_vs_Less': {
    intro: '"Fewer": countable nouns ke saath (number). "Less": uncountable nouns ke saath (quantity). Test: agar individual items count kar sakte ho → "fewer"; agar mass/quantity hai → "less". Money uncountable hai; notes aur coins countable hain.',
    words: [
      {
        word: 'Fewer vs Less',
        preposition: 'countable vs uncountable',
        def_en: '"Fewer" with countable nouns. "Less" with uncountable nouns/quantities.',
        def_hi: '"Fewer" countable nouns ke saath. "Less" uncountable nouns/quantities ke saath.',
        example: 'No fewer than 50 students. / No less than five litres of water.',
        note: '"Less students" = WRONG. "Fewer students" = CORRECT. "Less water" = CORRECT (water is uncountable).'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"No less than 50 students (A) completed the work. (B) No error (C)",opts:["A","B","C","No error"],ans:0,exp:"Students are countable. 'Fewer' should be used with countable nouns. Correct: 'No fewer than 50 students completed the work.'"},
      {type:"Fill in the Blank",q:"There is no _____ than five liters of water in the vessel.",opts:["fewer","less","little","few"],ans:1,exp:"'Five liters of water' is a quantity (uncountable measurement). 'Less' is used with uncountable/quantity. 'No less than five liters.'"}
    ]
  },
 
  'Rule_112_Elder_vs_Older': {
    intro: '"Elder/Eldest": family ke andar kisi ke liye use hota hai. "Older/Oldest": family ke bahar kisi ke liye. "Elder" ke baad "than" KABHI NAHI aata. "Older" ke baad "than" aa SAKTA hai.',
    words: [
      {
        word: 'Elder/Eldest vs Older/Oldest',
        preposition: 'family vs non-family',
        def_en: '"Elder/Eldest" = for family members only. "Older/Oldest" = for people outside the family. "Elder" CANNOT be followed by "than".',
        def_hi: '"Elder/Eldest" = family ke liye. "Older/Oldest" = family ke bahar. "Elder than" = GALAT.',
        example: 'He is the elder son. / My friend is older than me.',
        note: '"Elder than" = WRONG (elder never takes "than"). "Older than" = CORRECT.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"A friend of mine in my company is elder (A) than me. (B) No error (C)",opts:["A","B","C","No error"],ans:0,exp:"'Elder' is used for family members, not friends. Also 'elder' cannot be followed by 'than'. Correct: 'A friend of mine in my company is older than me.'"},
      {type:"Fill in the Blank",q:"The _____ son of King John, Henry was nine when his father died.",opts:["older","elder","eldest","oldest"],ans:1,exp:"'Elder' is used for family members. Henry is King John's son (family relationship). 'The elder son of King John' is correct."}
    ]
  },
 
  'Rule_113_Compare_Same_Things': {
    intro: 'Comparison karte waqt hamesha SAME type ki cheezein compare karo. "Delhi ka weather" ko "Mumbai" se compare mat karo — "Mumbai ke weather" se karo. Noun repeat karne se bachne ke liye "that of" ya "those of" use karo.',
    words: [
      {
        word: 'Compare Same Things',
        preposition: 'that of / those of',
        def_en: 'When comparing, always compare the same type of things. Use "that of" or "those of" to avoid repeating the noun.',
        def_hi: 'Comparison mein same type ki cheezein compare karo. Noun repeat karne se bachne ke liye "that of" ya "those of" use karo.',
        example: 'The weather of Delhi is better than that of Mumbai.',
        note: '"Better than Mumbai" = comparing weather to a city (WRONG). "Better than that of Mumbai" = comparing weather to weather (CORRECT).'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"The weather of Delhi is far better than (A) Mumbai. (B) No error (C)",opts:["A","B","C","No error"],ans:1,exp:"We compare weather with weather, not weather with a city. 'Mumbai' ≠ 'weather of Mumbai'. Correct: 'better than the weather of Mumbai' or 'better than that of Mumbai.'"},
      {type:"Sentence Correction",q:"The apples of Shimla are tastier than Ooty.",opts:["tastier than Ooty","tastier than those of Ooty","tastier than Ooty's","more tastier than Ooty"],ans:1,exp:"Compare apples with apples (not apples with a place). 'Those of Ooty' refers to apples of Ooty. 'The apples of Shimla are tastier than those of Ooty.'"}
    ]
  },
 
  'Rule_114_One_Either_Neither_Each_Plural_Noun': {
    intro: '"One of the", "either of", "neither of", "each of" ke baad hamesha PLURAL NOUN aata hai. Kabhi singular noun nahi. "One of the students" (sahi), "One of the student" (galat).',
    words: [
      {
        word: 'One of the / Either of / Neither of / Each of + Plural Noun',
        preposition: 'always plural noun after',
        def_en: '"One of the", "either of", "neither of", "each of" are always followed by PLURAL nouns.',
        def_hi: 'Ye phrases hamesha plural noun ke saath aate hain — singular noun kabhi nahi.',
        example: 'One of the students / Either of the boys / Neither of the girls / Each of the players',
        note: '"One of the student" = WRONG. "One of the students" = CORRECT. Plural noun is mandatory.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"One of the student (A) was selected to visit NASA. (B) No error (C)",opts:["A","B","C","No error"],ans:0,exp:"'One of the' must be followed by plural noun. 'Student' (singular) is wrong. Correct: 'One of the STUDENTS was selected to visit NASA.'"},
      {type:"Fill in the Blank",q:"A person can turn on either of the light _____.",opts:["bulb","bulbs","bulb's","bulbs'"],ans:1,exp:"'Either of' must be followed by plural noun. 'Either of the light bulbs' (plural) is correct."}
    ]
  },
 
  'Rule_115_But_Except_Between_Objective_Case': {
    intro: 'Jab "but, except, between" preposition ke roop mein use hon, unke baad pronoun OBJECTIVE CASE mein hona chahiye (me, him, her, us, them) — subjective case (I, he, she, we, they) nahi. "Let" (verb) ke baad bhi objective case chahiye.',
    words: [
      {
        word: 'But / Except / Between + Objective Case',
        preposition: 'objective case after prepositions',
        def_en: 'When "but, except, between" act as prepositions, use objective case pronouns (me, him, her, us, them) after them.',
        def_hi: '"But, except, between" preposition ke roop mein → objective case pronouns.',
        example: 'There is friendship between you and me. / All but him are going.',
        note: '"Between you and I" = WRONG. "Between you and me" = CORRECT. "I" is subjective; "me" is objective.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"There is friendship between you and I. (A) No error (B)",opts:["A","B","No error","Correct"],ans:0,exp:"'Between' is a preposition. After prepositions, objective case is required. 'I' (subjective) is wrong. Correct: 'There is friendship between you and me.'"},
      {type:"Sentence Correction",q:"All but he are going to the party.",opts:["All but he are","All but him are","All but him is","All but he is"],ans:1,exp:"'But' acts as preposition here. After preposition, objective case 'him' is needed. 'All but him are going to the party.'"}
    ]
  },
 
  'Rule_116_Pseudo_Subject_Subjective_Case': {
    intro: 'Jab pseudo subject ("It is...") use ho, uske baad pronoun SUBJECTIVE CASE mein hona chahiye (I, he, she, we, they) — objective case nahi. "It is I who am guilty" (sahi, "me" nahi).',
    words: [
      {
        word: 'Pseudo Subject — Subjective Case',
        preposition: 'subjective case after It is',
        def_en: 'After a pseudo subject "It is...", use SUBJECTIVE case pronouns (I, he, she, we, they), not objective case.',
        def_hi: '"It is" ke baad subjective case (I, he, she, we, they) — objective case nahi.',
        example: 'It is I who am guilty. / It is he who should be blamed. / It is we who have won.',
        note: '"It is him who..." = WRONG. "It is he who..." = CORRECT. Subjective case after pseudo subject.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"It is him (A) who should be blamed. (B) No error (C)",opts:["A","B","C","No error"],ans:0,exp:"After pseudo subject 'It is', use subjective case pronoun. 'Him' (objective) is wrong. Correct: 'It is HE who should be blamed.'"},
      {type:"Fill in the Blank",q:"It is _____ who have defeated the champion.",opts:["us","we","our","ours"],ans:1,exp:"After pseudo subject 'It is', use subjective case. 'We' (subjective) is correct, not 'us' (objective). 'It is we who have defeated the champion.'"}
    ]
  },
 
  'Rule_117_Such_As_Connector': {
    intro: '"Such" determiner ke roop mein → connector "as" hota hai (kabhi "that" nahi). "Else" ke baad "but" aata hai. "Other" aur "otherwise" ke baad "than" aata hai.',
    words: [
      {
        word: 'Such...as / Else...but / Other...than',
        preposition: 'fixed connector pairs',
        def_en: 'When "such" is a determiner, use "as" as its connector (not "that"). "Else" → "but". "Other/Otherwise" → "than".',
        def_hi: '"Such" determiner → "as". "Else" → "but". "Other/Otherwise" → "than".',
        example: 'He is such a person as you mentioned. / Nothing else but this will do. / Other than this, nothing is correct.',
        note: '"Such a person that you mentioned" = WRONG. "Such a person as you mentioned" = CORRECT.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"He is such a person (A) that you mentioned. (B) No error (C)",opts:["A","B","C","No error"],ans:1,exp:"When 'such' is used as a determiner, 'as' (not 'that') is used as its connector. Correct: 'He is such a person AS you mentioned.'"},
      {type:"Fill in the Blank",q:"Such a book _____ this is referred by a teacher.",opts:["that","as","which","who"],ans:1,exp:"'Such' as determiner takes 'as' as connector. 'Such a book as this is referred by a teacher.'"}
    ]
  },
 
  'Rule_118_Apostrophe_Plural_Nouns': {
    intro: 'Plural noun jo "s" se end hota hai, uski possession dikhane ke liye apostrophe "s" ke BAAD aata hai — "\'s" uske baad nahi (hissing sound avoid karne ke liye). "Girls\' school" (sahi), "Girls\'s school" (galat). Exception: "else\'s" sahi hai.',
    words: [
      {
        word: "Apostrophe with Plural Nouns",
        preposition: 'apostrophe after s',
        def_en: 'For plural nouns ending in "s", the apostrophe goes AFTER the "s" (not "\'s" added). This avoids the hissing sound.',
        def_hi: '"s" se end hone wale plural nouns mein apostrophe "s" ke baad lagao.',
        example: "Girls' school / Boys' hostel / Teachers' meeting",
        note: '"Girls\'s school" = WRONG (hissing sound). "Girls\' school" = CORRECT (apostrophe after s).'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"Government girls's school was inaugurated. (A) No error (B)",opts:["A","B","No error","Correct"],ans:0,exp:"'Girls's' creates a hissing sound — incorrect. For plural nouns ending in 's', just add apostrophe after 's'. Correct: 'Government girls' school.'"},
      {type:"Fill in the Blank",q:"For _____ sake, please be quiet.",opts:["peace's","peace","peaces","peace's"],ans:1,exp:"'Peace' is a noun that can take apostrophe (idiom expression). 'For peace' sake' — apostrophe after 'peace' without additional 's' since peace already ends the word. 'For peace's sake' is also accepted."}
    ]
  },
 
  'Rule_119_No_Apostrophe_With_Pronouns': {
    intro: 'Apostrophe (\'s) sirf nouns ke saath use hota hai, KABHI pronouns ke saath nahi. Pronouns ke already possessive forms hain: yours, ours, its, theirs, his, hers, whose. Inhe apostrophe ki zarurat nahi.',
    words: [
      {
        word: 'Possessive Pronouns — No Apostrophe',
        preposition: 'no apostrophe with pronouns',
        def_en: 'Apostrophe \'s is ONLY used with nouns, NEVER with pronouns. Pronouns have their own possessive forms: yours, ours, its, theirs, hers.',
        def_hi: 'Apostrophe \'s sirf nouns ke saath — pronouns ke saath kabhi nahi. Pronouns ke possessive forms: yours, ours, its, theirs, hers.',
        example: 'The ring is hers. / The book is yours. / The decision is theirs.',
        note: '"Her\'s", "your\'s", "their\'s", "it\'s (possessive)" = ALL WRONG. "Hers", "yours", "theirs", "its" = CORRECT.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"Your's friendly. (A) No error (B)",opts:["A","B","No error","Correct"],ans:0,exp:"Apostrophe 's is never used with pronouns. 'Your's' is incorrect. The possessive pronoun is 'Yours' (no apostrophe). Correct: 'Yours friendly.' (or better: 'Your friendly response...')"},
      {type:"Sentence Correction",q:"The ring is her's.",opts:["her's","hers","its","theirs"],ans:1,exp:"Possessive pronouns (hers, yours, ours, theirs) never take apostrophe. 'Hers' (not 'her's'). 'The ring is hers.'"}
    ]
  },
 
  'Rule_120_Predicative_Adjectives': {
    intro: 'Ye words kisi noun ke pehle KABHI nahi aate — ye sirf linking verbs ke baad (predicatively) use hote hain: afraid, asleep, due, ready, unable, alike, aware, glad, sorry, well, alone, ill, sure, worth. "An afraid girl" = GALAT. "She is afraid" = SAHI.',
    words: [
      {
        word: 'Predicative-Only Adjectives',
        preposition: 'after linking verb only',
        def_en: 'These adjectives CANNOT precede a noun: afraid, asleep, due, ready, unable, alike, aware, glad, sorry, well, alone, ill, sure, worth. Use only predicatively (after linking verbs).',
        def_hi: 'Ye adjectives kisi noun ke pehle nahi aa sakte. Sirf linking verb ke baad use karo.',
        example: 'She is afraid. (correct) / He is alone. (correct) / An afraid girl. (WRONG)',
        note: '"An afraid girl" = WRONG. "She is afraid" OR "a girl who is afraid" = CORRECT.'
      }
    ],
    questions: [
      {type:"Error Spotting",q:"We were unable man (A) to contact him. (B) No error (C)",opts:["A","B","C","No error"],ans:0,exp:"'Unable' is a predicative adjective — it cannot be placed before a noun ('man'). Correct: 'We were unable to contact him at the time.'"},
      {type:"Fill in the Blank",q:"He likes being _____ in the house.",opts:["an alone person","alone","loneliness","the lonely"],ans:1,exp:"'Alone' is a predicative adjective — used after a verb, not before a noun. 'He likes being alone' is correct. 'An alone person' is wrong."},
      {type:"Sentence Correction",q:"She is an afraid girl.",opts:["an afraid girl","afraid","a girl who is afraid","Either B or C"],ans:3,exp:"'Afraid' cannot be placed before a noun. 'An afraid girl' is wrong. Use predicatively: 'She is afraid' OR attributively rephrase: 'a girl who is afraid.'"}
    ]
  }
 
};

window.HEFT = {
  vorname: "Aseem",
  niveau: "A2",
  modus: "ruhig",
  hilfe: "en",
  stunden: [
    {
      id: "2026-09-03",
      titel: "Wortschatz: Aussehen, Größe, Alltag",
      vokabeln: [
        { de: "beide", en: "both", fr: "les deux", beispiel: "Beide Brüder spielen Fußball." },
        { de: "die Geschwindigkeit", en: "speed", fr: "la vitesse", beispiel: "Die Geschwindigkeit des Autos ist hoch." },
        { de: "die Frisur", en: "hairstyle, haircut", fr: "la coiffure", beispiel: "Deine neue Frisur gefällt mir." },
        { de: "gleich", en: "the same", fr: "pareil, le même", beispiel: "Wir haben die gleiche Jacke." },
        { de: "wirklich", en: "really", fr: "vraiment", beispiel: "Das Essen ist wirklich gut." },
        { de: "wahrscheinlich", en: "probably", fr: "probablement", beispiel: "Morgen regnet es wahrscheinlich." },
        { de: "langweilig", en: "boring", fr: "ennuyeux", beispiel: "Der Film war langweilig." },
        { de: "die Höhe", en: "height (of buildings, trees)", fr: "la hauteur", beispiel: "Der Turm hat eine Höhe von fünfzig Metern." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-10",
      titel: "Wortschatz: Wahl, Entscheidung, Alltag",
      vokabeln: [
        { de: "üben", en: "to practice", fr: "s'exercer", beispiel: "Ich muss Deutsch üben." },
        { de: "schüchtern", en: "shy", fr: "timide", beispiel: "Bist du schüchtern?" },
        { de: "der Unfall", en: "the accident", fr: "l'accident", beispiel: "Es gab einen Unfall auf der Straße." },
        { de: "reich", en: "rich", fr: "riche", beispiel: "Er ist sehr reich." },
        { de: "die Wahl", en: "the election", fr: "l'élection", beispiel: "Die Wahl ist im Herbst." },
        { de: "gewinnen", en: "to win", fr: "gagner", beispiel: "Wer hat das Spiel gewonnen?" },
        { de: "bevorzugen", en: "to prefer", fr: "préférer", beispiel: "Ich bevorzuge Tee." },
        { de: "die Entscheidung", en: "the decision", fr: "la décision", beispiel: "Das ist eine schwierige Entscheidung." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-24",
      titel: "um ... zu, Wortschatz: Gefühle, Familie, Studium",
      vokabeln: [
        { de: "schaffen", en: "to manage, to make it", fr: "réussir", beispiel: "Ich habe den Test geschafft." },
        { de: "schlau", en: "smart", fr: "malin", beispiel: "Das ist eine schlaue Idee." },
        { de: "schwierig", en: "difficult", fr: "difficile", beispiel: "Die Prüfung ist schwierig." },
        { de: "halb", en: "half", fr: "demi, à moitié", beispiel: "Ich habe eine halbe Stunde Zeit." },
        { de: "ängstlich", en: "fearful, anxious", fr: "craintif, anxieux", beispiel: "Der Hund ist ängstlich." },
        { de: "die Begrüßung", en: "the greeting", fr: "le salut", beispiel: "Die Begrüßung war sehr freundlich." },
        { de: "die Tochter", en: "the daughter", fr: "la fille", beispiel: "Seine Tochter spielt Klavier." },
        { de: "die Stadtplanung", en: "urban planning", fr: "l'urbanisme", beispiel: "Sie interessiert sich für Stadtplanung." },
        { de: "die Stunde", en: "the hour", fr: "l'heure (durée)", beispiel: "Die Fahrt dauert zwei Stunden." },
        { de: "glücklich", en: "happy", fr: "heureux", beispiel: "Sie ist heute sehr glücklich." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Ich lerne viel, ___ gut Deutsch zu sprechen.",
          optionen: ["um", "dass", "weil"], richtig: 0,
          regel: "um ... zu + Infinitiv zeigt den Zweck (to ...). Das Verb im Infinitiv steht am Ende.",
          uebers: { en: "Choose the correct word. 'um ... zu' means 'in order to ...'." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich trainiere viel, um fit ___ bleiben.",
          antworten: ["zu"],
          regel: "um ... zu + Infinitiv: um fit zu bleiben.",
          uebers: { en: "Fill in the missing word." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Ich", "gehe", "in", "die", "Stadt,", "um", "Brot", "zu", "kaufen"],
          loesung: "Ich gehe in die Stadt, um Brot zu kaufen",
          regel: "Vor „um“ steht ein Komma. Am Ende des Satzes stehen „zu“ und der Infinitiv.",
          uebers: { en: "Put the words in the right order. Before 'um' there is a comma." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Das ist meine Tochter. Das sind meine ___.",
          optionen: ["Tochter", "Töchter", "Tochters"], richtig: 1,
          regel: "Plural von „die Tochter“: die Töchter (mit Umlaut ö).",
          uebers: { en: "Choose the plural form." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["glücklich", "traurig"], ["leicht", "schwierig"], ["richtig", "falsch"], ["gebildet", "ungebildet"]],
          regel: "Das sind Gegenteile. Mit „un-“ bildet man oft das Gegenteil: gebildet → ungebildet.",
          uebers: { en: "Match each word with its opposite." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Der Test ist nicht schwierig, er ist ___.",
          optionen: ["leicht", "traurig", "halb"], richtig: 0,
          regel: "Das Gegenteil von „schwierig“ ist „leicht“.",
          uebers: { en: "Choose the word that fits." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Was ___ du zur Begrüßung?",
          antworten: ["sagst"],
          regel: "sagen: ich sage, du sagst, er/sie sagt.",
          uebers: { en: "Fill in the correct form of 'sagen'." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich muss Deutsch ___.",
          antworten: ["üben"],
          regel: "Nach „müssen“ steht der Infinitiv am Ende: Ich muss Deutsch üben.",
          uebers: { en: "Fill in the verb (to practice)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Hast du schon ___?",
          optionen: ["gewählt", "wähle", "wählen"], richtig: 0,
          regel: "Perfekt: haben + Partizip II. wählen → gewählt: Hast du schon gewählt?",
          uebers: { en: "Choose the correct form (perfect tense)." }
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["Ich", "glaube,", "dass", "die", "Übung", "leicht", "ist"],
          loesung: "Ich glaube, dass die Übung leicht ist",
          regel: "Nach „dass“ steht das Verb am Ende des Satzes.",
          uebers: { en: "Put the words in the right order. After 'dass' the verb goes to the end." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Warum lernst du Deutsch? Sprich 4 Sätze mit „um ... zu“. Nimm dich auf und höre dich an.",
          hinweis: "Zum Beispiel: Ich lerne Deutsch, um ... zu ... / Ich übe jeden Tag, um ... zu ...",
          uebers: { en: "Why do you learn German? Say 4 sentences with 'um ... zu'. Record yourself and listen." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 4 Sätze: Was machst du, um fit zu bleiben oder um gut zu lernen? Benutze „um ... zu“.",
          checkliste: [
            "Ich habe in jedem Satz „um ... zu“ benutzt.",
            "Vor „um“ steht ein Komma.",
            "Am Ende steht „zu“ + Infinitiv.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Ich trainiere dreimal pro Woche, um fit zu bleiben. Ich lerne jeden Tag Vokabeln, um besser Deutsch zu sprechen. Ich gehe früh schlafen, um am Morgen fit zu sein. Ich lese viel, um neue Wörter zu lernen.",
          uebers: { en: "Write 4 sentences: What do you do to stay fit or to learn well? Use 'um ... zu'." }
        }
      ]
    },
    {
      id: "2026-10-07",
      titel: "Perfekt mit haben oder sein, weil, Wohnung",
      vokabeln: [
        { de: "nur", en: "only", fr: "seulement", beispiel: "Heute essen wir nur." },
        { de: "finden (hat gefunden)", en: "to find", fr: "trouver", beispiel: "Ich habe keinen Döner gefunden." },
        { de: "das Krankenhaus", en: "the hospital", fr: "l'hôpital", beispiel: "Wir sind ins Krankenhaus gefahren." },
        { de: "die Krankenversicherung", en: "health insurance", fr: "l'assurance maladie", beispiel: "Die Krankenversicherung bezahlt den Arzt." },
        { de: "schwierig", en: "difficult", fr: "difficile", beispiel: "Deutsch ist ein bisschen schwierig." },
        { de: "leicht", en: "easy", fr: "facile", beispiel: "Englisch ist leicht." },
        { de: "aufmerksam", en: "attentive", fr: "attentif", beispiel: "Ich bin im Deutschkurs aufmerksam." },
        { de: "die Miete", en: "the rent", fr: "le loyer", beispiel: "Die Miete ist hoch." },
        { de: "der Zugang", en: "access", fr: "l'accès", beispiel: "Ich habe keinen Zugang zur Sauna." },
        { de: "Das tut weh.", en: "That hurts.", fr: "Ça fait mal.", beispiel: "Mein Bein tut weh." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Ich ___ keinen Döner gefunden.",
          optionen: ["habe", "bin"], richtig: 0,
          regel: "Perfekt meistens mit haben. Mit sein nur bei Bewegung (gehen, fahren, fliegen).",
          uebers: { en: "Choose the auxiliary verb (perfect tense)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Wir ___ ins Krankenhaus gefahren.",
          optionen: ["sind", "haben"], richtig: 0,
          regel: "fahren = Bewegung → Perfekt mit sein.",
          uebers: { en: "Choose the auxiliary verb (movement → sein)." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "finden → ich habe ___",
          antworten: ["gefunden"],
          regel: "finden – fand – hat gefunden.",
          uebers: { en: "Write the past participle of 'finden'." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich mag Englisch, weil es ___",
          optionen: ["leicht ist.", "ist leicht."], richtig: 0,
          regel: "Nach weil steht das Verb am Ende.",
          uebers: { en: "After 'weil' the verb goes to the end." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Das Gegenteil von schwierig ist ___.",
          optionen: ["leicht", "aufmerksam", "krank"], richtig: 0,
          regel: "schwierig (difficult) ↔ leicht (easy).",
          uebers: { en: "What is the opposite of 'schwierig'?" }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Es ___ Wohnungen ohne Pool.",
          antworten: ["gibt"],
          regel: "es gibt = there is / there are.",
          uebers: { en: "Fill in: There are flats without a pool." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Ich", "habe", "keinen", "Zugang", "zur", "Sauna"],
          loesung: "Ich habe keinen Zugang zur Sauna",
          regel: "der Zugang → keinen Zugang (Akkusativ). zur = zu der.",
          uebers: { en: "Put the words in the right order." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["die Miete", "the rent"], ["das Krankenhaus", "the hospital"], ["die Krankenversicherung", "health insurance"], ["der Zugang", "access"]],
          regel: "Neue Wörter der Stunde.",
          uebers: { en: "Match the words." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Beschreibe deine Wohnung: Wie groß ist sie? Was gibt es im Haus? Sprich 4 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "Meine Wohnung hat ... Quadratmeter. Es gibt ... Ich habe (keinen) Zugang zu ...",
          uebers: { en: "Describe your flat in 4 sentences. Record yourself." }
        }
      ]
    },
    {
      id: "2026-10-16",
      titel: "um ... zu, Wege beschreiben, Termine",
      vokabeln: [
        { de: "um ... zu", en: "in order to", fr: "pour", beispiel: "Ich lerne Deutsch, um in Deutschland zu arbeiten." },
        { de: "möglich", en: "possible", fr: "possible", beispiel: "Es ist möglich, Deutsch zu lernen." },
        { de: "die Möglichkeit", en: "the opportunity, possibility", fr: "la possibilité", beispiel: "Ich suche eine Arbeitsmöglichkeit." },
        { de: "gleich", en: "the same", fr: "pareil", beispiel: "Unsere Meinungen sind gleich." },
        { de: "ziemlich", en: "pretty, quite", fr: "assez", beispiel: "Das ist ziemlich schwierig." },
        { de: "die Hose", en: "the trousers", fr: "le pantalon", beispiel: "Meine Hose ist von Nike." },
        { de: "geradeaus", en: "straight ahead", fr: "tout droit", beispiel: "Gehen Sie geradeaus und dann rechts!" },
        { de: "der Termin", en: "the appointment", fr: "le rendez-vous", beispiel: "Ich habe morgen einen Termin beim Arzt." },
        { de: "der Aufzug", en: "the lift, the elevator", fr: "l'ascenseur", beispiel: "Wir fahren mit dem Aufzug." },
        { de: "versprechen", en: "to promise", fr: "promettre", beispiel: "Ich verspreche es dir." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Ich lerne Deutsch, ___ in Deutschland zu arbeiten.",
          optionen: ["um", "für", "weil"], richtig: 0,
          regel: "um ... zu + Infinitiv = in order to.",
          uebers: { en: "I learn German in order to work in Germany." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Ich", "lerne", "Medizin,", "um", "Menschen", "zu", "helfen"],
          loesung: "Ich lerne Medizin, um Menschen zu helfen",
          regel: "um ... zu: zu + Infinitiv steht am Ende.",
          uebers: { en: "Put the words in order (um ... zu)." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich gehe zum Arzt, ___ gesund zu werden.",
          antworten: ["um"],
          regel: "um ... zu = in order to.",
          uebers: { en: "Fill in the gap: I go to the doctor in order to get well." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Gehen Sie ___ und dann rechts!",
          optionen: ["geradeaus", "hier", "dort"], richtig: 0,
          regel: "geradeaus = straight ahead.",
          uebers: { en: "Go straight ahead and then right!" }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Dein Freund ist krank. Was sagst du?",
          optionen: ["Das tut mir leid.", "Entschuldigung!", "Versprochen!"], richtig: 0,
          regel: "Das tut mir leid = I'm sorry (for you). Entschuldigung = Excuse me / Sorry (my fault).",
          uebers: { en: "Your friend is ill. What do you say?" }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Welcher Satz ist richtig?",
          optionen: ["Dann fand sie das richtige Zimmer.", "Dann sie fand das richtige Zimmer.", "Dann fand das richtige Zimmer sie."], richtig: 0,
          regel: "Das Verb steht auf Position 2: Dann (1) fand (2) sie ...",
          uebers: { en: "Which sentence is correct?" }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["der Zug", "the train"], ["der Aufzug", "the lift"], ["der Termin", "the appointment"], ["die Hose", "the trousers"]],
          regel: "der Zug ≠ der Aufzug.",
          uebers: { en: "Match the words." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich habe morgen einen ___ beim Arzt.",
          antworten: ["Termin"],
          regel: "der Termin = appointment.",
          uebers: { en: "Fill in: I have an appointment at the doctor's tomorrow." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich lerne Deutsch, um in Deutschland zu ___. (arbeiten)",
          antworten: ["arbeiten"],
          regel: "Wiederholung (24.09.): um … zu + Infinitiv: Der Infinitiv steht am Ende.",
          uebers: { en: "Fill in the infinitive." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["schwierig", "leicht"], ["glücklich", "traurig"], ["ängstlich", "mutig"], ["reich", "arm"]],
          regel: "Wiederholung (10.09., 24.09.): Gegenteile lernt man gut zusammen.",
          uebers: { en: "Match the opposites." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Gestern ___ ich mit dem Zug nach Berlin gefahren.",
          optionen: ["bin", "habe", "war"],
          richtig: 0,
          regel: "Wiederholung (07.10.): fahren = Bewegung → Perfekt mit sein.",
          uebers: { en: "Choose: haben or sein?" }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich habe meinen Schlüssel ___.",
          optionen: ["gefunden", "gefindet", "findet"],
          richtig: 0,
          regel: "Wiederholung (07.10.): finden – fand – hat gefunden.",
          uebers: { en: "Choose the correct past participle." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Welcher Satz ist richtig?",
          optionen: ["Ich bleibe zu Hause, weil ich krank bin.", "Ich bleibe zu Hause, weil ich bin krank.", "Ich bleibe zu Hause, weil bin ich krank."],
          richtig: 0,
          regel: "Wiederholung (07.10.): Nach weil steht das Verb am Ende.",
          uebers: { en: "Which sentence is correct?" }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Warum lernst du Deutsch? Sprich 3 Sätze mit um ... zu. Nimm dich auf und höre dich an.",
          hinweis: "Ich lerne Deutsch, um ... zu ...",
          uebers: { en: "Why do you learn German? Say 3 sentences with 'um ... zu'." }
        }
      ]
    },
    {
      id: "2026-11-05",
      titel: "um … zu, noch ein, Termine und Stockwerke",
      vokabeln: [
        { de: "hören", en: "to hear, to listen", fr: "entendre, écouter", beispiel: "Ich höre gern Musik." },
        { de: "die Hörübung", en: "the listening exercise", fr: "l'exercice d'écoute", beispiel: "Ich hatte Zeit für die Hörübung." },
        { de: "noch ein / noch eine", en: "one more, another", fr: "encore un / encore une", beispiel: "Willst du noch einen Döner?" },
        { de: "dort drüben", en: "over there", fr: "là-bas", beispiel: "Der Bahnhof ist dort drüben." },
        { de: "der Arzttermin", en: "the doctor's appointment", fr: "le rendez-vous chez le médecin", beispiel: "Ich habe morgen einen Arzttermin." },
        { de: "der Friseurtermin", en: "the hairdresser's appointment", fr: "le rendez-vous chez le coiffeur", beispiel: "Vorgestern hatte ich einen Friseurtermin." },
        { de: "der Stock (das Stockwerk)", en: "the floor, the storey", fr: "l'étage", beispiel: "Ich wohne im zwölften Stock." },
        { de: "die Etage", en: "the floor, the storey", fr: "l'étage", beispiel: "Ich wohne in der dritten Etage." },
        { de: "heiraten", en: "to get married", fr: "se marier", beispiel: "Meine Mutter hat geheiratet." },
        { de: "das Alter", en: "the age", fr: "l'âge", beispiel: "Wir zwei haben das gleiche Alter." }
      ],
      aufgaben: [
        {
          typ: "satz", stufe: 2,
          woerter: ["Ich", "spiele", "Fußball,", "um", "fit", "zu", "bleiben"],
          loesung: "Ich spiele Fußball, um fit zu bleiben",
          regel: "um … zu: zu + Infinitiv steht am Ende.",
          uebers: { en: "Put the words in order: I play football in order to stay fit." }
        },
        {
          typ: "luecke", stufe: 3,
          text: "Ich nehme das Auto, um meinen Freund ___. (abholen)",
          antworten: ["abzuholen"],
          regel: "Trennbare Verben: zu steht in der Mitte: abholen → abzuholen.",
          uebers: { en: "Fill in: I take the car to pick up my friend." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Willst du noch ___ Döner?",
          optionen: ["einen", "ein", "eine"], richtig: 0,
          regel: "der Döner → Akkusativ: einen Döner. noch einen = one more.",
          uebers: { en: "Do you want one more kebab?" }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Willst du noch einen Döner? – Nein, danke. Ich will ___ Döner mehr.",
          optionen: ["keinen", "nicht", "kein"], richtig: 0,
          regel: "kein + Nomen … mehr = no more. der Döner → keinen (Akkusativ).",
          uebers: { en: "No, thanks. I don't want any more kebab." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Welcher Satz ist richtig?",
          optionen: ["Vorgestern hatte ich einen Friseurtermin.", "Vorgestern, ich hatte einen Friseurtermin.", "Vorgestern ich hatte einen Friseurtermin."], richtig: 0,
          regel: "Das Verb steht auf Position 2: Vorgestern (1) hatte (2) ich …",
          uebers: { en: "Which sentence is correct?" }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Vorgestern ___ ich zu meinem Friseurtermin gegangen.",
          antworten: ["bin"],
          regel: "gehen = Bewegung → Perfekt mit sein: ich bin gegangen.",
          uebers: { en: "Fill in: haben or sein?" }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["der Arzttermin", "the doctor's appointment"], ["der Friseurtermin", "the hairdresser's appointment"], ["die Hörübung", "the listening exercise"], ["der Aufzug", "the lift"]],
          regel: "Zusammengesetzte Wörter: der Arzt + der Termin = der Arzttermin. Der Artikel kommt vom letzten Wort.",
          uebers: { en: "Match the words." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich wohne ___ dritten Stock.",
          optionen: ["im", "in", "am"], richtig: 0,
          regel: "der Stock → im (= in dem) dritten Stock.",
          uebers: { en: "I live on the third floor." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich wohne in ___ dritten Etage.",
          antworten: ["der"],
          regel: "die Etage → in der dritten Etage (Dativ).",
          uebers: { en: "Fill in the article: I live on the third floor." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Der Bahnhof ist nicht hier, er ist dort ___. (over there)",
          antworten: ["drüben"],
          regel: "dort drüben = over there. Umgangssprachlich auch: da drüben.",
          uebers: { en: "Fill in: The station is not here, it is over there." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Meine Schwester hat letztes Jahr ___.",
          optionen: ["geheiratet", "heiratet", "geheiraten"], richtig: 0,
          regel: "heiraten → hat geheiratet. die Heirat = the marriage.",
          uebers: { en: "Choose the past participle: My sister got married last year." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Wir fahren mit dem ___ in den fünften Stock.",
          optionen: ["Aufzug", "Zug", "Termin"], richtig: 0,
          regel: "Wiederholung (16.10.): der Aufzug = the lift, der Zug = the train.",
          uebers: { en: "We take the lift to the fifth floor." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ist es ___, im Ausland zu arbeiten? (possible)",
          antworten: ["möglich"],
          regel: "Wiederholung (16.10.): möglich = possible, die Möglichkeit = the possibility.",
          uebers: { en: "Fill in: Is it possible to work abroad?" }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Gestern ___ ich viel Musik gehört.",
          optionen: ["habe", "bin", "war"], richtig: 0,
          regel: "Wiederholung (07.10.): hören = keine Bewegung → Perfekt mit haben.",
          uebers: { en: "Choose: haben or sein?" }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich lerne heute nicht, weil ich sehr müde ___. (sein)",
          antworten: ["bin"],
          regel: "Wiederholung (07.10.): Nach weil steht das Verb am Ende.",
          uebers: { en: "Fill in the verb at the end: because I am very tired." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Beschreibe den Weg von deiner Wohnung zum Supermarkt. Sprich 4 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "Ich wohne im … Stock. / Ich fahre mit dem Aufzug nach unten. / Dann gehe ich geradeaus … / Der Supermarkt ist dort drüben.",
          uebers: { en: "Describe the way from your flat to the supermarket. Say 4 sentences. Record yourself and listen." }
        }
      ]
    },
    {
      id: "2026-11-12",
      titel: "hoffen, noch nicht und bald, Kleidung und Geschäft",
      vokabeln: [
        { de: "hoffen", en: "to hope", fr: "espérer", beispiel: "Ich hoffe, dass du gesund bleibst." },
        { de: "die Hoffnung", en: "the hope", fr: "l'espoir", beispiel: "Ich habe Hoffnung." },
        { de: "hoffentlich", en: "hopefully", fr: "j'espère que, espérons que", beispiel: "Hoffentlich regnet es morgen nicht." },
        { de: "die Kleidung", en: "the clothes", fr: "les vêtements", beispiel: "Die Kleidung in diesem Geschäft ist billig." },
        { de: "das Geschäft", en: "the shop", fr: "le magasin", beispiel: "Das Geschäft ist noch nicht offen." },
        { de: "offen", en: "open", fr: "ouvert", beispiel: "Der Supermarkt ist bis 20 Uhr offen." },
        { de: "bald", en: "soon", fr: "bientôt", beispiel: "Du bist bald bei Niveau B1." },
        { de: "erstens / zweitens", en: "firstly / secondly", fr: "premièrement / deuxièmement", beispiel: "Erstens habe ich keine Zeit, zweitens kein Geld." },
        { de: "süß", en: "cute; sweet", fr: "mignon; sucré", beispiel: "Die Katze ist süß." }
      ],
      aufgaben: [
        {
          typ: "zuordnen", stufe: 1,
          paare: [["hoffen", "to hope"], ["die Hoffnung", "the hope"], ["hoffentlich", "hopefully"], ["offen", "open"]],
          regel: "Eine Wortfamilie: hoffen (Verb), die Hoffnung (Nomen), hoffentlich (Adverb).",
          uebers: { en: "Match the German words with the English ones." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich hoffe, dass du gesund ___. (bleiben)",
          antworten: ["bleibst"],
          regel: "Nach dass steht das Verb am Ende: …, dass du gesund bleibst.",
          uebers: { en: "Fill in the correct form of “bleiben” (to stay)." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Ich", "hoffe,", "dass", "das", "Wetter", "morgen", "schön", "ist"],
          loesung: "Ich hoffe, dass das Wetter morgen schön ist",
          regel: "Ich hoffe, dass … + Verb am Ende.",
          uebers: { en: "Put the words in the right order." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "___ regnet es morgen nicht.",
          optionen: ["Hoffentlich", "Hoffnung", "Hoffe"], richtig: 0,
          regel: "hoffentlich = hopefully. Danach kommt das Verb (Position 2): Hoffentlich regnet es …",
          uebers: { en: "Choose the right word (“hopefully”)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Das Geschäft ist noch nicht ___. Es öffnet um 9 Uhr.",
          optionen: ["offen", "süß", "bald"], richtig: 0,
          regel: "offen = open, das Gegenteil ist geschlossen (closed).",
          uebers: { en: "Choose the right word." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Bist du schon bei Niveau B1? – Nein, ___. Aber bald!",
          optionen: ["noch nicht", "nicht mehr", "schon"], richtig: 0,
          regel: "noch nicht = not yet. nicht mehr = not anymore.",
          uebers: { en: "Choose: “not yet”, “not anymore” or “already”." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Die ___ in diesem Geschäft ist sehr billig.",
          optionen: ["Kleidung", "Kleidungen", "Kleids"], richtig: 0,
          regel: "die Kleidung = clothes. Auf Deutsch ist das Wort Singular: Die Kleidung ist …",
          uebers: { en: "Choose the right word (“clothes”)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Das ist das Fahrrad ___ Schwester.",
          optionen: ["von meiner", "von meine", "von mein"], richtig: 0,
          regel: "von + Dativ: von meiner Schwester. Formeller mit Genitiv: das Fahrrad meiner Schwester.",
          uebers: { en: "Choose the right form (“my sister's bike”)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "___ habe ich keine Zeit. Zweitens habe ich kein Geld.",
          optionen: ["Erstens", "Erste", "Einmal"], richtig: 0,
          regel: "erstens, zweitens, drittens = firstly, secondly, thirdly. Danach kommt das Verb.",
          uebers: { en: "Choose the right word (“firstly”)." }
        },
        {
          typ: "mc", stufe: 3,
          frage: "Ich war sehr müde, ___ ich nach Hause gekommen bin.",
          optionen: ["als", "wenn", "wann"], richtig: 0,
          regel: "als = when (einmal in der Vergangenheit). wenn = when/if (Gegenwart, Zukunft, immer wieder).",
          uebers: { en: "Choose the right word for “when” (one time in the past)." }
        },
        {
          typ: "mc", stufe: 3,
          frage: "Ich weiß nicht, ___ das Geschäft heute offen ist.",
          optionen: ["ob", "dass", "wann"], richtig: 0,
          regel: "ob = whether/if. Ich weiß nicht, ob … (eine Ja/Nein-Frage). Danach Verb am Ende.",
          uebers: { en: "Choose the right word (“whether”)." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Willst du noch ___ Kaffee? (one more)",
          antworten: ["einen"],
          regel: "Wiederholung (05.11.): der Kaffee → Akkusativ: noch einen Kaffee.",
          uebers: { en: "Fill in: “one more coffee”." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich habe ___ Zeit mehr.",
          optionen: ["keine", "nicht", "kein"], richtig: 0,
          regel: "Wiederholung (05.11.): kein + Nomen … mehr = no more. die Zeit → keine Zeit mehr.",
          uebers: { en: "Choose the right word (“no more time”)." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich wohne ___ vierten Stock.",
          antworten: ["im"],
          regel: "Wiederholung (05.11.): der Stock → im (= in dem) vierten Stock.",
          uebers: { en: "Fill in the missing word (“on the fourth floor”)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Mein Zahn tut weh. Ich habe morgen einen ___.",
          optionen: ["Arzttermin", "Friseurtermin", "Aufzug"], richtig: 0,
          regel: "Wiederholung (05.11.): der Arzttermin = the doctor's appointment.",
          uebers: { en: "Choose the right word." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich lerne Deutsch, ___ in Österreich zu arbeiten.",
          antworten: ["um"],
          regel: "Wiederholung (16.10.): um … zu + Infinitiv = in order to.",
          uebers: { en: "Fill in the missing word (“in order to”)." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Was hoffst du für das nächste Jahr? Sprich 4 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "Ich hoffe, dass ich bald B1 habe. / Hoffentlich … / Erstens …, zweitens …",
          uebers: { en: "What do you hope for next year? Say 4 sentences. Record yourself and listen." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Wo kaufst du gern Kleidung? Schreibe 4 Sätze.",
          checkliste: [
            "Ich habe das Wort Geschäft benutzt.",
            "Ich habe einen Satz mit hoffentlich oder ich hoffe, dass … geschrieben.",
            "Ich habe noch nicht oder bald benutzt.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Ich kaufe meine Kleidung meistens online. Erstens ist es billiger, zweitens habe ich wenig Zeit. In meiner Straße gibt es ein neues Geschäft, aber es ist noch nicht offen. Hoffentlich öffnet es bald.",
          uebers: { en: "Where do you like to buy clothes? Write 4 sentences." }
        }
      ]
    }
  ]
};

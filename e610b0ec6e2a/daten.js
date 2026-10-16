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
    }
  ]
};

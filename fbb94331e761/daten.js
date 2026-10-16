window.HEFT = {
  vorname: "Ksenia",
  niveau: "B2",
  modus: "ruhig",
  hilfe: "en",
  stunden: [
    {
      id: "2026-09-13",
      titel: "Wortschatz: Gesundheit, Erfolg, Veränderung",
      vokabeln: [
        { de: "die Insel", en: "the island", fr: "l'île", beispiel: "Mallorca ist eine Insel im Mittelmeer." },
        { de: "die Impfung", en: "the vaccination", fr: "la vaccination", beispiel: "Die Impfung schützt vor Krankheiten." },
        { de: "die Erfolgsaussicht", en: "the prospect of success", fr: "la chance de réussite", beispiel: "Mit guten Deutschkenntnissen hat man bessere Erfolgsaussichten bei der Arbeitssuche." },
        { de: "die Auswertung", en: "the evaluation, analysis", fr: "l'évaluation, l'analyse", beispiel: "Nach dem Test folgt die Auswertung der Ergebnisse." },
        { de: "aufhören", en: "to stop", fr: "arrêter", beispiel: "Er hat vor zehn Jahren mit dem Rauchen aufgehört." },
        { de: "anfangen", en: "to start", fr: "commencer", beispiel: "Der Unterricht fängt um zehn Uhr an." },
        { de: "sich verringern", en: "to decrease", fr: "diminuer", beispiel: "Die Zahl der Raucher hat sich verringert." },
        { de: "beeinträchtigen", en: "to impair, to affect negatively", fr: "nuire à, affecter", beispiel: "Lärm kann den Schlaf beeinträchtigen." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-16",
      titel: "Wortschatz: Verbindungen und Folgen",
      vokabeln: [
        { de: "sich auf etwas beziehen", en: "to refer to something", fr: "se référer à quelque chose", beispiel: "Ich beziehe mich auf deine E-Mail vom Montag." },
        { de: "erkunden", en: "to explore", fr: "explorer", beispiel: "Kleine Kinder erkunden die Welt mit dem Mund." },
        { de: "der Mund", en: "the mouth", fr: "la bouche", beispiel: "Sie öffnet den Mund." },
        { de: "verwöhnt", en: "spoiled", fr: "gâté", beispiel: "Das Kind ist verwöhnt, weil es immer alles bekommt." },
        { de: "deshalb / deswegen / daher", en: "therefore", fr: "c'est pourquoi", beispiel: "Es regnet, deshalb bleibe ich zu Hause." },
        { de: "queren", en: "to cross", fr: "traverser", beispiel: "Man darf die Straße nur bei Grün queren." },
        { de: "bezüglich (+ Genitiv)", en: "regarding, concerning", fr: "concernant", beispiel: "Bezüglich des Termins habe ich noch eine Frage." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-20",
      titel: "Charakter: engstirnig, geizig, bescheiden",
      vokabeln: [
        { de: "engstirnig", en: "narrow-minded", fr: "étroit d'esprit", beispiel: "Ein engstirniger Mensch hört anderen nicht zu." },
        { de: "borniert", en: "narrow-minded (stronger, rather rude)", fr: "borné", beispiel: "Er ist borniert und will keine andere Meinung hören." },
        { de: "der Geiz", en: "stinginess", fr: "l'avarice", beispiel: "Sein Geiz ist bekannt: Er lädt nie jemanden ein." },
        { de: "geizig", en: "stingy", fr: "avare, radin", beispiel: "Geizige Menschen geben nicht gern Geld aus." },
        { de: "die Bescheidenheit", en: "modesty, humility", fr: "la modestie", beispiel: "Bescheidenheit ist eine schöne Eigenschaft." },
        { de: "bescheiden", en: "modest", fr: "modeste", beispiel: "Sie ist trotz ihres Erfolgs sehr bescheiden." },
        { de: "der Schnickschnack", en: "unnecessary frills, knick-knacks", fr: "le superflu, les babioles", beispiel: "Ich brauche kein Handy mit viel Schnickschnack." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Ein ___ Mensch gibt nicht gern Geld aus.",
          optionen: ["geiziger", "bescheidener", "engstirniger"], richtig: 0,
          regel: "geizig = Man gibt nicht gern Geld aus oder teilt nicht gern. Das Nomen dazu: der Geiz."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Welches Wort bedeutet „unnötiger Luxus“?",
          optionen: ["der Schnickschnack", "die Bescheidenheit", "der Geiz"], richtig: 0,
          regel: "Der Schnickschnack sind Dinge, die man nicht wirklich braucht."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Sie hat viel Geld, aber sie lebt sehr ___.",
          antworten: ["bescheiden"],
          regel: "bescheiden = Man will nicht mehr haben, als man braucht. Das Nomen: die Bescheidenheit."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Welches Wort bedeutet fast dasselbe wie „engstirnig“?",
          optionen: ["borniert", "bescheiden", "verwöhnt"], richtig: 0,
          regel: "engstirnig und borniert: Man will keine andere Meinung hören. „Borniert“ ist stärker und klingt unhöflich."
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["engstirnig", "Er will keine andere Meinung hören."], ["geizig", "Sie gibt nicht gern Geld aus."], ["bescheiden", "Er will nicht mehr haben, als er braucht."], ["der Schnickschnack", "Dinge, die man nicht wirklich braucht"]],
          regel: "Erkläre neue Wörter mit einfachen deutschen Sätzen. Das hilft beim Sprechen."
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["der Geiz", "geizig"], ["die Bescheidenheit", "bescheiden"], ["die Beeinträchtigung", "beeinträchtigen"], ["die Verringerung", "sich verringern"]],
          regel: "Nomen und Verb/Adjektiv gehören zusammen: -heit/-keit/-ung machen Nomen. So lernst du eine Wortfamilie auf einmal."
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Es", "ist", "heute", "sonnig,", "daher", "gehe", "ich", "spazieren"],
          loesung: "Es ist heute sonnig, daher gehe ich spazieren",
          regel: "Nach „daher“, „deshalb“ und „deswegen“ steht das Verb direkt danach: daher gehe ich (Position 2 im Hauptsatz)."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Bezüglich ___ Unterrichts bin ich sehr zufrieden.",
          optionen: ["des", "dem", "den"], richtig: 0,
          regel: "bezüglich steht mit dem Genitiv: der Unterricht → des Unterrichts."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Er raucht seit zehn Jahren nicht mehr. Er hat mit dem Rauchen ___.",
          optionen: ["aufgehört", "angefangen"], richtig: 0,
          regel: "aufhören = nicht mehr tun. anfangen = beginnen. Mit + Dativ: mit dem Rauchen aufhören."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Die Zahl der Raucher hat sich in den letzten Jahren ___.",
          antworten: ["verringert"],
          regel: "sich verringern = weniger werden. Perfekt: hat sich verringert."
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Beschreibe einen Menschen, den du kennst. Ist er eher geizig, bescheiden oder engstirnig? Sprich 4 Sätze und begründe. Nimm dich auf und höre dich an.",
          hinweis: "Zum Beispiel: Er ist ..., weil ... / Deshalb ... / Das finde ich ..."
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 5 Sätze: Was ist für dich wichtiger, Bescheidenheit oder Luxus? Benutze mindestens drei neue Wörter und einmal „daher“ oder „deshalb“.",
          checkliste: [
            "Ich habe mindestens drei neue Wörter benutzt (z. B. bescheiden, geizig, Schnickschnack).",
            "Ich habe „daher“ oder „deshalb“ benutzt und das Verb direkt danach gesetzt.",
            "Ich habe meine Meinung begründet.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Für mich ist Bescheidenheit wichtiger als Luxus. Viele Menschen kaufen jeden Schnickschnack und sind trotzdem nicht glücklich. Ich brauche nicht viel, deshalb spare ich lieber Geld. Bescheiden zu sein heißt aber nicht, geizig zu sein. Wer bescheiden lebt, kann trotzdem großzügig sein."
        }
      ]
    }
  ]
};

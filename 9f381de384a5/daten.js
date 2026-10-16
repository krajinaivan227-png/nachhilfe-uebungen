window.HEFT = {
  vorname: "Mark",
  niveau: "A2",
  modus: "ruhig",
  hilfe: "fr",
  stunden: [
    {
      id: "2026-09-15",
      titel: "Fragen, Urlaub, Alltag",
      vokabeln: [
        { de: "die Frage", en: "the question", fr: "la question", beispiel: "Ich habe eine Frage." },
        { de: "entdecken", en: "to discover", fr: "découvrir", beispiel: "Kolumbus hat Amerika für Europa entdeckt." },
        { de: "der Urlaub", en: "the vacation", fr: "les vacances", beispiel: "Im Urlaub möchte ich viel schwimmen." },
        { de: "die Angst", en: "the fear", fr: "la peur", beispiel: "Ich habe Angst vor Spinnen." },
        { de: "der Streit", en: "the quarrel", fr: "la dispute", beispiel: "Der Streit war schnell vorbei." },
        { de: "die Farbe", en: "the colour", fr: "la couleur", beispiel: "Blau ist meine Lieblingsfarbe." },
        { de: "wechseln", en: "to change", fr: "changer", beispiel: "Ich wechsle die Batterie." },
        { de: "genau", en: "exactly", fr: "exactement", beispiel: "Das ist genau richtig." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-22",
      titel: "Art, Kunst, Gesundheit",
      vokabeln: [
        { de: "die Art", en: "the type, the kind", fr: "le type, la sorte", beispiel: "Es gibt viele Fischarten." },
        { de: "unglaublich", en: "unbelievable", fr: "incroyable", beispiel: "Das Essen ist unglaublich gut." },
        { de: "die Kunst", en: "the art", fr: "l'art", beispiel: "Ich hatte heute Kunstunterricht." },
        { de: "der Künstler", en: "the artist", fr: "l'artiste", beispiel: "Der Künstler malt ein Bild." },
        { de: "als", en: "when (in the past)", fr: "quand (au passé)", beispiel: "Als ich klein war, habe ich viel gespielt." },
        { de: "zwischen", en: "between", fr: "entre", beispiel: "Ich schlafe zwischen acht und neun Stunden." },
        { de: "die Wissenschaft", en: "the science", fr: "la science", beispiel: "Physik ist eine Wissenschaft." },
        { de: "das Gemüse", en: "the vegetables", fr: "les légumes", beispiel: "Gemüse ist gesund." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-29",
      titel: "Wortschatz: Schule, Gesundheit, Körper",
      vokabeln: [
        { de: "immer", en: "always", fr: "toujours", beispiel: "Ich nehme immer die Tram." },
        { de: "das Fach", en: "the school subject", fr: "la matière", beispiel: "Mein Lieblingsfach ist Physik." },
        { de: "das Fleisch", en: "the meat", fr: "la viande", beispiel: "Ich esse gern Fleisch." },
        { de: "sich entscheiden", en: "to decide", fr: "se décider", beispiel: "Ich entscheide mich für das blaue Shirt." },
        { de: "gesund", en: "healthy", fr: "en bonne santé, sain", beispiel: "Obst ist gesund." },
        { de: "verletzen", en: "to hurt, to injure", fr: "blesser", beispiel: "Er hat seinen Fuß verletzt." },
        { de: "das Bein", en: "the leg", fr: "la jambe", beispiel: "Mein Bein tut weh." },
        { de: "das Knie", en: "the knee", fr: "le genou", beispiel: "Das Knie ist in der Mitte vom Bein." },
        { de: "der Schmerz, die Schmerzen", en: "the pain", fr: "la douleur", beispiel: "Ich nehme eine Schmerztablette gegen die Schmerzen." },
        { de: "sagen", en: "to say", fr: "dire", beispiel: "Was hast du gesagt?" }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Er hat seinen Fuß ___.",
          optionen: ["verletzt", "verletzen", "verletzte"], richtig: 0,
          regel: "Perfekt = haben + Partizip II. verletzen → er hat verletzt.",
          uebers: { fr: "Choisis la bonne forme (participe passé, Partizip II)." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Mein Lieblingsfach ist Physik. Was ist dein ___?",
          antworten: ["Lieblingsfach"],
          regel: "Lieblings- + Fach = Lieblingsfach (das Fach, die Fächer).",
          uebers: { fr: "Complète le mot." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Was hast du ___?",
          antworten: ["gesagt"],
          regel: "sagen → hast gesagt. Perfekt: haben + Partizip II (am Ende).",
          uebers: { fr: "Complète avec le participe passé de « sagen »." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Mein Bein tut weh. Ich habe ___ im Bein.",
          optionen: ["Schmerzen", "Fleisch", "Fächer"], richtig: 0,
          regel: "Schmerzen = pain (meistens im Plural): Ich habe Schmerzen.",
          uebers: { fr: "Choisis le mot qui convient." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["das Bein", "Damit gehst du."], ["das Knie", "Es ist in der Mitte vom Bein."], ["das Fleisch", "Zum Beispiel Huhn oder Rind"], ["gesund", "nicht krank"]],
          regel: "Das sind einfache Erklärungen auf Deutsch. So kannst du neue Wörter selbst erklären.",
          uebers: { fr: "Associe chaque mot à son explication en allemand." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Wie heißt das Nomen zu „gesund“?",
          optionen: ["die Gesundheit", "der Gesund", "das Gesunde"], richtig: 0,
          regel: "Aus einem Adjektiv wird mit -heit ein Nomen: gesund → die Gesundheit (feminin).",
          uebers: { fr: "Quel est le nom qui correspond à « gesund » ?" }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich ___ mich für den roten Pullover.",
          antworten: ["entscheide"],
          regel: "sich entscheiden: ich entscheide mich, du entscheidest dich, er entscheidet sich.",
          uebers: { fr: "Conjugue le verbe « sich entscheiden » (ich)." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Er", "hat", "sein", "Bein", "verletzt"],
          loesung: "Er hat sein Bein verletzt",
          regel: "Perfekt: hat auf Position 2, das Partizip (verletzt) am Ende.",
          uebers: { fr: "Mets les mots dans le bon ordre. Le participe passé va à la fin." }
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["Warum bist du müde?", "Weil ich wenig geschlafen habe."], ["Wie viel kostet das Buch?", "Zehn Euro."], ["Wo ist dein Handy?", "Auf dem Tisch."], ["Wer ist das?", "Das ist mein Bruder."]],
          regel: "Wiederholung Fragewörter: warum → weil, wie viel → Preis/Menge, wo → Ort, wer → Person.",
          uebers: { fr: "Associe chaque question à la bonne réponse." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Wasser trinken ist gut ___ die Gesundheit.",
          optionen: ["für", "mit", "zu"], richtig: 0,
          regel: "gut für + Akkusativ: gut für die Gesundheit. Auch: schlecht für die Gesundheit.",
          uebers: { fr: "Choisis la bonne préposition." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Was machst du für deine Gesundheit? Sprich 4 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "Zum Beispiel: Ich trinke ... / Ich mache ... / Ich esse (nicht) ...",
          uebers: { fr: "Que fais-tu pour ta santé ? Dis 4 phrases. Enregistre-toi et écoute-toi." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 5 Sätze über dein Lieblingsfach und über Gesundheit. Benutze mindestens drei neue Wörter.",
          checkliste: [
            "Ich habe mein Lieblingsfach genannt.",
            "Ich habe mindestens drei neue Wörter benutzt.",
            "Das Verb steht auf Position 2.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Mein Lieblingsfach ist Physik. Ich bin gesund und mache viel Sport. Ich esse gern Fleisch und Gemüse. Gestern hat mein Freund sein Knie verletzt. Er hatte starke Schmerzen im Bein.",
          uebers: { fr: "Écris 5 phrases sur ta matière préférée et sur la santé. Utilise au moins trois mots nouveaux." }
        }
      ]
    }
  ]
};

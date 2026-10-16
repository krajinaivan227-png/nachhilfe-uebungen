window.HEFT = {
  vorname: "Max",
  niveau: "A2",
  modus: "ruhig",
  hilfe: "en",
  stunden: [
    {
      id: "2026-10-03",
      titel: "Wortschatz: Körper, Gefühle, Alltag",
      vokabeln: [
        { de: "beschäftigt", en: "busy", fr: "occupé", beispiel: "Der Schüler ist sehr beschäftigt." },
        { de: "der Grund", en: "the reason", fr: "la raison", beispiel: "Das ist ein guter Grund." },
        { de: "verärgern", en: "to annoy", fr: "énerver", beispiel: "Der Lärm verärgert mich." },
        { de: "der Witz", en: "the joke", fr: "la blague", beispiel: "Das ist ein guter Witz." },
        { de: "gefallen", en: "to like (it pleases me)", fr: "plaire", beispiel: "Mein Beruf gefällt mir." },
        { de: "der Schmerz", en: "the pain", fr: "la douleur", beispiel: "Ich habe Schmerzen im Bein." },
        { de: "verletzt", en: "injured", fr: "blessé", beispiel: "Er ist am Bein verletzt." },
        { de: "der Körperteil", en: "the body part", fr: "la partie du corps", beispiel: "Der Arm ist ein Körperteil." }
      ],
      aufgaben: []
    },
    {
      id: "2026-10-04",
      titel: "Futur mit werden, dass-Satz, zur/zum",
      vokabeln: [
        { de: "teilen", en: "to share", fr: "partager", beispiel: "Wir teilen das Essen miteinander." },
        { de: "einladen", en: "to invite", fr: "inviter", beispiel: "Ich lade dich zum Essen ein." },
        { de: "absolvieren", en: "to complete (a degree)", fr: "terminer (ses études)", beispiel: "Ich werde mein Studium 2028 absolvieren." },
        { de: "brechen", en: "to break", fr: "casser", beispiel: "Er hat sich das Bein gebrochen." },
        { de: "röntgen", en: "to X-ray", fr: "radiographier", beispiel: "Der Arzt röntgt mein Bein." },
        { de: "etwa", en: "about, approximately", fr: "environ", beispiel: "Ich habe etwa vier Euro." },
        { de: "entscheiden", en: "to decide", fr: "décider", beispiel: "Ich habe mich entschieden." },
        { de: "die Entscheidung", en: "the decision", fr: "la décision", beispiel: "Das ist eine große Entscheidung." },
        { de: "pendeln", en: "to commute", fr: "faire la navette", beispiel: "Ich pendle jeden Tag nach Brüssel." },
        { de: "die Entfernung", en: "the distance", fr: "la distance", beispiel: "Die Entfernung ist etwa 27 Kilometer." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Ich ___ nächstes Jahr mein Studium absolvieren.",
          optionen: ["werde", "wirst", "wird"], richtig: 0,
          regel: "ich werde (Futur). Merke: ich werde, du wirst, er/sie/es wird.",
          uebers: { en: "Choose the correct form of 'werden' (future)." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Du ___ bald fertig sein.",
          antworten: ["wirst"],
          regel: "du wirst (nicht: du wirdst).",
          uebers: { en: "Fill in the gap with the right form of 'werden'." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Meine Schwester ___ im Juni fertig sein.",
          antworten: ["wird"],
          regel: "er/sie/es wird.",
          uebers: { en: "Fill in the gap with the right form of 'werden'." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Sie gehen ___ Ärztin.",
          optionen: ["zum", "zur"], richtig: 1,
          regel: "zur = zu + der: feminin (die Ärztin → zur Ärztin). zum: maskulin und neutral.",
          uebers: { en: "Choose zur or zum." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["pendeln", "jeden Tag mit Bus oder Zug zur Arbeit fahren"], ["die Entfernung", "Wie weit ist es von A nach B?"], ["beschäftigt", "Ich habe heute keine Zeit."], ["teilen", "Jeder bekommt einen Teil."]],
          regel: "Das sind Erklärungen auf Deutsch. So kannst du neue Wörter auch selbst erklären.",
          uebers: { en: "Match each word with its German explanation." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich gehe ___ Arzt.",
          antworten: ["zum"],
          regel: "der Arzt (maskulin) → zum Arzt.",
          uebers: { en: "Fill in zur or zum." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Ich", "weiß,", "dass", "er", "heute", "beschäftigt", "ist"],
          loesung: "Ich weiß, dass er heute beschäftigt ist",
          regel: "Nach 'dass' steht das Verb am Ende des Satzes.",
          uebers: { en: "Put the words in the right order. After 'dass' the verb goes to the end." }
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["brechen", "gebrochen"], ["entscheiden", "entschieden"], ["einladen", "eingeladen"]],
          regel: "Partizip II: brechen → gebrochen, entscheiden → entschieden. Trennbar: einladen → eingeladen (ein + ge + laden).",
          uebers: { en: "Match the verb with its past participle (Partizip II)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich sitze auf der Bank im Park. Was bedeutet „Bank“ hier?",
          optionen: ["the bank (money)", "the bench (seat)"], richtig: 1,
          regel: "Das Wort „Bank“ hat zwei Bedeutungen: Geld-Bank und Sitzbank. Der Satz zeigt es: im Park, sitzen.",
          uebers: { en: "What does 'Bank' mean in this sentence?" }
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["Ich", "pendle", "jeden", "Tag", "nach", "Brüssel"],
          loesung: "Ich pendle jeden Tag nach Brüssel",
          regel: "Das Verb steht an Position 2. Die Zeitangabe 'jeden Tag' steht vor dem Ort.",
          uebers: { en: "Put the words in the right order." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Was wirst du in den nächsten Monaten machen? Sprich 4 Sätze mit „werden“. Nimm dich auf und höre dich an.",
          hinweis: "Zum Beispiel: Ich werde ... / Meine Familie wird ... / Wir werden ...",
          uebers: { en: "What will you do in the next months? Say 4 sentences with 'werden'. Record yourself and listen." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 5 Sätze über deine Pläne für nächstes Jahr. Benutze „werden“ und mindestens einen dass-Satz.",
          checkliste: [
            "Ich habe „werden“ richtig benutzt (ich werde, du wirst, er wird ...).",
            "Ich habe mindestens einen dass-Satz geschrieben.",
            "Im dass-Satz steht das Verb am Ende.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Nächstes Jahr werde ich viel lernen. Ich weiß, dass das nicht leicht ist. Meine Freunde werden mich besuchen. Wir werden zusammen kochen. Ich hoffe, dass wir viel Spaß haben.",
          uebers: { en: "Write 5 sentences about your plans for next year. Use 'werden' and at least one 'dass' clause." }
        }
      ]
    }
  ]
};

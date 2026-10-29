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
    },
    {
      id: "2026-10-18",
      titel: "bekommen, deshalb, zu Hause und nach Hause",
      vokabeln: [
        { de: "die Verbesserung", en: "the improvement", fr: "l'amélioration", beispiel: "Ich habe viele Verbesserungen gemacht." },
        { de: "bekommen", en: "to get, to receive", fr: "recevoir", beispiel: "Ich bekomme ein Geschenk." },
        { de: "das Geschenk", en: "the present", fr: "le cadeau", beispiel: "Das Geschenk ist für dich." },
        { de: "umarmen", en: "to hug", fr: "serrer dans ses bras", beispiel: "Ich umarme meine beste Freundin." },
        { de: "weinen", en: "to cry", fr: "pleurer", beispiel: "Das Kind weint." },
        { de: "deshalb", en: "that's why", fr: "c'est pourquoi", beispiel: "Ich bin krank, deshalb bleibe ich zu Hause." },
        { de: "der Rücken", en: "the back", fr: "le dos", beispiel: "Ich habe Schmerzen im Rücken." },
        { de: "tragen", en: "to carry", fr: "porter", beispiel: "Ich trage die Einkäufe nach Hause." },
        { de: "schwer", en: "heavy", fr: "lourd", beispiel: "Mein Rucksack ist schwer." },
        { de: "gemütlich", en: "cosy", fr: "confortable, douillet", beispiel: "Mein Zimmer ist gemütlich." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Was bedeutet „bekommen“?",
          optionen: ["to get, to receive", "to become", "to come"], richtig: 0,
          regel: "Achtung: bekommen = to get. to become = werden.",
          uebers: { en: "What does 'bekommen' mean?" }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich ___ ein Geschenk. (bekommen)",
          antworten: ["bekomme"],
          regel: "bekommen: ich bekomme, du bekommst, er bekommt.",
          uebers: { en: "Fill in the right form of 'bekommen'." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ivan ist krank, deshalb ___ keine Energie.",
          optionen: ["hat er", "er hat"], richtig: 0,
          regel: "deshalb steht auf Position 1, dann kommt das Verb, dann das Subjekt.",
          uebers: { en: "After 'deshalb' the verb comes first, then the subject." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Es", "regnet,", "deshalb", "bleibe", "ich", "zu", "Hause"],
          loesung: "Es regnet, deshalb bleibe ich zu Hause",
          regel: "deshalb + Verb + Subjekt.",
          uebers: { en: "Put the words in order." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Nach der Arbeit gehe ich ___ Hause.",
          optionen: ["nach", "zu"], richtig: 0,
          regel: "Wohin? → nach Hause. Wo? → zu Hause.",
          uebers: { en: "Going home (direction): 'nach' or 'zu'?" }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Am Abend bin ich ___ Hause.",
          optionen: ["zu", "nach"], richtig: 0,
          regel: "Wo? → zu Hause (at home).",
          uebers: { en: "Being at home (place): 'zu' or 'nach'?" }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Mein Rucksack ist sehr ___. (heavy)",
          antworten: ["schwer"],
          regel: "schwer = heavy (oder difficult). schwierig = nur difficult.",
          uebers: { en: "My backpack is very heavy." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich habe Schmerzen im ___. (back)",
          antworten: ["Rücken"],
          regel: "Schmerzen im Rücken (= Rückenschmerzen). Nicht: auf meinem Rücken.",
          uebers: { en: "I have pain in my back." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["weinen", "to cry"], ["umarmen", "to hug"], ["tragen", "to carry"], ["brauchen", "to need"]],
          regel: "Verben der Stunde.",
          uebers: { en: "Match the verbs." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Wie war deine Woche? Sprich 4 Sätze, mindestens zweimal mit deshalb. Nimm dich auf und höre dich an.",
          hinweis: "Ich war sehr beschäftigt, deshalb ... / Ich hatte Rückenschmerzen, deshalb ...",
          uebers: { en: "How was your week? Say 4 sentences, use 'deshalb' at least twice." }
        }
      ]
    },
    {
      id: "2026-10-25",
      titel: "Verben mit Präposition, als oder wie",
      vokabeln: [
        { de: "sich erinnern an (+ Akk.)", en: "to remember", fr: "se souvenir de", beispiel: "Ich erinnere mich an dich." },
        { de: "sich entscheiden für", en: "to decide on", fr: "se décider pour", beispiel: "Ich entscheide mich für den Deutschkurs." },
        { de: "überrascht", en: "surprised", fr: "surpris", beispiel: "Ich war sehr überrascht." },
        { de: "die Überraschung", en: "the surprise", fr: "la surprise", beispiel: "Das ist eine schöne Überraschung!" },
        { de: "sich anhören", en: "to sound", fr: "sonner, avoir l'air", beispiel: "Dein Deutsch hört sich gut an." },
        { de: "eineinhalb", en: "one and a half", fr: "un et demi", beispiel: "Ich lerne seit eineinhalb Jahren Deutsch." },
        { de: "die Wolke", en: "the cloud", fr: "le nuage", beispiel: "Heute gibt es viele Wolken." },
        { de: "die Steuer", en: "the tax", fr: "l'impôt", beispiel: "Die Steuern sind hoch." },
        { de: "mehr oder weniger", en: "more or less", fr: "plus ou moins", beispiel: "Das stimmt mehr oder weniger." }
      ],
      aufgaben: [
        {
          typ: "luecke", stufe: 1,
          text: "Ich erinnere mich ___ dich.",
          antworten: ["an"],
          regel: "sich erinnern an + Akkusativ.",
          uebers: { en: "I remember you: fill in the preposition." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich entscheide mich ___ den Deutschkurs.",
          antworten: ["für"],
          regel: "sich entscheiden für + Akkusativ.",
          uebers: { en: "I decide on the German course: fill in the preposition." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Dein Deutsch ___ sich gut an.",
          optionen: ["hört", "sagt", "spricht"], richtig: 0,
          regel: "sich anhören = to sound (trennbar): Es hört sich gut an.",
          uebers: { en: "Your German sounds good." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Singapur ist reicher ___ Malaysia.",
          optionen: ["als", "wie"], richtig: 0,
          regel: "Komparativ (reicher, größer) + als = than.",
          uebers: { en: "Comparative + 'als' (than)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Mein Bruder ist so groß ___ ich.",
          optionen: ["wie", "als"], richtig: 0,
          regel: "so ... wie = as ... as (gleich).",
          uebers: { en: "My brother is as tall as me." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "1,5 Jahre sagt man so:",
          optionen: ["eineinhalb Jahre", "ein Jahr und ein halb", "ein halb Jahre"], richtig: 0,
          regel: "1,5 = eineinhalb (oder anderthalb).",
          uebers: { en: "How do you say 1.5 years?" }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich war sehr ___, als ich das Geschenk bekam. (surprised)",
          antworten: ["überrascht"],
          regel: "überraschen → überrascht (nicht trennbar).",
          uebers: { en: "I was very surprised when I got the present." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["die Wolke", "the cloud"], ["die Steuer", "the tax"], ["die Überraschung", "the surprise"], ["die Entscheidung", "the decision"]],
          regel: "Nomen auf -ung sind immer feminin (die).",
          uebers: { en: "Match the words." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Vergleiche zwei Städte oder Länder (4–5 Sätze). Benutze als und wie.",
          checkliste: [
            "Ich habe Komparativ + als benutzt (größer als …).",
            "Ich habe so … wie benutzt.",
            "Ich habe mindestens ein neues Wort benutzt.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Wien ist größer als Salzburg. In Wien gibt es oft viele Wolken. Im Winter ist es in Wien so kalt wie in München. Die Steuern sind in Österreich höher als in Malaysia. Ich mag beide Städte mehr oder weniger gleich gern.",
          uebers: { en: "Compare two cities or countries in 4–5 sentences. Use 'als' and 'wie'." }
        }
      ]
    }
  ]
};

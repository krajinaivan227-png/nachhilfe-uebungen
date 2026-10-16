window.HEFT = {
  vorname: "Jana",
  niveau: "A1",
  modus: "ruhig",
  hilfe: "en",
  stunden: [
    {
      id: "2026-09-16",
      titel: "Wortschatz: Schule, Zeit, Hobbys",
      vokabeln: [
        { de: "die Stunde", en: "the hour (also: the lesson)", fr: "l'heure (aussi : le cours)", beispiel: "Die Schule dauert sechs Stunden." },
        { de: "die Uhr", en: "o'clock (also: the clock, the watch)", fr: "heure (aussi : l'horloge, la montre)", beispiel: "Es ist 14 Uhr." },
        { de: "ganz", en: "whole, all", fr: "entier, tout", beispiel: "Ich lerne die ganze Woche." },
        { de: "weil", en: "because", fr: "parce que", beispiel: "Ich esse, weil ich Hunger habe." },
        { de: "das Lieblingsfach", en: "the favourite subject", fr: "la matière préférée", beispiel: "Mein Lieblingsfach ist Biologie." },
        { de: "interessant", en: "interesting", fr: "intéressant", beispiel: "Das Buch ist interessant." },
        { de: "ungefähr", en: "approximately", fr: "environ", beispiel: "Ich lese ungefähr eine Stunde pro Tag." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-23",
      titel: "nicht oder kein? Außerdem: viel, Mal, fast, vor",
      vokabeln: [
        { de: "wirklich", en: "really", fr: "vraiment", beispiel: "Ich bin wirklich müde." },
        { de: "fast", en: "almost", fr: "presque", beispiel: "Es ist fast acht Uhr." },
        { de: "vor", en: "ago", fr: "il y a", beispiel: "Ich habe vor einem Jahr Deutsch gelernt." },
        { de: "insgesamt", en: "in total", fr: "au total", beispiel: "Wir sind insgesamt vier Personen." },
        { de: "viel", en: "much, a lot", fr: "beaucoup", beispiel: "Ich lese viel." },
        { de: "das Mal", en: "the time (occasion)", fr: "la fois", beispiel: "Das ist das erste Mal." },
        { de: "leider", en: "unfortunately", fr: "malheureusement", beispiel: "Leider habe ich keine Zeit." },
        { de: "die Maus (Pl. die Mäuse)", en: "the mouse (pl. mice)", fr: "la souris", beispiel: "Die Maus ist klein." },
        { de: "der Körper", en: "the body", fr: "le corps", beispiel: "Sport ist gut für den Körper." },
        { de: "sezieren", en: "to dissect", fr: "disséquer", beispiel: "In Biologie sezieren wir eine Blume." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Ich habe ___ Bruder.",
          optionen: ["nicht", "kein", "keine"], richtig: 1,
          regel: "ein Bruder → kein Bruder. kein ersetzt ein: ein Hund → kein Hund.",
          uebers: { en: "Choose the right word: 'I have no brother.'" }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich habe ___ Schwester.",
          optionen: ["kein", "keine", "nicht"], richtig: 1,
          regel: "eine Schwester → keine Schwester. Bei feminin und Plural: keine.",
          uebers: { en: "Choose the right word: 'I have no sister.'" }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich habe ___ Geld.",
          antworten: ["kein"],
          regel: "Das Geld hat keinen Artikel im Satz. Dann sagt man kein: kein Geld.",
          uebers: { en: "Fill in the gap: 'I have no money.' (nicht or kein?)" }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Das ist ___ Maus. Das ist eine Ratte.",
          antworten: ["keine"],
          regel: "eine Maus → keine Maus. kein/keine verneint ein Nomen.",
          uebers: { en: "Fill in the gap: 'That is not a mouse. That is a rat.'" }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich bin ___ müde.",
          optionen: ["nicht", "kein", "keine"], richtig: 0,
          regel: "müde ist ein Adjektiv, kein Nomen. Adjektiv, Verb und ganze Sätze verneint man mit nicht: Ich bin nicht müde.",
          uebers: { en: "Choose the right word: 'I am not tired.'" }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["leider", "unfortunately"], ["fast", "almost"], ["insgesamt", "in total"], ["wirklich", "really"]],
          regel: "Das sind Wörter aus der Stunde. Lies sie laut und sprich sie nach.",
          uebers: { en: "Match each German word with its English meaning." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Es ist 14 ___.",
          antworten: ["Uhr"],
          regel: "Uhrzeit: Es ist 14 Uhr. Die Stunde ist die Dauer: Ich arbeite 8 Stunden.",
          uebers: { en: "Fill in the gap: 'It is 2 p.m.' (14 o'clock)" }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Die Mehrzahl von „die Maus“ ist ...",
          optionen: ["die Mäuse", "die Mausen", "die Mauses"], richtig: 0,
          regel: "Maus → Mäuse (a wird ä, dazu -e). Die Mehrzahl lernt man mit dem Wort.",
          uebers: { en: "What is the plural of 'die Maus'?" }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Wir", "sind", "insgesamt", "vier", "Personen"],
          loesung: "Wir sind insgesamt vier Personen",
          regel: "Das Verb „sind“ steht an Position 2.",
          uebers: { en: "Put the words in the right order." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Ich", "lese", "fünf", "Mal", "pro", "Woche"],
          loesung: "Ich lese fünf Mal pro Woche",
          regel: "Das Verb steht an Position 2. „fünf Mal pro Woche“ sagt, wie oft.",
          uebers: { en: "Put the words in the right order." }
        },
        {
          typ: "sprechen", stufe: 1,
          auftrag: "Was machst du gern? Wie oft pro Woche? Sprich 4 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "Zum Beispiel: Ich lese gern. Ich lese fünf Mal pro Woche. Ich habe kein ... Ich mag ... nicht.",
          uebers: { en: "What do you like to do? How often per week? Say 4 sentences. Record yourself and listen." }
        },
        {
          typ: "schreiben", stufe: 2,
          auftrag: "Schreibe 4 Sätze über dich. Was hast du nicht? Was machst du nicht gern? Benutze „kein/keine“ und „nicht“.",
          checkliste: [
            "Ich habe mindestens einmal „kein“ oder „keine“ benutzt.",
            "Ich habe mindestens einmal „nicht“ benutzt.",
            "Das Verb steht an Position 2.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Ich habe keinen Hund. Ich habe keine Katze. Ich spiele nicht gern Fußball. Ich esse viel Obst.",
          uebers: { en: "Write 4 sentences about yourself. What do you not have? What do you not like to do? Use 'kein/keine' and 'nicht'." }
        }
      ]
    }
  ]
};

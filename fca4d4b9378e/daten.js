window.HEFT = {
  vorname: "Daniel",
  niveau: "B1",
  modus: "ruhig",
  hilfe: "fr",
  stunden: [
    {
      id: "2026-09-28",
      titel: "Reflexive Verben und Wortschatz: Gefühle, Teilnahme",
      vokabeln: [
        { de: "sich interessieren (für)", en: "to be interested (in)", fr: "s'intéresser (à)", beispiel: "Ich interessiere mich für Geschichte." },
        { de: "sich freuen (auf/über)", en: "to be happy / to look forward to", fr: "se réjouir (de)", beispiel: "Ich freue mich auf das Wochenende." },
        { de: "sich schämen", en: "to be ashamed", fr: "avoir honte", beispiel: "Er schämt sich für den Fehler." },
        { de: "sich zurückhalten", en: "to hold back", fr: "se retenir", beispiel: "Bei der Diskussion hat er sich zurückgehalten." },
        { de: "vorsichtig", en: "careful", fr: "prudent", beispiel: "Fahr bitte vorsichtig!" },
        { de: "das Hindernis", en: "the obstacle", fr: "l'obstacle", beispiel: "Der Baum ist ein Hindernis auf dem Weg." },
        { de: "teilnehmen (an + Dativ)", en: "to take part (in)", fr: "participer (à)", beispiel: "Viele Leute nehmen an dem Fest teil." },
        { de: "die Abwechslung", en: "variety", fr: "la variété, le changement", beispiel: "Der Alltag braucht etwas Abwechslung." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-29",
      titel: "Wortschatz: Morgen, Essen, Dank",
      vokabeln: [
        { de: "aufwachen", en: "to wake up", fr: "se réveiller", beispiel: "Ich bin um sieben Uhr aufgewacht." },
        { de: "wecken", en: "to wake (someone) up", fr: "réveiller", beispiel: "Meine Mutter weckt mich jeden Morgen." },
        { de: "der Wecker", en: "the alarm clock", fr: "le réveil", beispiel: "Mein Wecker klingelt um sechs Uhr." },
        { de: "backen", en: "to bake", fr: "cuire au four", beispiel: "Er hat ein Brot gebacken." },
        { de: "füttern", en: "to feed (an animal)", fr: "nourrir", beispiel: "Ich füttere die Katze." },
        { de: "fressen", en: "to eat (animals)", fr: "manger (en parlant d'un animal)", beispiel: "Die Katze frisst Fisch." },
        { de: "erzählen", en: "to tell", fr: "raconter", beispiel: "Sie erzählt eine Geschichte." },
        { de: "der Buchstabe", en: "the letter (of the alphabet)", fr: "la lettre", beispiel: "Das Wort hat fünf Buchstaben." },
        { de: "sich bedanken (bei)", en: "to thank", fr: "remercier", beispiel: "Ich bedanke mich bei dir." },
        { de: "sich einsetzen (für)", en: "to stand up for", fr: "s'engager (pour)", beispiel: "Sie setzt sich für den Umweltschutz ein." }
      ],
      aufgaben: []
    },
    {
      id: "2026-10-01",
      titel: "aber / sondern, als (Rolle), Partizip II",
      vokabeln: [
        { de: "der Bezirk", en: "the district", fr: "l'arrondissement", beispiel: "Wien hat dreiundzwanzig Bezirke." },
        { de: "das Pferd", en: "the horse", fr: "le cheval", beispiel: "Das Pferd frisst Gras." },
        { de: "die Kutsche", en: "the carriage", fr: "la calèche", beispiel: "Zwei Pferde ziehen die Kutsche." },
        { de: "malen", en: "to paint", fr: "peindre", beispiel: "Sie hat ein Bild gemalt." },
        { de: "schmieren", en: "to spread", fr: "tartiner", beispiel: "Ich schmiere Butter auf das Brot." },
        { de: "zujubeln", en: "to cheer (for someone)", fr: "acclamer", beispiel: "Die Fans jubeln dem Team zu." },
        { de: "das Feld", en: "the field", fr: "le champ, le terrain", beispiel: "Das Pferd steht auf dem Feld." },
        { de: "die Kartoffel", en: "the potato", fr: "la pomme de terre", beispiel: "Ich koche heute Kartoffeln." },
        { de: "geduldig", en: "patient", fr: "patient", beispiel: "Die Lehrerin ist sehr geduldig." },
        { de: "ungeduldig", en: "impatient", fr: "impatient", beispiel: "Die Kinder sind ungeduldig." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Ich trinke keinen Kaffee, ___ Tee.",
          optionen: ["aber", "sondern"], richtig: 1,
          regel: "„sondern“ steht nach einer Verneinung (nicht/kein) und nennt die richtige Alternative: kein Kaffee, sondern Tee."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Er ist müde, ___ er geht trotzdem zum Training.",
          optionen: ["aber", "sondern"], richtig: 0,
          regel: "„aber“ nennt einen Gegensatz ohne Verneinung des ersten Teils: Er ist müde, aber er geht trotzdem."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich habe die Butter auf das Brot ___. (schmieren)",
          antworten: ["geschmiert"],
          regel: "Perfekt: haben + Partizip II. schmieren → geschmiert (regelmäßig: ge- + Stamm + -t)."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Meine Oma hat gestern ein Brot ___. (backen)",
          antworten: ["gebacken"],
          regel: "backen → gebacken (unregelmäßig, mit -en am Ende)."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich interessiere mich ___ Geschichte.",
          optionen: ["für", "an", "auf"], richtig: 0,
          regel: "sich interessieren für + Akkusativ."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Du bist sehr geduldig ___ Schüler.",
          optionen: ["als", "wie", "so"], richtig: 0,
          regel: "„als“ nennt eine Rolle oder Funktion: als Schüler, als Lehrerin, als Kind (= en tant que)."
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["der Wecker", "Das Gerät weckt dich am Morgen."], ["füttern", "Ein Tier bekommt Essen."], ["die Kutsche", "Pferde ziehen den Wagen."], ["geduldig", "Man kann gut warten."]],
          regel: "Das sind Erklärungen auf Deutsch. So kannst du neue Wörter auch selbst erklären."
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Er", "kauft", "kein", "Brot,", "sondern", "Kartoffeln"],
          loesung: "Er kauft kein Brot, sondern Kartoffeln",
          regel: "Vor „sondern“ steht immer ein Komma. Davor steht eine Verneinung (kein)."
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["Ich", "glaube,", "dass", "du", "sehr", "geduldig", "bist"],
          loesung: "Ich glaube, dass du sehr geduldig bist",
          regel: "Nach „dass“ steht das Verb am Ende des Satzes."
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Erzähle von deinem Morgen: Wann bist du aufgewacht? Hat dich ein Wecker geweckt? Was hast du gegessen? Sprich 5 Sätze im Perfekt. Nimm dich auf und höre dich an.",
          hinweis: "Zum Beispiel: Ich bin um ... aufgewacht. / Mein Wecker hat mich geweckt. / Ich habe ... gegessen."
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 5 Sätze mit „aber“ und „sondern“ über deine Gewohnheiten und Pläne.",
          checkliste: [
            "Ich habe mindestens zwei Sätze mit „aber“ geschrieben.",
            "Ich habe mindestens zwei Sätze mit „sondern“ geschrieben.",
            "Vor „aber“ und „sondern“ steht ein Komma.",
            "Vor „sondern“ steht eine Verneinung (nicht/kein)."
          ],
          muster: "Ich trinke keinen Kaffee, sondern Tee. Ich habe wenig Zeit, aber ich lerne jeden Tag Deutsch. Heute spiele ich nicht Fußball, sondern ich fahre Fahrrad. Ich bin müde, aber ich bin glücklich. Ich esse kein Fleisch, sondern nur Gemüse."
        }
      ]
    }
  ]
};

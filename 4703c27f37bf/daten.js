window.HEFT = {
  vorname: "Faiz",
  niveau: "B2",
  modus: "ruhig",
  hilfe: "en",
  stunden: [
    {
      id: "2026-08-16",
      titel: "Wortschatz: Verhalten, Vorlieben, Gesundheit",
      vokabeln: [
        { de: "diagnostizieren", en: "to diagnose", fr: "diagnostiquer", beispiel: "Der Arzt diagnostiziert eine Erkältung." },
        { de: "ausarten", en: "to get out of hand", fr: "dégénérer", beispiel: "Die Party ist gestern ausgeartet." },
        { de: "gezwungenermaßen", en: "out of necessity, because one has to", fr: "par la force des choses", beispiel: "Ich musste gezwungenermaßen zu Hause bleiben." },
        { de: "schweigen", en: "to be silent", fr: "se taire", beispiel: "Der Lehrer sagt, wir sollen schweigen." },
        { de: "rege", en: "lively, active", fr: "animé, vif", beispiel: "Am Morgen ist die Stadt sehr rege." },
        { de: "die Zuneigung", en: "affection", fr: "l'affection", beispiel: "Sie hat große Zuneigung zu Katzen." },
        { de: "nachlassen", en: "to ease off, to subside", fr: "diminuer", beispiel: "Meine Erkältung lässt nach." },
        { de: "sich benehmen", en: "to behave", fr: "se comporter", beispiel: "Ich benehme mich im Unterricht immer ruhig." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-05",
      titel: "Wortschatz: Nützlich, verlockend, verdächtig",
      vokabeln: [
        { de: "der Adel", en: "the nobility", fr: "la noblesse", beispiel: "Der Adel lebte früher in Schlössern." },
        { de: "taugen", en: "to be of use, to be suited", fr: "être bon à, convenir", beispiel: "Die Kamera taugt für Fotos." },
        { de: "ankurbeln", en: "to boost, to get going", fr: "relancer, stimuler", beispiel: "Die Regierung will die Wirtschaft ankurbeln." },
        { de: "verlockend", en: "tempting", fr: "tentant", beispiel: "Das Angebot ist sehr verlockend." },
        { de: "geschwollen", en: "pompous, bombastic", fr: "pompeux", beispiel: "Seine Rede klingt sehr geschwollen." },
        { de: "suspekt", en: "suspicious, dubious", fr: "suspect, douteux", beispiel: "Der Mann kam mir suspekt vor." },
        { de: "verdächtig", en: "suspicious", fr: "suspect", beispiel: "Er verhält sich verdächtig." },
        { de: "etwas ansprechen", en: "to bring something up", fr: "aborder quelque chose", beispiel: "Er hat das Problem beim Treffen angesprochen." },
        { de: "schnorcheln", en: "to snorkel", fr: "faire de la plongée avec tuba", beispiel: "Im Urlaub möchte ich schnorcheln." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-26",
      titel: "Wortschatz: Fähigkeiten, Anlass, Genitiv-Präpositionen",
      vokabeln: [
        { de: "gesprächig", en: "talkative", fr: "bavard", beispiel: "Mein Mitbewohner ist sehr gesprächig." },
        { de: "die Fertigkeit", en: "the skill", fr: "la compétence", beispiel: "Kochen ist eine nützliche Fertigkeit." },
        { de: "aufgebracht", en: "upset, furious", fr: "furieux, hors de soi", beispiel: "Ich bin sehr aufgebracht." },
        { de: "zögern", en: "to hesitate", fr: "hésiter", beispiel: "Er zögert und antwortet nicht sofort." },
        { de: "jemanden anheuern", en: "to hire someone", fr: "engager quelqu'un", beispiel: "Wir haben einen Architekten angeheuert." },
        { de: "jemanden durchschauen", en: "to see through someone", fr: "percer quelqu'un à jour", beispiel: "Er hat seine Konkurrenz durchschaut." },
        { de: "anlässlich (+ Genitiv)", en: "on the occasion of", fr: "à l'occasion de", beispiel: "Anlässlich meines Geburtstags kam meine Familie zu Besuch." },
        { de: "außerhalb (+ Genitiv)", en: "outside of, beyond", fr: "en dehors de", beispiel: "Das liegt außerhalb meines Budgets." },
        { de: "in jemandes Haut stecken", en: "to be in someone's shoes", fr: "être dans la peau de quelqu'un", beispiel: "Ich möchte nicht in deiner Haut stecken." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Das liegt außerhalb ___ Budgets.",
          optionen: ["meines", "meinem", "mein"], richtig: 0,
          regel: "außerhalb steht mit dem Genitiv. Das Budget (neutral) → des Budgets, meines Budgets."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Er redet gern und viel. Er ist sehr ___.",
          antworten: ["gesprächig"],
          regel: "gesprächig = redet gern und viel. Das Wort kommt von das Gespräch."
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["gesprächig", "redet gern und viel"], ["die Fertigkeit", "etwas gut können, eine Fähigkeit"], ["aufgebracht", "sehr wütend und aufgeregt"], ["zögern", "nicht sofort handeln, weil man unsicher ist"]],
          regel: "Neue Wörter kannst du auf Deutsch erklären. So lernst du sie besser."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Anlässlich ___ Jubiläums gab es eine große Feier.",
          optionen: ["des", "dem", "das"], richtig: 0,
          regel: "anlässlich + Genitiv: das Jubiläum (neutral) → des Jubiläums. Merke: der Anlass = the occasion."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Wir haben einen Architekten ___.",
          antworten: ["angeheuert"],
          regel: "anheuern ist trennbar: Partizip II = an + ge + heuert → angeheuert."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Er hat seine Konkurrenz ___.",
          optionen: ["durchschaut", "durchgeschaut", "gedurchschaut"], richtig: 0,
          regel: "In der Bedeutung „etwas erkennen“ ist durchschauen untrennbar: er durchschaut, er hat durchschaut (ohne ge-)."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Der Lehrer hat gesagt, wir sollen schweigen. Dann haben alle ___.",
          optionen: ["geschwiegen", "geschweigt", "geschwiegt"], richtig: 0,
          regel: "schweigen ist ein unregelmäßiges Verb: schweigen – schwieg – hat geschwiegen. (Wiederholung)"
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["taugen", "nützlich sein"], ["ankurbeln", "beschleunigen, steigern"], ["verlockend", "attraktiv, anziehend"], ["suspekt", "verdächtig"]],
          regel: "Wiederholung aus den letzten Stunden: Das sind Synonyme bzw. Erklärungen auf Deutsch."
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Meine", "Eltern", "besuchen", "mich", "anlässlich", "meines", "Geburtstags"],
          loesung: "Meine Eltern besuchen mich anlässlich meines Geburtstags",
          regel: "Verb auf Position 2. Nach anlässlich steht der Genitiv: meines Geburtstags."
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["An", "deiner", "Stelle", "hätte", "ich", "das", "anders", "gemacht"],
          loesung: "An deiner Stelle hätte ich das anders gemacht",
          regel: "„An deiner Stelle“ + Konjunktiv II der Vergangenheit (hätte + Partizip II) drückt einen Rat oder eine andere Entscheidung aus."
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Wen würdest du gern anheuern, und wofür? Sprich 4 Sätze. Benutze „anheuern“, „Fertigkeit“ und „außerhalb“. Nimm dich auf und höre dich an.",
          hinweis: "Zum Beispiel: Ich würde einen ... anheuern, weil ... / Er verfügt über ... Fertigkeiten. / Das Büro liegt außerhalb ..."
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 5 Sätze über ein Fest, das du planst. Benutze „anlässlich“ und „außerhalb“ (beide mit Genitiv) und mindestens zwei weitere Wörter aus dieser Stunde.",
          checkliste: [
            "Ich habe „anlässlich“ mit dem Genitiv benutzt.",
            "Ich habe „außerhalb“ mit dem Genitiv benutzt.",
            "Ich habe mindestens zwei neue Wörter benutzt (z. B. gesprächig, anheuern, Fertigkeit, zögern).",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Anlässlich des Geburtstags meiner Schwester planen wir ein Fest. Das Lokal liegt außerhalb der Stadt. Wir haben einen Koch angeheuert, weil er viele Fertigkeiten hat. Meine Schwester ist sehr gesprächig und lacht gern. Ich habe nicht gezögert und ein schönes Geschenk gekauft."
        }
      ]
    }
  ]
};

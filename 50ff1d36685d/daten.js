window.HEFT = {
  vorname: "Eugenie",
  niveau: "B1",
  modus: "ruhig",
  hilfe: "fr",
  stunden: [
    {
      id: "2026-09-18",
      titel: "Vergleiche und Wortschatz: Stärken, Wirtschaft",
      vokabeln: [
        { de: "weitermachen", en: "to continue", fr: "continuer", beispiel: "Wir machen morgen weiter." },
        { de: "begabt", en: "gifted, talented", fr: "doué", beispiel: "Sie ist begabt in Mathe." },
        { de: "der Bildschirm", en: "the screen", fr: "l'écran", beispiel: "Ich teile meinen Bildschirm." },
        { de: "die Stärke", en: "the strength", fr: "la force, le point fort", beispiel: "Meine Stärke ist Mathe." },
        { de: "ähnlich", en: "similar", fr: "semblable", beispiel: "Die beiden Flaggen sind ähnlich." },
        { de: "sich ähneln", en: "to resemble each other", fr: "se ressembler", beispiel: "Die zwei Brüder ähneln sich." },
        { de: "die Flagge", en: "the flag", fr: "le drapeau", beispiel: "Die Flagge ist rot und weiß." },
        { de: "der Streit", en: "the argument", fr: "la dispute", beispiel: "Es gab einen Streit." },
        { de: "die Wirtschaft", en: "the economy", fr: "l'économie", beispiel: "Die Wirtschaft wächst langsam." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-23",
      titel: "Wortschatz: Erfahrung, Alltag, Erfolg",
      vokabeln: [
        { de: "die Erfahrung", en: "the experience", fr: "l'expérience", beispiel: "Ich habe gute Erfahrungen mit diesem Kurs gemacht." },
        { de: "der Unterschied", en: "the difference", fr: "la différence", beispiel: "Was ist der Unterschied zwischen den zwei Wörtern?" },
        { de: "effizient", en: "efficient", fr: "efficace", beispiel: "Der Prozess ist nicht effizient." },
        { de: "das Gegenteil", en: "the opposite", fr: "le contraire", beispiel: "Das Gegenteil von groß ist klein." },
        { de: "die Mehrheit", en: "the majority", fr: "la majorité", beispiel: "Die Mehrheit hat zugestimmt." },
        { de: "die Minderheit", en: "the minority", fr: "la minorité", beispiel: "Nur eine Minderheit war dagegen." },
        { de: "unabhängig", en: "independent", fr: "indépendant", beispiel: "Mit achtzehn möchten viele unabhängig sein." },
        { de: "der Alltag", en: "everyday life", fr: "le quotidien", beispiel: "Im Alltag habe ich wenig Zeit." },
        { de: "der Erfolg", en: "the success", fr: "le succès", beispiel: "Viel Erfolg bei der Prüfung!" },
        { de: "häufig", en: "often, frequent", fr: "fréquent, souvent", beispiel: "Er ist häufig müde." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-29",
      titel: "um ... zu, wollen, Wetter und Verkehr",
      vokabeln: [
        { de: "der Vorort", en: "the suburb", fr: "la banlieue", beispiel: "Sie wohnt in einem ruhigen Vorort." },
        { de: "schrittweise", en: "step by step", fr: "pas à pas, progressivement", beispiel: "Er macht schrittweise Fortschritte." },
        { de: "der Stau", en: "the traffic jam", fr: "l'embouteillage", beispiel: "Am Morgen gibt es oft Stau." },
        { de: "die Straßenbahn", en: "the tram", fr: "le tramway", beispiel: "Die Straßenbahn kommt gleich." },
        { de: "gefährlich", en: "dangerous", fr: "dangereux", beispiel: "Der Weg ist bei Regen gefährlich." },
        { de: "der Sturm", en: "the storm", fr: "la tempête", beispiel: "Der Sturm bricht viele Äste ab." },
        { de: "der Blitz", en: "the lightning", fr: "l'éclair", beispiel: "Der Blitz schlägt in den Baum ein." },
        { de: "der Donner", en: "the thunder", fr: "le tonnerre", beispiel: "Nach dem Blitz kommt der Donner." },
        { de: "tröpfeln", en: "to drizzle (lightly)", fr: "pleuvoter", beispiel: "Es tröpfelt nur ein bisschen." },
        { de: "schütten", en: "to pour (rain)", fr: "pleuvoir à verse", beispiel: "Heute schüttet es den ganzen Tag." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Ich mache viele Übungen, ___ mein Deutsch zu verbessern.",
          optionen: ["um", "damit", "weil"], richtig: 0,
          regel: "um ... zu + Infinitiv nennt das Ziel (pour + infinitif). Das Verb im Infinitiv steht am Ende."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich gehe früh ins Bett, um morgen früh ___. (aufstehen)",
          antworten: ["aufzustehen"],
          regel: "Bei trennbaren Verben steht „zu“ in der Mitte: auf + zu + stehen = aufzustehen."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Du ___ morgen früh aufstehen.",
          optionen: ["willst", "will", "wollt"], richtig: 0,
          regel: "wollen: ich will, du willst, er/sie will, wir wollen, ihr wollt, sie wollen."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ihr ___ heute Pizza essen.",
          antworten: ["wollt"],
          regel: "ihr wollt (nicht: ihr wollen)."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich bin gleich groß ___ mein Bruder.",
          optionen: ["wie", "als"], richtig: 0,
          regel: "gleich + Adjektiv + wie (Gleichheit). Beim Komparativ steht „als“: Ich bin größer als meine Schwester."
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["tröpfeln", "Es regnet ein bisschen."], ["schütten", "Es regnet sehr stark."], ["der Blitz", "Man sieht ihn am Himmel."], ["der Donner", "Man hört ihn nach dem Blitz."]],
          regel: "Das sind Erklärungen auf Deutsch. So kannst du neue Wörter auch selbst erklären."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Das Gegenteil von „abhängig“ ist ...",
          optionen: ["unabhängig", "Unabhängigkeit", "Abhängigkeit"], richtig: 0,
          regel: "un- + Adjektiv = Gegenteil: abhängig → unabhängig. Das Nomen: die Unabhängigkeit."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Der Sturm ist gefährlich. Es gibt eine große ___.",
          antworten: ["Gefahr"],
          regel: "Adjektiv → Nomen: gefährlich → die Gefahr."
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Wir", "stehen", "im", "Stau,", "weil", "es", "stark", "schüttet"],
          loesung: "Wir stehen im Stau, weil es stark schüttet",
          regel: "Nach „weil“ steht das Verb am Ende des Satzes."
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["Ich", "übe", "jeden", "Tag,", "um", "mein", "Deutsch", "zu", "verbessern"],
          loesung: "Ich übe jeden Tag, um mein Deutsch zu verbessern",
          regel: "Vor „um“ steht ein Komma. Am Ende des Satzes stehen „zu“ und der Infinitiv."
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Was machst du, um dein Deutsch zu verbessern? Sprich 4 Sätze mit „um ... zu“. Nimm dich auf und höre dich an.",
          hinweis: "Zum Beispiel: Ich lese viel, um ... zu ... / Ich höre Podcasts, um ... zu ..."
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 5 Sätze über das Wetter und den Verkehr an einem Regentag. Benutze mindestens drei neue Wörter (zum Beispiel Stau, Sturm, Straßenbahn, gefährlich) und einen Satz mit „um ... zu“.",
          checkliste: [
            "Ich habe mindestens drei neue Wörter aus der Stunde benutzt.",
            "Ich habe einen Satz mit „um ... zu“ geschrieben.",
            "Vor „um“ steht ein Komma.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "An einem Regentag nehme ich die Straßenbahn, um nicht im Stau zu stehen. Bei Sturm ist es draußen gefährlich. Manchmal schüttet es sehr stark. Dann bleibe ich lieber zu Hause. Am Abend tröpfelt es nur noch ein bisschen."
        }
      ]
    }
  ]
};

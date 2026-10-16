window.HEFT = {
  vorname: "Michal",
  niveau: "B1",
  modus: "ruhig",
  hilfe: "en",
  stunden: [
    {
      id: "2026-09-09",
      titel: "Wortschatz: Alltag, Arbeit, Meinung",
      vokabeln: [
        { de: "verwenden", en: "to use", fr: "utiliser", beispiel: "Ich möchte Instagram weniger verwenden." },
        { de: "der Anzug", en: "the suit", fr: "le costume", beispiel: "Zur Hochzeit trägt er einen Anzug." },
        { de: "tragen", en: "to wear, to carry", fr: "porter", beispiel: "Ich trage gern ein Poloshirt." },
        { de: "die Auswahl", en: "the choice, the selection", fr: "le choix, la sélection", beispiel: "Im Geschäft gibt es eine große Auswahl." },
        { de: "kündigen", en: "to cancel, to hand in one's notice", fr: "résilier, démissionner", beispiel: "Er kündigt seinen Vertrag." },
        { de: "die Pension", en: "retirement, pension (Austrian German)", fr: "la retraite", beispiel: "Mein Onkel geht bald in Pension." },
        { de: "der Standpunkt", en: "the point of view", fr: "le point de vue", beispiel: "Meinem Standpunkt nach ist Bewegung wichtig." },
        { de: "unendlich", en: "infinite", fr: "infini", beispiel: "Das Universum ist vielleicht unendlich." },
        { de: "mindestens", en: "at least", fr: "au moins", beispiel: "Du solltest mindestens acht Stunden schlafen." },
        { de: "der Anlass", en: "the occasion, the reason", fr: "l'occasion, le motif", beispiel: "Zu diesem Anlass trägt man einen Anzug." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-16",
      titel: "Wortschatz: Gesellschaft, Wirtschaft, Medien",
      vokabeln: [
        { de: "der Bildschirm", en: "the screen", fr: "l'écran", beispiel: "Ich sitze den ganzen Tag vor dem Bildschirm." },
        { de: "die Entwicklung", en: "the development", fr: "le développement", beispiel: "Die Entwicklung der Technik geht schnell." },
        { de: "das Werkzeug", en: "the tool", fr: "l'outil", beispiel: "Ein Hammer ist ein Werkzeug." },
        { de: "die Wahl", en: "the election, the choice", fr: "l'élection, le choix", beispiel: "Die Wahl findet im Herbst statt." },
        { de: "das Privileg", en: "the privilege", fr: "le privilège", beispiel: "Bildung ist ein Privileg." },
        { de: "die Wirtschaft", en: "the economy", fr: "l'économie", beispiel: "Die Wirtschaft wächst." },
        { de: "verlängern", en: "to extend", fr: "prolonger", beispiel: "Ich verlängere meinen Vertrag um ein Jahr." },
        { de: "die Aufmerksamkeit", en: "the attention", fr: "l'attention", beispiel: "Danke für deine Aufmerksamkeit." },
        { de: "die Spende", en: "the donation", fr: "le don", beispiel: "Die Spende hilft Kindern in Not." },
        { de: "einseitig", en: "one-sided", fr: "unilatéral, partial", beispiel: "Der Bericht ist sehr einseitig." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-30",
      titel: "wenn, als, wie · Imperativ · Ordnungszahlen",
      vokabeln: [
        { de: "rostig", en: "rusty", fr: "rouillé", beispiel: "Das Fahrrad ist alt und rostig." },
        { de: "lachen", en: "to laugh", fr: "rire", beispiel: "Wir lachen über den Witz." },
        { de: "sich verbinden", en: "to connect (oneself)", fr: "se connecter", beispiel: "Das Handy verbindet sich mit dem WLAN." },
        { de: "zeigen", en: "to show", fr: "montrer", beispiel: "Der Künstler zeigt seine Bilder." },
        { de: "der Druck", en: "the pressure", fr: "la pression", beispiel: "Er hat viel Druck bei der Arbeit." },
        { de: "unfreundlich", en: "unfriendly", fr: "peu aimable", beispiel: "Der Verkäufer war unfreundlich." },
        { de: "die Wahrheit", en: "the truth", fr: "la vérité", beispiel: "Sag bitte die Wahrheit." },
        { de: "die Lüge", en: "the lie", fr: "le mensonge", beispiel: "Das ist eine Lüge." },
        { de: "wahrscheinlich", en: "probably", fr: "probablement", beispiel: "Morgen regnet es wahrscheinlich." },
        { de: "verzeihen", en: "to forgive", fr: "pardonner", beispiel: "Ich verzeihe dir den Fehler." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Wir treffen uns am ___ Juni.",
          optionen: ["dreißigsten", "dreißigten", "dreißigen"], richtig: 0,
          regel: "Ordnungszahlen: bis 19 mit -te (Ausnahmen: erste, dritte, siebte, achte), ab 20 mit -ste. Nach „am“ kommt -en: am dreißigsten Juni."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Das Eisen wird ___, wenn es regnet.",
          antworten: ["rostig"],
          regel: "der Rost → rostig. Aus Nomen werden Adjektive oft mit -ig."
        },
        {
          typ: "mc", stufe: 2,
          frage: "___ ich Kind war, habe ich oft gelacht.",
          optionen: ["Wenn", "Als", "Wie"], richtig: 1,
          regel: "als = ein Zeitpunkt oder eine Zeit in der Vergangenheit. wenn = Gegenwart, Zukunft oder wiederholt."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich fahre mit dem Rad, ___ es sonnig ist.",
          antworten: ["wenn"],
          regel: "wenn = immer, wenn das passiert (Gegenwart). Im Nebensatz steht das Verb am Ende."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Sie läuft schneller ___ ihr Bruder.",
          optionen: ["als", "wie"], richtig: 0,
          regel: "Komparativ (schneller) → als. Gleichheit (genauso schnell) → wie."
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["Sei leise!", "Du (eine Person)"], ["Seid leise!", "Ihr (mehrere Personen)"], ["Seien Sie leise!", "Sie (höflich, formell)"]],
          regel: "Imperativ von sein: du → sei, ihr → seid, Sie → seien Sie."
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Ich", "verzeihe", "dir", "den", "Fehler"],
          loesung: "Ich verzeihe dir den Fehler",
          regel: "verzeihen: jemandem (Dativ) etwas (Akkusativ): dir den Fehler."
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["freundlich", "die Freundlichkeit"], ["wahrscheinlich", "die Wahrscheinlichkeit"], ["schuldig", "die Schuld"], ["wahr", "die Wahrheit"]],
          regel: "Adjektiv → Nomen: oft -keit (nach -lich, -ig) oder -heit. Bei schuldig fällt -ig weg: die Schuld. Alle Nomen auf -keit und -heit sind feminin."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Welches Wort spricht man mit „ai“ (wie in „Eis“)?",
          optionen: ["bleiben", "Lied", "Wiese"], richtig: 0,
          regel: "ei = „ai“ (bleiben, verzeihen). ie = langes „i“ (Lied, Wiese)."
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Was machst du, wenn das Wetter schön ist? Was machst du, wenn du müde bist? Sprich 4 Sätze mit „wenn“. Nimm dich auf und höre dich an.",
          hinweis: "Zum Beispiel: Wenn ich müde bin, ... / Ich gehe spazieren, wenn ..."
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 5 Sätze über zwei Dinge, die du vergleichst (zum Beispiel zwei Städte, zwei Hobbys oder zwei Sportarten). Benutze „als“, „wie“ und „wenn“.",
          checkliste: [
            "Ich habe einen Komparativ mit „als“ benutzt (größer als ...).",
            "Ich habe „genauso ... wie“ oder „so ... wie“ benutzt.",
            "Ich habe mindestens einen wenn-Satz geschrieben, das Verb steht am Ende.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Fußball ist beliebter als Tennis. Tennis ist aber genauso schwer wie Fußball. Ich schaue gern Fußball, wenn das Wetter schlecht ist. Wenn ich Zeit habe, spiele ich auch selbst. Meine Freunde spielen besser als ich."
        }
      ]
    }
  ]
};

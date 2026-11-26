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
          typ: "mc", stufe: 1,
          frage: "Mein Kollege hat seinen Job ___.",
          optionen: ["gekündigt", "verlängert", "verwendet"],
          richtig: 0,
          regel: "Wiederholung (09.09.): kündigen = to quit (a job)."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Er ___ im Büro immer einen Anzug. (tragen)",
          antworten: ["trägt"],
          regel: "Wiederholung (09.09.): tragen: ich trage, du trägst, er trägt."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich lerne ___ zwei Stunden pro Tag.",
          optionen: ["mindestens", "unendlich", "einseitig"],
          richtig: 0,
          regel: "Wiederholung (09.09.): mindestens = at least."
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["der Bildschirm", "Teil vom Computer, auf dem man das Bild sieht"], ["die Spende", "Geld, das man schenkt, um zu helfen"], ["das Werkzeug", "zum Beispiel ein Hammer"], ["einseitig", "zeigt nur eine Meinung"]],
          regel: "Wiederholung (16.09.): Wörter auf Deutsch erklären."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Kannst du den Vertrag um ein Jahr ___?",
          optionen: ["verlängern", "verwenden", "verlieren"],
          richtig: 0,
          regel: "Wiederholung (16.09.): verlängern = to extend (länger machen)."
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
    },
    {
      id: "2026-11-18",
      titel: "Zelten, Geräusche, Überraschungen · Wortfamilien",
      vokabeln: [
        { de: "das Geräusch", en: "the sound, the noise", fr: "le bruit", beispiel: "Wenn das Auto schnell fährt, gibt es viele Geräusche." },
        { de: "schummeln", en: "to cheat", fr: "tricher", beispiel: "Im Test darf man nicht schummeln." },
        { de: "zelten", en: "to camp (in a tent)", fr: "camper", beispiel: "Ich habe am Wochenende gezeltet." },
        { de: "der Schlafsack", en: "the sleeping bag", fr: "le sac de couchage", beispiel: "Im Zelt schlafe ich in einem warmen Schlafsack." },
        { de: "die Ausrüstung", en: "the equipment", fr: "l'équipement", beispiel: "Für das Zelten braucht man eine gute Ausrüstung." },
        { de: "vorbereitet sein", en: "to be prepared", fr: "être préparé", beispiel: "Ich war für das Wetter sehr gut vorbereitet." },
        { de: "die Überraschung", en: "the surprise", fr: "la surprise", beispiel: "Das Geschenk war eine schöne Überraschung." },
        { de: "besorgt", en: "worried, concerned", fr: "inquiet", beispiel: "Meine Mutter ist besorgt, weil ich krank bin." },
        { de: "grauenvoll", en: "awful, terrible", fr: "épouvantable", beispiel: "Die Internetverbindung ist heute grauenvoll." },
        { de: "anbieten", en: "to offer", fr: "offrir, proposer", beispiel: "Ich biete dir einen Kaffee an." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Am Wochenende habe ich mit Freunden ___.",
          optionen: ["gezeltet", "gezelten", "zeltet"], richtig: 0,
          regel: "zelten ist ein regelmäßiges Verb. Perfekt: haben + ge…t → ich habe gezeltet."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Die Internetverbindung ist ___. Ich höre dich kaum.",
          optionen: ["grauenvoll", "erfolgreich", "vorbereitet"], richtig: 0,
          regel: "grauenvoll = schrecklich = sehr schlimm."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Sprich bitte ___, das Baby schläft.",
          optionen: ["leise", "laut", "besorgt"], richtig: 0,
          regel: "leise = quiet, laut = loud. Das Gegenteil von leise ist laut."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Wenn das Auto schnell fährt, ___ viele Geräusche.",
          optionen: ["gibt es", "es gibt"], richtig: 0,
          regel: "Der wenn-Satz steht auf Position 1. Danach kommt sofort das Verb: Wenn …, gibt es …"
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich war für das Wetter sehr gut ___. (vorbereiten)",
          antworten: ["vorbereitet"],
          regel: "vorbereiten → vorbereitet (ohne ge-, weil „bereiten“ schon die Vorsilbe be- hat)."
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Ich", "biete", "dir", "meine", "Hilfe", "an"],
          loesung: "Ich biete dir meine Hilfe an",
          regel: "anbieten ist trennbar: Das Verb steht auf Position 2, „an“ geht ans Ende."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Dieses ___ fahre ich mit dem Zug, nicht mit dem Auto.",
          antworten: ["Mal"],
          regel: "das Mal = the time (wie oft): dieses Mal, jedes Mal, das erste Mal."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Mein Bruder ___ manchmal beim Kartenspielen. (schummeln)",
          antworten: ["schummelt"],
          regel: "schummeln: ich schumm(e)le, du schummelst, er schummelt."
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["erfolgreich", "der Erfolg"], ["streiten", "der Streit"], ["verbinden", "die Verbindung"], ["überraschend", "die Überraschung"]],
          regel: "Wortfamilien: Nomen auf -ung sind immer feminin (die Verbindung, die Überraschung)."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Im Zelt schläft man meistens in einem ___.",
          optionen: ["Schlafsack", "Rucksack", "Schlafzimmer"], richtig: 0,
          regel: "schlafen + der Sack = der Schlafsack. Bei zusammengesetzten Nomen bestimmt das letzte Wort den Artikel."
        },
        {
          typ: "mc", stufe: 3,
          frage: "Meine Eltern sind ___, weil ich so spät nach Hause komme.",
          optionen: ["besorgt", "erfahren", "erfolgreich"], richtig: 0,
          regel: "besorgt sein = sich Sorgen machen (die Sorge)."
        },
        {
          typ: "mc", stufe: 3,
          frage: "Wir ___ sind nach der Wanderung total erschöpft.",
          optionen: ["beide", "beiden", "beides"], richtig: 0,
          regel: "wir beide / ihr beide, aber mit Artikel: die beiden. „beides“ steht für zwei Sachen (Ich nehme beides)."
        },
        {
          typ: "mc", stufe: 1,
          frage: "___ ich letzten Sommer gezeltet habe, war es in der Nacht sehr kalt.",
          optionen: ["Als", "Wenn", "Wie"], richtig: 0,
          regel: "Wiederholung (30.09.): als = ein Mal in der Vergangenheit, wenn = immer wieder oder Gegenwart/Zukunft."
        },
        {
          typ: "luecke", stufe: 1,
          text: "___ bitte ehrlich und sag die Wahrheit! (sein, du)",
          antworten: ["Sei"],
          regel: "Wiederholung (30.09.): Imperativ von sein: du → sei, ihr → seid, Sie → seien Sie."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Mein Geburtstag ist am ___ Mai.",
          optionen: ["zwanzigsten", "zwanzigten", "zwanzigen"], richtig: 0,
          regel: "Wiederholung (30.09.): Ordnungszahlen ab 20 mit -ste: am zwanzigsten."
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["frei", "die Freiheit"], ["möglich", "die Möglichkeit"], ["krank", "die Krankheit"], ["schwierig", "die Schwierigkeit"]],
          regel: "Wiederholung (30.09.): Adjektiv → Nomen mit -heit oder -keit (nach -lich und -ig meist -keit). Immer feminin."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Die ___ der Technik geht heute sehr schnell.",
          optionen: ["Entwicklung", "Spende", "Wahl"], richtig: 0,
          regel: "Wiederholung (16.09.): die Entwicklung = the development."
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Erzähle von einem Ausflug oder einer Nacht draußen (zum Beispiel Zelten). Was hattest du dabei? Warst du gut vorbereitet? Was war überraschend? Sprich 5–6 Sätze im Perfekt. Nimm dich auf und höre dich an.",
          hinweis: "Zum Beispiel: Ich habe einmal am See gezeltet. Ich hatte einen Schlafsack dabei ... In der Nacht habe ich viele Geräusche gehört ..."
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 5–6 Sätze über ein Erlebnis draußen (Zelten, Wandern, Reise). Benutze mindestens drei neue Wörter aus dieser Stunde.",
          checkliste: [
            "Ich habe im Perfekt erzählt (habe gezeltet, bin gefahren ...).",
            "Ich habe mindestens drei Wörter aus der Stunde benutzt (Geräusch, Ausrüstung, vorbereitet, Überraschung ...).",
            "Ich habe einen wenn- oder als-Satz geschrieben und danach das Verb an Position 1 gestellt.",
            "Nomen schreibe ich groß, jeder Satz endet mit einem Punkt."
          ],
          muster: "Letzten Sommer habe ich mit Freunden am See gezeltet. Wir waren gut vorbereitet und hatten eine gute Ausrüstung: ein großes Zelt, warme Schlafsäcke und viel Essen. In der Nacht haben wir viele Geräusche gehört, das war ein bisschen grauenvoll. Als wir am Morgen aufgewacht sind, gab es eine Überraschung: Die Sonne schien und der See war ganz ruhig. Wenn ich wieder zelte, nehme ich eine noch wärmere Jacke mit."
        }
      ]
    }
  ]
};

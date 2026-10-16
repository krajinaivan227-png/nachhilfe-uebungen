window.HEFT = {
  vorname: "Hasna",
  niveau: "B2",
  modus: "ruhig",
  hilfe: "en",
  stunden: [
    {
      id: "2026-09-13",
      titel: "Wortschatz: Ereignisse, Genitiv-Präpositionen",
      vokabeln: [
        { de: "ausbrechen", en: "to erupt, to break out", fr: "éclater, entrer en éruption", beispiel: "Der Vulkan ist gestern ausgebrochen." },
        { de: "das Erdbeben", en: "the earthquake", fr: "le tremblement de terre", beispiel: "Das Erdbeben war sehr stark." },
        { de: "jemanden betreffen", en: "to affect someone", fr: "concerner quelqu'un", beispiel: "Der Unfall hat viele Menschen betroffen." },
        { de: "wegen (+ Genitiv)", en: "because of", fr: "à cause de", beispiel: "Wegen des Unfalls gab es einen Stau." },
        { de: "während (+ Genitiv)", en: "during", fr: "pendant", beispiel: "Während der Stunde haben wir viel gesprochen." },
        { de: "festsitzen", en: "to be stuck", fr: "être bloqué", beispiel: "Wegen des Schnees sitzen wir fest." },
        { de: "das Ergebnis", en: "the result", fr: "le résultat", beispiel: "Ich bin mit dem Ergebnis zufrieden." },
        { de: "die Flöte", en: "the flute", fr: "la flûte", beispiel: "Sie spielt Flöte." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-19",
      titel: "Wortschatz: Verkehr, Gegensätze, Einfluss",
      vokabeln: [
        { de: "stetig", en: "steady, constant", fr: "constant, régulier", beispiel: "Die Zahl der Besucher steigt stetig." },
        { de: "das Gleis", en: "the track (also: the platform number)", fr: "la voie", beispiel: "Der Zug fährt auf Gleis drei ab." },
        { de: "einerseits … andererseits", en: "on the one hand … on the other hand", fr: "d'une part … d'autre part", beispiel: "Einerseits ist die Stadt laut, andererseits ist sie sehr lebendig." },
        { de: "jemandem zufolge", en: "according to", fr: "selon", beispiel: "Der Zeitung zufolge regnet es morgen." },
        { de: "etwas lahmlegen", en: "to bring something to a standstill", fr: "paralyser quelque chose", beispiel: "Der Unfall hat den Verkehr lahmgelegt." },
        { de: "plötzlich / schlagartig", en: "suddenly, abruptly", fr: "soudain, brusquement", beispiel: "Plötzlich war es dunkel." },
        { de: "prägen", en: "to shape, to leave a mark on", fr: "façonner, marquer", beispiel: "Hochhäuser prägen das Stadtbild von New York." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-27",
      titel: "Wortschatz: Fähigkeiten, Regen, Konjunktiv II der Vergangenheit",
      vokabeln: [
        { de: "aufweisen (+ Akkusativ)", en: "to show, to have (characteristics)", fr: "présenter, comporter", beispiel: "Das Gebäude weist einige Schäden auf." },
        { de: "die Fertigkeit", en: "the skill", fr: "la compétence", beispiel: "Backen ist eine wichtige Fertigkeit." },
        { de: "über etwas verfügen (+ Akkusativ)", en: "to have something at one's disposal, to possess", fr: "disposer de quelque chose", beispiel: "Die Schule verfügt über moderne Computer." },
        { de: "zahlreich", en: "numerous", fr: "nombreux", beispiel: "Zahlreiche Gäste sind gekommen." },
        { de: "sich bemühen", en: "to make an effort", fr: "s'efforcer, faire des efforts", beispiel: "Ich bemühe mich, pünktlich zu sein." },
        { de: "die Mühe", en: "the effort, the trouble", fr: "la peine, l'effort", beispiel: "Das war viel Mühe." },
        { de: "sofern", en: "provided that, if", fr: "pour autant que, si", beispiel: "Ich helfe dir, sofern ich Zeit habe." },
        { de: "tröpfeln", en: "to drizzle", fr: "bruiner", beispiel: "Es tröpfelt nur ein bisschen." },
        { de: "schütten", en: "to pour (heavy rain)", fr: "pleuvoir à verse", beispiel: "Gestern Abend hat es stark geschüttet." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Es regnet nur ganz leicht. Welches Verb passt?",
          optionen: ["Es tröpfelt.", "Es schüttet."], richtig: 0,
          regel: "tröpfeln = leichter Regen, schütten = sehr starker Regen."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Die Schule verfügt ___ moderne Computer.",
          optionen: ["über", "auf", "für"], richtig: 0,
          regel: "etwas besitzen = über etwas verfügen (+ Akkusativ)."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Der Text weist mehrere Fehler ___.",
          antworten: ["auf"],
          regel: "aufweisen ist trennbar: er weist auf, sie weisen auf."
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["aufweisen", "Eigenschaften haben"], ["über etwas verfügen", "etwas besitzen, zur Verfügung haben"], ["sich bemühen", "sich anstrengen"], ["zahlreich", "sehr viele"]],
          regel: "Die Wörter links lassen sich mit einfacheren Wörtern erklären. Das hilft beim Sprechen."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Hätte ich mich mehr für die Prüfung ___, hätte ich eine bessere Note bekommen.",
          antworten: ["bemüht"],
          regel: "sich bemühen → Partizip II: bemüht (kein ge-, weil be- am Anfang steht)."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich helfe dir gern, ___ ich Zeit habe.",
          antworten: ["sofern", "wenn", "falls"],
          regel: "sofern = wenn / falls: eine Bedingung. Im Nebensatz steht das Verb am Ende."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Hätte ich mehr Zeit gehabt, ___ ich gekommen.",
          optionen: ["wäre", "hätte", "würde"], richtig: 0,
          regel: "Konjunktiv II der Vergangenheit: kommen bildet das Perfekt mit „sein“ (ich bin gekommen), also: wäre gekommen."
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["Hätte", "ich", "mich", "mehr", "bemüht,", "wäre", "das", "Ergebnis", "besser", "gewesen"],
          loesung: "Hätte ich mich mehr bemüht, wäre das Ergebnis besser gewesen",
          regel: "Der Bedingungssatz ohne „wenn“ beginnt mit dem Verb (Hätte ich …). Danach folgt der Hauptsatz: wäre … gewesen."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Der Zeitung ___ soll es morgen regnen.",
          antworten: ["zufolge"],
          regel: "zufolge steht nach dem Nomen und verlangt den Dativ: der Zeitung zufolge. (Wiederholung)"
        },
        {
          typ: "mc", stufe: 2,
          frage: "Wegen ___ Unfalls wurde die Straße gesperrt.",
          optionen: ["des", "dem", "der"], richtig: 0,
          regel: "wegen + Genitiv: der Unfall → wegen des Unfalls. In der Umgangssprache hört man oft den Dativ, in der Schriftsprache gilt der Genitiv. (Wiederholung)"
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Was würdest du heute anders machen, wenn du die Zeit zurückdrehen könntest? Sprich 4 Sätze im Konjunktiv II der Vergangenheit. Nimm dich auf und höre dich an.",
          hinweis: "Zum Beispiel: Hätte ich mich mehr bemüht, hätte ich ... / Wäre ich früher ..., wäre ich ... / An meiner Stelle hätte jeder ..."
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 5 Sätze über Fähigkeiten und Ziele. Benutze „aufweisen“, „über etwas verfügen“, „sich bemühen“, „sofern“ und einen Satz mit „Hätte ich …“.",
          checkliste: [
            "Ich habe „über etwas verfügen“ mit dem Akkusativ benutzt.",
            "Ich habe „sofern“ benutzt und das Verb steht am Ende des Nebensatzes.",
            "Ich habe einen Satz mit „Hätte ich …, hätte/wäre ich …“ geschrieben.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Ich verfüge über gute Kochkenntnisse. Meine Schwester weist zahlreiche Talente auf. Sofern ich Zeit habe, helfe ich anderen gern. Hätte ich mich früher bemüht, hätte ich mehr gelernt. Ich bemühe mich, jeden Tag etwas Neues zu lernen."
        }
      ]
    }
  ]
};

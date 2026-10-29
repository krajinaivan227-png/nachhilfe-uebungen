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
    },
    {
      id: "2026-10-03",
      titel: "Konjunktiv I, ärgerlich oder verärgert",
      vokabeln: [
        { de: "die Fertigkeit", en: "the skill", fr: "la compétence", beispiel: "Der Beruf erwartet viele Fertigkeiten." },
        { de: "die Fähigkeit", en: "the ability", fr: "la capacité", beispiel: "Sie hat die Fähigkeit, gut zuzuhören." },
        { de: "ärgerlich", en: "annoying", fr: "agaçant", beispiel: "Die Situation ist ärgerlich." },
        { de: "aufgebracht", en: "upset, angry", fr: "fâché, en colère", beispiel: "Der Chef war sehr aufgebracht." },
        { de: "jemanden feuern", en: "to fire someone", fr: "virer qn", beispiel: "Die Firma hat ihn gefeuert." },
        { de: "vorliegen", en: "to exist, to be present", fr: "exister, être présent", beispiel: "Es liegt ein Fehler vor." },
        { de: "etwas einstufen", en: "to classify sth", fr: "classer qc", beispiel: "Die Pandemie wurde als globale Krise eingestuft." },
        { de: "etwas nachweisen", en: "to prove sth", fr: "prouver qc", beispiel: "Man kann den Fehler nachweisen." },
        { de: "der Nachweis", en: "the proof", fr: "la preuve", beispiel: "Wir brauchen einen schriftlichen Nachweis." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Die Situation ist ___.",
          optionen: ["ärgerlich", "verärgert"], richtig: 0,
          regel: "ärgerlich = eine Sache macht Ärger. verärgert = eine Person ist böse."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Der Chef ist ___.",
          optionen: ["verärgert", "ärgerlich"], richtig: 0,
          regel: "Eine Person ist verärgert (= aufgebracht)."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Sie sagte, dass der Beruf viele Fertigkeiten ___. (erwarten, Konjunktiv I)",
          antworten: ["erwarte"],
          regel: "Konjunktiv I: er/sie/es erwarte (Stamm + -e)."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Er sagt, er ___ keine Zeit. (haben, Konjunktiv I)",
          antworten: ["habe"],
          regel: "haben im Konjunktiv I: er habe."
        },
        {
          typ: "luecke", stufe: 3,
          text: "Sie sagte, sie ___ krank. (sein, Konjunktiv I)",
          antworten: ["sei"],
          regel: "sein im Konjunktiv I: ich sei, du seist, er/sie sei."
        },
        {
          typ: "mc", stufe: 2,
          frage: "In diesem Bericht ___ ein Fehler vor.",
          optionen: ["liegt", "gibt", "ist"], richtig: 0,
          regel: "vorliegen (trennbar): Es liegt ein Fehler vor. Formell für: Es gibt einen Fehler."
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Die", "Pandemie", "wurde", "als", "globale", "Krise", "eingestuft"],
          loesung: "Die Pandemie wurde als globale Krise eingestuft",
          regel: "Passiv Präteritum: wurde + Partizip am Ende. einstufen als + Akkusativ."
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["der Nachweis", "the proof"], ["die Fertigkeit", "the skill"], ["aufgebracht", "upset"], ["einstufen", "to classify"]],
          regel: "Neue Wörter der Stunde."
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Indirekte Rede: Gib 4 Aussagen einer Kollegin im Konjunktiv I wieder.",
          checkliste: [
            "Ich habe mit „Sie sagte, …“ oder „Sie meinte, …“ begonnen.",
            "Ich habe Konjunktiv I benutzt (sei, habe, komme …).",
            "Ich habe die Pronomen angepasst (ich → sie).",
            "Im dass-Satz steht das Verb am Ende."
          ],
          muster: "Meine Kollegin sagte, sie habe heute viel Arbeit. Sie sagte, der Chef sei aufgebracht. Sie meinte, das Projekt brauche mehr Zeit. Sie sagte, dass sie morgen später komme."
        }
      ]
    },
    {
      id: "2026-10-11",
      titel: "geschehen, sich ereignen, stürzen",
      vokabeln: [
        { de: "üblich", en: "usual, common", fr: "habituel", beispiel: "Erdbeben sind in manchen Ländern üblich." },
        { de: "unüblich", en: "unusual", fr: "inhabituel", beispiel: "Schnee im Mai ist unüblich." },
        { de: "geschehen (ist geschehen)", en: "to happen", fr: "se produire", beispiel: "Gestern ist ein Unfall geschehen." },
        { de: "sich ereignen (hat sich ereignet)", en: "to occur", fr: "avoir lieu, se produire", beispiel: "Am Freitag hat sich ein Missverständnis ereignet." },
        { de: "das Ereignis", en: "the event", fr: "l'événement", beispiel: "Das war ein wichtiges Ereignis." },
        { de: "der Sturz", en: "the fall", fr: "la chute", beispiel: "Nach dem Sturz ging sie zum Arzt." },
        { de: "stürzen (ist gestürzt)", en: "to fall", fr: "tomber", beispiel: "Sie ist vom Fahrrad gestürzt." },
        { de: "jener, jene, jenes", en: "that (one)", fr: "celui-là, celle-là", beispiel: "Dieses Haus ist neu, jenes ist alt." },
        { de: "ausrücken", en: "to turn out (emergency services)", fr: "partir en intervention", beispiel: "Die Feuerwehr rückt aus." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Gestern ___ ein Unfall geschehen.",
          optionen: ["ist", "hat"], richtig: 0,
          regel: "geschehen und passieren: Perfekt mit sein."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Am Freitag ___ sich ein Missverständnis ereignet.",
          optionen: ["hat", "ist"], richtig: 0,
          regel: "sich ereignen ist reflexiv → Perfekt mit haben."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Schnee im Mai ist nicht normal, er ist ___.",
          antworten: ["unüblich", "ungewöhnlich"],
          regel: "üblich ↔ unüblich (= ungewöhnlich)."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Sie ___ vom Fahrrad gestürzt.",
          optionen: ["ist", "hat"], richtig: 0,
          regel: "stürzen (= fallen): Perfekt mit sein."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Dieses Buch kenne ich, aber ___ Buch dort nicht.",
          antworten: ["jenes"],
          regel: "dieser/diese/dieses ↔ jener/jene/jenes (gleiche Endungen)."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Es brennt! Die Feuerwehr rückt ___.",
          antworten: ["aus"],
          regel: "ausrücken ist trennbar: Die Feuerwehr rückt aus."
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["das Ereignis", "the event"], ["der Sturz", "the fall"], ["ausrücken", "to turn out"], ["üblich", "usual"]],
          regel: "Neue Wörter der Stunde."
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe einen kurzen Bericht (5 Sätze) über ein Ereignis in einer Stadt. Benutze geschehen, sich ereignen und ausrücken.",
          checkliste: [
            "Ich habe das Perfekt mit sein (geschehen, stürzen, ausrücken) richtig benutzt.",
            "Ich habe sich ereignen mit haben benutzt.",
            "Ich habe mindestens ein Wort mit üblich/unüblich benutzt.",
            "Das Verb steht auf Position 2."
          ],
          muster: "Gestern hat sich in der Innenstadt ein Unfall ereignet. Ein Radfahrer ist auf der nassen Straße gestürzt. Kurz danach ist die Rettung ausgerückt. Zum Glück ist nichts Schlimmes geschehen. Solche Unfälle sind bei Regen leider üblich."
        }
      ]
    },
    {
      id: "2026-10-23",
      titel: "Gesellschaft, Druck ausüben, samt + Dativ",
      vokabeln: [
        { de: "die Gesellschaft", en: "society", fr: "la société", beispiel: "Die Gesellschaft verändert sich schnell." },
        { de: "Druck auf jemanden ausüben", en: "to put pressure on sb", fr: "faire pression sur qn", beispiel: "Die Gesellschaft übt Druck auf junge Menschen aus." },
        { de: "die Wahrnehmung", en: "perception", fr: "la perception", beispiel: "Die Wahrnehmung der Arbeitskultur ist unterschiedlich." },
        { de: "zerstören", en: "to destroy", fr: "détruire", beispiel: "Der Sturm hat das Dach zerstört." },
        { de: "die Zerstörung", en: "destruction", fr: "la destruction", beispiel: "Wir müssen die Zerstörung der Natur vermeiden." },
        { de: "vermeiden", en: "to avoid", fr: "éviter", beispiel: "Ich vermeide Stress am Abend." },
        { de: "wertschätzen", en: "to value", fr: "apprécier, valoriser", beispiel: "Ich schätze deine Hilfe sehr wert." },
        { de: "aufbrechen (ist aufgebrochen)", en: "to set off", fr: "partir", beispiel: "Wir sind früh zu unserem Roadtrip aufgebrochen." },
        { de: "samt (+ Dativ)", en: "together with", fr: "avec, y compris", beispiel: "Das Haus wurde samt dem Garten verkauft." }
      ],
      aufgaben: [
        {
          typ: "luecke", stufe: 1,
          text: "Jede Woche finden unsere üblichen Vorlesungen ___.",
          antworten: ["statt"],
          regel: "stattfinden ist trennbar: Die Vorlesungen finden statt."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Die Gesellschaft übt Druck ___ junge Menschen aus.",
          optionen: ["auf", "an", "über"], richtig: 0,
          regel: "Druck auf jemanden (Akkusativ) ausüben."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Wir müssen die ___ unserer Erde vermeiden. (zerstören → Nomen)",
          antworten: ["Zerstörung"],
          regel: "Verb + -ung = Nomen (feminin): zerstören → die Zerstörung."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Wir sind zu unserem Roadtrip ___.",
          optionen: ["aufgebrochen", "aufgebracht", "aufgebrecht"], richtig: 0,
          regel: "aufbrechen – brach auf – ist aufgebrochen. Achtung: aufgebracht = verärgert."
        },
        {
          typ: "mc", stufe: 3,
          frage: "Das Haus wurde samt ___ Garten verkauft.",
          optionen: ["dem", "des", "den"], richtig: 0,
          regel: "samt + Dativ: der Garten → samt dem Garten."
        },
        {
          typ: "luecke", stufe: 3,
          text: "Wir müssen die Aussagen ___ Wissenschaftler viel mehr wertschätzen.",
          antworten: ["der"],
          regel: "Genitiv Plural: die Wissenschaftler → die Aussagen der Wissenschaftler."
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["die Wahrnehmung", "perception"], ["vermeiden", "to avoid"], ["wertschätzen", "to value"], ["aufbrechen", "to set off"]],
          regel: "Neue Wörter der Stunde."
        },
        {
          typ: "sprechen", stufe: 3,
          auftrag: "Welchen Druck übt die Gesellschaft in deinem Land auf junge Menschen aus? Sprich 1–2 Minuten. Nimm dich auf und höre dich an.",
          hinweis: "Benutze: Druck ausüben auf, die Wahrnehmung, unterschiedlich, wertschätzen, vermeiden."
        }
      ]
    }
  ]
};

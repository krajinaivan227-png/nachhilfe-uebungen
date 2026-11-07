window.HEFT = {
  vorname: "Theo",
  niveau: "A2",
  modus: "ruhig",
  hilfe: "fr",
  stunden: [
    {
      id: "2026-10-25",
      titel: "Wissenschaft, Arbeit, Leben",
      vokabeln: [
        { de: "die Wissenschaft", en: "the science", fr: "la science", beispiel: "Ich liebe wissenschaftliche Kurse." },
        { de: "der Durchschnitt", en: "the average", fr: "la moyenne", beispiel: "Der Durchschnitt von meiner Klasse ist gut." },
        { de: "das Gehalt", en: "the salary", fr: "le salaire", beispiel: "Mein Gehalt ist nicht so schlecht." },
        { de: "gründen", en: "to found, to start", fr: "fonder", beispiel: "Ich will eine Familie gründen." },
        { de: "übersetzen", en: "to translate", fr: "traduire", beispiel: "Ich übersetze mit DeepL." },
        { de: "ruhig", en: "calm, quiet", fr: "calme", beispiel: "Es ist ruhig im Dorf." },
        { de: "das Dorf", en: "the village", fr: "le village", beispiel: "Ich lebe nicht in einer Stadt, sondern in einem Dorf." },
        { de: "mögen", en: "to like", fr: "aimer (bien)", beispiel: "Ich mag Autos." }
      ],
      aufgaben: []
    },
    {
      id: "2026-10-27",
      titel: "Tiere, Verkehr, Gesundheit",
      vokabeln: [
        { de: "füttern", en: "to feed", fr: "nourrir", beispiel: "Wir haben die Tiere gefüttert." },
        { de: "die Süßigkeiten", en: "the sweets", fr: "les bonbons, les sucreries", beispiel: "Kinder lieben Süßigkeiten." },
        { de: "gefährlich", en: "dangerous", fr: "dangereux", beispiel: "Es ist gefährlich, im Dorf schnell zu fahren." },
        { de: "auf etwas aufpassen", en: "to watch out for something", fr: "faire attention à qc", beispiel: "Ich passe auf meine Gesundheit auf." },
        { de: "die Nerven verlieren", en: "to lose one's nerve", fr: "perdre ses nerfs", beispiel: "Im Stau verliere ich meine Nerven." },
        { de: "schmutzig", en: "dirty", fr: "sale", beispiel: "Meine Schuhe sind schmutzig." },
        { de: "die Freiheit", en: "the freedom", fr: "la liberté", beispiel: "Freiheit ist sehr wichtig." },
        { de: "die Gewalt", en: "the violence", fr: "la violence", beispiel: "Ich hasse Gewalt." },
        { de: "deswegen", en: "that's why", fr: "c'est pourquoi", beispiel: "Es gibt Stau, deswegen komme ich zu spät." }
      ],
      aufgaben: []
    },
    {
      id: "2026-11-01",
      titel: "wann/wenn, je … desto, allerdings",
      vokabeln: [
        { de: "trocken", en: "dry", fr: "sec", beispiel: "Der Sommer war sehr trocken." },
        { de: "sich entspannen", en: "to relax", fr: "se détendre", beispiel: "Am Wochenende entspanne ich mich." },
        { de: "der Schnee", en: "the snow", fr: "la neige", beispiel: "Ich mag den Schnee im Winter." },
        { de: "kündigen", en: "to quit (a job)", fr: "démissionner", beispiel: "Mein Kollege hat gekündigt." },
        { de: "die Wohngemeinschaft (WG)", en: "the shared flat", fr: "la colocation", beispiel: "Ich hatte eine WG mit anderen Studenten." },
        { de: "die Entscheidung", en: "the decision", fr: "la décision", beispiel: "Das war eine gute Entscheidung." },
        { de: "zufrieden", en: "satisfied, content", fr: "content, satisfait", beispiel: "Ich bin zufrieden, wenn es schneit." },
        { de: "einschätzen", en: "to assess", fr: "estimer, évaluer", beispiel: "Ich schätze die Bilanzen gut ein." },
        { de: "zunehmen", en: "to increase", fr: "augmenter", beispiel: "Die Benzinkosten nehmen zu." },
        { de: "mieten", en: "to rent", fr: "louer", beispiel: "Ich miete ein Zimmer in einer WG." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "___ es schneit, bin ich zufrieden.",
          optionen: ["Wenn", "Wann", "Als"], richtig: 0,
          regel: "wenn = quand/si in einem Nebensatz (Verb am Ende). wann = Fragewort.",
          uebers: { fr: "Choisis le bon mot." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "___ fährst du in die Schweiz?",
          optionen: ["Wann", "Wenn", "Ob"], richtig: 0,
          regel: "Eine Frage nach der Zeit beginnt mit wann: Wann fährst du …?",
          uebers: { fr: "Choisis le bon mot pour poser la question « quand ? »." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Welcher Artikel? ___ Organisation",
          optionen: ["die", "der", "das"], richtig: 0,
          regel: "Wörter auf -tion sind immer feminin: die Organisation, die Information.",
          uebers: { fr: "Choisis le bon article." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Mein Kollege hat letzte Woche ___. (kündigen)",
          antworten: ["gekündigt"],
          regel: "Perfekt: haben + Partizip II. kündigen → hat gekündigt.",
          uebers: { fr: "Complète avec le participe passé de « kündigen »." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["die WG", "Man wohnt mit anderen Leuten zusammen."], ["kündigen", "Man beendet selbst seine Arbeit."], ["mieten", "Man zahlt jeden Monat für eine Wohnung."], ["der Schnee", "Er ist weiß und kommt im Winter."]],
          regel: "So kannst du neue Wörter auf Deutsch erklären.",
          uebers: { fr: "Associe chaque mot à son explication en allemand." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Je jünger du bist, ___ glücklicher bist du.",
          antworten: ["desto"],
          regel: "je + Komparativ …, desto + Komparativ … = plus …, plus …",
          uebers: { fr: "Complète : « plus … plus … »." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Die Benzinkosten ___ jedes Jahr zu. (zunehmen)",
          antworten: ["nehmen"],
          regel: "zunehmen ist trennbar: Die Kosten nehmen zu. „zu“ steht am Ende.",
          uebers: { fr: "Conjugue « zunehmen » (verbe séparable)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Gestern ___ viel Stau auf der Autobahn.",
          optionen: ["gab es", "gibt es", "es gab"], richtig: 0,
          regel: "Vergangenheit von es gibt = es gab. Gestern steht vorne, also Verb auf Position 2: Gestern gab es …",
          uebers: { fr: "Choisis la bonne forme (« il y avait »)." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Allerdings", "mag", "ich", "auch", "die", "Sonne"],
          loesung: "Allerdings mag ich auch die Sonne",
          regel: "Steht allerdings vorne, kommt das Verb direkt danach (Inversion): Allerdings mag ich …",
          uebers: { fr: "Mets les mots dans le bon ordre. Après « allerdings », le verbe vient tout de suite." }
        },
        {
          typ: "luecke", stufe: 3,
          text: "Wenn es Schnee gibt, ___ ich beim Fahren gut auf. (aufpassen)",
          antworten: ["passe"],
          regel: "Nach dem wenn-Satz kommt sofort das Verb. aufpassen ist trennbar: ich passe … auf.",
          uebers: { fr: "Conjugue « aufpassen ». Après la phrase avec « wenn », le verbe vient en premier." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich lebe nicht in einer Stadt, ___ in einem Dorf.",
          optionen: ["sondern", "aber", "oder"], richtig: 0,
          regel: "Wiederholung (25.10.): nicht …, sondern … = pas …, mais … (Korrektur). aber passt hier nicht.",
          uebers: { fr: "Choisis le bon mot (« pas …, mais … »)." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Du ___ Autos, oder? (mögen)",
          antworten: ["magst"],
          regel: "Wiederholung (25.10.): ich mag, du magst, er/sie mag, wir mögen, ihr mögt, sie mögen.",
          uebers: { fr: "Conjugue « mögen » (du)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Es ist ___, im Dorf zu schnell zu fahren.",
          optionen: ["gefährlich", "schmutzig", "trocken"], richtig: 0,
          regel: "Wiederholung (27.10.): gefährlich = dangereux, die Gefahr = le danger.",
          uebers: { fr: "Choisis l'adjectif qui convient." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["das Gehalt", "Geld, das man für die Arbeit bekommt"], ["füttern", "Tieren Essen geben"], ["die Nichte", "die Tochter von meinem Bruder"], ["übersetzen", "einen Text in eine andere Sprache bringen"]],
          regel: "Wiederholung (22.10., 25.10., 27.10.): Wörter auf Deutsch erklären.",
          uebers: { fr: "Associe chaque mot à son explication en allemand." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Deswegen", "komme", "ich", "zu", "spät"],
          loesung: "Deswegen komme ich zu spät",
          regel: "Wiederholung (27.10.): Nach deswegen kommt sofort das Verb, wie bei allerdings.",
          uebers: { fr: "Mets les mots dans le bon ordre. Après « deswegen », le verbe vient tout de suite." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Er ___ mich zu seiner Party ein. (einladen)",
          antworten: ["lädt"],
          regel: "Wiederholung (20.10.): einladen ist trennbar und hat einen Umlaut: du lädst ein, er lädt ein.",
          uebers: { fr: "Conjugue « einladen » (er). Attention à l'umlaut !" }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Lebst du lieber in der Stadt oder auf dem Land? Sprich 4 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "Auf dem Land ist es ruhig. / In der Stadt gibt es … / Allerdings … / Für mich war das eine gute Entscheidung.",
          uebers: { fr: "Tu préfères vivre en ville ou à la campagne ? Dis 4 phrases. Enregistre-toi et écoute-toi." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Winter oder Sommer? Schreibe 4–5 Sätze. Benutze „wenn“, „je … desto“ und „allerdings“.",
          checkliste: [
            "Ich habe einen Satz mit wenn geschrieben (Verb am Ende).",
            "Ich habe je … desto benutzt.",
            "Nach allerdings steht das Verb direkt danach.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          uebers: { fr: "Hiver ou été ? Écris 4–5 phrases avec « wenn », « je … desto » et « allerdings »." }
        }
      ]
    },
    {
      id: "2026-11-05",
      titel: "um … zu, wollen, sauber und schmutzig",
      vokabeln: [
        { de: "der Kühlschrank", en: "the fridge", fr: "le réfrigérateur, le frigo", beispiel: "Die Milch steht im Kühlschrank." },
        { de: "der Gefrierschrank", en: "the freezer", fr: "le congélateur", beispiel: "Ich lege den Fisch in den Gefrierschrank." },
        { de: "hinaufgehen", en: "to go up", fr: "monter", beispiel: "Ich gehe hinauf, um zu arbeiten." },
        { de: "hinuntergehen", en: "to go down", fr: "descendre", beispiel: "Wir gehen in den Keller hinunter." },
        { de: "sauber", en: "clean", fr: "propre", beispiel: "Dörfer sind oft sauberer als Städte." },
        { de: "der Schmutz", en: "the dirt", fr: "la saleté", beispiel: "Nach dem Fußball sind die Schuhe voller Schmutz." },
        { de: "der Körper", en: "the body", fr: "le corps", beispiel: "Sport ist gut für den Körper." },
        { de: "körperlich", en: "physical", fr: "physique", beispiel: "Ich mag körperliche Aktivität ein- oder zweimal pro Woche." },
        { de: "lösen", en: "to solve", fr: "résoudre", beispiel: "Wir können das Problem zusammen lösen." },
        { de: "die Lösung", en: "the solution", fr: "la solution", beispiel: "Wir wollen eine Lösung finden." }
      ],
      aufgaben: [
        {
          typ: "zuordnen", stufe: 1,
          paare: [["der Kühlschrank", "Dort bleibt die Milch kalt."], ["der Gefrierschrank", "Dort ist es unter null Grad, zum Beispiel für Eis."], ["der Körper", "Kopf, Arme, Beine …"], ["die Lösung", "die Antwort auf ein Problem"]],
          regel: "So kannst du neue Wörter auf Deutsch erklären.",
          uebers: { fr: "Associe chaque mot à son explication en allemand." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Du ___ heute ins Kino gehen, oder? (wollen)",
          antworten: ["willst"],
          regel: "wollen: ich will, du willst, er/sie will, wir wollen, ihr wollt, sie wollen.",
          uebers: { fr: "Conjugue « wollen » (du)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ihr ___ Pizza essen, richtig?",
          optionen: ["wollt", "willst", "wollen"], richtig: 0,
          regel: "ihr wollt – wie ihr könnt, ihr müsst.",
          uebers: { fr: "Choisis la bonne forme de « wollen » (ihr)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich kaufe ein, ___ heute Abend Fleisch zu essen.",
          optionen: ["um", "für", "weil"], richtig: 0,
          regel: "um … zu + Infinitiv = pour (+ infinitif). Der Infinitiv mit zu steht am Ende.",
          uebers: { fr: "Choisis le bon mot (« pour » + infinitif)." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich gehe in die Küche, um etwas ___ trinken.",
          antworten: ["zu"],
          regel: "um … zu: Vor dem Infinitiv am Ende steht zu.",
          uebers: { fr: "Complète : « pour boire quelque chose »." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Ich", "gehe", "hinauf,", "um", "zu", "arbeiten"],
          loesung: "Ich gehe hinauf, um zu arbeiten",
          regel: "Erst der Hauptsatz, dann Komma, dann um … zu + Infinitiv.",
          uebers: { fr: "Mets les mots dans le bon ordre." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Dörfer sind oft ___ als Städte.",
          optionen: ["sauberer", "sauber", "am saubersten"], richtig: 0,
          regel: "Vergleich mit als: Komparativ mit -er (sauber → sauberer als).",
          uebers: { fr: "Choisis le comparatif (« plus propre que »)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "lösen → das Nomen heißt ___",
          optionen: ["die Lösung", "der Lös", "das Lösen"], richtig: 0,
          regel: "Verb → Nomen mit -ung, immer feminin: lösen → die Lösung, wohnen → die Wohnung.",
          uebers: { fr: "Quel est le nom qui vient du verbe « lösen » ?" }
        },
        {
          typ: "luecke", stufe: 2,
          text: "sauber → die ___",
          antworten: ["Sauberkeit"],
          regel: "Adjektiv + -keit → Nomen, immer feminin: sauber → die Sauberkeit, möglich → die Möglichkeit.",
          uebers: { fr: "Forme le nom (« la propreté »)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich lege den Fisch in ___ Gefrierschrank.",
          optionen: ["den", "dem", "der"], richtig: 0,
          regel: "Wohin? → in + Akkusativ: in den Gefrierschrank. Wo? → in + Dativ: im Gefrierschrank.",
          uebers: { fr: "Choisis le bon article (« où ? » avec mouvement → accusatif)." }
        },
        {
          typ: "mc", stufe: 3,
          frage: "Ich mache gern ___ Arbeit, zum Beispiel im Garten.",
          optionen: ["körperliche", "körperlich", "körperlichen"], richtig: 0,
          regel: "Adjektiv vor einem Nomen bekommt eine Endung: die Arbeit → körperliche Arbeit (ohne Artikel).",
          uebers: { fr: "Choisis la bonne terminaison de l'adjectif." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "___ es regnet, bleibe ich zu Hause.",
          optionen: ["Wenn", "Wann", "Als"], richtig: 0,
          regel: "Wiederholung (01.11.): wenn = quand/si (Nebensatz, Verb am Ende). wann = Fragewort.",
          uebers: { fr: "Choisis le bon mot." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Je mehr ich lerne, ___ besser spreche ich.",
          antworten: ["desto"],
          regel: "Wiederholung (01.11.): je + Komparativ …, desto + Komparativ … = plus …, plus …",
          uebers: { fr: "Complète : « plus …, plus … »." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich ___ ein Zimmer in einer WG. (mieten)",
          antworten: ["miete"],
          regel: "Wiederholung (01.11.): mieten = louer. ich miete, du mietest, er mietet.",
          uebers: { fr: "Conjugue « mieten » (ich)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Meine Schuhe sind ___. Ich muss sie putzen.",
          optionen: ["schmutzig", "trocken", "ruhig"], richtig: 0,
          regel: "Wiederholung (27.10.): schmutzig = sale, das Gegenteil ist sauber.",
          uebers: { fr: "Choisis l'adjectif qui convient." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich wohne in einem kleinen ___. Dort ist es sehr ruhig.",
          antworten: ["Dorf"],
          regel: "Wiederholung (25.10.): das Dorf = le village, in einem Dorf (Dativ).",
          uebers: { fr: "Complète avec le mot « village »." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Was machst du, um gesund zu bleiben? Sprich 4 Sätze mit um … zu. Nimm dich auf und höre dich an.",
          hinweis: "Ich spiele Fußball, um … / Ich esse Gemüse, um … / Ich will …",
          uebers: { fr: "Que fais-tu pour rester en bonne santé ? Dis 4 phrases avec « um … zu ». Enregistre-toi et écoute-toi." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Deine Küche: Ist sie sauber oder schmutzig? Was willst du machen? Schreibe 4–5 Sätze.",
          checkliste: [
            "Ich habe wollen richtig konjugiert (ich will, wir wollen …).",
            "Ich habe einen Satz mit um … zu geschrieben.",
            "Ich habe einen Vergleich mit als geschrieben (sauberer als …).",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Meine Küche ist meistens sauber. Aber der Kühlschrank ist ein bisschen schmutzig. Ich will ihn am Samstag putzen, um Platz für Gemüse zu haben. Mein Zimmer ist sauberer als die Küche. Am Sonntag wollen wir zusammen kochen.",
          uebers: { fr: "Ta cuisine : propre ou sale ? Que veux-tu faire ? Écris 4–5 phrases." }
        }
      ]
    }
  ]
};

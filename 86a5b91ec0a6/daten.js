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
    },
    {
      id: "2026-11-10",
      titel: "Morgen und Alltag, Körper, sich kümmern um",
      vokabeln: [
        { de: "der Fluss", en: "the river", fr: "la rivière, le fleuve", beispiel: "Wir gehen am Fluss spazieren." },
        { de: "spazieren gehen", en: "to go for a walk", fr: "se promener", beispiel: "Am Sonntag gehen wir im Park spazieren." },
        { de: "der Spaziergang", en: "the walk", fr: "la promenade", beispiel: "Wir machen einen Spaziergang am Fluss." },
        { de: "aufstehen (ist aufgestanden)", en: "to get up", fr: "se lever", beispiel: "Am Sonntag bin ich um 10 Uhr aufgestanden." },
        { de: "der Wecker", en: "the alarm clock", fr: "le réveil", beispiel: "Mein Wecker klingelt um 6:20 Uhr." },
        { de: "frühstücken", en: "to have breakfast", fr: "prendre le petit déjeuner", beispiel: "Ich frühstücke ein Toastbrot mit Butter." },
        { de: "waschen (du wäschst)", en: "to wash", fr: "laver", beispiel: "Er wäscht sein Auto." },
        { de: "der Rücken", en: "the back", fr: "le dos", beispiel: "Mein Rücken tut weh." },
        { de: "sich kümmern um (+ Akk.)", en: "to take care of", fr: "s'occuper de", beispiel: "Ich kümmere mich um meine Katze." },
        { de: "die Unterstützung", en: "the support", fr: "le soutien", beispiel: "Danke für deine Unterstützung!" }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Am Sonntag ___ ich um 12 Uhr aufgestanden.",
          optionen: ["bin", "habe", "war"], richtig: 0,
          regel: "aufstehen ist eine Bewegung → Perfekt mit sein: ich bin aufgestanden.",
          uebers: { fr: "Choisis le bon auxiliaire (sein ou haben)." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Wann bist du heute ___? (aufstehen, Perfekt)",
          antworten: ["aufgestanden"],
          regel: "Trennbares Verb im Perfekt: auf + ge + standen → aufgestanden.",
          uebers: { fr: "Complète avec le participe passé de « aufstehen »." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Mein Wecker ___ um 6:20 Uhr. (klingeln)",
          antworten: ["klingelt"],
          regel: "klingeln: er/sie/es klingelt.",
          uebers: { fr: "Conjugue « klingeln » (sonner)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Du ___ dein Auto. (waschen)",
          optionen: ["wäschst", "waschst", "wäscht"], richtig: 0,
          regel: "waschen: a → ä bei du und er/sie/es: du wäschst, er wäscht.",
          uebers: { fr: "Choisis la bonne forme de « waschen » (du)." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["der Kopf", "la tête"], ["der Rücken", "le dos"], ["das Knie", "le genou"], ["die Brust", "la poitrine"]],
          regel: "Körperteile immer mit Artikel lernen: der Kopf, das Knie, die Hand.",
          uebers: { fr: "Relie les parties du corps." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Welcher Artikel? ___ Nase",
          optionen: ["die", "der", "das"], richtig: 0,
          regel: "Viele Nomen mit -e am Ende sind feminin: die Nase, die Gurke. Aber nicht alle: der Käse, das Auge.",
          uebers: { fr: "Choisis le bon article." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Was isst du zum ___? – Ein Toastbrot mit Butter.",
          optionen: ["Frühstück", "Wecker", "Rücken"], richtig: 0,
          regel: "das Frühstück (Nomen), frühstücken (Verb): Ich frühstücke um 7 Uhr.",
          uebers: { fr: "Choisis le bon mot (« le petit déjeuner »)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Wir machen am Sonntag einen ___ am Fluss.",
          optionen: ["Spaziergang", "Wecker", "Bach"], richtig: 0,
          regel: "spazieren gehen (Verb) → der Spaziergang (Nomen): einen Spaziergang machen.",
          uebers: { fr: "Choisis le bon mot (« une promenade »)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Letztes Jahr ___ ich eine Wohnung in der Stadt.",
          optionen: ["mietete", "mietet", "miete"], richtig: 0,
          regel: "Präteritum (Mitvergangenheit): ich mietete, du mietetest, er mietete. Beim Sprechen sagt man meistens Perfekt: ich habe gemietet.",
          uebers: { fr: "Choisis la forme du prétérit de « mieten » (louer)." }
        },
        {
          typ: "luecke", stufe: 3,
          text: "Wir ___ letztes Jahr ein Haus am Fluss. (mieten, Präteritum)",
          antworten: ["mieteten"],
          regel: "Präteritum von mieten: wir mieteten, ihr mietetet, sie mieteten.",
          uebers: { fr: "Conjugue « mieten » au prétérit (wir)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich kümmere mich ___ meine Katze.",
          optionen: ["um", "für", "an"], richtig: 0,
          regel: "sich kümmern um + Akkusativ = s'occuper de.",
          uebers: { fr: "Choisis la bonne préposition." }
        },
        {
          typ: "luecke", stufe: 3,
          text: "Kümmerst du ___ um den Garten?",
          antworten: ["dich"],
          regel: "sich kümmern: ich kümmere mich, du kümmerst dich, er kümmert sich.",
          uebers: { fr: "Complète avec le pronom réfléchi (du)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Der Keller ist unten. Ich gehe in den Keller ___.",
          optionen: ["hinunter", "hinauf", "herein"], richtig: 0,
          regel: "Wiederholung (05.11.): hinaufgehen = monter, hinuntergehen = descendre.",
          uebers: { fr: "Choisis le bon mot (descendre)." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich spare Geld, um ein Auto ___ kaufen.",
          antworten: ["zu"],
          regel: "Wiederholung (05.11.): um … zu + Infinitiv = pour + infinitif.",
          uebers: { fr: "Complète : « pour acheter une voiture »." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Wir ___ heute zusammen kochen.",
          optionen: ["wollen", "wollt", "will"], richtig: 0,
          regel: "Wiederholung (05.11.): ich will, du willst, wir wollen, ihr wollt.",
          uebers: { fr: "Choisis la bonne forme de « wollen » (wir)." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Je öfter ich spreche, ___ sicherer werde ich.",
          antworten: ["desto"],
          regel: "Wiederholung (01.11.): je + Komparativ …, desto + Komparativ … = plus …, plus …",
          uebers: { fr: "Complète : « plus …, plus … »." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Mein Kollege hat ___. Er arbeitet nicht mehr hier.",
          optionen: ["gekündigt", "gemietet", "gelöst"], richtig: 0,
          regel: "Wiederholung (01.11.): kündigen = démissionner. Perfekt: er hat gekündigt.",
          uebers: { fr: "Choisis le bon participe passé." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Was hast du am Sonntag gemacht? Sprich 4 Sätze im Perfekt. Nimm dich auf und höre dich an.",
          hinweis: "Ich bin um … aufgestanden. / Ich habe … gefrühstückt. / Wir sind am Fluss spazieren gegangen. / Am Abend habe ich …",
          uebers: { fr: "Qu'as-tu fait dimanche ? Dis 4 phrases au passé composé (Perfekt). Enregistre-toi et écoute-toi." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Dein Morgen: Was machst du vom Wecker bis zur Arbeit? Schreibe 4–5 Sätze.",
          checkliste: [
            "Ich habe aufstehen richtig benutzt (ich stehe … auf).",
            "Ich habe einen Satz mit dem Wecker geschrieben.",
            "Ich habe frühstücken benutzt.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Mein Wecker klingelt um 6:20 Uhr. Ich stehe sofort auf und wasche mir das Gesicht. Dann frühstücke ich ein Toastbrot mit Butter. Um 7:30 Uhr gehe ich hinunter und fahre zur Arbeit. Am Wochenende stehe ich später auf.",
          uebers: { fr: "Ton matin : que fais-tu du réveil jusqu'au travail ? Écris 4–5 phrases." }
        }
      ]
    },
    {
      id: "2026-11-12",
      titel: "Reisen, teurer und billiger, lernen oder studieren",
      vokabeln: [
        { de: "das Gewürz", en: "the spice", fr: "l'épice (f)", beispiel: "Indisches Essen hat viele Gewürze." },
        { de: "bestellen", en: "to order", fr: "commander", beispiel: "Ich bestelle die Schuhe online." },
        { de: "das Licht", en: "the light", fr: "la lumière", beispiel: "Unter Wasser gibt es nicht so viel Licht." },
        { de: "das Meer", en: "the sea", fr: "la mer", beispiel: "Im Sommer schwimme ich gern im Meer." },
        { de: "der See", en: "the lake", fr: "le lac", beispiel: "Der See ist ruhig und klar." },
        { de: "teuer / billig", en: "expensive / cheap", fr: "cher / bon marché", beispiel: "Belgien ist teurer als Ägypten." },
        { de: "der Flughafen", en: "the airport", fr: "l'aéroport", beispiel: "Wir fahren um 5 Uhr zum Flughafen." },
        { de: "die Verspätung", en: "the delay", fr: "le retard", beispiel: "Der Zug hat 20 Minuten Verspätung." },
        { de: "der Beruf", en: "the job, the profession", fr: "le métier, la profession", beispiel: "Was ist dein Beruf?" },
        { de: "der Erfolg", en: "the success", fr: "le succès", beispiel: "Ich wünsche dir viel Erfolg!" }
      ],
      aufgaben: [
        {
          typ: "zuordnen", stufe: 1,
          paare: [["das Flugzeug", "l'avion"], ["der Flug", "le vol"], ["der Flughafen", "l'aéroport"], ["die Verspätung", "le retard"]],
          regel: "fliegen (Verb) → der Flug, das Flugzeug, der Flughafen.",
          uebers: { fr: "Relie les mots à leur traduction." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Belgien ist ___ als Ägypten.",
          optionen: ["teurer", "teuerer", "teuer"], richtig: 0,
          regel: "Vergleich mit als: teuer → teurer (das zweite e fällt weg).",
          uebers: { fr: "Choisis le comparatif de « teuer » (cher)." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ägypten ist ___ als Belgien. (billig)",
          antworten: ["billiger"],
          regel: "Komparativ: Adjektiv + -er + als: billig → billiger als.",
          uebers: { fr: "Complète avec le comparatif de « billig » (bon marché)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Es ist sehr dunkel hier. Ich brauche mehr ___.",
          optionen: ["Licht", "Luft", "Gewürze"], richtig: 0,
          regel: "das Licht = la lumière, die Luft = l'air, das Gewürz = l'épice.",
          uebers: { fr: "Choisis le bon mot." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Welcher Artikel? ___ See (= le lac)",
          optionen: ["der", "die", "das"], richtig: 0,
          regel: "der See = le lac, das Meer = la mer. (die See = la mer, aber selten.)",
          uebers: { fr: "Choisis le bon article pour « le lac »." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Welcher Satz ist richtig?",
          optionen: ["Vielleicht fliege ich nach Ägypten.", "Vielleicht ich fliege nach Ägypten.", "Vielleicht ich nach Ägypten fliege."], richtig: 0,
          regel: "Das Verb steht auf Position 2: Vielleicht (1) fliege (2) ich … Für Reisen sagt man meistens fliegen oder fahren.",
          uebers: { fr: "Quelle phrase est correcte ?" }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Mein Bruder ___ Medizin an der Universität.",
          optionen: ["studiert", "lernt", "lehrt"], richtig: 0,
          regel: "studieren = étudier à l'université, lernen = apprendre, lehren = enseigner.",
          uebers: { fr: "Choisis le bon verbe." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich ___ jeden Tag zehn neue Wörter. (lernen)",
          antworten: ["lerne"],
          regel: "lernen = apprendre (Wörter, für eine Prüfung …). An der Uni: studieren.",
          uebers: { fr: "Conjugue « lernen » (ich)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich gehe gern mit ___ Freund spazieren.",
          optionen: ["meinem", "meinen", "mein"], richtig: 0,
          regel: "mit + Dativ: mit meinem Freund, mit meiner Schwester, mit meinen Eltern.",
          uebers: { fr: "Choisis la bonne forme (« mit » + datif)." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Sie hat viel Erfolg. Sie ist sehr ___.",
          antworten: ["erfolgreich"],
          regel: "der Erfolg → erfolgreich (= qui a du succès).",
          uebers: { fr: "Forme l'adjectif à partir de « der Erfolg »." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "___ Menschen essen gern sehr scharf.",
          optionen: ["Manche", "Manchmal", "Man"], richtig: 0,
          regel: "manche = certains (+ Plural). manchmal = parfois. man = on.",
          uebers: { fr: "Choisis le bon mot (« certains »)." }
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["Ich", "kaufe", "lieber", "im", "Geschäft,", "weil", "ich", "das", "Material", "fühlen", "möchte"],
          loesung: "Ich kaufe lieber im Geschäft, weil ich das Material fühlen möchte",
          regel: "Nach weil steht das Verb am Ende: …, weil ich das Material fühlen möchte.",
          uebers: { fr: "Mets les mots dans le bon ordre." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Am Sonntag ___ ich um 10 Uhr aufgestanden.",
          antworten: ["bin"],
          regel: "Wiederholung (10.11.): aufstehen → Perfekt mit sein: ich bin aufgestanden.",
          uebers: { fr: "Complète avec le bon auxiliaire." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Er ___ jeden Samstag sein Auto. (waschen)",
          antworten: ["wäscht"],
          regel: "Wiederholung (10.11.): waschen: du wäschst, er wäscht (a → ä).",
          uebers: { fr: "Conjugue « waschen » (er)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Mein ___ tut weh. Ich kann nicht lange sitzen.",
          optionen: ["Rücken", "Wecker", "Fluss"], richtig: 0,
          regel: "Wiederholung (10.11.): der Rücken = le dos.",
          uebers: { fr: "Choisis le bon mot." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich fahre zum Flughafen, ___ meine Schwester abzuholen.",
          optionen: ["um", "für", "weil"], richtig: 0,
          regel: "Wiederholung (05.11.): um … zu + Infinitiv = pour + infinitif. Trennbare Verben: ab-zu-holen.",
          uebers: { fr: "Choisis le bon mot (« pour »)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich stelle die Milch in ___ Kühlschrank.",
          optionen: ["den", "dem", "der"], richtig: 0,
          regel: "Wiederholung (05.11.): Wohin? → in + Akkusativ: in den Kühlschrank.",
          uebers: { fr: "Choisis le bon article (mouvement → accusatif)." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Reisen: Wohin fliegst du gern? Was ist dort teurer oder billiger als bei dir? Sprich 4 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "Ich fliege gern nach … / Das Essen ist dort billiger als … / Vielleicht fliege ich … / Am Flughafen …",
          uebers: { fr: "Voyages : où aimes-tu aller en avion ? Qu'est-ce qui est plus cher ou moins cher que chez toi ? Dis 4 phrases. Enregistre-toi et écoute-toi." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Deine letzte Reise: Schreibe 4–5 Sätze.",
          checkliste: [
            "Ich habe ein Wort mit Flug benutzt (der Flug, der Flughafen, das Flugzeug).",
            "Ich habe einen Vergleich mit als geschrieben (teurer als, billiger als).",
            "Ich habe einen Satz mit vielleicht geschrieben (Verb auf Position 2).",
            "Ich habe mit + Dativ benutzt (mit meinem …, mit meiner …)."
          ],
          muster: "Letztes Jahr bin ich mit meinem Bruder nach Spanien geflogen. Der Flug war billiger als der Zug. Am Flughafen hatten wir eine Stunde Verspätung. In Spanien war das Essen sehr gut, mit vielen Gewürzen. Vielleicht fliegen wir nächstes Jahr nach Ägypten.",
          uebers: { fr: "Ton dernier voyage : écris 4–5 phrases." }
        }
      ]
    },
    {
      id: "2026-11-15",
      titel: "verlieren, tief, gefallen, jeden Tag",
      vokabeln: [
        { de: "das Glas", en: "the glass, the jar", fr: "le verre, le bocal", beispiel: "Die Gewürze sind in einem Glas." },
        { de: "mischen", en: "to mix", fr: "mélanger", beispiel: "Ich mische die Gewürze." },
        { de: "verlieren (hat verloren)", en: "to lose", fr: "perdre", beispiel: "Ich habe meinen Schlüssel verloren." },
        { de: "der Verlust", en: "the loss", fr: "la perte", beispiel: "Der Verlust war groß." },
        { de: "tief / die Tiefe", en: "deep / the depth", fr: "profond / la profondeur", beispiel: "In 15 Metern Tiefe gibt es wenig Licht." },
        { de: "gefallen (es gefällt mir, hat gefallen)", en: "to please (I like it)", fr: "plaire (ça me plaît)", beispiel: "Der Film hat mir sehr gut gefallen." },
        { de: "witzig", en: "funny", fr: "drôle, rigolo", beispiel: "Der Film ist sehr witzig." },
        { de: "der Spaß", en: "the fun", fr: "le plaisir, l'amusement", beispiel: "Schwimmen macht mir Spaß." },
        { de: "spät / später", en: "late / later", fr: "tard / plus tard", beispiel: "Bis später!" },
        { de: "jeden Tag", en: "every day", fr: "chaque jour", beispiel: "Ich lerne jeden Tag Deutsch." }
      ],
      aufgaben: [
        {
          typ: "zuordnen", stufe: 1,
          paare: [["verlieren", "perdre"], ["der Verlust", "la perte"], ["die Tiefe", "la profondeur"], ["mischen", "mélanger"]],
          regel: "Neue Wörter der Stunde.",
          uebers: { fr: "Relie les mots à leur traduction." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Gestern habe ich meinen Schlüssel ___. (verlieren)",
          antworten: ["verloren"],
          regel: "verlieren – hat verloren. Verben mit ver- bekommen kein ge-.",
          uebers: { fr: "Complète avec le participe passé de « verlieren »." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "verlieren → der ___",
          optionen: ["Verlust", "Verlierung", "Verlor"], richtig: 0,
          regel: "verlieren → der Verlust (= la perte).",
          uebers: { fr: "Choisis le nom qui vient de « verlieren »." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Das Meer ist hier sehr ___.",
          optionen: ["tief", "Tiefe", "Verlust"], richtig: 0,
          regel: "tief = Adjektiv (profond), die Tiefe = Nomen (la profondeur).",
          uebers: { fr: "Choisis le bon mot." }
        },
        {
          typ: "mc", stufe: 3,
          frage: "Ich mag ___ Filme. Sie bringen mich zum Nachdenken.",
          optionen: ["tiefgründige", "tiefgreifende", "tiefe"], richtig: 0,
          regel: "Ein Film, eine Idee: tiefgründig (= profond). tiefgreifend sagt man für große Veränderungen: tiefgreifende Reformen.",
          uebers: { fr: "Choisis le bon adjectif pour un film « profond »." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Der Film hat ___ sehr gut gefallen.",
          optionen: ["mir", "mich", "ich"], richtig: 0,
          regel: "gefallen + Dativ: Es gefällt mir (= ça me plaît).",
          uebers: { fr: "Choisis le bon pronom (datif)." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Die Musik ___ mir. (gefallen)",
          antworten: ["gefällt"],
          regel: "gefallen: es gefällt (a → ä).",
          uebers: { fr: "Conjugue « gefallen » (es / sie)." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Hat dir der Film ___? (gefallen)",
          antworten: ["gefallen"],
          regel: "Das Partizip von gefallen ist gefallen (gleich wie der Infinitiv).",
          uebers: { fr: "Complète avec le participe passé de « gefallen »." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Der Film ist sehr ___. Ich habe viel gelacht.",
          optionen: ["witzig", "tief", "spät"], richtig: 0,
          regel: "witzig = drôle. der Spaß = le plaisir: Das macht Spaß.",
          uebers: { fr: "Choisis le bon mot." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Tschüss, bis ___! (à plus tard)",
          antworten: ["später"],
          regel: "spät = tard, später = plus tard.",
          uebers: { fr: "Complète (« à plus tard »)." }
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["Ich", "versuche,", "meinen", "Rücken", "nicht", "zu", "krümmen"],
          loesung: "Ich versuche, meinen Rücken nicht zu krümmen",
          regel: "versuchen + zu + Infinitiv: zu krümmen steht am Ende.",
          uebers: { fr: "Mets les mots dans le bon ordre." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich lerne ___ Tag Deutsch.",
          optionen: ["jeden", "jede", "jedes"], richtig: 0,
          regel: "der Tag → jeden Tag. Aber: jede Woche, jedes Jahr.",
          uebers: { fr: "Choisis la bonne forme (« chaque jour »)." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Spanien ist ___ als die Schweiz. (billig)",
          antworten: ["billiger"],
          regel: "Wiederholung (12.11.): Vergleich: billig → billiger als.",
          uebers: { fr: "Complète avec le comparatif de « billig »." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Der Zug hat 20 Minuten ___.",
          optionen: ["Verspätung", "spät", "später"], richtig: 0,
          regel: "Wiederholung (12.11.): die Verspätung = le retard.",
          uebers: { fr: "Choisis le bon mot." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich kümmere mich ___ meine Katze.",
          optionen: ["um", "für", "an"], richtig: 0,
          regel: "Wiederholung (10.11.): sich kümmern um + Akkusativ = s'occuper de.",
          uebers: { fr: "Choisis la bonne préposition." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Am Sonntag machen wir einen ___ am Fluss. (spazieren gehen → Nomen)",
          antworten: ["Spaziergang"],
          regel: "Wiederholung (10.11.): spazieren gehen → der Spaziergang.",
          uebers: { fr: "Forme le nom (« la promenade »)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich lerne Deutsch, ___ in Österreich zu studieren.",
          optionen: ["um", "für", "weil"], richtig: 0,
          regel: "Wiederholung (05.11.): um … zu + Infinitiv = pour + infinitif.",
          uebers: { fr: "Choisis le bon mot (« pour »)." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Dein Lieblingsfilm: Was hat dir gefallen? Ist er witzig oder tiefgründig? Sprich 4 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "Mein Lieblingsfilm ist … / Der Film hat mir gefallen, weil … / Er ist witzig / tiefgründig. / Ich sehe jede Woche …",
          uebers: { fr: "Ton film préféré : qu'est-ce qui t'a plu ? Il est drôle ou profond ? Dis 4 phrases. Enregistre-toi et écoute-toi." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Ein Tag am Meer oder am See: Schreibe 4–5 Sätze.",
          checkliste: [
            "Ich habe gefallen + Dativ benutzt (Es hat mir gefallen).",
            "Ich habe tief oder die Tiefe benutzt.",
            "Ich habe verloren oder Spaß gemacht im Perfekt benutzt.",
            "Ich habe jeden, jede oder jedes benutzt."
          ],
          muster: "Letzten Sommer war ich jeden Tag am See. Das Wasser war sehr tief und klar. Einmal habe ich dort meine Sonnenbrille verloren. Das Schwimmen hat mir viel Spaß gemacht. Der Urlaub hat mir sehr gut gefallen.",
          uebers: { fr: "Une journée à la mer ou au lac : écris 4–5 phrases." }
        }
      ]
    },
    {
      id: "2026-11-22",
      titel: "Aufmerksamkeit, Genitiv, den ganzen Tag",
      vokabeln: [
        { de: "die Aufmerksamkeit", en: "the attention", fr: "l'attention", beispiel: "Kinder brauchen viel Aufmerksamkeit." },
        { de: "aufmerksam", en: "attentive", fr: "attentif", beispiel: "Er hört aufmerksam zu." },
        { de: "im Zentrum der Aufmerksamkeit stehen", en: "to be the centre of attention", fr: "être au centre de l'attention", beispiel: "Ich stehe nicht gern im Zentrum der Aufmerksamkeit." },
        { de: "den ganzen Tag", en: "all day", fr: "toute la journée", beispiel: "Ich war den ganzen Tag zu Hause." },
        { de: "der Fehler (die Fehler)", en: "the mistake", fr: "la faute, l'erreur", beispiel: "Das ist nicht der Fehler der Kinder." },
        { de: "gereizt sein", en: "to be irritable", fr: "être à cran, être irrité", beispiel: "Nach der Arbeit bin ich oft gereizt." },
        { de: "erziehen (+ Akk.)", en: "to raise, to bring up", fr: "éduquer, élever", beispiel: "Ich will meine Kinder gut erziehen." },
        { de: "das Kind (die Kinder)", en: "the child", fr: "l'enfant", beispiel: "Die Kinder spielen im Garten." },
        { de: "der Handykonsum", en: "phone use", fr: "l'utilisation du portable", beispiel: "Der Handykonsum von Kindern ist oft zu hoch." }
      ],
      aufgaben: [
        {
          typ: "zuordnen", stufe: 1,
          paare: [["die Aufmerksamkeit", "l'attention"], ["aufmerksam", "attentif"], ["der Fehler", "la faute"], ["erziehen", "éduquer"]],
          regel: "Neue Wörter der Stunde.",
          uebers: { fr: "Relie les mots à leur traduction." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Heute ist der ___ November.",
          optionen: ["zweiundzwanzigste", "zweiundzwanzigsten", "zweiundzwanzig"], richtig: 0,
          regel: "Datum: Es ist der …ste (Nominativ). Bis 19 mit -te (der vierte), ab 20 mit -ste (der zwanzigste).",
          uebers: { fr: "Choisis la bonne forme de la date." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Wir haben den ___ November.",
          optionen: ["zweiundzwanzigsten", "zweiundzwanzigste", "zweiundzwanzig"], richtig: 0,
          regel: "Wir haben + Akkusativ: den …sten (den zweiundzwanzigsten).",
          uebers: { fr: "Choisis la bonne forme de la date (accusatif)." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich stehe nicht gern im Zentrum der ___.",
          antworten: ["Aufmerksamkeit"],
          regel: "im Zentrum der Aufmerksamkeit stehen = être au centre de l'attention.",
          uebers: { fr: "Complète (« l'attention »)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich war ___ Tag zu Hause.",
          optionen: ["den ganzen", "der ganze", "dem ganzen"], richtig: 0,
          regel: "Zeitangaben ohne Präposition stehen im Akkusativ: den ganzen Tag, den ganzen Monat.",
          uebers: { fr: "Choisis la bonne forme (« toute la journée »)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Das ist das Auto ___ Lehrers.",
          optionen: ["des", "der", "dem"], richtig: 0,
          regel: "Genitiv maskulin: des (und -s am Nomen): des Lehrers.",
          uebers: { fr: "Choisis l'article au génitif (masculin)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Das ist das Handy ___ Mutter.",
          optionen: ["der", "des", "die"], richtig: 0,
          regel: "Genitiv feminin: der (die Mutter → der Mutter).",
          uebers: { fr: "Choisis l'article au génitif (féminin)." }
        },
        {
          typ: "mc", stufe: 3,
          frage: "Das ist nicht der Fehler ___ Kinder.",
          optionen: ["der", "des", "den"], richtig: 0,
          regel: "Genitiv Plural: der. Genitiv: des (m), der (f), des (n), der (Pl.).",
          uebers: { fr: "Choisis l'article au génitif (pluriel)." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich habe schlecht geschlafen. Deshalb bin ich heute ___. (être à cran)",
          antworten: ["gereizt"],
          regel: "gereizt sein = être à cran.",
          uebers: { fr: "Complète (« à cran »)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich will ___ gut erziehen.",
          optionen: ["meine Kinder", "meinen Kindern", "meiner Kinder"], richtig: 0,
          regel: "erziehen + Akkusativ: meine Kinder, sie.",
          uebers: { fr: "Choisis la bonne forme (accusatif)." }
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["Welche", "Konsequenzen", "kann", "der", "Handykonsum", "haben?"],
          loesung: "Welche Konsequenzen kann der Handykonsum haben?",
          regel: "Modalverb (kann) auf Position 2, Infinitiv (haben) am Ende.",
          uebers: { fr: "Mets les mots dans le bon ordre." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ein Kind, zwei ___.",
          antworten: ["Kinder"],
          regel: "das Kind → die Kinder.",
          uebers: { fr: "Écris le pluriel." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Die Kinder haben den Ball ___. (verlieren)",
          antworten: ["verloren"],
          regel: "Wiederholung (15.11.): verlieren – hat verloren (ohne ge-).",
          uebers: { fr: "Complète avec le participe passé de « verlieren »." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Das Buch hat ___ gut gefallen.",
          optionen: ["ihm", "ihn", "er"], richtig: 0,
          regel: "Wiederholung (15.11.): gefallen + Dativ: Es gefällt ihm.",
          uebers: { fr: "Choisis le bon pronom (datif)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich gehe ___ Woche schwimmen.",
          optionen: ["jede", "jeden", "jedes"], richtig: 0,
          regel: "Wiederholung (15.11.): die Woche → jede Woche. Aber: jeden Tag, jedes Jahr.",
          uebers: { fr: "Choisis la bonne forme (« chaque semaine »)." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Das Handy ist ___ als der Computer. (teuer)",
          antworten: ["teurer"],
          regel: "Wiederholung (12.11.): teuer → teurer als (das e fällt weg).",
          uebers: { fr: "Complète avec le comparatif de « teuer »." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich spaziere gern mit ___ Freundin.",
          optionen: ["meiner", "meine", "meinen"], richtig: 0,
          regel: "Wiederholung (12.11.): mit + Dativ: mit meiner Freundin.",
          uebers: { fr: "Choisis la bonne forme (datif)." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Handy und Kinder: Welche Konsequenzen hat zu viel Handy? Sprich 4 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "Kinder haben weniger Aufmerksamkeit. / Sie haben mehr Stress. / Sie sind oft gereizt. / Eltern sollen …",
          uebers: { fr: "Le portable et les enfants : quelles conséquences ? Dis 4 phrases. Enregistre-toi et écoute-toi." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Ein Tag mit zu viel Handy: Schreibe 4–5 Sätze.",
          checkliste: [
            "Ich habe den ganzen Tag oder den ganzen Monat benutzt.",
            "Ich habe die Aufmerksamkeit oder aufmerksam benutzt.",
            "Ich habe gereizt benutzt.",
            "Ich habe einen Genitiv geschrieben (des …, der …)."
          ],
          muster: "Letzten Sonntag war ich den ganzen Tag am Handy. Am Abend war ich müde und gereizt. Ich hatte keine Aufmerksamkeit mehr für meine Freundin. Das war nicht der Fehler des Handys, sondern mein Fehler. Heute lasse ich das Handy öfter in der Tasche.",
          uebers: { fr: "Une journée avec trop de portable : écris 4–5 phrases." }
        }
      ]
    }
  ]
};

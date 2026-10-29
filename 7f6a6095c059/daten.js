window.HEFT = {
  vorname: "Victor",
  niveau: "A1",
  modus: "ruhig",
  hilfe: "fr",
  stunden: [
    {
      id: "2026-09-11",
      titel: "Wortschatz: Schule, Ferien, Zeit",
      vokabeln: [
        { de: "heute", en: "today", fr: "aujourd'hui", beispiel: "Heute habe ich Biologie." },
        { de: "beginnen", en: "to begin", fr: "commencer", beispiel: "Die Schule beginnt um 8 Uhr." },
        { de: "enden", en: "to end", fr: "finir, se terminer", beispiel: "Die Schule endet um 4 Uhr." },
        { de: "brauchen", en: "to need, to take (time)", fr: "avoir besoin de, mettre (du temps)", beispiel: "Ich brauche eine Stunde für die Hausübung." },
        { de: "die Ferien", en: "the holidays", fr: "les vacances", beispiel: "Die Ferien sind lang." },
        { de: "das Land", en: "the country", fr: "le pays", beispiel: "Spanien ist ein schönes Land." },
        { de: "die Klasse", en: "the class", fr: "la classe", beispiel: "Ich gehe in die fünfte Klasse." },
        { de: "die Stunde", en: "the lesson, the hour", fr: "la leçon, l'heure", beispiel: "Die Stunde dauert eine Stunde." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-18",
      titel: "Wortschatz: Fächer, Lieder, immer und manchmal",
      vokabeln: [
        { de: "das Wort, die Wörter", en: "the word", fr: "le mot", beispiel: "Die Übung hat viele Wörter." },
        { de: "das Fach, die Fächer", en: "the school subject", fr: "la matière", beispiel: "Mein Lieblingsfach ist Sport." },
        { de: "das Lied", en: "the song", fr: "la chanson", beispiel: "Das ist mein Lieblingslied." },
        { de: "wiederholen", en: "to repeat, to review", fr: "répéter, réviser", beispiel: "Ich wiederhole die Wörter." },
        { de: "circa", en: "approximately", fr: "environ", beispiel: "Die Schule dauert circa acht Stunden." },
        { de: "manchmal", en: "sometimes", fr: "parfois", beispiel: "Manchmal spiele ich Fußball." },
        { de: "immer", en: "always", fr: "toujours", beispiel: "Ich lerne immer am Abend." },
        { de: "neu", en: "new", fr: "nouveau, nouvelle", beispiel: "Ich habe eine neue Hausübung." },
        { de: "Entschuldigung", en: "excuse me, sorry", fr: "excusez-moi, pardon", beispiel: "Entschuldigung, wie spät ist es?" },
        { de: "der Tisch", en: "the table", fr: "la table", beispiel: "Der Tisch ist groß." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-25",
      titel: "Flughafen, zwischen, trotzdem, schon und schön",
      vokabeln: [
        { de: "der Flughafen", en: "the airport", fr: "l'aéroport", beispiel: "Am Flughafen warten viele Leute." },
        { de: "das Flugzeug", en: "the airplane", fr: "l'avion", beispiel: "Das Flugzeug fliegt nach Spanien." },
        { de: "fliegen", en: "to fly", fr: "voler, prendre l'avion", beispiel: "Wir fliegen im Sommer nach Italien." },
        { de: "zwischen", en: "between", fr: "entre", beispiel: "Ich brauche zwischen einer und zwei Stunden." },
        { de: "trotzdem", en: "nevertheless, anyway", fr: "quand même", beispiel: "Es regnet, aber ich gehe trotzdem raus." },
        { de: "das Mal", en: "the time (occasion)", fr: "la fois", beispiel: "Das ist das erste Mal." },
        { de: "schon", en: "already", fr: "déjà", beispiel: "Die Hausübung ist schon fertig." },
        { de: "schön", en: "beautiful, nice", fr: "beau, joli", beispiel: "Die Stadt ist schön." },
        { de: "dauern", en: "to last", fr: "durer", beispiel: "Der Flug dauert zwei Stunden." },
        { de: "treffen", en: "to meet", fr: "rencontrer", beispiel: "Ich treffe einen Freund." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Das ___ fliegt nach Spanien.",
          optionen: ["Flughafen", "Flugzeug", "Flug"], richtig: 1,
          regel: "Das Flugzeug fliegt. Der Flughafen ist der Ort, der Flug ist die Reise.",
          uebers: { fr: "Choisis le bon mot." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Die Stadt ist sehr ___.",
          optionen: ["schon", "schön"], richtig: 1,
          regel: "schön = beau (mit ö). schon = déjà (ohne Punkte). Die Wörter klingen verschieden!",
          uebers: { fr: "Choisis le bon mot : beau ou déjà ?" }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Meine Hausübung ist ___ fertig.",
          antworten: ["schon"],
          regel: "schon = déjà. Ohne Punkte auf dem o.",
          uebers: { fr: "Complète la phrase (déjà)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich brauche ___ fünf und sechs Stunden.",
          optionen: ["zwischen", "von", "für"], richtig: 0,
          regel: "zwischen ... und ... = entre ... et ...",
          uebers: { fr: "Choisis le bon mot (entre ... et ...)." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Es regnet, aber ich gehe ___ raus.",
          antworten: ["trotzdem"],
          regel: "trotzdem = quand même: Es regnet, aber ich gehe trotzdem raus.",
          uebers: { fr: "Complète la phrase (quand même)." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Von 8 Uhr ___ 4 Uhr habe ich Schule.",
          antworten: ["bis"],
          regel: "von ... bis ... = de ... à ...",
          uebers: { fr: "Complète la phrase (de ... à ...)." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["machen", "gemacht"], ["lernen", "gelernt"], ["spielen", "gespielt"], ["sehen", "gesehen"]],
          regel: "Partizip II: machen → gemacht, lernen → gelernt, spielen → gespielt, sehen → gesehen.",
          uebers: { fr: "Associe le verbe à son participe passé (Partizip II)." }
        },
        {
          typ: "satz", stufe: 1,
          woerter: ["Das", "Flugzeug", "fliegt", "nach", "Spanien"],
          loesung: "Das Flugzeug fliegt nach Spanien",
          regel: "Das Verb steht an Position 2: Das Flugzeug (1) fliegt (2).",
          uebers: { fr: "Remets les mots dans le bon ordre. Le verbe est en deuxième position." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Wie sagt man „la deuxième fois“ auf Deutsch?",
          optionen: ["das zweite Mal", "der zweite Mal", "die zweite Mal"], richtig: 0,
          regel: "das Mal ist neutral: das erste Mal, das zweite Mal, das dritte Mal.",
          uebers: { fr: "Comment dit-on « la deuxième fois » en allemand ?" }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Wie lange ___ du für die Hausübung?",
          optionen: ["brauchst", "brauche", "braucht"], richtig: 0,
          regel: "brauchen: ich brauche, du brauchst, er/sie braucht.",
          uebers: { fr: "Choisis la bonne forme de « brauchen »." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Sprich 4 Sätze: Was machst du gern, auch wenn das Wetter schlecht ist? Benutze „trotzdem“. Nimm dich auf und höre dich an.",
          hinweis: "Zum Beispiel: Es regnet, aber ich ... trotzdem. / Es ist kalt, aber ...",
          uebers: { fr: "Dis 4 phrases : qu'aimes-tu faire même quand il fait mauvais ? Utilise « trotzdem ». Enregistre-toi et écoute-toi." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 4 Sätze über deinen Schultag. Benutze „von ... bis“ und „zwischen“.",
          checkliste: [
            "Ich habe „von ... bis“ benutzt.",
            "Ich habe „zwischen ... und ...“ benutzt.",
            "Das Verb steht in jedem Satz an Position 2.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Ich habe von acht Uhr bis vier Uhr Schule. Ich brauche zwischen einer und zwei Stunden für die Hausübung. Danach spiele ich Fußball. Ich bin müde, aber ich spiele trotzdem.",
          uebers: { fr: "Écris 4 phrases sur ta journée d'école. Utilise « von ... bis » et « zwischen »." }
        }
      ]
    },
    {
      id: "2026-10-02",
      titel: "Schule, Wochenende, Wörter mit -heit",
      vokabeln: [
        { de: "die Geschichte", en: "history", fr: "l'histoire", beispiel: "Heute habe ich Geschichte." },
        { de: "das Fach", en: "the (school) subject", fr: "la matière", beispiel: "Mein Lieblingsfach ist Biologie." },
        { de: "das Wochenende", en: "the weekend", fr: "le week-end", beispiel: "Am Wochenende mache ich Sport." },
        { de: "der Roman", en: "the novel", fr: "le roman", beispiel: "Ich lese gern Romane." },
        { de: "meistens", en: "mostly", fr: "la plupart du temps", beispiel: "Ich lese meistens am Abend." },
        { de: "trotzdem", en: "anyway, still", fr: "quand même", beispiel: "Es regnet, aber ich mache trotzdem Sport." },
        { de: "zwischen", en: "between", fr: "entre", beispiel: "Ich habe Unterricht zwischen fünf und sechs Uhr." },
        { de: "der Flughafen", en: "the airport", fr: "l'aéroport", beispiel: "Das Flugzeug steht am Flughafen." },
        { de: "die Gesundheit", en: "health", fr: "la santé", beispiel: "Sport ist gut für die Gesundheit." },
        { de: "der Schmerz", en: "the pain", fr: "la douleur", beispiel: "Ich habe Schmerzen im Bein." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Welcher Satz ist richtig?",
          optionen: ["Heute habe ich Geschichte.", "Heute ich habe Geschichte.", "Heute Geschichte ich habe."], richtig: 0,
          regel: "Das Verb steht auf Position 2: Heute (1) habe (2) ich ...",
          uebers: { fr: "Quelle phrase est correcte ?" }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich habe Unterricht ___ fünf und sechs Uhr.",
          antworten: ["zwischen"],
          regel: "zwischen ... und ... = entre ... et ...",
          uebers: { fr: "Complète avec le bon mot." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Es regnet, aber ich mache ___ Sport.",
          optionen: ["trotzdem", "zwischen", "meistens"], richtig: 0,
          regel: "trotzdem = quand même.",
          uebers: { fr: "Choisis le bon mot." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["der Flughafen", "l'aéroport"], ["das Flugzeug", "l'avion"], ["der Flug", "le vol"], ["fliegen", "voler"]],
          regel: "Alle Wörter kommen von fliegen.",
          uebers: { fr: "Relie le mot allemand et le mot français." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "schön → die ___",
          antworten: ["Schönheit"],
          regel: "Adjektiv + -heit = Nomen: schön → die Schönheit, frei → die Freiheit.",
          uebers: { fr: "Forme le nom avec -heit." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Welcher Artikel? ___ Gesundheit",
          optionen: ["der", "die", "das"], richtig: 1,
          regel: "Nomen mit -heit sind immer feminin: die Gesundheit, die Freiheit.",
          uebers: { fr: "Quel article ?" }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Am", "Wochenende", "lese", "ich", "einen", "Roman"],
          loesung: "Am Wochenende lese ich einen Roman",
          regel: "Zeit am Anfang → Verb auf Position 2, dann ich.",
          uebers: { fr: "Remets les mots dans l'ordre." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich komme um halb fünf nach ___.",
          antworten: ["Hause"],
          regel: "nach Hause = (je rentre) à la maison. Nicht: in mein Haus.",
          uebers: { fr: "Complète : je rentre à la maison à quatre heures et demie." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Erzähle von deinem Wochenende: Was machst du? Sprich 4 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "Am Wochenende lese ich ... / mache ich ... – das Verb steht auf Position 2.",
          uebers: { fr: "Raconte ton week-end en 4 phrases. Enregistre-toi et écoute-toi." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 4 Sätze über deinen Schultag: Welche Fächer hast du? Wann kommst du nach Hause?",
          checkliste: [
            "Ich habe das Verb auf Position 2 gestellt.",
            "Ich habe mindestens zwei Fächer genannt.",
            "Ich habe nach Hause benutzt.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Heute habe ich Mathematik und Geschichte. Mein Lieblingsfach ist Biologie. Ich habe meistens sieben Stunden Unterricht. Um halb fünf komme ich nach Hause.",
          uebers: { fr: "Écris 4 phrases sur ta journée d'école : quelles matières, quand tu rentres à la maison." }
        }
      ]
    },
    {
      id: "2026-10-09",
      titel: "Wetter, wissen, wo und wohin",
      vokabeln: [
        { de: "das Wetter", en: "the weather", fr: "le temps (la météo)", beispiel: "Wie ist das Wetter heute?" },
        { de: "windig", en: "windy", fr: "venteux", beispiel: "Heute ist es windig." },
        { de: "bewölkt", en: "cloudy", fr: "nuageux", beispiel: "Der Himmel ist grau und bewölkt." },
        { de: "wissen", en: "to know", fr: "savoir", beispiel: "Ich weiß es nicht." },
        { de: "verstehen", en: "to understand", fr: "comprendre", beispiel: "Ich verstehe dich." },
        { de: "trainieren", en: "to train", fr: "s'entraîner", beispiel: "Ich trainiere am Wochenende Tischtennis." },
        { de: "der Schläger", en: "the racket, the bat", fr: "la raquette", beispiel: "Mein Schläger ist rot und schwarz." },
        { de: "die Farbe", en: "the colour", fr: "la couleur", beispiel: "Welche Farbe hat dein Schläger?" },
        { de: "die Sprache", en: "the language", fr: "la langue", beispiel: "Ich spreche vier Sprachen." },
        { de: "durchsichtig", en: "transparent", fr: "transparent", beispiel: "Die Flasche ist durchsichtig." }
      ],
      aufgaben: [
        {
          typ: "luecke", stufe: 1,
          text: "Ich ___ es nicht.",
          antworten: ["weiß"],
          regel: "wissen: ich weiß, du weißt, er/sie/es weiß.",
          uebers: { fr: "Complète avec « wissen » (savoir)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Du ___ die Antwort.",
          optionen: ["weißt", "weiß", "wisst"], richtig: 0,
          regel: "du weißt.",
          uebers: { fr: "Choisis la bonne forme de « wissen »." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Wir ___ das Alter von den Spielern nicht.",
          antworten: ["wissen"],
          regel: "wir wissen, ihr wisst, sie/Sie wissen.",
          uebers: { fr: "Complète avec « wissen »." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Welcher Satz ist richtig?",
          optionen: ["Heute ist es windig.", "Heute es ist windig.", "Es heute ist windig."], richtig: 0,
          regel: "Das Verb steht auf Position 2: Heute (1) ist (2) es ...",
          uebers: { fr: "Quelle phrase est correcte ?" }
        },
        {
          typ: "mc", stufe: 1,
          frage: "___ fährst du mit dem Scooter? – In die Schule.",
          optionen: ["Wohin", "Wo"], richtig: 0,
          regel: "Wohin? = Richtung (in die Schule). Wo? = Ort (in der Schule).",
          uebers: { fr: "« Wo » ou « wohin » ?" }
        },
        {
          typ: "mc", stufe: 2,
          frage: "___ wohnst du? – In Paris.",
          optionen: ["Wo", "Wohin"], richtig: 0,
          regel: "Wo? = Ort, keine Bewegung.",
          uebers: { fr: "« Wo » ou « wohin » ?" }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Ich", "verstehe", "die", "Frage", "nicht"],
          loesung: "Ich verstehe die Frage nicht",
          regel: "nicht steht hier am Ende.",
          uebers: { fr: "Remets les mots dans l'ordre." }
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["Ich", "bin", "müde,", "weil", "ich", "viel", "trainiere"],
          loesung: "Ich bin müde, weil ich viel trainiere",
          regel: "Nach weil steht das Verb am Ende.",
          uebers: { fr: "Remets les mots dans l'ordre. Attention : après « weil », le verbe va à la fin." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["rot", "rouge"], ["schwarz", "noir"], ["grau", "gris"], ["grün", "vert"]],
          regel: "Farben: rot, schwarz, grau, grün.",
          uebers: { fr: "Relie les couleurs." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Wie ist das Wetter heute bei dir? Sprich 3–4 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "Heute ist es ... / Der Himmel ist ... / Es regnet (nicht).",
          uebers: { fr: "Quel temps fait-il chez toi aujourd'hui ? Dis 3 ou 4 phrases." }
        }
      ]
    },
    {
      id: "2026-10-16",
      titel: "Dativ mit mit, kein und nicht, Gesundheit",
      vokabeln: [
        { de: "schon", en: "already", fr: "déjà", beispiel: "Ich habe schon Physik gelernt." },
        { de: "zusammen", en: "together", fr: "ensemble", beispiel: "Ich lerne zusammen mit meinem Bruder." },
        { de: "sich entscheiden", en: "to decide", fr: "se décider", beispiel: "Ich kann mich nicht entscheiden." },
        { de: "die Fortbildung", en: "further training", fr: "la formation (continue)", beispiel: "Die Lehrerin ist heute in der Fortbildung." },
        { de: "der Unfall", en: "the accident", fr: "l'accident", beispiel: "Er hatte einen kleinen Unfall." },
        { de: "überraschen", en: "to surprise", fr: "surprendre", beispiel: "Die Lehrerin hat den Schummler überrascht." },
        { de: "schummeln", en: "to cheat", fr: "tricher", beispiel: "Beim Test darf man nicht schummeln." },
        { de: "der Nachbar", en: "the neighbour", fr: "le voisin", beispiel: "Ich kenne meine Nachbarn nicht." },
        { de: "dauern", en: "to last", fr: "durer", beispiel: "Ein Tag dauert 24 Stunden." },
        { de: "wichtig", en: "important", fr: "important", beispiel: "Schlafen ist wichtig für die Gesundheit." },
        { de: "außer", en: "except", fr: "sauf", beispiel: "Ich mag alle Sportarten außer Gymnastik." }
      ],
      aufgaben: [
        {
          typ: "zuordnen", stufe: 1,
          paare: [["der Bruder", "mit dem Bruder"], ["die Mutter", "mit der Mutter"], ["das Kind", "mit dem Kind"], ["die Freunde (Pl.)", "mit den Freunden"]],
          regel: "mit + Dativ: der → dem, die → der, das → dem, die (Pl.) → den (+ n).",
          uebers: { fr: "Relie : « mit » + datif." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich lebe mit ___ Familie.",
          antworten: ["meiner"],
          regel: "mit + Dativ: die Familie → meiner Familie.",
          uebers: { fr: "Complète : je vis avec ma famille." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich lerne Deutsch zusammen mit ___ Bruder.",
          antworten: ["meinem"],
          regel: "mit + Dativ: der Bruder → meinem Bruder.",
          uebers: { fr: "Complète : avec mon frère." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich habe ___ Deutschhausübung.",
          optionen: ["keine", "nicht", "kein"], richtig: 0,
          regel: "Ein Nomen ohne Artikel verneint man mit kein/keine: die Hausübung → keine Hausübung.",
          uebers: { fr: "Choisis la bonne négation." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Welcher Satz ist richtig?",
          optionen: ["Ich kenne meine Nachbarn nicht.", "Ich kenne nicht meine Nachbarn.", "Ich nicht kenne meine Nachbarn."], richtig: 0,
          regel: "nicht steht hier am Satzende.",
          uebers: { fr: "Quelle phrase est correcte ?" }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Meine Schule beginnt ___ um 8 Uhr. (jeden Tag, 100 %)",
          optionen: ["immer", "manchmal", "nie"], richtig: 0,
          regel: "immer = toujours, meistens = la plupart du temps, manchmal = parfois, nie = jamais.",
          uebers: { fr: "Choisis le bon mot (100 % = toujours)." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ein Tag ___ 24 Stunden.",
          antworten: ["dauert"],
          regel: "dauern = durer: er/sie/es dauert.",
          uebers: { fr: "Complète avec « dauern » (durer)." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Schlafen", "ist", "wichtig", "für", "die", "Gesundheit"],
          loesung: "Schlafen ist wichtig für die Gesundheit",
          regel: "für + Akkusativ: für die Gesundheit.",
          uebers: { fr: "Remets les mots dans l'ordre." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich mag alle Sportarten, ___ Gymnastik.",
          optionen: ["außer", "mit", "zwischen"], richtig: 0,
          regel: "außer = sauf.",
          uebers: { fr: "Choisis le bon mot." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 4 Sätze: Was ist wichtig für die Gesundheit?",
          checkliste: [
            "Ich habe wichtig für + Akkusativ benutzt.",
            "Ich habe meistens, immer oder manchmal benutzt.",
            "Das Verb steht auf Position 2.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Schlafen ist wichtig für die Gesundheit. Ich schlafe meistens neun Stunden. Sport ist auch wichtig. Ich esse gern Obst und trinke Milch.",
          uebers: { fr: "Écris 4 phrases : qu'est-ce qui est important pour la santé ?" }
        }
      ]
    }
  ]
};

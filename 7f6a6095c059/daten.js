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
    }
  ]
};

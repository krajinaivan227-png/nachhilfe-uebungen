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
    }
  ]
};

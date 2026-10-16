window.HEFT = {
  vorname: "Olga und Evan",
  niveau: "A1",
  modus: "ruhig",
  hilfe: "fr",
  stunden: [
    {
      id: "2026-09-17",
      titel: "Wortschatz: drinnen, draußen, Wecker, Gesundheit",
      vokabeln: [
        { de: "drinnen", en: "inside", fr: "à l'intérieur", beispiel: "Bei Regen bleiben wir drinnen." },
        { de: "draußen", en: "outside", fr: "dehors, à l'extérieur", beispiel: "Heute spielen wir draußen Fußball." },
        { de: "wählen", en: "to choose", fr: "choisir", beispiel: "Ich wähle ein Eis." },
        { de: "die Zähne putzen", en: "to brush one's teeth", fr: "se laver les dents", beispiel: "Ich putze jeden Tag die Zähne." },
        { de: "die Comics", en: "the comics", fr: "les BD", beispiel: "Ich lese gern Comics." },
        { de: "laut", en: "loud", fr: "fort, bruyant", beispiel: "Der Wecker ist laut." },
        { de: "die Bewegung", en: "the movement, exercise", fr: "le mouvement", beispiel: "Bewegung ist gesund." },
        { de: "verlieren", en: "to lose", fr: "perdre", beispiel: "Ich verliere nie meinen Schlüssel." },
        { de: "der Schnupfen", en: "the runny nose, cold", fr: "le rhume", beispiel: "Ich habe Schnupfen und Husten." },
        { de: "Gute Besserung!", en: "Get well soon!", fr: "Bon rétablissement !", beispiel: "Du bist krank? Gute Besserung!" }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-21",
      titel: "Wortschatz: Mittelalter, Straßenbahn, Körper",
      vokabeln: [
        { de: "das Mittelalter", en: "the Middle Ages", fr: "le Moyen Âge", beispiel: "Im Museum sehen wir Dinge aus dem Mittelalter." },
        { de: "kämpfen", en: "to fight", fr: "se battre", beispiel: "Die Ritter kämpfen mit Schwertern." },
        { de: "die Straßenbahn", en: "the tram", fr: "le tramway", beispiel: "Die Straßenbahn fährt durch die Stadt." },
        { de: "der Wecker", en: "the alarm clock", fr: "le réveil", beispiel: "Mein Wecker klingelt um sieben Uhr." },
        { de: "wecken", en: "to wake (someone)", fr: "réveiller (quelqu'un)", beispiel: "Ich wecke meinen Bruder um sieben Uhr." },
        { de: "gegen", en: "against", fr: "contre", beispiel: "Ich bin gegen Spinnen." },
        { de: "die Nase", en: "the nose", fr: "le nez", beispiel: "Meine Nase ist kalt." },
        { de: "atmen", en: "to breathe", fr: "respirer", beispiel: "Ich atme durch die Nase." },
        { de: "die Kopfschmerzen", en: "the headache", fr: "le mal de tête", beispiel: "Ich habe Kopfschmerzen." },
        { de: "der Wackelzahn", en: "the loose tooth", fr: "la dent qui bouge", beispiel: "Ich habe einen Wackelzahn." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-28",
      titel: "Taschengeld, Museum, weit und nah",
      vokabeln: [
        { de: "separat", en: "separately", fr: "séparément", beispiel: "Wir zahlen separat im Restaurant." },
        { de: "das Taschengeld", en: "the pocket money", fr: "l'argent de poche", beispiel: "Ich bekomme zehn Euro Taschengeld." },
        { de: "regelmäßig", en: "regularly", fr: "régulièrement", beispiel: "Ich lese regelmäßig Comics." },
        { de: "verbieten", en: "to forbid", fr: "interdire", beispiel: "Meine Eltern verbieten mir Süßigkeiten am Abend." },
        { de: "das Museum, die Museen", en: "the museum", fr: "le musée", beispiel: "Wir gehen oft in Museen." },
        { de: "das Bein", en: "the leg", fr: "la jambe", beispiel: "Meine Beine sind müde." },
        { de: "weit", en: "far", fr: "loin", beispiel: "Die Schweiz ist weit von hier." },
        { de: "nah", en: "near, close", fr: "proche", beispiel: "Die Schule ist nah." },
        { de: "vergessen", en: "to forget", fr: "oublier", beispiel: "Du vergisst immer deine Sachen." },
        { de: "empfehlen", en: "to recommend", fr: "recommander, conseiller", beispiel: "Ich empfehle dir ein Buch." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Wie heißt der Plural von „das Museum“?",
          optionen: ["die Museums", "die Museen", "die Museume"], richtig: 1,
          regel: "das Museum → die Museen. Merke: Das Wort endet im Plural auf -en.",
          uebers: { fr: "Quel est le pluriel de « das Museum » ?" }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Die Schule ist nur 200 Meter von meinem Haus. Sie ist ___.",
          optionen: ["weit", "nah"], richtig: 1,
          regel: "nah = proche, kurze Entfernung. weit = loin, lange Entfernung.",
          uebers: { fr: "Choisis le bon mot : loin ou proche ?" }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Du ___ immer deine Sachen.",
          antworten: ["vergisst"],
          regel: "vergessen: ich vergesse, du vergisst, er/sie vergisst.",
          uebers: { fr: "Complète avec la bonne forme de « vergessen »." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich ___ dir ein Buch.",
          antworten: ["empfehle"],
          regel: "empfehlen + Dativ: Ich empfehle dir ein Buch. (ich empfehle, du empfiehlst)",
          uebers: { fr: "Complète avec la bonne forme de « empfehlen »." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["das Taschengeld", "Kinder bekommen dieses Geld von den Eltern."], ["regelmäßig", "jede Woche, immer wieder"], ["verbieten", "Du sagst: Das darfst du nicht!"], ["separat", "nicht zusammen, getrennt"]],
          regel: "Das sind Erklärungen auf Deutsch. So kannst du neue Wörter auch selbst erklären.",
          uebers: { fr: "Associe chaque mot à son explication en allemand." }
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["stehen", "gestanden"], ["sitzen", "gesessen"], ["verlieren", "verloren"], ["verbieten", "verboten"]],
          regel: "Das Partizip II ist hier unregelmäßig: stehen → gestanden, sitzen → gesessen, verlieren → verloren, verbieten → verboten.",
          uebers: { fr: "Associe le verbe à son participe passé (Partizip II)." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Wir", "zahlen", "getrennt", "im", "Restaurant"],
          loesung: "Wir zahlen getrennt im Restaurant",
          regel: "Das Verb steht an Position 2: Wir (1) zahlen (2).",
          uebers: { fr: "Remets les mots dans le bon ordre. Le verbe est en deuxième position." }
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["Ich", "bekomme", "nicht", "regelmäßig", "Taschengeld"],
          loesung: "Ich bekomme nicht regelmäßig Taschengeld",
          regel: "„nicht“ steht hier vor „regelmäßig“ (nicht regelmäßig = unregelmäßig).",
          uebers: { fr: "Remets les mots dans le bon ordre." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Welcher Artikel passt? ___ Empfehlung",
          optionen: ["der", "die", "das"], richtig: 1,
          regel: "Wörter auf -ung sind fast immer feminin: die Empfehlung, die Bewegung, die Übung.",
          uebers: { fr: "Quel article convient ? Les mots en -ung sont presque toujours féminins." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich ___ meinen Bruder um sieben Uhr.",
          antworten: ["wecke"],
          regel: "jemanden wecken (Akkusativ): Ich wecke meinen Bruder.",
          uebers: { fr: "Complète avec la bonne forme de « wecken »." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Sprich 4 Sätze: Was ist nah? Was ist weit? Nimm dich auf und höre dich an.",
          hinweis: "Zum Beispiel: Die Schule ist nah. / Der Supermarkt ist ... / Frankreich ist weit von ...",
          uebers: { fr: "Dis 4 phrases : qu'est-ce qui est proche ? qu'est-ce qui est loin ? Enregistre-toi et écoute-toi." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 4 Sätze über Taschengeld. Bekommst du Taschengeld? Wie oft? Was kaufst du?",
          checkliste: [
            "Ich habe das Wort „Taschengeld“ benutzt.",
            "Ich habe „regelmäßig“ oder „nicht regelmäßig“ benutzt.",
            "Das Verb steht in jedem Satz an Position 2.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Ich bekomme regelmäßig Taschengeld. Ich bekomme zehn Euro im Monat. Ich kaufe Comics und Eis. Ich vergesse mein Geld nie.",
          uebers: { fr: "Écris 4 phrases sur l'argent de poche. En reçois-tu ? À quelle fréquence ? Que t'achètes-tu ?" }
        }
      ]
    }
  ]
};

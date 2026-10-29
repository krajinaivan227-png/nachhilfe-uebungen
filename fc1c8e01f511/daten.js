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
    },
    {
      id: "2026-10-05",
      titel: "Zimmer, Gegenteile, zu zweit, zu dritt",
      vokabeln: [
        { de: "zeichnen", en: "to draw", fr: "dessiner", beispiel: "Ich zeichne einen Dinosaurier." },
        { de: "suchen", en: "to look for", fr: "chercher", beispiel: "Ich suche meine Sachen." },
        { de: "zu dritt", en: "the three of us", fr: "à trois", beispiel: "Wir haben zu dritt Tennis gespielt." },
        { de: "der Rechtshänder", en: "right-handed person", fr: "le droitier", beispiel: "Im Tennis bin ich Rechtshänder." },
        { de: "dünn", en: "thin", fr: "mince", beispiel: "Die Katze ist dünn." },
        { de: "empfehlen", en: "to recommend", fr: "recommander", beispiel: "Ich empfehle dir das Buch." },
        { de: "verboten", en: "forbidden", fr: "interdit", beispiel: "Das ist verboten." },
        { de: "raten", en: "to guess", fr: "deviner", beispiel: "Rate mal, wie alt ich bin!" },
        { de: "das Wohnzimmer", en: "the living room", fr: "le salon", beispiel: "Wir spielen im Wohnzimmer." },
        { de: "die Versicherungskarte", en: "the health insurance card", fr: "la carte d'assurance maladie", beispiel: "Im Krankenhaus brauchst du die Versicherungskarte." }
      ],
      aufgaben: [
        {
          typ: "zuordnen", stufe: 1,
          paare: [["das Wohnzimmer", "le salon"], ["das Badezimmer", "la salle de bain"], ["die Küche", "la cuisine"], ["das Schlafzimmer", "la chambre"]],
          regel: "Die Zimmer in der Wohnung.",
          uebers: { fr: "Relie les pièces de la maison." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Wir sind drei Personen. Wir spielen ___.",
          optionen: ["zu dritt", "zu zweit", "allein"], richtig: 0,
          regel: "allein = 1, zu zweit = 2, zu dritt = 3, zu viert = 4.",
          uebers: { fr: "Nous sommes trois. Nous jouons ..." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Das Gegenteil von dick ist ___.",
          optionen: ["dünn", "nah", "weit"], richtig: 0,
          regel: "dick = gros, dünn = mince.",
          uebers: { fr: "Le contraire de « dick » (gros) est ..." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Das Gegenteil von weit ist ___.",
          optionen: ["nah", "dünn", "dick"], richtig: 0,
          regel: "weit = loin, nah = proche.",
          uebers: { fr: "Le contraire de « weit » (loin) est ..." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich ___ meine Sachen.",
          antworten: ["suche"],
          regel: "suchen: ich suche, du suchst, er sucht.",
          uebers: { fr: "Complète avec « suchen » (chercher)." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Kaugummi ist in der Schule ___.",
          antworten: ["verboten"],
          regel: "verbieten (interdire) → verboten (interdit).",
          uebers: { fr: "Complète : le chewing-gum est interdit à l'école." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Ich", "empfehle", "dir", "das", "Buch"],
          loesung: "Ich empfehle dir das Buch",
          regel: "empfehlen: wem? (dir) + was? (das Buch).",
          uebers: { fr: "Remets les mots dans l'ordre." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich ___ einen Dinosaurier.",
          antworten: ["zeichne"],
          regel: "zeichnen: ich zeichne, du zeichnest.",
          uebers: { fr: "Complète avec « zeichnen » (dessiner)." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Beschreibe deine Wohnung: Welche Zimmer gibt es? Was machst du dort? Sprich 3 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "Es gibt ein Wohnzimmer, eine Küche ... / In der Küche essen wir.",
          uebers: { fr: "Décris ton appartement en 3 phrases. Enregistre-toi." }
        }
      ]
    },
    {
      id: "2026-10-18",
      titel: "Der erste, der zweite, Schmerzen, Zimmer",
      vokabeln: [
        { de: "der Gegner", en: "the opponent", fr: "l'adversaire", beispiel: "Ich kenne meinen Gegner nicht." },
        { de: "das Gemüse", en: "vegetables", fr: "les légumes", beispiel: "Spinat ist ein Gemüse." },
        { de: "die Ferien", en: "the holidays", fr: "les vacances", beispiel: "Nächste Woche sind Ferien." },
        { de: "normalerweise", en: "normally", fr: "normalement", beispiel: "Normalerweise schlafe ich bis acht Uhr." },
        { de: "duschen", en: "to shower", fr: "se doucher", beispiel: "Ich dusche mit warmem Wasser." },
        { de: "die Kopfschmerzen", en: "headache", fr: "le mal de tête", beispiel: "Ich habe Kopfschmerzen." },
        { de: "die Bauchschmerzen", en: "stomach ache", fr: "le mal de ventre", beispiel: "Er hat Bauchschmerzen." },
        { de: "das Krankenhaus", en: "the hospital", fr: "l'hôpital", beispiel: "Mein Freund geht ins Krankenhaus." },
        { de: "malen", en: "to paint", fr: "peindre", beispiel: "Ich male ein Bild." },
        { de: "der dritte Platz", en: "third place", fr: "la troisième place", beispiel: "Spinat ist auf dem dritten Platz." }
      ],
      aufgaben: [
        {
          typ: "zuordnen", stufe: 1,
          paare: [["die Kopfschmerzen", "le mal de tête"], ["die Bauchschmerzen", "le mal de ventre"], ["die Halsschmerzen", "le mal de gorge"], ["die Beinschmerzen", "le mal aux jambes"]],
          regel: "Körperteil + Schmerzen: der Kopf → die Kopfschmerzen.",
          uebers: { fr: "Relie les douleurs." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Was machst du im Badezimmer?",
          optionen: ["Ich dusche und putze meine Zähne.", "Ich koche das Essen.", "Ich schlafe im Bett."], richtig: 0,
          regel: "das Badezimmer: duschen, Zähne putzen.",
          uebers: { fr: "Que fais-tu dans la salle de bain ?" }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Wo schläfst du?",
          optionen: ["Im Schlafzimmer.", "In der Küche.", "Im Badezimmer."], richtig: 0,
          regel: "im = in dem (Wo? → Dativ).",
          uebers: { fr: "Où dors-tu ?" }
        },
        {
          typ: "luecke", stufe: 1,
          text: "1. der erste, 2. der zweite, 3. der ___",
          antworten: ["dritte"],
          regel: "der erste und der dritte sind besonders. Sonst: vier → der vierte, fünf → der fünfte.",
          uebers: { fr: "Complète : premier, deuxième, troisième." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "4. der vierte, 5. der ___",
          antworten: ["fünfte"],
          regel: "Zahl + -te: fünf → der fünfte.",
          uebers: { fr: "Complète : quatrième, cinquième." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Mein Freund hat Fußschmerzen. Er geht ___ Krankenhaus.",
          optionen: ["ins", "im", "in der"], richtig: 0,
          regel: "Wohin? → ins (in das) Krankenhaus. Wo? → im Krankenhaus.",
          uebers: { fr: "Il va à l'hôpital : « ins » ou « im » ?" }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Normalerweise", "schlafe", "ich", "bis", "acht", "Uhr"],
          loesung: "Normalerweise schlafe ich bis acht Uhr",
          regel: "Das Verb steht auf Position 2.",
          uebers: { fr: "Remets les mots dans l'ordre." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Spinat ist ein ___.",
          antworten: ["Gemüse"],
          regel: "das Gemüse = les légumes.",
          uebers: { fr: "Complète : les épinards sont un légume." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Was machst du in den Ferien? Sprich 3 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "In den Ferien spiele ich ... / schlafe ich ... / zeichne ich ...",
          uebers: { fr: "Que fais-tu pendant les vacances ? Dis 3 phrases." }
        }
      ]
    },
    {
      id: "2026-10-20",
      titel: "Lesetext: Ein Tag in Wien",
      vokabeln: [
        { de: "der Unterschied", en: "the difference", fr: "la différence", beispiel: "Ich kenne den Unterschied." },
        { de: "am Handy", en: "on the phone", fr: "sur le portable", beispiel: "Ich spiele am Handy." },
        { de: "sich entspannen", en: "to relax", fr: "se détendre", beispiel: "Ich entspanne mich zu Hause." },
        { de: "die Pflaume", en: "the plum", fr: "la prune", beispiel: "Die Pflaume hat einen Kern." },
        { de: "versprechen", en: "to promise", fr: "promettre", beispiel: "Ich verspreche dir, dass ich komme." },
        { de: "die Hauptstadt", en: "the capital", fr: "la capitale", beispiel: "Wien ist die Hauptstadt von Österreich." },
        { de: "der Turm", en: "the tower", fr: "la tour", beispiel: "Die Glocke hängt im Turm." },
        { de: "die Glocke", en: "the bell", fr: "la cloche", beispiel: "Die Pummerin ist eine große Glocke." },
        { de: "das Riesenrad", en: "the Ferris wheel", fr: "la grande roue", beispiel: "Im Prater fahren sie mit dem Riesenrad." },
        { de: "die Straßenbahn", en: "the tram", fr: "le tramway", beispiel: "Sie fahren mit der Straßenbahn." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Was ist die Hauptstadt von Österreich?",
          optionen: ["Wien", "Salzburg", "Graz"], richtig: 0,
          regel: "Wien ist die Hauptstadt von Österreich.",
          uebers: { fr: "Quelle est la capitale de l'Autriche ?" }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Wie fährt Familie Huber in die Innenstadt?",
          optionen: ["Mit der U-Bahn.", "Mit dem Fahrrad.", "Mit dem Auto."], richtig: 0,
          regel: "Im Text: Das Auto bleibt im Parkhaus, sie fahren mit der U-Bahn weiter.",
          uebers: { fr: "Comment la famille Huber va-t-elle au centre-ville ?" }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Was ist die Pummerin?",
          optionen: ["Eine große Glocke.", "Eine Kirche.", "Ein Park."], richtig: 0,
          regel: "Die Pummerin ist die größte Glocke Österreichs. Sie hängt im Stephansdom.",
          uebers: { fr: "Qu'est-ce que la Pummerin ?" }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Was essen sie beim Würstelstand?",
          optionen: ["Eine Burenwurst.", "Ein Schnitzel.", "Eine Pizza."], richtig: 0,
          regel: "Beim Würstelstand essen sie eine Burenwurst. Das Schnitzel essen sie später.",
          uebers: { fr: "Que mangent-ils au stand de saucisses ?" }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["die Kirche", "l'église"], ["das Riesenrad", "la grande roue"], ["die Straßenbahn", "le tramway"], ["der Turm", "la tour"]],
          regel: "Wörter aus dem Text.",
          uebers: { fr: "Relie les mots du texte." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich ___ mich zu Hause.",
          antworten: ["entspanne"],
          regel: "sich entspannen: ich entspanne mich, du entspannst dich.",
          uebers: { fr: "Complète : je me détends à la maison." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich verspreche dir, dass ich heute in den Park ___.",
          optionen: ["gehe", "geht", "gehst"], richtig: 0,
          regel: "Nach dass steht das Verb am Ende: ..., dass ich in den Park gehe.",
          uebers: { fr: "Choisis la bonne forme du verbe." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Wien", "ist", "die", "Hauptstadt", "von", "Österreich"],
          loesung: "Wien ist die Hauptstadt von Österreich",
          regel: "Das Verb steht auf Position 2.",
          uebers: { fr: "Remets les mots dans l'ordre." }
        },
        {
          typ: "sprechen", stufe: 3,
          auftrag: "Was möchtest du in Wien sehen? Sprich 3 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "Ich möchte ... sehen. / Ich möchte mit dem Riesenrad fahren.",
          uebers: { fr: "Que voudrais-tu voir à Vienne ? Dis 3 phrases." }
        }
      ]
    },
    {
      id: "2026-10-26",
      titel: "Wochentage, kein, Wörter aus dem Park",
      vokabeln: [
        { de: "die Rutsche", en: "the slide", fr: "le toboggan", beispiel: "Im Park gibt es eine Rutsche." },
        { de: "rutschen", en: "to slide", fr: "glisser", beispiel: "Ich rutsche gern." },
        { de: "scheinen", en: "to shine", fr: "briller", beispiel: "Die Sonne scheint." },
        { de: "in der Nähe", en: "nearby", fr: "à côté, près", beispiel: "Der Park ist in der Nähe." },
        { de: "das Obst", en: "fruit", fr: "les fruits", beispiel: "Ich esse gern Obst." },
        { de: "besteigen", en: "to climb", fr: "monter (en haut de)", beispiel: "Man kann den Turm besteigen." },
        { de: "der Hai", en: "the shark", fr: "le requin", beispiel: "Im Aquarium habe ich einen Hai gesehen." },
        { de: "die Krücken", en: "the crutches", fr: "les béquilles", beispiel: "Er geht mit Krücken." },
        { de: "die Impfung", en: "the vaccination", fr: "le vaccin", beispiel: "Ich habe beim Arzt eine Impfung bekommen." }
      ],
      aufgaben: [
        {
          typ: "luecke", stufe: 1,
          text: "Montag, Dienstag, ___, Donnerstag",
          antworten: ["Mittwoch"],
          regel: "Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag.",
          uebers: { fr: "Complète les jours de la semaine." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Freitag, Samstag, ___",
          antworten: ["Sonntag"],
          regel: "Sonntag kommt von die Sonne.",
          uebers: { fr: "Complète les jours de la semaine." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Halloween ist am Samstag. Welcher Tag ist vor Samstag?",
          optionen: ["Freitag", "Sonntag", "Montag"], richtig: 0,
          regel: "Freitag, dann Samstag, dann Sonntag.",
          uebers: { fr: "Quel jour vient avant samedi ?" }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich mag ___ Pflaumen.",
          optionen: ["keine", "nicht", "kein"], richtig: 0,
          regel: "Nomen ohne Artikel → kein/keine. Pflaumen (Plural) → keine Pflaumen.",
          uebers: { fr: "Je n'aime pas les prunes : choisis la bonne négation." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Die Sonne ___ heute nicht.",
          optionen: ["scheint", "scheinst", "scheinen"], richtig: 0,
          regel: "die Sonne = sie → sie scheint.",
          uebers: { fr: "Choisis la bonne forme de « scheinen »." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["der Hai", "le requin"], ["die Rutsche", "le toboggan"], ["die Impfung", "le vaccin"], ["die Krücken", "les béquilles"]],
          regel: "Neue Wörter der Stunde.",
          uebers: { fr: "Relie les mots." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Der", "Park", "ist", "in", "der", "Nähe"],
          loesung: "Der Park ist in der Nähe",
          regel: "in der Nähe = près d'ici.",
          uebers: { fr: "Remets les mots dans l'ordre." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich ___ mich draußen.",
          optionen: ["entspanne", "entspannst", "entspannt"], richtig: 0,
          regel: "ich entspanne mich, du entspannst dich, er entspannt sich.",
          uebers: { fr: "Choisis la bonne forme." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 4 Sätze: Was machst du an Halloween? Welcher Tag ist das?",
          checkliste: [
            "Ich habe einen Wochentag genannt.",
            "Das Verb steht auf Position 2.",
            "Ich habe mindestens ein neues Wort benutzt.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Halloween ist am Samstag. Am Abend gehe ich mit Freunden raus. Wir essen viele Süßigkeiten. Danach entspanne ich mich zu Hause.",
          uebers: { fr: "Écris 4 phrases : que fais-tu à Halloween ?" }
        }
      ]
    }
  ]
};

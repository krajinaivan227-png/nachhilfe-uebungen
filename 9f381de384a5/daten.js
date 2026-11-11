window.HEFT = {
  vorname: "Mark",
  niveau: "A2",
  modus: "ruhig",
  hilfe: "fr",
  stunden: [
    {
      id: "2026-09-15",
      titel: "Fragen, Urlaub, Alltag",
      vokabeln: [
        { de: "die Frage", en: "the question", fr: "la question", beispiel: "Ich habe eine Frage." },
        { de: "entdecken", en: "to discover", fr: "découvrir", beispiel: "Kolumbus hat Amerika für Europa entdeckt." },
        { de: "der Urlaub", en: "the vacation", fr: "les vacances", beispiel: "Im Urlaub möchte ich viel schwimmen." },
        { de: "die Angst", en: "the fear", fr: "la peur", beispiel: "Ich habe Angst vor Spinnen." },
        { de: "der Streit", en: "the quarrel", fr: "la dispute", beispiel: "Der Streit war schnell vorbei." },
        { de: "die Farbe", en: "the colour", fr: "la couleur", beispiel: "Blau ist meine Lieblingsfarbe." },
        { de: "wechseln", en: "to change", fr: "changer", beispiel: "Ich wechsle die Batterie." },
        { de: "genau", en: "exactly", fr: "exactement", beispiel: "Das ist genau richtig." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-22",
      titel: "Art, Kunst, Gesundheit",
      vokabeln: [
        { de: "die Art", en: "the type, the kind", fr: "le type, la sorte", beispiel: "Es gibt viele Fischarten." },
        { de: "unglaublich", en: "unbelievable", fr: "incroyable", beispiel: "Das Essen ist unglaublich gut." },
        { de: "die Kunst", en: "the art", fr: "l'art", beispiel: "Ich hatte heute Kunstunterricht." },
        { de: "der Künstler", en: "the artist", fr: "l'artiste", beispiel: "Der Künstler malt ein Bild." },
        { de: "als", en: "when (in the past)", fr: "quand (au passé)", beispiel: "Als ich klein war, habe ich viel gespielt." },
        { de: "zwischen", en: "between", fr: "entre", beispiel: "Ich schlafe zwischen acht und neun Stunden." },
        { de: "die Wissenschaft", en: "the science", fr: "la science", beispiel: "Physik ist eine Wissenschaft." },
        { de: "das Gemüse", en: "the vegetables", fr: "les légumes", beispiel: "Gemüse ist gesund." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-29",
      titel: "Wortschatz: Schule, Gesundheit, Körper",
      vokabeln: [
        { de: "immer", en: "always", fr: "toujours", beispiel: "Ich nehme immer die Tram." },
        { de: "das Fach", en: "the school subject", fr: "la matière", beispiel: "Mein Lieblingsfach ist Physik." },
        { de: "das Fleisch", en: "the meat", fr: "la viande", beispiel: "Ich esse gern Fleisch." },
        { de: "sich entscheiden", en: "to decide", fr: "se décider", beispiel: "Ich entscheide mich für das blaue Shirt." },
        { de: "gesund", en: "healthy", fr: "en bonne santé, sain", beispiel: "Obst ist gesund." },
        { de: "verletzen", en: "to hurt, to injure", fr: "blesser", beispiel: "Er hat seinen Fuß verletzt." },
        { de: "das Bein", en: "the leg", fr: "la jambe", beispiel: "Mein Bein tut weh." },
        { de: "das Knie", en: "the knee", fr: "le genou", beispiel: "Das Knie ist in der Mitte vom Bein." },
        { de: "der Schmerz, die Schmerzen", en: "the pain", fr: "la douleur", beispiel: "Ich nehme eine Schmerztablette gegen die Schmerzen." },
        { de: "sagen", en: "to say", fr: "dire", beispiel: "Was hast du gesagt?" }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Er hat seinen Fuß ___.",
          optionen: ["verletzt", "verletzen", "verletzte"], richtig: 0,
          regel: "Perfekt = haben + Partizip II. verletzen → er hat verletzt.",
          uebers: { fr: "Choisis la bonne forme (participe passé, Partizip II)." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Mein Lieblingsfach ist Physik. Was ist dein ___?",
          antworten: ["Lieblingsfach"],
          regel: "Lieblings- + Fach = Lieblingsfach (das Fach, die Fächer).",
          uebers: { fr: "Complète le mot." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Was hast du ___?",
          antworten: ["gesagt"],
          regel: "sagen → hast gesagt. Perfekt: haben + Partizip II (am Ende).",
          uebers: { fr: "Complète avec le participe passé de « sagen »." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Mein Bein tut weh. Ich habe ___ im Bein.",
          optionen: ["Schmerzen", "Fleisch", "Fächer"], richtig: 0,
          regel: "Schmerzen = pain (meistens im Plural): Ich habe Schmerzen.",
          uebers: { fr: "Choisis le mot qui convient." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["das Bein", "Damit gehst du."], ["das Knie", "Es ist in der Mitte vom Bein."], ["das Fleisch", "Zum Beispiel Huhn oder Rind"], ["gesund", "nicht krank"]],
          regel: "Das sind einfache Erklärungen auf Deutsch. So kannst du neue Wörter selbst erklären.",
          uebers: { fr: "Associe chaque mot à son explication en allemand." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Wie heißt das Nomen zu „gesund“?",
          optionen: ["die Gesundheit", "der Gesund", "das Gesunde"], richtig: 0,
          regel: "Aus einem Adjektiv wird mit -heit ein Nomen: gesund → die Gesundheit (feminin).",
          uebers: { fr: "Quel est le nom qui correspond à « gesund » ?" }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich ___ mich für den roten Pullover.",
          antworten: ["entscheide"],
          regel: "sich entscheiden: ich entscheide mich, du entscheidest dich, er entscheidet sich.",
          uebers: { fr: "Conjugue le verbe « sich entscheiden » (ich)." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Er", "hat", "sein", "Bein", "verletzt"],
          loesung: "Er hat sein Bein verletzt",
          regel: "Perfekt: hat auf Position 2, das Partizip (verletzt) am Ende.",
          uebers: { fr: "Mets les mots dans le bon ordre. Le participe passé va à la fin." }
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["Warum bist du müde?", "Weil ich wenig geschlafen habe."], ["Wie viel kostet das Buch?", "Zehn Euro."], ["Wo ist dein Handy?", "Auf dem Tisch."], ["Wer ist das?", "Das ist mein Bruder."]],
          regel: "Wiederholung Fragewörter: warum → weil, wie viel → Preis/Menge, wo → Ort, wer → Person.",
          uebers: { fr: "Associe chaque question à la bonne réponse." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Wasser trinken ist gut ___ die Gesundheit.",
          optionen: ["für", "mit", "zu"], richtig: 0,
          regel: "gut für + Akkusativ: gut für die Gesundheit. Auch: schlecht für die Gesundheit.",
          uebers: { fr: "Choisis la bonne préposition." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Was machst du für deine Gesundheit? Sprich 4 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "Zum Beispiel: Ich trinke ... / Ich mache ... / Ich esse (nicht) ...",
          uebers: { fr: "Que fais-tu pour ta santé ? Dis 4 phrases. Enregistre-toi et écoute-toi." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 5 Sätze über dein Lieblingsfach und über Gesundheit. Benutze mindestens drei neue Wörter.",
          checkliste: [
            "Ich habe mein Lieblingsfach genannt.",
            "Ich habe mindestens drei neue Wörter benutzt.",
            "Das Verb steht auf Position 2.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Mein Lieblingsfach ist Physik. Ich bin gesund und mache viel Sport. Ich esse gern Fleisch und Gemüse. Gestern hat mein Freund sein Knie verletzt. Er hatte starke Schmerzen im Bein.",
          uebers: { fr: "Écris 5 phrases sur ta matière préférée et sur la santé. Utilise au moins trois mots nouveaux." }
        }
      ]
    },
    {
      id: "2026-10-06",
      titel: "Perfekt mit sein, sagen oder sprechen",
      vokabeln: [
        { de: "der Flughafen", en: "the airport", fr: "l'aéroport", beispiel: "Wir fahren zum Flughafen." },
        { de: "fliegen (ist geflogen)", en: "to fly", fr: "prendre l'avion, voler", beispiel: "Letzten Sommer bin ich nach Spanien geflogen." },
        { de: "gesund", en: "healthy", fr: "sain, en bonne santé", beispiel: "Gemüse ist gesund." },
        { de: "die Verletzung", en: "the injury", fr: "la blessure", beispiel: "Die Verletzung ist nicht schlimm." },
        { de: "der Gips", en: "the cast", fr: "le plâtre", beispiel: "Mein Bein ist im Gips." },
        { de: "das Fleisch", en: "meat", fr: "la viande", beispiel: "Magst du veganes Fleisch?" },
        { de: "probieren", en: "to try", fr: "essayer, goûter", beispiel: "Ich habe es nie probiert." },
        { de: "sich entscheiden", en: "to decide", fr: "se décider", beispiel: "Mein Bruder entscheidet sich, einen PC zu bauen." },
        { de: "bauen", en: "to build", fr: "construire", beispiel: "Bob der Baumeister baut ein Haus." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Letzten Sommer ___ ich nach Spanien geflogen.",
          optionen: ["bin", "habe", "war"], richtig: 0,
          regel: "fliegen = Bewegung → Perfekt mit sein: ich bin geflogen.",
          uebers: { fr: "Choisis l'auxiliaire (passé composé)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Welcher Satz ist richtig?",
          optionen: ["Letzten Sommer bin ich nach Spanien geflogen.", "Letzten Sommer ich bin nach Spanien geflogen.", "Letzten Sommer bin ich geflogen nach Spanien."], richtig: 0,
          regel: "Verb (bin) auf Position 2, Partizip (geflogen) am Ende.",
          uebers: { fr: "Quelle phrase est correcte ?" }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich habe veganes Fleisch nie ___. (probieren)",
          antworten: ["probiert"],
          regel: "Verben auf -ieren bilden das Partizip ohne ge-: probieren → probiert.",
          uebers: { fr: "Complète avec le participe passé de « probieren »." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich ___ Deutsch und Französisch.",
          optionen: ["spreche", "sage"], richtig: 0,
          regel: "sprechen = eine Sprache sprechen / mit jemandem reden. sagen = etwas sagen (einen Satz).",
          uebers: { fr: "« sprechen » (parler) ou « sagen » (dire) ?" }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Kannst du das noch einmal ___?",
          antworten: ["sagen"],
          regel: "etwas sagen = dire quelque chose.",
          uebers: { fr: "Complète : tu peux le redire ?" }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["der Flughafen", "l'aéroport"], ["das Flugzeug", "l'avion"], ["der Flug", "le vol"], ["der Gips", "le plâtre"]],
          regel: "Flughafen, Flugzeug, Flug kommen von fliegen.",
          uebers: { fr: "Relie les mots." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Mein Bruder ___ sich, einen PC zu bauen.",
          antworten: ["entscheidet"],
          regel: "sich entscheiden: er entscheidet sich.",
          uebers: { fr: "Complète avec « sich entscheiden »." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Nach", "der", "Stunde", "gehe", "ich", "nach", "Hause"],
          loesung: "Nach der Stunde gehe ich nach Hause",
          regel: "nach + Dativ: nach der Stunde. Das Verb steht auf Position 2.",
          uebers: { fr: "Remets les mots dans l'ordre." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Erzähle von einer Reise mit dem Flugzeug. Sprich 4 Sätze im Perfekt. Nimm dich auf und höre dich an.",
          hinweis: "Ich bin nach ... geflogen. Der Flug hat ... Stunden gedauert. Ich habe ... gegessen.",
          uebers: { fr: "Raconte un voyage en avion (4 phrases au passé composé)." }
        }
      ]
    },
    {
      id: "2026-10-13",
      titel: "weil, es gibt / es gab, Vorteile und Nachteile",
      vokabeln: [
        { de: "studieren", en: "to study (at university)", fr: "faire des études", beispiel: "Er studiert an der Universität." },
        { de: "lernen", en: "to learn, to study", fr: "apprendre, réviser", beispiel: "Ich lerne für den Test." },
        { de: "der Speck", en: "bacon", fr: "le lard", beispiel: "Ich esse Eier mit Speck." },
        { de: "faul", en: "lazy", fr: "paresseux", beispiel: "Am Samstag bin ich faul." },
        { de: "gewinnen", en: "to win", fr: "gagner", beispiel: "Wer gewinnt das Spiel?" },
        { de: "der Durchschnitt", en: "the average", fr: "la moyenne", beispiel: "Was war der Durchschnitt im Test?" },
        { de: "bekommen (bekam)", en: "to get", fr: "recevoir", beispiel: "Er bekam eine gute Note." },
        { de: "der Vorteil", en: "the advantage", fr: "l'avantage", beispiel: "Ein Vorteil ist: Fliegen ist schnell." },
        { de: "der Nachteil", en: "the disadvantage", fr: "l'inconvénient", beispiel: "Ein Nachteil ist: Der Flug ist langweilig." },
        { de: "gegen", en: "against", fr: "contre", beispiel: "Ich spiele Schach gegen meine Familie." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Ich esse Eier ohne Salz, ___",
          optionen: ["weil ich faul bin.", "weil ich bin faul.", "weil bin ich faul."], richtig: 0,
          regel: "Nach weil steht das Verb am Ende.",
          uebers: { fr: "Après « weil », le verbe va à la fin." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Gestern ___ es einen Test.",
          optionen: ["gab", "gibt", "gegeben"], richtig: 0,
          regel: "es gibt (heute) → es gab (gestern).",
          uebers: { fr: "Il y avait un test hier : choisis la bonne forme." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Heute ___ es viele Hausübungen.",
          antworten: ["gibt"],
          regel: "es gibt = il y a (+ Akkusativ).",
          uebers: { fr: "Complète : il y a beaucoup de devoirs." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Nach", "dem", "Aufstehen", "esse", "ich", "zwei", "Eier"],
          loesung: "Nach dem Aufstehen esse ich zwei Eier",
          regel: "Zeit am Anfang → Verb auf Position 2, dann ich.",
          uebers: { fr: "Remets les mots dans l'ordre." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Für den zweiten Test ___ er eine neue Note. (bekommen, Präteritum)",
          antworten: ["bekam"],
          regel: "bekommen – bekam – hat bekommen. Achtung: bekommen = recevoir.",
          uebers: { fr: "Complète au prétérit de « bekommen » (recevoir)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich ___ heute für den Deutschtest.",
          optionen: ["lerne", "studiere"], richtig: 0,
          regel: "lernen = für die Schule oder einen Test. studieren = an der Universität.",
          uebers: { fr: "« lernen » ou « studieren » ?" }
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["der Vorteil", "l'avantage"], ["der Nachteil", "l'inconvénient"], ["der Durchschnitt", "la moyenne"], ["faul", "paresseux"]],
          regel: "der Vorteil ↔ der Nachteil.",
          uebers: { fr: "Relie les mots." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich spiele Schach ___ meine Familie.",
          antworten: ["gegen"],
          regel: "gegen + Akkusativ = contre.",
          uebers: { fr: "Complète : je joue aux échecs contre ma famille." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Fliegen: Schreibe 2 Vorteile und 2 Nachteile.",
          checkliste: [
            "Ich habe „Ein Vorteil ist, dass …“ und „Ein Nachteil ist, dass …“ benutzt.",
            "Nach dass steht das Verb am Ende.",
            "Ich habe 4 Sätze geschrieben.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Ein Vorteil ist, dass Fliegen schnell ist. Ein anderer Vorteil ist, dass man weit reisen kann. Ein Nachteil ist, dass der Flug langweilig ist. Ein anderer Nachteil ist, dass Fliegen teuer ist.",
          uebers: { fr: "Écris 2 avantages et 2 inconvénients de l'avion." }
        }
      ]
    },
    {
      id: "2026-10-30",
      titel: "von … bis, Schlaf, trennbare Verben",
      vokabeln: [
        { de: "von … bis", en: "from … to", fr: "de … à", beispiel: "Ich habe von 8:30 Uhr bis 12 Uhr Schule." },
        { de: "nehmen", en: "to take", fr: "prendre", beispiel: "Ich nehme den Bus und die Tram." },
        { de: "wiederholen", en: "to repeat", fr: "répéter", beispiel: "Wiederhole das Wort bitte." },
        { de: "zu Bett gehen", en: "to go to bed", fr: "aller se coucher", beispiel: "Ich gehe um 22 Uhr zu Bett." },
        { de: "einschlafen", en: "to fall asleep", fr: "s'endormir", beispiel: "Ich schlafe um 23 Uhr ein." },
        { de: "bauen", en: "to build", fr: "construire", beispiel: "Ich will ein Haus bauen." },
        { de: "bereit", en: "ready", fr: "prêt", beispiel: "Bist du bereit?" },
        { de: "brechen (hat gebrochen)", en: "to break", fr: "casser", beispiel: "Er hat sich das Bein gebrochen." },
        { de: "sich ausruhen", en: "to rest", fr: "se reposer", beispiel: "Am Sonntag ruhe ich mich aus." },
        { de: "die Ruhe", en: "the calm, the quiet", fr: "le calme", beispiel: "Ich brauche Ruhe." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Ich habe Schule ___ 8:30 Uhr ___ 12 Uhr.",
          optionen: ["von … bis", "seit … bis", "von … nach"], richtig: 0,
          regel: "von … bis = de … à (für die Zeit).",
          uebers: { fr: "Choisis : de 8h30 à 12h." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich ___ den Bus und die Tram.",
          antworten: ["nehme"],
          regel: "nehmen: ich nehme, du nimmst, er nimmt.",
          uebers: { fr: "Complète avec « nehmen » (prendre)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Am Freitag ___ um 23 Uhr zu Bett.",
          optionen: ["gehe ich", "ich gehe"], richtig: 0,
          regel: "Zeit am Anfang → Verb auf Position 2, dann ich.",
          uebers: { fr: "Choisis le bon ordre des mots." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich gehe um 22 Uhr zu Bett, aber ich schlafe erst um 23 Uhr ___.",
          antworten: ["ein"],
          regel: "einschlafen ist trennbar: ich schlafe … ein.",
          uebers: { fr: "Complète : je m'endors seulement à 23 h." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Am", "Montag", "hatte", "ich", "kein", "Handy"],
          loesung: "Am Montag hatte ich kein Handy",
          regel: "Zeit am Anfang → Verb auf Position 2. Nicht „nicht mein Handy“, sondern „kein Handy“.",
          uebers: { fr: "Remets les mots dans l'ordre." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ivan sagt zu dir: „___ das Wort bitte!“",
          optionen: ["Wiederhole", "Wiederholst", "Wiederholen"], richtig: 0,
          regel: "Imperativ mit du: wiederholen → Wiederhole!",
          uebers: { fr: "L'impératif (tu) : répète le mot !" }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["einschlafen", "s'endormir"], ["bauen", "construire"], ["bereit", "prêt"], ["die Ruhe", "le calme"]],
          regel: "die Ruhe → sich ausruhen.",
          uebers: { fr: "Relie les mots." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ein Nachteil von Schule ist, dass sie langweilig ___.",
          antworten: ["ist"],
          regel: "Nach dass steht das Verb am Ende.",
          uebers: { fr: "Complète : un inconvénient de l'école, c'est qu'elle est ennuyeuse." }
        },
        {
          typ: "mc", stufe: 3,
          frage: "Er hat sich beim Fußball das Bein ___.",
          optionen: ["gebrochen", "gebrecht", "brechen"], richtig: 0,
          regel: "brechen – brach – hat gebrochen.",
          uebers: { fr: "Il s'est cassé la jambe : choisis le participe." }
        },
        {
          typ: "luecke", stufe: 3,
          text: "Am Sonntag ruhe ich mich ___.",
          antworten: ["aus"],
          regel: "sich ausruhen ist trennbar: ich ruhe mich aus.",
          uebers: { fr: "Complète : le dimanche, je me repose." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["der Vorteil", "der Nachteil"], ["gesund", "krank"], ["faul", "fleißig"], ["gewinnen", "verlieren"]],
          regel: "Wiederholung (29.09., 13.10.): Gegenteile lernt man gut zusammen.",
          uebers: { fr: "Associe les contraires." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Letztes Jahr ___ ich nach Spanien geflogen.",
          optionen: ["bin", "habe", "war"],
          richtig: 0,
          regel: "Wiederholung (06.10.): fliegen = Bewegung → Perfekt mit sein.",
          uebers: { fr: "Choisis : haben ou sein ?" }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Hast du den Kuchen schon ___? (probieren)",
          antworten: ["probiert"],
          regel: "Wiederholung (06.10.): Verben auf -ieren bilden das Partizip ohne ge-: probiert.",
          uebers: { fr: "Complète avec le participe passé de « probieren »." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich komme heute nicht, ___ ich krank bin.",
          optionen: ["weil", "deshalb", "dass"],
          richtig: 0,
          regel: "Wiederholung (13.10.): Nach weil steht das Verb am Ende.",
          uebers: { fr: "Choisis le bon mot (« parce que »)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Mein Bruder ___ an der Universität Medizin.",
          optionen: ["studiert", "lernt", "bekommt"],
          richtig: 0,
          regel: "Wiederholung (13.10.): studieren = an der Universität. lernen = für die Schule oder einen Test.",
          uebers: { fr: "Choisis le bon verbe." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Wie schläfst du? Sprich 4 Sätze: Wann gehst du zu Bett? Wann schläfst du ein? Was machst du vorher? Nimm dich auf und höre dich an.",
          hinweis: "Ich gehe um … Uhr zu Bett. Ich schlafe um … Uhr ein. Vorher lese ich … Am Wochenende …",
          uebers: { fr: "Parle de ton sommeil (4 phrases)." }
        }
      ]
    },
    {
      id: "2026-11-03",
      titel: "aufpassen, tragen, Tageszeiten, der erste …",
      vokabeln: [
        { de: "aufpassen", en: "to pay attention", fr: "faire attention", beispiel: "In Mathe passe ich gut auf." },
        { de: "der erste, der zweite, der dritte", en: "the first, the second, the third", fr: "le premier, le deuxième, le troisième", beispiel: "Sonntag war der erste November." },
        { de: "tragen (du trägst)", en: "to wear", fr: "porter (un vêtement)", beispiel: "Ich trage ein T-Shirt und eine Jeans." },
        { de: "der Alltag", en: "everyday life", fr: "le quotidien", beispiel: "Im Alltag trage ich keine Jogginghose." },
        { de: "außer", en: "except, apart from", fr: "sauf, à part", beispiel: "Ich trinke nichts außer Wasser." },
        { de: "das Sprudelwasser", en: "sparkling water", fr: "l'eau gazeuse", beispiel: "Ich trinke gern Sprudelwasser." },
        { de: "der Vormittag", en: "the morning (before noon)", fr: "la matinée", beispiel: "Am Vormittag habe ich Schule." },
        { de: "der Nachmittag", en: "the afternoon", fr: "l'après-midi", beispiel: "Am Nachmittag mache ich Sport." },
        { de: "einfach, leicht", en: "easy", fr: "facile", beispiel: "Englisch ist für mich einfach." },
        { de: "sollen (sollte)", en: "to be supposed to", fr: "devoir (être prévu)", beispiel: "Der Kurs sollte gestern starten." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "In Mathe passe ich gut ___.",
          optionen: ["auf", "an", "zu"], richtig: 0,
          regel: "aufpassen ist trennbar: ich passe … auf.",
          uebers: { fr: "Choisis le bon mot : je fais bien attention en maths." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Welcher Satz ist richtig?",
          optionen: ["Ich passe in Englisch nicht auf.", "Ich passe nicht in Englisch nicht auf.", "Ich nicht passe in Englisch auf."], richtig: 0,
          regel: "Nur ein „nicht“ im Satz. Das Verb (passe) steht auf Position 2, „auf“ am Ende.",
          uebers: { fr: "Quelle phrase est correcte ?" }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Sonntag war der ___ November. (1.)",
          antworten: ["erste"],
          regel: "1. = der erste, 2. = der zweite, 3. = der dritte, 4. = der vierte.",
          uebers: { fr: "Complète : dimanche, c'était le premier novembre." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "___ du eine Jogginghose?",
          optionen: ["Trägst", "Tragst", "Tragt"], richtig: 0,
          regel: "tragen: ich trage, du trägst, er trägt (mit ä).",
          uebers: { fr: "Choisis la bonne forme de « tragen » (porter)." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Er ___ ein weißes T-Shirt und eine graue Jeans. (tragen)",
          antworten: ["trägt"],
          regel: "tragen: er trägt (mit ä).",
          uebers: { fr: "Conjugue « tragen » (er)." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Beim Sport trage ich eine Jogginghose, aber nicht im ___.",
          antworten: ["Alltag"],
          regel: "der Alltag = le quotidien → im Alltag.",
          uebers: { fr: "Complète : mais pas au quotidien." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich passe in Englisch nicht auf, ___",
          optionen: ["weil ich sehr gut Englisch spreche.", "weil ich spreche sehr gut Englisch.", "weil spreche ich sehr gut Englisch."], richtig: 0,
          regel: "Nach weil steht das Verb am Ende.",
          uebers: { fr: "Après « weil », le verbe va à la fin." }
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["Ich", "frage", "meine", "Mutter,", "ob", "ich", "das", "alte", "Handy", "haben", "kann"],
          loesung: "Ich frage meine Mutter, ob ich das alte Handy haben kann",
          regel: "ob = si (question). Nach ob steht das Verb am Ende: …, ob ich das Handy haben kann.",
          uebers: { fr: "Remets les mots dans l'ordre. Après « ob », le verbe va à la fin." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["der Morgen", "le matin"], ["der Vormittag", "la matinée"], ["der Nachmittag", "l'après-midi"], ["der Abend", "le soir"]],
          regel: "Morgen → Vormittag → Mittag → Nachmittag → Abend. Mit am: am Morgen, am Abend.",
          uebers: { fr: "Relie les moments de la journée." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich trinke nichts ___ Wasser.",
          optionen: ["außer", "ohne", "mit"], richtig: 0,
          regel: "außer = sauf, à part: nichts außer Wasser = seulement de l'eau.",
          uebers: { fr: "Je ne bois rien à part de l'eau : choisis le bon mot." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Magst du lieber Eistee Pfirsich oder Zitrone? – Ich mag ___ Eistee Zitrone.",
          optionen: ["lieber", "gern", "viel"], richtig: 0,
          regel: "gern → lieber → am liebsten. Für einen Vergleich: lieber.",
          uebers: { fr: "Tu préfères quoi ? Choisis le bon mot." }
        },
        {
          typ: "luecke", stufe: 3,
          text: "Der Kurs ___ gestern starten, aber der Lehrer konnte nicht. (sollen, Präteritum)",
          antworten: ["sollte"],
          regel: "sollen → sollte (Präteritum) = es war so geplant.",
          uebers: { fr: "Complète au prétérit de « sollen » : le cours devait commencer hier." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich habe ___ 8 Uhr ___ 13 Uhr Schule.",
          optionen: ["von … bis", "seit … bis", "ab … nach"], richtig: 0,
          regel: "Wiederholung (30.10.): von … bis = de … à.",
          uebers: { fr: "Choisis : de 8 h à 13 h." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Wann schläfst du ___? – Um 23 Uhr.",
          optionen: ["ein", "auf", "aus"], richtig: 0,
          regel: "Wiederholung (30.10.): einschlafen ist trennbar: Ich schlafe um 23 Uhr ein.",
          uebers: { fr: "Choisis le bon mot (s'endormir)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Am Wochenende ___ ich mich aus.",
          optionen: ["ruhe", "ruhst", "ruht"], richtig: 0,
          regel: "Wiederholung (30.10.): sich ausruhen: ich ruhe mich aus.",
          uebers: { fr: "Conjugue « sich ausruhen » (ich)." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Gestern ___ es einen Test. (es gibt → Präteritum)",
          antworten: ["gab"],
          regel: "Wiederholung (13.10.): es gibt (heute) → es gab (gestern).",
          uebers: { fr: "Complète au passé : il y avait un test hier." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["der Flughafen", "l'aéroport"], ["der Gips", "le plâtre"], ["die Ruhe", "le calme"], ["der Durchschnitt", "la moyenne"]],
          regel: "Wiederholung (06.10., 13.10., 30.10.): Wörter der letzten Stunden.",
          uebers: { fr: "Relie les mots." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Was ist dein Style? Was trägst du im Alltag und was beim Sport? Sprich 4 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "Im Alltag trage ich … / Beim Sport trage ich … / Ich trage gern … / Ich trage nie …",
          uebers: { fr: "Quel est ton style ? Que portes-tu au quotidien et au sport ? Dis 4 phrases." }
        }
      ]
    },
    {
      id: "2026-11-10",
      titel: "schwierig und leicht, hatte und war, wahrscheinlich",
      vokabeln: [
        { de: "schwierig", en: "difficult", fr: "difficile", beispiel: "Chinesisch ist eine schwierige Sprache." },
        { de: "die Sprache", en: "the language", fr: "la langue", beispiel: "Ich spreche zwei Sprachen." },
        { de: "der Test (der Englischtest)", en: "the test", fr: "le contrôle, l'examen", beispiel: "Der Englischtest war am Freitag." },
        { de: "circa (ca.)", en: "about, approximately", fr: "environ", beispiel: "Der Test dauert circa eine Stunde." },
        { de: "die Korrektur", en: "the marking, the correction", fr: "la correction", beispiel: "Die Lehrerin hat eine Woche für die Korrektur." },
        { de: "die Seite", en: "the page", fr: "la page", beispiel: "Der Test war zwei Seiten lang." },
        { de: "wahrscheinlich", en: "probably", fr: "probablement", beispiel: "Morgen regnet es wahrscheinlich." },
        { de: "die Wahrscheinlichkeit", en: "the probability", fr: "la probabilité", beispiel: "Die Wahrscheinlichkeit ist klein." },
        { de: "bestellen", en: "to order", fr: "commander", beispiel: "Ich bestelle eine Pizza." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Mathe in der Schule ist sehr einfach. Mathe in der Olympiade ist sehr ___.",
          optionen: ["schwierig", "leicht", "einfach"], richtig: 0,
          regel: "schwierig ist das Gegenteil von leicht und einfach.",
          uebers: { fr: "Choisis le contraire de « einfach » (facile)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Chinesisch ist eine ___ Sprache.",
          optionen: ["schwierige", "schwierig", "schwieriger"], richtig: 0,
          regel: "Ein Adjektiv vor einem Nomen bekommt eine Endung: die Sprache → eine schwierige Sprache.",
          uebers: { fr: "Choisis la bonne terminaison de l'adjectif." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich ___ Deutsch und Englisch. (sprechen)",
          antworten: ["spreche"],
          regel: "sprechen: ich spreche, du sprichst, er/sie spricht.",
          uebers: { fr: "Conjugue « sprechen » (ich)." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Letzte Woche ___ ich einen Englischtest. (haben, Präteritum)",
          antworten: ["hatte"],
          regel: "haben im Präteritum: ich hatte, du hattest, er/sie hatte.",
          uebers: { fr: "Complète avec « haben » au prétérit (ich)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Wann ___ du den Englischtest?",
          optionen: ["hattest", "hatte", "hattet"], richtig: 0,
          regel: "du hattest – bei du immer -st am Ende.",
          uebers: { fr: "Choisis la bonne forme de « haben » au prétérit (du)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Der Englischtest ___ am Freitag.",
          optionen: ["war", "hatte", "warst"], richtig: 0,
          regel: "sein im Präteritum: ich war, du warst, er/sie/es war.",
          uebers: { fr: "Choisis la bonne forme de « sein » au prétérit." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Der Test dauert ___ eine Stunde – vielleicht 55 oder 65 Minuten.",
          optionen: ["circa", "genau", "nie"], richtig: 0,
          regel: "circa (ca.) = environ: nicht genau.",
          uebers: { fr: "Choisis le mot qui veut dire « environ »." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Der Test war zwei ___ lang. (die Seite → Plural)",
          antworten: ["Seiten"],
          regel: "die Seite → die Seiten (Plural mit -n).",
          uebers: { fr: "Complète avec le pluriel de « die Seite » (la page)." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["schwierig", "difficile"], ["die Seite", "la page"], ["bestellen", "commander"], ["wahrscheinlich", "probablement"]],
          regel: "Die neuen Wörter der Stunde.",
          uebers: { fr: "Relie les mots." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Wahrscheinlich", "gewinne", "ich", "nicht"],
          loesung: "Wahrscheinlich gewinne ich nicht",
          regel: "Steht wahrscheinlich vorne, kommt das Verb direkt danach: Wahrscheinlich gewinne ich …",
          uebers: { fr: "Remets les mots dans l'ordre. Après « wahrscheinlich » au début, le verbe vient tout de suite." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "wahrscheinlich → das Nomen heißt ___",
          optionen: ["die Wahrscheinlichkeit", "die Wahrscheinlichung", "der Wahrscheinlich"], richtig: 0,
          regel: "Adjektiv + -keit → Nomen, immer feminin: wahrscheinlich → die Wahrscheinlichkeit.",
          uebers: { fr: "Quel est le nom qui vient de « wahrscheinlich » ?" }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich ___ eine Pizza. (bestellen)",
          antworten: ["bestelle"],
          regel: "bestellen = commander: ich bestelle, du bestellst, er bestellt.",
          uebers: { fr: "Conjugue « bestellen » (ich)." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Du ___ heute eine Jogginghose. (tragen)",
          antworten: ["trägst"],
          regel: "Wiederholung (03.11.): tragen: ich trage, du trägst, er trägt (mit ä).",
          uebers: { fr: "Conjugue « tragen » (du)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich passe im Unterricht gut ___.",
          optionen: ["auf", "an", "zu"], richtig: 0,
          regel: "Wiederholung (03.11.): aufpassen ist trennbar: ich passe … auf.",
          uebers: { fr: "Choisis le bon mot : je fais bien attention en cours." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich frage meine Mutter, ___ ich das alte Handy haben kann.",
          optionen: ["ob", "weil", "wenn"], richtig: 0,
          regel: "Wiederholung (03.11.): ob = si (question). Nach ob steht das Verb am Ende.",
          uebers: { fr: "Choisis le bon mot (« si » dans une question)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich ___ den Bus zur Schule. (nehmen)",
          optionen: ["nehme", "nimmst", "nimmt"], richtig: 0,
          regel: "Wiederholung (30.10.): nehmen: ich nehme, du nimmst, er nimmt.",
          uebers: { fr: "Choisis la bonne forme de « nehmen » (ich)." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["der Alltag", "le quotidien"], ["das Sprudelwasser", "l'eau gazeuse"], ["einschlafen", "s'endormir"], ["die Ruhe", "le calme"]],
          regel: "Wiederholung (30.10., 03.11.): Wörter der letzten Stunden.",
          uebers: { fr: "Relie les mots." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Welche Fächer sind für dich leicht, welche schwierig? Sprich 4 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "Mathe ist für mich … / … ist schwierig, weil … / Mein letzter Test war … / Wahrscheinlich …",
          uebers: { fr: "Quelles matières sont faciles pour toi, lesquelles sont difficiles ? Dis 4 phrases. Enregistre-toi et écoute-toi." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Dein letzter Test: Wann war er? Wie war er? Schreibe 4–5 Sätze.",
          checkliste: [
            "Ich habe hatte oder war benutzt (Präteritum).",
            "Ich habe schwierig, leicht oder einfach benutzt.",
            "Ich habe wahrscheinlich benutzt.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Letzte Woche hatte ich einen Englischtest. Der Test war zwei Seiten lang. Er war sehr leicht für mich. Die Lehrerin hat circa eine Woche für die Korrektur. Ich bekomme wahrscheinlich eine gute Note.",
          uebers: { fr: "Ton dernier contrôle : quand ? comment ? Écris 4–5 phrases." }
        }
      ]
    }
  ]
};

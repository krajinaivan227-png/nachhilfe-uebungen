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
          typ: "sprechen", stufe: 2,
          auftrag: "Wie schläfst du? Sprich 4 Sätze: Wann gehst du zu Bett? Wann schläfst du ein? Was machst du vorher? Nimm dich auf und höre dich an.",
          hinweis: "Ich gehe um … Uhr zu Bett. Ich schlafe um … Uhr ein. Vorher lese ich … Am Wochenende …",
          uebers: { fr: "Parle de ton sommeil (4 phrases)." }
        }
      ]
    }
  ]
};

window.HEFT = {
  vorname: "Daniel",
  niveau: "B1",
  modus: "ruhig",
  hilfe: "fr",
  stunden: [
    {
      id: "2026-09-28",
      titel: "Reflexive Verben und Wortschatz: Gefühle, Teilnahme",
      vokabeln: [
        { de: "sich interessieren (für)", en: "to be interested (in)", fr: "s'intéresser (à)", beispiel: "Ich interessiere mich für Geschichte." },
        { de: "sich freuen (auf/über)", en: "to be happy / to look forward to", fr: "se réjouir (de)", beispiel: "Ich freue mich auf das Wochenende." },
        { de: "sich schämen", en: "to be ashamed", fr: "avoir honte", beispiel: "Er schämt sich für den Fehler." },
        { de: "sich zurückhalten", en: "to hold back", fr: "se retenir", beispiel: "Bei der Diskussion hat er sich zurückgehalten." },
        { de: "vorsichtig", en: "careful", fr: "prudent", beispiel: "Fahr bitte vorsichtig!" },
        { de: "das Hindernis", en: "the obstacle", fr: "l'obstacle", beispiel: "Der Baum ist ein Hindernis auf dem Weg." },
        { de: "teilnehmen (an + Dativ)", en: "to take part (in)", fr: "participer (à)", beispiel: "Viele Leute nehmen an dem Fest teil." },
        { de: "die Abwechslung", en: "variety", fr: "la variété, le changement", beispiel: "Der Alltag braucht etwas Abwechslung." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-29",
      titel: "Wortschatz: Morgen, Essen, Dank",
      vokabeln: [
        { de: "aufwachen", en: "to wake up", fr: "se réveiller", beispiel: "Ich bin um sieben Uhr aufgewacht." },
        { de: "wecken", en: "to wake (someone) up", fr: "réveiller", beispiel: "Meine Mutter weckt mich jeden Morgen." },
        { de: "der Wecker", en: "the alarm clock", fr: "le réveil", beispiel: "Mein Wecker klingelt um sechs Uhr." },
        { de: "backen", en: "to bake", fr: "cuire au four", beispiel: "Er hat ein Brot gebacken." },
        { de: "füttern", en: "to feed (an animal)", fr: "nourrir", beispiel: "Ich füttere die Katze." },
        { de: "fressen", en: "to eat (animals)", fr: "manger (en parlant d'un animal)", beispiel: "Die Katze frisst Fisch." },
        { de: "erzählen", en: "to tell", fr: "raconter", beispiel: "Sie erzählt eine Geschichte." },
        { de: "der Buchstabe", en: "the letter (of the alphabet)", fr: "la lettre", beispiel: "Das Wort hat fünf Buchstaben." },
        { de: "sich bedanken (bei)", en: "to thank", fr: "remercier", beispiel: "Ich bedanke mich bei dir." },
        { de: "sich einsetzen (für)", en: "to stand up for", fr: "s'engager (pour)", beispiel: "Sie setzt sich für den Umweltschutz ein." }
      ],
      aufgaben: []
    },
    {
      id: "2026-10-01",
      titel: "aber / sondern, als (Rolle), Partizip II",
      vokabeln: [
        { de: "der Bezirk", en: "the district", fr: "l'arrondissement", beispiel: "Wien hat dreiundzwanzig Bezirke." },
        { de: "das Pferd", en: "the horse", fr: "le cheval", beispiel: "Das Pferd frisst Gras." },
        { de: "die Kutsche", en: "the carriage", fr: "la calèche", beispiel: "Zwei Pferde ziehen die Kutsche." },
        { de: "malen", en: "to paint", fr: "peindre", beispiel: "Sie hat ein Bild gemalt." },
        { de: "schmieren", en: "to spread", fr: "tartiner", beispiel: "Ich schmiere Butter auf das Brot." },
        { de: "zujubeln", en: "to cheer (for someone)", fr: "acclamer", beispiel: "Die Fans jubeln dem Team zu." },
        { de: "das Feld", en: "the field", fr: "le champ, le terrain", beispiel: "Das Pferd steht auf dem Feld." },
        { de: "die Kartoffel", en: "the potato", fr: "la pomme de terre", beispiel: "Ich koche heute Kartoffeln." },
        { de: "geduldig", en: "patient", fr: "patient", beispiel: "Die Lehrerin ist sehr geduldig." },
        { de: "ungeduldig", en: "impatient", fr: "impatient", beispiel: "Die Kinder sind ungeduldig." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Ich trinke keinen Kaffee, ___ Tee.",
          optionen: ["aber", "sondern"], richtig: 1,
          regel: "„sondern“ steht nach einer Verneinung (nicht/kein) und nennt die richtige Alternative: kein Kaffee, sondern Tee."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Er ist müde, ___ er geht trotzdem zum Training.",
          optionen: ["aber", "sondern"], richtig: 0,
          regel: "„aber“ nennt einen Gegensatz ohne Verneinung des ersten Teils: Er ist müde, aber er geht trotzdem."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich habe die Butter auf das Brot ___. (schmieren)",
          antworten: ["geschmiert"],
          regel: "Perfekt: haben + Partizip II. schmieren → geschmiert (regelmäßig: ge- + Stamm + -t)."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Meine Oma hat gestern ein Brot ___. (backen)",
          antworten: ["gebacken"],
          regel: "backen → gebacken (unregelmäßig, mit -en am Ende)."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich interessiere mich ___ Geschichte.",
          optionen: ["für", "an", "auf"], richtig: 0,
          regel: "sich interessieren für + Akkusativ."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Du bist sehr geduldig ___ Schüler.",
          optionen: ["als", "wie", "so"], richtig: 0,
          regel: "„als“ nennt eine Rolle oder Funktion: als Schüler, als Lehrerin, als Kind (= en tant que)."
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["der Wecker", "Das Gerät weckt dich am Morgen."], ["füttern", "Ein Tier bekommt Essen."], ["die Kutsche", "Pferde ziehen den Wagen."], ["geduldig", "Man kann gut warten."]],
          regel: "Das sind Erklärungen auf Deutsch. So kannst du neue Wörter auch selbst erklären."
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Er", "kauft", "kein", "Brot,", "sondern", "Kartoffeln"],
          loesung: "Er kauft kein Brot, sondern Kartoffeln",
          regel: "Vor „sondern“ steht immer ein Komma. Davor steht eine Verneinung (kein)."
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["Ich", "glaube,", "dass", "du", "sehr", "geduldig", "bist"],
          loesung: "Ich glaube, dass du sehr geduldig bist",
          regel: "Nach „dass“ steht das Verb am Ende des Satzes."
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Erzähle von deinem Morgen: Wann bist du aufgewacht? Hat dich ein Wecker geweckt? Was hast du gegessen? Sprich 5 Sätze im Perfekt. Nimm dich auf und höre dich an.",
          hinweis: "Zum Beispiel: Ich bin um ... aufgewacht. / Mein Wecker hat mich geweckt. / Ich habe ... gegessen."
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 5 Sätze mit „aber“ und „sondern“ über deine Gewohnheiten und Pläne.",
          checkliste: [
            "Ich habe mindestens zwei Sätze mit „aber“ geschrieben.",
            "Ich habe mindestens zwei Sätze mit „sondern“ geschrieben.",
            "Vor „aber“ und „sondern“ steht ein Komma.",
            "Vor „sondern“ steht eine Verneinung (nicht/kein)."
          ],
          muster: "Ich trinke keinen Kaffee, sondern Tee. Ich habe wenig Zeit, aber ich lerne jeden Tag Deutsch. Heute spiele ich nicht Fußball, sondern ich fahre Fahrrad. Ich bin müde, aber ich bin glücklich. Ich esse kein Fleisch, sondern nur Gemüse."
        }
      ]
    },
    {
      id: "2026-10-05",
      titel: "beibringen, versichern + Dativ, abhängen von",
      vokabeln: [
        { de: "die Spur", en: "the lane", fr: "la voie (de circulation)", beispiel: "In Österreich fährt man auf der rechten Spur." },
        { de: "jemandem etwas beibringen", en: "to teach sb sth", fr: "apprendre qc à qn", beispiel: "Ich habe dir etwas Neues beigebracht." },
        { de: "das Schlüsselbein", en: "the collarbone", fr: "la clavicule", beispiel: "Er hat sich das Schlüsselbein gebrochen." },
        { de: "der Bruch", en: "the fracture", fr: "la fracture", beispiel: "Der Bruch heilt in sechs Wochen." },
        { de: "entgegenkommend", en: "accommodating", fr: "arrangeant", beispiel: "Du bist sehr entgegenkommend." },
        { de: "die Fortsetzung", en: "the sequel, continuation", fr: "la suite", beispiel: "Es gibt eine Fortsetzung des Films." },
        { de: "jemandem etwas versichern", en: "to assure sb of sth", fr: "assurer qc à qn", beispiel: "Ich versichere dir, dass wir viele neue Wörter lernen." },
        { de: "die Vorlesung", en: "the lecture", fr: "le cours magistral", beispiel: "Die Vorlesung beginnt um acht Uhr." },
        { de: "zelten", en: "to camp", fr: "camper", beispiel: "Im Sommer zelten wir am See." },
        { de: "von etwas abhängen", en: "to depend on sth", fr: "dépendre de qc", beispiel: "Es hängt davon ab, was die anderen machen." }
      ],
      aufgaben: [
        {
          typ: "luecke", stufe: 1,
          text: "Ich habe dir etwas Neues ___. (beibringen)",
          antworten: ["beigebracht"],
          regel: "beibringen – brachte bei – hat beigebracht (trennbar: bei + gebracht)."
        },
        {
          typ: "mc", stufe: 1,
          frage: "In Österreich fährt man auf ___ rechten Spur.",
          optionen: ["der", "die", "dem"], richtig: 0,
          regel: "Wo? → auf + Dativ: die Spur → auf der Spur."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich versichere ___, dass wir viele neue Wörter lernen.",
          optionen: ["dir", "dich", "du"], richtig: 0,
          regel: "jemandem (Dativ) etwas versichern: ich versichere dir."
        },
        {
          typ: "mc", stufe: 1,
          frage: "An der Universität besucht man eine ___.",
          optionen: ["Vorlesung", "Unterricht"], richtig: 0,
          regel: "der Unterricht = Schule; die Vorlesung = Universität."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Es hängt ___ ab, was die anderen machen.",
          antworten: ["davon"],
          regel: "abhängen von → es hängt davon ab, ob/was ..."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Es gibt eine ___ des Videos. (fortsetzen → Nomen)",
          antworten: ["Fortsetzung"],
          regel: "fortsetzen → die Fortsetzung (+ Genitiv: des Videos)."
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Du", "musst", "dich", "heute", "entscheiden"],
          loesung: "Du musst dich heute entscheiden",
          regel: "Modalverb auf Position 2, Infinitiv am Ende; das Reflexivpronomen steht früh."
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["das Schlüsselbein", "la clavicule"], ["der Bruch", "la fracture"], ["das Zelt", "la tente"], ["entgegenkommend", "arrangeant"]],
          regel: "Neue Wörter der Stunde."
        }
      ]
    },
    {
      id: "2026-10-08",
      titel: "sagen + Dativ, versuchen, staatlich und privat",
      vokabeln: [
        { de: "die U-Bahn", en: "the underground", fr: "le métro", beispiel: "Ich fahre mit der U-Bahn zur Uni." },
        { de: "das U-Boot", en: "the submarine", fr: "le sous-marin", beispiel: "Das U-Boot fährt unter Wasser." },
        { de: "versuchen", en: "to try", fr: "essayer", beispiel: "Ich versuche, heute früher zu kommen." },
        { de: "der Versuch", en: "the attempt", fr: "l'essai, la tentative", beispiel: "Es war ein guter Versuch." },
        { de: "das Erdbeben", en: "the earthquake", fr: "le tremblement de terre", beispiel: "In Japan gibt es oft Erdbeben." },
        { de: "beben", en: "to shake", fr: "trembler", beispiel: "Die Erde hat gebebt." },
        { de: "nicht abreißen", en: "not to stop", fr: "ne pas cesser", beispiel: "Das schlechte Wetter reißt nicht ab." },
        { de: "staatlich", en: "state, public", fr: "public, d'État", beispiel: "Die Universität ist staatlich." },
        { de: "privat", en: "private", fr: "privé", beispiel: "Die Schule ist privat." },
        { de: "bauen (hat gebaut)", en: "to build", fr: "construire", beispiel: "Die Engländer haben die Züge gebaut." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Ich sage ___, dass ich heute eine Anatomievorlesung hatte.",
          optionen: ["dir", "dich"], richtig: 0,
          regel: "jemandem (Dativ) etwas sagen: ich sage dir."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich ___, heute eine Stunde mit Ivan zu haben. (versuchen)",
          antworten: ["versuche"],
          regel: "versuchen + zu + Infinitiv: Ich versuche, ... zu haben."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Die Engländer haben die Züge in Frankreich ___. (bauen)",
          antworten: ["gebaut"],
          regel: "bauen – baute – hat gebaut (regelmäßig)."
        },
        {
          typ: "mc", stufe: 2,
          frage: "„Das schlechte Wetter reißt nicht ab.“ Das bedeutet:",
          optionen: ["Das schlechte Wetter hört nicht auf.", "Das Wetter wird besser.", "Das Wetter zerstört die Häuser."], richtig: 0,
          regel: "nicht abreißen = nicht aufhören (ne pas cesser)."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Das Gegenteil von staatlich ist ___.",
          optionen: ["privat", "unterirdisch", "blöd"], richtig: 0,
          regel: "staatlich (public) ↔ privat (privé)."
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["die U-Bahn", "le métro"], ["das U-Boot", "le sous-marin"], ["das Erdbeben", "le tremblement de terre"], ["der Versuch", "l'essai"]],
          regel: "U-Bahn = Untergrundbahn, U-Boot = Unterseeboot."
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Ich", "finde", "nicht,", "dass", "Histologie", "blöd", "ist"],
          loesung: "Ich finde nicht, dass Histologie blöd ist",
          regel: "Im dass-Satz steht das Verb am Ende."
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Erzähle von einer Vorlesung an der Uni: Was war interessant, was war schwierig? Sprich etwa eine Minute. Nimm dich auf und höre dich an.",
          hinweis: "Ich finde, dass ... / Ich versuche, ... zu ... / Es hängt davon ab, ..."
        }
      ]
    },
    {
      id: "2026-10-27",
      titel: "auf etwas stoßen, Passiv, bezüglich + Genitiv",
      vokabeln: [
        { de: "auf etwas stoßen (ist gestoßen)", en: "to come across sth", fr: "tomber sur qc", beispiel: "Wir sind auf ein neues Wort gestoßen." },
        { de: "einen Verband anlegen", en: "to apply a bandage", fr: "mettre un bandage", beispiel: "Die Ärztin legt einen Verband an." },
        { de: "der Streik", en: "the strike", fr: "la grève", beispiel: "Nächsten Donnerstag gibt es einen Streik." },
        { de: "die Gewerkschaft", en: "the trade union", fr: "le syndicat", beispiel: "Die Gewerkschaft organisiert den Streik." },
        { de: "das Gerücht", en: "the rumour", fr: "la rumeur", beispiel: "Es gibt viele Gerüchte." },
        { de: "das Gericht", en: "the court; the dish", fr: "le tribunal ; le plat", beispiel: "Das Gericht hat ihn verurteilt." },
        { de: "fliehen (ist geflohen)", en: "to flee", fr: "s'enfuir", beispiel: "Die Touristen sind aus der Stadt geflohen." },
        { de: "der Gegensatz", en: "the contrast, the opposite", fr: "le contraire", beispiel: "Sie haben gegensätzliche Meinungen." },
        { de: "bezüglich (+ Genitiv)", en: "regarding", fr: "concernant, quant à", beispiel: "Wir haben Fragen bezüglich der Prüfung." },
        { de: "die Gewalt", en: "violence", fr: "la violence", beispiel: "Gewalt ist keine Lösung." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Wir sind auf ein neues Wort ___.",
          optionen: ["gestoßen", "gestoßt", "stoßen"], richtig: 0,
          regel: "auf etwas stoßen – stieß – ist gestoßen."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Die Touristen ___ aus Paris geflohen.",
          optionen: ["sind", "haben"], richtig: 0,
          regel: "fliehen = Bewegung → Perfekt mit sein."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich ___ auf den Bus. (warten)",
          antworten: ["warte"],
          regel: "warten auf + Akkusativ: ich warte, du wartest, er wartet."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Es gibt viele ___ über den Streik.",
          optionen: ["Gerüchte", "Gerichte"], richtig: 0,
          regel: "das Gerücht = la rumeur; das Gericht = le tribunal / le plat."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Der Angeklagte ___ vom Gericht verurteilt. (Passiv Präteritum)",
          antworten: ["wurde"],
          regel: "Passiv Präteritum: wurde + Partizip II."
        },
        {
          typ: "luecke", stufe: 3,
          text: "Der Angeklagte ist vom Gericht verurteilt ___. (Passiv Perfekt)",
          antworten: ["worden"],
          regel: "Passiv Perfekt: ist + Partizip II + worden (nicht: geworden)."
        },
        {
          typ: "mc", stufe: 3,
          frage: "Sie haben gegensätzliche Meinungen bezüglich ___ Atomenergie.",
          optionen: ["der", "die", "dem"], richtig: 0,
          regel: "bezüglich + Genitiv: die Atomenergie → der Atomenergie."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Die Ärztin legt einen Verband ___.",
          antworten: ["an"],
          regel: "anlegen ist trennbar: Sie legt einen Verband an."
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["der Streik", "la grève"], ["die Gewerkschaft", "le syndicat"], ["die Wahl", "l'élection"], ["der Arbeiter", "l'ouvrier"]],
          regel: "Wortschatz Politik und Arbeit."
        }
      ]
    },
    {
      id: "2026-10-29",
      titel: "Feiertage, gefallen oder auffallen, namens",
      vokabeln: [
        { de: "Allerheiligen", en: "All Saints' Day", fr: "la Toussaint", beispiel: "An Allerheiligen haben viele Menschen frei." },
        { de: "Allerseelen", en: "All Souls' Day", fr: "le jour des morts", beispiel: "An Allerseelen gehen viele auf den Friedhof." },
        { de: "der Friedhof", en: "the cemetery", fr: "le cimetière", beispiel: "Der Friedhof ist sehr alt." },
        { de: "wahr", en: "true", fr: "vrai", beispiel: "Ist das wirklich wahr?" },
        { de: "die Wahrheit", en: "the truth", fr: "la vérité", beispiel: "Sag mir die Wahrheit." },
        { de: "auffallen", en: "to notice, to stand out", fr: "remarquer, être remarqué", beispiel: "Dein blauer Pullover fällt mir auf." },
        { de: "gefallen", en: "to please, to like", fr: "plaire", beispiel: "Dein blauer Pullover gefällt mir." },
        { de: "schwach", en: "weak", fr: "faible", beispiel: "Nach der Krankheit war ich schwach." },
        { de: "namens", en: "named", fr: "nommé, du nom de", beispiel: "Ich kenne ein Gericht namens Bolognese." },
        { de: "berufstätig", en: "working, employed", fr: "qui travaille", beispiel: "Meine Eltern sind beide berufstätig." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "___ Allerheiligen gehen viele Menschen auf den Friedhof.",
          optionen: ["An", "Im", "Um"], richtig: 0,
          regel: "an + Feiertag: an Allerheiligen, an Weihnachten, an Ostern."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Christi Himmelfahrt ist 40 Tage nach ___.",
          antworten: ["Ostern"],
          regel: "Christi Himmelfahrt = 40 Tage nach Ostern."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich mag deinen Pullover. Welcher Satz passt?",
          optionen: ["Dein Pullover gefällt mir.", "Dein Pullover fällt mir auf.", "Dein Pullover fällt mir."], richtig: 0,
          regel: "gefallen = plaire."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich habe deinen Pullover bemerkt. Welcher Satz passt?",
          optionen: ["Dein Pullover fällt mir auf.", "Dein Pullover gefällt mir.", "Dein Pullover fällt mir."], richtig: 0,
          regel: "auffallen = bemerkt werden (trennbar): Er fällt mir auf."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Das ist nicht falsch, das ist ___.",
          antworten: ["wahr"],
          regel: "wahr (vrai) ≠ war (Präteritum von sein)."
        },
        {
          typ: "luecke", stufe: 2,
          text: "schwach → die ___",
          antworten: ["Schwäche"],
          regel: "schwach → die Schwäche (mit Umlaut)."
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Ivan", "isst", "oft", "ein", "Gericht", "namens", "Bolognese"],
          loesung: "Ivan isst oft ein Gericht namens Bolognese",
          regel: "namens = mit dem Namen; steht direkt vor dem Namen."
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["Allerheiligen", "la Toussaint"], ["der Friedhof", "le cimetière"], ["die Wahrheit", "la vérité"], ["die Gewalt", "la violence"]],
          regel: "Neue Wörter der Stunde."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Kannst du ___ das Schwimmen beibringen?",
          optionen: ["mir", "mich", "ich"],
          richtig: 0,
          regel: "Wiederholung (05.10.): jemandem (Dativ) etwas beibringen: Kannst du mir … beibringen?"
        },
        {
          typ: "luecke", stufe: 2,
          text: "Es hängt ___ ab, ob es morgen regnet.",
          antworten: ["davon"],
          regel: "Wiederholung (05.10.): abhängen von → Es hängt davon ab, ob …"
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich versuche, jeden Tag Sport ___ machen.",
          antworten: ["zu"],
          regel: "Wiederholung (08.10.): versuchen + zu + Infinitiv."
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["das Gerücht", "la rumeur"], ["das Gericht", "le tribunal / le plat"], ["die Gewerkschaft", "le syndicat"], ["staatlich", "public"]],
          regel: "Wiederholung (08.10., 27.10.): Ähnliche Wörter nicht verwechseln: Gerücht ≠ Gericht."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Das Haus ___ 1990 gebaut.",
          optionen: ["wurde", "ist geworden", "hat"],
          richtig: 0,
          regel: "Wiederholung (27.10.): Passiv Präteritum = wurde + Partizip II."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Die Familie ___ vor dem Krieg geflohen.",
          optionen: ["ist", "hat", "wird"],
          richtig: 0,
          regel: "Wiederholung (27.10.): fliehen = Bewegung → Perfekt mit sein."
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 5 Sätze über einen Feiertag in Frankreich: Was machen die Leute an diesem Tag?",
          checkliste: [
            "Ich habe an + Feiertag benutzt (an Allerheiligen …).",
            "Ich habe mindestens einen Nebensatz mit dem Verb am Ende geschrieben.",
            "Ich habe mindestens zwei neue Wörter benutzt.",
            "Das Verb im Hauptsatz steht auf Position 2."
          ],
          muster: "An Allerheiligen haben in Frankreich viele Menschen frei. Viele Familien fahren zu ihren Verwandten. An Allerseelen gehen manche auf den Friedhof, weil sie an die Verstorbenen denken. Sie bringen Blumen mit. Am Abend essen sie oft zusammen."
        }
      ]
    },
    {
      id: "2026-11-02",
      titel: "Bargeld und Trinkgeld, verbreiten, Länder und Einwohner",
      vokabeln: [
        { de: "das Bargeld", en: "cash", fr: "l'argent liquide, les espèces", beispiel: "Ich zahle lieber mit Bargeld." },
        { de: "bar zahlen", en: "to pay cash", fr: "payer en espèces", beispiel: "Kann ich hier bar zahlen?" },
        { de: "das Trinkgeld", en: "the tip", fr: "le pourboire", beispiel: "Wie viel Trinkgeld gibt man im Restaurant?" },
        { de: "üblich", en: "usual, customary", fr: "habituel, d'usage", beispiel: "Zehn Prozent Trinkgeld sind hier üblich." },
        { de: "die Milz", en: "the spleen", fr: "la rate", beispiel: "Die Milz liegt links im Bauch." },
        { de: "die Leber", en: "the liver", fr: "le foie", beispiel: "Zu viel Alkohol ist schlecht für die Leber." },
        { de: "(sich) verbreiten", en: "to spread", fr: "(se) répandre, (se) propager", beispiel: "Das Virus hat sich schnell verbreitet." },
        { de: "der Geruch", en: "the smell", fr: "l'odeur", beispiel: "Der Geruch von Kaffee ist angenehm." },
        { de: "gewalttätig", en: "violent", fr: "violent", beispiel: "Der Film ist sehr gewalttätig." },
        { de: "der Albtraum (auch: Alptraum)", en: "the nightmare", fr: "le cauchemar", beispiel: "Letzte Nacht hatte ich einen Albtraum." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Ich zahle lieber ___, weil ich das Geld gern in der Hand habe.",
          optionen: ["bar", "Trinkgeld", "Karte"], richtig: 0,
          regel: "bar zahlen = mit Bargeld zahlen. Aber: mit Karte zahlen."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Im Restaurant gibt man oft ungefähr zehn Prozent ___.",
          antworten: ["Trinkgeld"],
          regel: "das Trinkgeld = le pourboire. Man gibt Trinkgeld."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Wie viel Trinkgeld ist in Frankreich ___?",
          optionen: ["üblich", "gewöhnt", "gebraucht"], richtig: 0,
          regel: "üblich = so macht man es normalerweise (habituel)."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Das Coronavirus hat sich 2020 sehr schnell ___.",
          optionen: ["verbreitet", "verbreitert", "verbreiten"], richtig: 0,
          regel: "sich verbreiten = se propager (ein Virus, ein Gerücht, eine Nachricht). verbreitern = breiter machen."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Die Lehrerin ___ die Tests an die Schüler.",
          optionen: ["verteilt", "verbreitet", "verbreitert"], richtig: 0,
          regel: "verteilen (oder austeilen) = distribuer. verbreiten = répandre: ein Gerücht verbreiten."
        },
        {
          typ: "luecke", stufe: 2,
          text: "verbreiten → die ___",
          antworten: ["Verbreitung"],
          regel: "Verb → Nomen mit -ung (immer feminin): verbreiten → die Verbreitung."
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["Russland", "die Russen"], ["Frankreich", "die Franzosen"], ["Kroatien", "die Kroaten"], ["Österreich", "die Österreicher"]],
          regel: "Land → die Menschen aus dem Land (Plural)."
        },
        {
          typ: "mc", stufe: 2,
          frage: "riechen → das Nomen heißt ___",
          optionen: ["der Geruch", "die Riechung", "der Riech"], richtig: 0,
          regel: "riechen → der Geruch (l'odeur), wie: fliegen → der Flug."
        },
        {
          typ: "mc", stufe: 3,
          frage: "Man sagt, dass der Chef bald geht. Aber das ist nur ein ___.",
          optionen: ["Gerücht", "Gericht", "Geruch"], richtig: 0,
          regel: "das Gerücht = la rumeur, das Gericht = le tribunal / le plat, der Geruch = l'odeur."
        },
        {
          typ: "luecke", stufe: 2,
          text: "die Gewalt + tätig: Ein Mensch, der Gewalt anwendet, ist ___.",
          antworten: ["gewalttätig"],
          regel: "die Gewalt → gewalttätig (violent). Genauso: der Beruf → berufstätig."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich träume oft ___ meinem nächsten Urlaub.",
          optionen: ["von", "über", "an"], richtig: 0,
          regel: "träumen von + Dativ: Ich träume von meinem Urlaub."
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Letzte", "Nacht", "hatte", "ich", "einen", "schlimmen", "Albtraum"],
          loesung: "Letzte Nacht hatte ich einen schlimmen Albtraum",
          regel: "Zeit am Anfang → Verb auf Position 2, dann das Subjekt."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Der rote Mantel fällt mir sofort ___.",
          antworten: ["auf"],
          regel: "Wiederholung (29.10.): auffallen ist trennbar: Er fällt mir auf."
        },
        {
          typ: "mc", stufe: 1,
          frage: "___ Weihnachten essen wir mit der ganzen Familie.",
          optionen: ["An", "Im", "Um"], richtig: 0,
          regel: "Wiederholung (29.10.): an + Feiertag: an Weihnachten, an Allerheiligen."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Die Brücke ist 1990 gebaut ___. (Passiv Perfekt)",
          antworten: ["worden"],
          regel: "Wiederholung (27.10.): Passiv Perfekt: ist + Partizip II + worden."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Wir haben Fragen bezüglich ___ Hausübung.",
          optionen: ["der", "die", "dem"], richtig: 0,
          regel: "Wiederholung (27.10.): bezüglich + Genitiv: die Hausübung → der Hausübung."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Beim Lesen sind wir auf ein interessantes Thema ___.",
          optionen: ["gestoßen", "gestoßt", "gestanden"], richtig: 0,
          regel: "Wiederholung (27.10.): auf etwas stoßen – ist gestoßen."
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 5 Sätze: Zahlst du lieber bar oder mit Karte? Und was denkst du über Trinkgeld?",
          checkliste: [
            "Ich habe „lieber“ und „weil“ benutzt (Verb am Ende).",
            "Ich habe mindestens drei neue Wörter benutzt (Bargeld, Trinkgeld, üblich …).",
            "Das Verb im Hauptsatz steht auf Position 2.",
            "Ich habe meine Meinung mit „Ich finde, dass …“ gesagt."
          ],
          muster: "Ich zahle lieber mit Karte, weil es schneller geht. Auf dem Markt zahle ich aber meistens bar. In vielen Restaurants ist Trinkgeld üblich. Oft gibt man ungefähr zehn Prozent. Ich finde, dass Trinkgeld eine nette Geste ist."
        }
      ]
    },
    {
      id: "2026-11-05",
      titel: "austeilen, riechen nach, zögern, Fußball",
      vokabeln: [
        { de: "austeilen", en: "to hand out", fr: "distribuer", beispiel: "Der Lehrer teilt die Übungen aus." },
        { de: "der Betrag", en: "the amount", fr: "le montant", beispiel: "Das Trinkgeld ist ungefähr zehn Prozent vom Betrag." },
        { de: "zögern", en: "to hesitate", fr: "hésiter", beispiel: "Er hat nicht gezögert und sofort geantwortet." },
        { de: "riechen nach (+ Dativ)", en: "to smell of", fr: "sentir (qc)", beispiel: "Hier riecht es nach frischem Kaffee." },
        { de: "der Geruchssinn", en: "the sense of smell", fr: "l'odorat", beispiel: "Hunde haben einen sehr guten Geruchssinn." },
        { de: "die Verpflichtung", en: "the obligation", fr: "l'obligation", beispiel: "Das ist keine Verpflichtung, nur ein Angebot." },
        { de: "der Schiedsrichter", en: "the referee", fr: "l'arbitre", beispiel: "Der Schiedsrichter pfeift ein Foul." },
        { de: "der Stürmer", en: "the striker", fr: "l'attaquant", beispiel: "Der Stürmer hat zwei Tore geschossen." },
        { de: "mitbestimmen", en: "to have a say", fr: "avoir son mot à dire", beispiel: "In der Stunde darf ich mitbestimmen, was wir machen." },
        { de: "Ich glaub, mein Schwein pfeift!", en: "I can't believe it!", fr: "Je n'y crois pas !", beispiel: "Du hast im Lotto gewonnen? Ich glaub, mein Schwein pfeift!" }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Der Lehrer teilt die Prüfungen ___.",
          optionen: ["aus", "an", "ab"], richtig: 0,
          regel: "austeilen ist trennbar: Er teilt … aus. Synonym: verteilen."
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["austeilen", "Jeder Schüler bekommt ein Blatt."], ["verbreiten", "Eine Nachricht geht schnell von Person zu Person."], ["mitbestimmen", "Man darf bei einer Entscheidung mitreden."], ["zögern", "Man wartet kurz, weil man unsicher ist."]],
          regel: "austeilen/verteilen = distribuer, verbreiten = répandre."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Sie hat kurz ___, dann hat sie Ja gesagt. (zögern)",
          antworten: ["gezögert"],
          regel: "zögern → hat gezögert (regelmäßig)."
        },
        {
          typ: "mc", stufe: 2,
          frage: "In der Bäckerei riecht es ___ frischem Brot.",
          optionen: ["nach", "von", "wie"], richtig: 0,
          regel: "riechen nach + Dativ: Es riecht nach Kaffee / nach frischem Brot."
        },
        {
          typ: "luecke", stufe: 2,
          text: "riechen – roch – hat ___",
          antworten: ["gerochen"],
          regel: "riechen ist unregelmäßig: roch, hat gerochen."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Die Milz liegt auf der linken Seite ___ Bauches.",
          optionen: ["des", "dem", "der"], richtig: 0,
          regel: "Genitiv maskulin: der Bauch → des Bauches. „die Seite des Bauches“ = le côté du ventre."
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["der Stürmer", "schießt die meisten Tore"], ["der Verteidiger", "hilft vor dem eigenen Tor"], ["der Schiedsrichter", "pfeift bei einem Foul"], ["der Mittelfeldspieler", "spielt in der Mitte des Feldes"]],
          regel: "Fußball-Wortschatz: Wer macht was?"
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich fühle mich schlecht, weil ich kein Trinkgeld ___ habe.",
          optionen: ["gegeben", "geben", "gegebt"], richtig: 0,
          regel: "Perfekt im weil-Satz: Partizip II + haben am Ende. geben → gegeben."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Das Trinkgeld ist ungefähr zehn Prozent vom ___.",
          antworten: ["Betrag"],
          regel: "der Betrag = le montant (die Summe)."
        },
        {
          typ: "mc", stufe: 2,
          frage: "üblich → das Adverb heißt ___",
          optionen: ["üblicherweise", "üblichweise", "üblicherlich"], richtig: 0,
          regel: "Adjektiv + -erweise: üblicherweise, normalerweise, glücklicherweise."
        },
        {
          typ: "mc", stufe: 3,
          frage: "Für Ärzte ist das Berufsgeheimnis eine wichtige ___.",
          optionen: ["Verpflichtung", "Verpflegung", "Vermutung"], richtig: 0,
          regel: "die Verpflichtung = l'obligation (verpflichten). die Verpflegung = la nourriture, die Vermutung = la supposition."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Kann ich hier ___ zahlen?",
          optionen: ["bar", "Bargeld", "Trinkgeld"], richtig: 0,
          regel: "Wiederholung (02.11.): bar zahlen = mit Bargeld zahlen."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Italien → die ___ (Plural)",
          antworten: ["Italiener"],
          regel: "Wiederholung (02.11.): Land → Einwohner: Italien → die Italiener, Österreich → die Österreicher."
        },
        {
          typ: "mc", stufe: 1,
          frage: "___ Ostern besuchen wir meine Großeltern.",
          optionen: ["An", "Im", "Um"], richtig: 0,
          regel: "Wiederholung (29.10.): an + Feiertag: an Ostern, an Weihnachten."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Das Haus ___ 1900 gebaut. (Passiv, Präteritum)",
          antworten: ["wurde"],
          regel: "Wiederholung (27.10.): Passiv Präteritum: wurde + Partizip II."
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Hast du einmal lange gezögert? Beschreibe in 5 Sätzen eine Situation, in der du unsicher warst.",
          checkliste: [
            "Ich habe das Perfekt benutzt (ich habe gezögert …).",
            "Ich habe einen weil-Satz geschrieben (Verb am Ende).",
            "Ich habe mindestens drei neue Wörter benutzt (zögern, mitbestimmen, Verpflichtung …).",
            "Das Verb im Hauptsatz steht auf Position 2."
          ],
          muster: "Letztes Jahr musste ich eine Universität wählen. Ich habe lange gezögert, weil beide Städte schön waren. Meine Eltern durften mitbestimmen, aber es war keine Verpflichtung. Am Ende habe ich die kleinere Stadt gewählt. Heute bin ich sehr zufrieden."
        }
      ]
    },
    {
      id: "2026-11-06",
      titel: "Redewendungen, abtasten, wegen + Genitiv",
      vokabeln: [
        { de: "Das ist mir Wurst.", en: "I don't care.", fr: "Ça m'est égal.", beispiel: "Pizza oder Pasta? Das ist mir Wurst. (österreichisch: Wurscht)" },
        { de: "berufstätig", en: "employed, working", fr: "qui travaille, actif", beispiel: "Bist du Student oder schon berufstätig?" },
        { de: "abtasten", en: "to palpate, to feel", fr: "palper", beispiel: "Die Ärztin tastet den Bauch ab." },
        { de: "die Brutalität", en: "the brutality", fr: "la brutalité", beispiel: "Die Brutalität im Film hat mich schockiert." },
        { de: "Wenn ich ehrlich bin, …", en: "To be honest, …", fr: "Pour être honnête, …", beispiel: "Wenn ich ehrlich bin, trinke ich zu viel Kaffee." },
        { de: "wegen (+ Genitiv)", en: "because of", fr: "à cause de", beispiel: "Wegen des Stresses schlafe ich schlecht." },
        { de: "die Schale", en: "the bowl (Austria also: the cup)", fr: "le bol (en Autriche aussi : la tasse)", beispiel: "Zum Frühstück esse ich eine Schale Müsli." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "„Das ist mir Wurst“ bedeutet: ___",
          optionen: ["Das ist mir egal.", "Ich habe Hunger.", "Das schmeckt mir."], richtig: 0,
          regel: "Das ist mir Wurst (österreichisch: Wurscht) = Das ist mir egal."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Wenn ich ehrlich bin, ___ zu viel Kaffee.",
          optionen: ["trinke ich", "ich trinke", "trinken ich"], richtig: 0,
          regel: "Der wenn-Satz steht auf Position 1, danach kommt sofort das Verb, dann das Subjekt."
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Wenn", "ich", "ehrlich", "bin,", "bin", "ich", "oft", "müde"],
          loesung: "Wenn ich ehrlich bin, bin ich oft müde",
          regel: "Nebensatz zuerst (Verb am Ende), dann Hauptsatz mit Verb zuerst."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich trinke mehr Kaffee wegen ___ Stresses.",
          optionen: ["des", "dem", "den"], richtig: 0,
          regel: "wegen + Genitiv: der Stress → wegen des Stresses. Gesprochen hört man oft auch den Dativ."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Die Ärztin tastet den Bauch ___. (abtasten)",
          antworten: ["ab"],
          regel: "abtasten ist trennbar: Sie tastet den Bauch ab."
        },
        {
          typ: "luecke", stufe: 2,
          text: "brutal → die ___",
          antworten: ["Brutalität"],
          regel: "Adjektiv auf -al → Nomen auf -ität, immer feminin: brutal → die Brutalität, normal → die Normalität."
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["das Gerücht", "la rumeur"], ["der Geruch", "l'odeur"], ["das Gericht", "le tribunal / le plat"], ["die Gewalt", "la violence"]],
          regel: "Achtung, ähnliche Wörter: Gerücht – Geruch – Gericht."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Bist du Student oder schon ___?",
          optionen: ["berufstätig", "berühmt", "beruhigt"], richtig: 0,
          regel: "berufstätig = man hat einen Beruf und arbeitet."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Zum Frühstück esse ich eine ___ Müsli.",
          optionen: ["Schale", "Flasche", "Dose"], richtig: 0,
          regel: "die Schale = le bol. In Österreich sagt man auch „eine Schale Kaffee“ (= eine Tasse)."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Dein neuer Pullover ___ mir sofort auf.",
          optionen: ["fällt", "gefällt", "fallt"], richtig: 0,
          regel: "Wiederholung (29.10.): auffallen (trennbar) = remarquer. gefallen = plaire."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Der ___ pfeift das Spiel ab.",
          optionen: ["Schiedsrichter", "Stürmer", "Verteidiger"], richtig: 0,
          regel: "Wiederholung (05.11.): der Schiedsrichter = l'arbitre."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich habe eine Frage bezüglich ___ Termins.",
          optionen: ["des", "dem", "den"], richtig: 0,
          regel: "Wiederholung (27.10.): bezüglich + Genitiv: der Termin → des Termins."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich träume oft ___ einer Reise nach Japan.",
          optionen: ["von", "über", "an"], richtig: 0,
          regel: "Wiederholung (02.11.): träumen von + Dativ."
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Was ist dir Wurst und was ist dir wichtig? Sprich 4–5 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "Mode ist mir Wurst. / Wenn ich ehrlich bin, … / Wichtig ist mir … , weil …"
        }
      ]
    },
    {
      id: "2026-11-09",
      titel: "roh, sich räuspern, selbstständig, abpfeifen",
      vokabeln: [
        { de: "sich räuspern", en: "to clear one's throat", fr: "se racler la gorge", beispiel: "Vor seiner Rede räuspert er sich kurz." },
        { de: "roh", en: "raw", fr: "cru", beispiel: "Rohes Fleisch esse ich nicht." },
        { de: "die Jakobsmuschel, -n", en: "the scallop", fr: "la coquille Saint-Jacques", beispiel: "Im Restaurant habe ich Jakobsmuscheln gegessen." },
        { de: "die Muschel, -n", en: "the mussel, the shell", fr: "la moule, le coquillage", beispiel: "In Belgien isst man gern Muscheln mit Pommes." },
        { de: "ausschalten", en: "to switch off", fr: "éteindre", beispiel: "Kannst du bitte dein Mikrofon ausschalten?" },
        { de: "selbstständig", en: "self-employed, independent", fr: "indépendant, à son compte", beispiel: "Viele Ärzte sind selbstständig und haben eine eigene Praxis." },
        { de: "die Selbstständigkeit", en: "independence, self-employment", fr: "l'indépendance", beispiel: "Die Selbstständigkeit ist ihm sehr wichtig." },
        { de: "anpfeifen / abpfeifen", en: "to blow the whistle to start / to end (a match)", fr: "siffler le début / la fin (du match)", beispiel: "Der Schiedsrichter pfeift das Spiel um 20 Uhr an." },
        { de: "fit sein", en: "to be fit, to feel good", fr: "être en forme", beispiel: "Heute bin ich fit, ich habe gut geschlafen." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Vor seiner Rede ___ er sich kurz.",
          optionen: ["räuspert", "räuspern", "geräuspert"], richtig: 0,
          regel: "sich räuspern ist reflexiv: ich räuspere mich, du räusperst dich, er räuspert sich."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich esse den ___ Fisch nicht gern.",
          optionen: ["rohen", "rohe", "roher"], richtig: 0,
          regel: "Nach „den“ (Akkusativ maskulin) endet das Adjektiv auf -en: den rohen Fisch."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Gestern habe ich ___ Jakobsmuscheln gegessen.",
          optionen: ["rohe", "rohen", "rohes"], richtig: 0,
          regel: "Plural ohne Artikel, Akkusativ: Das Adjektiv endet auf -e: rohe Muscheln, frische Äpfel."
        },
        {
          typ: "luecke", stufe: 3,
          text: "Sushi isst man mit ___ Fisch. (roh)",
          antworten: ["rohem"],
          regel: "mit + Dativ, ohne Artikel, maskulin: Das Adjektiv zeigt den Fall: mit rohem Fisch (wie „mit dem“)."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Am 11. November erinnert man in Frankreich an das Ende ___ Ersten Weltkriegs.",
          optionen: ["des", "dem", "der"], richtig: 0,
          regel: "das Ende + Genitiv: der Krieg → das Ende des Krieges / des Kriegs."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Es ist Winter und du frierst. Was sagt man auf Deutsch?",
          optionen: ["Mir ist kalt.", "Ich bin kalt.", "Ich habe kalt."], richtig: 0,
          regel: "Mir ist kalt = j'ai froid (Dativ). „Ich bin kalt“ heißt: Ich bin ein kalter, unfreundlicher Mensch."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich ___ den Computer jetzt aus. (ausschalten)",
          antworten: ["schalte"],
          regel: "ausschalten ist trennbar: Ich schalte den Computer aus. Gegenteil: einschalten."
        },
        {
          typ: "luecke", stufe: 2,
          text: "selbstständig → die ___",
          antworten: ["Selbstständigkeit"],
          regel: "Adjektiv auf -ig → Nomen auf -keit, immer feminin: selbstständig → die Selbstständigkeit, möglich → die Möglichkeit."
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["glücklich", "unglücklich"], ["selbstständig", "unselbstständig"], ["einschalten", "ausschalten"], ["anpfeifen", "abpfeifen"]],
          regel: "Gegenteile: un- vor dem Adjektiv macht das Gegenteil; bei Verben wechselt oft die Vorsilbe (ein/aus, an/ab)."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Der Schiedsrichter hat das Spiel in der 90. Minute ___.",
          optionen: ["abgepfiffen", "abgepfeift", "abpfiffen"], richtig: 0,
          regel: "pfeifen ist unregelmäßig: pfiff, hat gepfiffen → abpfeifen: hat abgepfiffen."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Pizza oder Pasta? Das ist mir ___.",
          optionen: ["Wurst", "Brot", "Käse"], richtig: 0,
          regel: "Wiederholung (06.11.): Das ist mir Wurst (Wurscht) = Das ist mir egal."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich schlafe schlecht wegen ___ Lärms.",
          optionen: ["des", "dem", "den"], richtig: 0,
          regel: "Wiederholung (06.11.): wegen + Genitiv: der Lärm → wegen des Lärms."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Der Lehrer teilt die Übungen ___. (austeilen)",
          antworten: ["aus"],
          regel: "Wiederholung (05.11.): austeilen = verteilen, trennbar: Er teilt die Übungen aus."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Das Virus hat sich sehr schnell ___.",
          optionen: ["verbreitet", "geverbreitet", "verbreit"], richtig: 0,
          regel: "Wiederholung (02.11.): sich verbreiten → hat sich verbreitet. Verben mit ver- bekommen kein ge-."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Frankreich → die ___ (Plural)",
          antworten: ["Franzosen"],
          regel: "Wiederholung (02.11.): Frankreich → die Franzosen, Russland → die Russen, Kroatien → die Kroaten."
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Was isst du gern roh, was nur gekocht? Erzähle von einem Essen aus Frankreich. Sprich 4–5 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "Ich esse gern rohe … / Den rohen … mag ich nicht, weil … / Wenn ich ehrlich bin, …"
        }
      ]
    }
  ]
};

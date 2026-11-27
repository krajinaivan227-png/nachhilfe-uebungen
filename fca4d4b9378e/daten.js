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
    },
    {
      id: "2026-11-11",
      titel: "mündlich/schriftlich, streichen, Eroberung, Einmarsch",
      vokabeln: [
        { de: "mündlich / schriftlich", en: "oral / written", fr: "oral / écrit", beispiel: "Morgen habe ich eine mündliche Prüfung." },
        { de: "der Streik, -s", en: "the strike", fr: "la grève", beispiel: "Wegen des Streiks fahren heute keine Züge." },
        { de: "der Schiedsrichter, -", en: "the referee", fr: "l'arbitre", beispiel: "Der Schiedsrichter pfeift das Spiel an." },
        { de: "der Richter, -", en: "the judge", fr: "le juge", beispiel: "Der Richter hat lange überlegt." },
        { de: "entscheiden (entschied, hat entschieden)", en: "to decide", fr: "décider", beispiel: "Ich habe mich für Medizin entschieden." },
        { de: "streichen (strich, hat gestrichen)", en: "to spread; to paint", fr: "étaler, tartiner; peindre", beispiel: "Ich streiche Butter auf das Brot." },
        { de: "der Weltkrieg, -e", en: "the world war", fr: "la guerre mondiale", beispiel: "Der Zweite Weltkrieg endete 1945." },
        { de: "erobern / die Eroberung", en: "to conquer / the conquest", fr: "conquérir / la conquête", beispiel: "Die Römer haben Gallien erobert." },
        { de: "einmarschieren / der Einmarsch", en: "to invade / the invasion", fr: "envahir / l'invasion", beispiel: "1939 marschierte die deutsche Armee in Polen ein." },
        { de: "sich schämen", en: "to be ashamed", fr: "avoir honte", beispiel: "Ich schäme mich für meinen Fehler." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 2,
          frage: "Du hast einen ___ Test und keinen schriftlichen Test.",
          optionen: ["mündlichen", "mündliche", "mündlicher"], richtig: 0,
          regel: "der Test, Akkusativ nach ein/kein: Das Adjektiv endet auf -en: einen mündlichen Test, keinen schriftlichen Test."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Morgen habe ich eine ___ Prüfung. (schriftlich)",
          antworten: ["schriftliche"],
          regel: "die Prüfung, Akkusativ nach eine: Das Adjektiv endet auf -e: eine schriftliche Prüfung."
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["der Schiedsrichter", "l'arbitre"], ["der Richter", "le juge"], ["der Streik", "la grève"], ["die Eroberung", "la conquête"]],
          regel: "Der Schiedsrichter entscheidet im Spiel, der Richter entscheidet vor Gericht."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Der Schiedsrichter hat ___: Es war kein Tor.",
          optionen: ["entschieden", "geentscheidet", "entscheidet"], richtig: 0,
          regel: "entscheiden ist unregelmäßig: entschied, hat entschieden. Verben mit ent- bekommen kein ge-."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich ___ Butter auf das Brot. (streichen)",
          antworten: ["streiche"],
          regel: "streichen: ich streiche, du streichst, er streicht."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich habe Butter auf das Brot ___.",
          optionen: ["gestrichen", "gestreicht", "gestrichtet"], richtig: 0,
          regel: "streichen ist unregelmäßig: strich, hat gestrichen (wie pfeifen – pfiff – hat gepfiffen)."
        },
        {
          typ: "mc", stufe: 1,
          frage: "die Welt + der Krieg = ___",
          optionen: ["der Weltkrieg", "die Weltkrieg", "das Weltkrieg"], richtig: 0,
          regel: "Bei zusammengesetzten Nomen bestimmt das letzte Wort den Artikel: der Krieg → der Weltkrieg."
        },
        {
          typ: "luecke", stufe: 2,
          text: "erobern → die ___",
          antworten: ["Eroberung"],
          regel: "Verb → Nomen mit -ung, immer feminin: erobern → die Eroberung, entscheiden → die Entscheidung."
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["1939", "marschierte", "die", "deutsche", "Armee", "in", "Polen", "ein"],
          loesung: "1939 marschierte die deutsche Armee in Polen ein",
          regel: "einmarschieren ist trennbar: Das Verb steht an Position 2, „ein“ ganz am Ende. Nomen: der Einmarsch."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich habe einen dummen Fehler gemacht. Ich schäme ___.",
          optionen: ["mich", "mir", "sich"], richtig: 0,
          regel: "sich schämen ist reflexiv (Akkusativ): ich schäme mich, du schämst dich, er schämt sich."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Wegen ___ Streiks fahren heute keine Züge.",
          optionen: ["des", "dem", "der"], richtig: 0,
          regel: "wegen + Genitiv: der Streik → wegen des Streiks."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Kannst du bitte das Licht ___?",
          optionen: ["ausschalten", "ausgeschaltet", "schaltest aus"], richtig: 0,
          regel: "Wiederholung (09.11.): Modalverb + Infinitiv am Ende: Kannst du das Licht ausschalten?"
        },
        {
          typ: "mc", stufe: 2,
          frage: "Hier riecht es gut. Der ___ kommt aus der Küche.",
          optionen: ["Geruch", "Gerücht", "Geruchssinn"], richtig: 0,
          regel: "Wiederholung (06.11.): der Geruch = l'odeur, das Gerücht = la rumeur, der Geruchssinn = l'odorat."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Wenn ich ehrlich bin, ___ ich zu viel Kaffee. (trinken)",
          antworten: ["trinke"],
          regel: "Wiederholung (06.11.): Nach dem Nebensatz mit „wenn“ steht das Verb sofort: Wenn …, trinke ich …"
        },
        {
          typ: "mc", stufe: 1,
          frage: "Im Sezierraum riecht es ___ Desinfektionsmittel.",
          optionen: ["nach", "von", "mit"], richtig: 0,
          regel: "Wiederholung (05.11.): riechen nach + Dativ: Es riecht nach Kaffee."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Sie hat keine Sekunde ___.",
          optionen: ["gezögert", "gezögt", "zögerte"], richtig: 0,
          regel: "Wiederholung (05.11.): zögern → hat gezögert (regelmäßig)."
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Hast du lieber mündliche oder schriftliche Prüfungen? Warum? Sprich 4–5 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "Ich habe lieber … , weil … / Einen mündlichen Test finde ich … / Wenn ich ehrlich bin, …"
        }
      ]
    },
    {
      id: "2026-11-13",
      titel: "Glück, Beeren, anrufen/verzeihen, löschen, Speiseröhre",
      vokabeln: [
        { de: "das Glück / das Unglück", en: "luck, happiness / misfortune, accident", fr: "la chance, le bonheur / la malchance, le malheur", beispiel: "Ich hatte Glück: Der Bus war noch da." },
        { de: "die Johannisbeere, -n", en: "the currant", fr: "la groseille", beispiel: "Heute Morgen habe ich Brot mit Johannisbeeren gegessen." },
        { de: "die Erdbeere / Himbeere / Blaubeere", en: "strawberry / raspberry / blueberry", fr: "la fraise / la framboise / la myrtille", beispiel: "Im Sommer esse ich gern Erdbeeren." },
        { de: "anschalten / ausschalten", en: "to switch on / to switch off", fr: "allumer / éteindre", beispiel: "Ich war wach, aber mein Handy war ausgeschaltet." },
        { de: "anrufen (+ Akk.) (rief an, hat angerufen)", en: "to call (on the phone)", fr: "appeler (au téléphone)", beispiel: "Ich habe dich gestern angerufen." },
        { de: "verzeihen (+ Dat.) (verzieh, hat verziehen)", en: "to forgive", fr: "pardonner", beispiel: "Ich verstehe dich und ich verzeihe dir." },
        { de: "löschen", en: "to delete; to put out (a fire)", fr: "supprimer; éteindre (un feu)", beispiel: "Die Feuerwehr hat das Feuer gelöscht." },
        { de: "flüchten (ist geflüchtet)", en: "to flee", fr: "fuir", beispiel: "Wegen des Krieges sind viele Menschen geflüchtet." },
        { de: "die Leiche, -n", en: "the corpse", fr: "le cadavre", beispiel: "Im Anatomiekurs arbeiten die Studenten an einer Leiche." },
        { de: "die Speiseröhre / die Luftröhre", en: "the oesophagus / the windpipe", fr: "l'œsophage / la trachée", beispiel: "Das Essen kommt in die Speiseröhre." }
      ],
      aufgaben: [
        {
          typ: "zuordnen", stufe: 1,
          paare: [["die Erdbeere", "la fraise"], ["die Himbeere", "la framboise"], ["die Blaubeere", "la myrtille"], ["die Johannisbeere", "la groseille"]],
          regel: "Alle Beeren sind feminin: die Beere → die Erdbeere, die Himbeere. Plural: die Beeren."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich habe 50 Euro auf der Straße gefunden. Ich hatte ___!",
          optionen: ["Glück", "Unglück", "glücklich"], richtig: 0,
          regel: "Glück haben = avoir de la chance. Das Gegenteil ist Pech haben."
        },
        {
          typ: "luecke", stufe: 1,
          text: "das Glück → das Gegenteil: das ___",
          antworten: ["Unglück"],
          regel: "un- macht das Gegenteil, der Artikel bleibt gleich: das Glück → das Unglück."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich war wach, aber mein Handy war ___.",
          optionen: ["aus", "ab", "weg"], richtig: 0,
          regel: "aus sein = ausgeschaltet sein, an sein = angeschaltet sein: Das Handy ist aus."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich rufe ___ morgen an.",
          optionen: ["dich", "dir", "du"], richtig: 0,
          regel: "anrufen + Akkusativ: Ich rufe dich an, ich rufe ihn an (nicht: dir, ihm)."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich verstehe dich und ich verzeihe ___.",
          optionen: ["dir", "dich", "du"], richtig: 0,
          regel: "verzeihen + Dativ (Person): Ich verzeihe dir, ich verzeihe ihm."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich habe die Nachricht ___. (löschen)",
          antworten: ["gelöscht"],
          regel: "löschen ist regelmäßig: löschte, hat gelöscht."
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["Butter aufs Brot streichen", "tartiner du beurre"], ["die Wand streichen", "peindre le mur"], ["das Feuer löschen", "éteindre le feu"], ["die Nachricht löschen", "supprimer le message"]],
          regel: "streichen und löschen haben mehrere Bedeutungen – der Kontext entscheidet."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Wegen des Krieges ___ viele Menschen geflüchtet.",
          optionen: ["sind", "haben", "werden"], richtig: 0,
          regel: "flüchten ist eine Bewegung von A nach B → Perfekt mit sein: Sie sind geflüchtet."
        },
        {
          typ: "luecke", stufe: 1,
          text: "bedeuten → die ___",
          antworten: ["Bedeutung"],
          regel: "Verb → Nomen mit -ung, immer feminin: bedeuten → die Bedeutung. Frage: Was bedeutet das?"
        },
        {
          typ: "mc", stufe: 2,
          frage: "Das Essen kommt in die ___, die Luft kommt in die Luftröhre.",
          optionen: ["Speiseröhre", "Luftröhre", "Leiche"], richtig: 0,
          regel: "die Speise = das Essen → die Speiseröhre (l'œsophage); die Luft → die Luftröhre (la trachée)."
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Die", "Feuerwehr", "hat", "das", "Feuer", "gelöscht"],
          loesung: "Die Feuerwehr hat das Feuer gelöscht",
          regel: "Perfekt: haben an Position 2, das Partizip (gelöscht) am Ende."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Die Römer haben Gallien ___.",
          optionen: ["erobert", "geerobert", "eroberte"], richtig: 0,
          regel: "Wiederholung (11.11.): erobern → hat erobert. Verben mit er- bekommen kein ge-."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Der Schiedsrichter pfeift das Spiel ___. (Das Spiel beginnt.)",
          antworten: ["an"],
          regel: "Wiederholung (09.11.): anpfeifen = das Spiel beginnt, abpfeifen = das Spiel endet."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich esse den ___ Fisch nicht gern.",
          optionen: ["rohen", "rohe", "roher"], richtig: 0,
          regel: "Wiederholung (09.11.): der Fisch, Akkusativ nach den: Das Adjektiv endet auf -en: den rohen Fisch."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Wegen der Kälte räuspere ich ___.",
          optionen: ["mich", "mir", "sich"], richtig: 0,
          regel: "Wiederholung (09.11.): sich räuspern ist reflexiv: ich räuspere mich, du räusperst dich."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Der Arzt tastet den Bauch ___. (abtasten)",
          antworten: ["ab"],
          regel: "Wiederholung (09.11.): abtasten ist trennbar: Der Arzt tastet den Bauch ab."
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Welche Beeren isst du gern? Wann und wie isst du sie? Sprich 4–5 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "Ich esse gern … / Am Morgen esse ich … mit … / Wenn ich ehrlich bin, mag ich keine …"
        }
      ]
    },
    {
      id: "2026-11-16",
      titel: "Ebbe und Flut, schwimmen im Perfekt, sammeln, antreten",
      vokabeln: [
        { de: "die Ebbe / die Flut", en: "low tide / high tide", fr: "la marée basse / la marée haute", beispiel: "Im Atlantik gibt es Ebbe und Flut." },
        { de: "schwimmen (schwamm, ist geschwommen)", en: "to swim", fr: "nager", beispiel: "In Portugal bin ich im Meer geschwommen." },
        { de: "Mir ist kalt.", en: "I am cold.", fr: "J'ai froid.", beispiel: "Im Atlantik war mir sehr kalt." },
        { de: "sammeln", en: "to collect, to gather", fr: "ramasser, cueillir ; collectionner", beispiel: "Ich habe in den Bergen Blaubeeren gesammelt." },
        { de: "die Sammlung, -en", en: "the collection", fr: "la collection", beispiel: "Er hat eine große Briefmarkensammlung." },
        { de: "antreten (trat an, ist angetreten)", en: "to compete, to take part", fr: "concourir, participer", beispiel: "Unsere Mannschaft tritt bei einem Turnier an." },
        { de: "gegen (+ Akk.) antreten", en: "to compete against", fr: "affronter", beispiel: "Morgen treten wir gegen eine starke Mannschaft an." },
        { de: "konkurrieren (mit + Dat.)", en: "to compete (with)", fr: "être en concurrence (avec)", beispiel: "Die beiden Firmen konkurrieren miteinander." },
        { de: "das Turnier, -e", en: "the tournament", fr: "le tournoi", beispiel: "Das Turnier dauert zwei Tage." }
      ],
      aufgaben: [
        {
          typ: "zuordnen", stufe: 1,
          paare: [["die Ebbe", "la marée basse"], ["die Flut", "la marée haute"], ["die Sammlung", "la collection"], ["das Turnier", "le tournoi"]],
          regel: "Neue Wörter der Stunde."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Gestern ___ ich im Meer geschwommen.",
          antworten: ["bin"],
          regel: "schwimmen – schwamm – ist geschwommen. In Österreich und Süddeutschland immer mit sein; „habe geschwommen“ hört man nur im Norden."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Wir ___ über den ganzen See geschwommen.",
          optionen: ["sind", "haben", "werden"], richtig: 0,
          regel: "Mit Ziel oder Strecke (über den See, ans Ufer) immer sein: Wir sind … geschwommen."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Das Wasser war 14 Grad. ___ sehr kalt.",
          optionen: ["Mir war", "Ich war", "Ich hatte"], richtig: 0,
          regel: "Mir ist kalt / mir war kalt (Dativ) = j'ai froid. „Ich bin kalt“ bedeutet etwas anderes (= unfreundlich)."
        },
        {
          typ: "luecke", stufe: 1,
          text: "sammeln → die ___",
          antworten: ["Sammlung"],
          regel: "Verb → Nomen mit -ung, immer feminin: die Sammlung."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Im Herbst haben wir im Wald Pilze ___.",
          optionen: ["gesammelt", "gesammt", "sammelt"], richtig: 0,
          regel: "sammeln ist regelmäßig: sammelte, hat gesammelt."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Nächste Woche trete ich bei einem Schachturnier ___.",
          antworten: ["an"],
          regel: "antreten ist trennbar: ich trete … an."
        },
        {
          typ: "mc", stufe: 3,
          frage: "Letztes Jahr ___ ich bei einem Fußballturnier angetreten.",
          optionen: ["bin", "habe", "wurde"], richtig: 0,
          regel: "antreten bildet das Perfekt mit sein: Ich bin angetreten."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Im Finale treten wir ___ eine starke Mannschaft an.",
          optionen: ["gegen", "mit", "für"], richtig: 0,
          regel: "gegen + Akkusativ antreten = affronter."
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["Im", "Finale", "treten", "wir", "gegen", "eine", "starke", "Mannschaft", "an"],
          loesung: "Im Finale treten wir gegen eine starke Mannschaft an",
          regel: "Trennbares Verb: treten auf Position 2, an ganz am Ende."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Die beiden Firmen konkurrieren ___.",
          optionen: ["miteinander", "füreinander", "aneinander"], richtig: 0,
          regel: "konkurrieren mit + Dativ: Wir konkurrieren miteinander."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich habe dich gestern ___. (anrufen)",
          antworten: ["angerufen"],
          regel: "Wiederholung (13.11.): anrufen – rief an – hat angerufen; anrufen + Akkusativ."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich verstehe dich und ich verzeihe ___.",
          optionen: ["dir", "dich", "du"], richtig: 0,
          regel: "Wiederholung (13.11.): verzeihen + Dativ (Person)."
        },
        {
          typ: "mc", stufe: 1,
          frage: "___ Himbeere ist rot.",
          optionen: ["Die", "Der", "Das"], richtig: 0,
          regel: "Wiederholung (13.11.): Alle Beeren sind feminin: die Beere → die Himbeere."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Wegen ___ fahren heute keine Züge.",
          optionen: ["des Streiks", "der Streik", "den Streik"], richtig: 0,
          regel: "Wiederholung (11.11.): wegen + Genitiv: der Streik → wegen des Streiks."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Morgen habe ich eine ___ Prüfung. (mündlich)",
          antworten: ["mündliche"],
          regel: "Wiederholung (11.11.): eine + Adjektiv + -e (Akkusativ feminin): eine mündliche Prüfung."
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Erzähl von einem Tag am Meer oder in den Bergen: Bist du geschwommen? Hast du etwas gesammelt? Sprich etwa 1 Minute. Nimm dich auf und höre dich an.",
          hinweis: "Ich bin … geschwommen. / Mir war kalt / warm. / Bei Ebbe … / Ich habe … gesammelt."
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Ein Wettkampf: Schreibe 5–6 Sätze über ein Turnier oder einen Test, bei dem du angetreten bist.",
          checkliste: [
            "Ich habe antreten im Perfekt mit sein benutzt.",
            "Ich habe gegen + Akkusativ benutzt.",
            "Ich habe sammeln oder die Sammlung benutzt.",
            "Ich habe mir war kalt / warm (Dativ) benutzt."
          ],
          muster: "Letzten Sommer bin ich bei einem Volleyballturnier am Strand angetreten. Im ersten Spiel sind wir gegen eine sehr starke Mannschaft angetreten. Es war Ebbe, deshalb war der Strand sehr breit. Nach dem Spiel bin ich im Meer geschwommen, aber mir war sehr kalt. Am Ende haben wir genug Punkte gesammelt und den dritten Platz gewonnen."
        }
      ]
    },
    {
      id: "2026-11-20",
      titel: "Erinnerung an, sich Sorgen machen, angenehm/unangenehm, Läden",
      vokabeln: [
        { de: "schwanken", fr: "vaciller, tanguer", en: "to sway", beispiel: "Das Schiff schwankt, aber es geht nicht unter." },
        { de: "untergehen (ging unter, ist untergegangen)", fr: "couler, sombrer", en: "to sink", beispiel: "Die Titanic ist 1912 untergegangen." },
        { de: "die Erinnerung an (+ Akk.)", fr: "le souvenir de", en: "the memory of", beispiel: "Ich habe eine schöne Erinnerung an den Urlaub." },
        { de: "der Anschlag, die Anschläge", fr: "l'attentat", en: "the attack", beispiel: "Ich erinnere mich nicht an den Anschlag in Paris." },
        { de: "der Kater, -", fr: "le chat (mâle)", en: "the tomcat", beispiel: "Mein Kater hat die ganze Nacht miaut." },
        { de: "der Laden, die Läden", fr: "le magasin, la boutique", en: "the shop", beispiel: "Am Sonntag sind die Läden geschlossen." },
        { de: "günstig", fr: "bon marché, avantageux", en: "cheap, good value", beispiel: "Im Supermarkt ist das Brot günstiger." },
        { de: "angenehm / unangenehm", fr: "agréable / désagréable", en: "pleasant / unpleasant", beispiel: "Das Wetter ist heute sehr angenehm." },
        { de: "der Kommilitone / die Kommilitonin", fr: "le camarade / la camarade d'études", en: "the fellow student", beispiel: "Meine Kommilitonin hilft mir beim Lernen." },
        { de: "sich Sorgen machen (um + Akk.)", fr: "s'inquiéter (pour)", en: "to worry (about)", beispiel: "Mach dir keine Sorgen!" }
      ],
      aufgaben: [
        {
          typ: "zuordnen", stufe: 1,
          paare: [["angenehm", "agréable"], ["unangenehm", "désagréable"], ["günstig", "bon marché"], ["die Sorge", "le souci"]],
          regel: "un- macht oft das Gegenteil: angenehm ↔ unangenehm."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich erinnere mich gern ___ meine Schulzeit.",
          antworten: ["an"],
          regel: "sich erinnern an + Akkusativ."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich habe keine Erinnerung an ___ Anschlag.",
          optionen: ["den", "dem", "der"], richtig: 0,
          regel: "die Erinnerung an + Akkusativ: der Anschlag → an den Anschlag."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Das Schiff ist im Sturm ___.",
          optionen: ["untergegangen", "untergehen", "unterging"], richtig: 0,
          regel: "untergehen – ging unter – ist untergegangen (Perfekt mit sein)."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich ___ Briefmarken. (sammeln, Präsens)",
          antworten: ["sammle", "sammele"],
          regel: "Verben auf -eln: ich sammle (das e fällt meistens weg), du sammelst, er sammelt."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Mein Kater ___ jeden Morgen vor der Tür.",
          optionen: ["miaut", "miauet", "miaust"], richtig: 0,
          regel: "miauen: er/sie/es miaut. Perfekt: hat miaut."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Am Sonntag sind fast alle ___ geschlossen. (der Laden, Plural)",
          antworten: ["Läden"],
          regel: "der Laden → die Läden (mit Umlaut)."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Dieses Hotel ist ___ als das andere.",
          optionen: ["günstiger", "günstig", "am günstigsten"], richtig: 0,
          regel: "Komparativ + als: günstig → günstiger als. billig und günstig bedeuten fast dasselbe, günstig klingt positiver."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Er studiert mit mir an der Uni. Er ist mein ___.",
          optionen: ["Kommilitone", "Kommilitonin", "Kommilitonen"], richtig: 0,
          regel: "der Kommilitone (Mann), die Kommilitonin (Frau), die Kommilitonen (Plural)."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Mach ___ keine Sorgen! Alles wird gut.",
          antworten: ["dir"],
          regel: "sich (Dativ) Sorgen machen: Mach dir keine Sorgen! = Ne t'inquiète pas !"
        },
        {
          typ: "mc", stufe: 3,
          frage: "Meine Eltern machen sich Sorgen ___ mich.",
          optionen: ["um", "für", "an"], richtig: 0,
          regel: "sich Sorgen machen um + Akkusativ."
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["Es", "ist", "mir", "unangenehm,", "dass", "ich", "zu", "spät", "komme"],
          loesung: "Es ist mir unangenehm, dass ich zu spät komme",
          regel: "Es ist mir unangenehm, dass … – im Nebensatz steht das Verb am Ende."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich ___ gestern im Meer geschwommen.",
          optionen: ["bin", "bist", "sind"], richtig: 0,
          regel: "Wiederholung (16.11.): schwimmen – ich bin geschwommen (mit sein ist besser als mit haben)."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Beim Turnier trete ich ___ meinen Bruder an.",
          antworten: ["gegen"],
          regel: "Wiederholung (16.11.): gegen + Akkusativ antreten."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich verstehe dich und ich verzeihe ___.",
          optionen: ["dir", "dich", "du"], richtig: 0,
          regel: "Wiederholung (13.11.): verzeihen + Dativ: ich verzeihe dir."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Die Feuerwehr hat das Feuer ___.",
          optionen: ["gelöscht", "gelöschen", "löschte"], richtig: 0,
          regel: "Wiederholung (13.11.): löschen – hat gelöscht."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Der ___ (l'arbitre) hat das Spiel abgepfiffen.",
          antworten: ["Schiedsrichter"],
          regel: "Wiederholung (11.11.): der Schiedsrichter = l'arbitre; der Richter = le juge."
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Erzähle von einer schönen oder einer unangenehmen Erinnerung an deine Schul- oder Studienzeit. Sprich etwa 1 Minute. Nimm dich auf und höre dich an.",
          hinweis: "Ich habe eine schöne Erinnerung an … / Es war mir unangenehm, dass … / Meine Kommilitonen …"
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Ein Freund hat Angst vor einer Prüfung. Schreibe ihm eine kurze Nachricht (5 Sätze).",
          checkliste: [
            "Ich habe Mach dir keine Sorgen! oder sich Sorgen machen um benutzt.",
            "Ich habe angenehm oder unangenehm benutzt.",
            "Ich habe die Erinnerung an + Akkusativ benutzt.",
            "Im Nebensatz (dass, weil) steht das Verb am Ende."
          ],
          muster: "Hallo Paul, mach dir keine Sorgen wegen der Prüfung! Ich habe eine gute Erinnerung an meine eigene Prüfung: Am Anfang war es unangenehm, aber dann ging alles gut. Du hast viel gelernt, deshalb bin ich sicher, dass du es schaffst. Danach gehen wir in ein günstiges Lokal essen. Viel Glück!"
        }
      ]
    },
    {
      id: "2026-11-25",
      titel: "Impfung, sich erholen, Termine verschieben, einen Kater haben",
      vokabeln: [
        { de: "schwitzen / der Schweiß", fr: "transpirer / la sueur", en: "to sweat / the sweat", beispiel: "Beim Sport schwitze ich viel." },
        { de: "die Impfung, die Impfungen", fr: "la vaccination", en: "the vaccination", beispiel: "Die Impfung gegen die Grippe ist freiwillig." },
        { de: "sich impfen lassen", fr: "se faire vacciner", en: "to get vaccinated", beispiel: "Ich habe mich gegen die Grippe impfen lassen." },
        { de: "die Pflicht, die Pflichten", fr: "l'obligation, le devoir", en: "the duty, the obligation", beispiel: "In Österreich ist die Grippeimpfung keine Pflicht." },
        { de: "sich erholen", fr: "se reposer, se remettre", en: "to recover, to rest", beispiel: "Am Wochenende erhole ich mich." },
        { de: "vereinbaren", fr: "fixer, convenir de", en: "to arrange, to agree on", beispiel: "Wir haben einen Termin um 9 Uhr vereinbart." },
        { de: "verschieben auf (+ Akk.) (hat verschoben)", fr: "reporter à", en: "to postpone to", beispiel: "Wir verschieben die Stunde auf Freitag." },
        { de: "der Unterschied / unterscheiden", fr: "la différence / différencier", en: "the difference / to distinguish", beispiel: "Ich sehe keinen Unterschied." },
        { de: "gesprächig", fr: "bavard", en: "talkative", beispiel: "Heute bist du sehr gesprächig." },
        { de: "einen Kater haben", fr: "avoir la gueule de bois", en: "to have a hangover", beispiel: "Nach der Party hatte er einen Kater." }
      ],
      aufgaben: [
        {
          typ: "zuordnen", stufe: 1,
          paare: [["schwitzen", "transpirer"], ["der Schweiß", "la sueur"], ["gesprächig", "bavard"], ["die Pflicht", "l'obligation"], ["der Unterschied", "la différence"]],
          regel: "Neue Wörter der Stunde."
        },
        {
          typ: "mc", stufe: 3,
          frage: "Ich habe mich vor zwei Wochen gegen die Grippe impfen ___.",
          optionen: ["lassen", "gelassen", "geimpft"], richtig: 0,
          regel: "sich impfen lassen = se faire vacciner. Im Perfekt mit zwei Infinitiven: Ich habe mich impfen lassen."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Die ___ gegen die Grippe ist in Österreich freiwillig.",
          optionen: ["Impfung", "Impfen", "Impf"], richtig: 0,
          regel: "impfen → die Impfung. Nomen auf -ung sind immer feminin."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Hausaufgaben sind keine ___, aber sie helfen. (l'obligation)",
          antworten: ["Pflicht"],
          regel: "die Pflicht = l'obligation, le devoir. „Obligation“ gibt es im Deutschen fast nur in der Finanzsprache."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Nach dem Turnier ___ ich mich am Wochenende. (sich erholen)",
          antworten: ["erhole"],
          regel: "sich erholen ist reflexiv: ich erhole mich, du erholst dich."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Wir haben einen Termin um 9 Uhr ___.",
          optionen: ["vereinbart", "vereinbaren", "gevereinbart"], richtig: 0,
          regel: "Verben mit ver- haben kein ge- im Partizip: vereinbaren → vereinbart."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Wir verschieben die Stunde ___ Freitag.",
          optionen: ["auf", "an", "zu"], richtig: 0,
          regel: "etwas verschieben auf + Akkusativ: auf Freitag, auf nächste Woche."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Das Spiel wurde wegen Regen ___. (verschieben, Partizip)",
          antworten: ["verschoben"],
          regel: "verschieben – verschob – hat verschoben (unregelmäßig, kein ge-)."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich kann die Zwillinge nicht ___.",
          optionen: ["unterscheiden", "unterschieden", "Unterschied"], richtig: 0,
          regel: "unterscheiden (Verb) – der Unterschied (Nomen). Nach „kann“ steht der Infinitiv."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Heute bist du nicht so ___ wie sonst.",
          optionen: ["gesprächig", "gesprochen", "Gespräch"], richtig: 0,
          regel: "gesprächig = bavard (Adjektiv). Synonym: redselig."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Er hat zu viel Wein getrunken. Am nächsten Tag hat er einen ___.",
          optionen: ["Kater", "Schweiß", "Unterschied"], richtig: 0,
          regel: "einen Kater haben = avoir la gueule de bois. Achtung: der Kater ist auch le chat (mâle)."
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["Ich", "glaube,", "dass", "du", "dich", "gut", "erholt", "hast."],
          loesung: "Ich glaube, dass du dich gut erholt hast.",
          regel: "Im dass-Satz steht das Verb am Ende (erholt hast), das Reflexivpronomen früh (dich)."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Es ist mir ___, dass ich zu spät komme.",
          optionen: ["unangenehm", "angenehm", "günstig"], richtig: 0,
          regel: "Wiederholung (20.11.): unangenehm = désagréable, angenehm = agréable."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Mach dir keine ___! (die Sorge, Plural)",
          antworten: ["Sorgen"],
          regel: "Wiederholung (20.11.): Mach dir keine Sorgen! = Ne t'inquiète pas !"
        },
        {
          typ: "mc", stufe: 2,
          frage: "Das Schiff schwankt, aber es geht nicht ___.",
          optionen: ["unter", "auf", "aus"], richtig: 0,
          regel: "Wiederholung (20.11.): untergehen = couler, sombrer (trennbar)."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Bei Ebbe ist der Wasserstand ___.",
          optionen: ["niedrig", "hoch", "warm"], richtig: 0,
          regel: "Wiederholung (16.11.): die Ebbe = la marée basse, die Flut = la marée haute."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Wir haben im Gebirge Beeren ___. (sammeln, Partizip)",
          antworten: ["gesammelt"],
          regel: "Wiederholung (16.11.): sammeln – hat gesammelt."
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Gesund durch den Winter: Was machst du, wenn du krank bist? Lässt du dich impfen? Wie erholst du dich? Sprich etwa 1 Minute. Nimm dich auf und höre dich an.",
          hinweis: "Wenn ich krank bin, trinke ich … / Ich lasse mich (nicht) impfen, weil … / Am Wochenende erhole ich mich …"
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Du bist krank und musst einen Termin verschieben. Schreibe eine kurze Nachricht (5 Sätze).",
          checkliste: [
            "Ich habe verschieben auf + Akkusativ benutzt.",
            "Ich habe vereinbart benutzt.",
            "Ich habe sich erholen benutzt.",
            "Im Nebensatz (dass, weil) steht das Verb am Ende."
          ],
          muster: "Hallo Anna, leider bin ich krank und muss mich ein paar Tage erholen. Wir haben einen Termin am Dienstag um 9 Uhr vereinbart. Können wir ihn auf Freitag verschieben? Ich hoffe, dass dir das passt. Viele Grüße"
        }
      ]
    },
    {
      id: "2026-11-26",
      titel: "Butter streichen, als + Beruf, Pflicht + zu, nachahmen",
      vokabeln: [
        { de: "streichen (strich, hat gestrichen)", fr: "tartiner", en: "to spread", beispiel: "Ich streiche Butter auf das Brot." },
        { de: "schmieren", fr: "tartiner (familier)", en: "to spread, to smear", beispiel: "Ich schmiere Butter auf das Brot." },
        { de: "als (+ Beruf)", fr: "en tant que", en: "as", beispiel: "Als Arzt muss ich viel arbeiten." },
        { de: "die Pflicht haben, … zu …", fr: "avoir l'obligation de …", en: "to have the duty to …", beispiel: "Ich habe die Pflicht, pünktlich zu sein." },
        { de: "nachahmen (+ Akk.)", fr: "imiter", en: "to imitate", beispiel: "Kinder ahmen ihre Eltern nach." },
        { de: "imitieren (+ Akk.)", fr: "imiter", en: "to imitate", beispiel: "Er imitiert seinen Lehrer." },
        { de: "wagen, … zu …", fr: "oser …", en: "to dare to …", beispiel: "Viele wagen nicht, Deutsch zu sprechen." },
        { de: "der Vorname", fr: "le prénom", en: "the first name", beispiel: "Mein Vorname ist Daniel." },
        { de: "der Nachname", fr: "le nom de famille", en: "the surname", beispiel: "Wie ist Ihr Nachname?" }
      ],
      aufgaben: [
        {
          typ: "zuordnen", stufe: 1,
          paare: [["streichen", "tartiner"], ["nachahmen", "imiter"], ["wagen", "oser"], ["der Vorname", "le prénom"], ["der Nachname", "le nom de famille"]],
          regel: "Neue Wörter der Stunde."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich streiche Butter auf ___ Brot.",
          optionen: ["das", "dem", "der"], richtig: 0,
          regel: "Wohin? → auf + Akkusativ: auf das Brot (kurz: aufs Brot)."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Kannst du mir Butter aufs Brot ___? (tartiner)",
          antworten: ["streichen", "schmieren"],
          regel: "Butter streichen = Butter schmieren (schmieren ist umgangssprachlicher)."
        },
        {
          typ: "mc", stufe: 1,
          frage: "___ Schiedsrichter muss ich die Regeln gut kennen.",
          optionen: ["Als", "Wie", "Wenn"], richtig: 0,
          regel: "als + Beruf/Rolle = en tant que: Als Arzt …, Als Schiedsrichter … (ohne Artikel)."
        },
        {
          typ: "luecke", stufe: 3,
          text: "Als ___ Arzt habe ich keine Pflicht, mich impfen zu lassen. (österreichisch)",
          antworten: ["österreichischer"],
          regel: "Adjektiv ohne Artikel, maskulin, Nominativ: -er (österreichischer Arzt, französischer Arzt)."
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Ich", "habe", "die", "Pflicht,", "pünktlich", "zu", "sein."],
          loesung: "Ich habe die Pflicht, pünktlich zu sein.",
          regel: "die Pflicht haben + zu + Infinitiv am Ende: …, pünktlich zu sein."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Mein Bruder ahmt mich immer ___. (nachahmen)",
          antworten: ["nach"],
          regel: "nachahmen ist trennbar: Er ahmt mich nach. Perfekt: hat nachgeahmt."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Er imitiert ___ sehr gut.",
          optionen: ["mich", "mir", "ich"], richtig: 0,
          regel: "imitieren und nachahmen + Akkusativ: Er imitiert mich."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Viele Touristen wagen nicht, auf Deutsch ___.",
          optionen: ["zu sprechen", "sprechen", "gesprochen"], richtig: 0,
          regel: "wagen + zu + Infinitiv: Ich wage nicht, … zu sprechen."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Daniel ist mein ___, nicht mein Nachname.",
          optionen: ["Vorname", "Name", "Spitzname"], richtig: 0,
          regel: "der Vorname = le prénom, der Nachname = le nom de famille. der Name kann beides sein."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Nach einer Grippe muss ich mich gut ___. (se remettre)",
          antworten: ["erholen"],
          regel: "Wiederholung (25.11.): sich erholen = se reposer, se remettre."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Was ist der ___ zwischen Ebbe und Flut?",
          optionen: ["Unterschied", "Grund", "Kater"], richtig: 0,
          regel: "Wiederholung (25.11.): der Unterschied zwischen … und … = la différence entre … et …"
        },
        {
          typ: "mc", stufe: 1,
          frage: "Der Kater ___ vor der Tür.",
          optionen: ["miaut", "bellt", "schwitzt"], richtig: 0,
          regel: "Wiederholung (20.11.): miauen: der Kater miaut (ein Hund bellt)."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Beim Turnier treten wir ___ drei andere Mannschaften an.",
          optionen: ["gegen", "mit", "für"], richtig: 0,
          regel: "Wiederholung (16.11.): gegen + Akkusativ antreten."
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Wähle eine Rolle (Schiedsrichter, Arzt, Student) und erzähle: Welche Pflichten hast du in dieser Rolle? Sprich etwa 1 Minute. Nimm dich auf und höre dich an.",
          hinweis: "Als Schiedsrichter habe ich die Pflicht, … zu … / Als Student muss ich … / Manche wagen nicht, … zu …"
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Deine Pflichten als Schiedsrichter oder Student: Schreibe 5 Sätze.",
          checkliste: [
            "Ich habe als + Beruf/Rolle benutzt.",
            "Ich habe die Pflicht haben + zu + Infinitiv benutzt.",
            "Ich habe wagen oder nachahmen benutzt.",
            "Im Nebensatz (dass, weil) steht das Verb am Ende."
          ],
          muster: "Als Schiedsrichter habe ich viele Pflichten. Ich habe die Pflicht, die Regeln gut zu kennen. Manche Spieler wagen nicht, mit mir zu diskutieren. Junge Spieler ahmen oft die Profis nach. Ich finde es wichtig, dass ich immer ruhig bleibe."
        }
      ]
    },
    {
      id: "2026-11-27",
      titel: "Ausweis & Führerschein, vorsichtig, üblicherweise, Schnee",
      vokabeln: [
        { de: "streicheln (+ Akk.)", fr: "caresser", en: "to stroke, to pet", beispiel: "Ich streichle meinen Kater." },
        { de: "der Pass", fr: "le passeport", en: "the passport", beispiel: "Für die Reise brauche ich meinen Pass." },
        { de: "der Ausweis", fr: "la carte d'identité", en: "the ID card", beispiel: "In meinem Ausweis stehen drei Vornamen." },
        { de: "der Führerschein", fr: "le permis de conduire", en: "the driving licence", beispiel: "Ohne Führerschein darf man nicht Auto fahren." },
        { de: "vorsichtig", fr: "prudent", en: "careful", beispiel: "Du fährst sehr vorsichtig." },
        { de: "die Vorsicht", fr: "la prudence", en: "caution", beispiel: "Vorsicht, die Straße ist glatt!" },
        { de: "zu Fuß", fr: "à pied", en: "on foot", beispiel: "Nach der Uni gehe ich zu Fuß nach Hause." },
        { de: "üblich / üblicherweise", fr: "habituel / d'habitude", en: "usual / usually", beispiel: "Üblicherweise schneit es im Januar viel." },
        { de: "schneien (es hat geschneit)", fr: "neiger", en: "to snow", beispiel: "Heute schneit es." },
        { de: "die Grenze", fr: "la frontière", en: "the border", beispiel: "An der Grenze zeige ich meinen Pass." }
      ],
      aufgaben: [
        {
          typ: "zuordnen", stufe: 1,
          paare: [["der Pass", "le passeport"], ["der Ausweis", "la carte d'identité"], ["der Führerschein", "le permis de conduire"], ["zu Fuß", "à pied"], ["die Grenze", "la frontière"]],
          regel: "Neue Wörter der Stunde."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich ___ meinen Kater.",
          optionen: ["streichle", "streichelst", "streichelt"], richtig: 0,
          regel: "streicheln: ich streichle (auch: streichele), du streichelst, er streichelt."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Du ___ den Hund. (streicheln)",
          antworten: ["streichelst"],
          regel: "streicheln: du streichelst."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Bei der Kontrolle an der ___ zeige ich meinen Pass.",
          optionen: ["Grenze", "Vorsicht", "Straße"], richtig: 0,
          regel: "die Grenze = la frontière; an der Grenze (Dativ, wo?)."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ohne ___ darf man nicht Auto fahren.",
          optionen: ["Führerschein", "Pass", "Vornamen"], richtig: 0,
          regel: "der Führerschein = le permis de conduire."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Es gibt viel Schnee. Fahr bitte ___! (prudent)",
          antworten: ["vorsichtig"],
          regel: "vorsichtig = Adjektiv/Adverb: vorsichtig fahren."
        },
        {
          typ: "mc", stufe: 2,
          frage: "___, die Straße ist glatt!",
          optionen: ["Vorsicht", "Vorsichtig", "Vorsichtigkeit"], richtig: 0,
          regel: "die Vorsicht = Nomen. Als Warnung sagt man: Vorsicht!"
        },
        {
          typ: "mc", stufe: 1,
          frage: "Nach der Uni gehe ich ___ nach Hause.",
          optionen: ["zu Fuß", "mit Fuß", "auf Fuß"], richtig: 0,
          regel: "zu Fuß gehen = aller à pied."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Trinkgeld geben ist in Österreich ganz ___.",
          optionen: ["üblich", "üblicherweise", "vorsichtig"], richtig: 0,
          regel: "üblich = Adjektiv (das ist üblich); üblicherweise = Adverb (Üblicherweise gebe ich …)."
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["Üblicherweise", "schneit", "es", "im", "Januar", "viel."],
          loesung: "Üblicherweise schneit es im Januar viel.",
          regel: "Adverb auf Position 1 → Verb auf Position 2, dann das Subjekt: Üblicherweise schneit es …"
        },
        {
          typ: "luecke", stufe: 1,
          text: "Im Winter ___ es in den Alpen oft. (schneien)",
          antworten: ["schneit"],
          regel: "schneien: es schneit = il neige. Es gibt Schnee = il y a de la neige."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Gestern hat es den ganzen Tag ___.",
          optionen: ["geschneit", "geschnien", "geschneien"], richtig: 0,
          regel: "schneien ist regelmäßig: es hat geschneit."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich streiche Butter ___ das Brot.",
          antworten: ["auf"],
          regel: "Wiederholung (26.11.): Butter auf das Brot streichen (Akkusativ). Achtung: streichen ≠ streicheln."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Als Schiedsrichter habe ich die Pflicht, ruhig ___.",
          optionen: ["zu bleiben", "bleiben", "geblieben"], richtig: 0,
          regel: "Wiederholung (26.11.): die Pflicht haben + zu + Infinitiv."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Können wir den Termin ___ Freitag verschieben?",
          optionen: ["auf", "an", "zu"], richtig: 0,
          regel: "Wiederholung (25.11.): etwas auf + Akkusativ verschieben."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Das Schiff ist im Sturm ___.",
          optionen: ["untergegangen", "untergeht", "geuntergangen"], richtig: 0,
          regel: "Wiederholung (20.11.): untergehen – ist untergegangen (Perfekt mit sein, trennbar)."
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Winter: Was machst du üblicherweise, wenn es viel schneit? Fährst du Auto, nimmst du den Bus oder gehst du zu Fuß? Sprich etwa 1 Minute. Nimm dich auf und höre dich an.",
          hinweis: "Üblicherweise … / Wenn es schneit, fahre ich vorsichtig … / Ich gehe lieber zu Fuß, weil …"
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Du fährst im Winter mit dem Auto nach Österreich. Was brauchst du, worauf musst du achten? Schreibe 5 Sätze.",
          checkliste: [
            "Ich habe Pass, Ausweis oder Führerschein benutzt.",
            "Ich habe vorsichtig oder Vorsicht benutzt.",
            "Nach üblicherweise steht das Verb auf Position 2.",
            "Im Nebensatz (dass, weil, wenn) steht das Verb am Ende."
          ],
          muster: "Für die Reise brauche ich meinen Ausweis und meinen Führerschein. An der Grenze gibt es manchmal eine Kontrolle. Im Winter schneit es in den Alpen üblicherweise viel. Deshalb fahre ich sehr vorsichtig. Ich hoffe, dass die Straßen frei sind."
        }
      ]
    }
  ]
};

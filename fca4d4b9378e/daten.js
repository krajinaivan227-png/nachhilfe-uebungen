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
    }
  ]
};

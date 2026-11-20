window.HEFT = {
  vorname: "Eugenie",
  niveau: "B1",
  modus: "ruhig",
  hilfe: "fr",
  stunden: [
    {
      id: "2026-09-18",
      titel: "Vergleiche und Wortschatz: Stärken, Wirtschaft",
      vokabeln: [
        { de: "weitermachen", en: "to continue", fr: "continuer", beispiel: "Wir machen morgen weiter." },
        { de: "begabt", en: "gifted, talented", fr: "doué", beispiel: "Sie ist begabt in Mathe." },
        { de: "der Bildschirm", en: "the screen", fr: "l'écran", beispiel: "Ich teile meinen Bildschirm." },
        { de: "die Stärke", en: "the strength", fr: "la force, le point fort", beispiel: "Meine Stärke ist Mathe." },
        { de: "ähnlich", en: "similar", fr: "semblable", beispiel: "Die beiden Flaggen sind ähnlich." },
        { de: "sich ähneln", en: "to resemble each other", fr: "se ressembler", beispiel: "Die zwei Brüder ähneln sich." },
        { de: "die Flagge", en: "the flag", fr: "le drapeau", beispiel: "Die Flagge ist rot und weiß." },
        { de: "der Streit", en: "the argument", fr: "la dispute", beispiel: "Es gab einen Streit." },
        { de: "die Wirtschaft", en: "the economy", fr: "l'économie", beispiel: "Die Wirtschaft wächst langsam." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-23",
      titel: "Wortschatz: Erfahrung, Alltag, Erfolg",
      vokabeln: [
        { de: "die Erfahrung", en: "the experience", fr: "l'expérience", beispiel: "Ich habe gute Erfahrungen mit diesem Kurs gemacht." },
        { de: "der Unterschied", en: "the difference", fr: "la différence", beispiel: "Was ist der Unterschied zwischen den zwei Wörtern?" },
        { de: "effizient", en: "efficient", fr: "efficace", beispiel: "Der Prozess ist nicht effizient." },
        { de: "das Gegenteil", en: "the opposite", fr: "le contraire", beispiel: "Das Gegenteil von groß ist klein." },
        { de: "die Mehrheit", en: "the majority", fr: "la majorité", beispiel: "Die Mehrheit hat zugestimmt." },
        { de: "die Minderheit", en: "the minority", fr: "la minorité", beispiel: "Nur eine Minderheit war dagegen." },
        { de: "unabhängig", en: "independent", fr: "indépendant", beispiel: "Mit achtzehn möchten viele unabhängig sein." },
        { de: "der Alltag", en: "everyday life", fr: "le quotidien", beispiel: "Im Alltag habe ich wenig Zeit." },
        { de: "der Erfolg", en: "the success", fr: "le succès", beispiel: "Viel Erfolg bei der Prüfung!" },
        { de: "häufig", en: "often, frequent", fr: "fréquent, souvent", beispiel: "Er ist häufig müde." }
      ],
      aufgaben: []
    },
    {
      id: "2026-09-29",
      titel: "um ... zu, wollen, Wetter und Verkehr",
      vokabeln: [
        { de: "der Vorort", en: "the suburb", fr: "la banlieue", beispiel: "Sie wohnt in einem ruhigen Vorort." },
        { de: "schrittweise", en: "step by step", fr: "pas à pas, progressivement", beispiel: "Er macht schrittweise Fortschritte." },
        { de: "der Stau", en: "the traffic jam", fr: "l'embouteillage", beispiel: "Am Morgen gibt es oft Stau." },
        { de: "die Straßenbahn", en: "the tram", fr: "le tramway", beispiel: "Die Straßenbahn kommt gleich." },
        { de: "gefährlich", en: "dangerous", fr: "dangereux", beispiel: "Der Weg ist bei Regen gefährlich." },
        { de: "der Sturm", en: "the storm", fr: "la tempête", beispiel: "Der Sturm bricht viele Äste ab." },
        { de: "der Blitz", en: "the lightning", fr: "l'éclair", beispiel: "Der Blitz schlägt in den Baum ein." },
        { de: "der Donner", en: "the thunder", fr: "le tonnerre", beispiel: "Nach dem Blitz kommt der Donner." },
        { de: "tröpfeln", en: "to drizzle (lightly)", fr: "pleuvoter", beispiel: "Es tröpfelt nur ein bisschen." },
        { de: "schütten", en: "to pour (rain)", fr: "pleuvoir à verse", beispiel: "Heute schüttet es den ganzen Tag." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Ich mache viele Übungen, ___ mein Deutsch zu verbessern.",
          optionen: ["um", "damit", "weil"], richtig: 0,
          regel: "um ... zu + Infinitiv nennt das Ziel (pour + infinitif). Das Verb im Infinitiv steht am Ende."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich gehe früh ins Bett, um morgen früh ___. (aufstehen)",
          antworten: ["aufzustehen"],
          regel: "Bei trennbaren Verben steht „zu“ in der Mitte: auf + zu + stehen = aufzustehen."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Du ___ morgen früh aufstehen.",
          optionen: ["willst", "will", "wollt"], richtig: 0,
          regel: "wollen: ich will, du willst, er/sie will, wir wollen, ihr wollt, sie wollen."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ihr ___ heute Pizza essen.",
          antworten: ["wollt"],
          regel: "ihr wollt (nicht: ihr wollen)."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich bin gleich groß ___ mein Bruder.",
          optionen: ["wie", "als"], richtig: 0,
          regel: "gleich + Adjektiv + wie (Gleichheit). Beim Komparativ steht „als“: Ich bin größer als meine Schwester."
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["tröpfeln", "Es regnet ein bisschen."], ["schütten", "Es regnet sehr stark."], ["der Blitz", "Man sieht ihn am Himmel."], ["der Donner", "Man hört ihn nach dem Blitz."]],
          regel: "Das sind Erklärungen auf Deutsch. So kannst du neue Wörter auch selbst erklären."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Das Gegenteil von „abhängig“ ist ...",
          optionen: ["unabhängig", "Unabhängigkeit", "Abhängigkeit"], richtig: 0,
          regel: "un- + Adjektiv = Gegenteil: abhängig → unabhängig. Das Nomen: die Unabhängigkeit."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Der Sturm ist gefährlich. Es gibt eine große ___.",
          antworten: ["Gefahr"],
          regel: "Adjektiv → Nomen: gefährlich → die Gefahr."
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Wir", "stehen", "im", "Stau,", "weil", "es", "stark", "schüttet"],
          loesung: "Wir stehen im Stau, weil es stark schüttet",
          regel: "Nach „weil“ steht das Verb am Ende des Satzes."
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["Ich", "übe", "jeden", "Tag,", "um", "mein", "Deutsch", "zu", "verbessern"],
          loesung: "Ich übe jeden Tag, um mein Deutsch zu verbessern",
          regel: "Vor „um“ steht ein Komma. Am Ende des Satzes stehen „zu“ und der Infinitiv."
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Was machst du, um dein Deutsch zu verbessern? Sprich 4 Sätze mit „um ... zu“. Nimm dich auf und höre dich an.",
          hinweis: "Zum Beispiel: Ich lese viel, um ... zu ... / Ich höre Podcasts, um ... zu ..."
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 5 Sätze über das Wetter und den Verkehr an einem Regentag. Benutze mindestens drei neue Wörter (zum Beispiel Stau, Sturm, Straßenbahn, gefährlich) und einen Satz mit „um ... zu“.",
          checkliste: [
            "Ich habe mindestens drei neue Wörter aus der Stunde benutzt.",
            "Ich habe einen Satz mit „um ... zu“ geschrieben.",
            "Vor „um“ steht ein Komma.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "An einem Regentag nehme ich die Straßenbahn, um nicht im Stau zu stehen. Bei Sturm ist es draußen gefährlich. Manchmal schüttet es sehr stark. Dann bleibe ich lieber zu Hause. Am Abend tröpfelt es nur noch ein bisschen."
        }
      ]
    },
    {
      id: "2026-10-06",
      titel: "Futur mit werden, wenn-Satz, Angst haben vor",
      vokabeln: [
        { de: "nacheinander", en: "one after the other", fr: "l'un après l'autre", beispiel: "Sie kommen nacheinander." },
        { de: "an etwas teilnehmen", en: "to take part in sth", fr: "participer à qc", beispiel: "Ich habe an vier Meetings teilgenommen." },
        { de: "der Bildschirm", en: "the screen", fr: "l'écran", beispiel: "Der Bildschirm ist zu klein." },
        { de: "der Stau", en: "the traffic jam", fr: "l'embouteillage", beispiel: "In der Stadt gibt es oft einen Stau." },
        { de: "die Rettungsgasse", en: "the emergency corridor", fr: "le couloir de secours", beispiel: "Im Stau bildet man eine Rettungsgasse." },
        { de: "schützen", en: "to protect", fr: "protéger", beispiel: "Die Eltern schützen ihre Kinder." },
        { de: "Angst haben vor (+ Dativ)", en: "to be afraid of", fr: "avoir peur de", beispiel: "Er hat vor nichts Angst." },
        { de: "der Forscher, die Forscherin", en: "the researcher", fr: "le chercheur, la chercheuse", beispiel: "Die Forscherin arbeitet an einem neuen Projekt." },
        { de: "jemanden auszeichnen", en: "to award sb", fr: "récompenser qn", beispiel: "Sie wird für ihre Forschung ausgezeichnet." },
        { de: "die Luftverschmutzung", en: "air pollution", fr: "la pollution de l'air", beispiel: "Die Luftverschmutzung ist in großen Städten hoch." }
      ],
      aufgaben: [
        {
          typ: "luecke", stufe: 1,
          text: "Ich habe an vier Meetings ___. (teilnehmen)",
          antworten: ["teilgenommen"],
          regel: "teilnehmen – nahm teil – hat teilgenommen (trennbar: teil + genommen)."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Wenn du zu schnell fährst, ___ eine Strafe bekommen.",
          optionen: ["wirst du", "du wirst"], richtig: 0,
          regel: "Nach dem wenn-Satz kommt im Hauptsatz zuerst das Verb: ..., wirst du ..."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Morgen ___ es in Paris regnen. (werden)",
          antworten: ["wird"],
          regel: "Futur: werden + Infinitiv. es wird regnen."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Er hat Angst vor ___ Hund.",
          optionen: ["dem", "den", "der"], richtig: 0,
          regel: "Angst haben vor + Dativ: der Hund → vor dem Hund."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Es regnet. Ich brauche einen ___.",
          optionen: ["Regenschirm", "Bildschirm"], richtig: 0,
          regel: "der Regenschirm = le parapluie; der Bildschirm = l'écran."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Die Forscherin wird für ihre Arbeit ___. (auszeichnen)",
          antworten: ["ausgezeichnet"],
          regel: "Passiv: wird + Partizip II. auszeichnen → ausgezeichnet."
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["In", "der", "Stadt", "gibt", "es", "oft", "einen", "Stau"],
          loesung: "In der Stadt gibt es oft einen Stau",
          regel: "Ort am Anfang → Verb auf Position 2. es gibt + Akkusativ."
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["die Luftverschmutzung", "la pollution de l'air"], ["die Lebenserwartung", "l'espérance de vie"], ["das Gehirn", "le cerveau"], ["der Stau", "l'embouteillage"]],
          regel: "Zusammengesetzte Nomen: der Artikel kommt vom letzten Wort (die Luft + die Verschmutzung)."
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["die Mehrheit", "die Minderheit"], ["abhängig", "unabhängig"], ["der Erfolg", "der Misserfolg"], ["ähnlich", "verschieden"]],
          regel: "Wiederholung (18.09., 23.09.): Gegenteile lernt man gut zusammen."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich stehe früh auf, um pünktlich ___ sein.",
          antworten: ["zu"],
          regel: "Wiederholung (29.09.): um … zu + Infinitiv nennt das Ziel (pour + infinitif)."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich habe keine Lust, so früh ___. (aufstehen)",
          antworten: ["aufzustehen"],
          regel: "Wiederholung (29.09.): Bei trennbaren Verben steht zu in der Mitte: aufzustehen."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ihr ___ heute ins Kino gehen, oder?",
          optionen: ["wollt", "wollen", "willst"],
          richtig: 0,
          regel: "Wiederholung (29.09.): wollen: ich will, du willst, ihr wollt."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Meine Schwester ist größer ___ ich.",
          optionen: ["als", "wie", "dann"],
          richtig: 0,
          regel: "Wiederholung (29.09.): Komparativ + als. Gleichheit: so groß wie."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Bei Gewitter ist es ___, unter einem Baum zu stehen.",
          optionen: ["gefährlich", "häufig", "effizient"],
          richtig: 0,
          regel: "Wiederholung (29.09.): gefährlich → die Gefahr."
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 5 Sätze: Was wird in deiner Stadt in 20 Jahren anders sein?",
          checkliste: [
            "Ich habe werden + Infinitiv benutzt (… wird … sein).",
            "Ich habe mindestens einen wenn-Satz geschrieben.",
            "Nach dem wenn-Satz steht das Verb zuerst.",
            "Ich habe mindestens zwei neue Wörter benutzt."
          ],
          muster: "In 20 Jahren wird es weniger Autos geben. Die Luftverschmutzung wird kleiner sein. Wenn es weniger Staus gibt, werden die Menschen schneller ankommen. Viele Forscher werden neue Medikamente finden. Die Lebenserwartung wird weiter steigen."
        }
      ]
    },
    {
      id: "2026-11-20",
      titel: "sich etwas vorstellen, Futur mit werden, enttäuscht von, schütten/schütteln",
      vokabeln: [
        { de: "sich (Dat.) etwas vorstellen", fr: "imaginer qc", en: "to imagine sth", beispiel: "Ich kann mir ein Leben ohne Kunst nicht vorstellen." },
        { de: "der Künstler / die Künstlerin", fr: "l'artiste", en: "the artist", beispiel: "Die Künstlerin malt große Bilder." },
        { de: "ausverkauft", fr: "complet, épuisé", en: "sold out", beispiel: "Alle Karten waren ausverkauft." },
        { de: "überall", fr: "partout", en: "everywhere", beispiel: "In der Stadt gibt es überall Baustellen." },
        { de: "schmutzig / sauber", fr: "sale / propre", en: "dirty / clean", beispiel: "Die Straße ist sehr schmutzig." },
        { de: "bevorzugen", fr: "préférer", en: "to prefer", beispiel: "Ich bevorzuge Tee, weil Kaffee zu stark ist." },
        { de: "die Regierung", fr: "le gouvernement", en: "the government", beispiel: "Die Regierung hat ein neues Gesetz beschlossen." },
        { de: "enttäuscht von (+ Dat.)", fr: "déçu de / par", en: "disappointed with", beispiel: "Viele Leute sind vom Präsidenten enttäuscht." },
        { de: "die Wahl / wählen", fr: "l'élection / voter", en: "the election / to vote", beispiel: "Nächstes Jahr werde ich wählen." },
        { de: "schütten / schütteln", fr: "pleuvoir à verse / secouer", en: "to pour (rain) / to shake", beispiel: "Es schüttet! Wir schütteln den Regenschirm." }
      ],
      aufgaben: [
        {
          typ: "zuordnen", stufe: 1,
          paare: [["überall", "partout"], ["schmutzig", "sale"], ["sauber", "propre"], ["bevorzugen", "préférer"]],
          regel: "schmutzig (oder dreckig) ↔ sauber; davon kommt die Sauberkeit."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich kann ___ ein Leben ohne Musik nicht vorstellen.",
          antworten: ["mir"],
          regel: "sich (Dativ) etwas vorstellen = imaginer: ich stelle mir etwas vor."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Stell ___ vor: Morgen hast du frei!",
          optionen: ["dir", "dich", "du"], richtig: 0,
          regel: "sich (Dativ) etwas vorstellen: Stell dir vor! = Imagine !"
        },
        {
          typ: "mc", stufe: 3,
          frage: "Darf ich ___ vorstellen? Ich heiße Eugenie.",
          optionen: ["mich", "mir", "sich"], richtig: 0,
          regel: "sich (Akk.) vorstellen = se présenter. sich (Dat.) etwas vorstellen = imaginer qc."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Für das Konzert gibt es keine Karten mehr. Sie sind ___.",
          optionen: ["ausverkauft", "verkaufen", "eingekauft"], richtig: 0,
          regel: "ausverkauft = complet (es gibt keine Karten mehr)."
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich ___ morgen wählen. (werden)",
          antworten: ["werde"],
          regel: "Futur: werden + Infinitiv am Ende: ich werde wählen."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Wir ___ nächstes Jahr nach Wien fahren. (werden)",
          antworten: ["werden"],
          regel: "ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie werden."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Du ___ sicher eine gute Künstlerin.",
          optionen: ["wirst", "wird", "werdest"], richtig: 0,
          regel: "werden: du wirst, er/sie wird. Hier bedeutet werden = devenir."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Viele Leute sind ___ Präsidenten enttäuscht.",
          optionen: ["vom", "von", "von der"], richtig: 0,
          regel: "enttäuscht von + Dativ: der Präsident → vom Präsidenten (der Präsident bekommt -en)."
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Ich", "bevorzuge", "Tee,", "weil", "Kaffee", "zu", "stark", "ist"],
          loesung: "Ich bevorzuge Tee, weil Kaffee zu stark ist",
          regel: "bevorzugen + Akkusativ; nach weil steht das Verb am Ende."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Es regnet sehr, sehr stark. Es ___.",
          optionen: ["schüttet", "schüttelt", "tröpfelt"], richtig: 0,
          regel: "es schüttet = es regnet sehr stark; es tröpfelt = nur ein bisschen; schütteln = secouer."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Zur Begrüßung schütteln wir uns die ___.",
          antworten: ["Hände", "Hand"],
          regel: "sich die Hände schütteln = se serrer la main."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Die ___ regiert das Land.",
          optionen: ["Regierung", "Wahl", "Wählerschaft"], richtig: 0,
          regel: "regieren → die Regierung; wählen → die Wahl, die Wählerschaft."
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["die Wahl", "l'élection"], ["die Wählerschaft", "l'électorat"], ["die Enttäuschung", "la déception"], ["die Neuigkeit", "la nouvelle"]],
          regel: "Viele Nomen auf -ung, -schaft und -keit sind feminin: die."
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich habe Angst ___ Hund.",
          optionen: ["vor dem", "vor den", "für den"], richtig: 0,
          regel: "Wiederholung (06.10.): Angst haben vor + Dativ: der Hund → vor dem Hund."
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich habe gestern an einem Kurs ___. (teilnehmen, Perfekt)",
          antworten: ["teilgenommen"],
          regel: "Wiederholung (06.10.): teilnehmen an + Dativ – hat teilgenommen."
        },
        {
          typ: "mc", stufe: 1,
          frage: "Auf der Autobahn gibt es einen langen ___.",
          optionen: ["Stau", "Sturm", "Vorort"], richtig: 0,
          regel: "Wiederholung (29.09.): der Stau = l'embouteillage."
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Wenn", "es", "schneit,", "bleibe", "ich", "zu", "Hause"],
          loesung: "Wenn es schneit, bleibe ich zu Hause",
          regel: "Wiederholung (06.10.): Nach dem wenn-Satz kommt zuerst das Verb: …, bleibe ich …"
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Welche Stadt bevorzugst du und warum? Sprich etwa 1 Minute. Nimm dich auf und höre dich an.",
          hinweis: "Ich bevorzuge …, weil … / Überall gibt es … / Ich kann mir vorstellen, dort zu wohnen."
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Wie wird deine Stadt in 20 Jahren aussehen? Schreibe 5 Sätze im Futur.",
          checkliste: [
            "Ich habe werden + Infinitiv benutzt (Infinitiv am Ende).",
            "Ich habe sich etwas vorstellen benutzt.",
            "Ich habe überall, sauber oder schmutzig benutzt.",
            "Ich habe die Regierung oder die Wahl benutzt."
          ],
          muster: "In 20 Jahren wird meine Stadt sauberer sein. Es wird überall Bäume und Fahrradwege geben. Ich kann mir vorstellen, dass es weniger Autos geben wird. Die Regierung wird mehr Geld für Kunst ausgeben. Viele Künstler werden in der Stadt wohnen."
        }
      ]
    }
  ]
};

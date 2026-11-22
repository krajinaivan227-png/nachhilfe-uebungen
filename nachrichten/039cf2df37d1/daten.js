window.NACHRICHTEN = {
  vorname: "Daniel",
  niveau: "B1",
  spiel: false,
  tage: [
    {
      datum: "2026-11-22",
      nachrichten: [
        {
          symbol: "⚽", kategorie: "Sport",
          titel: "Dortmund ist neuer Tabellenführer",
          text: "Borussia Dortmund ist neuer Tabellenführer der Fußball-Bundesliga. Am Samstag hat der BVB in Mönchengladbach mit 1:0 gewonnen. Das einzige Tor hat Felix Nmecha geschossen. Dabei hat ihm ein Fehler des Gladbacher Torwarts geholfen.\n\nGleichzeitig hat der FC Bayern München gepatzt und wichtige Punkte verloren. Deshalb steht jetzt Dortmund ganz oben in der Tabelle. Für viele Fans ist das eine Überraschung, denn die Bayern waren lange Zeit der klare Favorit.\n\nDie Saison ist aber noch lang. Viele Experten glauben, dass der Kampf um die Meisterschaft spannend bleibt.",
          vokabeln: [
            { de: "der Tabellenführer", im_text: "Tabellenführer", erkl: "die Mannschaft auf Platz 1" },
            { de: "ein Tor schießen", im_text: "geschossen", erkl: "den Ball ins Tor spielen" },
            { de: "der Torwart", im_text: "Torwarts", erkl: "der Spieler im Tor" },
            { de: "patzen", im_text: "gepatzt", erkl: "einen (dummen) Fehler machen (umgangssprachlich)" },
            { de: "der Favorit", im_text: "Favorit", erkl: "wer am wahrscheinlichsten gewinnt" },
            { de: "die Meisterschaft", im_text: "Meisterschaft", erkl: "der Titel für die beste Mannschaft der Saison" }
          ],
          fragen: [
            { typ: "mc", frage: "Gegen welche Mannschaft hat Dortmund gespielt?", optionen: ["gegen Bayern München", "gegen Mönchengladbach", "gegen Hoffenheim"], richtig: 1 },
            { typ: "rf", aussage: "Dortmund hat mit 2:0 gewonnen.", richtig: false, erkl: "Es war 1:0." },
            { typ: "rf", aussage: "Bayern München hat am Wochenende Punkte verloren.", richtig: true, erkl: "Die Bayern haben gepatzt." },
            { typ: "wfragen", frage: "Ordne die Fragen den Antworten zu.", paare: [["Wer hat das Tor geschossen?", "Felix Nmecha"], ["Wo war das Spiel?", "in Mönchengladbach"], ["Wann war das Spiel?", "am Samstag"], ["Wer ist jetzt auf Platz 1?", "Borussia Dortmund"]] },
            { typ: "offen", frage: "Warum ist die Tabellenführung von Dortmund für viele eine Überraschung?", loesung: "Weil die Bayern lange Zeit der klare Favorit waren." }
          ],
          uebungen: [
            { typ: "eingabe", titel: "Perfekt: haben oder sein?", anweisung: "Ergänze die richtige Form von haben oder sein.", regel: "Bewegung von A nach B (rollen, fahren, gehen …) → sein. Die meisten anderen Verben → haben.",
              items: [
                { text: "Der BVB ___ in Gladbach gewonnen.", loesung: ["hat"] },
                { text: "Der Ball ___ langsam ins Tor gerollt.", loesung: ["ist"] },
                { text: "Nach dem Spiel ___ die Fans nach Hause gefahren.", loesung: ["sind"] },
                { text: "Nmecha ___ das einzige Tor geschossen.", loesung: ["hat"] }
              ] },
            { typ: "eingabe", titel: "Wortbildung: Verb → Nomen", anweisung: "Bilde das Nomen mit Artikel.", regel: "Viele Nomen auf -ung sind feminin (die). Wiederholung (11.11.): erobern → die Eroberung.",
              items: [
                { text: "entscheiden → ___", loesung: ["die Entscheidung"], hinweis: "die …" },
                { text: "führen → ___", loesung: ["die Führung"] },
                { text: "anpfeifen → ___", loesung: ["der Anpfiff"], erkl: "Auch: abpfeifen → der Abpfiff" },
                { text: "spielen → ___", loesung: ["das Spiel"] }
              ] },
            { typ: "eingabe", titel: "Gegenteile", anweisung: "Schreib das Gegenteil.",
              items: [
                { text: "gewinnen ↔ ___", loesung: ["verlieren"] },
                { text: "der Sieg ↔ ___", loesung: ["die Niederlage"] },
                { text: "spannend ↔ ___", loesung: ["langweilig"] },
                { text: "der Favorit ↔ ___", loesung: ["der Außenseiter", "der Aussenseiter"] }
              ] },
            { typ: "fehler", titel: "Fehler finden", anweisung: "In jedem Satz ist ein Wort falsch.",
              items: [
                { woerter: ["Gestern", "habe", "ich", "ins", "Stadion", "gefahren."], fehler: 1, korrektur: "Gestern bin ich ins Stadion gefahren.", erkl: "fahren (von A nach B) → sein" },
                { woerter: ["Der", "Torwart", "hat", "einen", "Fehler", "gemacht,", "weil", "er", "war", "müde."], fehler: 8, korrektur: "…, weil er müde war.", erkl: "Nach weil steht das Verb am Ende." }
              ] }
          ],
          diskussion: [
            "Glaubst du, dass Dortmund am Ende Meister wird? Warum (nicht)?",
            "Ist es gut für eine Liga, wenn nicht immer dieselbe Mannschaft gewinnt?",
            "Welche Rolle spielen Fehler von Schiedsrichtern und Torhütern im Fußball? Sollte man mehr Technik (z. B. Video) einsetzen?"
          ]
        },
        {
          symbol: "🩺", kategorie: "Medizin",
          titel: "Rekord: Leber lebt sieben Wochen außerhalb des Körpers",
          text: "In Sydney in Australien haben Forscherinnen und Forscher eine menschliche Leber sieben Wochen lang außerhalb des Körpers am Leben gehalten. Das ist ein neuer Rekord. Bisher waren es nur etwa zwei Wochen – diesen Rekord hatte ein Team in der Schweiz aufgestellt.\n\nDie Leber stammte von einem Spender. Sie lag in einer Maschine mit automatischen Pumpen und Sensoren. Die Maschine versorgt das Organ mit Sauerstoff und Nährstoffen, fast wie im Körper.\n\nDer Erfolg könnte in Zukunft bei Transplantationen helfen: Organe könnten länger gelagert und vielleicht sogar repariert werden. Allerdings sind die Ergebnisse noch nicht in einer Fachzeitschrift veröffentlicht. Andere Fachleute wissen deshalb noch nicht genau, wie gesund die Leber am Ende war.",
          vokabeln: [
            { de: "die Leber", im_text: "Leber", erkl: "ein großes Organ im Bauch, es reinigt das Blut" },
            { de: "der Spender", im_text: "Spender", erkl: "eine Person, die etwas gibt, z. B. ein Organ" },
            { de: "versorgen (mit + Dat.)", im_text: "versorgt", erkl: "jemandem geben, was er braucht" },
            { de: "die Transplantation", im_text: "Transplantationen", erkl: "ein Organ in einen anderen Körper einsetzen" },
            { de: "veröffentlichen", im_text: "veröffentlicht", erkl: "für alle bekannt machen, z. B. in einer Zeitschrift" },
            { de: "die Fachzeitschrift", im_text: "Fachzeitschrift", erkl: "eine Zeitschrift für Experten, z. B. für Ärzte" }
          ],
          fragen: [
            { typ: "mc", frage: "Wie lange hat die Leber außerhalb des Körpers gelebt?", optionen: ["zwei Wochen", "sieben Wochen", "sieben Monate"], richtig: 1 },
            { typ: "rf", aussage: "Der alte Rekord kam aus Australien.", richtig: false, erkl: "Der alte Rekord kam aus der Schweiz." },
            { typ: "rf", aussage: "Die Ergebnisse sind schon in einer Fachzeitschrift erschienen.", richtig: false, erkl: "Sie sind noch nicht veröffentlicht." },
            { typ: "wfragen", frage: "Ordne die Fragen den Antworten zu.", paare: [["Wo?", "in Sydney"], ["Was?", "eine Spenderleber"], ["Wie lange?", "sieben Wochen"], ["Womit?", "mit einer Maschine mit Pumpen und Sensoren"]] },
            { typ: "offen", frage: "Warum könnte diese Methode in Zukunft wichtig sein?", loesung: "Man könnte Organe länger lagern und vielleicht reparieren. Das könnte bei Transplantationen helfen." }
          ],
          uebungen: [
            { typ: "auswahl", titel: "Welcher Fall?", anweisung: "Wähle den richtigen Artikel.", regel: "Wo? → Dativ (in einer). Wohin? → Akkusativ (in eine). außerhalb → Genitiv. Wiederholung (20.11.): sich Sorgen machen um + Akkusativ.",
              items: [
                { text: "Die Leber lag in ___ Maschine.", optionen: ["einer", "eine", "einen"], richtig: 0, erkl: "Wo? → Dativ" },
                { text: "Die Ärzte legten die Leber in ___ Maschine.", optionen: ["einer", "eine", "einem"], richtig: 1, erkl: "Wohin? → Akkusativ" },
                { text: "Die Leber lebte außerhalb ___ Körpers.", optionen: ["des", "dem", "den"], richtig: 0, erkl: "außerhalb + Genitiv" },
                { text: "Die Ärztin macht sich Sorgen um ___ Patienten.", optionen: ["den", "dem", "des"], richtig: 0, erkl: "um + Akkusativ: den Patienten" }
              ] },
            { typ: "eingabe", titel: "Wortbildung: Verb → Nomen", anweisung: "Bilde das Nomen mit Artikel.",
              items: [
                { text: "spenden (die Person) → ___", loesung: ["der Spender"] },
                { text: "versorgen → ___", loesung: ["die Versorgung"] },
                { text: "veröffentlichen → ___", loesung: ["die Veröffentlichung"] },
                { text: "transplantieren → ___", loesung: ["die Transplantation"] }
              ] },
            { typ: "eingabe", titel: "Wortbildung: Adjektiv → Nomen", anweisung: "Bilde das Nomen mit Artikel.", regel: "-heit, -keit → immer feminin (die). Wiederholung (11.11.): selbstständig → die Selbstständigkeit.",
              items: [
                { text: "gesund → ___", loesung: ["die Gesundheit"] },
                { text: "krank → ___", loesung: ["die Krankheit"] },
                { text: "möglich → ___", loesung: ["die Möglichkeit"] },
                { text: "selbstständig → ___", loesung: ["die Selbstständigkeit", "die Selbständigkeit"] }
              ] },
            { typ: "fehler", titel: "Fehler finden", anweisung: "In jedem Satz ist ein Wort falsch.",
              items: [
                { woerter: ["Die", "Forscher", "haben", "die", "Leber", "sieben", "Wochen", "am", "Leben", "gehaltet."], fehler: 9, korrektur: "gehalten", erkl: "halten – hielt – gehalten" },
                { woerter: ["Der", "Patient", "wartet", "seit", "drei", "Monate", "auf", "eine", "neue", "Leber."], fehler: 5, korrektur: "seit drei Monaten", erkl: "seit + Dativ, im Plural mit -n" }
              ] }
          ],
          diskussion: [
            "Würdest du deine Organe nach dem Tod spenden? Warum (nicht)?",
            "Wie ist die Organspende in deinem Land geregelt? Findest du das gut?",
            "Sollten Forscher über Ergebnisse sprechen, bevor sie in einer Fachzeitschrift erschienen sind?"
          ]
        },
        {
          symbol: "🍛", kategorie: "Gesundheit & Essen",
          titel: "Kurkuma hilft kaum gegen Knieschmerzen",
          text: "Kurkuma ist ein gelbes Gewürz aus Asien. Viele Menschen nehmen Kurkuma als Kapseln, weil sie hoffen, dass es gegen Schmerzen in den Gelenken hilft. Besonders bei Kniearthrose, also wenn das Knie abgenutzt ist und wehtut, ist Kurkuma beliebt.\n\nEine neue Übersichtsarbeit hat jetzt neun Studien mit insgesamt 1.245 Patientinnen und Patienten ausgewertet. Das Ergebnis ist enttäuschend: Die Kapseln helfen kaum besser als ein Placebo, also eine Tablette ohne Wirkstoff.\n\nKurkuma ist trotzdem nicht schlecht – im Essen schmeckt es gut, zum Beispiel im Curry. Aber als Medikament gegen Knieschmerzen sollte man nicht zu viel davon erwarten.",
          vokabeln: [
            { de: "das Gewürz", im_text: "Gewürz", erkl: "z. B. Pfeffer, Zimt – macht das Essen aromatisch" },
            { de: "das Gelenk", im_text: "Gelenken", erkl: "die Verbindung zwischen zwei Knochen, z. B. das Knie" },
            { de: "auswerten", im_text: "ausgewertet", erkl: "Daten genau ansehen und ein Ergebnis finden" },
            { de: "enttäuschend", im_text: "enttäuschend", erkl: "schlechter als man gehofft hat" },
            { de: "der Wirkstoff", im_text: "Wirkstoff", erkl: "der Teil eines Medikaments, der wirkt" },
            { de: "erwarten", im_text: "erwarten", erkl: "glauben, dass etwas passiert" }
          ],
          fragen: [
            { typ: "mc", frage: "Wie viele Studien wurden ausgewertet?", optionen: ["neun", "neunzehn", "1.245"], richtig: 0 },
            { typ: "rf", aussage: "Kurkuma-Kapseln helfen deutlich besser als ein Placebo.", richtig: false, erkl: "Sie helfen kaum besser." },
            { typ: "rf", aussage: "Ein Placebo ist eine Tablette ohne Wirkstoff.", richtig: true },
            { typ: "wfragen", frage: "Ordne die Fragen den Antworten zu.", paare: [["Was ist Kurkuma?", "ein gelbes Gewürz"], ["Wogegen soll es helfen?", "gegen Knieschmerzen"], ["Wie viele Patienten?", "1.245"], ["Wie ist das Ergebnis?", "enttäuschend"]] },
            { typ: "offen", frage: "Was sagt der Text über Kurkuma im Essen?", loesung: "Kurkuma ist nicht schlecht und schmeckt gut im Essen, zum Beispiel im Curry." }
          ],
          uebungen: [
            { typ: "eingabe", titel: "Gegenteil mit un-", anweisung: "Schreib das Gegenteil.", regel: "Viele Adjektive bilden das Gegenteil mit un-. Wiederholung (20.11.): angenehm ↔ unangenehm.",
              items: [
                { text: "gesund ↔ ___", loesung: ["ungesund"] },
                { text: "angenehm ↔ ___", loesung: ["unangenehm"] },
                { text: "wirksam ↔ ___", loesung: ["unwirksam"] },
                { text: "glücklich ↔ ___", loesung: ["unglücklich"] }
              ] },
            { typ: "auswahl", titel: "weil, deshalb oder obwohl?", anweisung: "Wähle das passende Wort.", regel: "weil und obwohl → Verb am Ende. deshalb → Verb direkt danach (Position 2).",
              items: [
                { text: "Viele nehmen Kurkuma, ___ sie Schmerzen haben.", optionen: ["weil", "deshalb", "obwohl"], richtig: 0 },
                { text: "Die Kapseln helfen kaum. ___ sollte man nicht zu viel erwarten.", optionen: ["Weil", "Deshalb", "Obwohl"], richtig: 1 },
                { text: "___ Kurkuma kaum hilft, kaufen es viele Menschen.", optionen: ["Weil", "Deshalb", "Obwohl"], richtig: 2 }
              ] },
            { typ: "eingabe", titel: "Lückentext", anweisung: "Ergänze ein Wort aus dem Text.",
              items: [
                { text: "Pfeffer und Salz sind ___.", loesung: ["Gewürze"] },
                { text: "Das Knie ist ein ___.", loesung: ["Gelenk"] },
                { text: "Ein Placebo hat keinen ___.", loesung: ["Wirkstoff"] },
                { text: "Das Ergebnis war schlechter als erhofft, es war ___.", loesung: ["enttäuschend"] }
              ] },
            { typ: "fehler", titel: "Fehler finden", anweisung: "Ein Wort steht falsch.",
              items: [
                { woerter: ["Ich", "nehme", "jeden", "Tag", "zwei", "Kapseln,", "weil", "mein", "Knie", "tut", "weh."], fehler: 9, korrektur: "…, weil mein Knie wehtut.", erkl: "Nach weil steht das Verb am Ende." }
              ] }
          ],
          diskussion: [
            "Nimmst du Nahrungsergänzungsmittel oder Hausmittel? Helfen sie dir?",
            "Warum glauben viele Menschen an natürliche Mittel, auch wenn Studien nicht helfen?",
            "Welche Gewürze benutzt du gern beim Kochen?"
          ]
        },
        {
          symbol: "🌍", kategorie: "Umwelt",
          titel: "Klimakonferenz: kein klarer Plan gegen Kohle, Öl und Gas",
          text: "In Antalya in der Türkei haben sich Politikerinnen und Politiker aus fast allen Ländern der Welt zur Weltklimakonferenz COP31 getroffen. Es war die größte Klimakonferenz bisher: Rund 92.000 Menschen haben teilgenommen.\n\nDie wichtigste Frage war: Wie schnell soll die Welt aufhören, Kohle, Öl und Gas zu verbrennen? UN-Generalsekretär António Guterres hat einen schnelleren Ausstieg aus diesen fossilen Brennstoffen gefordert.\n\nDoch die Länder waren sich nicht einig. Aus einem Entwurf für die Abschlusserklärung sind die fossilen Brennstoffe wieder verschwunden. Am Ende gibt es kein klares Bekenntnis zum Ausstieg. Viele Umweltschützer sind enttäuscht.",
          vokabeln: [
            { de: "die Klimakonferenz", im_text: "Weltklimakonferenz", erkl: "ein großes Treffen der Länder zum Klimaschutz" },
            { de: "verbrennen", im_text: "verbrennen", erkl: "etwas mit Feuer zerstören oder Energie daraus machen" },
            { de: "der Ausstieg (aus + Dat.)", im_text: "Ausstieg", erkl: "das Ende von etwas; aufhören mit etwas" },
            { de: "fordern", im_text: "gefordert", erkl: "laut und klar verlangen" },
            { de: "sich einig sein", im_text: "einig", erkl: "die gleiche Meinung haben" },
            { de: "der Entwurf", im_text: "Entwurf", erkl: "eine erste Version eines Textes" }
          ],
          fragen: [
            { typ: "mc", frage: "Wo fand die Klimakonferenz statt?", optionen: ["in Antalya", "in Paris", "in Sydney"], richtig: 0 },
            { typ: "rf", aussage: "Rund 92.000 Menschen haben teilgenommen.", richtig: true },
            { typ: "rf", aussage: "Alle Länder wollten schnell aus Kohle, Öl und Gas aussteigen.", richtig: false, erkl: "Die Länder waren sich nicht einig." },
            { typ: "offen", frage: "Warum sind viele Umweltschützer enttäuscht?", loesung: "Weil es kein klares Bekenntnis zum Ausstieg aus Kohle, Öl und Gas gibt." }
          ],
          uebungen: [
            { typ: "eingabe", titel: "Wortbildung: Verb → Nomen", anweisung: "Bilde das Nomen mit Artikel.",
              items: [
                { text: "aussteigen → ___", loesung: ["der Ausstieg"] },
                { text: "fordern → ___", loesung: ["die Forderung"] },
                { text: "verhandeln → ___", loesung: ["die Verhandlung"] },
                { text: "sich erwärmen → ___", loesung: ["die Erwärmung"] }
              ] },
            { typ: "auswahl", titel: "Komparativ", anweisung: "Wähle die richtige Form.", regel: "Komparativ: Adjektiv + -er (groß → größer). Vor einem Nomen kommt noch eine Endung dazu: einen schnelleren Ausstieg.",
              items: [
                { text: "Die COP31 war ___ als alle Konferenzen davor.", optionen: ["größer", "am größten", "großer"], richtig: 0 },
                { text: "Die Erde wird immer ___.", optionen: ["wärmer", "warmer", "am wärmsten"], richtig: 0 },
                { text: "Guterres will einen ___ Ausstieg.", optionen: ["schnelleren", "schneller", "schnellsten"], richtig: 0 }
              ] },
            { typ: "eingabe", titel: "Gegenteile", anweisung: "Schreib das Gegenteil.", regel: "Wiederholung (09.11.): das Ende ↔ der Anfang.",
              items: [
                { text: "der Ausstieg ↔ ___", loesung: ["der Einstieg"] },
                { text: "einig ↔ ___", loesung: ["uneinig"] },
                { text: "wärmer ↔ ___", loesung: ["kälter"] },
                { text: "das Ende ↔ ___", loesung: ["der Anfang", "der Beginn"] }
              ] },
            { typ: "fehler", titel: "Fehler finden", anweisung: "Ein Wort ist falsch.",
              items: [
                { woerter: ["Die", "Politiker", "haben", "sich", "in", "Antalya", "getreffen."], fehler: 6, korrektur: "getroffen", erkl: "treffen – traf – getroffen" }
              ] }
          ],
          diskussion: [
            "Was kann ein einzelner Mensch gegen den Klimawandel tun? Was machst du selbst?",
            "Sind solche großen Konferenzen sinnvoll, wenn am Ende kein klarer Plan steht?",
            "Wer sollte mehr für den Klimaschutz bezahlen: reiche oder arme Länder? Warum?"
          ]
        },
        {
          symbol: "❄️", kategorie: "Wetter",
          titel: "Erster Frost: Vorsicht, glatte Straßen!",
          text: "Der Winter kommt: In der Nacht auf Montag wird es in vielen Teilen Deutschlands frostig. Die Temperaturen sinken unter null Grad. Am Morgen können Straßen und Gehwege deshalb glatt sein.\n\nBei Glätte gilt: Langsam und vorsichtig fahren und mehr Zeit einplanen. Wer mit dem Auto unterwegs ist, sollte die Scheiben vor der Fahrt vom Eis befreien. Auch Fußgängerinnen und Fußgänger müssen aufpassen, damit sie nicht ausrutschen.\n\nFür viele Menschen beginnt damit die Zeit der dicken Jacken, Mützen und Handschuhe. Und manche freuen sich schon auf den ersten Schnee.",
          vokabeln: [
            { de: "der Frost", im_text: "frostig", erkl: "Temperaturen unter null Grad" },
            { de: "sinken", im_text: "sinken", erkl: "nach unten gehen, weniger werden" },
            { de: "glatt", im_text: "glatt", erkl: "rutschig, z. B. wegen Eis" },
            { de: "einplanen", im_text: "einplanen", erkl: "etwas von Anfang an im Plan berücksichtigen" },
            { de: "die Scheibe", im_text: "Scheiben", erkl: "das Glas am Auto oder Fenster" },
            { de: "ausrutschen", im_text: "ausrutschen", erkl: "auf etwas Glattem plötzlich fallen" }
          ],
          fragen: [
            { typ: "mc", frage: "Wann wird es frostig?", optionen: ["in der Nacht auf Montag", "am Freitagabend", "erst im Dezember"], richtig: 0 },
            { typ: "rf", aussage: "Die Temperaturen steigen über zehn Grad.", richtig: false, erkl: "Sie sinken unter null Grad." },
            { typ: "rf", aussage: "Bei Glätte sollte man langsam fahren.", richtig: true },
            { typ: "offen", frage: "Was soll man vor einer Autofahrt bei Frost machen?", loesung: "Die Scheiben vom Eis befreien (und mehr Zeit einplanen)." }
          ],
          uebungen: [
            { typ: "eingabe", titel: "Wortbildung: Adjektiv → Nomen", anweisung: "Bilde das Nomen mit Artikel.", regel: "Manche Adjektive werden mit Umlaut + -e zum Nomen: kalt → die Kälte.",
              items: [
                { text: "glatt → ___", loesung: ["die Glätte"] },
                { text: "kalt → ___", loesung: ["die Kälte"] },
                { text: "warm → ___", loesung: ["die Wärme"] },
                { text: "vorsichtig → ___", loesung: ["die Vorsicht"] }
              ] },
            { typ: "auswahl", titel: "Trennbare Verben im Perfekt", anweisung: "Wähle die richtige Form.", regel: "Trennbare Verben: Präfix + ge + Verb (aus-ge-rutscht). Wiederholung (13.11.): das Handy ausschalten → ausgeschaltet.",
              items: [
                { text: "Ich bin auf dem Eis ___.", optionen: ["ausgerutscht", "ausrutscht", "geausrutscht"], richtig: 0 },
                { text: "Hast du die Heizung ___?", optionen: ["geanschaltet", "angeschaltet", "anschaltet"], richtig: 1 },
                { text: "Wir haben mehr Zeit ___.", optionen: ["einplant", "geeinplant", "eingeplant"], richtig: 2 }
              ] },
            { typ: "eingabe", titel: "Perfekt: haben oder sein?", anweisung: "Ergänze haben oder sein.", regel: "Veränderung des Zustands (sinken, ausrutschen) → sein.",
              items: [
                { text: "Die Temperaturen ___ unter null Grad gesunken.", loesung: ["sind"] },
                { text: "Ich ___ auf dem Gehweg ausgerutscht.", loesung: ["bin"] },
                { text: "Wir ___ die Scheiben vom Eis befreit.", loesung: ["haben"] }
              ] },
            { typ: "fehler", titel: "Fehler finden", anweisung: "Ein Wort ist falsch.",
              items: [
                { woerter: ["Gestern", "war", "mich", "sehr", "kalt."], fehler: 2, korrektur: "Gestern war mir sehr kalt.", erkl: "Wiederholung (16.11.): Mir ist kalt – Dativ!" }
              ] }
          ],
          diskussion: [
            "Magst du den Winter? Was machst du gern, wenn es kalt ist?",
            "Wie ist der Winter dort, wo du wohnst, im Vergleich zu Österreich oder Deutschland?",
            "Was ist gefährlicher bei Glätte: Auto fahren oder zu Fuß gehen? Warum?"
          ]
        }
      ]
    }
  ]
};

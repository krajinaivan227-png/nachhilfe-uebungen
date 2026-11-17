window.HEFT = {
  vorname: "Max",
  niveau: "A2",
  modus: "ruhig",
  hilfe: "en",
  stunden: [
    {
      id: "2026-10-03",
      titel: "Wortschatz: Körper, Gefühle, Alltag",
      vokabeln: [
        { de: "beschäftigt", en: "busy", fr: "occupé", beispiel: "Der Schüler ist sehr beschäftigt." },
        { de: "der Grund", en: "the reason", fr: "la raison", beispiel: "Das ist ein guter Grund." },
        { de: "verärgern", en: "to annoy", fr: "énerver", beispiel: "Der Lärm verärgert mich." },
        { de: "der Witz", en: "the joke", fr: "la blague", beispiel: "Das ist ein guter Witz." },
        { de: "gefallen", en: "to like (it pleases me)", fr: "plaire", beispiel: "Mein Beruf gefällt mir." },
        { de: "der Schmerz", en: "the pain", fr: "la douleur", beispiel: "Ich habe Schmerzen im Bein." },
        { de: "verletzt", en: "injured", fr: "blessé", beispiel: "Er ist am Bein verletzt." },
        { de: "der Körperteil", en: "the body part", fr: "la partie du corps", beispiel: "Der Arm ist ein Körperteil." }
      ],
      aufgaben: []
    },
    {
      id: "2026-10-04",
      titel: "Futur mit werden, dass-Satz, zur/zum",
      vokabeln: [
        { de: "teilen", en: "to share", fr: "partager", beispiel: "Wir teilen das Essen miteinander." },
        { de: "einladen", en: "to invite", fr: "inviter", beispiel: "Ich lade dich zum Essen ein." },
        { de: "absolvieren", en: "to complete (a degree)", fr: "terminer (ses études)", beispiel: "Ich werde mein Studium 2028 absolvieren." },
        { de: "brechen", en: "to break", fr: "casser", beispiel: "Er hat sich das Bein gebrochen." },
        { de: "röntgen", en: "to X-ray", fr: "radiographier", beispiel: "Der Arzt röntgt mein Bein." },
        { de: "etwa", en: "about, approximately", fr: "environ", beispiel: "Ich habe etwa vier Euro." },
        { de: "entscheiden", en: "to decide", fr: "décider", beispiel: "Ich habe mich entschieden." },
        { de: "die Entscheidung", en: "the decision", fr: "la décision", beispiel: "Das ist eine große Entscheidung." },
        { de: "pendeln", en: "to commute", fr: "faire la navette", beispiel: "Ich pendle jeden Tag nach Brüssel." },
        { de: "die Entfernung", en: "the distance", fr: "la distance", beispiel: "Die Entfernung ist etwa 27 Kilometer." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Ich ___ nächstes Jahr mein Studium absolvieren.",
          optionen: ["werde", "wirst", "wird"], richtig: 0,
          regel: "ich werde (Futur). Merke: ich werde, du wirst, er/sie/es wird.",
          uebers: { en: "Choose the correct form of 'werden' (future)." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Du ___ bald fertig sein.",
          antworten: ["wirst"],
          regel: "du wirst (nicht: du wirdst).",
          uebers: { en: "Fill in the gap with the right form of 'werden'." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Meine Schwester ___ im Juni fertig sein.",
          antworten: ["wird"],
          regel: "er/sie/es wird.",
          uebers: { en: "Fill in the gap with the right form of 'werden'." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Sie gehen ___ Ärztin.",
          optionen: ["zum", "zur"], richtig: 1,
          regel: "zur = zu + der: feminin (die Ärztin → zur Ärztin). zum: maskulin und neutral.",
          uebers: { en: "Choose zur or zum." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["pendeln", "jeden Tag mit Bus oder Zug zur Arbeit fahren"], ["die Entfernung", "Wie weit ist es von A nach B?"], ["beschäftigt", "Ich habe heute keine Zeit."], ["teilen", "Jeder bekommt einen Teil."]],
          regel: "Das sind Erklärungen auf Deutsch. So kannst du neue Wörter auch selbst erklären.",
          uebers: { en: "Match each word with its German explanation." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich gehe ___ Arzt.",
          antworten: ["zum"],
          regel: "der Arzt (maskulin) → zum Arzt.",
          uebers: { en: "Fill in zur or zum." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Ich", "weiß,", "dass", "er", "heute", "beschäftigt", "ist"],
          loesung: "Ich weiß, dass er heute beschäftigt ist",
          regel: "Nach 'dass' steht das Verb am Ende des Satzes.",
          uebers: { en: "Put the words in the right order. After 'dass' the verb goes to the end." }
        },
        {
          typ: "zuordnen", stufe: 2,
          paare: [["brechen", "gebrochen"], ["entscheiden", "entschieden"], ["einladen", "eingeladen"]],
          regel: "Partizip II: brechen → gebrochen, entscheiden → entschieden. Trennbar: einladen → eingeladen (ein + ge + laden).",
          uebers: { en: "Match the verb with its past participle (Partizip II)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich sitze auf der Bank im Park. Was bedeutet „Bank“ hier?",
          optionen: ["the bank (money)", "the bench (seat)"], richtig: 1,
          regel: "Das Wort „Bank“ hat zwei Bedeutungen: Geld-Bank und Sitzbank. Der Satz zeigt es: im Park, sitzen.",
          uebers: { en: "What does 'Bank' mean in this sentence?" }
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["Ich", "pendle", "jeden", "Tag", "nach", "Brüssel"],
          loesung: "Ich pendle jeden Tag nach Brüssel",
          regel: "Das Verb steht an Position 2. Die Zeitangabe 'jeden Tag' steht vor dem Ort.",
          uebers: { en: "Put the words in the right order." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Was wirst du in den nächsten Monaten machen? Sprich 4 Sätze mit „werden“. Nimm dich auf und höre dich an.",
          hinweis: "Zum Beispiel: Ich werde ... / Meine Familie wird ... / Wir werden ...",
          uebers: { en: "What will you do in the next months? Say 4 sentences with 'werden'. Record yourself and listen." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Schreibe 5 Sätze über deine Pläne für nächstes Jahr. Benutze „werden“ und mindestens einen dass-Satz.",
          checkliste: [
            "Ich habe „werden“ richtig benutzt (ich werde, du wirst, er wird ...).",
            "Ich habe mindestens einen dass-Satz geschrieben.",
            "Im dass-Satz steht das Verb am Ende.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Nächstes Jahr werde ich viel lernen. Ich weiß, dass das nicht leicht ist. Meine Freunde werden mich besuchen. Wir werden zusammen kochen. Ich hoffe, dass wir viel Spaß haben.",
          uebers: { en: "Write 5 sentences about your plans for next year. Use 'werden' and at least one 'dass' clause." }
        }
      ]
    },
    {
      id: "2026-10-18",
      titel: "bekommen, deshalb, zu Hause und nach Hause",
      vokabeln: [
        { de: "die Verbesserung", en: "the improvement", fr: "l'amélioration", beispiel: "Ich habe viele Verbesserungen gemacht." },
        { de: "bekommen", en: "to get, to receive", fr: "recevoir", beispiel: "Ich bekomme ein Geschenk." },
        { de: "das Geschenk", en: "the present", fr: "le cadeau", beispiel: "Das Geschenk ist für dich." },
        { de: "umarmen", en: "to hug", fr: "serrer dans ses bras", beispiel: "Ich umarme meine beste Freundin." },
        { de: "weinen", en: "to cry", fr: "pleurer", beispiel: "Das Kind weint." },
        { de: "deshalb", en: "that's why", fr: "c'est pourquoi", beispiel: "Ich bin krank, deshalb bleibe ich zu Hause." },
        { de: "der Rücken", en: "the back", fr: "le dos", beispiel: "Ich habe Schmerzen im Rücken." },
        { de: "tragen", en: "to carry", fr: "porter", beispiel: "Ich trage die Einkäufe nach Hause." },
        { de: "schwer", en: "heavy", fr: "lourd", beispiel: "Mein Rucksack ist schwer." },
        { de: "gemütlich", en: "cosy", fr: "confortable, douillet", beispiel: "Mein Zimmer ist gemütlich." }
      ],
      aufgaben: [
        {
          typ: "mc", stufe: 1,
          frage: "Was bedeutet „bekommen“?",
          optionen: ["to get, to receive", "to become", "to come"], richtig: 0,
          regel: "Achtung: bekommen = to get. to become = werden.",
          uebers: { en: "What does 'bekommen' mean?" }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich ___ ein Geschenk. (bekommen)",
          antworten: ["bekomme"],
          regel: "bekommen: ich bekomme, du bekommst, er bekommt.",
          uebers: { en: "Fill in the right form of 'bekommen'." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ivan ist krank, deshalb ___ keine Energie.",
          optionen: ["hat er", "er hat"], richtig: 0,
          regel: "deshalb steht auf Position 1, dann kommt das Verb, dann das Subjekt.",
          uebers: { en: "After 'deshalb' the verb comes first, then the subject." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Es", "regnet,", "deshalb", "bleibe", "ich", "zu", "Hause"],
          loesung: "Es regnet, deshalb bleibe ich zu Hause",
          regel: "deshalb + Verb + Subjekt.",
          uebers: { en: "Put the words in order." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Nach der Arbeit gehe ich ___ Hause.",
          optionen: ["nach", "zu"], richtig: 0,
          regel: "Wohin? → nach Hause. Wo? → zu Hause.",
          uebers: { en: "Going home (direction): 'nach' or 'zu'?" }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Am Abend bin ich ___ Hause.",
          optionen: ["zu", "nach"], richtig: 0,
          regel: "Wo? → zu Hause (at home).",
          uebers: { en: "Being at home (place): 'zu' or 'nach'?" }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Mein Rucksack ist sehr ___. (heavy)",
          antworten: ["schwer"],
          regel: "schwer = heavy (oder difficult). schwierig = nur difficult.",
          uebers: { en: "My backpack is very heavy." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich habe Schmerzen im ___. (back)",
          antworten: ["Rücken"],
          regel: "Schmerzen im Rücken (= Rückenschmerzen). Nicht: auf meinem Rücken.",
          uebers: { en: "I have pain in my back." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["weinen", "to cry"], ["umarmen", "to hug"], ["tragen", "to carry"], ["brauchen", "to need"]],
          regel: "Verben der Stunde.",
          uebers: { en: "Match the verbs." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Wie war deine Woche? Sprich 4 Sätze, mindestens zweimal mit deshalb. Nimm dich auf und höre dich an.",
          hinweis: "Ich war sehr beschäftigt, deshalb ... / Ich hatte Rückenschmerzen, deshalb ...",
          uebers: { en: "How was your week? Say 4 sentences, use 'deshalb' at least twice." }
        }
      ]
    },
    {
      id: "2026-10-25",
      titel: "Verben mit Präposition, als oder wie",
      vokabeln: [
        { de: "sich erinnern an (+ Akk.)", en: "to remember", fr: "se souvenir de", beispiel: "Ich erinnere mich an dich." },
        { de: "sich entscheiden für", en: "to decide on", fr: "se décider pour", beispiel: "Ich entscheide mich für den Deutschkurs." },
        { de: "überrascht", en: "surprised", fr: "surpris", beispiel: "Ich war sehr überrascht." },
        { de: "die Überraschung", en: "the surprise", fr: "la surprise", beispiel: "Das ist eine schöne Überraschung!" },
        { de: "sich anhören", en: "to sound", fr: "sonner, avoir l'air", beispiel: "Dein Deutsch hört sich gut an." },
        { de: "eineinhalb", en: "one and a half", fr: "un et demi", beispiel: "Ich lerne seit eineinhalb Jahren Deutsch." },
        { de: "die Wolke", en: "the cloud", fr: "le nuage", beispiel: "Heute gibt es viele Wolken." },
        { de: "die Steuer", en: "the tax", fr: "l'impôt", beispiel: "Die Steuern sind hoch." },
        { de: "mehr oder weniger", en: "more or less", fr: "plus ou moins", beispiel: "Das stimmt mehr oder weniger." }
      ],
      aufgaben: [
        {
          typ: "luecke", stufe: 1,
          text: "Ich erinnere mich ___ dich.",
          antworten: ["an"],
          regel: "sich erinnern an + Akkusativ.",
          uebers: { en: "I remember you: fill in the preposition." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich entscheide mich ___ den Deutschkurs.",
          antworten: ["für"],
          regel: "sich entscheiden für + Akkusativ.",
          uebers: { en: "I decide on the German course: fill in the preposition." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Dein Deutsch ___ sich gut an.",
          optionen: ["hört", "sagt", "spricht"], richtig: 0,
          regel: "sich anhören = to sound (trennbar): Es hört sich gut an.",
          uebers: { en: "Your German sounds good." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Singapur ist reicher ___ Malaysia.",
          optionen: ["als", "wie"], richtig: 0,
          regel: "Komparativ (reicher, größer) + als = than.",
          uebers: { en: "Comparative + 'als' (than)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Mein Bruder ist so groß ___ ich.",
          optionen: ["wie", "als"], richtig: 0,
          regel: "so ... wie = as ... as (gleich).",
          uebers: { en: "My brother is as tall as me." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "1,5 Jahre sagt man so:",
          optionen: ["eineinhalb Jahre", "ein Jahr und ein halb", "ein halb Jahre"], richtig: 0,
          regel: "1,5 = eineinhalb (oder anderthalb).",
          uebers: { en: "How do you say 1.5 years?" }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich war sehr ___, als ich das Geschenk bekam. (surprised)",
          antworten: ["überrascht"],
          regel: "überraschen → überrascht (nicht trennbar).",
          uebers: { en: "I was very surprised when I got the present." }
        },
        {
          typ: "zuordnen", stufe: 1,
          paare: [["die Wolke", "the cloud"], ["die Steuer", "the tax"], ["die Überraschung", "the surprise"], ["die Entscheidung", "the decision"]],
          regel: "Nomen auf -ung sind immer feminin (die).",
          uebers: { en: "Match the words." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Morgen ___ du nach Wien fahren.",
          optionen: ["wirst", "wirdst", "werdet"],
          richtig: 0,
          regel: "Wiederholung (04.10.): Futur: ich werde, du wirst, er wird + Infinitiv am Ende.",
          uebers: { en: "Choose the correct form of „werden“." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich gehe heute ___ Ärztin.",
          optionen: ["zur", "zum", "zu die"],
          richtig: 0,
          regel: "Wiederholung (04.10.): zur = zu der (feminin), zum = zu dem (maskulin und neutral).",
          uebers: { en: "Choose the correct word." }
        },
        {
          typ: "satz", stufe: 2,
          woerter: ["Er", "hat", "sich", "für", "das", "Studium", "entschieden"],
          loesung: "Er hat sich für das Studium entschieden",
          regel: "Wiederholung (04.10.): entscheiden → hat entschieden. Das Partizip steht am Ende.",
          uebers: { en: "Put the words in the right order." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Zum Geburtstag ___ ich ein Geschenk. (bekommen)",
          antworten: ["bekomme"],
          regel: "Wiederholung (18.10.): bekommen = to get (nicht to become!). ich bekomme, du bekommst.",
          uebers: { en: "Conjugate „bekommen“ (ich)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Am Abend bin ich ___.",
          optionen: ["zu Hause", "nach Hause", "im Hause"],
          richtig: 0,
          regel: "Wiederholung (18.10.): Wo? → zu Hause. Wohin? → nach Hause.",
          uebers: { en: "Choose: where are you?" }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich bin müde, ___ gehe ich früh ins Bett.",
          antworten: ["deshalb"],
          regel: "Wiederholung (18.10.): deshalb = that's why. Danach kommt sofort das Verb.",
          uebers: { en: "Fill in the word that means „that's why“." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Vergleiche zwei Städte oder Länder (4–5 Sätze). Benutze als und wie.",
          checkliste: [
            "Ich habe Komparativ + als benutzt (größer als …).",
            "Ich habe so … wie benutzt.",
            "Ich habe mindestens ein neues Wort benutzt.",
            "Jeder Satz beginnt groß und endet mit einem Punkt."
          ],
          muster: "Wien ist größer als Salzburg. In Wien gibt es oft viele Wolken. Im Winter ist es in Wien so kalt wie in München. Die Steuern sind in Österreich höher als in Malaysia. Ich mag beide Städte mehr oder weniger gleich gern.",
          uebers: { en: "Compare two cities or countries in 4–5 sentences. Use 'als' and 'wie'." }
        }
      ]
    },
    {
      id: "2026-11-14",
      titel: "drohen, deswegen, werden und bekommen",
      vokabeln: [
        { de: "drohen (+ Dat.) / die Drohung", en: "to threaten / the threat", fr: "menacer / la menace", beispiel: "Der Kontrolleur hat mit einer Strafe gedroht." },
        { de: "die Strafe", en: "the fine, the punishment", fr: "l'amende, la punition", beispiel: "Ohne Ticket bekommst du eine Strafe." },
        { de: "deswegen", en: "that's why, because of that", fr: "c'est pourquoi", beispiel: "Ich bin müde, deswegen gehe ich früh schlafen." },
        { de: "werden (du wirst, er wird)", en: "to become", fr: "devenir", beispiel: "Mein Bruder wird bald Vater." },
        { de: "beschäftigt", en: "busy", fr: "occupé", beispiel: "Ich bin heute sehr beschäftigt." },
        { de: "ernst", en: "serious", fr: "sérieux", beispiel: "Die Situation ist ernst." },
        { de: "nicht ernst gemeint", en: "not meant seriously", fr: "pas sérieux, pour rire", beispiel: "Das war nur ein Witz, nicht ernst gemeint." },
        { de: "mit etwas umgehen", en: "to deal with, to cope with sth", fr: "gérer qc, faire face à qc", beispiel: "Ich muss mit dem Stress umgehen." }
      ],
      aufgaben: [
        {
          typ: "zuordnen", stufe: 1,
          paare: [["drohen", "to threaten"], ["beschäftigt", "busy"], ["ernst", "serious"], ["die Strafe", "the fine"]],
          regel: "Neue Wörter der Stunde.",
          uebers: { en: "Match the words with their translation." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich ___ bald Vater. (werden)",
          antworten: ["werde"],
          regel: "werden: ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie werden.",
          uebers: { en: "Conjugate „werden“ (ich)." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Du ___ jeden Tag besser! (werden)",
          antworten: ["wirst"],
          regel: "werden ist unregelmäßig: du wirst (ohne e, ohne d).",
          uebers: { en: "Conjugate „werden“ (du)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Meine Schwester ___ Ärztin.",
          optionen: ["wird", "wirst", "werdet"], richtig: 0,
          regel: "er/sie/es wird.",
          uebers: { en: "Choose the right form of „werden“ (to become)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Zum Geburtstag ___ ich ein Geschenk. (I get a present.)",
          optionen: ["bekomme", "werde", "gebe"], richtig: 0,
          regel: "Achtung: bekommen = to get. to become = werden.",
          uebers: { en: "Choose the right verb." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich bin müde, deswegen ___ früh ins Bett.",
          optionen: ["gehe ich", "ich gehe", "ich gehen"], richtig: 0,
          regel: "deswegen steht auf Position 1, dann kommt sofort das Verb, dann das Subjekt.",
          uebers: { en: "Choose the right word order after „deswegen“ (that's why)." }
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["Es", "regnet,", "deswegen", "bleibe", "ich", "zu", "Hause"],
          loesung: "Es regnet, deswegen bleibe ich zu Hause",
          regel: "deswegen + Verb + Subjekt: deswegen bleibe ich …",
          uebers: { en: "Put the words in the right order." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Der Kontrolleur hat ___ einer Strafe gedroht.",
          optionen: ["mit", "von", "für"], richtig: 0,
          regel: "jemandem mit etwas drohen: Er droht mit einer Strafe.",
          uebers: { en: "Choose the right preposition." }
        },
        {
          typ: "luecke", stufe: 3,
          text: "Der Kontrolleur droht ___ Mann. (der Mann)",
          antworten: ["dem"],
          regel: "drohen + Dativ: dem Mann, der Frau, den Leuten.",
          uebers: { en: "„drohen“ needs the dative. Fill in the article." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich habe heute keine Zeit. Ich bin sehr ___.",
          optionen: ["beschäftigt", "ernst", "gemütlich"], richtig: 0,
          regel: "beschäftigt = busy.",
          uebers: { en: "Choose the right word." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Das war nur ein Witz. Es war nicht ernst ___.",
          optionen: ["gemeint", "gemacht", "gesagt"], richtig: 0,
          regel: "nicht ernst gemeint = not meant seriously.",
          uebers: { en: "Complete the expression." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Ich muss ___ dem Stress umgehen.",
          antworten: ["mit"],
          regel: "mit etwas (Dativ) umgehen = to cope with something.",
          uebers: { en: "Fill in the preposition." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich erinnere mich ___ meinen ersten Schultag.",
          antworten: ["an"],
          regel: "Wiederholung (25.10.): sich erinnern an + Akkusativ.",
          uebers: { en: "Fill in the preposition." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich entscheide mich ___ den Deutschkurs.",
          antworten: ["für"],
          regel: "Wiederholung (25.10.): sich entscheiden für + Akkusativ.",
          uebers: { en: "Fill in the preposition." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Mein Bruder ist größer ___ ich.",
          optionen: ["als", "wie", "dann"], richtig: 0,
          regel: "Wiederholung (25.10.): Komparativ (größer, reicher) + als = than.",
          uebers: { en: "Choose the right word (than)." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Nach der Arbeit fahre ich ___.",
          optionen: ["nach Hause", "zu Hause", "im Haus"], richtig: 0,
          regel: "Wiederholung (18.10.): Wohin? → nach Hause. Wo? → zu Hause.",
          uebers: { en: "Choose the right expression (going home)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Meine Freundin ist traurig. Ich ___ sie.",
          optionen: ["umarme", "arme … um", "umarmt"], richtig: 0,
          regel: "Wiederholung (18.10.): umarmen ist nicht trennbar: ich umarme dich.",
          uebers: { en: "Choose the right form of „umarmen“ (to hug)." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Stress im Alltag: Wann bist du beschäftigt? Wie gehst du mit Stress um? Sprich 4 Sätze. Nimm dich auf und höre dich an.",
          hinweis: "Ich bin oft beschäftigt, weil … / Deswegen … / Mit Stress gehe ich so um: … / Bald werde ich …",
          uebers: { en: "Stress in everyday life: when are you busy? How do you cope with stress? Say 4 sentences. Record yourself and listen." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Deine Pläne: Was wirst du nächstes Jahr machen? Schreibe 4–5 Sätze.",
          checkliste: [
            "Ich habe werden benutzt (ich werde, es wird …).",
            "Ich habe einen Satz mit deswegen geschrieben (Verb direkt danach).",
            "Ich habe bekommen richtig benutzt (= to get).",
            "Ich habe beschäftigt oder ernst benutzt."
          ],
          muster: "Nächstes Jahr werde ich viel arbeiten. Ich werde oft beschäftigt sein, deswegen brauche ich einen guten Plan. Hoffentlich bekomme ich eine bessere Stelle. Mein Deutsch wird auch besser, denn ich nehme das Lernen ernst.",
          uebers: { en: "Your plans: what will you do next year? Write 4–5 sentences." }
        }
      ]
    },
    {
      id: "2026-11-15",
      titel: "bestechen, kündigen, weil, Himmelsrichtungen",
      vokabeln: [
        { de: "bestechen (hat bestochen)", en: "to bribe", fr: "soudoyer, corrompre", beispiel: "Er wollte den Kontrolleur bestechen." },
        { de: "die Bestechung", en: "bribery", fr: "la corruption", beispiel: "Bestechung ist verboten." },
        { de: "der Ruf", en: "the reputation", fr: "la réputation", beispiel: "Das Restaurant hat einen guten Ruf." },
        { de: "das Geschäft, die Geschäfte", en: "the shop, the store", fr: "le magasin", beispiel: "Das Geschäft ist am Sonntag geschlossen." },
        { de: "kündigen / die Kündigung", en: "to quit (a job) / the resignation", fr: "démissionner / la démission", beispiel: "Sie kündigt ihren Job." },
        { de: "der Waldbrand", en: "the forest fire", fr: "l'incendie de forêt", beispiel: "Im Sommer gibt es oft Waldbrände." },
        { de: "die Küste", en: "the coast", fr: "la côte", beispiel: "New York liegt an der Ostküste." },
        { de: "der Norden, Osten, Süden, Westen", en: "north, east, south, west", fr: "le nord, l'est, le sud, l'ouest", beispiel: "Die Sonne geht im Osten auf." },
        { de: "(die Schuhe) ausziehen", en: "to take off (shoes)", fr: "enlever (ses chaussures)", beispiel: "Bitte zieh die Schuhe aus." }
      ],
      aufgaben: [
        {
          typ: "zuordnen", stufe: 1,
          paare: [["der Wald", "the forest"], ["der Brand", "the fire"], ["die Küste", "the coast"], ["der Ruf", "the reputation"]],
          regel: "Neue Wörter der Stunde.",
          uebers: { en: "Match the words with their translation." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "Er hat den Kontrolleur mit 10 Euro ___. (bestechen)",
          antworten: ["bestochen"],
          regel: "bestechen – hat bestochen (unregelmäßig, wie sprechen – gesprochen).",
          uebers: { en: "Fill in the past participle of „bestechen“ (to bribe)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Das Restaurant hat einen sehr guten ___.",
          optionen: ["Ruf", "Brand", "Strafe"], richtig: 0,
          regel: "der Ruf = the reputation.",
          uebers: { en: "Choose the right word." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "In der Stadt gibt es viele ___.",
          optionen: ["Geschäfte", "Geschenke", "Gesichter"], richtig: 0,
          regel: "das Geschäft = the shop. Nicht verwechseln: das Geschenk = the present.",
          uebers: { en: "Choose the right word (shops)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Welcher Satz ist richtig?",
          optionen: ["Ich kündige meinen Job.", "Ich kündige mit meinem Job.", "Ich kündige von meinem Job."], richtig: 0,
          regel: "etwas kündigen (Akkusativ), ohne Präposition. Oder einfach: Ich kündige.",
          uebers: { en: "Which sentence is correct?" }
        },
        {
          typ: "luecke", stufe: 1,
          text: "kündigen → die ___",
          antworten: ["Kündigung"],
          regel: "Verb → Nomen mit -ung, immer feminin: die Kündigung.",
          uebers: { en: "Make the noun from „kündigen“." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich kann nicht nach Amerika fliegen, weil ich ein Visum ___.",
          optionen: ["brauche", "brauche ich", "ich brauche"], richtig: 0,
          regel: "Nach weil steht das Verb immer am Ende.",
          uebers: { en: "Choose the right ending (verb at the end after „weil“)." }
        },
        {
          typ: "satz", stufe: 3,
          woerter: ["Ich", "bleibe", "zu", "Hause,", "weil", "ich", "krank", "bin"],
          loesung: "Ich bleibe zu Hause, weil ich krank bin",
          regel: "weil-Satz: Das Verb (bin) steht am Ende.",
          uebers: { en: "Put the words in the right order." }
        },
        {
          typ: "luecke", stufe: 2,
          text: "der Wald + der Brand = der ___",
          antworten: ["Waldbrand"],
          regel: "Zusammengesetzte Nomen: Das letzte Wort bestimmt den Artikel: der Waldbrand.",
          uebers: { en: "Make one word (forest fire)." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Die Sonne geht im ___ auf. (east)",
          antworten: ["Osten"],
          regel: "Himmelsrichtungen: im Norden, im Osten, im Süden, im Westen.",
          uebers: { en: "Fill in the direction (east)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "New York liegt an der ___ von Amerika.",
          optionen: ["Ostküste", "Westküste", "Südküste"], richtig: 0,
          regel: "der Osten + die Küste = die Ostküste.",
          uebers: { en: "Choose the right coast." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Bei uns ___ man die Schuhe in der Wohnung ___.",
          optionen: ["zieht … aus", "nimmt … ab", "macht … ab"], richtig: 0,
          regel: "Schuhe, Jacke → ausziehen. Hut, Brille → abnehmen.",
          uebers: { en: "Choose the right verb for taking off shoes." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Er ___ bald Vater. (werden)",
          antworten: ["wird"],
          regel: "Wiederholung (14.11.): werden: ich werde, du wirst, er wird.",
          uebers: { en: "Conjugate „werden“ (er)." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Ich bin krank, deswegen ___ nicht arbeiten.",
          optionen: ["kann ich", "ich kann", "können ich"], richtig: 0,
          regel: "Wiederholung (14.11.): deswegen + Verb + Subjekt.",
          uebers: { en: "Choose the right word order." }
        },
        {
          typ: "mc", stufe: 1,
          frage: "Ich ___ eine Umarmung. (I get a hug.)",
          optionen: ["bekomme", "werde", "gebe"], richtig: 0,
          regel: "Wiederholung (14.11.): bekommen = to get, werden = to become.",
          uebers: { en: "Choose the right verb." }
        },
        {
          typ: "mc", stufe: 2,
          frage: "Dein Deutsch ___ sich gut an.",
          optionen: ["hört", "klingt", "sagt"], richtig: 0,
          regel: "Wiederholung (25.10.): sich anhören = to sound: Es hört sich gut an.",
          uebers: { en: "Choose the right verb (to sound)." }
        },
        {
          typ: "luecke", stufe: 1,
          text: "Ich lerne seit ___ Jahren Deutsch. (1,5)",
          antworten: ["eineinhalb", "anderthalb"],
          regel: "Wiederholung (25.10.): 1,5 = eineinhalb (oder anderthalb).",
          uebers: { en: "Write 1.5 as a word." }
        },
        {
          typ: "sprechen", stufe: 2,
          auftrag: "Stell dir vor: Du kündigst deinen Job. Warum? Was machst du danach? Sprich 4 Sätze mit weil. Nimm dich auf und höre dich an.",
          hinweis: "Ich kündige, weil … / Danach werde ich … / Deswegen … / Ich suche ein neues …",
          uebers: { en: "Imagine you quit your job. Why? What do you do next? Say 4 sentences with „weil“. Record yourself and listen." }
        },
        {
          typ: "schreiben", stufe: 3,
          auftrag: "Eine Reise: Wohin möchtest du fahren – in den Norden, Süden, Osten oder Westen? Schreibe 4–5 Sätze.",
          checkliste: [
            "Ich habe eine Himmelsrichtung benutzt (im Süden, in den Norden …).",
            "Ich habe einen Satz mit weil geschrieben (Verb am Ende).",
            "Ich habe die Küste oder das Geschäft benutzt.",
            "Ich habe einen Satz mit deswegen geschrieben."
          ],
          muster: "Im Sommer möchte ich in den Süden fahren, weil es dort warm ist. Ich liebe die Küste und das Meer. Am Strand ziehe ich sofort die Schuhe aus. In der Stadt gibt es viele kleine Geschäfte, deswegen kaufe ich dort Geschenke.",
          uebers: { en: "A trip: where would you like to go – north, south, east or west? Write 4–5 sentences." }
        }
      ]
    }
  ]
};

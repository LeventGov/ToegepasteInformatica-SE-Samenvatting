const webTechQuizData = {
    title: "Ultiem Examen Web Technology - 80 Vragen (Lectures 1-7)",
    questions: [
        // --- LECTURE 0 & 1.1: Environment & Variables ---
        {
            lecture: "Lecture 1.1",
            question: "Welk script-attribuut zorgt ervoor dat een script parallel wordt gedownload en pas wordt uitgevoerd nadat de HTML-parsing volledig klaar is?",
            options: ["async", "defer", "type='module'", "Geen attribuut"],
            correctAnswer: 1,
            explanationCorrect: "Het 'defer' attribuut blokkeert de parser niet en garandeert uitvoering na de parsing.",
            explanationIncorrect: "Async voert uit zodra het gedownload is, wat de parsing kan onderbreken."
        },
        {
            lecture: "Lecture 1.1",
            question: "Wat is de output van:\n{ let x = 5; var y = 10; }\nconsole.log(y);\nconsole.log(x);",
            options: ["10 en 5", "10 en ReferenceError", "ReferenceError en 10", "10 en undefined"],
            correctAnswer: 1,
            explanationCorrect: "var heeft function-scope (of global) en 'lekt' uit het blok, let is block-scoped.",
            explanationIncorrect: "Let variabelen bestaan alleen binnen de accolades van hun blok."
        },
        {
            lecture: "Lecture 1.1",
            question: "Wat gebeurt er bij hoisting van een 'var' variabele?",
            options: ["De variabele en waarde worden naar boven verplaatst.", "Alleen de declaratie wordt naar boven verplaatst en de waarde is undefined.", "Er gebeurt niets.", "De code crasht direct."],
            correctAnswer: 1,
            explanationCorrect: "Declaraties met var worden gehost, maar de initialisatie blijft staan.",
            explanationIncorrect: "De waarde is pas beschikbaar na de effectieve toewijzingsregel."
        },
        {
            lecture: "Lecture 1.1",
            question: "Kan een variabele gedeclareerd met 'const' opnieuw worden toegewezen?",
            options: ["Ja, altijd.", "Nee, nooit.", "Alleen als het een object is.", "Alleen binnen een loop."],
            correctAnswer: 1,
            explanationCorrect: "Const variabelen kunnen niet opnieuw worden toegewezen (reassigned).",
            explanationIncorrect: "De referentie van een const ligt vast."
        },

        // --- LECTURE 1.2: JavaScript Weirdness ---
        {
            lecture: "Lecture 1.2",
            question: "Wat is de output van `[] + []`?",
            options: ["0", "undefined", "\"\"", "NaN"],
            correctAnswer: 2,
            explanationCorrect: "Een lege array wordt geconverteerd naar een lege string bij gebruik van de '+' operator.",
            explanationIncorrect: "Dit is een voorbeeld van type coercion naar een string."
        },
        {
            lecture: "Lecture 1.2",
            question: "Wat is de output van `{} + []`?",
            options: ["0", "\"[object Object]\"", "undefined", "NaN"],
            correctAnswer: 0,
            explanationCorrect: "In veel consoles wordt de {} gezien als een leeg blok en wordt de operatie gereduceerd tot +[], wat 0 oplevert.",
            explanationIncorrect: "JavaScript interpretatie van {} aan het begin van een regel verschilt van {} in een expressie."
        },
        {
            lecture: "Lecture 1.2",
            question: "Wat geeft `parseInt(0.0000005)` terug?",
            options: ["0", "5", "NaN", "0.0000005"],
            correctAnswer: 1,
            explanationCorrect: "Het getal wordt omgezet naar '5e-7'. parseInt stopt bij de 'e' en geeft 5 terug.",
            explanationIncorrect: "Dit komt door de wetenschappelijke notatie van zeer kleine getallen."
        },
        {
            lecture: "Lecture 1.2",
            question: "Welke operator moet je gebruiken om te checken op gelijkheid zonder type-conversie?",
            options: ["==", "===", "=", "!="],
            correctAnswer: 1,
            explanationCorrect: "De strikte gelijkheid (===) controleert zowel waarde als type.",
            explanationIncorrect: "De dubbele == doet aan type coercion."
        },

        // --- LECTURE 1.3: JavaScript Syntax ---
        {
            lecture: "Lecture 1.3",
            question: "Wat gebeurt er als je minder argumenten meegeeft aan een functie dan er parameters zijn?",
            options: ["De code geeft een error.", "De resterende parameters worden 'null'.", "De resterende parameters worden 'undefined'.", "De functie wordt niet uitgevoerd."],
            correctAnswer: 2,
            explanationCorrect: "Ontbrekende argumenten krijgen automatisch de waarde undefined.",
            explanationIncorrect: "JavaScript staat flexibele argument-aantallen toe."
        },
        {
            lecture: "Lecture 1.3",
            question: "Hoe vang je een onbeperkt aantal argumenten op in een functie als een echte array?",
            options: ["arguments object", "...rest parameters", "Array.args", "De spread operator"],
            correctAnswer: 1,
            explanationCorrect: "Rest parameters (...args) vangen alle overblijvende argumenten op in een echte array.",
            explanationIncorrect: "Het 'arguments' object is een array-achtig object, maar geen echte array."
        },
        {
            lecture: "Lecture 1.3",
            question: "Wat doet de spread operator in dit voorbeeld?\nconst a = [1, 2];\nconst b = [...a, 3];",
            options: ["Het maakt een geneste array.", "Het kopieert de elementen van a in b.", "Het telt de getallen op.", "Het geeft een error."],
            correctAnswer: 1,
            explanationCorrect: "De spread operator 'pakt' de elementen uit a en plaatst ze in b.",
            explanationIncorrect: "Het resultaat is [1, 2, 3]."
        },
        {
            lecture: "Lecture 1.3",
            question: "Wat is de output van:\nconst user = { name: 'Alice' };\nconst { age } = user;\nconsole.log(age);",
            options: ["undefined", "null", "ReferenceError", "0"],
            correctAnswer: 0,
            explanationCorrect: "Bij destructurering krijgt een variabele de waarde undefined als de key niet in het object zit.",
            explanationIncorrect: "Object destructurering zoekt naar de exacte naam 'age' in het object."
        },
        {
            lecture: "Lecture 1.3",
            question: "Wat doet de optional chaining operator `?.`?",
            options: ["Het voert een check uit en stopt als de waarde null/undefined is.", "Het negeert alle errors.", "Het is een kortere if-statement.", "Het converteert waarden naar booleans."],
            correctAnswer: 0,
            explanationCorrect: "Het voorkomt errors bij het lezen van eigenschappen van diepe objecten als een tussenliggende stap leeg is.",
            explanationIncorrect: "Het geeft undefined terug in plaats van een crash te veroorzaken."
        },
        {
            lecture: "Lecture 1.3",
            question: "Wat is het verschil tussen value types en reference types bij het doorgeven aan een functie?",
            options: ["Reference types worden altijd gekopieerd.", "Value types worden gekopieerd; bij reference types wordt het geheugenadres doorgegeven.", "Er is geen verschil.", "Value types kunnen niet in functies gebruikt worden."],
            correctAnswer: 1,
            explanationCorrect: "Bij objecten/arrays werk je op het origineel; bij primitives (getallen, strings) op een kopie.",
            explanationIncorrect: "Primitieven worden per waarde doorgegeven, objecten per referentie."
        },
        {
            lecture: "Lecture 1.3",
            question: "Welke loop gebruik je om over de enumerable eigenschappen van een object te gaan (hoewel afgeraden voor arrays)?",
            options: ["for...of", "for...in", "forEach", "while"],
            correctAnswer: 1,
            explanationCorrect: "for...in gaat over de keys van een object, inclusief overgeërfde eigenschappen.",
            explanationIncorrect: "for...of is voor waarden in iterables (zoals arrays)."
        },

        // --- LECTURE 2: Closures & OOP ---
        {
            lecture: "Lecture 2",
            question: "Wat is een closure?",
            options: ["Het afsluiten van een programma.", "Een functie die toegang heeft tot variabelen in de omringende scope, zelfs na uitvoering.", "Een verborgen variabele.", "Een type error."],
            correctAnswer: 1,
            explanationCorrect: "Een closure onthoudt de lexical environment waarin hij gecreëerd is.",
            explanationIncorrect: "Het geeft binnenste functies toegang tot buitenste scopes."
        },
        {
            lecture: "Lecture 2",
            question: "Waar verwijst 'this' naar in een arrow function?",
            options: ["Het object dat de functie aanroept.", "De globale scope.", "De 'this' van de omringende lexicale context.", "Undefined."],
            correctAnswer: 2,
            explanationCorrect: "Arrow functions hebben geen eigen 'this' en 'lenen' deze van de buren.",
            explanationIncorrect: "Dit maakt ze ideaal voor callbacks binnen methodes."
        },
        {
            lecture: "Lecture 2",
            question: "Wat doet de `bind()` methode?",
            options: ["Voert een functie direct uit.", "Creëert een nieuwe functie met een vastgelegde 'this' waarde.", "Voegt twee functies samen.", "Bevriest een functie."],
            correctAnswer: 1,
            explanationCorrect: "bind() retourneert een kopie van de functie met een permanente context.",
            explanationIncorrect: "In tegenstelling tot call() en apply() wordt de functie niet direct uitgevoerd."
        },
        {
            lecture: "Lecture 2",
            question: "Wat doet `Object.freeze()`?",
            options: ["Stopt de uitvoering van code.", "Zorgt dat een object niet meer aangepast kan worden (unmutable).", "Slaat een object op in de cache.", "Maakt een object zichtbaar."],
            correctAnswer: 1,
            explanationCorrect: "Eigenschappen kunnen niet meer toegevoegd of gewijzigd worden.",
            explanationIncorrect: "Het wordt vaak gebruikt voor enums in JavaScript."
        },
        {
            lecture: "Lecture 2",
            question: "Welk keyword gebruik je in een subklasse om de constructor van de superklasse aan te roepen?",
            options: ["this", "parent", "super", "base"],
            correctAnswer: 2,
            explanationCorrect: "super() moet als eerste worden aangeroepen in de sub-constructor.",
            explanationIncorrect: "Het geeft toegang tot de methodes en eigenschappen van de ouder."
        },
        {
            lecture: "Lecture 2",
            question: "Wat is een IIFE?",
            options: ["Een asynchrone functie.", "Een functie die onmiddellijk wordt uitgevoerd na definitie.", "Een type interface.", "Een loop."],
            correctAnswer: 1,
            explanationCorrect: "Immediately Invoked Function Expression.",
            explanationIncorrect: "Wordt vaak gebruikt om een privé scope te creëren."
        },
        {
            lecture: "Lecture 2",
            question: "Welke datastructuur slaat alleen unieke waarden op?",
            options: ["Map", "Object", "Set", "Array"],
            correctAnswer: 2,
            explanationCorrect: "Een Set verwijdert automatisch dubbele elementen.",
            explanationIncorrect: "Maps zijn voor sleutel-waarde paren."
        },
        {
            lecture: "Lecture 2",
            question: "Wat is het voordeel van een 'Symbol'?",
            options: ["Het is sneller dan een string.", "Het creëert een unieke identifier die nooit botst.", "Het kan grote getallen opslaan.", "Het is een array."],
            correctAnswer: 1,
            explanationCorrect: "Symbols zijn uniek, zelfs met dezelfde beschrijving.",
            explanationIncorrect: "Ideaal voor verborgen of unieke object-sleutels."
        },

        // --- LECTURE 3: Advanced CSS ---
        {
            lecture: "Lecture 3",
            question: "Wat is de specificiteit van `:where()`?",
            options: ["Gelijk aan een klasse (10).", "Gelijk aan een ID (100).", "Altijd 0.", "Hangt af van de inhoud."],
            correctAnswer: 2,
            explanationCorrect: ":where() verlaagt de specificiteit naar nul om overschrijven makkelijk te maken.",
            explanationIncorrect: "Dit is het grootste verschil met :is()."
        },
        {
            lecture: "Lecture 3",
            question: "Wat doet de selector `div:has(h2)`?",
            options: ["Selecteert de h2 in de div.", "Selecteert de div als deze een h2 bevat.", "Selecteert de div na een h2.", "Selecteert alle h2 elementen."],
            correctAnswer: 1,
            explanationCorrect: "Het is de 'relational' of 'parent' selector.",
            explanationIncorrect: "Het selecteert het element dat voldoet aan de conditie binnen de haakjes."
        },
        {
            lecture: "Lecture 3",
            question: "Welke pseudo-elementen vereisen de `content` property om te werken?",
            options: ["::first-line", "::before en ::after", "::selection", "::first-letter"],
            correctAnswer: 1,
            explanationCorrect: "Zonder content: '' worden ze niet gerenderd door de browser.",
            explanationIncorrect: "De content property mag een lege string zijn."
        },
        {
            lecture: "Lecture 3",
            question: "Wat doet de `box-sizing: border-box;` regel?",
            options: ["Voegt een rand toe.", "Telt padding en border mee in de opgegeven width/height.", "Verbergt de border.", "Vergroot het element."],
            correctAnswer: 1,
            explanationCorrect: "Dit maakt lay-out berekeningen veel eenvoudiger.",
            explanationIncorrect: "Standaard is content-box, waarbij padding de doos 'opblaast'."
        },
        {
            lecture: "Lecture 3",
            question: "Hoe definieer je een CSS variabele?",
            options: ["$color: red;", "@color: red;", "--color: red;", "var-color: red;"],
            correctAnswer: 2,
            explanationCorrect: "Variabelen beginnen altijd met twee streepjes.",
            explanationIncorrect: "Je roept ze aan met var(--color)."
        },
        {
            lecture: "Lecture 3",
            question: "Welke media query detecteert de dark mode instelling van de gebruiker?",
            options: ["@media (theme: dark)", "@media (prefers-color-scheme: dark)", "@media (dark-mode: true)", "@media (color: black)"],
            correctAnswer: 1,
            explanationCorrect: "Dit leest de OS/browser voorkeur van de gebruiker uit.",
            explanationIncorrect: "Ideaal voor automatische dark mode ondersteuning."
        },
        {
            lecture: "Lecture 3",
            question: "Wat is CSS nesting?",
            options: ["CSS in HTML zetten.", "Selectors in andere selectors schrijven (zoals SASS).", "Meerdere fonts gebruiken.", "Een grid maken."],
            correctAnswer: 1,
            explanationCorrect: "Dit is nu een standaard browser feature.",
            explanationIncorrect: "Het verbetert de leesbaarheid van CSS."
        },
        {
            lecture: "Lecture 3",
            question: "Wat doet de `&` selector bij nesting?",
            options: ["Het staat voor 'and'.", "Het refereert naar de parent selector.", "Het is een error.", "Het versterkt de kleur."],
            correctAnswer: 1,
            explanationCorrect: "Het wordt gebruikt om de relatie met de parent expliciet te maken (bijv. bij hover).",
            explanationIncorrect: "Onmisbaar bij moderne CSS nesting."
        },
        {
            lecture: "Lecture 3",
            question: "Wat is het voordeel van het OKLCH kleurmodel?",
            options: ["Het heeft minder kleuren.", "Het is gebaseerd op menselijke perceptie van helderheid.", "Het werkt alleen op oude schermen.", "Het is sneller."],
            correctAnswer: 1,
            explanationCorrect: "Heldere kleuren lijken even helder voor het oog, ongeacht de tint.",
            explanationIncorrect: "Dit is een verbetering ten opzichte van HSL."
        },
        {
            lecture: "Lecture 3",
            question: "Wat doet de CSS functie `clamp(min, preferred, max)`?",
            options: ["Het zet een element vast.", "Het houdt een waarde tussen een minimum en maximum.", "Het snijdt tekst af.", "Het berekent de som."],
            correctAnswer: 1,
            explanationCorrect: "Ideaal voor fluid typography.",
            explanationIncorrect: "Het vervangt ingewikkelde media queries voor tekst-schaling."
        },

        // --- LECTURE 4: Asynchronous Programming ---
        {
            lecture: "Lecture 4",
            question: "Waarom is JavaScript 'single-threaded'?",
            options: ["Het heeft meerdere Call Stacks.", "Het voert slechts één ding tegelijk uit op de hoofd-stack.", "Het draait alleen in de browser.", "Het gebruikt geen geheugen."],
            correctAnswer: 1,
            explanationCorrect: "De engine kan maar één taak tegelijk verwerken in de Call Stack.",
            explanationIncorrect: "Asynchroon gedrag wordt mogelijk gemaakt door Web API's en de Event Loop."
        },
        {
            lecture: "Lecture 4",
            question: "Wat is de volgorde van de Event Loop?",
            options: ["Call Stack -> Callback Queue -> Event Loop -> Call Stack", "Queue -> Stack -> Loop", "Stack -> Loop -> Queue", "Loop -> Stack -> Queue"],
            correctAnswer: 0,
            explanationCorrect: "De Event Loop verplaatst taken van de queue naar de stack als de stack leeg is.",
            explanationIncorrect: "Zonder lege stack wordt er niets uit de queue uitgevoerd."
        },
        {
            lecture: "Lecture 4",
            question: "Wat is 'Callback Hell'?",
            options: ["Een foutmelding.", "Te diep geneste callbacks die onleesbaar zijn.", "Een oneindige loop.", "Een ontbrekende functie."],
            correctAnswer: 1,
            explanationCorrect: "Ook wel de 'Pyramid of Doom' genoemd.",
            explanationIncorrect: "Promises zijn geïntroduceerd om dit op te lossen."
        },
        {
            lecture: "Lecture 4",
            question: "Wat zijn de drie staten van een Promise?",
            options: ["Start, Middle, End", "Pending, Fulfilled, Rejected", "Active, Inactive, Error", "Open, Closed, Wait"],
            correctAnswer: 1,
            explanationCorrect: "Dit beschrijft de levenscyclus van een asynchrone operatie.",
            explanationIncorrect: "Zodra een promise fulfilled of rejected is, is hij 'settled'."
        },
        {
            lecture: "Lecture 4",
            question: "Wat doet `Promise.all()`?",
            options: ["Wacht op de eerste die klaar is.", "Wacht tot alle promises zijn ingelost; faalt als er één faalt.", "Voert promises na elkaar uit.", "Verwijdert promises."],
            correctAnswer: 1,
            explanationCorrect: "Het is een 'all-or-nothing' mechanisme.",
            explanationIncorrect: "Handig om meerdere API calls tegelijk te doen."
        },
        {
            lecture: "Lecture 4",
            question: "Wat is het verschil tussen `Promise.any()` en `Promise.race()`?",
            options: ["Er is geen verschil.", "Any wacht op de eerste succesvolle; Race op de allereerste (ook bij fout).", "Race is sneller.", "Any werkt alleen met arrays."],
            correctAnswer: 1,
            explanationCorrect: "Race geeft de uitslag van de snelste, ook als dat een error is.",
            explanationIncorrect: "Any negeert fouten tot er een succes is."
        },

        // --- LECTURE 5: Async / Await ---
        {
            lecture: "Lecture 5",
            question: "Wat doet het `await` keyword?",
            options: ["Het pauzeert het hele script.", "Het wacht op de uitkomst van een Promise binnen een async functie.", "Het maakt een nieuwe promise.", "Het versnelt de code."],
            correctAnswer: 1,
            explanationCorrect: "Het zorgt voor een leesbare, synchroon-lijkende syntax voor asynchrone code.",
            explanationIncorrect: "Await mag alleen in async functies of op top-level modules gebruikt worden."
        },
        {
            lecture: "Lecture 5",
            question: "Wat gebeurt er als een `await` promise rejected wordt en er is geen try/catch?",
            options: ["De code gaat gewoon door.", "De async functie stopt en de error propageert naar de aanroeper.", "De computer crasht.", "Er wordt een waarschuwing getoond."],
            correctAnswer: 1,
            explanationCorrect: "Fouten moeten gevangen worden met try/catch blokken.",
            explanationIncorrect: "Ongehandelde rejections leiden vaak tot 'UnhandledPromiseRejection' waarschuwingen of crashes."
        },
        {
            lecture: "Lecture 5",
            question: "Hoe kun je asynchrone taken in parallel uitvoeren met async/await?",
            options: ["Met een for-loop.", "Door `Promise.all()` te gebruiken met een array van promises.", "Door meerdere awaits achter elkaar te zetten.", "Dat kan niet."],
            correctAnswer: 1,
            explanationCorrect: "Achter elkaar awaits zetten is serieel (traag); Promise.all is parallel (snel).",
            explanationIncorrect: "Parallelle uitvoering bespaart veel tijd bij netwerkverzoeken."
        },
        {
            lecture: "Lecture 5",
            question: "Wat is 'Top level await'?",
            options: ["Await bovenaan een functie.", "Await direct in een module buiten een functie.", "De hoogste prioriteit van await.", "Await in de HTML."],
            correctAnswer: 1,
            explanationCorrect: "Dit is toegestaan in ES Modules.",
            explanationIncorrect: "Handig voor configuratie-laden bij het opstarten van een script."
        },

        // --- LECTURE 6: Responsive Design ---
        {
            lecture: "Lecture 6",
            question: "Wat is de 'Viewport'?",
            options: ["De hele webpagina.", "Het zichtbare gedeelte van de pagina in de browser.", "De grootte van de monitor.", "De URL balk."],
            correctAnswer: 1,
            explanationCorrect: "Het verandert wanneer je de browser herschaalt of scrollt.",
            explanationIncorrect: "Op mobiel is de viewport cruciaal voor de lay-out."
        },
        {
            lecture: "Lecture 6",
            question: "Wat is de eenheid `rem`?",
            options: ["Relatief aan het element zelf.", "Relatief aan de root (html) font-size.", "Relatief aan de parent.", "Een absolute pixelwaarde."],
            correctAnswer: 1,
            explanationCorrect: "Root EM.",
            explanationIncorrect: "Beter dan 'em' voor voorspelbare schaling."
        },
        {
            lecture: "Lecture 6",
            question: "Wat doet de CSS property `flex-grow: 1`?",
            options: ["Het element wordt groter.", "Het element neemt de resterende ruimte in de flex-container in.", "Het element krijgt een animatie.", "Het element wordt vetgedrukt."],
            correctAnswer: 1,
            explanationCorrect: "Het bepaalt de verhouding waarin items groeien.",
            explanationIncorrect: "Onderdeel van de Flexbox layout engine."
        },
        {
            lecture: "Lecture 6",
            question: "Wat is het verschil tussen `auto-fill` en `auto-fit` in een grid?",
            options: ["Er is geen verschil.", "Auto-fill vult de rij met lege kolommen; Auto-fit laat kolommen groeien om de ruimte te vullen.", "Auto-fit is sneller.", "Auto-fill werkt alleen op Safari."],
            correctAnswer: 1,
            explanationCorrect: "Auto-fit 'collapst' lege kolommen naar een breedte van 0.",
            explanationIncorrect: "Auto-fit wordt het meest gebruikt voor responsive grids."
        },
        {
            lecture: "Lecture 6",
            question: "Wat is 'Mobile First' design?",
            options: ["Eerst de mobiele app maken.", "Eerst stijlen voor kleine schermen schrijven en daarna uitbreiden voor grotere schermen.", "Geen desktop versie maken.", "Afbeeldingen verkleinen."],
            correctAnswer: 1,
            explanationCorrect: "Dit zorgt voor lichtere en snellere mobiele ervaringen.",
            explanationIncorrect: "Je gebruikt min-width media queries."
        },
        {
            lecture: "Lecture 6",
            question: "Wat is de eenheid `dvh`?",
            options: ["Device Vertical Height", "Dynamic Viewport Height", "Desktop Video Hub", "Data Value Height"],
            correctAnswer: 1,
            explanationCorrect: "Het past zich aan wanneer de browser UI (zoals adresbalk) verschijnt of verdwijnt.",
            explanationIncorrect: "Voorkomt ongewenste verspringing op mobiel."
        },

        // --- LECTURE 7: TypeScript ---
        {
            lecture: "Lecture 7",
            question: "Wat is TypeScript?",
            options: ["Een nieuwe programmeertaal.", "Een superset van JavaScript met statische typering.", "Een browser plugin.", "Een database."],
            correctAnswer: 1,
            explanationCorrect: "Het helpt fouten te vinden tijdens het compileren in plaats van tijdens het draaien.",
            explanationIncorrect: "TS wordt altijd omgezet naar gewone JS."
        },
        {
            lecture: "Lecture 7",
            question: "Welke syntax gebruik je voor een array van strings in TS?",
            options: ["string array", "string[]", "Array(string)", "[string]"],
            correctAnswer: 1,
            explanationCorrect: "Je kunt ook Array<string> gebruiken.",
            explanationIncorrect: "Typering maakt je code robuuster."
        },
        {
            lecture: "Lecture 7",
            question: "Wat is het type `any`?",
            options: ["Een speciaal type voor getallen.", "Een 'opt-out' van type-checking; alles is toegestaan.", "Een type voor objecten.", "Een error type."],
            correctAnswer: 1,
            explanationCorrect: "Het gebruik hiervan moet zoveel mogelijk vermeden worden.",
            explanationIncorrect: "Het haalt het nut van TypeScript weg."
        },
        {
            lecture: "Lecture 7",
            question: "Hoe maak je een eigenschap in een interface optioneel?",
            options: ["Met een uitroepteken (!).", "Met een vraagteken (?).", "Met het keyword 'optional'.", "Dat kan niet."],
            correctAnswer: 1,
            explanationCorrect: "Bijv. `age?: number`.",
            explanationIncorrect: "Dit is handig voor data die niet altijd aanwezig is."
        },
        {
            lecture: "Lecture 7",
            question: "Wat is een 'Tuple'?",
            options: ["Een array met een vast aantal elementen van specifieke types.", "Een type error.", "Een ander woord voor object.", "Een herstart."],
            correctAnswer: 0,
            explanationCorrect: "Bijv. `[string, number]` voor een naam en leeftijd.",
            explanationIncorrect: "Handig voor strikte array structuren."
        },
        {
            lecture: "Lecture 7",
            question: "Wat doet de `void` return type?",
            options: ["De functie geeft een error.", "De functie geeft niets (undefined) terug.", "De functie is leeg.", "De functie is asynchroon."],
            correctAnswer: 1,
            explanationCorrect: "Meestal gebruikt voor functies die alleen een actie uitvoeren (zoals loggen).",
            explanationIncorrect: "Tegenovergestelde van een functie die data berekent en retourneert."
        },
        {
            lecture: "Lecture 7",
            question: "Wat is een 'Generic' in TypeScript?",
            options: ["Een algemene fout.", "Een manier om herbruikbare componenten te maken die met verschillende types werken.", "Een standaard type.", "Een type voor arrays."],
            correctAnswer: 1,
            explanationCorrect: "Bijv. `<T>` bij functies of klassen.",
            explanationIncorrect: "Het laat toe om types door te geven als parameters."
        },

        // --- EXTRA PRACTICE (toegevoegd) ---
        {
            lecture: "Lecture 1.1",
            question: "Wat doet `type=\"module\"` standaard met de laadtiming van een script?",
            options: ["Het blokkeert de parser totdat de code draait.", "Het wordt standaard als defer uitgevoerd na de HTML-parsing.", "Het laadt inlined CSS.", "Het maakt het script async én inline."],
            correctAnswer: 1,
            explanationCorrect: "Modules hebben impliciet defer-gedrag: downloaden parallel, uitvoeren na parsing in volgorde.",
            explanationIncorrect: "Alleen async blokkeert de parser niet maar kan eerder uitvoeren; modules wachten tot parsing klaar is."
        },
        {
            lecture: "Lecture 1.2",
            question: "Wat is de uitkomst van `[] == ![]`?",
            options: ["true", "false", "TypeError", "ReferenceError"],
            correctAnswer: 0,
            explanationCorrect: "![] wordt false, false coerct naar 0, [] coerct naar 0, dus 0 == 0 is true.",
            explanationIncorrect: "Door type coercion worden beide zijden naar 0 geconverteerd."
        },
        {
            lecture: "Lecture 1.3",
            question: "Wat logt deze code?\nfunction f(a, b = a * 2) {\n  console.log(a, b);\n}\nf(2);",
            options: ["2 2", "2 4", "2 undefined", "Error: b is not defined"],
            correctAnswer: 1,
            explanationCorrect: "Default parameters worden pas bij aanroep geëvalueerd met de huidige argumenten.",
            explanationIncorrect: "De tweede parameter krijgt de waarde 4 doordat a=2 en de default a*2 is."
        },
        {
            lecture: "Lecture 2",
            question: "Wat is het effect van een privé klasseveld (bijv. `#secret`) in JavaScript?",
            options: ["Het is overal toegankelijk.", "Het is alleen toegankelijk binnen de klasse; buitenaf geeft een SyntaxError.", "Het maakt het veld readonly.", "Het veld wordt automatisch ge-encrypt."],
            correctAnswer: 1,
            explanationCorrect: "Velden met # zijn echt privé en buiten de klasse niet te benaderen of te de-structureren.",
            explanationIncorrect: "Een property met # is geen gewone key; toegang van buitenaf is niet mogelijk."
        },
        {
            lecture: "Lecture 2",
            question: "Wanneer kun je een `static` methode van een klasse aanroepen?",
            options: ["Alleen op een instantie", "Alleen binnen de constructor", "Op de klasse zelf, niet op het object", "Altijd automatisch"],
            correctAnswer: 2,
            explanationCorrect: "Static methodes horen bij de klasse (MyClass.myMethod()), niet bij het aangemaakte object.",
            explanationIncorrect: "Een instantie heeft geen toegang tot static via this.myMethod zonder expliciete verwijzing."
        },
        {
            lecture: "Lecture 2",
            question: "Wat is het verschil tussen `call()` en `apply()`?",
            options: ["call neemt een array, apply losse args", "call en apply zijn identiek", "call neemt losse args, apply een array van args", "call werkt alleen op arrow functions"],
            correctAnswer: 2,
            explanationCorrect: "Beide zetten de this-context, maar apply verwacht één array met argumenten.",
            explanationIncorrect: "Gebruik call(a,1,2) of apply(a,[1,2]) voor dezelfde uitkomst."
        },
        {
            lecture: "Lecture 2",
            question: "Wat is een voordeel van `Map` t.o.v. een gewoon object?",
            options: ["Map blokkeert mutaties.", "Keys kunnen elke waarde zijn (ook objecten) en behouden invoegvolgorde.", "Map maakt automatisch deep copies.", "Map is altijd sneller."],
            correctAnswer: 1,
            explanationCorrect: "Maps accepteren willekeurige key-typen en houden de volgorde van invoegen vast.",
            explanationIncorrect: "Een gewoon object dwingt string/symbol keys af en verliest invoegvolgorde."
        },
        {
            lecture: "Lecture 3",
            question: "Hoe gedraagt `:is()` zich qua specificiteit?",
            options: [":is() heeft altijd specificiteit 0", "Het neemt de hoogste specificiteit van de selectors binnenin", "Het telt alle specificiteiten bij elkaar op", "Het werkt alleen binnen :where"],
            correctAnswer: 1,
            explanationCorrect: ":is()` neemt de hoogste specificiteit van zijn argumenten; :where() reset naar 0.",
            explanationIncorrect: "Daarom kan :is() nog steeds je cascade beïnvloeden op basis van de binnenste selector."
        },
        {
            lecture: "Lecture 3",
            question: "Wat vervangt `inline-size` in logical properties?",
            options: ["padding", "width", "height", "margin"],
            correctAnswer: 1,
            explanationCorrect: "inline-size is de logische breedte (meeloopt met de inline-as).",
            explanationIncorrect: "Gebruik inline-size om te reageren op schrijfrichting zonder width/left/right."
        },
        {
            lecture: "Lecture 3",
            question: "Waarvoor gebruik je `min()`, `max()` en `clamp()` in CSS?",
            options: ["Alleen voor kleuren", "Om waarden te begrenzen of conditioneel te kiezen", "Om animaties te maken", "Alleen in Sass"],
            correctAnswer: 1,
            explanationCorrect: "Met min/max kies je de kleinste/grootste uit expressies; clamp houdt een waarde tussen een minimum en maximum.",
            explanationIncorrect: "Deze functies zijn native CSS en ideaal voor fluid sizing."
        },
        {
            lecture: "Lecture 3",
            question: "Wat doet `aspect-ratio: 16 / 9;`?",
            options: ["Voegt een border toe", "Houdt de breedte/hoogte verhouding 16:9 vast bij schalen", "Verkleint tekst", "Alleen voor afbeeldingen"],
            correctAnswer: 1,
            explanationCorrect: "De browser bewaart de verhouding ongeacht beschikbare ruimte, handig voor kaarten of embeds.",
            explanationIncorrect: "Het zet geen vaste pixels maar bewaart verhouding bij responsieve layouts."
        },
        {
            lecture: "Lecture 4",
            question: "Hoe reageert `fetch` op een 404 HTTP status?",
            options: ["fetch reject meteen", "fetch resolve met response.ok = false", "fetch stopt de event loop", "fetch gooit synchronisch"],
            correctAnswer: 1,
            explanationCorrect: "fetch resolve altijd bij netwerk succes; check response.ok of status voor fouten.",
            explanationIncorrect: "Alleen netwerkfouten leiden tot reject; 404 moet je zelf afhandelen."
        },
        {
            lecture: "Lecture 4",
            question: "Wat levert `Promise.allSettled()` op?",
            options: ["Alleen geslaagde resultaten", "Een array met {status, value|reason} voor elke promise", "De eerste promise", "Een boolean per promise"],
            correctAnswer: 1,
            explanationCorrect: "AllSettled geeft voor elke invoer de status terug, ongeacht succes of fout.",
            explanationIncorrect: "Het reject niet bij fouten; je krijgt een array met statuses."
        },
        {
            lecture: "Lecture 4",
            question: "Welke queue wordt eerst leeggehaald door de event loop?",
            options: ["Macrotask queue (setTimeout)", "Microtask queue (Promises) komt vóór macrotasks", "Rendering queue", "Er is maar één queue"],
            correctAnswer: 1,
            explanationCorrect: "Microtasks (zoals .then) draaien na de huidige stack vóór nieuwe macrotasks zoals setTimeout.",
            explanationIncorrect: "Daarom kan een keten van .then callbacks timers vertragen."
        },
        {
            lecture: "Lecture 5",
            question: "Waarom werkt `array.forEach(async ...)` niet zoals verwacht met await?",
            options: ["forEach ondersteunt geen arrays", "forEach wacht niet op promises en retourneert geen promise", "async is verboden in forEach", "Het blokkeert de event loop"],
            correctAnswer: 1,
            explanationCorrect: "forEach wacht niet; gebruik for...of of Promise.all met map voor async flows.",
            explanationIncorrect: "forEach runt callbacks direct zonder op de resoluties te wachten."
        },
        {
            lecture: "Lecture 5",
            question: "Hoe haal je parallel twee API-calls op met async/await?",
            options: ["await call1; await call2;", "const [a,b] = await Promise.all([call1(), call2()]);", "setTimeout voor één call", "for...of over de promises"],
            correctAnswer: 1,
            explanationCorrect: "Promise.all start beide tegelijk en wacht daarna op beide; destructuring geeft de resultaten.",
            explanationIncorrect: "Serieus awaiten maakt het trager en geeft geen parallelle winst."
        },
        {
            lecture: "Lecture 5",
            question: "Wat is een effect van Top Level Await in modules?",
            options: ["Het versnelt alle imports", "Het kan andere modules blokkeren tot de await klaar is", "Het verwijdert hoisting", "Het verbiedt named exports"],
            correctAnswer: 1,
            explanationCorrect: "Een module met top-level await wacht met evaluatie; dependents wachten mee.",
            explanationIncorrect: "Let op dat lange awaits module load kunnen vertragen."
        },
        {
            lecture: "Lecture 6",
            question: "Wat gebeurt er zonder een correcte viewport meta tag op mobiel?",
            options: ["De pagina laadt niet", "Browsers schalen de pagina kunstmatig klein (uitzoomen)", "Alle scripts falen", "Alle CSS variabelen breken"],
            correctAnswer: 1,
            explanationCorrect: "Zonder viewport meta wordt een desktopbreedte gesimuleerd en wordt de layout verkleind.",
            explanationIncorrect: "De tag `width=device-width, initial-scale=1.0` voorkomt dit uitzoomen."
        },
        {
            lecture: "Lecture 6",
            question: "Wat betekent de `fr` eenheid in CSS Grid?",
            options: ["Vaste pixels", "Een fractie van de beschikbare vrije ruimte", "Percentage van de viewport", "Font related"],
            correctAnswer: 1,
            explanationCorrect: "fr verdeelt resterende ruimte proportioneel over kolommen/rijen.",
            explanationIncorrect: "Het is geen absolute maat; het deelt wat na vaste kolommen overblijft."
        },
        {
            lecture: "Lecture 6",
            question: "Wat doet `minmax(12rem, 1fr)` in een grid kolomdefinitie?",
            options: ["Kolommen zijn altijd 12rem", "Kolommen zijn maximaal 12rem", "Kolommen zijn minimaal 12rem maar kunnen meegroeien tot een fractie van de vrije ruimte", "Het maakt kolommen sticky"],
            correctAnswer: 2,
            explanationCorrect: "Het garandeert een minimum zodat content niet crasht, maar laat ze verder flexibel meegroeien.",
            explanationIncorrect: "minmax combineert een harde ondergrens met een flexibele bovengrens."
        },
        {
            lecture: "Lecture 7",
            question: "Waarvoor gebruik je het `never` type in TypeScript?",
            options: ["Voor null waarden", "Voor functies die nooit terugkeren (throw of endless loop) of onbereikbare gevallen", "Voor optionele properties", "Voor HTML elementen"],
            correctAnswer: 1,
            explanationCorrect: "never helpt bij exhaustiveness checks: codepad dat niet mag voorkomen.",
            explanationIncorrect: "Het is geen synonym voor void; void betekent 'geen nuttige return'."
        },
        {
            lecture: "Lecture 7",
            question: "Wat doet het keyword `readonly` in een interface?",
            options: ["Het maakt een property privé", "Het voorkomt dat de property na initialisatie wordt her-assignend", "Het voegt getters toe", "Het gooit een runtime error"],
            correctAnswer: 1,
            explanationCorrect: "readonly properties kunnen niet opnieuw toegewezen worden, wat mutatie-fouten voorkomt.",
            explanationIncorrect: "Het is een compile-time check; geen magic getter/setter."
        },

        // --- CODE COMPLETION VRAGEN ---
        {
            lecture: "Lecture 1.3 & 2",
            question: "Welk keyword hoort op de stippellijn? (Dit is een closure-patroon)\nfunction outer(x) {\n  return function inner() {\n    __________ y = x + 1;\n    return y;\n  };\n}",
            options: ["return", "const", "let", "var"],
            correctAnswer: 1,
            explanationCorrect: "Const is correct; je wijst y eenmalig toe in de inner scope.",
            explanationIncorrect: "Const of let zijn beide bruikbaar; const geeft immutability aan."
        },
        {
            lecture: "Lecture 4",
            question: "Vul in wat op de stippellijn hoort:\nfetch('/api/data')\n  .then(res => res.json())\n  __________ (data => console.log(data))\n  __________ (err => console.error(err));",
            options: [".then() / .then()", ".then() / .catch()", ".then() / .error()", ".data() / .error()"],
            correctAnswer: 1,
            explanationCorrect: ".then() en .catch() is de standaard pattern voor Promise afhandeling.",
            explanationIncorrect: "De tweede hoort .catch() te zijn voor error handling."
        },

        // --- MOEILIJKE VAAG GESTELDE VRAGEN ---
        {
            lecture: "Lecture 1.2 & 1.3",
            question: "Wat zal deze code precies loggen?\nlet x = 5;\nconst obj = { x: 10, fn() { console.log(this.x); } };\nconst g = obj.fn;\ng();",
            options: ["10", "5", "undefined", "TypeError"],
            correctAnswer: 2,
            explanationCorrect: "g() roept fn aan zonder context; this verwijst naar global/undefined dus undefined.",
            explanationIncorrect: "Dit is 'loss of context'; obj.fn() zou 10 geven, g() niet."
        },
        {
            lecture: "Lecture 2 & 5",
            question: "Wat gebeurt als je dit draait?\nconst arr = [1, 2, 3];\narr.map(async x => x * 2).then(r => console.log(r));",
            options: ["Logt [2, 4, 6]", "Logt array van Promises", "TypeError: then is not a function", "ReferenceError"],
            correctAnswer: 2,
            explanationCorrect: "map() geeft altijd een array, geen Promise; de array heeft geen .then(). Gebruik Promise.all.",
            explanationIncorrect: "arr.map().then() werkt niet; .then() bestaat niet op array objects."
        },
        {
            lecture: "Lecture 3 & 6",
            question: "Wat is de effectieve renderbreedte van het element?\n.box { width: 100px; padding: 10px; box-sizing: content-box; }",
            options: ["100px", "120px (100 + 10*2)", "110px", "Depends on parent"],
            correctAnswer: 1,
            explanationCorrect: "content-box: padding wordt BUITEN de 100px geteld; 100px + 20px padding = 120px render.",
            explanationIncorrect: "Dit is default gedrag; border-box telt padding IN de 100px."
        }
    ]
};

function shuffleQuestions(questions) {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.map(q => shuffleQuestionAnswers(q));
}

function shuffleQuestionAnswers(question) {
    const optionsWithFlags = question.options.map((opt, idx) => ({
        option: opt,
        isCorrect: idx === question.correctAnswer
    }));

    for (let i = optionsWithFlags.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsWithFlags[i], optionsWithFlags[j]] = [optionsWithFlags[j], optionsWithFlags[i]];
    }

    const shuffledQuestion = { ...question };
    shuffledQuestion.options = optionsWithFlags.map(item => item.option);
    shuffledQuestion.correctAnswer = optionsWithFlags.findIndex(item => item.isCorrect);

    return shuffledQuestion;
}

document.addEventListener('DOMContentLoaded', function(){
    webTechQuizData.questions = shuffleQuestions(webTechQuizData.questions);
    initQuiz(webTechQuizData);
});

if (typeof module !== 'undefined' && module.exports){
    module.exports = { webTechQuizData, shuffleQuestions, shuffleQuestionAnswers };
}

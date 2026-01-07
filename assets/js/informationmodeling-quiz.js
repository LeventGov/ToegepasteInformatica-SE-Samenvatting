const allExamQuestions = [
  // --- Deel 1: Basisconcepten & ERD (Vragen 1-20) ---
  {
    id: 1,
    category: "ERD Notation",
    question: "Je ziet in een ERD de Crow's Foot notatie '----0<' (een bolletje en een kraaienpootje) aan de kant van de entiteit 'Spel'. Wat betekent dit voor de cardinaliteit?",
    options: [
      { text: "Mandatory Many: Er is minstens één spel vereist, maar er is geen maximum.", isCorrect: false },
      { text: "Optional Many: Het minimum is 0 (optioneel) en het maximum is N (meerdere).", isCorrect: true },
      { text: "Optional One: Het spel is optioneel, maar gelimiteerd tot maximaal één.", isCorrect: false },
      { text: "Mandatory One: Er moet exact één uniek spel gekoppeld zijn.", isCorrect: false }
    ],
    explanation: "Het bolletje (0) staat voor optioneel (minimaal 0) en het kraaienpootje (<) staat voor many (maximaal N)."
  },
  {
    id: 2,
    category: "Normalisatie",
    question: "Wanneer bevindt een tabel zich in de Tweede Normaalvorm (2NF)?",
    options: [
      { text: "Als alle transitieve afhankelijkheden zijn verwijderd.", isCorrect: false },
      { text: "Als de tabel in 1NF staat en er geen partiële afhankelijkheden meer zijn.", isCorrect: true },
      { text: "Als er geen samengestelde attributen meer aanwezig zijn.", isCorrect: false },
      { text: "Als elke determinant in de tabel ook een kandidaatsleutel is.", isCorrect: false }
    ],
    explanation: "2NF vereist dat niet-sleutel attributen afhangen van de *volledige* primary key, niet slechts een deel ervan."
  },
  {
    id: 3,
    category: "Relational Mapping",
    question: "Hoe vertaal je een Many-to-Many (M:N) relatie tussen 'Student' en 'Cursus' naar een relationeel database model?",
    options: [
      { text: "Door de Primary Key van 'Student' als Foreign Key toe te voegen in de 'Cursus' tabel.", isCorrect: false },
      { text: "Door een nieuwe koppeltabel te maken die de PK's van beide entiteiten bevat.", isCorrect: true },
      { text: "Door in de 'Student' tabel een kolom toe te voegen met een lijst van Cursus-ID's.", isCorrect: false },
      { text: "Door de relatie samen te voegen in de tabel met de minste data.", isCorrect: false }
    ],
    explanation: "Een M:N relatie vereist altijd een tussentabel omdat je in een database geen lijsten in één cel mag opslaan."
  },
  {
    id: 4,
    category: "Entity Types",
    question: "Wat is het verschil tussen een Strong Entity en een Weak Entity in een ERD?",
    options: [
      { text: "Strong Entities hebben altijd meer attributen dan Weak Entities.", isCorrect: false },
      { text: "Een Strong Entity bestaat zelfstandig; een Weak Entity is bestaansafhankelijk.", isCorrect: true },
      { text: "Weak Entities komen alleen voor in conceptuele modellen, niet in logische.", isCorrect: false },
      { text: "Er is geen verschil, het zijn synoniemen voor hetzelfde concept.", isCorrect: false }
    ],
    explanation: "Een Strong Entity heeft een eigen primaire sleutel. Een Weak Entity identificeert zichzelf via een relatie met een eigenaar."
  },
  {
    id: 5,
    category: "Attributes",
    question: "Welke soort attributen zijn NIET toegestaan in de Eerste Normaalvorm (1NF)?",
    options: [
      { text: "Attributen die leeg (NULL) kunnen zijn.", isCorrect: false },
      { text: "Multi-valued attributen (zoals lijsten of sets).", isCorrect: true },
      { text: "Attributen die tekst bevatten langer dan 255 tekens.", isCorrect: false },
      { text: "Afgeleide attributen die berekend worden.", isCorrect: false }
    ],
    explanation: "1NF vereist atomaire waarden. Lijsten in één cel zijn verboden."
  },
  {
    id: 6,
    category: "Key Attributes",
    question: "Wat is het verschil tussen een Primary Key en een Candidate Key?",
    options: [
      { text: "Er is geen technisch verschil; ze werken identiek.", isCorrect: false },
      { text: "De Primary Key is de door jou gekozen Candidate Key.", isCorrect: true },
      { text: "Candidate Keys mogen NULL waarden bevatten, Primary Keys niet.", isCorrect: false },
      { text: "Primary Keys worden automatisch gegenereerd, Candidate Keys niet.", isCorrect: false }
    ],
    explanation: "Een Candidate Key is elke sleutel die uniek is. De PK is degene die je effectief kiest als hoofdidentificatie."
  },
  {
    id: 7,
    category: "Participation and Cardinality",
    question: "Wat betekent 'Total Participation' in een ERD relatie?",
    options: [
      { text: "Dat de relatie optioneel is voor alle entiteiten.", isCorrect: false },
      { text: "Dat elke instantie van de entiteit verplicht moet deelnemen.", isCorrect: true },
      { text: "Dat de relatie een veel-op-veel (M:N) verbinding is.", isCorrect: false },
      { text: "Dat de entiteit eigenaar is van de relatie.", isCorrect: false }
    ],
    explanation: "Total Participation (dubbele lijn) betekent dat het minimum 1 is (verplicht)."
  },
  {
    id: 8,
    category: "Normalizatie",
    question: "Wat is het hoofddoel van Normalisatie in database design?",
    options: [
      { text: "Het versnellen van lees-operaties (SELECT statements).", isCorrect: false },
      { text: "Het vermijden van redundantie en data-anomalies.", isCorrect: true },
      { text: "Het verminderen van het aantal tabellen in de database.", isCorrect: false },
      { text: "Het beveiligen van de data tegen ongeautoriseerde toegang.", isCorrect: false }
    ],
    explanation: "Normalisatie voorkomt dat je dezelfde data op meerdere plekken moet aanpassen (update anomaly)."
  },
  {
    id: 9,
    category: "Inheritance/Specialization",
    question: "Hoe representeer je Inheritance (specialisatie) bij de vertaling naar tabellen?",
    options: [
      { text: "Door gebruik te maken van SQL 'INHERITS' statements.", isCorrect: false },
      { text: "Via een Parent-tabel en Child-tabellen gekoppeld met PK/FK.", isCorrect: true },
      { text: "Door alle data altijd in één enkele, grote tabel te stoppen.", isCorrect: false },
      { text: "Door voor elk subtype een tabel te maken met alle kolommen gedupliceerd.", isCorrect: false }
    ],
    explanation: "De standaard (SP + #SB) is een supertype tabel met algemene data en subtype tabellen met specifieke data."
  },
  {
    id: 10,
    category: "API Design",
    question: "Welk HTTP-werkwoord (verb) gebruik je voor een 'partial update'?",
    options: [
      { text: "PUT", isCorrect: false },
      { text: "POST", isCorrect: false },
      { text: "PATCH", isCorrect: true },
      { text: "UPDATE", isCorrect: false }
    ],
    explanation: "PATCH wijzigt alleen de meegestuurde velden. PUT vervangt het hele object."
  },
  {
    id: 11,
    category: "Change of Universe of Discourse",
    question: "Wat wordt bedoeld met 'Change of Universe of Discourse'?",
    options: [
      { text: "Een technische migratie naar een nieuwe databaseversie.", isCorrect: false },
      { text: "Een verandering in de scope of regels van de werkelijkheid die je modelleert.", isCorrect: true },
      { text: "Het hernoemen van tabellen in het logisch model.", isCorrect: false },
      { text: "Het aanpassen van de API authenticatie methodes.", isCorrect: false }
    ],
    explanation: "De UoD is de context/wereld van je systeem. Als die verandert (bv. bedrijfsuitbreiding), moet je model mee veranderen."
  },
  {
    id: 12,
    category: "Transitieve Afhankelijkheid",
    question: "Wat is een Transitieve Afhankelijkheid?",
    options: [
      { text: "Wanneer een niet-sleutel attribuut afhangt van een ander niet-sleutel attribuut.", isCorrect: true },
      { text: "Wanneer een sleutel afhangt van een andere primaire sleutel.", isCorrect: false },
      { text: "Wanneer er een circulaire verwijzing is tussen drie tabellen.", isCorrect: false },
      { text: "Wanneer een attribuut afhangt van een deel van de samengestelde sleutel.", isCorrect: false }
    ],
    explanation: "Transitief: A -> B -> C. Als B geen sleutel is, mag C er niet van afhangen in 3NF."
  },
  {
    id: 13,
    category: "Crow's Foot Notation",
    question: "Welk symbool gebruik je in Crow's Foot notatie voor een '1:N' relatie?",
    options: [
      { text: "Twee verticale streepjes (||) aan beide kanten.", isCorrect: false },
      { text: "Een streepje (|) aan de ene kant en een kraaienpoot (<) aan de andere.", isCorrect: true },
      { text: "Een open bolletje (o) aan beide kanten.", isCorrect: false },
      { text: "Een driehoekige pijl die naar de parent wijst.", isCorrect: false }
    ],
    explanation: "De kraaienpoot (<) staat symbool voor 'Many' (N)."
  },
  {
    id: 14,
    category: "Mapping Conceptual to Relational",
    question: "Hoe map je een 1:1 relatie in een relationeel model?",
    options: [
      { text: "Door altijd een derde koppeltabel aan te maken.", isCorrect: false },
      { text: "Door een Foreign Key toe te voegen aan één van de twee tabellen.", isCorrect: true },
      { text: "Door beide entiteiten samen te voegen tot één onscheidbare tabel.", isCorrect: false },
      { text: "Door de Primary Key van beide tabellen identiek te maken zonder FK.", isCorrect: false }
    ],
    explanation: "Bij 1:1 volstaat het om in tabel A een verwijzing (FK) naar tabel B op te nemen."
  },
  {
    id: 15,
    category: "Partiële Afhankelijkheid",
    question: "Wat houdt een Partiële Afhankelijkheid in?",
    options: [
      { text: "Dat een attribuut afhangt van slechts een deel van de samengestelde sleutel.", isCorrect: true },
      { text: "Dat een attribuut optioneel is en dus NULL kan zijn.", isCorrect: false },
      { text: "Dat een attribuut afhankelijk is van een niet-sleutel attribuut.", isCorrect: false },
      { text: "Dat de tabel niet voldoet aan de eerste normaalvorm.", isCorrect: false }
    ],
    explanation: "Dit komt alleen voor bij samengestelde sleutels (Composite Keys)."
  },
  {
    id: 16,
    category: "Relationship Types",
    question: "Wat is het verschil tussen een Identifying en een Non-Identifying Relationship?",
    options: [
      { text: "Bij Identifying wordt de FK onderdeel van de PK van het kind.", isCorrect: true },
      { text: "Identifying relaties zijn alleen voor 1:1 relaties bedoeld.", isCorrect: false },
      { text: "Non-Identifying relaties gebruiken geen Foreign Keys.", isCorrect: false },
      { text: "Er is geen verschil, het is puur een visuele notatiekeuze.", isCorrect: false }
    ],
    explanation: "Identifying relationships (voor zwakke entiteiten) nemen de sleutel van de ouder op in de eigen sleutel."
  },
  {
    id: 17,
    category: "Data Integrity",
    question: "Welke constraint garandeert dat een FK altijd verwijst naar een bestaande PK?",
    options: [
      { text: "De Unique Constraint.", isCorrect: false },
      { text: "De Primary Key Constraint.", isCorrect: false },
      { text: "De Referential Integrity (Foreign Key) Constraint.", isCorrect: true },
      { text: "De Check Constraint.", isCorrect: false }
    ],
    explanation: "Dit voorkomt 'wees-records' die verwijzen naar data die niet (meer) bestaat."
  },
  {
    id: 18,
    category: "Derived Attributes",
    question: "Hoe ga je in een database om met een 'Derived Attribute' (bv. TotaalBedrag)?",
    options: [
      { text: "Je slaat het altijd op in een kolom voor snelle toegang.", isCorrect: false },
      { text: "Je slaat het niet op, maar berekent het dynamisch wanneer nodig.", isCorrect: true },
      { text: "Je maakt er een aparte tabel voor met historische waarden.", isCorrect: false },
      { text: "Je maakt er een Primary Key van.", isCorrect: false }
    ],
    explanation: "Opslaan leidt tot inconsistentie (als de onderliggende data wijzigt, klopt het totaal niet meer). Berekenen is veiliger."
  },
  {
    id: 19,
    category: "Super-type / Sub-type",
    question: "Wat betekent 'Disjoint' specialisatie?",
    options: [
      { text: "Een instantie kan tot maximaal één subtype behoren.", isCorrect: true },
      { text: "Een instantie kan tot meerdere subtypes tegelijk behoren.", isCorrect: false },
      { text: "Een instantie hoeft tot geen enkel subtype te behoren.", isCorrect: false },
      { text: "Een instantie moet verplicht tot alle subtypes behoren.", isCorrect: false }
    ],
    explanation: "Disjoint (of 'Or') betekent dat er geen overlap is tussen de groepen (bv. Man/Vrouw)."
  },
  {
    id: 20,
    category: "UoD Modeling",
    question: "Wat is de definitie van 'Universe of Discourse' (UoD)?",
    options: [
      { text: "Het gehele internet en alle beschikbare data.", isCorrect: false },
      { text: "De specifieke context en grenzen van het systeem dat je modelleert.", isCorrect: true },
      { text: "De fysieke serveromgeving waarin de database draait.", isCorrect: false },
      { text: "De set van alle mogelijke SQL queries op een database.", isCorrect: false }
    ],
    explanation: "Het is de 'wereld' waarover je systeem gaat (bv. de administratie van één specifiek bedrijf)."
  },

  // --- Deel 2: Verdieping & Mapping (Vragen 21-50) ---
  {
    id: 21,
    category: "Normalisatie",
    question: "Een tabel bevat het veld 'Telefoonnummers' met waarden als '0475123, 0923456'. Welke normaalvorm wordt geschonden?",
    options: [
      { text: "1NF: De waarden zijn niet atomair.", isCorrect: true },
      { text: "2NF: Er is sprake van partiële afhankelijkheid.", isCorrect: false },
      { text: "3NF: Er is sprake van transitieve afhankelijkheid.", isCorrect: false },
      { text: "BCNF: De sleutel is niet uniek.", isCorrect: false }
    ],
    explanation: "Komma-gescheiden lijsten zijn niet atomair. Elk nummer moet apart opgeslagen worden."
  },
  {
    id: 22,
    category: "Relational Mapping",
    question: "Hoe implementeer je een 'Multivalued Attribute' (bv. Hobby's) correct in een database?",
    options: [
      { text: "Door meerdere kolommen te maken (Hobby1, Hobby2, Hobby3).", isCorrect: false },
      { text: "Door een aparte tabel te maken die linkt naar de hoofdtabel.", isCorrect: true },
      { text: "Door alle hobby's in één tekstveld te zetten.", isCorrect: false },
      { text: "Door de hoofdtabel te dupliceren voor elke hobby.", isCorrect: false }
    ],
    explanation: "Een aparte tabel (1:N) is de enige manier om flexibel oneindig veel hobby's toe te staan zonder 1NF te schenden."
  },
  {
    id: 23,
    category: "Relationship Degree",
    question: "Wat is een Ternary Relationship?",
    options: [
      { text: "Een relatie tussen twee entiteiten met drie attributen.", isCorrect: false },
      { text: "Een relatie waarbij drie entiteiten gelijktijdig betrokken zijn.", isCorrect: true },
      { text: "Een keten van drie tabellen die aan elkaar gelinkt zijn.", isCorrect: false },
      { text: "Een relatie die drie verschillende statussen kan hebben.", isCorrect: false }
    ],
    explanation: "Voorbeeld: Docent geeft Vak in Lokaal. De combinatie van die drie vormt de relatie."
  },
  {
    id: 24,
    category: "ERD Notation",
    question: "Hoe herken je een Identifying Relationship (voor Weak Entities) in Chen-notatie?",
    options: [
      { text: "Aan de dubbele ruit (dubbele omlijning).", isCorrect: true },
      { text: "Aan de enkele ruit met dikke lijnen.", isCorrect: false },
      { text: "Aan de stippellijn rond de relatie.", isCorrect: false },
      { text: "Aan de pijl die naar de zwakke entiteit wijst.", isCorrect: false }
    ],
    explanation: "Chen gebruikt dubbele lijnen (voor de rechthoek van de entiteit én de ruit van de relatie) om 'Weak' aan te duiden."
  },
  {
    id: 25,
    category: "Modelling Issues",
    question: "Waarom moet je de prijs van een product soms kopiëren naar de orderregel?",
    options: [
      { text: "Om de query performance te verbeteren.", isCorrect: false },
      { text: "Om de historische prijs vast te leggen zoals die was op het moment van bestelling.", isCorrect: true },
      { text: "Omdat de database anders niet voldoet aan de derde normaalvorm.", isCorrect: false },
      { text: "Omdat je geen joins mag gebruiken in financiële rapportages.", isCorrect: false }
    ],
    explanation: "Als je enkel naar de Product-tabel linkt, zie je de prijs van *vandaag*, niet die van *toen*."
  },
  {
    id: 26,
    category: "API Basics",
    question: "Welke statuscode is correct na een succesvolle POST request (resource aangemaakt)?",
    options: [
      { text: "200 OK", isCorrect: false },
      { text: "201 Created", isCorrect: true },
      { text: "204 No Content", isCorrect: false },
      { text: "202 Accepted", isCorrect: false }
    ],
    explanation: "201 is specifiek voor 'Created'. 200 is te algemeen, hoewel het soms gebruikt wordt."
  },
  {
    id: 27,
    category: "OpenAPI Spec",
    question: "Met welk keyword implementeer je overerving (inheritance) in een OpenAPI schema?",
    options: [
      { text: "oneOf", isCorrect: false },
      { text: "anyOf", isCorrect: false },
      { text: "allOf", isCorrect: true },
      { text: "extends", isCorrect: false }
    ],
    explanation: "`allOf` combineert schema's: 'Het moet voldoen aan Schema A (Basis) EN Schema B (Extra)'."
  },
  {
    id: 28,
    category: "OO Mapping",
    question: "Hoe map je een M:N relatie naar C# objecten (in-memory)?",
    options: [
      { text: "Door beide klassen een List/Collection van de andere klasse te geven.", isCorrect: true },
      { text: "Door een expliciete tussentabel-klasse te maken die verplicht is.", isCorrect: false },
      { text: "Door inheritance te gebruiken.", isCorrect: false },
      { text: "Door één kant de lijst te geven en de andere kant niets.", isCorrect: false }
    ],
    explanation: "In code (anders dan in DB) kunnen objecten direct lijsten van elkaar bevatten (`Student.Courses` en `Course.Students`)."
  },
  {
    id: 29,
    category: "Normalisatie (4NF)",
    question: "Wanneer treedt een schending van de Vierde Normaalvorm (4NF) op?",
    options: [
      { text: "Bij aanwezigheid van transitieve afhankelijkheden.", isCorrect: false },
      { text: "Bij aanwezigheid van onafhankelijke Multi-Valued Dependencies in één tabel.", isCorrect: true },
      { text: "Bij aanwezigheid van circulaire Join Dependencies.", isCorrect: false },
      { text: "Bij gebruik van samengestelde sleutels met meer dan 3 kolommen.", isCorrect: false }
    ],
    explanation: "Als je twee onafhankelijke lijsten (bv. Boeken en Docenten) in één platte tabel propt, krijg je een cartesisch product."
  },
  {
    id: 30,
    category: "Inheritance Mapping",
    question: "Wat is de 'Preferred' manier om inheritance naar een database te vertalen?",
    options: [
      { text: "Single Table: Alles in één tabel met veel NULL kolommen.", isCorrect: false },
      { text: "Concrete Table: Alleen tabellen voor de subtypes (data duplicatie).", isCorrect: false },
      { text: "Supertype + Subtype tabellen: Gedeelde data in parent, specifieke in child.", isCorrect: true },
      { text: "NoSQL mapping: Alles opslaan als JSON blob.", isCorrect: false }
    ],
    explanation: "Deze methode (Class Table Inheritance) is het schoonst qua normalisatie en NULL-waarden."
  },
  {
    id: 31,
    category: "Conceptual Modelling",
    question: "Wat vind je NIET terug in een Conceptueel Model?",
    options: [
      { text: "Entiteiten en Relaties.", isCorrect: false },
      { text: "Technische details zoals Foreign Keys en datatypes.", isCorrect: true },
      { text: "Business regels en cardinaliteiten.", isCorrect: false },
      { text: "Identificerende attributen (keys).", isCorrect: false }
    ],
    explanation: "Het conceptueel model gaat over 'wat', niet 'hoe'. Foreign Keys zijn een implementatiedetail."
  },
  {
    id: 32,
    category: "API Semantic URLs",
    question: "Welke URL-structuur is het meest 'RESTful' voor hiërarchische data?",
    options: [
      { text: "/getInvoices?id=123", isCorrect: false },
      { text: "/customers/123/invoices", isCorrect: true },
      { text: "/api/func/getCustomerInvoices/123", isCorrect: false },
      { text: "/data/table/invoices/filter/123", isCorrect: false }
    ],
    explanation: "Nesting toont de relatie: Facturen horen bij Klant 123."
  },
  {
    id: 33,
    category: "Entity Types",
    question: "Kan een Weak Entity weer de eigenaar zijn van een andere Weak Entity?",
    options: [
      { text: "Ja, dit creëert een keten van afhankelijkheid.", isCorrect: true },
      { text: "Nee, een eigenaar moet altijd een Strong Entity zijn.", isCorrect: false },
      { text: "Nee, want een Weak Entity heeft geen Primary Key.", isCorrect: false },
      { text: "Alleen als de relatie optioneel is.", isCorrect: false }
    ],
    explanation: "Ja, de 'kleinkind' entiteit neemt dan de sleutels van de grootouder én ouder mee in zijn identificatie."
  },
  {
    id: 34,
    category: "Constraints",
    question: "Wat betekent de constraint '{Disjoint, Mandatory}'?",
    options: [
      { text: "Een instantie mag kiezen, maar als hij kiest, mag het er maar één zijn.", isCorrect: false },
      { text: "Een instantie MOET tot een subtype behoren, en slechts tot ÉÉN.", isCorrect: true },
      { text: "Een instantie moet tot alle subtypes tegelijk behoren.", isCorrect: false },
      { text: "Een instantie is optioneel en mag overlappen.", isCorrect: false }
    ],
    explanation: "Mandatory = verplicht kiezen. Disjoint = exclusieve keuze."
  },
  {
    id: 35,
    category: "Normalisatie (5NF)",
    question: "Welk probleem pakt de Vijfde Normaalvorm (5NF) aan?",
    options: [
      { text: "Join Dependencies die niet afgedwongen worden door sleutels.", isCorrect: true },
      { text: "Multivalued attributes in 1NF.", isCorrect: false },
      { text: "Partiële afhankelijkheden in 2NF.", isCorrect: false },
      { text: "Transitieve afhankelijkheden in 3NF.", isCorrect: false }
    ],
    explanation: "5NF gaat over situaties waar data wel gesplitst kan worden, maar bij het samenvoegen (joinen) valse informatie oplevert."
  },
  {
    id: 36,
    category: "API Parameters",
    question: "Waarvoor gebruik je een Header Parameter in een API?",
    options: [
      { text: "Om data te filteren (zoals `?sort=desc`).", isCorrect: false },
      { text: "Om metadata mee te sturen (zoals Authenticatie tokens).", isCorrect: true },
      { text: "Om de ID van de resource aan te duiden.", isCorrect: false },
      { text: "Om de JSON body van het bericht te bevatten.", isCorrect: false }
    ],
    explanation: "Headers zijn voor de 'envelop', niet voor de brief zelf. Auth tokens horen hier thuis."
  },
  {
    id: 37,
    category: "ERD Relationships",
    question: "Wat is een Recursive (Unary) Relationship?",
    options: [
      { text: "Een relatie tussen een entiteit en zichzelf.", isCorrect: true },
      { text: "Een relatie die oneindig doorloopt.", isCorrect: false },
      { text: "Een relatie met slechts één attribuut.", isCorrect: false },
      { text: "Een relatie tussen een Parent en een Child tabel.", isCorrect: false }
    ],
    explanation: "Voorbeeld: Een Werknemer (Supervisor) stuurt een andere Werknemer (Subordinate) aan."
  },
  {
    id: 38,
    category: "C# Mapping",
    question: "Hoe map je een optioneel datumveld (`dateOfBirth`) naar C#?",
    options: [
      { text: "DateTime (standaard)", isCorrect: false },
      { text: "DateOnly? (Nullable)", isCorrect: true },
      { text: "String (omdat het leeg kan zijn)", isCorrect: false },
      { text: "DateTime.MinValue", isCorrect: false }
    ],
    explanation: "De `?` maakt het type nullable, wat overeenkomt met een optioneel veld in de database."
  },
  {
    id: 39,
    category: "Mapping Conceptual",
    question: "Wat is de best practice voor 'Derived Attributes' in een database?",
    options: [
      { text: "Altijd opslaan voor performance.", isCorrect: false },
      { text: "Niet opslaan, maar live berekenen.", isCorrect: true },
      { text: "Opslaan in een aparte caching tabel.", isCorrect: false },
      { text: "Ze omzetten naar Primary Keys.", isCorrect: false }
    ],
    explanation: "Opslaan schendt vaak de normalisatieregels (redundantie). Berekenen garandeert correctheid."
  },
  {
    id: 40,
    category: "Crow's Foot Syntax",
    question: "Welk symbool staat voor 'Optional One'?",
    options: [
      { text: "Een streepje en een kraaienpoot (`-|<`)", isCorrect: false },
      { text: "Een bolletje en een streepje (`-o|`)", isCorrect: true },
      { text: "Twee streepjes (`-||`)", isCorrect: false },
      { text: "Een bolletje en een kraaienpoot (`-o<`)", isCorrect: false }
    ],
    explanation: "Bolletje = 0 (optioneel), Streepje = 1 (maximaal één)."
  },
  {
    id: 41,
    category: "Change of UoD",
    question: "Wat gebeurt er vaak met Primary Keys als je systeem opschaalt (bv. meerdere filialen)?",
    options: [
      { text: "Ze worden eenvoudiger (alleen ID).", isCorrect: false },
      { text: "Ze moeten samengesteld worden (FiliaalID + LokaalID) om uniek te blijven.", isCorrect: true },
      { text: "Ze verdwijnen en worden vervangen door GUIDs.", isCorrect: false },
      { text: "Ze worden Foreign Keys.", isCorrect: false }
    ],
    explanation: "Lokaal uniek is niet meer genoeg. Je hebt een bredere scope nodig voor uniciteit."
  },
  {
    id: 42,
    category: "SQL vs NoSQL",
    question: "Wat is een Surrogaatsleutel (Surrogate Key)?",
    options: [
      { text: "Een sleutel met betekenis (bv. Rijksregisternummer).", isCorrect: false },
      { text: "Een betekenisloze, kunstmatige sleutel (bv. Auto-increment ID).", isCorrect: true },
      { text: "Een sleutel die uit meerdere kolommen bestaat.", isCorrect: false },
      { text: "Een sleutel die uit een andere tabel komt (FK).", isCorrect: false }
    ],
    explanation: "Wordt vaak gebruikt omdat natuurlijke sleutels (zoals namen) kunnen veranderen."
  },
  {
    id: 43,
    category: "Attributes",
    question: "Wat is een Composite Attribute?",
    options: [
      { text: "Een attribuut dat bestaat uit meerdere onderdelen (bv. Adres = Straat + Stad).", isCorrect: true },
      { text: "Een attribuut dat berekend wordt uit andere velden.", isCorrect: false },
      { text: "Een attribuut dat meerdere waarden kan hebben (lijst).", isCorrect: false },
      { text: "Een attribuut dat als Primary Key dient.", isCorrect: false }
    ],
    explanation: "In een database wordt dit vaak opgesplitst in losse kolommen."
  },
  {
    id: 44,
    category: "API Design",
    question: "Wat stuur je mee in de 'Body' van een HTTP request?",
    options: [
      { text: "De URL parameters.", isCorrect: false },
      { text: "De eigenlijke data (payload) bij POST/PUT calls.", isCorrect: true },
      { text: "De authenticatie headers.", isCorrect: false },
      { text: "De statuscode van het verzoek.", isCorrect: false }
    ],
    explanation: "De Body is de inhoud van de brief. De rest is de envelop/adres."
  },
  {
    id: 45,
    category: "Mapping OO",
    question: "Wat doet het 'Facade Pattern' bij OO-relaties?",
    options: [
      { text: "Het verbergt de database connectie string.", isCorrect: false },
      { text: "Het zorgt voor synchronisatie van bidirectionele relaties.", isCorrect: true },
      { text: "Het maakt van een klasse een interface.", isCorrect: false },
      { text: "Het dwingt Single Table Inheritance af.", isCorrect: false }
    ],
    explanation: "Het zorgt ervoor dat als je `A.add(B)` doet, `B` ook automatisch `A` aan zijn lijst toevoegt."
  },
  {
    id: 46,
    category: "Participation",
    question: "Wat betekent een enkele streep (`|`) in Chen-notatie?",
    options: [
      { text: "Total Participation (Verplicht).", isCorrect: false },
      { text: "Partial Participation (Optioneel).", isCorrect: true },
      { text: "Cardinaliteit 1.", isCorrect: false },
      { text: "Cardinaliteit N.", isCorrect: false }
    ],
    explanation: "Let op: in Chen is enkele lijn 'Partial'. In Crow's Foot is een streepje '1'. Context is belangrijk."
  },
  {
    id: 47,
    category: "Key Attributes",
    question: "Wanneer gebruik je een Composite Key?",
    options: [
      { text: "Als je geen autoincrement wilt gebruiken.", isCorrect: false },
      { text: "Als één attribuut niet genoeg is voor unieke identificatie (bv. in koppeltabellen).", isCorrect: true },
      { text: "Als de tabel meer dan 10 kolommen heeft.", isCorrect: false },
      { text: "Als je Foreign Keys wilt vermijden.", isCorrect: false }
    ],
    explanation: "Vaak bij M:N tussentabellen is de combinatie (A_ID, B_ID) de sleutel."
  },
  {
    id: 48,
    category: "Normalisatie (BCNF)",
    question: "Wat is de kernregel van BCNF?",
    options: [
      { text: "Geen transitieve afhankelijkheden.", isCorrect: false },
      { text: "Elke determinant moet een kandidaatsleutel zijn.", isCorrect: true },
      { text: "Geen lijsten in kolommen.", isCorrect: false },
      { text: "Geen partiële afhankelijkheden.", isCorrect: false }
    ],
    explanation: "Dit lost problemen op die 3NF laat liggen bij overlappende sleutels."
  },
  {
    id: 49,
    category: "Modelling Languages",
    question: "Waarom is ERD populairder dan FCO-IM?",
    options: [
      { text: "Het is nauwkeuriger.", isCorrect: false },
      { text: "Het is intuïtiever en geeft een beter globaal overzicht.", isCorrect: true },
      { text: "Het is de enige taal die SQL ondersteunt.", isCorrect: false },
      { text: "Het verplicht normalisatie.", isCorrect: false }
    ],
    explanation: "ERD is een goede balans tussen leesbaarheid en technische bruikbaarheid."
  },
  {
    id: 50,
    category: "API OpenAPI",
    question: "Wat doe je in de `components` sectie van OpenAPI?",
    options: [
      { text: "Je definieert de endpoints.", isCorrect: false },
      { text: "Je definieert herbruikbare datamodellen (schemas).", isCorrect: true },
      { text: "Je beschrijft de server URL.", isCorrect: false },
      { text: "Je configureert de database connectie.", isCorrect: false }
    ],
    explanation: "Hier definieer je wat een 'Klant' of 'Order' is, zodat je er in je paths naar kunt verwijzen."
  },

  // --- Deel 3: Tricky Questions & Details (Vragen 51-75) ---
  {
    id: 51,
    category: "Normalisatie (Strikvraag)",
    question: "Is een tabel met een enkelvoudige Primary Key (één kolom) altijd in 2NF?",
    options: [
      { text: "Nee, dat hangt af van transitieve afhankelijkheden.", isCorrect: false },
      { text: "Ja, want je kunt niet afhangen van een 'deel' van één kolom.", isCorrect: true },
      { text: "Nee, alleen als er geen vreemde sleutels zijn.", isCorrect: false },
      { text: "Ja, maar alleen als hij ook in BCNF staat.", isCorrect: false }
    ],
    explanation: "2NF gaat over deelsleutel-afhankelijkheid. Bij 1 kolom als sleutel zijn er geen deelsleutels."
  },
  {
    id: 52,
    category: "API Mapping",
    question: "Welke OpenAPI property gebruik je voor een veld dat de server stuurt (bv. 'created_at'), maar dat de client niet mag sturen?",
    options: [
      { text: "writeOnly: true", isCorrect: false },
      { text: "readOnly: true", isCorrect: true },
      { text: "hidden: true", isCorrect: false },
      { text: "required: false", isCorrect: false }
    ],
    explanation: "readOnly velden verschijnen in responses (GET), maar worden genegeerd/geweigerd in requests (POST/PUT)."
  },
  {
    id: 53,
    category: "OO Mapping (C#)",
    question: "Hoe implementeer je een berekend attribuut (bv. Leeftijd) best in C#?",
    options: [
      { text: "Als een statisch veld in de database.", isCorrect: false },
      { text: "Als een read-only property die de waarde live berekent.", isCorrect: true },
      { text: "Als een methode die je handmatig moet aanroepen.", isCorrect: false },
      { text: "Als een variabele die je elke nacht updatet.", isCorrect: false }
    ],
    explanation: "`public int Age => ...` zorgt ervoor dat de leeftijd altijd correct is op het moment van opvragen."
  },
  {
    id: 54,
    category: "ERD Relationships",
    question: "Waar hoort het attribuut van een 1:N relatie thuis (bv. DatumInschrijving)?",
    options: [
      { text: "Bij de Parent (1-kant).", isCorrect: false },
      { text: "Bij de Child (N-kant).", isCorrect: true },
      { text: "In een aparte tabel.", isCorrect: false },
      { text: "Dat mag niet, relaties hebben geen attributen.", isCorrect: false }
    ],
    explanation: "Het attribuut verhuist mee met de Foreign Key naar de 'Veel'-kant."
  },
  {
    id: 55,
    category: "Mapping Conceptual -> Relational",
    question: "Wat is een goede strategie voor een 1:1 relatie die aan beide kanten optioneel is?",
    options: [
      { text: "Samenvoegen tot één tabel met NULLs.", isCorrect: false },
      { text: "Een koppeltabel gebruiken om NULLs te vermijden.", isCorrect: true },
      { text: "Foreign keys in beide tabellen zetten.", isCorrect: false },
      { text: "Dit mag niet gemodelleerd worden.", isCorrect: false }
    ],
    explanation: "Omdat de relatie vaak *niet* bestaat, zou een FK in de tabel veel lege velden (NULL) opleveren. Een koppeltabel is schoner."
  },
  {
    id: 56,
    category: "API Status Codes",
    question: "Is een DELETE operatie idempotent, en welke code krijg je als het al weg is?",
    options: [
      { text: "Nee, de tweede keer krijg je een error.", isCorrect: false },
      { text: "Ja, het resultaat is hetzelfde (weg). Vaak 404 of 200/204.", isCorrect: true },
      { text: "Ja, je krijgt altijd 200 OK.", isCorrect: false },
      { text: "Nee, DELETE mag maar één keer aangeroepen worden.", isCorrect: false }
    ],
    explanation: "Idempotent betekent: eindsituatie is hetzelfde. Of je 1x of 10x delete, het item is weg."
  },
  {
    id: 57,
    category: "Change of UoD",
    question: "De regel verandert: 'Een werknemer kan meerdere rollen tegelijk hebben'. Wat gebeurt er met je Inheritance model?",
    options: [
      { text: "Het blijft inheritance, maar dan 'Overlapping'.", isCorrect: false },
      { text: "Inheritance vervalt; het wordt een compositie/relatie (M:N).", isCorrect: true },
      { text: "Je voegt gewoon meer tabellen toe.", isCorrect: false },
      { text: "Je maakt er een recursieve relatie van.", isCorrect: false }
    ],
    explanation: "Inheritance is 'Is-Een'. Als je meerdere rollen *hebt*, is het geen identiteit meer, maar een bezit/relatie."
  },
  {
    id: 58,
    category: "Normalisatie",
    question: "Wat is het verschil tussen 3NF en BCNF?",
    options: [
      { text: "Er is geen verschil, BCNF is een andere naam.", isCorrect: false },
      { text: "BCNF behandelt problemen met overlappende kandidaatsleutels.", isCorrect: true },
      { text: "3NF staat multivalued attributes toe, BCNF niet.", isCorrect: false },
      { text: "BCNF is minder streng dan 3NF.", isCorrect: false }
    ],
    explanation: "Het is een randgeval waar een deel van de sleutel afhangt van een niet-sleutel."
  },
  {
    id: 59,
    category: "ERD Notation",
    question: "Wat is een 'Discriminator' bij Weak Entities?",
    options: [
      { text: "De Foreign Key naar de eigenaar.", isCorrect: false },
      { text: "De Partial Key (het stukje dat lokaal uniek is).", isCorrect: true },
      { text: "De naam van de relatie.", isCorrect: false },
      { text: "Het type data van de sleutel.", isCorrect: false }
    ],
    explanation: "Bijvoorbeeld 'Volgnummer' bij een Orderregel. Uniek *binnen* de order, maar niet daarbuiten."
  },
  {
    id: 60,
    category: "OO Mapping",
    question: "Wat betekent `public Painting(int id) : base(id)` in C#?",
    options: [
      { text: "Dat de Painting klasse een eigen ID genereert.", isCorrect: false },
      { text: "Dat de constructor van de basisklasse (ArtObject) wordt aangeroepen.", isCorrect: true },
      { text: "Dat de ID parameter optioneel is.", isCorrect: false },
      { text: "Dat de klasse abstract is.", isCorrect: false }
    ],
    explanation: "Dit geeft de parameter door aan de parent constructor."
  },
  {
    id: 61,
    category: "API Design",
    question: "Waarom gebruik je versioning in URLS (bv. /v1/)?",
    options: [
      { text: "Om de server sneller te maken.", isCorrect: false },
      { text: "Om 'Breaking Changes' te ondersteunen zonder oude clients te breken.", isCorrect: true },
      { text: "Omdat REST dit verplicht stelt.", isCorrect: false },
      { text: "Om de URL leesbaarder te maken.", isCorrect: false }
    ],
    explanation: "Zo kan v1 blijven werken voor oude apps terwijl v2 nieuwe features krijgt."
  },
  {
    id: 62,
    category: "Modelling Issues",
    question: "Waarom is 'Tel1, Tel2, Tel3' in een tabel (Fixed attributes) een slecht idee?",
    options: [
      { text: "Het schendt 1NF (niet atomair).", isCorrect: false },
      { text: "Het is inflexibel (wat als je 4 nummers hebt?) en lastig doorzoekbaar.", isCorrect: true },
      { text: "Het neemt te veel opslagruimte in beslag.", isCorrect: false },
      { text: "SQL ondersteunt geen nummers in kolomnamen.", isCorrect: false }
    ],
    explanation: "Technisch mag het, maar semantisch is het een lijst. Je moet je structuur aanpassen voor data-uitbreiding."
  },
  {
    id: 63,
    category: "Mapping",
    question: "Hoe map je een recursieve relatie (Employee is manager van Employee)?",
    options: [
      { text: "Met een aparte tabel 'Managers'.", isCorrect: false },
      { text: "Met een Self-Referencing Foreign Key in dezelfde tabel.", isCorrect: true },
      { text: "Door de data te dupliceren.", isCorrect: false },
      { text: "Dit kan niet in een relationele database.", isCorrect: false }
    ],
    explanation: "De kolom `ManagerID` verwijst naar `EmployeeID` in dezelfde tabel."
  },
  {
    id: 64,
    category: "Constraints",
    question: "Wat betekent '{Disjoint, Optional}'?",
    options: [
      { text: "Verplicht één keuze.", isCorrect: false },
      { text: "Max één keuze, maar nul mag ook.", isCorrect: true },
      { text: "Meerdere keuzes toegestaan.", isCorrect: false },
      { text: "Altijd alles kiezen.", isCorrect: false }
    ],
    explanation: "Je hoeft geen subtype te zijn (Optional), maar als je er een bent, mag je niet overlappen (Disjoint)."
  },
  {
    id: 65,
    category: "API Parameter",
    question: "Verschil Path vs Query parameter?",
    options: [
      { text: "Path is voor IDs (verplicht), Query is voor filters (optioneel).", isCorrect: true },
      { text: "Query is veiliger dan Path.", isCorrect: false },
      { text: "Path kan lijsten bevatten, Query niet.", isCorrect: false },
      { text: "Er is geen verschil.", isCorrect: false }
    ],
    explanation: "Path is deel van de identiteit (`/resource/ID`). Query is modificatie (`?sort=asc`)."
  },
  {
    id: 66,
    category: "Normalisatie (4NF)",
    question: "Je stopt Cursus, Boeken en Docenten in één tabel, maar Boeken en Docenten staan los van elkaar. Welk probleem krijg je?",
    options: [
      { text: "Functionele afhankelijkheid.", isCorrect: false },
      { text: "Cartesisch product (Multi-valued dependency).", isCorrect: true },
      { text: "Cyclische afhankelijkheid.", isCorrect: false },
      { text: "Geen probleem, dit is efficiënt.", isCorrect: false }
    ],
    explanation: "Elke docent wordt gecombineerd met elk boek, wat leidt tot een explosie van rijen (4NF schending)."
  },
  {
    id: 67,
    category: "Conceptual vs Logical",
    question: "Hoort een Foreign Key in een Conceptueel Model?",
    options: [
      { text: "Ja, om de relaties te tonen.", isCorrect: false },
      { text: "Nee, relaties worden getekend met lijnen, niet met sleutels.", isCorrect: true },
      { text: "Alleen bij 1:N relaties.", isCorrect: false },
      { text: "Ja, maar optioneel.", isCorrect: false }
    ],
    explanation: "FK's zijn een implementatiedetail (Logisch/Fysiek). Conceptueel gaat over betekenis."
  },
  {
    id: 68,
    category: "OO Design",
    question: "Waarom gebruik je een Facade methode voor relaties?",
    options: [
      { text: "Om database transacties te starten.", isCorrect: false },
      { text: "Om de object-state consistent te houden (A wijst naar B, dus B moet naar A wijzen).", isCorrect: true },
      { text: "Om private variabelen publiek te maken.", isCorrect: false },
      { text: "Om polymorfisme toe te passen.", isCorrect: false }
    ],
    explanation: "Het voorkomt bugs waar de ene kant van de relatie wel bestaat en de andere niet in het geheugen."
  },
  {
    id: 69,
    category: "Mapping Inheritance",
    question: "Wat is het nadeel van Single Table Inheritance?",
    options: [
      { text: "Complexe joins nodig.", isCorrect: false },
      { text: "Veel NULL waarden (verspilde ruimte) en geen 'NOT NULL' constraints mogelijk op subtype-velden.", isCorrect: true },
      { text: "Trage performance bij inserts.", isCorrect: false },
      { text: "Niet ondersteund door de meeste databases.", isCorrect: false }
    ],
    explanation: "Alle kolommen van alle subtypes zitten in één tabel. Wat niet relevant is voor rij X, blijft leeg."
  },
  {
    id: 70,
    category: "ERD Basics",
    question: "Wat is de Universe of Discourse?",
    options: [
      { text: "De database server.", isCorrect: false },
      { text: "De scope en context van het systeem dat je modelleert.", isCorrect: true },
      { text: "De verzameling van alle entiteiten.", isCorrect: false },
      { text: "Het diagram zelf.", isCorrect: false }
    ],
    explanation: "Het is de afbakening van wat wel en niet bij je probleem hoort."
  },
  {
    id: 71,
    category: "API OpenAPI",
    question: "Verschil `oneOf` vs `anyOf`?",
    options: [
      { text: "`oneOf` = matcht exact 1 schema. `anyOf` = matcht 1 of meer.", isCorrect: true },
      { text: "Ze zijn hetzelfde.", isCorrect: false },
      { text: "`anyOf` is exclusiever dan `oneOf`.", isCorrect: false },
      { text: "`oneOf` mag niet gebruikt worden voor outputs.", isCorrect: false }
    ],
    explanation: "`anyOf` is toleranter (overlap mag). `oneOf` dwingt een strikte keuze af."
  },
  {
    id: 72,
    category: "Normalisatie",
    question: "Vak -> Docent. In tabel {Student, Vak, Docent} wordt de docent steeds herhaald. Welke fout?",
    options: [
      { text: "1NF fout.", isCorrect: false },
      { text: "2NF (als Vak deel van sleutel is) of 3NF (transitief).", isCorrect: true },
      { text: "Geen fout, dit is nodig.", isCorrect: false },
      { text: "BCNF fout.", isCorrect: false }
    ],
    explanation: "De docent hangt af van het Vak, niet van de Student. Dit moet gesplitst worden."
  },
  {
    id: 73,
    category: "Mapping Identifiers",
    question: "Wat is de PK van een Weak Entity tabel?",
    options: [
      { text: "Een eigen ID.", isCorrect: false },
      { text: "De PK van de Eigenaar + de eigen Partial Key.", isCorrect: true },
      { text: "De PK van de Eigenaar alleen.", isCorrect: false },
      { text: "De Partial Key alleen.", isCorrect: false }
    ],
    explanation: "Samengestelde sleutel is nodig voor unieke identificatie."
  },
  {
    id: 74,
    category: "C# Types",
    question: "Waarom `DateOnly?` voor 'Sterfdatum indien bekend'?",
    options: [
      { text: "Omdat tijd irrelevant is en de waarde kan ontbreken (NULL).", isCorrect: true },
      { text: "Omdat DateTime te veel geheugen kost.", isCorrect: false },
      { text: "Omdat C# geen DateTime ondersteunt.", isCorrect: false },
      { text: "Omdat het een string moet zijn.", isCorrect: false }
    ],
    explanation: "Semantiek: DateOnly voor datum zonder tijd. Nullable (?) voor optioneel."
  },
  {
    id: 75,
    category: "HTTP Verbs",
    question: "Is PUT idempotent?",
    options: [
      { text: "Nee, het maakt steeds nieuwe items.", isCorrect: false },
      { text: "Ja, 10x hetzelfde sturen heeft hetzelfde resultaat als 1x.", isCorrect: true },
      { text: "Ja, maar alleen bij deletes.", isCorrect: false },
      { text: "Nee, dat is POST.", isCorrect: false }
    ],
    explanation: "Idempotentie betekent dat het herhalen van de actie de serverstatus niet verder verandert."
  },
  // --- Deel 4: GraphQL Specialisatie (Vragen 76-100) ---
  {
    id: 76,
    category: "GraphQL Basics",
    question: "Wat is het fundamentele verschil tussen REST en GraphQL qua data-ophaling?",
    options: [
      { text: "REST heeft één endpoint, GraphQL heeft er meerdere per resource.", isCorrect: false },
      { text: "Bij REST bepaalt de server de response-structuur; bij GraphQL bepaalt de client exact welke velden terugkomen.", isCorrect: true },
      { text: "GraphQL gebruikt altijd JSON, REST gebruikt altijd XML.", isCorrect: false },
      { text: "GraphQL is alleen voor databases, REST is voor web services.", isCorrect: false }
    ],
    explanation: "Dit lost 'over-fetching' en 'under-fetching' op: de client vraagt: `{ user { name } }` en krijgt alleen de naam."
  },
  {
    id: 77,
    category: "GraphQL Schema (SDL)",
    question: "Je ziet de volgende definitie in een schema: `name: String!`. Wat betekent het uitroepteken?",
    options: [
      { text: "Dat dit veld uniek moet zijn (Primary Key).", isCorrect: false },
      { text: "Dat dit veld 'Non-Nullable' is (mag nooit null zijn).", isCorrect: true },
      { text: "Dat dit veld een lijst van Strings is.", isCorrect: false },
      { text: "Dat dit een verplicht argument is voor een filter.", isCorrect: false }
    ],
    explanation: "Het uitroepteken `!` dwingt af dat de server hier altijd een waarde moet teruggeven, nooit `null`."
  },
  {
    id: 78,
    category: "GraphQL Syntax",
    question: "Welke query is geldig om de naam van een gebruiker met ID 1 op te vragen?",
    options: [
      { text: "GET /graphql/user/1", isCorrect: false },
      { text: "query { user(id: \"1\") }", isCorrect: false },
      { text: "query { user(id: \"1\") { name } }", isCorrect: true },
      { text: "select name from user where id = 1", isCorrect: false }
    ],
    explanation: "In GraphQL moet je bij complexe types (zoals User) altijd een 'Selection Set' (de velden tussen accolades) specificeren."
  },
  {
    id: 79,
    category: "GraphQL Operations",
    question: "Je wilt gegevens in de database wijzigen (create/update/delete). Welk type operatie gebruik je?",
    options: [
      { text: "Query", isCorrect: false },
      { text: "Mutation", isCorrect: true },
      { text: "Subscription", isCorrect: false },
      { text: "Fragment", isCorrect: false }
    ],
    explanation: "`Query` is voor lezen (read), `Mutation` is voor schrijven (write), `Subscription` is voor live updates."
  },
  {
    id: 80,
    category: "GraphQL Schema",
    question: "Hoe definieer je een array (lijst) van Strings waarbij de lijst zelf niet null mag zijn, maar de items erin wel?",
    options: [
      { text: "[String]!", isCorrect: true },
      { text: "[String!]", isCorrect: false },
      { text: "[String!]: Required", isCorrect: false },
      { text: "Array<String>!", isCorrect: false }
    ],
    explanation: "`[String]!` betekent: de array bestaat altijd (geen null), maar mag `[null, \"A\", null]` bevatten. `[String!]` betekent: geen nulls in de lijst."
  },
  {
    id: 81,
    category: "GraphQL Advanced",
    question: "Wat is een 'Fragment' in GraphQL?",
    options: [
      { text: "Een gedeeltelijke foutmelding van de server.", isCorrect: false },
      { text: "Een herbruikbaar stukje query-logica (set van velden) om duplicatie te voorkomen.", isCorrect: true },
      { text: "Een database tabel die gesplitst is (sharding).", isCorrect: false },
      { text: "Een type query dat stopt halverwege de uitvoering.", isCorrect: false }
    ],
    explanation: "Met fragments kun je bv. `fragment UserFields on User { name, email }` definiëren en hergebruiken in meerdere queries."
  },
  {
    id: 82,
    category: "GraphQL vs REST",
    question: "Wat is 'Over-fetching'?",
    options: [
      { text: "Te veel requests sturen naar de server (DDoS).", isCorrect: false },
      { text: "Data ontvangen die je niet nodig hebt (bv. een volledig User object terwijl je alleen de naam toont).", isCorrect: true },
      { text: "Te complexe queries schrijven die de database vertragen.", isCorrect: false },
      { text: "Wanneer de server meer data heeft dan de database kan opslaan.", isCorrect: false }
    ],
    explanation: "Dit is een klassiek probleem van REST (vast endpoint) dat GraphQL oplost door veld-selectie."
  },
  {
    id: 83,
    category: "GraphQL Input",
    question: "Je wilt een complex object meegeven als argument aan een Mutation (bv. `createUser`). Welk keyword gebruik je in het schema?",
    options: [
      { text: "type", isCorrect: false },
      { text: "interface", isCorrect: false },
      { text: "input", isCorrect: true },
      { text: "schema", isCorrect: false }
    ],
    explanation: "Objecten die als argument dienen, moeten gedefinieerd worden als `input` (Input Types), niet als `type` (Output Types)."
  },
  {
    id: 84,
    category: "GraphQL Syntax",
    question: "Waarvoor dient een 'Alias' in een query?",
    options: [
      { text: "Om data van een extern systeem te halen.", isCorrect: false },
      { text: "Om hetzelfde veld twee keer op te vragen met verschillende argumenten en naambotsingen te voorkomen.", isCorrect: true },
      { text: "Om de naam van de database tabel te verbergen.", isCorrect: false },
      { text: "Om de query sneller te laten cachen.", isCorrect: false }
    ],
    explanation: "Voorbeeld: `admin: user(id:1) { name }` en `guest: user(id:2) { name }`. Zonder alias botst de key `user` in de JSON response."
  },
  {
    id: 85,
    category: "GraphQL Infrastructure",
    question: "Hoeveel endpoints heeft een typische GraphQL API?",
    options: [
      { text: "Eén per resource (bv. /users, /posts).", isCorrect: false },
      { text: "Exact één (meestal /graphql).", isCorrect: true },
      { text: "Twee: één voor lezen en één voor schrijven.", isCorrect: false },
      { text: "Dat hangt af van het aantal types in het schema.", isCorrect: false }
    ],
    explanation: "GraphQL bundelt alle operaties via één POST endpoint, in tegenstelling tot de vele endpoints van REST."
  },
  {
    id: 86,
    category: "GraphQL Introspection",
    question: "Hoe kom je erachter welke types en velden een GraphQL API beschikbaar heeft als je geen documentatie hebt?",
    options: [
      { text: "Door de broncode van de server te downloaden.", isCorrect: false },
      { text: "Door een `__schema` introspection query uit te voeren.", isCorrect: true },
      { text: "Door willekeurige velden te proberen tot het werkt.", isCorrect: false },
      { text: "Door de `OPTIONS` HTTP method te gebruiken.", isCorrect: false }
    ],
    explanation: "GraphQL is 'self-documenting'. Met `query { __schema { types { name } } }` vraag je de structuur op."
  },
  {
    id: 87,
    category: "GraphQL Error Handling",
    question: "Welke HTTP status code geeft een GraphQL server meestal terug als er een validatiefout in de query zit (bv. veld bestaat niet)?",
    options: [
      { text: "400 Bad Request", isCorrect: false },
      { text: "500 Internal Server Error", isCorrect: false },
      { text: "200 OK (met een 'errors' array in de body).", isCorrect: true },
      { text: "404 Not Found", isCorrect: false }
    ],
    explanation: "Instinker! GraphQL handelt errors af op applicatieniveau. De HTTP laag is vaak gewoon 200 OK, zelfs als de query faalt."
  },
  {
    id: 88,
    category: "GraphQL Types",
    question: "Wat is een 'Union Type' in GraphQL?",
    options: [
      { text: "Een type dat een combinatie is van twee scalars (bv. String + Int).", isCorrect: false },
      { text: "Een manier om aan te geven dat een veld één van meerdere verschillende object-types kan teruggeven.", isCorrect: true },
      { text: "Een manier om twee tabellen te joinen.", isCorrect: false },
      { text: "Het samenvoegen van twee queries in één request.", isCorrect: false }
    ],
    explanation: "Bijvoorbeeld `union SearchResult = User | Post`. In de query gebruik je dan `... on User { ... }`."
  },
  {
    id: 89,
    category: "GraphQL Syntax (Variables)",
    question: "Hoe geef je dynamische waarden (zoals een ID uit een formulier) veilig mee aan een query?",
    options: [
      { text: "Door string concatenation in de query string.", isCorrect: false },
      { text: "Via Query Variables (met de `$` syntax in de query definitie).", isCorrect: true },
      { text: "Door ze in de HTTP header te zetten.", isCorrect: false },
      { text: "Via @argument directives.", isCorrect: false }
    ],
    explanation: "Syntax: `query GetUser($id: ID!) { user(id: $id) { name } }`. Dit voorkomt injectie en maakt caching makkelijker."
  },
  {
    id: 90,
    category: "GraphQL Resolvers",
    question: "Wat is de functie van een 'Resolver'?",
    options: [
      { text: "Het valideren van de syntax van de query.", isCorrect: false },
      { text: "Een functie op de server die de data ophaalt voor een specifiek veld.", isCorrect: true },
      { text: "De client-side bibliotheek die de query verstuurt (zoals Apollo).", isCorrect: false },
      { text: "Het mechanisme dat schema's vertaalt naar SQL.", isCorrect: false }
    ],
    explanation: "Elk veld in een GraphQL schema wordt ondersteund door een resolver functie die de daadwerkelijke data (uit DB, REST API, etc.) haalt."
  },
  {
    id: 91,
    category: "GraphQL Subscriptions",
    question: "Welk onderliggend protocol wordt meestal gebruikt voor GraphQL Subscriptions?",
    options: [
      { text: "Standaard HTTP GET polling.", isCorrect: false },
      { text: "WebSockets.", isCorrect: true },
      { text: "FTP.", isCorrect: false },
      { text: "SOAP.", isCorrect: false }
    ],
    explanation: "Omdat subscriptions een open verbinding vereisen voor real-time updates, zijn WebSockets de standaard transportlaag."
  },
  {
    id: 92,
    category: "GraphQL Syntax (Code)",
    question: "Wat is er FOUT aan deze query?\n`query { users { name, address } }`\n(Aanname: Address is een object met Straat en Stad)",
    options: [
      { text: "Er ontbreekt een operatienaam.", isCorrect: false },
      { text: "Je mag geen komma's gebruiken tussen velden.", isCorrect: false },
      { text: "Het veld 'address' is een object, dus je moet sub-velden selecteren (bv. { street }).", isCorrect: true },
      { text: "Query moet met een hoofdletter beginnen.", isCorrect: false }
    ],
    explanation: "In GraphQL moet je altijd bladeren ('leaf selection') tot je bij scalaire waarden (String, Int, etc.) bent. Je kunt geen heel object opvragen zonder velden."
  },
  {
    id: 93,
    category: "GraphQL Schema",
    question: "Wat is het type `ID` in GraphQL?",
    options: [
      { text: "Een integer die automatisch oploopt.", isCorrect: false },
      { text: "Een string die bedoeld is als unieke identifier (wordt geserialiseerd als String).", isCorrect: true },
      { text: "Een speciaal database type.", isCorrect: false },
      { text: "Een UUID generator.", isCorrect: false }
    ],
    explanation: "`ID` is een scalar type. Het geeft aan dat het veld niet bedoeld is om leesbare tekst te zijn, maar een sleutel."
  },
  {
    id: 94,
    category: "GraphQL vs REST",
    question: "Wat is 'Under-fetching'?",
    options: [
      { text: "Wanneer een endpoint niet genoeg data teruggeeft, waardoor je een TWEEDE request moet doen.", isCorrect: true },
      { text: "Wanneer de server te traag reageert.", isCorrect: false },
      { text: "Wanneer je te weinig velden selecteert in je query.", isCorrect: false },
      { text: "Het omgekeerde van caching.", isCorrect: false }
    ],
    explanation: "In REST: Je haalt `/user/1` op, maar krijgt de posts niet. Dan moet je nog `/user/1/posts` aanroepen (N+1 probleem)."
  },
  {
    id: 95,
    category: "GraphQL Directives",
    question: "Wat doet de directive `@deprecated(reason: \"Use newField instead\")` in een schema?",
    options: [
      { text: "Het verwijdert het veld direct uit de API.", isCorrect: false },
      { text: "Het zorgt ervoor dat clients een error krijgen als ze het veld gebruiken.", isCorrect: false },
      { text: "Het markeert het veld als verouderd in de documentatie/introspection, maar het werkt nog wel.", isCorrect: true },
      { text: "Het verbergt het veld voor authenticatie.", isCorrect: false }
    ],
    explanation: "Dit is de vriendelijke manier om API's te evolueren zonder 'Breaking Changes'."
  },
  {
    id: 96,
    category: "GraphQL N+1 Problem",
    question: "Wat is het 'N+1 probleem' waar GraphQL servers vaak last van hebben (zonder optimalisatie)?",
    options: [
      { text: "Dat de server N+1 keer crasht.", isCorrect: false },
      { text: "Dat voor een lijst van N items, de server 1 query doet voor de lijst, en dan N aparte queries voor de geneste data van elk item.", isCorrect: true },
      { text: "Dat je 1 query stuurt en N+1 antwoorden krijgt.", isCorrect: false },
      { text: "Dat arrays altijd index N+1 hebben.", isCorrect: false }
    ],
    explanation: "Oplossing hiervoor is vaak het 'DataLoader' pattern (batching)."
  },
  {
    id: 97,
    category: "GraphQL Syntax",
    question: "Welke syntax is correct om een query een naam te geven?",
    options: [
      { text: "query = GetMyData { ... }", isCorrect: false },
      { text: "query GetMyData { ... }", isCorrect: true },
      { text: "named query GetMyData { ... }", isCorrect: false },
      { text: "{ GetMyData ... }", isCorrect: false }
    ],
    explanation: "Het benoemen van queries (`query GetMyData`) is 'best practice' voor debugging en logging aan de serverkant."
  },
  {
    id: 98,
    category: "GraphQL Interfaces",
    question: "Wanneer gebruik je een 'Interface' in je schema?",
    options: [
      { text: "Als je wilt dat verschillende object-types een gemeenschappelijke set velden delen.", isCorrect: true },
      { text: "Als je connectie maakt met een SQL database.", isCorrect: false },
      { text: "Als je een GUI wilt bouwen.", isCorrect: false },
      { text: "Als je input validatie wilt doen.", isCorrect: false }
    ],
    explanation: "Bv. `interface Character { name: String }`. Types `Human` en `Droid` implementeren deze interface en hebben dus beiden een naam."
  },
  {
    id: 99,
    category: "GraphQL Schema",
    question: "Wat betekent `[String!]` (zonder uitroepteken op het einde)?",
    options: [
      { text: "De lijst zelf mag null zijn, maar ALS de lijst bestaat, mogen de items erin GEEN null zijn.", isCorrect: true },
      { text: "De lijst mag niet null zijn, en de items ook niet.", isCorrect: false },
      { text: "De lijst mag null zijn, en de items mogen ook null zijn.", isCorrect: false },
      { text: "Dit is geen geldige syntax.", isCorrect: false }
    ],
    explanation: "De plaats van het uitroepteken is cruciaal. Binnen de haken = item check. Buiten de haken = lijst check."
  },
  {
    id: 100,
    category: "GraphQL Architecture",
    question: "Is GraphQL gebonden aan een specifieke database (zoals GraphDB)?",
    options: [
      { text: "Ja, het werkt alleen met Graph databases.", isCorrect: false },
      { text: "Ja, het werkt alleen met JSON stores (Mongo).", isCorrect: false },
      { text: "Nee, het is database-agnostisch en kan data halen uit SQL, NoSQL, REST API's of zelfs bestanden.", isCorrect: true },
      { text: "Ja, het is eigendom van Facebook dus werkt alleen met hun stack.", isCorrect: false }
    ],
    explanation: "GraphQL is een query taal voor je API, niet voor je database. De resolvers bepalen waar de data vandaan komt."
  }
];
# 📚 Mock Exam - Complete Study Guide

Dit is een **volledige oefening-examen** voor Web Technology. Elke vraag test specifieke JavaScript/TypeScript concepten die je moet kennen.

---

## 📋 Inhoud van deze README

- [Vraag 1: JavaScript Basics](#vraag-1-javascript-basics)
- [Vraag 2: Labyrinth Game (OOP)](#vraag-2-labyrinth-game-oop)
- [Vraag 3: Taylor Swift API (Async)](#vraag-3-taylor-swift-api-async)
- [Vraag 4: Super Mario (TypeScript)](#vraag-4-super-mario-typescript)
- [Hoe te leren](#hoe-te-leren)

---

## ❓ Vraag 1: JavaScript Basics

**Bestand:** [`files/question1.js`](files/question1.js)

**Wat wordt getest:**
- Object methods (`Object.values()`)
- Array methods (`.reduce()`, `.map()`)
- Math functions (`Math.min()`, `Math.max()`)
- Destructuring assignment
- Function parameters en return values

### 📖 Stap 1: Bereken totale winkelmandje kosten

```javascript
// PROBLEM: Je hebt een object met fruit en prijzen
const shoppingBasket = {
  Apples: 3.45,
  Bananas: 4.05,
  Lemons: 2.00
};

// OPLOSSING: Loop door alle waarden en tel ze op
function calculateTotalCost(shoppingBasket) {
  let total = 0;
  
  // Object.values() haalt alle prijzen uit het object
  for (const price of Object.values(shoppingBasket)) {
    total += price;
  }
  
  return total; // 9.5
}
```

**Waarom dit werkt:**
- `Object.values(shoppingBasket)` geeft: `[3.45, 4.05, 2.00]`
- Loop telt alles op: `3.45 + 4.05 + 2.00 = 9.5`

### 📖 Stap 2: Bereken statistieken (Advanced)

```javascript
// PROBLEM: Je hebt een array met getallen: [5, 3, 4]
// Je wilt: minimum, maximum, gemiddelde, totaal

function calculateStatistics(values) {
  // SUM: alle getallen optellen
  const sum = values.reduce((acc, value) => acc + value, 0);
  // reduce start met 0, dan 0+5=5, 5+3=8, 8+4=12
  
  // AVERAGE: som gedeeld door aantal
  const average = sum / values.length;
  
  // MIN: kleinste getal
  const min = Math.min(...values);
  // ... spreads [5,3,4] naar 5, 3, 4 als aparte argumenten
  
  // MAX: grootste getal
  const max = Math.max(...values);
  
  // Return object met alle resultaten
  return {
    minimum: min,      // 3
    maximum: max,      // 5
    average: average,  // 4
    total: sum        // 12
  };
}
```

**Destructuring gebruiken:**

```javascript
// Je hoeft niet het hele object op te vragen
const result = calculateStatistics([5, 3, 4]);
console.log(result.minimum, result.maximum, ...);

// BETER: Pak wat je nodig hebt
const { minimum, maximum, average, total } = calculateStatistics([5, 3, 4]);
console.log(minimum, maximum, average, total);
// Output: 3 5 4 12
```

**Leerpunt:** Destructuring maakt code leesbaar en korter!

---

## ❓ Vraag 2: Labyrinth Game (OOP)

**Bestanden:**
- [`files/labyrinth/player.js`](files/labyrinth/player.js)
- [`files/labyrinth/tile.js`](files/labyrinth/tile.js)
- [`files/labyrinth/game.js`](files/labyrinth/game.js)

**Wat wordt getest:**
- Classes en constructors
- Inheritance (`extends`)
- Private fields (`#`)
- Static methods
- Private methods
- Map datastructuur

### 📖 Stap 1: Player Klasse

```javascript
// PROBLEM: Je hebt spelers die een naam en kleur hebben

class Player {
  constructor(name, pawncolor) {
    this.name = name;           // "Alice"
    this.pawncolor = pawncolor; // "red"
  }
}

// Zo gebruik je het:
const player1 = new Player("Alice", "red");
console.log(player1.name); // "Alice"
```

**Waarom classes:**
- Beter dan objecten voor hergebruik
- Constructor organiseert initialisatie
- Makkelijker om aan uit te breiden

### 📖 Stap 2: Tile Klasse (met random)

```javascript
// PROBLEM: Doolhof bestaat uit tegels met:
// - 4 muren (elke richting ja/nee)
// - Optioneel een schat

const treasures = ["Bag of Gold Coins", "Dragon", "Ghost"];

class Tile {
  constructor(walls, treasure) {
    this.walls = walls;         // [top, right, bottom, left]
    this.treasure = treasure;   // undefined of een schat
  }

  // STATIC METHOD = hoort bij klasse, niet bij instance
  static randomTile() {
    // Elk hokje heeft 20% kans op muur
    const walls = [
      Math.random() < 0.2,  // top
      Math.random() < 0.2,  // right
      Math.random() < 0.2,  // bottom
      Math.random() < 0.2   // left
    ];
    
    // 50% kans op schat
    const treasure = Math.random() > 0.5 
      ? undefined 
      : treasures[Math.floor(Math.random() * treasures.length)];
    
    return new Tile(walls, treasure);
  }
}

// Zo gebruik je het:
const randomTile = Tile.randomTile(); // ← static method!
```

**Waarom static:**
- `Tile.randomTile()` - roepen op de klasse zelf
- Niet `new Tile().randomTile()` - dat zou dom zijn

### 📖 Stap 3: TeleportationTile (Inheritance)

```javascript
// PROBLEM: Sommige tegels teleporteren naar ander tegel

class TeleportationTile extends Tile {
  // extends = erft over van Tile
  
  constructor(walls, treasure, linkedTile) {
    // super() roept Tile constructor aan
    super(walls, treasure);
    
    // Voeg extra eigenschap toe
    this.linkedTile = linkedTile;
  }
}

// Voorbeeld:
const tile1 = new TeleportationTile([false, false, false, false], undefined, null);
tile1.linkedTile = tile2; // Setup teleportatie
```

**Inheritance voordeel:**
- `TeleportationTile` heeft alles van `Tile`
- Plus extra `linkedTile` property
- Code hergebruik!

### 📖 Stap 4: Game Klasse (Orchestrator)

```javascript
// PROBLEM: Game moet:
// - Doolhof genereren
// - Spelers toevoegen
// - Grootte beheren

class Game {
  // PRIVATE FIELDS: alleen in deze klasse zichtbaar
  #rows;
  #cols;

  constructor(rows, cols) {
    this.#rows = rows;
    this.#cols = cols;
    this.players = new Map();
    this.#initializemaze(rows, cols);
  }

  // PRIVATE METHOD: niet van buiten af aanroepbaar
  #initializemaze(rows, cols) {
    this.maze = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        // Vul grid met willekeurige tegels
        row.push(Tile.randomTile());
      }
      this.maze.push(row);
    }
  }

  // PUBLIC METHOD
  addPlayer(name, color) {
    const player = new Player(name, color);
    this.players.set(player, [0, 0]); // Start positie [0, 0]
  }

  // GETTERS: als property aanroepen
  get rows() {
    return this.#rows;
  }

  get cols() {
    return this.#cols;
  }
}

// Gebruik:
const game = new Game(10, 10);
game.addPlayer("Alice", "red");
console.log(game.rows); // 10 (als property!)
```

**Private fields (#) voordeel:**
- Beschermt interne data
- Kan niet van buiten af aangepast worden
- Betere encapsulation

---

## ❓ Vraag 3: Taylor Swift API (Async)

**Bestanden:**
- [`files/taylor-swift/question3a.js`](files/taylor-swift/question3a.js) - Promise pattern
- [`files/taylor-swift/question3b.js`](files/taylor-swift/question3b.js) - Async/Await pattern

**Wat wordt getest:**
- Fetch API (HTTP requests)
- Promise chaining (`.then()`)
- Promise.all() (parallelle requests)
- Async/await syntax
- API data manipulatie

### 📖 Vraag 3a: Promise Pattern

```javascript
// PROBLEM: API geeft albums, elk album heeft tracks
// Je wilt: alle tracks van een album fetchen

function getFullAlbum(albumId) {
  // STAP 1: Fetch album
  return fetch(`http://localhost:3000/albums/${albumId}`)
    // STAP 2: Convert response naar JSON
    .then(res => res.json())
    .then(album => {
      // STAP 3: Get alle track IDs
      const trackIds = album.tracks.map(track => track.id);
      
      // STAP 4: Fetch ALLE tracks TEGELIJKERTIJD (parallel!)
      // Promise.all() wacht tot alles klaar is
      return Promise.all(
        trackIds.map(trackId => 
          fetch(`http://localhost:3000/songs/${trackId}`)
            .then(res => res.json())
        )
      );
    });
}

// Gebruiken:
getFullAlbum(9)
  .then(tracks => console.log(tracks))
  .catch(error => console.error(error));
```

**Promise chaining werking:**

```
fetch() → Response
  .then(res => res.json()) → Parse JSON
    .then(album => {...}) → Werk met data
      return Promise.all([...]) → Wacht op alles
        .then(tracks => {...}) → Klaar!
```

### 📖 Vraag 3b: Async/Await Pattern

```javascript
// EXACT DEZELFDE FUNCTIONALITEIT, MAAR MODERNER

async function getFullAlbum(albumId) {
  // Await pauzeert tot promise klaar is
  const request = await fetch(`http://localhost:3000/albums/${albumId}`);
  const album = await request.json();

  // Get track IDs
  const trackIds = album.tracks.map(track => track.id);
  
  // Fetch alle tracks parallel
  const trackRequests = await Promise.all(
    trackIds.map(trackId => fetch(`http://localhost:3000/songs/${trackId}`))
  );
  
  // Parse alle JSON responses
  const tracks = await Promise.all(
    trackRequests.map(trackRequest => trackRequest.json())
  );
  
  return tracks;
}

// Gebruiken (ziet er hetzelfde uit):
const tracks = await getFullAlbum(9);
console.log(tracks);
```

**Verschil Promise vs Async/Await:**

| Promise | Async/Await |
|---------|------------|
| `.then().then().then()` | `await await await` |
| Moeilijker te lezen | Ziet er normaal uit |
| Callbacks nested | Top-to-bottom |
| Oud patroon | Modern (ES2017+) |

**Leerpunt:** Async/Await is beter! Maar beide werken.

### 📖 Complexe functie: Meest populaire album

```javascript
// PROBLEM: Elk album heeft tracks met popularity scores
// Je wilt het album met GEMIDDELD hoogste popularity

async function getMostPopularAlbum() {
  // STAP 1: Haal alle albums
  const albums = await fetch(`http://localhost:3000/albums`)
    .then(res => res.json());
  
  // STAP 2: Bereken popularity per album (PARALLEL!)
  const averages = await Promise.all(
    albums.map(album => getAveragePopularity(album.id))
  );
  
  // STAP 3: Vind de MAXIMUM popularity
  const maxAverage = Math.max(...averages);
  
  // STAP 4: Return het album met deze score
  return albums[averages.indexOf(maxAverage)];
}

// Gebruiken:
const topAlbum = await getMostPopularAlbum();
console.log(topAlbum.title); // "The Tortured Poets Department"
```

---

## ❓ Vraag 4: Super Mario (TypeScript)

**Bestanden:**
- [`files/super-mario/ts/index.ts`](files/super-mario/ts/index.ts) - Main app
- [`files/super-mario/ts/api/responses/character.ts`](files/super-mario/ts/api/responses/character.ts) - Interfaces
- [`files/super-mario/index.html`](files/super-mario/index.html) - HTML

**Wat wordt getest:**
- TypeScript interfaces
- Type annotations
- Type-safe querySelector
- Template cloning
- DOM manipulation
- Frontend architecture

### 📖 Stap 1: TypeScript Interfaces definiëren

```typescript
// PROBLEM: API geeft character data
// Je wilt: type-checking zodat je zeker bent van data

// Interface = contract dat object moet volgen
interface Character {
  name: string,      // Naam van karakter
  image: string,     // URL naar afbeelding
  summary: string,   // Korte beschrijving
  text: string       // Lange beschrijving
}

// API response format
interface CharacterResponse {
  characters: Character[];  // Array van karakters
}

// Export zodat andere files het kunnen gebruiken
export { Character, CharacterResponse };
```

**Type-safety voordeel:**
- TypeScript checkt: "Is dit echt een Character?"
- Gaat fout als je `.namme` probeert (typo!)
- IDE autocomplete werkt perfect

### 📖 Stap 2: Fetch met Types

```typescript
import { Character, CharacterResponse } from "./api/responses/character.js"

const BASEURL: string = "http://localhost:3000/supermario";

async function fetchCharacters() : Promise<Character[]> {
  // Fetch API
  const response : Response = await fetch(`${BASEURL}/characters`);
  
  // Parse JSON met type
  const result : CharacterResponse = await response.json();
  
  // Return characters array
  return result.characters;
}
```

**Type-annotations betekenis:**
- `const BASEURL: string` = "Dit moet een string zijn"
- `Promise<Character[]>` = "Dit geeft Promise terug met Character array"
- `: Response` = "Dit is een Response object"

### 📖 Stap 3: Template Cloning (Efficient rendering)

```typescript
// PROBLEM: Je hebt 7 karakters
// Je wilt niet 7x dezelfde HTML schrijven

// HTML:
/*
<template id="character-template">
  <article>
    <h2></h2>
    <img src="#" alt="">
    <p class="summary"></p>
    <p></p>
  </article>
</template>
*/

// JavaScript - Clone en vul
function getCharacterElement(character: Character) : HTMLElement {
  // STAP 1: Clone template
  const $element: HTMLElement = 
    document.querySelector<HTMLTemplateElement>("#character-template")!
      .content.firstElementChild
      ?.cloneNode(true) as HTMLElement;
  
  // STAP 2: Vul data in
  $element.querySelector("h2")!.innerText = character.name;
  $element.querySelector("img")!.src = character.image;
  $element.querySelector(".summary")!.innerText = character.summary;
  $element.querySelector("p:last-child")!.innerText = character.text;
  
  return $element;
}
```

**Template voordelen:**
- Schrijf HTML eenmalig
- Clone het voor elke character
- Veel efficiënter dan herhalen

### 📖 Stap 4: Render op pagina

```typescript
async function init() : Promise<void> {
  // Fetch all characters
  const characters: Character[] = await fetchCharacters();
  
  // Selecteer main element
  const $main: HTMLElement = document.querySelector("main")!;
  
  // Loop en render
  characters.forEach((character: Character) => {
    const $element = getCharacterElement(character);
    $main.insertAdjacentElement("beforeend", $element);
  });
}

// Start app
init();
```

**Cascade effect:**
1. `init()` wordt aangeroepen
2. `fetchCharacters()` haalt data
3. Voor elk karakter: `getCharacterElement()` + insert
4. Pagina vol met karakters!

---

## 🎓 Hoe te leren

### Stap 1: Begrijp CONCEPT
- Lees comments in bestanden
- Zie welk probleem het oplost
- Begrijp WAAROM dit patroon gebruikt wordt

### Stap 2: Run de code
```bash
# Vraag 1 (Node.js)
node files/question1.js

# Vraag 2 (Node.js)
node files/labyrinth/game.js

# Vraag 3 (met API server)
node files/taylor-swift/question3a.js

# Vraag 4 (browser)
# Open files/super-mario/index.html in browser
```

### Stap 3: Verander de code
- Probeer waarden aan te passen
- Voeg console.log() toe om waarden te zien
- Break het expres en fix het

### Stap 4: Schrijf zelf
- Sluit bestanden
- Schrijf dezelfde code zelf
- Controleer met origineel

---

## 💡 Kernconcepten per Vraag

| Vraag | Concept | Niveau |
|-------|---------|--------|
| 1 | Array/Object methods, destructuring | 🟢 Basis |
| 2 | Classes, inheritance, private fields | 🟡 Gemiddeld |
| 3 | Async/Promise, parallelle requests | 🟡 Gemiddeld |
| 4 | TypeScript, DOM, templates | 🟠 Geavanceerd |

---

## 🚀 Aanvullende Topics

Na deze oefening kan je kijken naar:
- Error handling (try/catch)
- Testing (Jest)
- Module systems (import/export)
- Advanced TypeScript (generics, unions)
- DOM events (click handlers, etc.)

---

**Veel succes! 💪**

*Deze README is een complete study guide. Lees het samen met de code-bestanden.*

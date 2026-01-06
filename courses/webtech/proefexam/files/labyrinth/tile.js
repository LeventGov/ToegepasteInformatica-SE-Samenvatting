// ============================================
// LABYRINTH GAME - Tile Class
// ============================================
// De Tile klasse representeert één hokje in het doolhof
// Elk hokje kan muren hebben en schatten bevatten
// ============================================

// STAP 1: Definieer mogelijke schatten in het spel
const treasures = [
  "Bag of Gold Coins",
  "Bat",
  "Book with Clasp",
  "Dragon",
  "Ghost (in bottle)",
  "Ghost (waving)",
  "Gold Crown"
];

// STAP 2: Basis Tile klasse
class Tile {
  // STAP 2a: Constructor - maakt een tegel met muren en mogelijk een schat
  constructor(walls, treasure) {
    // walls is een array van 4 booleans: [top, right, bottom, left]
    // true = muur aanwezig, false = geen muur
    this.walls = walls;
    
    // treasure kan undefined zijn (geen schat) of een string (welk schat)
    this.treasure = treasure;
  }

  // STAP 2b: Static method - genereer willekeurige tegel
  // Static betekent: je roept deze op via Tile.randomTile(), niet via instance
  static randomTile() {
    // STAP 2b-i: Maak willekeurige muren
    // Elke richting heeft 20% kans op een muur (0.2 probability)
    const walls = [
      Math.random() < 0.2,  // top muur
      Math.random() < 0.2,  // right muur
      Math.random() < 0.2,  // bottom muur
      Math.random() < 0.2   // left muur
    ];
    
    // STAP 2b-ii: Maak willekeurige schat
    // 50% kans op een schat, kies willekeurig uit treasures array
    const treasure = Math.random() > 0.5 
      ? undefined  // geen schat
      : treasures[Math.floor(Math.random() * treasures.length)];  // willekeurige schat
    
    // STAP 2b-iii: Retourneer nieuwe tegel met gegenereerde data
    return new Tile(walls, treasure);
  }
}

// STAP 3: Speciale TeleportationTile klasse
// Dit erft over van Tile (extends) en voegt teleportatie toe
class TeleportationTile extends Tile {
  // STAP 3a: Constructor - het meeste is hetzelfde als Tile
  constructor(walls, treasure, linkedTile) {
    // STAP 3a-i: Roep de parent (Tile) constructor aan met super()
    // Dit zorgt dat walls en treasure correct ingesteld worden
    super(walls, treasure);
    
    // STAP 3a-ii: Voeg teleportatie eigenschap toe
    // linkedTile is de tegel waarheen deze tegel teleporteert
    this.linkedTile = linkedTile;
  }
}

export { Tile };

// ============================================
// LABYRINTH GAME - Game Class
// ============================================
// De Game klasse beheer het gehele doolhof spel:
// - Maak het labyrint (grid van tegels)
// - Voeg spelers toe
// - Beheer spelerstaten
// ============================================

import { Tile } from "./tile.js";
import { Player } from "./player.js";

class Game {
  // STAP 1: Private fields (#) - alleen toegankelijk in deze klasse
  #rows;    // aantal rijen in het doolhof
  #cols;    // aantal kolommen in het doolhof

  // STAP 2: Constructor - initialiseer het spel
  constructor(rows, cols) {
    // STAP 2a: Sla grid afmetingen op (private)
    this.#rows = rows;
    this.#cols = cols;
    
    // STAP 2b: Maak Map voor spelers
    // Map is zoals een Object maar beter voor dynamische sleutels
    // Key = Player object, Value = [row, col] positie
    this.players = new Map();
    
    // STAP 2c: Genereer het labyrint met willekeurige tegels
    this.#initializemaze(rows, cols);
  }

  // STAP 3: Private methode - maak doolhof
  // Private (#) betekent je kan dit niet van buiten af aanroepen
  #initializemaze(rows, cols) {
    // STAP 3a: Maak lege maze array
    this.maze = [];
    
    // STAP 3b: Loop door elke rij
    for (let i = 0; i < rows; i++) {
      const row = [];
      
      // STAP 3c: Loop door elke kolom in deze rij
      for (let j = 0; j < cols; j++) {
        // STAP 3c-i: Voeg willekeurige tegel toe aan deze positie
        // Tile.randomTile() genereert een tegel met willekeurige muren en schatten
        row.push(Tile.randomTile());
      }
      
      // STAP 3d: Voeg deze rij toe aan het maze
      this.maze.push(row);
    }
  }

  // STAP 4: Voeg speler toe aan het spel
  addPlayer(name, color) {
    // STAP 4a: Maak nieuwe Player instance
    const player = new Player(name, color);
    
    // STAP 4b: Voeg speler toe aan Map met start positie [0, 0] (linksboven)
    this.players.set(player, [0, 0]);
  }

  // STAP 5: Getter voor rows - kan je aanroepen zonder ()
  // Dit is veiliger dan public field omdat je er niet in kan schrijven
  get rows() {
    return this.#rows;
  }

  // STAP 6: Getter voor cols - zelfde idee als rows
  get cols() {
    return this.#cols;
  }
}

export { Game };

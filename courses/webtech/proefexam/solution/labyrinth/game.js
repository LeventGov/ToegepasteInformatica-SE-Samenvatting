import { Tile } from "./tile.js";
import { Player } from "./player.js";

class Game {

  #rows;
  #cols;

  constructor(rows, cols) {
    this.#rows = rows;
    this.#cols = cols;
    this.players = new Map();
    this.#initializemaze(rows, cols);
  }

  #initializemaze(rows, cols) {
    this.maze = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(Tile.randomTile());
      }
      this.maze.push(row);
    }
  }

  addPlayer(name, color) {
    const player = new Player(name, color);
    this.players.set(player, [0, 0]);
  }

  get rows() {
    return this.#rows;
  }

  get cols() {
    return this.#cols;
  }
}
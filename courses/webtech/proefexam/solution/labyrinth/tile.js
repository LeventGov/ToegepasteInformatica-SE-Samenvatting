const treasures = ["Bag of Gold Coins", "Bat", "Book with Clasp", "Dragon", "Ghost (in bottle)", "Ghost (waving)", "Gold Crown"];

class Tile {

  constructor(walls, treasure) {
    this.walls = walls;
    this.treasure = treasure;
  }

  static randomTile() {
    const walls = [Math.random() < 0.2, Math.random() < 0.2, Math.random() < 0.2, Math.random() < 0.2];
    const treasure = Math.random() > 0.5 ? undefined : treasures[Math.floor(Math.random() * treasures.length)];
    return new Tile(walls, treasure);
  }
}

class TeleportationTile extends Tile {

  constructor(walls, treasure, linkedTile) {
    super(walls, treasure);
    this.linkedTile = linkedTile;
  }
}

export { Tile };
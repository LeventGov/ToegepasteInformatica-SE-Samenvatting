// ============================================
// LABYRINTH GAME - Player Class
// ============================================
// De Player klasse representeert een speler in het spel
// Dit is de basis voor OOP (Object-Oriented Programming)
// ============================================

class Player {
  // STAP 1: Constructor - wordt aangeroepen als je new Player() maakt
  // Dit is waar je initiële data (properties) van de speler instel
  constructor(name, pawncolor) {
    // STAP 1a: Sla spelernaam op
    this.name = name;
    
    // STAP 1b: Sla pion kleur op (hoe ziet de speler er uit op het bord)
    this.pawncolor = pawncolor;
  }
}

export { Player };

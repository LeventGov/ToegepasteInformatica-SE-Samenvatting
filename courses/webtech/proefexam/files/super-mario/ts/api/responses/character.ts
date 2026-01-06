// ============================================
// Super Mario API - Character Response Interfaces
// ============================================
// Dit definieert de TYPES (interfaces) voor TypeScript
// Zo weet TypeScript precies welke data we verwachten van de API
// ============================================

// STAP 1: Definieer Character interface
// Interface betekent: "een object moet deze eigenschappen hebben"
// Dit helpte fouten voorkomen - TypeScript checkt types!
interface Character {
  // Naam van het karakter (bijv. "Mario")
  name: string,
  
  // URL naar afbeelding van karakter
  image: string,
  
  // Korte samenvatting (bijv. "The iconic hero")
  summary: string,
  
  // Lange beschrijving van het karakter
  text: string
}

// STAP 2: Definieer CharacterResponse interface
// Dit is wat de API terugstuurt - altijd een object met "characters" array
interface CharacterResponse {
  // Array van Character objecten
  characters: Character[];
}

// STAP 3: Export interfaces zodat andere files ze kunnen importeren
export { CharacterResponse, Character };

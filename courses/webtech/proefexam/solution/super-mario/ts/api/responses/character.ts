interface Character {
    name: string,
    image: string,
    summary: string,
    text: string
  }
  
  interface CharacterResponse {
    characters: Character[];
  }
  
  export { CharacterResponse, Character }
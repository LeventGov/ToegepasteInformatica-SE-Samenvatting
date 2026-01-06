// ============================================
// Super Mario - Main Application
// ============================================
// Dit is het STARTPUNT van de applicatie
// Hier fetchen we karakter data en renderen we op pagina
//
// Leerdoelen:
// - TypeScript types gebruiken
// - Fetch API
// - DOM manipulation met querySelector
// - Template cloning (efficiënte rendering)
// - Type-safe casting
// ============================================

import { CharacterResponse, Character } from "./api/responses/character.js"

// ============================================
// STAP 1: Definieer constanten
// ============================================

// STAP 1a: API base URL
const BASEURL: string = "http://localhost:3000/supermario";

// STAP 1b: Selecteer template element uit HTML
// Type-casting: querySelectorAll geeft generieke Element, wij zeggen "dit is HTMLTemplateElement"
// De ! betekent: "dit is ZEKER niet null" (non-null assertion)
const $CHARACTERTEMPLATE : HTMLTemplateElement = document.querySelector<HTMLTemplateElement>("#character-template")!;

// ============================================
// STAP 2: Fetch alle karakters van API
// ============================================
async function fetchCharacters() : Promise<Character[]> {
  // STAP 2a: Fetch data van API
  const response : Response = await fetch(`${BASEURL}/characters`);
  
  // STAP 2b: Parse JSON response
  // Dit geeft type CharacterResponse (API result)
  const result : CharacterResponse = await response.json(); 
  
  // STAP 2c: Return only de characters array
  return result.characters;
}

// ============================================
// STAP 3: Create HTML element van karakter
// Dit gebruikt TEMPLATE CLONING (zeer efficient!)
// ============================================
function getCharacterElement(character: Character) : HTMLElement {
  // STAP 3a: Clone de template
  // template.content.firstElementChild geeft eerste element in template
  // ?.cloneNode(true) is SAFE optional chaining - geen fout als null
  // "true" parameter betekent: diep clonen (alles erin)
  const $element: HTMLElement = $CHARACTERTEMPLATE.content.firstElementChild?.cloneNode(true) as HTMLElement;
  
  // STAP 3b: Vul naam in (de h2)
  // querySelector zoekt in de gecloonde element
  // ! betekent: "ik weet zeker dat dit element bestaat"
  $element.querySelector<HTMLHeadingElement>("h2")!.innerText = character.name;
  
  // STAP 3c: Vul afbeelding in
  $element.querySelector<HTMLImageElement>("img")!.src = character.image;
  
  // STAP 3d: Vul korte samenvatting in (p met class "summary")
  $element.querySelector<HTMLParagraphElement>(".summary")!.innerText = character.summary;
  
  // STAP 3e: Vul lange beschrijving in (laatste p)
  // p:last-child selecteert de laatste p tag
  $element.querySelector<HTMLParagraphElement>("p:last-child")!.innerText = character.text;

  // STAP 3f: Return het HTML element
  return $element;
}

// ============================================
// STAP 4: Initialiseer de pagina
// Dit is wat eerst wordt uitgevoerd
// ============================================
async function init() : Promise<void> {
  // STAP 4a: Fetch alle karakters van API
  const characters : Character[] = await fetchCharacters();

  // STAP 4b: Selecteer main element waar we alles in zetten
  const $mainElement : HTMLElement = document.querySelector("main")!;
  
  // STAP 4c: Loop door elk karakter
  characters.forEach((character: Character) => {
    // STAP 4c-i: Maak HTML element voor dit karakter
    const $characterElement : HTMLElement = getCharacterElement(character);
    
    // STAP 4c-ii: Voeg element toe aan main (voor de einde)
    // insertAdjacentElement is beter dan appendChild (je kan position kiezen)
    $mainElement.insertAdjacentElement("beforeend", $characterElement);
  });
}

// ============================================
// STAP 5: Start applicatie
// ============================================
// Roep init aan zodra de pagina geladen is
init();
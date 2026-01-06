import { CharacterResponse, Character } from "./api/responses/character.js"

const BASEURL: string = "http://localhost:3000/supermario";
const $CHARACTERTEMPLATE : HTMLTemplateElement = document.querySelector<HTMLTemplateElement>("#character-template")!;


async function fetchCharacters() : Promise<Character[]> {
  const response : Response = await fetch(`${BASEURL}/characters`);
  const result : CharacterResponse = await response.json(); 
  return result.characters;
}

function getCharacterElement(character: Character) : HTMLElement {
  const $element: HTMLElement = $CHARACTERTEMPLATE.content.firstElementChild?.cloneNode(true) as HTMLElement;
  $element.querySelector<HTMLHeadingElement>("h2")!.innerText = character.name;
  $element.querySelector<HTMLImageElement>("img")!.src = character.image;
  $element.querySelector<HTMLParagraphElement>(".summary")!.innerText = character.summary;
  $element.querySelector<HTMLParagraphElement>("p:last-child")!.innerText = character.text;

  return $element;
}

async function init() : Promise<void> {
  const characters : Character[] = await fetchCharacters();

  const $mainElement : HTMLElement = document.querySelector("main")!;
  characters.forEach((character: Character) => {
    const $characterElement : HTMLElement = getCharacterElement(character);
    $mainElement.insertAdjacentElement("beforeend", $characterElement);
  });
}

init();
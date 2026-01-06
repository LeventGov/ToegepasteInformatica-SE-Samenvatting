// ============================================
// QUESTION 1: JavaScript Basics
// ============================================
// Dit is een introductie in fundamentele JavaScript concepten:
// - Arrow functions vs normale functies
// - Object iteration met Object.values()
// - Array methods (.reduce, .map, Math.min/max)
// - Destructuring assignment
// ============================================


// STAP 1: Bereken totale kosten van winkelmandje
// Functie die door Object.values() gaat en alle prijzen optelt
function calculateTotalCost(shoppingBasket) {
  // Initialiseer de totaal op 0
  let total = 0;
  
  // Loop door alle waarden in het object (de prijzen)
  for (const price of Object.values(shoppingBasket)) {
    total += price;
  }
  
  // Geef de totale waarde terug
  return total;
}

// Test data: Object met fruit als key en prijs als value
const shoppingBasket = {
  Apples: 3.45,
  Bananas: 4.05,
  Lemons: 2.00
};

// Roep functie aan en log resultaat
console.log(calculateTotalCost(shoppingBasket));
// Verwacht resultaat: 9.5 (3.45 + 4.05 + 2.00)


// ============================================
// STAP 2: Bereken statistieken van array met getallen
// Dit toont geavanceerde array-methodes:
// - .reduce() voor aggregatie
// - Math.min/max met spread operator
// - Destructuring van object returns
// ============================================

function calculateStatistics(values) {
  // STAP 2a: Bereken SUM met reduce
  // reduce accumuleert alle waardes in één getal
  const sum = values.reduce((acc, value) => acc + value, 0);
  
  // STAP 2b: Bereken AVERAGE
  // Deel de sum door aantal elementen
  const average = sum / values.length;
  
  // STAP 2c: Bereken MINIMUM
  // Spread operator (...) converteert array naar aparte argumenten
  const min = Math.min(...values);
  
  // STAP 2d: Bereken MAXIMUM
  const max = Math.max(...values);
  
  // STAP 2e: Return object met alle resultaten
  // Dit object kunnen we later destructuren in de caller
  return {
    minimum: min,
    maximum: max,
    average: average,
    total: sum
  };
}

// Test data: Array met getallen
const values = [5, 3, 4];

// STAP 2f: Destructuring assignment
// In plaats van een heel object op te vragen, pakken we alleen de properties die we nodig hebben
// Dit is hetzelfde als: const result = calculateStatistics(values);
//                       console.log(result.minimum, result.maximum, ...);
const { minimum, maximum, average, total } = calculateStatistics(values);

// Log alle statistieken
console.log(minimum, maximum, average, total);
// Verwacht resultaat: 3 5 4 12
// - minimum: 3 (het kleinste getal)
// - maximum: 5 (het grootste getal)  
// - average: 4 (totaal 12 gedeeld door 3 getallen)
// - total: 12 (3 + 4 + 5)

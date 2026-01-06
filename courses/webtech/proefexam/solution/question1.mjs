function calculateTotalCost() {
  let total = 0;
  for (const price of Object.values(shoppingBasket)) {
    total += price;
  }
  return total;
}

const shoppingBasket = {Apples: 3.45, Bananas: 4.05, Lemons: 2.00};
console.log(calculateTotalCost(shoppingBasket));


function calculateStatistics(values) {
    const sum = values.reduce((acc, value) => acc + value, 0);
    const average = sum / values.length;
    const min = Math.min(...values);
    const max = Math.max(...values);
    return {minimum: min, maximum: max, average: average, total: sum};
}

const values = [5, 3, 4];
const {minimum, maximum, average, total} = calculateStatistics(values);
console.log(minimum, maximum, average, total);
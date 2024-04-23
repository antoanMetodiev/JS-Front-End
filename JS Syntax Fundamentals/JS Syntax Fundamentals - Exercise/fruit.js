function solve(fruitType, weight, pricePerKg) {
    console.log(`I need $${(weight * (pricePerKg) / 1000).toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruitType}.`);
}

solve('apple', 1563, 2.35);
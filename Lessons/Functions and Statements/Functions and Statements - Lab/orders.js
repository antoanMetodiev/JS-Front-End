function solve(order, count) {
    const products = { 'water': 1.00, 'coffee': 1.50, 'coke': 1.40, 'snacks': 2.00 };
    console.log((products[order] * count).toFixed(2));
}

solve("water", 5);
function solve(ownedProducts, receivedProducts) {
    const totalProducts = ownedProducts.concat(receivedProducts);
    const store = new Map();

    for (let i = 0; i < totalProducts.length; i += 2) {
        if (!store.has(totalProducts[i])) {
            store.set(totalProducts[i], totalProducts[i + 1]);
        } else {
            store.set(totalProducts[i], Number(totalProducts[i + 1]) + Number(store.get(totalProducts[i])));
        }
    }

    // after Array.from() we have permission for for-each!
    Array.from(store.keys()).forEach(key => {
        console.log(`${key} -> ${store.get(key)}`);
    });
}

solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
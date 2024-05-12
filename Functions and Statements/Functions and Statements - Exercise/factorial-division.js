function solve(num, divisor) {
    let recursionResult = 1;
    function doFactoriel(currentNumber, counter) {
        return currentNumber * (counter + 1);
    }

    for (let i = 1; i < num; i++) {
        recursionResult = doFactoriel(recursionResult, i);
    }
    console.log((recursionResult / divisor).toFixed(2));
}

solve(5, 2);

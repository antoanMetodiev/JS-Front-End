function solve(num1, operation, num2) {
    let operations = { '+': num1 + num2, '-': num1 - num2, '/': num1 / num2, '*': num1 * num2 };
    console.log(operations[operation].toFixed(2));
}

solve(25.5, '-', 3);

function solve(num1, num2, operation) {
    const operations = {'divide': num1 / num2, 'multiply': num1 * num2, 'add': num1 + num2, 'subtract': num1 - num2};
    console.log(operations[operation]);
}

solve(50, 13, 'subtract');

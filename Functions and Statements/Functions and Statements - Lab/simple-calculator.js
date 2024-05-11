function solve(num1, num2, operation) {
    const multiply = () => num1 * num2;
    const divide = () => num1 / num2;
    const add = () => num1 + num2;
    const subtract = () => num1 - num2;
    if (operation == 'multiply') console.log(multiply());
    if (operation == 'divide') console.log(divide());
    if (operation == 'add') console.log(add());
    if (operation == 'subtract') console.log(subtract());
}

solve(50, 13, 'subtract');
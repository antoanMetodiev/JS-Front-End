function solve(num1, num2, operation) {
    console.log(operation === '+' ? Number(num1) + Number(num2) :
    operation === '-' ? num1 - num2 : operation === '*' ? num1 * num2 :
    operation === '/' ? num1 / num2 : operation === '%' ? num1 % num2 :
    operation === '**'? num1 ** num2 :'Invalid Operator');
}

solve(2,2,'+');


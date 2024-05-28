function solve(num1, num2, num3) {
    let addedNumbers = function () {
        return num1 + num2;
    }

    let substraction = function () {
        return addedNumbers() - num3;
    }
    console.log(substraction());
}

solve(23, 6, 10);

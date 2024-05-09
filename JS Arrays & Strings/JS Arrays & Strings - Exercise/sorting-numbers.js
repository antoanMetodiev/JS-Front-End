function solve(numbers) {
    let resultArr = [];
    while (numbers.length > 0) {
        numbers.sort((e1, e2) => e1 - e2);
        resultArr.push(numbers.shift());
        resultArr.push(numbers.pop());
    }
    return resultArr;
}



console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
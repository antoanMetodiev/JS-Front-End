function solve(numbers, n) {
    let rotations = numbers.length;
    let resultArr = [];
    for (let i = 0; i < rotations; i += n) {
        if (i % n == 0) {
            resultArr.push(numbers[i]);
        }
    }
    return resultArr;
}

console.log(solve(['5', '20', '31', '4', '20'], 2));

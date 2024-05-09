function solve(numbers, rotations) {
    for (let i = 0; i < rotations; i++) {
        numbers.push(numbers.shift());
    }
    console.log(numbers.join(' '));
}

solve([32, 21, 61, 1], 4);
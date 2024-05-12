function solve(numbers) {
    numbers.map(el => el.toString().split('')).forEach(element => {
        console.log(element.join('') == element.reverse().join(''));
    });
}

solve([32, 2, 232, 1010]);
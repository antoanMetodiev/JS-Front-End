function solve(numbers) {
    let odd = 0;
    let even = 0;
    numbers.forEach(num => {
        num % 2 != 0 ? even += num : odd += num;
    });
    console.log(odd - even);
}

solve([1, 2, 3, 4, 5, 6]);
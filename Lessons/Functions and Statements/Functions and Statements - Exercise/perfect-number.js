function solve(num) {
    let sumOfPositiveDivisors = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0) sumOfPositiveDivisors += i;
    }
    sumOfPositiveDivisors == num ? console.log('We have a perfect number!') :
    console.log(`It's not so perfect.`);
}

solve(28);
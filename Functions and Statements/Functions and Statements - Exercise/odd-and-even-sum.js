function solve(num) {
    let oddSum = 0;
    let evenSum = 0;
    num.toString().split('').forEach(el => {
        let num = Number(el);
        num % 2 == 0 ? evenSum += num : oddSum += num;
    });
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(3495892137259234);
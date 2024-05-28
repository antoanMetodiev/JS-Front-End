function solve(num) {
    num = num.toString();
    const firstNum = num[0];
    let akum = 0;
    let isEqual = true;
    for (let i = 1; i < num.length; i++) {
        if (num[i] != firstNum) {
            isEqual = false;
        }
        akum += Number(num[i]);
    }
    console.log(isEqual);
    console.log(akum + Number(firstNum));
}

solve(1234);
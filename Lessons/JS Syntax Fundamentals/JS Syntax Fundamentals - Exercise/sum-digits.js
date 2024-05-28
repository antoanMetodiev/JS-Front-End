function solve(num) {
    let akum = 0;
    let numToString = num.toString();
    for (let i = 0; i < numToString.length; i++) {
        akum += Number(numToString[i]);
    }
    console.log(akum);
}

solve(25);
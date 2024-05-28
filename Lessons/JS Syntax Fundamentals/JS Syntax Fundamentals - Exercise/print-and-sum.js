function solve(startNum, endNum) {
    let akum = 0;
    for (let i = startNum; i <= endNum; i++) {
        akum += i;
        process.stdout.write(i + ' ');
    }
    console.log();
    console.log('Sum: ' + akum);
}

solve(5, 10);
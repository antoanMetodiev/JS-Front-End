function solve(num) {
    let result = '[..........]'.split('');
    let dividedNum = num / 10;
    for (let i = 1; i <= dividedNum; i++) {
        result[i] = '%';
    }

    if (num < 100) {
        console.log(`${num}% ${result.join('')}`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(result.join(''));
    }
}

solve(50);
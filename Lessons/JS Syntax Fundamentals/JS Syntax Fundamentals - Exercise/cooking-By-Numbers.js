function solve(num, ...comands) {
    num = Number(num);
    comands.forEach(command => {
        let operationList = {
            chop: (num / 2), dice: Math.sqrt(num), spice: (num + 1), bake: (num * 3), fillet: (num -= num * 0.20)
        };
        num = operationList[command];
        console.log(num);
    });
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
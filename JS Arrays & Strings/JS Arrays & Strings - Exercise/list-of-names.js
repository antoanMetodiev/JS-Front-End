function solve(names) {
    names.sort((e1, e2) => e1.localeCompare(e2)).forEach((el, index) => {
        console.log(`${index + 1}.${el}`);
    });
    
}

solve(["John", "Bob", "Christina", "Ema"]);
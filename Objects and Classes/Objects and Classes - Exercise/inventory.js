function solve(input) {
    input.map(el => {
        const [name, level, items] = el.split(' / ');
        return {name, level, items};
    }).sort((el1, el2) => el1.level - el2.level).forEach(obj => {
        console.log(`Hero: ${obj.name}`);
        console.log(`level => ${obj.level}`);
        console.log(`items => ${obj.items}`);
    });
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
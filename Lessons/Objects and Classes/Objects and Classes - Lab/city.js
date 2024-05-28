function solve(cityData) {
    Object.keys(cityData).forEach(key => console.log(`${key} -> ${cityData[key]}`));
}

solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});
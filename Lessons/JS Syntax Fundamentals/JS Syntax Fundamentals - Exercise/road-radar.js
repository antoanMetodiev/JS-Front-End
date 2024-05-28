function solve(km, road) {
    let roadsAndLimits = { city: 50, residential: 20, motorway: 130, interstate: 90 };
    let overLimitMessage = '';

    if (km <= roadsAndLimits[road]) {
        console.log(`Driving ${km} km/h in a ${roadsAndLimits[road]} zone `);
    } else {
        const overLimitKm = km - roadsAndLimits[road];
        overLimitKm >= 1 && overLimitKm <= 20 ? overLimitMessage = 'speeding' :
        overLimitKm > 20 && overLimitKm <= 40 ? overLimitMessage = 'excessive speeding' :
        overLimitMessage = 'reckless driving';
        console.log(`The speed is ${km - roadsAndLimits[road]} km/h faster than the allowed speed of ${roadsAndLimits[road]} - ${overLimitMessage}`);
    }
}

solve(120, 'interstate');
function solve(peopleCount, typeOfGroup, dayOfWeek) {
    let discount = 0; // per percent!
    let price = 0;
    peopleCount >= 30 && typeOfGroup === 'Students' ? discount = 15 :
    peopleCount >= 100 && typeOfGroup === 'Business' ? peopleCount -= 10 :
    peopleCount >= 10 && peopleCount <= 20 && typeOfGroup === 'Regular' ? discount = 5 : discount = 0;

    let constraints = { 
        Students: {Friday: 8.45, Saturday: 9.80, Sunday: 10.46},
        Business: {Friday: 10.90, Saturday: 15.60, Sunday: 16},
        Regular: {Friday: 15, Saturday: 20, Sunday: 22.50}
    };
    if (constraints[typeOfGroup][dayOfWeek]) {
        price = Number(constraints[typeOfGroup][dayOfWeek]) * peopleCount;
    }
    console.log(`Total price: ${(price -= price * (discount / 100)).toFixed(2)}`);
}

solve(40, "Regular", "Saturday" );
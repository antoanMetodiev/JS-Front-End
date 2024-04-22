function solve(age) {
    age >= 0 && age <= 2 ? console.log('baby') :
    age >= 3 && age <= 13 ? console.log('child') :
    age >= 14 && age <= 19 ? console.log('teenager') :
    age >= 20 && age <= 65 ? console.log('adult') :
    age >= 66 ? console.log('elder') : console.log('out of bounds');
}

solve(-1);
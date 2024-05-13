// function solve(name, lastName, hairColor) {
//     console.log(JSON.stringify({name, lastName, hairColor}));
// }

// solve('George', 'Jones', 'Brown');


const collection = new Map();
collection.set('Manuel', function printSecondName() {
    console.log('Metodiev');
})

collection.get('Manuel')();


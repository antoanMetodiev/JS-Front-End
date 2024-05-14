function solve(addresses) {
    const addressesData = {};
    for (const address of addresses) {
        let [personName, addressName] = address.split(':');
        addressesData[personName] = addressName;
    }
    
    Object.entries(addressesData).sort((entry1, entry2) => entry1[0].localeCompare(entry2[0]))
        .forEach(([personName, address]) => console.log(`${personName} -> ${address}`));
}

solve(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);

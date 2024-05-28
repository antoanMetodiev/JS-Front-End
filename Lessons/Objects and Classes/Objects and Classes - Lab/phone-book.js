function solve(data) {
    const people = {};
    for (let text of data) {
        let [name, phone] = text.split(' ');
        people[name] = phone;
    }
    Object.keys(people).forEach(key => console.log(`${key} -> ${people[key]}`));
}

solve(['George 0552554', 'Peter 087587', 'George 0453112', 'Bill 0845344']);
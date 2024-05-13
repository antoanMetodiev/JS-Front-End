function solve(json) {
    const receivedObject = JSON.parse(json);
    Object.keys(receivedObject).forEach(key => console.log(`${key}: ${receivedObject[key]}`));
}

solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
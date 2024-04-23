function solve(text) {
    let allMatches = text.match(/\w+/g);
    allMatches = allMatches.map(e => e.toUpperCase());
    console.log(allMatches.join(', '));
}

solve('Hi, how are you?');
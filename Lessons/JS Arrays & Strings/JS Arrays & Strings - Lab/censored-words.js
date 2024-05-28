function solve(text, replacement) {
    while (text.includes(replacement)) {
        text = text.replace(replacement, Array.from(replacement)
        .map(replacement => replacement = '*').join(''));
    }
    console.log(text);
}

solve('Find the hidden word', 'hidden');
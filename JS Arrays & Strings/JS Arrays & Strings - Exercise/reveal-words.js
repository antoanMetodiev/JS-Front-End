function solve(replacements, text) {
    replacements.split(', ').forEach(replacement => {
        text = text.replace('*'.repeat(replacement.length), replacement);
    });
    
    console.log(text);
}


solve('great, learning', 'softuni is ***** place for ******** new programming languages');
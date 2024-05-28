function solve(text, searchedWord) {
    console.log(text.split(/\s+/).filter(el => el === searchedWord).length);
}

solve('This is a word and it also is a sentence', 'is');
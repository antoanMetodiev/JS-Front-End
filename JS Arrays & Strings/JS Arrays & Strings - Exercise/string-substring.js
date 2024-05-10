function solve(searchedWord, text) {
    text.toLowerCase().split(' ').includes(searchedWord.toLowerCase()) ? console.log(searchedWord) :
        console.log(searchedWord + ' not found!');
}

solve('javascript', 'JavaScript is the best programming language');
function solve(text, startIndex, endIndex) {
    console.log(Array.from(text).splice(startIndex, endIndex).join(''));
}

solve('SkipWord', 4, 7);
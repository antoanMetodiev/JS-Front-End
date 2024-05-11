function solve(firstSymbol, secondSymbol) {
    let symbolsArr = [];
    function printSymbolsInRange() {
        let smallestAcsiCode = Math.min(firstSymbol.charCodeAt(0), secondSymbol.charCodeAt(0))
        let biggestAsciCode = Math.max(firstSymbol.charCodeAt(0), secondSymbol.charCodeAt(0))

        for (let i = smallestAcsiCode + 1; i < biggestAsciCode; i++) {
            symbolsArr.push(String.fromCharCode(i))
        }
    }

    printSymbolsInRange();
    console.log(symbolsArr.join(' '));
}

solve('C', '#');
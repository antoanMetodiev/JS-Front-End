function solve(text) {
    console.log(text.split(/(?=[A-Z])/).join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
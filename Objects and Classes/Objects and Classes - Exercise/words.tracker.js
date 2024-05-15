function solve(input) {
    let map = new Map();
    input.shift().split(' ').forEach(word => {
        map.set(word, 0);
    });

    input.forEach(word => {
        if (map.has(word)) map.set(word, map.get(word) + 1);
    });

    map = Array.from(map).sort((e1, e2) => e2[1] - e1[1])
    .forEach(arr => console.log(`${arr[0]} - ${arr[1]}`));
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
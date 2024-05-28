function solve(words) {
    const map = new Map();
    words.toLowerCase().split(' ').forEach(word => {
        if (map.has(word)) map.set(word, map.get(word) + 1);
        else map.set(word, 1);
    });

    let result = '';
    Array.from(map.keys()).forEach(key => {
        if (map.get(key) % 2 != 0) result += key + ' '; 
    });
    console.log(result.trim());
}

solve('Cake IS SWEET is Soft CAKE sweet Food');

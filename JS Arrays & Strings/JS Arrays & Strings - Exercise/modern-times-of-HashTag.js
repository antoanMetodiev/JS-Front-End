function solve(text) {
    let words = (text).split(' ').filter(e => e.startsWith('#')).map(el => {
        return el.slice(1);
    }).forEach(el => {
        if (new RegExp('^[A-Za-z]+$').test(el)) {
            console.log(el);
        }

    });
}


solve('The symbol # is known #variously in English-speaking #regions as the #number sign');
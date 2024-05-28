function solve(text) {
    let isInside = false;

    if (text.length < 6 || text.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        isInside = true;
    }
    if (!(new RegExp(/^[a-zA-Z0-9]+$/, 'g').test(text))) {
        console.log('Password must consist only of letters and digits');
        isInside = true;
    }
    if (!(text.match(/[0-9]/g)) || text.match(/[0-9]/g).length < 2) {
        console.log('Password must have at least 2 digits');
        isInside = true;
    }

    if (!isInside) {
        console.log('Password is valid');
    }
}

solve('Pa$s$s');
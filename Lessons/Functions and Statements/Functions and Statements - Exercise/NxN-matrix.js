// function solve(n) {
//     const printLine = () => n.toString().repeat(n).split('').join(' ');

//     for (let i = 0; i < n; i++) {
//         console.log(printLine());
//     }
// }

function solve(n) {
    function printLine() {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(n);
        }
        return arr.join(' ');
    }

    for (let i = 0; i < n; i++) {
        console.log(printLine());
    }
}

solve(7);
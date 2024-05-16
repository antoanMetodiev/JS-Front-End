function sumTable() {
    let sum = 0;
    Array.from(document.getElementsByTagName('td')).forEach((td, index) => {
        if (index % 2 != 0)  sum += Number(td.textContent);
    });
    document.querySelector('#sum').textContent = sum;
}
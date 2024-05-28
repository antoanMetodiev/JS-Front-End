function sumTable() {
    let sum = 0;
    document.querySelectorAll('tr td:last-of-type:not(#sum)').forEach((td) => {
        sum += Number(td.textContent);
    });
    document.querySelector('#sum').textContent = sum;
}

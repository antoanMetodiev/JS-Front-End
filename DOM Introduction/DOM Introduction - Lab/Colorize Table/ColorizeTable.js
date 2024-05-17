function colorize() {
    document.querySelectorAll('tr:nth-child(2n)').forEach(td => {
        td.style.backgroundColor = 'Teal';
    });
}

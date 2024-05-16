function colorize() {
    Array.from(document.getElementsByTagName('tr')).forEach((collection, index) => {
        if (index % 2 != 0) Array.of(collection).forEach(td => td.style.backgroundColor = 'Teal');
    });
}
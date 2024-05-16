function extract(content) {
    return document.getElementById('content').textContent.match(/\((.*?)\)/g).map(el => {
        return el = el.substring(1, el.length - 1);
    })
    .join('; ');
}
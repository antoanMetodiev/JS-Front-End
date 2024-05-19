function deleteByEmail() {
    const inputTextEl = document.querySelector('input[name=email]');
    const divElement = document.getElementById('result');
    let wasInside = false;
    for (const td of document.getElementsByTagName('td')) {
        if (td.textContent == inputTextEl.value) {
            td.parentElement.remove();
            divElement.textContent = 'Deleted.';
            wasInside = true;
        } 
    }

    if (!wasInside) divElement.textContent = 'Not found.'
    inputTextEl.value = '';
}
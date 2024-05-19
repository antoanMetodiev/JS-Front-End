function addItem() {
    const ulElement = document.getElementById('items');
    const createdLiEl = document.createElement('li');
    const inputTextEl = document.getElementById('newItemText');
    createdLiEl.textContent = inputTextEl.value;
    ulElement.appendChild(createdLiEl);

    inputTextEl.value = '';
}
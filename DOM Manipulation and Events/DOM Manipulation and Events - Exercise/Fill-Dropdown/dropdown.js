function addItem() {
    const inputTextElement = document.getElementById('newItemText');
    const inputValueElement = document.getElementById('newItemValue');

    const createdOptionElement = document.createElement('option');
    createdOptionElement.textContent = inputTextElement.value;
    createdOptionElement.value = inputValueElement.value;
    
    document.getElementById('menu').appendChild(createdOptionElement);
    inputTextElement.value = '';
    inputValueElement.value = '';
}
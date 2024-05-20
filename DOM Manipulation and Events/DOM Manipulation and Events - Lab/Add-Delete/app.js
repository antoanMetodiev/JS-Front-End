function addItem() {
    // Add Element
    const inputTextElement = document.getElementById('newItemText');
    const ulContainerElement = document.getElementById('items');

    const newLiElement = document.createElement('li');
    newLiElement.textContent = inputTextElement.value;

    const newAnchorElement = document.createElement('a');
    newAnchorElement.textContent = '[Delete]';
    newAnchorElement.href = '#';
    newAnchorElement.addEventListener('click', removeEl);
    
    newLiElement.appendChild(newAnchorElement);
    ulContainerElement.appendChild(newLiElement);
    inputTextElement.value = '';

    // Remove Element
    function removeEl(event) {
        event.target.parentElement.remove();
    }
}
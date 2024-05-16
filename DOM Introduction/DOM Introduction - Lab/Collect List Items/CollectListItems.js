function extractText() {
    let textAreaEl = document.getElementById('result');
    let ulElements = document.getElementById('items');
    textAreaEl.value = ulElements.textContent;
}

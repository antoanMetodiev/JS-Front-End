function toggle() {
    const spanElement = document.getElementsByClassName('button')[0];
    const hiddenElement = document.getElementById('extra');
    if (spanElement.textContent === 'More') {
        hiddenElement.style.display = 'block';
        spanElement.textContent = 'Less';
    } else {
        hiddenElement.style.display = 'none';
        spanElement.textContent = 'More';
    }
}
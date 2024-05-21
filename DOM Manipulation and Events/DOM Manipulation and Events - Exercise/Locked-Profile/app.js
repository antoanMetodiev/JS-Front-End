function lockedProfile() {
    const hiddenButtonsEl = document.getElementsByTagName('button');
    for (const hiddenButton of hiddenButtonsEl) {
        hiddenButton.addEventListener('click', (event) => {
            const inputLockEl = event.target.parentElement.querySelector('input[value=unlock]');

            if (event.target.textContent == 'Show more' && inputLockEl.checked) {
                event.target.previousElementSibling.style.display = 'block';
                event.target.textContent = 'Hide it';
            } else if (event.target.textContent == 'Hide it' && inputLockEl.checked) {
                event.target.previousElementSibling.style.display = 'none';
                event.target.textContent = 'Show more';
            }
        });
    }
}
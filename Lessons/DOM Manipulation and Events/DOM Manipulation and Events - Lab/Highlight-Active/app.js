function focused() {
    const inputElement = document.getElementsByTagName('input');
    for (const input of inputElement) {
        input.addEventListener('focus', (event) => {
            event.target.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', (event) => {
            event.target.parentElement.classList.remove('focused');
        })
    }
}

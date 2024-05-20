function validate() {
    const emailTextElement = document.getElementById('email');
    emailTextElement.addEventListener('change', () => {
        const regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (regex.test(emailTextElement.value)) emailTextElement.classList.remove('error');
        else emailTextElement.classList.add('error');
    });
}
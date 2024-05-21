function encodeAndDecodeMessages() {
    let [encodeButton, decodeButton] = document.getElementsByTagName('button');
    let initialEncodedText = '';
    let decodeTextAreaEl = decodeButton.previousElementSibling;

    encodeButton.addEventListener('click', () => {
        let encodedText = '';
        initialEncodedText = encodeButton.previousElementSibling.value;
        const encodeTextAreaEl = encodeButton.previousElementSibling;

        Array.from(encodeTextAreaEl.value).forEach(letter => {
            encodedText += String.fromCharCode(letter.charCodeAt(0) + 1);
        })
        decodeTextAreaEl.value = encodedText;
        encodeTextAreaEl.value = '';
    });

    decodeButton.addEventListener('click', () => {
        decodeTextAreaEl.value = initialEncodedText;
    });
}
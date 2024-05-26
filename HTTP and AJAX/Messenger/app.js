function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger';
    const inputName = document.querySelector('input[name=author]');
    const inputMessage = document.querySelector('input[name=content]');
    const textAreaElement = document.getElementById('messages');

    document.getElementById('submit').addEventListener('click', () => {
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'aplication/json',
            },
            body: JSON.stringify({
                author: inputName.value,
                content: inputMessage.value,
            }),
        })
            .catch(() => console.log('POST REQUEST IS NOT HAPPENED!'))
        inputName.value = '';
        inputMessage.value = '';
    });

    document.getElementById('refresh').addEventListener('click', () => {
        let fragmentContainer = document.createDocumentFragment();
        fetch(url)
            .then(resolve => resolve.json())
            .then(data => {
                const messagesData = Object.values(data);

                messagesData.forEach((messageData, index) => {
                    if (index < messagesData.length - 1) {
                        fragmentContainer.textContent += `${messageData.author}: ${messageData.content}\n`;
                    } else {
                        fragmentContainer.textContent += `${messageData.author}: ${messageData.content}`;
                    }
                });
                textAreaElement.value = fragmentContainer.textContent;
            })
            .catch(() => console.log('GET REQUEST IS NOT HAPPENED!'));
    });
}

attachEvents();
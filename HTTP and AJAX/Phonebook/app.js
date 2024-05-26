function attachEvents() {
    const postAndGetURL = 'http://localhost:3030/jsonstore/phonebook';

    // POST OPERATION:
    document.getElementById('btnCreate').addEventListener('click', () => {
        const inputPersonName = document.getElementById('person');
        const inputPhoneNumber = document.getElementById('phone');

        fetch(postAndGetURL, {
            method: 'POST',
            headers: {
                'content-type': 'aplication/json',
            },
            body: JSON.stringify({
                person: inputPersonName.value,
                phone: inputPhoneNumber.value,
            })
        })
        .catch(() => console.log('Have a problem on POST Operation!'));
        inputPersonName.value = '';
        inputPhoneNumber.value = '';
    });

    // GET OPERATION:
    document.getElementById('btnLoad').addEventListener('click', () => {
        const ulElement = document.getElementById('phonebook');
        ulElement.replaceChildren();
        fetch(postAndGetURL)
            .then(resolve => resolve.json())
            .then(phonePersonData => {
                const fragmentContainer = document.createDocumentFragment();

                Object.values(phonePersonData).forEach(data => {
                    if (data.person.trim() != '') {
                        const liElement = document.createElement('li');
                        liElement.textContent = `${data.person}: ${data.phone}`

                        const buttonElement = document.createElement('button');
                        buttonElement.textContent = 'Delete';
                        buttonElement.addEventListener('click', deletePerson);
                        buttonElement.value = data._id;

                        liElement.appendChild(buttonElement);
                        fragmentContainer.appendChild(liElement);
                    }
                });
                ulElement.appendChild(fragmentContainer);
            })
            .catch(() => console.log('Have a problem on GET Operation!'));
    });

    // DELETE OPERATION:
    function deletePerson(event) {
        fetch('http://localhost:3030/jsonstore/phonebook/' + event.target.value, {method: 'DELETE'});
        event.target.parentElement.remove();
    }
}

attachEvents();
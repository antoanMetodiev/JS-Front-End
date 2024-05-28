const URL = 'http://localhost:3030/jsonstore/gifts/';

// LOAD Operation (GET Request):
const loadButtonEl = document.getElementById('load-presents');
loadButtonEl.addEventListener('click', () => {
    loadPresents();
});

const giftContainerElement = document.getElementById('gift-list');

async function loadPresents() {
    giftContainerElement.innerHTML = '';
    giftContainerElement.addEventListener('click', onClick);
    const fragmentElement = document.createDocumentFragment();

    fetch(URL)
        .then(resolve => resolve.json())
        .then(presents => {
            Object.values(presents).forEach(present => {
                const giftElement = document.createElement('div');
                giftElement.classList.add('gift-sock');

                const divContentEl = document.createElement('div');
                divContentEl.classList.add('content');

                const presentName = document.createElement('p');
                presentName.textContent = present.gift;
                divContentEl.appendChild(presentName);

                const giftReceiverName = document.createElement('p');
                giftReceiverName.textContent = present.for;
                divContentEl.appendChild(giftReceiverName);

                const price = document.createElement('p');
                price.textContent = present.price;
                divContentEl.appendChild(price);

                // Div Buttons Container:
                const divButtonsContainer = document.createElement('div');
                divButtonsContainer.classList.add('buttons-container');

                const changeButton = document.createElement('button');
                changeButton.classList.add('change-btn');
                changeButton.textContent = 'Change';
                changeButton.value = present._id;
                divButtonsContainer.appendChild(changeButton);

                const deleteButton = document.createElement('button');
                deleteButton.classList.add('delete-btn');
                deleteButton.textContent = 'Delete';
                deleteButton.value = present._id;
                divButtonsContainer.appendChild(deleteButton);

                giftElement.appendChild(divContentEl);
                giftElement.appendChild(divButtonsContainer);
                fragmentElement.appendChild(giftElement);
            });

            giftContainerElement.appendChild(fragmentElement);
        }).catch(() => console.log('Something is wrong with LOAD Request!'));
}

// ADD PRESENT (POST Request): 
const addButtonEl = document.getElementById('add-present');
const inputPresentName = document.getElementById('gift');
const inputReceiverName = document.getElementById('for');
const inputPrice = document.getElementById('price');

async function cleanInputs() {
    inputPresentName.value = ''; inputReceiverName.value = ''; inputPrice.value = '';
}

addButtonEl.addEventListener('click', () => {
    fetch(URL, {
        method: 'POST',
        headers: {
            'content-type': 'aplication/json',
        },
        body: JSON.stringify({
            gift: inputPresentName.value,
            for: inputReceiverName.value,
            price: inputPrice.value,
        })
    }).catch(() => console.log('Something is wrong with POST Request!'));
    loadPresents();
    cleanInputs();
});

function onClick(event) {
    // Change Present (PUT Request):
    if (event.target.textContent === 'Change') {
        const giftElement = event.target.parentElement.parentElement;
        const pElements = giftElement.children[0].querySelectorAll('p');

        inputPresentName.value = pElements[0].textContent;
        inputReceiverName.value = pElements[1].textContent;
        inputPrice.value = pElements[2].textContent;

        giftElement.remove();
        const editPresentButton = document.getElementById('edit-present');
        editPresentButton.removeAttribute('disabled');
        addButtonEl.setAttribute('disabled', true);

        editPresentButton.addEventListener('click', () => {
            fetch(`${URL}${event.target.value}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'aplication/json',
                },
                body: JSON.stringify({
                    gift: document.getElementById('gift').value,
                    for: document.getElementById('for').value,
                    price: document.getElementById('price').value,
                    _id: event.target.value,
                })
            }).catch(() => console.log('Something is wrong with PUT Request!'));
            loadPresents();
            cleanInputs();
            addButtonEl.removeAttribute('disabled');
            editPresentButton.setAttribute('disabled', true);
        });

    } else if (event.target.textContent === 'Delete') {
        fetch(`${URL}${event.target.value}`, { method: 'DELETE' })
            .catch(() => console.log('Something is wrong with DELETE Request!'));
        loadPresents();
    }
}

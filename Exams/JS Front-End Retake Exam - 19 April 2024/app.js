const URL = 'http://localhost:3030/jsonstore/records/';

// LOAD Records (GET Request):
const loadButton = document.getElementById('load-records');
loadButton.addEventListener('click', () => {
    doGetRequest();
});

const ulListElement = document.getElementById('list');
ulListElement.addEventListener('click', executeRequests);

async function doGetRequest() {
    fetch(URL)
        .then(resolve => resolve.json())
        .then(people => {
            ulListElement.innerHTML = '';
            const fragmentContainer = document.createDocumentFragment();

            Object.values(people).forEach(person => {
                const liRecordEl = document.createElement('li');
                liRecordEl.classList.add('record');

                const divInfoElement = document.createElement('div');
                divInfoElement.classList.add('info');

                const pNameElement = document.createElement('p');
                pNameElement.textContent = person.name;
                divInfoElement.appendChild(pNameElement);

                const pStepsElement = document.createElement('p');
                pStepsElement.textContent = person.steps;
                divInfoElement.appendChild(pStepsElement);

                const pCaloriesElement = document.createElement('p');
                pCaloriesElement.textContent = person.calories;
                divInfoElement.appendChild(pCaloriesElement);

                // Create Button Container:
                const divButtonContainer = document.createElement('div');
                divButtonContainer.classList.add('btn-wrapper');

                const changeButtonEl = document.createElement('button');
                changeButtonEl.classList.add('change-btn');
                changeButtonEl.textContent = 'Change';
                changeButtonEl.value = person._id;
                divButtonContainer.appendChild(changeButtonEl);

                const deleteButtonEl = document.createElement('button');
                deleteButtonEl.classList.add('delete-btn');
                deleteButtonEl.textContent = 'Delete';
                deleteButtonEl.value = person._id;
                divButtonContainer.appendChild(deleteButtonEl);


                liRecordEl.appendChild(divInfoElement);
                liRecordEl.appendChild(divButtonContainer);
                fragmentContainer.appendChild(liRecordEl);
            });

            ulListElement.appendChild(fragmentContainer);
        }).catch(() => console.log('Something is wrong with GET Request!'));
}

// ADD Record (POST Request):
const inputNameEl = document.getElementById('p-name');
const inputStepsEl = document.getElementById('steps');
const inputCaloriesEl = document.getElementById('calories');
const addButtonEl = document.getElementById('add-record');

async function cleanInputs() {
    inputNameEl.value = ''; inputStepsEl.value = ''; inputCaloriesEl.value = '';
}

addButtonEl.addEventListener('click', () => {
    fetch(URL, {
        method: 'POST',
        headers: {
            'content-type': 'aplication/json',
        },
        body: JSON.stringify({
            name: inputNameEl.value,
            steps: inputStepsEl.value,
            calories: inputCaloriesEl.value,
        })
    }).catch(() => console.log('Something is wrong with POST Request!'));
    cleanInputs();
    doGetRequest();
});

let currentRecordID = '';

const editRecordElement = document.getElementById('edit-record');
editRecordElement.addEventListener('click', async (event) => {
    if (!event.target.disabled) {
        addButtonEl.removeAttribute('disabled');
        editRecordElement.setAttribute('disabled', true);

        fetch(URL + currentRecordID, {
            method: 'PUT',
            headers: {
                'content-type': 'aplication/json',
            },
            body: JSON.stringify({
                name: inputNameEl.value,
                steps: inputStepsEl.value,
                calories: inputCaloriesEl.value,
                _id: currentRecordID,
            }),
        }).catch(() => console.log('Something is wrong with PUT Request!'));

        await doGetRequest();
        cleanInputs();
    }
});

async function executeRequests(event) {
    const liRecordEl = event.target.parentElement.parentElement;

    if (event.target.textContent === 'Change') {
        // Change Record (PUT Request):
        const pDataElements = liRecordEl.children[0].querySelectorAll('p');

        inputNameEl.value = pDataElements[0].textContent;
        inputStepsEl.value = pDataElements[1].textContent;
        inputCaloriesEl.value = pDataElements[2].textContent;
        currentRecordID = event.target.value;

        editRecordElement.removeAttribute('disabled');
        addButtonEl.setAttribute('disabled', true);
        liRecordEl.remove();

    } else if (event.target.textContent === 'Delete') {
        fetch(URL + event.target.value, { method: 'DELETE' })
        .catch(() => console.log('Something is wrong with DELETE Request!'));
        liRecordEl.remove();
    }
}
const URL = 'http://localhost:3030/jsonstore/tasks/';

// Load History (GET Request):
document.getElementById('load-history').addEventListener('click', loadHistory);
async function loadHistory() {
    fetch(URL)
        .then(resolve => resolve.json())
        .then(townsData => {
            const townList = document.getElementById('list');
            townList.innerHTML = '';
            townList.addEventListener('click', executeRequests);
            const fragmentEl = document.createDocumentFragment();

            Object.values(townsData).forEach(town => {
                const divTownElement = document.createElement('div');
                divTownElement.classList.add('container');

                const h2TownNameEl = document.createElement('h2');
                h2TownNameEl.textContent = town.location;
                divTownElement.appendChild(h2TownNameEl);

                const h3DataEl = document.createElement('h3');
                h3DataEl.textContent = town.date;
                divTownElement.appendChild(h3DataEl);

                const h3TempEl = document.createElement('h3');
                h3TempEl.textContent = town.temperature;
                h3TempEl.setAttribute('id', 'celsius');
                divTownElement.appendChild(h3TempEl);

                // Create Div Buttons Container:
                const divButtonsContainer = document.createElement('div');
                divButtonsContainer.setAttribute('id', 'buttons-container');

                const changeButtonEl = document.createElement('button');
                changeButtonEl.classList.add('change-btn');
                changeButtonEl.textContent = 'Change';
                changeButtonEl.value = town._id;
                divButtonsContainer.appendChild(changeButtonEl);

                const deleteButtonEl = document.createElement('button');
                deleteButtonEl.classList.add('delete-btn');
                deleteButtonEl.textContent = 'Delete';
                deleteButtonEl.value = town._id;
                divButtonsContainer.appendChild(deleteButtonEl);

                divTownElement.appendChild(divButtonsContainer);
                fragmentEl.appendChild(divTownElement);
            });

            townList.appendChild(fragmentEl);
        }).catch(() => console.log('Something is wrong with GET Request!'));
}

// ADD a Weather (POST Request):
const addWeatherButton = document.getElementById('add-weather');
const inputLocationEl = document.getElementById('location');
const inputTemperatureEl = document.getElementById('temperature');
const inputDateEl = document.getElementById('date');

async function clearInputs() {
    inputLocationEl.value = ''; inputTemperatureEl.value = ''; inputDateEl.value = '';
}

addWeatherButton.addEventListener('click', () => {
    fetch(URL, {
        method: 'POST',
        headers: {
            'content-type': 'aplication/json',
        },
        body: JSON.stringify({
            location: inputLocationEl.value,
            temperature: inputTemperatureEl.value,
            date: inputDateEl.value,
        })
    }).catch(() => console.log('Something is wrong with POST Request!'));
    loadHistory();
    clearInputs();
});

const editButtonEl = document.getElementById('edit-weather');
let currentTownId = '';
editButtonEl.addEventListener('click', () => {
    if (!editButtonEl.disabled) {
        // Edit a Weather (PUT Request):
        fetch(URL + currentTownId, {
            method: 'PUT',
            headers: {
                'content-type': 'aplication/json',
            },
            body: JSON.stringify({
                location: inputLocationEl.value,
                temperature: inputTemperatureEl.value,
                date: inputDateEl.value,
                _id: currentTownId,
            })
        }).catch(() => console.log('Something is wrong with PUT Request!'));
        
        clearInputs();
        loadHistory();
        addWeatherButton.removeAttribute('disabled');
        editButtonEl.disabled = true;
    }
});

async function executeRequests(event) {
    const townElement = event.target.parentElement.parentElement;

    if (event.target.textContent === 'Change') {
        currentTownId = event.target.value;
        const townData = townElement.children;

        inputLocationEl.value = townData[0].textContent;
        inputDateEl.value = townData[1].textContent;
        inputTemperatureEl.value = townData[2].textContent;

        townElement.remove();
        addWeatherButton.disabled = true;
        editButtonEl.removeAttribute('disabled');

    } else if (event.target.textContent === 'Delete') {
        fetch(URL + event.target.value, {method: 'DELETE'})
        .catch(() => console.log('Something is wrong with DELETE Request!'));
        townElement.remove();
    }
}
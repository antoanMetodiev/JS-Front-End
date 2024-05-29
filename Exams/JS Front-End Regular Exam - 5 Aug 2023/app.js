const URL = 'http://localhost:3030/jsonstore/tasks/';

// LOAD Vacations (GET Request!):
document.getElementById('load-vacations').addEventListener('click', loadVacations);
const inputNameEl = document.getElementById('name');
const inputDaysEl = document.getElementById('num-days');
const inputDateEl = document.getElementById('from-date');

async function loadVacations() {
    fetch(URL)
        .then(resolve => resolve.json())
        .then(allVacations => {
            const vacationsList = document.getElementById('list');
            vacationsList.innerHTML = '';
            vacationsList.addEventListener('click', executeRequests);
            const fragmentElement = document.createDocumentFragment();

            Object.values(allVacations).forEach(vacation => {
                const divVacationContainer = document.createElement('div');
                divVacationContainer.classList.add('container');

                const h2NameEl = document.createElement('h2');
                h2NameEl.textContent = vacation.name;
                divVacationContainer.appendChild(h2NameEl);

                const h3DateEl = document.createElement('h3');
                h3DateEl.textContent = vacation.date;
                divVacationContainer.appendChild(h3DateEl);

                const h3DaysEl = document.createElement('h3');
                h3DaysEl.textContent = vacation.days;
                divVacationContainer.appendChild(h3DaysEl);

                const changeButtonEl = document.createElement('button');
                changeButtonEl.textContent = 'Change';
                changeButtonEl.classList.add('change-btn');
                changeButtonEl.value = vacation._id;
                divVacationContainer.appendChild(changeButtonEl);

                const doneButtonEl = document.createElement('button');
                doneButtonEl.textContent = 'Done';
                doneButtonEl.classList.add('done-btn');
                doneButtonEl.value = vacation._id;
                divVacationContainer.appendChild(doneButtonEl);

                fragmentElement.appendChild(divVacationContainer);
            });

            vacationsList.appendChild(fragmentElement);
        }).catch(() => console.log('Something is wrong with GET Request!'));
}

// ADD Operation (POST Request):
const addVacationButton = document.getElementById('add-vacation');
async function clearInputs() {
    inputNameEl.value = ''; inputDaysEl.value = ''; inputDateEl.value = '';
}

addVacationButton.addEventListener('click', () => {
    fetch(URL, {
        method: 'POST',
        headers: {
            'content-type': 'aplication/json',
        },
        body: JSON.stringify({
            name: inputNameEl.value,
            days: inputDaysEl.value,
            date: inputDateEl.value,
        })
    }).catch(() => console.log('Something is wrong with POST Request!'));
    loadVacations();
    clearInputs();
});

let currentVacationPlanId = '';

const editVacationEl = document.getElementById('edit-vacation');
editVacationEl.addEventListener('click', () => {
    // PUT Request:
    if (!editVacationEl.disabled) {
        fetch(URL + currentVacationPlanId, {
            method: 'PUT',
            headers: {
                'content-type': 'aplication/json',
            },
            body: JSON.stringify({
                name: inputNameEl.value,
                days: inputDaysEl.value,
                date: inputDateEl.value,
                _id: currentVacationPlanId,
            })
        }).catch(() => console.log('Something is wrong with PUT Request!'));
        clearInputs();
        loadVacations();
    }
});

async function executeRequests(event) {
    const vacationEl = event.target.parentElement;
    if (event.target.textContent === 'Change') {
        currentVacationPlanId = event.target.value;
        const vacationData = vacationEl.children;

        inputNameEl.value = vacationData[0].textContent;
        inputDateEl.value = vacationData[1].textContent;
        inputDaysEl.value = vacationData[2].textContent;

        vacationEl.remove();
        addVacationButton.disabled = true;
        editVacationEl.removeAttribute('disabled');

    }  else if (event.target.textContent === 'Done') {
        fetch(URL + event.target.value, {method: 'DELETE'})
        .catch(() => console.log('Something is wrong with DELETE Request!'));
        vacationEl.remove();
    }
}

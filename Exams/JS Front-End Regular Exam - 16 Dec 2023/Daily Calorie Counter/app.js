const baseURL = 'http://localhost:3030/jsonstore/tasks/';

const divMealListEl = document.getElementById('list');
divMealListEl.addEventListener('click', onClick);  // for delete and change operations!

// LOAD Meals:
const loadButtonElement = document.getElementById('load-meals');
loadButtonElement.addEventListener('click', () => {
    doGetRequest();
});

async function doGetRequest() {
    fetch(baseURL)
        .then(resolve => resolve.json())
        .then(mealObject => {
            divMealListEl.innerHTML = '';
            const fragmentContainer = document.createDocumentFragment();

            Object.values(mealObject).forEach(meal => {
                const divMealContainer = document.createElement('div');
                divMealContainer.classList.add('meal');

                const h2MealNameEl = document.createElement('h2');
                h2MealNameEl.textContent = meal.food;
                divMealContainer.appendChild(h2MealNameEl);

                const h3TimeEl = document.createElement('h3');
                h3TimeEl.textContent = meal.time;
                divMealContainer.appendChild(h3TimeEl);

                const h3CaloriesEl = document.createElement('h3');
                h3CaloriesEl.textContent = meal.calories;
                divMealContainer.appendChild(h3CaloriesEl);

                // Create Div Container for Buttons: ---->>>>
                const divMealButtonsEl = document.createElement('div');
                divMealContainer.classList.add('meal-buttons');

                const changeButtonEl = document.createElement('button');
                changeButtonEl.classList.add('change-meal');
                changeButtonEl.textContent = 'Change';
                changeButtonEl.value = meal._id;
                divMealButtonsEl.appendChild(changeButtonEl);

                const deleteButtonEl = document.createElement('button');
                deleteButtonEl.classList.add('delete-meal');
                deleteButtonEl.textContent = 'Delete';
                deleteButtonEl.value = meal._id;
                divMealButtonsEl.appendChild(deleteButtonEl);


                divMealContainer.appendChild(divMealButtonsEl);
                fragmentContainer.appendChild(divMealContainer);
            });

            divMealListEl.appendChild(fragmentContainer);
        })
        .catch('Something is wrong on GET Request!');
}

// ADD MEAL:
const addMealButtonEl = document.getElementById('add-meal');
addMealButtonEl.addEventListener('click', () => {
    const inputFoodNameEl = document.getElementById('food');
    const inputTimeEl = document.getElementById('time');
    const inputCaloriesEl = document.getElementById('calories');
    fetch(baseURL, {
        method: 'POST',
        headers: {
            'content-type': 'aplication/json',
        },
        body: JSON.stringify({
            food: inputFoodNameEl.value,
            calories: inputCaloriesEl.value,
            time: inputTimeEl.value,
        }),
    })
        .catch(() => console.log('Something is wrong with ADD Operation!'));

    inputFoodNameEl.value = '';
    inputCaloriesEl.value = '';
    inputTimeEl.value = '';
    doGetRequest();
});

// Change Meal:
function onClick(event) {
    const currentMeal = event.target.parentElement.parentElement;

    if (event.target.textContent === 'Change') {
        const inputFoodNameEl = document.getElementById('food');
        const inputTimeEl = document.getElementById('time');
        const inputCaloriesEl = document.getElementById('calories');

        inputFoodNameEl.value = currentMeal.getElementsByTagName('h2')[0].textContent;
        inputTimeEl.value = currentMeal.getElementsByTagName('h3')[0].textContent;
        inputCaloriesEl.value = currentMeal.getElementsByTagName('h3')[1].textContent;

        addMealButtonEl.setAttribute('disabled', true);

        const editMealButton = document.getElementById('edit-meal');
        editMealButton.removeAttribute('disabled');

        editMealButton.addEventListener('click', () => {
            fetch(`${baseURL}${event.target.value}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'aplication/json',
                },
                body: JSON.stringify({
                    food: inputFoodNameEl.value,
                    calories: inputCaloriesEl.value,
                    time: inputTimeEl.value,
                    _id: event.target.value,
                }),
            })
            .catch(() => console.log('Something is wrong with PUT Request!'));
            inputFoodNameEl.value = '';
            inputTimeEl.value = '';
            inputCaloriesEl.value = '';

            currentMeal.remove();
            doGetRequest();
        });

    } else if (event.target.textContent === 'Delete') {
        fetch(`${baseURL}${event.target.value}`, { method: 'DELETE' })
            .catch(() => console.log('Something is wrong with Delete Operation'));
        currentMeal.remove();
    }
}

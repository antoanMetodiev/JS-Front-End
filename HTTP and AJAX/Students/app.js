function attachEvents() {
    const URL = 'http://localhost:3030/jsonstore/collections/students';

    document.getElementById('submit').addEventListener('click', () => {
        // ADD info in the DOM:
        const firstName = document.querySelector('input[name=firstName]');
        const lastName = document.querySelector('input[name=lastName]');
        const facultyNumber = document.querySelector('input[name=facultyNumber]');
        const grade = document.querySelector('input[name=grade]');

        const tBodyElement = document.getElementsByTagName('tbody')[0];

        if (grade.value.trim() != '' && facultyNumber.value.trim() != '' && lastName.value.trim() != '' && firstName.value.trim() != '') {
            const trElement = document.createElement('tr');

            Array.of(firstName, lastName, facultyNumber, grade).forEach(input => {
                const tdElement = document.createElement('td');
                tdElement.textContent = input.value;
                trElement.appendChild(tdElement);
            });
            tBodyElement.appendChild(trElement);
        }

        // ADD info in the server:
        fetch(URL, {
            method: 'POST',
            headers: {
                'content-type': 'aplication/json',
            },
            body: JSON.stringify({
                firstName: firstName.value,
                lastName: lastName.value,
                facultyNumber: facultyNumber.value,
                grade: grade.value,
            })
        })
        .catch(() => console.log('POST request is not ok!'));

        firstName.value = '';
        lastName.value = '';
        facultyNumber.value = '';
        grade.value = '';
    });
}

attachEvents();
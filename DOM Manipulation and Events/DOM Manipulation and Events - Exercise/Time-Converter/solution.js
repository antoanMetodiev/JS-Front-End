function attachEventsListeners() {
    const allInputElements = document.getElementsByTagName('input');
    const textInputEls = [];
    let days = 0;

    for (let i = 0; i < allInputElements.length; i++) {
        if (i % 2 == 0) textInputEls.push(allInputElements[i]);

        else allInputElements[i].addEventListener('click', (event) => {
            const placeOfCall = event.target.parentElement.getElementsByTagName('label')[0].textContent.split(': ')[0].toLowerCase();

            let value = Number(event.target.previousElementSibling.value);
            const convertToDays = {
                days: value,
                hours: value / 24,
                minutes: value / 1440,
                seconds: value / 86400,
            };

            days = convertToDays[placeOfCall];
            textInputEls.forEach((time, index) => {
                if (index == 0) time.value = Number(days);
                else if (index == 1) time.value = days * 24;
                else if (index == 2) time.value = days * 1440;
                else time.value = days * 86400;
            })
        })
    }
}
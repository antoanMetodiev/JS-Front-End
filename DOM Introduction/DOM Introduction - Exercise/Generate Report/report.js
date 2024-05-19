function generateReport() {
    let employeeInputEl = document.getElementsByTagName('input');

    const data = []; 
    for (let i = 0; i < employeeInputEl.length; i++) {
        if (employeeInputEl[i].checked) {
            let tdElements = document.querySelectorAll(`tr td:nth-of-type(${i + 1})`);

            if (data.length == 0) {
                tdElements.forEach(td => {
                    const propName = employeeInputEl[i].parentElement.textContent.toLocaleLowerCase().trim();
                    data.push({ [propName]: td.textContent });
                })
            } else {
                tdElements.forEach((td, index) => {
                    const propName = employeeInputEl[i].parentElement.textContent.toLocaleLowerCase().trim();
                    data[index][propName] = td.textContent;
                })
            }
        }
    }
    document.getElementById('output').textContent = JSON.stringify(data, null, 2);
}

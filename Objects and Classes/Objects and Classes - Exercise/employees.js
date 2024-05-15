function solve(employeesData) {
    const employees = {};
    employeesData.forEach(el => { employees[el] = el.length });
    Object.keys(employees).forEach(key => console.log(`Name: ${key} -- Personal Number: ${employees[key]}`));
}

solve(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);

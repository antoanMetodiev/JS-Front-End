function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let inputElement = document.getElementsByTagName('textarea')[0];
      let textAreaText = inputElement.value.substring(1, inputElement.value.length - 2);

      let restourantsData = textAreaText.split('",'); 
      restourantsData.map(el => {
         return el = el.substring(2);
      })

      let restourants = []; 
      restourantsData.forEach(restourant => {

         let restourantName = restourant.split(' - ')[0].trim().substring(1);
         let workersData = restourant.split(' - ')[1].split(', ');
         let isIncludes = checkAllElsHaveRestaurant(restourantName);

         if (isIncludes) {
            isIncludes -= 1;

            for (let worker of workersData) {
               let [name, salary] = worker.split(' ');
               restourants[isIncludes].workers.push({name, salary});
               console.log('ima i dr restorant s toba ime ');
            }

         } else {
            const restObj = {};
            restObj.name = restourantName;
            let workers = [];

            for (let worker of workersData) {
               let [name, salary] = worker.split(' ');
               workers.push({ name, salary });
            }
            restObj['workers'] = workers;
            restourants.push(restObj);
         }
      })

      // Sort Average Salary for Every Restourants:
      sortAvgSalaryForEveryRest();

      // Find Biggest Average Salary for every restourant:
      restourants = sortingArrBiggestAvgSalary();

      // Sort Salaries:
      sortSalaries();

      // OUTPUT:
      let bestRestaurant = document.getElementById('bestRestaurant').getElementsByTagName('p')[0];
      bestRestaurant.textContent = `Name: ${restourants[0].name} Average Salary: ${restourants[0].averageSalary} 
      Best Salary: ${(Number(restourants[0].workers[0].salary).toFixed(2))}`;

      let bestWorkers = document.getElementById('workers').getElementsByTagName('p')[0];
      for (const restourant of restourants) {
         restourant.workers.forEach(worker => {
            bestWorkers.textContent += `Name: ${worker.name} With Salary: ${worker.salary} `;
         })
         break;
      }

      
      // FUNCTIONS:
      function checkAllElsHaveRestaurant(searchedName) {
         for (let i = 0; i < restourants.length; i++) {
            if (restourants[i].name == searchedName) return (i + 1);
         }
         return false;
      }

      function sortingArrBiggestAvgSalary() {
         return restourants.sort((obj1, obj2) => {
            return obj2.averageSalary - obj1.averageSalary;
         });
      }

      function sortSalaries() {
         for (let restourant of restourants) {
            restourant = restourant.workers.sort((worker1, worker2) => {
               return Number(worker2.salary) - Number(worker1.salary);
            });
         }
      }

      function sortAvgSalaryForEveryRest() {
         for (let obj of restourants) {

            let averageSalary = 0;
            let workersInRestourant = 0;
            obj.workers.forEach(el => {
               if (el.salary.includes('"')) {
                  el.salary = Number(el.salary.toString().substring(0, el.salary.length - 1));
                  console.log(el.salary);
               }
               averageSalary += Number(el.salary);
               workersInRestourant++;
            });
            averageSalary /= workersInRestourant;
            obj['averageSalary'] = averageSalary.toFixed(2);
         }
      }
   }
}

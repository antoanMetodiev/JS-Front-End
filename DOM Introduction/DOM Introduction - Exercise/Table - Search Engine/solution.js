function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   function onClick() {
      let searchedText = document.getElementById('searchField');
      let trElements = document.querySelectorAll('tbody tr');

      Array.from(document.querySelectorAll('tbody tr')).forEach((tr) => {
         for (let td of tr.children) {
            if (td.textContent.includes(searchedText.value)) {
               td.parentElement.classList.add('select');
               break;
            } 
         }
      });
      searchedText.value = '';
   }
}

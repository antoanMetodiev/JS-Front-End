function search() {
   const liElements = document.getElementById('towns').children; // names of towns!
   Array.from(liElements).forEach((li, index) => {
      liElements[index].style.textDecoration = 'none';
      liElements[index].style.fontWeight = 'unset';
   });
   const searchedTown = document.getElementById('searchText');
   let matchedWordsCount = 0;
   Array.from(liElements).forEach((li, index) => {
      if (li.textContent.includes(searchedTown.value)) {
         liElements[index].style.textDecoration = 'underline';
         liElements[index].style.fontWeight = 'bold';
         matchedWordsCount++;
      }
   });
   document.getElementById('result').textContent = matchedWordsCount + ' matches found';
   searchedTown.value = '';
}
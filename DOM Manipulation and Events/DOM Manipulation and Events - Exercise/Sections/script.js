function create(words) {
   const fragmentContainer = document.createDocumentFragment();
   words.forEach(word => {
      const createdDivElement = document.createElement('div');
      const createdParagraphEl = document.createElement('p');
      createdParagraphEl.textContent = word;
      createdParagraphEl.style.display = 'none';

      createdDivElement.appendChild(createdParagraphEl);
      createdDivElement.onclick = onClick;
      fragmentContainer.appendChild(createdDivElement);
   });

   document.getElementById('content').appendChild(fragmentContainer);
   function onClick(event) {
      event.target.children[0].style.display = 'block';
   }
}

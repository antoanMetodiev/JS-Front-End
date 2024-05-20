function create(words) {
   const divContainerElement = document.getElementById('content');
   words.forEach(word => {
      const createdDivElement = document.createElement('div');
      const createdParagraphEl = document.createElement('p');
      createdParagraphEl.textContent = word;
      createdParagraphEl.style.display = 'none';

      createdDivElement.appendChild(createdParagraphEl);
      createdDivElement.onclick = onClick;
      divContainerElement.appendChild(createdDivElement);
   });

   function onClick(event) {
      event.target.children[0].style.display = 'block';
   }
}
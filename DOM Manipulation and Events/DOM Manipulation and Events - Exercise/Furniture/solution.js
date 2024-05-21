function solve() {
    let [generateButtonEl, buyButtonEl] = document.getElementsByTagName('button');
    let [generatedTextArea, buiedProductsTextAreaEl] = document.getElementsByTagName('textarea');

    generateButtonEl.addEventListener('click', () => {
        const tBodyElement = document.querySelector('tbody');
        generatedTextArea = document.querySelector('textarea');

        JSON.parse(generatedTextArea.value).forEach(furniture => {
            const trElementContainer = document.createElement('tr');

            // Img:
            let tdElement = document.createElement('td');
            let childEl = document.createElement('img');
            childEl.setAttribute('src', furniture.img);
            tdElement.appendChild(childEl);
            trElementContainer.appendChild(tdElement);

            // Furniture Name:
            tdElement = document.createElement('td');
            childEl = document.createElement('p');
            childEl.textContent = furniture.name;
            tdElement.appendChild(childEl);
            trElementContainer.appendChild(tdElement);

            // Price:
            tdElement = document.createElement('td');
            childEl = document.createElement('p');
            childEl.textContent = furniture.price;
            tdElement.appendChild(childEl);
            trElementContainer.appendChild(tdElement);

            // Dec Factor:
            tdElement = document.createElement('td');
            childEl = document.createElement('p');
            childEl.textContent = furniture.decFactor;
            tdElement.appendChild(childEl);
            trElementContainer.appendChild(tdElement);

            // Check Box Input:
            tdElement = document.createElement('td');
            childEl = document.createElement('input');
            childEl.setAttribute('type', 'checkbox');
            tdElement.appendChild(childEl);
            trElementContainer.appendChild(tdElement);

            // Append Element to DOM Tree:
            tBodyElement.appendChild(trElementContainer);
        });
        generatedTextArea.value = '';
    });

    buyButtonEl.addEventListener('click', () => {
        let totalPrice = 0;
        let purchasedProducts = [];
        let decorationFactors = 0;
        let purchasedProductsCount = 0;

        for (const trEl of document.querySelectorAll('tbody tr')) {
            if (trEl.querySelector('td input').checked) {
                const [imgEl, furnitureName, price, decFactor] = trEl.querySelectorAll('td')
                totalPrice += Number(price.textContent);
                purchasedProducts.push(furnitureName.textContent);
                decorationFactors += Number(decFactor.textContent);
                purchasedProductsCount++;
            }
        }

        buiedProductsTextAreaEl.value = `Bought furniture: ${purchasedProducts.join(', ')}\n` +
            `Total price: ${totalPrice.toFixed(2)}\n` + `Average decoration factor: ${decorationFactors / purchasedProductsCount}`;
    });
}
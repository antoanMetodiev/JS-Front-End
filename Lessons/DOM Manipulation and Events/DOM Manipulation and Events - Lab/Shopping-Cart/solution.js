function solve() {
   // add (Click Events) on ADD Buttons
   const textAreaEl = document.getElementsByTagName('textarea')[0];
   const allProducts = document.getElementsByClassName('add-product');
   let isWasInside = false;  // inside in addClickEventListenerOncheckoutButton();
   for (const button of allProducts) {
      button.addEventListener('click', (event) => {
         if (!isWasInside) {
            const productName = event.target.parentElement.parentElement.getElementsByClassName('product-title')[0].textContent;
            const price = event.target.parentElement.parentElement.getElementsByClassName('product-line-price')[0].textContent;
            textAreaEl.value += `Added ${productName} for ${price} to the cart.\n`;
         }
      })
   }

   // Add (Click Event) on CHECKOUT BUTTON
   const checkoutButtonElement = document.getElementsByClassName('checkout')[0];
   let basketOfProducts = new Map();

   checkoutButtonElement.addEventListener('click', addClickEventListenerOncheckoutButton);
   function addClickEventListenerOncheckoutButton() {
      if (!isWasInside) {
         let buyedProductsData = textAreaEl.value.split('\n');
         buyedProductsData.pop();
         isWasInside = true;

         for (let currentData of buyedProductsData) {

            let productData = currentData.split(' ');
            if (!basketOfProducts.has(productData[1])) {
               basketOfProducts.set(productData[1], Number(productData[3]));
            } else {
               const previousPrice = basketOfProducts.get(productData[1]) + Number(productData[3]);
               basketOfProducts.set(productData[1], previousPrice);
            }
         }

         const productNames = Array.from(basketOfProducts.keys()).join(', ');
         let totalPrice = 0;
         Array.from(basketOfProducts.values()).forEach(price => totalPrice += Number(price));
         textAreaEl.value += `You bought ${productNames} for ${totalPrice.toFixed(2)}.`;
      }
   }
}
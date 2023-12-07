function solve() {
   const addButtons = Array.from(document.querySelectorAll("button.add-product"));
   const checkoutButton = document.querySelector("button.checkout");
   const textArea = document.querySelector("textarea");

   let boughtProducts = [];
   let totalPrice = 0;

   addButtons.forEach((btn) => {
      btn.addEventListener("click", addElementInTheCard);
   });

   function addElementInTheCard(e) {
      const currentProduct = e.currentTarget.parentNode.parentNode;

      const productTitle = currentProduct.querySelector(".product-title").textContent;
      const productPrice = currentProduct.querySelector(".product-line-price").textContent;

      if (!boughtProducts.includes(productTitle)) {
         boughtProducts.push(productTitle);
      }

      totalPrice += Number(productPrice);
      textArea.value += `Added ${productTitle} for ${productPrice} to the cart.\n`;
   }
   checkoutButton.addEventListener("click", checkout);

   function checkout(e) {
      textArea.value += `You bought ${boughtProducts.join(', ')} for ${totalPrice.toFixed(2)}.`
      checkoutButton.disabled = 'true';

      addButtons.forEach((btn) => {
         btn.removeEventListener("click", addElementInTheCard);
         btn.disabled = true;
      });
   }
}


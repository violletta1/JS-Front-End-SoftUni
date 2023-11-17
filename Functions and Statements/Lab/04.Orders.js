function calculateOrderPrice(product, quantity) {
    // Define the prices for each product
    const prices = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00
    };

    // Check if the product is valid
    if (prices.hasOwnProperty(product)) {
        // Calculate the total price
        let totalPrice = prices[product] * quantity;

        // Print the result formatted to the second decimal place
        console.log(totalPrice.toFixed(2));
    } else {
        // Print an error message for invalid products
        console.log("Invalid product. Please choose from coffee, water, coke, or snacks.");
    }
}

// Examples
calculateOrderPrice("water", 5);
// Output: 5.00

calculateOrderPrice("coffee", 2);
// Output: 3.00

function storeProvision(currentStock, order) {
    // Create an object to store the quantities
    const stockObject = {};
  
    // Iterate through the current stock array
    for (let i = 0; i < currentStock.length; i += 2) {
      const product = currentStock[i];
      const quantity = parseInt(currentStock[i + 1]);
  
      // Add the product and quantity to the stockObject
      stockObject[product] = quantity;
    }
  
    // Iterate through the order array
    for (let i = 0; i < order.length; i += 2) {
      const product = order[i];
      const quantity = parseInt(order[i + 1]);
  
      // If the product is already in stockObject, increase the quantity
      if (stockObject.hasOwnProperty(product)) {
        stockObject[product] += quantity;
      } else {
        // If the product is not in stockObject, add it
        stockObject[product] = quantity;
      }
    }
  
    // Print the results in the specified format
    for (const product in stockObject) {
      console.log(`${product} -> ${stockObject[product]}`);
    }
  }
  
  // Example usage
  const currentStock = [
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14',
    'Pasta', '4', 'Beer', '2'
  ];
  
  const order = [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
  ];
  
  storeProvision(currentStock, order);
  
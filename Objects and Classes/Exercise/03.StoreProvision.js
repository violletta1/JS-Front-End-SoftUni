function storeProvision(currentStock, order) {
    const stockObject = {};
  
    // Process current stock using forEach
    currentStock.forEach((value, index) => {
      if (index % 2 === 0) {
        const product = value;
        const quantity = parseInt(currentStock[index + 1]);
        stockObject[product] = quantity;
      }
    });
  
    // Process order using forEach
    order.forEach((value, index) => {
      if (index % 2 === 0) {
        const product = value;
        const quantity = parseInt(order[index + 1]);
  
        if (stockObject.hasOwnProperty(product)) {
          stockObject[product] += quantity;
        } else {
          stockObject[product] = quantity;
        }
      }
    });
  
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
  
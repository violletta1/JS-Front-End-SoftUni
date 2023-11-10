function calculateFruitCost(fruitType, weightInGrams, pricePerKilogram) {
    // Convert weight to kilograms (since price is per kilogram)
    const weightInKilograms = weightInGrams / 1000;
  
    // Calculate the cost
    const cost = weightInKilograms * pricePerKilogram;
  
    // Format the cost and weight to two decimal places
    const formattedCost = cost.toFixed(2);
    const formattedWeight = weightInKilograms.toFixed(2);
  
    console.log(`I need $${formattedCost} to buy ${formattedWeight} kilograms ${fruitType}.`);
  }
  
  // Test cases
  calculateFruitCost('orange', 2500, 1.80);  // Output: I need $4.50 to buy 2.50 kilograms orange.
  calculateFruitCost('apple', 1563, 2.35);   // Output: I need $3.67 to buy 1.56 kilograms apple.
  
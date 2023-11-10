function calculateTotalPrice(peopleCount, groupType, dayOfWeek) {
    let pricePerPerson = 0;
  
    switch (groupType) {
      case "Students":
        switch (dayOfWeek) {
          case "Friday":
            pricePerPerson = 8.45;
            break;
          case "Saturday":
            pricePerPerson = 9.80;
            break;
          case "Sunday":
            pricePerPerson = 10.46;
            break;
        }
        break;
      case "Business":
        switch (dayOfWeek) {
          case "Friday":
            pricePerPerson = 10.90;
            break;
          case "Saturday":
            pricePerPerson = 15.60;
            break;
          case "Sunday":
            pricePerPerson = 16;
            break;
        }
        break;
      case "Regular":
        switch (dayOfWeek) {
          case "Friday":
            pricePerPerson = 15;
            break;
          case "Saturday":
            pricePerPerson = 20;
            break;
          case "Sunday":
            pricePerPerson = 22.50;
            break;
        }
        break;
    }
  
    // Calculate the base total price
    let totalPrice = peopleCount * pricePerPerson;
  
    // Apply discounts based on the conditions
    switch (groupType) {
      case "Students":
        if (peopleCount >= 30) {
          totalPrice *= 0.85; // 15% discount for students with 30 or more people
        }
        break;
      case "Business":
        if (peopleCount >= 100) {
          totalPrice -= 10 * pricePerPerson; // 10 people stay for free for business with 100 or more people
        }
        break;
      case "Regular":
        if (peopleCount >= 10 && peopleCount <= 20) {
          totalPrice *= 0.95; // 5% discount for regular groups with 10-20 people
        }
        break;
    }
  
    // Format the total price to two decimal places
    totalPrice = totalPrice.toFixed(2);
  
    console.log(`Total price: ${totalPrice}`);
  }
  
  // Test cases
  calculateTotalPrice(30, "Students", "Sunday");   // Output: Total price: 266.73
  calculateTotalPrice(40, "Regular", "Saturday");  // Output: Total price: 800.00
  
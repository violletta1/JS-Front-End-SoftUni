function calculateTicketPrice(dayType, age) {
    let price = 0;
  
    if (age >= 0 && age <= 18) {
      switch (dayType) {
        case 'Weekday':
          price = 12;
          break;
        case 'Weekend':
          price = 15;
          break;
        case 'Holiday':
          price = 5;
          break;
        default:
          return 'Error!';
      }
    } else if (age > 18 && age <= 64) {
      switch (dayType) {
        case 'Weekday':
          price = 18;
          break;
        case 'Weekend':
          price = 20;
          break;
        case 'Holiday':
          price = 12;
          break;
        default:
          return 'Error!';
      }
    } else if (age > 64 && age <= 122) {
      switch (dayType) {
        case 'Weekday':
          price = 12;
          break;
        case 'Weekend':
          price = 15;
          break;
        case 'Holiday':
          price = 10;
          break;
        default:
          return 'Error!';
      }
    } else {
      return 'Error!';
    }
  
    return price + '$';
  }
  
  // Example usage:
  console.log(calculateTicketPrice('Weekday', 25)); // Output: $18
  console.log(calculateTicketPrice('Weekend', 70));  // Output: $15
  console.log(calculateTicketPrice('Holiday', -10));  // Output: $5
  console.log(calculateTicketPrice('InvalidDay', 35)); // Output: Error!
  
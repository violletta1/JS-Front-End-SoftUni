function sumDigits(number) {
    let sum = 0;
    while (number > 0) {
      let digit = number % 10;
      sum += digit;
      number = Math.floor(number / 10);
    }
    return sum;
  }
  
  // Test cases
  console.log(sumDigits(245678)); // Output: 32
  console.log(sumDigits(97561));  // Output: 28
  console.log(sumDigits(543));    // Output: 12
  
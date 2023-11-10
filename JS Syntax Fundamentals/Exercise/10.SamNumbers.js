function checkSameNumbersAndSum(number) {
    const numberString = number.toString();
    const firstDigit = numberString[0];
    let allSame = true;
    let sum = 0;
  
    for (let digit of numberString) {
      if (digit !== firstDigit) {
        allSame = false;
      }
      sum += parseInt(digit);
    }
  
    console.log(allSame);
    console.log(sum);
  }
  
  // Test cases
  checkSameNumbersAndSum(2222222);  // Output: true\n14
  checkSameNumbersAndSum(1234);     // Output: false\n10
  
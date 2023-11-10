function printAndSum(start, end) {
    let sum = 0;
    let numbers = [];
  
    for (let i = start; i <= end; i++) {
      numbers.push(i);
      sum += i;
    }
  
    console.log(numbers.join(' '));
    console.log(`Sum: ${sum}`);
  }
  
  // Test cases
  printAndSum(5, 10);   // Output: 5 6 7 8 9 10 Sum: 45
  printAndSum(0, 26);   // Output: 0 1 2 ... 26 Sum: 351
  printAndSum(50, 60); 
  
  // Test cases
  printAndSum(5, 10);   // Output: 5 6 7 8 9 10 Sum: 45
  printAndSum(0, 26);   // Output: 0 1 2 ... 26 Sum: 351
  printAndSum(50, 60);  // Output: 50 51 52 53 54 55 56 57 58 59 60 Sum: 605
  
function printNumbersFromMtoN(M, N) {
    for (let i = M; i >= N; i--) {
      console.log(i);
    }
  }
  
  // Examples of how to use the function:
  printNumbersFromMtoN(6, 2);
  // Output:
  // 6
  // 5
  // 4
  // 3
  // 2
  
  printNumbersFromMtoN(4, 1);
  // Output:
  // 4
  // 3
  // 2
  // 1
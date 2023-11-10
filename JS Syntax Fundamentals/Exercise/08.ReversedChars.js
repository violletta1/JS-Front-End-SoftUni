function reversedChars(char1, char2, char3) {
    let reversedString = char3 + ' ' + char2 + ' ' + char1;
    console.log(reversedString);
  }
  
  // Test cases
  reversedChars('A', 'B', 'C');   // Output: C B A
  reversedChars('1', 'L', '&');   // Output: & L 1
  
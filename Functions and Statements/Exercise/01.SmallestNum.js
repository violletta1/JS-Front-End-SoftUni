function findSmallestNumber(num1, num2, num3) {
    // Use the Math.min() method to find the smallest number
    const smallestNumber = Math.min(num1, num2, num3);

    // Print the smallest number to the console
    console.log(smallestNumber);
}

//second 
function findSmallestNumber2(num1, num2, num3) {
    // Print the smallest number to the console
    console.log(Math.min(num1, num2, num3));
}

// Examples
findSmallestNumber(2, 5, 3);   // Output: 2
findSmallestNumber(600, 342, 123);  // Output: 123
findSmallestNumber2(25, 21, 4);   // Output: 4
findSmallestNumber2(2, 2, 2);    // Output: 2

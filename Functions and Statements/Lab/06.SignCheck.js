function signCheck(numOne, numTwo, numThree) {
    // Count the number of negative numbers
    const negativeCount = [numOne, numTwo, numThree].filter(num => num < 0).length;

    // Check the parity of the negative count
    const isPositive = negativeCount % 2 === 0;

    // Print the result based on the parity
    if (isPositive) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

// Examples
signCheck(5, 12, -15);   // Output: Negative
signCheck(-6, -12, 14);  // Output: Positive
signCheck(-1, -2, -3);   // Output: Negative
signCheck(-5, 1, 1);     // Output: Negative

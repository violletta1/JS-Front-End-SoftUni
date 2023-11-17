
function oddAndEvenSum(number) {
    // Convert the number to a string to iterate through its digits
    const numStr = number.toString();

    let oddSum = 0;
    let evenSum = 0;

    // Iterate through each digit in the string
    for (let i = 0; i < numStr.length; i++) {
        const digit = parseInt(numStr[i]);

        // Check if the digit is odd or even and update the respective sum
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }

    // Output the results
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

// Examples
oddAndEvenSum(1000435);  // returns Odd sum = 9, Even sum = 4
oddAndEvenSum(3495892137259234);  // returns Odd sum = 54, Even sum = 22


function oddAndEvenSum2(number) {
    // Convert the number to an array of individual digits
    const numArr = Array.from(String(number), Number);

    // Initialize variables to store the sum of even and odd digits
    let evenSum = 0;
    let oddSum = 0;

    // Iterate through each digit in the array
    for (let i = 0; i < numArr.length; i++) {
        // Check if the digit is even or odd and update the respective sum
        if (numArr[i] % 2 === 0) {
            evenSum += numArr[i];
        } else {
            oddSum += numArr[i];
        }
    }

    // Print the results
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

// Examples
oddAndEvenSum2(1000435);
oddAndEvenSum2(3495892137259234);

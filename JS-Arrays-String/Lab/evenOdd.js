function evenAndOddSubtraction(array) {
    // Initialize variables for even and odd sum
    let evenSum = 0;
    let oddSum = 0;

    // Iterate through all elements in the array
    for (let i = 0; i < array.length; i++) {
        // Parse each string to a number
        let number = Number(array[i]);

        // Check if the number is even or odd
        if (number % 2 === 0) {
            evenSum += number; // Add to even sum
        } else {
            oddSum += number; // Add to odd sum
        }
    }

    // Calculate the difference between the sum of even and odd numbers
    let difference = evenSum - oddSum;

    // Print the difference
    console.log(difference);
}

// Examples
let input1 = [1, 2, 3, 4, 5, 6];
evenAndOddSubtraction(input1);

let input2 = [3, 5, 7, 9];
evenAndOddSubtraction(input2);

let input3 = [2, 4, 6, 8, 10];
evenAndOddSubtraction(input3);

function repeatString(inputString, repeatCount) {
    // Check if the repeatCount is a non-negative integer
    if (repeatCount >= 0 && Number.isInteger(repeatCount)) {
        // Use the repeat() method to repeat the input string
        let result = inputString.repeat(repeatCount);

        // Return the result
        return result;
    } else {
        // Return an error message for invalid repeatCount
        return "Invalid repeatCount. Please provide a non-negative integer.";
    }
}

// Examples
console.log(repeatString("abc", 3));
// Output: abcabcabc

console.log(repeatString("String", 2));
// Output: StringWriter

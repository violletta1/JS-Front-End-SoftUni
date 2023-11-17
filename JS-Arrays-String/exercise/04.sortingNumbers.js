function sortNumbersAlternate(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Create a new array to store the result
    let result = [];

    // Use two pointers to traverse the sorted array in an alternating pattern
    let leftPointer = 0;
    let rightPointer = arr.length - 1;

    // Populate the result array in the specified order
    while (leftPointer <= rightPointer) {
        result.push(arr[leftPointer]);

        if (leftPointer !== rightPointer) {
            result.push(arr[rightPointer]);
        }

        leftPointer++;
        rightPointer--;
    }

    return result;
}

// Example
let input = [1, 65, 3, 52, 48, 63, 31, -3, 18, 56];
let output = sortNumbersAlternate(input);
console.log(output);
// Output: [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]

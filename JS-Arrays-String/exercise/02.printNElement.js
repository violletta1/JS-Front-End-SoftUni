function printEveryNthElement(array, step) {
    // Initialize an array to store the result
    let result = [];

    // Iterate through the array with a for loop, incrementing by the step value
    for (let i = 0; i < array.length; i += step) {
        result.push(array[i]); // Add the current element to the result array
    }

    return result;
}

// Examples
let input1 = ['5', '20', '31', '4', '20'];
console.log(printEveryNthElement(input1, 2));
// Output: ['5', '31', '20']

let input2 = ['dsa', 'asd', 'test', 'tset'];
console.log(printEveryNthElement(input2, 2));
// Output: ['dsa', 'test']

let input3 = ['1', '2', '3', '4', '5'];
console.log(printEveryNthElement(input3, 6));
// Output: ['1']

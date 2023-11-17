function sumFirstAndLastElements(array) {
    // Check if the array is not empty
    if (array.length > 0) {
        // Calculate the sum of the first and last elements
        var resultSum = array[0] + array[array.length - 1];
        console.log(resultSum);
    } else {
        console.log("Array is empty.");
    }
}

// Examples
var input1 = [20, 30, 40];
sumFirstAndLastElements(input1);

var input2 = [10, 17, 22, 33];
sumFirstAndLastElements(input2);

var input3 = [11, 58, 69];
sumFirstAndLastElements(input3);

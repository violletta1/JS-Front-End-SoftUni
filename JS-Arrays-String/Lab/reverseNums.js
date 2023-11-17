function reverseAndPrintNElements(n, array) {
    // Create a new array with the first n elements
    let newArray = array.slice(0, n);

    // Reverse the new array
    newArray.reverse();

    // Print the reversed elements on a single line, space-separated
    console.log(newArray.join(' '));
}

// Examples
let input1 = [3, [10, 20, 30, 40, 50]];
reverseAndPrintNElements(...input1);

let input2 = [4, [-1, 20, 99, 5]];
reverseAndPrintNElements(...input2);

let input3 = [2, [66, 43, 75, 89, 47]];
reverseAndPrintNElements(...input3);

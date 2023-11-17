function solve(num1, num2, num3) {
    function sum(x, y) {
        return x + y;
    }

    function subtract(x, y) {
        return x - y;
    }

    return subtract(sum(num1, num2), num3);
}

console.log(solve(23, 6, 10));   // Output: 19
console.log(solve(1, 17, 30));   // Output: -12
console.log(solve(42, 58, 100)); // Output: 0



// second 

// function sum(a, b) {
//     // Calculate the sum of the first two integers
//     return a + b;
// }

// function subtract(sumResult, c) {
//     // Subtract the third integer from the sum result
//     // return sumResult - c;
//     console.log(sumResult - c);
// }

// // Examples
// const result1 = sum(23, 6);
// const finalResult1 = subtract(result1, 10);
// // console.log(finalResult1);  // Output: 19

// const result2 = sum(1, 17);
// const finalResult2 = subtract(result2, 30);
// // console.log(finalResult2);  // Output: -12

// const result3 = sum(42, 58);
// const finalResult3 = subtract(result3, 100);
// // console.log(finalResult3);  // Output: 0




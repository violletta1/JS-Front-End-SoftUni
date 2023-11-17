function calculate(num1, num2, operator) {
    // Object with arrow functions
    const calculator = {
        multiply: (x, y) => x * y,
        divide: (x, y) => x / y,
        add: (x, y) => x + y,
        subtract: (x, y) => x - y,
    };

    // Check if the operator exists in the calculator object
    const fun = calculator[operator];

    if (!fun) {
        return 0;
    }

    // Return the result of the corresponding operation
    return calculator[operator](num1, num2);
}

// Example usage
const result = calculate(5, 5, 'multiply');
console.log(result); // Output: 25

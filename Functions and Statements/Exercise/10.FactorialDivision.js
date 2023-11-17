function factorialDivision(num1, num2) {
    // Function to calculate factorial
    function calculateFactorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * calculateFactorial(n - 1);
        }
    }

    // Calculate factorials and perform division
    let result = calculateFactorial(num1) / calculateFactorial(num2);

    // Print the result formatted to the second decimal point
    console.log(result.toFixed(2));
}


//second 

function factorialDivision2(num1, num2) {
    
    function factorial(num) {
        let numFactorial = 1;
        for (let i = num; i > 0 ; i--) {
            numFactorial *= i;
        }
        return numFactorial;
    }

    console.log((factorial(num1) / factorial(num2)).toFixed(2));
}

// Examples
factorialDivision(5, 2);
factorialDivision(6, 2);

factorialDivision2(5, 2);
factorialDivision2(6, 2);

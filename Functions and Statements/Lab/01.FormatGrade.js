function formatGrade(grade) {
    // Round the grade to two decimal places
    let result = grade.toFixed(2);

    if (result >= 5.50) {
        return `Excellent (${result})`;
    } else if (result >= 4.50) {
        return `Very good (${result})`;
    } else if (result >= 3.50) {
        return `Good (${result})`;
    } else if (result >= 3.00) {
        return `Poor (${result})`;
    } else {
        return `Fail (2)`;
    }
}

// Examples
console.log(formatGrade(3.33));
// Output: Poor (3.33)

console.log(formatGrade(5.50));
// Output: Excellent (5.50)

console.log(formatGrade(2.99));
// Output: Fail (2)

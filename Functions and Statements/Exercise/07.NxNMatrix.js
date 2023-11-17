function printMatrix(n) {
    for (let row = 0; row < n; row++) {
        let rowString = '';
        for (let col = 0; col < n; col++) {
            rowString += `${n} `;
        }
        console.log(rowString.trim());
    }
}

// Examples
printMatrix(3); //3 3 3
                //3 3 3
                //3 3 3
printMatrix(7);
printMatrix(2);

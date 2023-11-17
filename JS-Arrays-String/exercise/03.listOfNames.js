function printSortedNames(names) {
    // Sort the array of names alphabetically
    names.sort();

    // Print the numbered list
    for (let i = 0; i < names.length; i++) {
        console.log(`${i + 1}.${names[i]}`);
    }
}

// Example
let input = ["John", "Bob", "Christina", "Ema"];
printSortedNames(input);

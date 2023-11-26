function phoneBook(input) {
    // Create an empty object to store phone book entries
    let phoneBookEntries = {};

    // Process each input string
    input.forEach(entry => {
        // Split the entry into name and number
        let [name, number] = entry.split(' ');

        // Update or add the entry to the phone book
        phoneBookEntries[name] = number;
    });

    // Print the phone book entries
    for (let name in phoneBookEntries) {
        console.log(`${name} -> ${phoneBookEntries[name]}`);
    }
}

// Example usage 1:
let input1 = [
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
];
phoneBook(input1);

// Example usage 2:
let input2 = [
    'George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'
];
phoneBook(input2);

const text = "Peter: 123 Mark: 456";
const regexp = /([A-Z][a-z]+): (\d+)/g;
const firstMatch = regexp.exec(text);
console.log(firstMatch[0]); // Peter: 123
console.log(firstMatch[1]); // Peter
console.log(firstMatch[2]); 



function countOccurrences(text, word) {
    // Split the text into an array of words
    let words = text.split(' ');

    // Initialize a counter for occurrences
    let occurrences = 0;

    // Iterate through each word and check if it matches the target word
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            occurrences++;
        }
    }

    // Print the number of occurrences
    console.log(occurrences);
}

// Examples
countOccurrences('This is a word and it also is a sentence', 'is');
// Output: 2

countOccurrences('softuni is great place for learning new programming languages', 'softuni');
// Output: 1

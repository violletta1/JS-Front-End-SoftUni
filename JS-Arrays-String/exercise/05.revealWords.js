function replaceWords(wordsString, templateString) {
    // Split the words string into an array of words
    let words = wordsString.split(', ');

    // Split the template string into an array of templates
    let templates = templateString.split(' ');

    // Iterate through the templates
    for (let i = 0; i < templates.length; i++) {
        // Check if the template contains '*'
        if (templates[i].includes('*')) {
            // Find a word with the same length as the template
            let matchingWord = words.find(word => word.length === templates[i].length);

            // Replace the template with the matching word (or leave it unchanged if no match is found)
            templates[i] = matchingWord || templates[i];
        }
    }

    // Join the modified templates into a new string
    let result = templates.join(' ');

    return result;
}

// Examples
let input1 = replaceWords('great', 'softuni is ***** place for learning new programming languages');
console.log(input1);
// Output: softuni is great place for learning new programming languages

let input2 = replaceWords('great, learning', 'softuni is ***** place for ******** new programming languages');
console.log(input2);
// Output: softuni is great place for learning new programming languages

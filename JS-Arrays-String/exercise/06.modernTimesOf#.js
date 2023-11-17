function extractSpecialWords(inputString) {
    // Split the input string into an array of words
    let words = inputString.split(' ');

    // Initialize an array to store the special words
    let specialWords = [];

    // Iterate through the words to find special words starting with '#'
    for (let i = 0; i < words.length; i++) {
        // Check if the word starts with '#'
        if (words[i].startsWith('#')) {
            // Remove '#' and check if the remaining part consists only of letters
            let wordWithoutHash = words[i].slice(1);
            if (/^[a-zA-Z]+$/.test(wordWithoutHash)) {
                specialWords.push(wordWithoutHash);
            }
        }
    }

    // Print the special words on new lines
    specialWords.forEach(word => console.log(word));
}

// Examples
let input1 = 'Nowadays everyone uses # to tag a #special word in #socialMedia';
extractSpecialWords(input1);
// Output:
// special
// socialMedia

let input2 = 'The symbol # is known #variously in English-speaking #regions as the #number sign';
extractSpecialWords(input2);
// Output:
// variously
// regions
// number

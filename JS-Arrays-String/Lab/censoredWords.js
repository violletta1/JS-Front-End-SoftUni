function censorWord(text, word) {
    // Use a regular expression with global flag to match all occurrences of the word
    let regex = new RegExp(word, 'g');

    // Replace each occurrence with '*' repeated the same number of times as the word's length
    let censoredText = text.replace(regex, match => '*'.repeat(match.length));

    // Print the censored text
    console.log(censoredText);
}

// Examples
censorWord('A small sentence with some words', 'small');
// Output: A ***** sentence with some words

censorWord('Find the hidden word', 'hidden');
// Output: Find the ****** word


// second example

function censorWord(text, word) {
    let censoredText = text.replace(word, customRepeat(word));
    while (censoredText.includes(word)) {
        censoredText = censoredText.replace(word, customRepeat(word));
    }
    // Define the customRepeat function
function customRepeat(word) {
    return '*'.repeat(word.length);
}
    console.log(censoredText);
}



// Examples
censorWord('A small sentence with some words', 'small');
// Output: A ***** sentence with some words

censorWord('Find the hidden word', 'hidden');
// Output: Find the ****** word


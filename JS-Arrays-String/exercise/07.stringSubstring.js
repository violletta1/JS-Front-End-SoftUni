// function findWord(word, text) {
//     // Convert both the word and the text to lowercase for case-insensitive comparison
//     let lowerCaseWord = word.toLowerCase();
//     let lowerCaseText = text.toLowerCase();

//     // Check if the lowercased text contains the lowercased word
//     if (lowerCaseText.includes(lowerCaseWord)) {
//         console.log(word);
//     } else {
//         console.log(`${word} not found!`);
//     }
// }

// // Examples
// findWord('javascript', 'JavaScript is the best programming language');
// // Output: javascript

// findWord('python', 'JavaScript is the best programming language');
// // Output: python not found!
function substring(word, text) {
    let textArr = text.split(' ');

    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i].toLowerCase() === word) {
            console.log(word);
            return;
        }
    }

    console.log(`${word} not found!`);
}

substring('javascript', 'JavaScript is the best programming language');
substring('python', 'JavaScript is the best programming language');
function printCharInRange(char1, char2) {
    // Initialize an empty array to store characters within the range
    let charCode = []

    // Find the ASCII codes of the input characters
    let firstChar = Math.min(char1.charCodeAt(0),char2.charCodeAt(0))
    let lastChar = Math.max(char1.charCodeAt(0),char2.charCodeAt(0))

    // Iterate through the ASCII codes, excluding the boundaries
    for(let i=firstChar + 1; i < lastChar; i++){

        // Convert ASCII code back to character and push it to the array
        charCode.push(String.fromCharCode(i))
    }

    //Print the characters joined by a space
    console.log(charCode.join(" "))

}

// Examples
printCharInRange('a', 'd');
// Output: b c

printCharInRange('#', ':');
// Output: $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9

printCharInRange('C', '#');
// Output: $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B
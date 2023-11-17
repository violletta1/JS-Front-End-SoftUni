function printSubstring(str, startIndex, count) {
    // Use the substring method to extract the required portion of the string
    let result = str.substring(startIndex, startIndex + count);

    // Print the result
    console.log(result);
}

// Examples
printSubstring('ASentence', 1, 8); // Output: Sentence

printSubstring('SkipWord', 4, 7); // Output: Word

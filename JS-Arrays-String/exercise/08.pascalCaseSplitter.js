function pascalCaseSplitter(inputString) {
    // Use a regular expression to split the PascalCase string into words
    let words = inputString.split(/(?=[A-Z])/);

    // Join the words with comma and space
    let result = words.join(', ');

    console.log(result);
}

// Examples
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
// Output: Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can

pascalCaseSplitter('HoldTheDoor');
// Output: Hold, The, Door

pascalCaseSplitter('ThisIsSoAnnoyingToDo');
// Output: This, Is, So, Annoying, To, Do

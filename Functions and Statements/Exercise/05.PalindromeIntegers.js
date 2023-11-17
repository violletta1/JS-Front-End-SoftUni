function checkPalindromes(numbers) {
    function isPalindrome(number) {
        let numStr = number.toString();
        let reversedStr = numStr.split('').reverse().join('');
        return numStr === reversedStr;
    }

    for (let i = 0; i < numbers.length; i++) {
        let isPal = isPalindrome(numbers[i]);
        console.log(isPal);
    }
}

// Examples
checkPalindromes([123, 323, 421, 121]);
checkPalindromes([32, 2, 232, 1010]);
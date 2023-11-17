function validatePassword(password) {
    let isValid = true;
    let messages = [];

    // Check the length
    if (password.length < 6 || password.length > 10) {
        messages.push("Password must be between 6 and 10 characters");
        isValid = false;
    }

    // Check if it consists only of letters and digits
    if (!/^[a-zA-Z0-9]+$/.test(password)) {
        messages.push("Password must consist only of letters and digits");
        isValid = false;
    }

    // Check if it has at least 2 digits
    let digitCount = password.replace(/[^0-9]/g, "").length;
    if (digitCount < 2) {
        messages.push("Password must have at least 2 digits");
        isValid = false;
    }

    // Print the result
    if (isValid) {
        console.log("Password is valid");
    } else {
        messages.forEach(msg => console.log(msg));
    }
}
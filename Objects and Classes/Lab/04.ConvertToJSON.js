function convertToJSON(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    };
    console.log(JSON.stringify(person));
}

// Example usage 1:
convertToJSON('George', 'Jones', 'Brown');

// Example usage 2:
convertToJSON('Peter', 'Smith', 'Blond');

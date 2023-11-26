function printCityInfo(city) {
    Object.entries(city).forEach(([key, value]) => {
        console.log(`${key} -> ${value}`);
    });
}

// Example usage 1:
let city1 = {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
};

printCityInfo(city1);

// Example usage 2:
let city2 = {
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
};

printCityInfo(city2);

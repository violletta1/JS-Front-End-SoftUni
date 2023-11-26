function towns(arrayTable) {
    arrayTable.forEach(entry => {
        let [town, latitude, longitude] = entry.split(' | ');

        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let townObject = {
            town: town,
            latitude: latitude,
            longitude: longitude
        };

        console.log(townObject);
    });
}

// Example usage:
const input1 = [
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
];
towns(input1);

const input2 = [
    'Plovdiv | 136.45 | 812.575'
];
towns(input2);

function convertToObject(jsonstring) {
    let object = JSON.parse(jsonstring)
    Object.entries(object).forEach(([key, value]) => {
        console.log(`${key}: ${value}`)
    })
}

let object1 = convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
let object2 = convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')

function employeeProcess(arrayNames){

    arrayNames.forEach(employee => 
        console.log(`Name: ${employee} -- Personal Number: ${employee.length}`)
        );
}

let employees1 = [
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
];
employeeProcess(employees1);

let employees2 = [
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
];
employeeProcess(employees2);
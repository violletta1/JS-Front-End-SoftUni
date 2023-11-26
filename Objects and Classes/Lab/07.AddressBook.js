function addressBook(array){
    let addressBookFinal = {};

    array.forEach(entry => {
        let [name, address] = entry.split(':');

        addressBookFinal[name] = address;
    })

    let sortedAddressBook = Object.keys(addressBookFinal).sort();
    
    for (let name of sortedAddressBook) {
        console.log(`${name} -> ${addressBookFinal[name]}`);
    }
}

addressBook([
    "Tim:Doe Crossing",
    "Bill:Nelson Place",
    "Peter:Carlyle Ave",
    "Bill:Ornery Rd",
]);


addressBook(['Bob:Huxley Rd',
  'John:Milwaukee Crossing',
  'Peter:Fordem Ave',
  'Bob:Redwing Ave',
  'George:Mesta Crossing',
  'Ted:Gateway Way',
  'Bill:Gateway Way',
  'John:Grover Rd',
  'Peter:Huxley Rd',
  'Jeff:Gateway Way',
  'Jeff:Huxley Rd',
]);
// Iterating over an object
const myObject = { a: 1, b: 2, c: 3 };

for (const key in myObject) {
    console.log(key, myObject[key]);
}
// Output:
// a 1
// b 2
// c 3

// Iterating over an object with inherited properties
function Parent() {
    this.parentProp = 'Parent Property';
}

Parent.prototype.sharedProp = 'Shared Property';

const child = new Parent();
child.childProp = 'Child Property';

for (const key in child) {
    console.log(key, child[key]);
}
console.log(child);
// Output:
// parentProp Parent Property
// childProp Child Property
// sharedProp Shared Property
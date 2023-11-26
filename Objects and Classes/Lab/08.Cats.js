function processCats(input) {
    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let catInfo of input) {
        let [name, age] = catInfo.split(' ');
        age = parseInt(age); // Parse age as an integer
        let cat = new Cat(name, age);
        cats.push(cat);
    }

    for (let cat of cats) {
        cat.meow();
    }
}

// Example usage:
processCats(['Mellow 2', 'Tom 5']);
// Output:
// Mellow, age 2 says Meow
// Tom, age 5 says Meow

// processCats(['Candy 1', 'Poppy 3', 'Nyx 2']);
// // Output:
// // Candy, age 1 says Meow
// // Poppy, age 3 says Meow
// // Nyx, age 2 says Meow

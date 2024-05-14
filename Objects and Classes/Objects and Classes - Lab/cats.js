function solve(catsData) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        printMeow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const cat of catsData) {
        let [name, age] = cat.split(' ');
        new Cat(name, age).printMeow();
    }
}

solve(['Mellow 2', 'Tom 5']);
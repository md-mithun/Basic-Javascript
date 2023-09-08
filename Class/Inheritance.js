//Class Inheritance
// To create a class inheritance, use the 'extends' keyword.

// Create super class
class Bangladesh {
    constructor(division) {
        this.division = division;
    }
    display() {
        console.log('Super class method called!');
    }
}

// Create sub class
class Khulna extends Bangladesh {
    constructor(division) {
        super(division)// By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
    }
    show1() {
        super.display(); // or use this.display();
    }
    show2() {
        console.log(this.division);
    }
}

const kushtia = new Khulna('Khulna');
kushtia.show1();
kushtia.show2();


// Getters and Setters
class Fruits {
    constructor(name) {
        this.name = name;
    }
    set fName(name) {
        this.name = name;
    }
    get fName() {
        return this.name;
    }
}

const apples = new Fruits('Apple');
//setter
apples.fName = 'Banana';
// getter
console.log(apples.fName);//Banana

//Note: class declarations are not hoisted
//Create class
class Mithun {
    add(x) {
        return x * x;
    }
}
//Create object
const obj1 = new Mithun();
// called class method
console.log(obj1.add(6));




// ## The Constructor Method
class Car {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    display() {
        console.log(`Car name ${this.name} and speed is ${this.speed}`);
    }
}

const volbo = new Car('Volbo', '350KM');
volbo.display()
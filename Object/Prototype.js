// Prototype Inheritance
// All JavaScript objects inherit properties and methods from a prototype:

// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype
// The Object.prototype is on the top of the prototype inheritance chain:

// Date objects, Array objects, and Person objects inherit from Object.prototype.

function Person(fname, lname, age) {
    this.firstName = fname,
        this.lastName = lname,
        this.age = age
}

const p1 = new Person('Muhammad', 'Mithun', 21);
p1.fullName = function () {
    return this.firstName + ' ' + this.lastName
}
console.log(p1.fullName());//Muhammad Mithun

// Adding properties and methods to object Using the prototype Property
// The JavaScript prototype property allows you to add new properties to object constructors

Person.prototype.nationality = "English";
console.log(p1.nationality);//English

Person.prototype.fun = function () {
    return 'This is funny function'
}
console.log(p1.fun());//This is funny function

// Note: Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.

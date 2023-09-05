// It is considered good practice to name constructor functions with an upper-case first letter.

function Person(first, last, age) {
    this.fname = first;
    this.lname = last;
    this.age = age;
}

const mithun = new Person('Muhammad', 'Mithun', 20);////This is now an object
mithun.fullName = function () {
    return this.fname + ' ' + this.lname;
}
console.log(mithun);
const anika = new Person('Mst', 'Anika', 20);//This is now an object
console.log(anika);

/*
new String()    // A new String object
new Number()    // A new Number object
new Boolean()   // A new Boolean object
new Object()    // A new Object object
new Array()     // A new Array object
new RegExp()    // A new RegExp object
new Function()  // A new Function object
new Date()      // A new Date object
The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.
*/
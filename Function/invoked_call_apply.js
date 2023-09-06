// myFunction() and window.myFunction() is the same function
function myFunction(a, b) {
    return a * b;
}
window.myFunction(10, 2);

//   The JavaScript call() Method
// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter).


// ## call() method without arguments
const Person = {
    fullName: function (age, country) {
        return this.firstName + ' ' + this.lastName;
    }
}
const person1 = {
    firstName: 'Muhammad',
    lastName: 'Mithun'
}

const person2 = {
    firstName: 'Muhammad',
    lastName: 'Adnan'
}
console.log(Person.fullName.call(person1));
console.log(Person.fullName.call(person2));








// ## call() method with arguments
const myPerson = {
    fullName: function (age, country) {
        return this.firstName + ' ' + this.lastName + ' ' + age + ' ' + country;
    }
}
const person3 = {
    firstName: 'Muhammad',
    lastName: 'Mithun'
}
const person4 = {
    firstName: 'Muhammad',
    lastName: 'Adnan'
}

console.log(myPerson.fullName.call(person3, 21, 'Bangladesh'));


// apply() method 
//The Difference Between call() and apply()
// The difference is:
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.
const PersonX = {
    fullName: function (age, country) {
        return this.firstName + ' ' + this.lastName + ' ' + age + ' ' + country;
    }
}
const person5 = {
    firstName: 'Maryaam',
    lastName: 'Akter'
}
console.log(PersonX.fullName.apply(person5));//Maryaam Akter undefined undefined
console.log(PersonX.fullName.apply(person5, [21, 'Bangladesh']));//Maryaam Akter Maryaam Akter 21 Bangladesh

// ## Others
console.log(Math.max(1, 2, 3, 4, 5));//5
console.log(Math.max.apply(null, [1, 2, 3, 4, 5, 6]));//6
console.log(Math.max.apply('', [11, 2, 3, 4, 5, 6]));//6
//null can be anything like, string,number. without first parameter it's return -Infinity 
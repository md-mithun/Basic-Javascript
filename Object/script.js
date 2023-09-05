// ## Using an Object Literal. Using an object literal, you both define and create an object in one statement.
const person = { firstName: "Mst", lastName: "Maryaam", age: 20, eyeColor: "black" };


// ## Using the JavaScript Keyword new
const person1 = new Object();
person1.firstName = "Mithun";
person1.lastName = "Mithun";
person1.age = 21;


// ## Accessing JavaScript Properties
console.log(person.age); //objectName.property 
console.log(person['lastName']); //objectName['property'] 
x = 'eyeColor';
console.log(person[x]); //objectName[expression] 

// ## Deleting Properties
delete person1.firstName;

// ## Nested Object
const object = {
    name: "Maryaam",
    age: 20,
    exam: [
        { name: 'JSC', result: 4.72 },
        { name: 'SSC', result: 4.72 }
    ]
}
// ## Access nested object
for (const x of object.exam) {
    console.log(x.name);
}


// ## Object Method
const Person = {
    name: 'Muhammad Mithun',
    age: 20,
    full: function () {
        return this.name + ' ' + this.age;
    }
}
console.log(Person.full());//This example accesses the fullName() method of a person object
console.log(Person.full);//If you access the fullName property, without (), it will return the function definition:


//Displaying the Object Properties by name
Person.name;

// Displaying the Object Properties in a Loop without for of loop because Person is not iterable
for (const x in Person) {
    console.log(x);
}

// Displaying the Object using Object.values()
console.log(Object.values(Person));//(3) ['Muhammad Mithun', 20, ƒ]

// Displaying the Object using JSON.stringify()
console.log(JSON.stringify(Person));// JSON.stringify will not stringify functions:
console.log(JSON.stringify(Person.full()));


// ## In an object method, this refers to the owner object.
const person = {
    firstName: "Muhammad",
    lastName: "Mithun",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};


// ## Alone, this refers to the global object.
console.log(this);//Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// In a function, this refers to the global object.
function myFunction() {
    console.log(this);//Window {window: Window, self: Window, document: document, name: '', location: Location, …}
}
myFunction();


// ## In a function, in strict mode, this is undefined.
function myFunction2() {
    "use strict";
    console.log(this);//undefined
}
myFunction2();


// ## In an event, this refers to the element that received the event.
{/* <button onclick="this.style.color='red'">Button</button> */ }
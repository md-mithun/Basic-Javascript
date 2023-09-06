// Function parameters are the names listed in the function definition.
// Function arguments are the real values passed to (and received by) the function. 
/*
If a function is called with missing arguments (less than declared), the missing values are set to undefined.
Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter
*/
function myFunction(x, y) {
    console.log(y);// x=5 & y=undefined
}
myFunction(5);

// ## Default parameter
function myDefaultFunction(x, y = 7) {
    console.log(y);// x=5 & y=7
}
myDefaultFunction(5);

// ## The arguments object
function myFunc(x, y) {
    console.log(arguments);//print array for all arguments
    return 5;
}
myFunc(1, 2, 3, 4, 5, 6);
// Note: arguments keyword not working in arrow function


// Find the maximum value
function findMax() {
    let max = 0;
    for (let index = 0; index < arguments.length; index++) {
        max = (arguments[index] > max) ? arguments[index] : max;
    }
    return max;
}
const max = findMax(11, 2, 3, 4, 5, 6, 1, 8, 9, 10);
console.log(max);//11


// ## Rest parameter
function rest(x, y, ...z) {
    console.log(x, y);
    console.log('z = ' + z);// z return with an array
}
rest(1,2,3,4,5,6,7,8,9)

//Note: Arguments passed by value & Object are passed by reference
// ## Arguments passed by value
function value(x, y) {
    x = 5;
    y = 6;
    console.log(x, y);
}
let x = 1;
let y = 2;
value(x, y)
console.log(x, y);


//## Object are passed by reference
function ref(x) {
    x.age = 10;
    console.log(x.age); //age=10
}
const obj = {
    age: 5
}
ref(obj);
console.log(obj.age);//age=10
// ## Function Declarations
function myFunc() {
    console.log('Some text here!');
}

// ## Function Expressions
//After a function expression has been stored in a variable, the variable can be used as a functionaa
const x = function mithun() {
    console.log('Some text here 1');
}
/*The function above is actually an anonymous function (a function without a name).

Functions stored in variables do not need function names. They are always invoked (called) using the variable name */
const y = function () {
    console.log('Some text here 2');
}


/* ## Function Hoisting
Hoisting applies to variable declarations and to function declarations.
Because of this, JavaScript functions can be called before they are declared*/
myFunction();
function myFunction() {
    console.log('Hoisting function');
}

//Self invoking function
(function () {
    console.log('HELLO ...');// i will invoke myself
})();

/* ## Arrow function Arrow functions allows a short syntax for writing function expressions. You don't need the function keyword, the return keyword, and the curly brackets*/

const m = () => {
    console.log('This is arrow function!');
}
m();
//note: Arrow functions are not hoisted. They must be defined before they are used.


// ## void  the return keyword and the curly brackets if the function is a single statement.
const ab = (a, b) => { return a * b };
const result = ab(5, 6);
console.log(result);

// ## arguments keyword
const p = function (a, b) {
    console.log(arguments);
    return a + b;
}
console.log(p(5, 6));
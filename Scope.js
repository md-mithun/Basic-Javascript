// Scope determines the accessibility(visibility) of variables.
// JavaScript has 3 types of scope: Block, Function, Global
// ES6 introduced two important new JavaScript keywords: let and const.
// These two keywords provide Block Scope in JavaScript




//Variables declared inside a { } block can be accessed from outside the block.
/*{
    var x = 2;
  }
  // x CAN be used here
  */

var x = 2; let y = 2; const z = 2;      // Global scope

// ## Note: Even if var is used in a function scope, it cannot be accessed from outside the function scope, unlike let and const.
// This variable is globally scoped.
var greeter = "hello";

// This variable is function scoped.
function newFunction() {
    var hello = "world";
    console.log(hello); // Prints "world"
}
// This will throw an error, because hello is not defined in the global scope.
console.log(hello); // Error: Uncaught ReferenceError: hello is not defined

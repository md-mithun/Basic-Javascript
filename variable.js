// The let keyword was introduced in ES6 (2015)

// Variables defined with let/const cannot be Redeclared
let a = 5; const b = 5;
let a = 6; const b = 8;

// Variables defined with let/or must be Declared before use
a = 6; b = 6;
let a; const b;

// Variables defined with let/const have Block Scope
{
    let x = 2;
} // x can NOT be used here


//Variables declared with the var keyword can NOT have block scope.
{
    var x = 2;
}
// x CAN be used here


//Redeclaring a variable inside a block will also redeclare the variable outside the block
var x = 10;
// Here x is 10
{
var x = 2;
// Here x is 2
}
// Here x is 2
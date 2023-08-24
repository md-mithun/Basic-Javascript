//In JavaScript, a variable can be declared after it has been used
// var ,let const are hoisted top.var declare top and initialize by undefined but let and const are not initialized . so let and const can not be declared after it has been used


// ## JavaScript only hoists declarations, not initializations
var x = 5;
console.log(x); // 5 
console.log(y); //undefined ,// This is because only the declaration (var y), not the initialization (=7) is hoisted to the top.
var y = 7;

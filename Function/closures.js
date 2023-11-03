// Closures can be created in a number of ways, but the most common way is to define an inner function inside of an outer function. 
//The inner function will have access to all of the variables in the outer function's scope, even after the outer function has finished executing.
function temp() {
    let counter = 0;
    return function () { counter += 1; return counter }
}
const add = temp();
console.dir(add);
console.log(add());//1
console.log(add());//2
console.log(add());//3

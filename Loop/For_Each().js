//The forEach() method calls a function (a callback function) once for each array element.

const array = [12, 57, 32, 25, 18, 44, 34];

array.forEach(myFunc);
function myFunc(value,index,array) {
    console.log(value);
}
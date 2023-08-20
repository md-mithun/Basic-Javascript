//Array iteration methhod can operate every array element
//Initial array
const numbers = [45, 4, 9, 16, 25];

// ## Array forEach()
numbers.forEach(mithun);
function mithun(value, index, array) {
    console.log(index + ". " + value);
}/*value-> all elements,, index-> index number ,,  array-> main array*/

// #Array map()
let newArray = numbers.map(function (value, index, array) {
    console.log(index + ". " + value);
    return value ** 2;
})//this method return new array
console.log(newArray);//(5) [2025, 16, 81, 256, 625]

// ## Array filter()

const num = [1, 3, 5, 7, 9, 11, 13, 15, 17]
const newarray = num.filter(function (value, index, array) {
    return value > 5;
});
console.log(newarray);//(6) [7, 9, 11, 13, 15, 17]


// ## Array reduce() return single value
const num1 = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const initialValue = 0;
const sum = num1.reduce(myFunction, initialValue);
function myFunction(initialValue, value, index, array) {
    return value + initialValue;//initialValue->initial value / previously return value
}
console.log(sum);//81



// ## Array every() method  method check all elements pass the test.if all elements pass then return true otherwise false
const abc = [2, 4, 6, 87];
const testCondition1 = abc.every(myFunc);
function myFunc(value, index, array) {
    return value % 2 === 0;
}
console.log(testCondition1);//false because 87%2 !===0


// ## Array some()  method check all elements pass the test.if any elements pass then return true otherwise false
const apple = [2, 4, 6, 87];
const testCondition2 = abc.some(myFunc);
function myFunc(value, index, array) {
    return value % 2 !== 0;
}
console.log(testCondition2);//true when any elements fullfilled condition


// ## Array find() 


// ## Array from(); method make an array by given string
console.log(Array.from('Mithun'));//(6) ['M', 'i', 't', 'h', 'u', 'n']



// ## Array entries()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruit = fruits.entries();
for (x of fruit) {
    console.log(x);
} /*(2) [0, 'Banana']
    (2) [1, 'Orange']
    (2) [2, 'Apple']
    (2) [3, 'Mango']*/


//Array Spread (...) operator expands an iterable (like an array) into more elements:
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);




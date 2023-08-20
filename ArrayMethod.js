/*
Array delete()
Array concat()
Array flat()
Array splice()
Array slice() */
// ## push() pop() shift() unshift() method described in Array.js file

// ## Array length
const name = ["Mithun", "Maryaam", "Anika", "Adnan"];
let arraySize = name.length;


// ## Array to String
console.log(name.toString());//Mithun,Maryaam,Anika,Adnan


// ## Arrar to string with separator
console.log(name.join("*"));//Mithun*Maryaam*Anika*Adnan


// ## Delete element by index
delete name[0];
console.log(name);//(4) [empty, 'Maryaam', 'Anika', 'Adnan']
/*Note: Array elements can be deleted using the JavaScript operator delete. Using delete leaves undefined holes in the array*/


// ## Concatenating array or Merging
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);//(7) ['Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin', 'Morgan']


// ## Array splice() method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(2, 1, "Lemon", "Kiwi"));//['Apple']
;//
/* 2 defines the position where new elements should be added (spliced in).
 1 defines how many elements should be removed.
 Note: The splice() method returns an array with the deleted items:*/


// ## Array slice() method
const fruit = ["Banana", "Orange", "Apple", "Mango"];//[0 "Banana",1 "Orange",2 "Apple",3 "Mango",4];
console.log(fruit.slice(1, 2));//['Orange']
// or fruits.slice(2)
/*same as splice but slice() method creates a new array with slicing element.
slice() method does not remove any elements from the source array.*/


// ## Javascript sort an Array
const fruti = ["Banana", "Orange", "Apple", "Mango"];
const number = [65, 34, 64, 23, 157];
number.sort();
fruti.sort();//or The reverse() method for reverses the elements.
console.log(fruti);//(4) ['Apple', 'Banana', 'Mango', 'Orange']
console.log(number);//(5) [157, 23, 34, 64, 65] 
/*Note: JS sort() method sort by alphabetical, that's why number array showing [157, 23, 34, 64, 65] 
to fixed thi problem use Compare function*/
const runs = [40, 100, 1, 5, 25, 10];
console.log(runs.sort(function (a, b) {
    return a - b;
}));//(6) [1, 5, 10, 25, 40, 100]

//##Find the Highest (or Lowest) Array Value by using Math.min.apply(null,arrayName);
const score = [40, 100, 4, 5, 25, 10]
console.log(Math.max.apply(null, score));//100
console.log(Math.min.apply(null, score));//4
/*Similar to Math.max(1,2,3) */



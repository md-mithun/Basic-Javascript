//Note: Array like a box and array elements is box item. If use 'const' that means box are fixed but but box item(array element) are changable.

const car = ["Marcedes", "Tesla", "Toyoto", "Volbo"];
//Check array
console.log(typeof car);//return object 
console.log(car instanceof Array);// return true or false

// ## Accessing array element line(4-17)

//process-1 -> for loop
for (let i = 0; i < car.length; i++) {
    console.log(car[i]);
}
//Process-2 -> forrEach()
car.forEach(myFunction);
function myFunction(value) {
    console.log(value);
}
//Process-3 -> for of
for (value of car) {
    console.log(value);
}


// ## Adding an element in an array 
car.push("ABC"); //or
car.unshift("ABC"); //or
car[car.length] = "abc"; //adding element in last

// ## Removing array element
car.pop(); //it's remove last element and return deleted element
car.shift(); //it's remove beginning element and return deleted element
 

/* ## Adding array with high index(length < high_index) can create undefined 'holes'
        in an array*/
//Example: 
const array = [1, 2, 3];
array[8] = 74; //3 to 7 index value are undefined


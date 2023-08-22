//loop over array
const array = [12, 57, 32, 25, 18, 44, 34];
for(let a of array){
    console.log(a);
}

//loop over string
let text="Hello World";
for (const x of text) {
    console.log(x);
}

//loop over object
const country = {
    name: "Bangladesh",
    Capital: "Dhaka",
    Area: 147570
}//country is not iterable for use "for of loop" 
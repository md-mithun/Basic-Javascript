// ## 1.Create a Set
const vowel = new Set(["a", "e", "i", "o", "u", "w", "y"]);
for (const x of vowel) {
    console.log(x);
}

console.log("--------------------------------------");

// ## 2.Create a Set
const letters = new Set();
// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
for (const y of letters) {
    console.log(y);
}

console.log("--------------------------------------");

letters.forEach(function(value){
    console.log(value);
})


//The values() method
// letters.values() Returns [object Set Iterator]
console.log(letters.values());//SetIterator {'a', 'b', 'c'}


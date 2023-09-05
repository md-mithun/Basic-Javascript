// A set is a collection of unique values. Each value can only occur once in a Set.A Set can hold any value of any data type.

const mithun = new Set([1, 2, 3, 4, 5, 1, 2, 'a', 'b']);
// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Create a Set
const letters = new Set();

// Add Variables to the Set
mithun.add(a);
mithun.add(b);
mithun.add(c);
console.log(mithun);

// ## The values() Method
// The values() method returns an Iterator object containing all the values in a Set:

const setIterator = mithun.values();//now this is setIterator,SetIterator {1, 2, 3, 4, 5, …}
for (const x of setIterator) {
    console.log(x);//12345abc
}
// ## A Set has no keys.
//keys() returns the same as values().
console.log(mithun.keys());//SetIterator {1, 2, 3, 4, 5, …}

// ## sets are object
console.log(typeof mithun);// object
console.log(mithun instanceof Set);// true
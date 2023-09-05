// A Map holds key - value pairs where the keys can be any datatype.

// A Map remembers the original insertion order of the keys.

// A Map has a property that represents the size of the map.

// new Map()	Creates a new Map object
const mithun = new Map([
    ['apple', 250],
    ['mango', 120],
]);
// set()	Sets the value for a key in a Map
mithun.set('orange', 300);

// get()	Gets the value for a key in a Map
mithun.get('mango');//120

// clear()	Removes all the elements from a Map
console.log(mithun.clear());//Map(0) {size: 0}

// delete ()	Removes a Map element specified by a key
mithun.delete('mango');

// has()	Returns true if a key exists in a Map
console.log(mithun.has('mango'));// false


const maryaam = new Map([
    ['apple', 250],
    ['mango', 120],
    ['banana', 80]
]);
// forEach()	Invokes a callback for each key / value pair in a Map
maryaam.forEach(function (value, key) {
    console.log(key);
    console.log(value);
})
// entries()	Returns an iterator object with the[key, value] pairs in a Map
for (const x of maryaam.entries()) {
    console.log(x);// ['apple', 250] ['mango', 120] ['banana', 80]
}

// keys()	Returns an iterator object with the keys in a Map
console.log(maryaam.keys());//MapIterator {'apple', 'mango', 'banana'

// values()	Returns an iterator object of the values in a Map
console.log(maryaam.values());//MapIterator {250, 120, 80}

// ## Objects as Keys. Being able to use objects as keys is an important Map feature.
const mita = { name: mithun };
maryaam.set(mita,400);
console.log(maryaam);
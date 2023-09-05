// JavaScript Iterators
// The iterator protocol defines how to produce a sequence of values from an object.

/*An object becomes an iterator when it implements a next() method.

The next() method must return an object with two properties:

value (the next value)
done (true or false)
value => The value returned by the iterator
    (Can be omitted if done is true)

done =>	true if the iterator has completed
    false if the iterator has produced a new value
    
    
 ## JavaScript iterable is an object that has a Symbol.iterator.

The Symbol.iterator is a function that returns a next() function.

An iterable can be iterated over with the code: for (const x of iterable) { }*/
// ##Array iterator
const numbers = [1, 2, 3, 4, 5];
const iterator = numbers[Symbol.iterator]()
console.log(iterator.next());//{value: 1, done: false}
console.log(iterator.next());//{value: 2, done: false}
console.log(iterator.next());//{value: 3, done: false}
console.log(iterator.next());//{value: 4, done: false}
console.log(iterator.next());//{value: 5, done: false}
console.log(iterator.next());//{value: undefined, done: true}




// ## Create an Object
const Person = {
    name: 'Mithun',
    age: 21
}

//Make this object iterable
Person[Symbol.iterator] = function () {
    let n = 0;
    let done = false;
    return {
        next() {
            n += 15;
            if (n == 150) { done = true };
            return { value: n, done: done };
        }
    };
}

for (const i of Person) {
    console.log(i);
}
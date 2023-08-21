// ## Math.property
console.log(Math.E);  // returns Euler's number

console.log(Math.PI);  // returns PI

console.log(Math.SQRT2);// returns the square root of 2

console.log(Math.SQRT1_2);  // returns the square root of 1/2

console.log(Math.LN2);  // returns the natural logarithm of 2

console.log(Math.LN10);  // returns the natural logarithm of 10

console.log(Math.LOG2E);  // returns base 2 logarithm of E

console.log(Math.LOG10E);  // returns base 10 logarithm of E

//---- ## Math.method(number) LINE (19 TO 40)----
// ** Number to Integer
console.log(Math.trunc(7.343));//7,	Returns the integer part of x

console.log(Math.round(5.45));// 5
console.log(Math.round(5.67));// 6

console.log(Math.ceil(4.567)); //5, Returns x rounded up to its nearest integer
console.log(Math.floor(4.567));	//4, Returns x rounded down to its nearest integer


// ## Math sign(x) return x negative,null,positive
console.log(Math.sign(-4));//-1(Negative)
console.log(Math.sign(0));// 0(zero)
console.log(Math.sign(4));// 1(positive)
console.log(Math.sign());// NaN(Illegal Number)


// ## others Math method
console.log(Math.pow(2, 3));// 8
console.log(Math.sqrt(81));// 9
console.log(Math.round(Math.sin(1.571)));//1.571rad × 180/π = 90° ansewer=1

// ## Math random() return a random number between 0 to 1
console.log(Math.floor(Math.random() * 11));// return random number 0 to 11

function idea(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(idea(2, 5));//print randomly 2 to 5



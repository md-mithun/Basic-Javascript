//Javascript numbers are always 64 bit floating point

//Precision :- Integer are acurate up to 15 digits.

/*Note:- In javascriot floating point arithmetic is not always 100% accurate.
example:*/let x = 0.2; let y = 0.1; console.log(x + y);//0.30000000000000004

// ## Numeric string: Javascript try to convert string to numbers in all numeric operations except + operator;
let a = "24";
let b = "3";
console.log(a / b); //8(Number)
console.log(a * b); //72(Number)
console.log(a - b); //21(Number)
console.log(a + b); //243(String)

// ## Hexadecimal
let m = 0x9;
console.log(++m);//10=A ; it's print integer

// ## NaN(Not a number) indicating that this is number but not lega; number


// ## Converting variables to Numbers (Global JS method)
console.log(Number("123")); //123(Number)
console.log(parseFloat("1.23")); //1.23(Number)float
console.log(parseInt("1.23")); //1(Number)Int
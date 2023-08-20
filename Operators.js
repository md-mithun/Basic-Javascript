/*----String operator----*/
/*The + can be used to add (concat) two string */
var a = "Muhammad";
var b = "Mithun";
var c = a + b //c=MuhammadMithun
var x = 12 + "34"; // x=1234





/*----Arithmetic----*/
// +	Addition
let p = 5 + 6; //p=11
// -	Subtraction
let q = 6 - 5; //q=1
// *	Multiplication
let r = 6 * 5 //r=30
// **	Exponentiation(power) (ES2016)
let s = 2 ** 3; //s=8
// /	Division
let t = 11 / 5; //t=2
// %	Modulus (Division Remainder)
let u = 11 % 5; //u=1
// ++	Increment
let v = 5; v++; //v=6
// --	Decrement
let w = 5; v--; //w=4




/*----Assignment----*/
var a = 6;
x += y //	x = x + y
x -= y //	x = x - y
x *= y //	x = x * y
x /= y //	x = x / y
x %= y //	x = x % y




/*----Comparison----*/
/*
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator */




/*----Logical----*/
/*
&&	logical and
||	logical or
!	logical not
*/




/*----typeof----*/
x = 5;
console.log(typeof x);





/*----Bitwise----*/

/*
&	AND	2 & 3 =>	(0010 & 0011) => 0010 => 2
|	OR	5 | 8 =>	(0101 | 1000) => 1101 => 13
^	XOR	13 ^ 1 =>   (1101 ^ 0101) => 1000 => 1
~	NOT	~ 5	 => ~1100 => 0011 => 3
<<	left shift	7 << 1	0111 << 1	1110	 14
>>	right shift	12 >> 1	1100 >> 1	0110	  6
Note: But JavaScript uses 32-bit signed numbers.
*/
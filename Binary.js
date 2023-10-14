/*
JavaScript binary numbers are stored in two's complement format.
This means that a negative number is the bitwise NOT of the number plus 1(1's complement+1 ).
Example:
  Binary_Representation	            Decimal_value
00000000000000000000000000000101         5
11111111111111111111111111111011        -5
*/

// ## Converting one number to another number (toString(Base))

//Decimal to Binary, Octal, Hexadecimal
let a = 11;
console.log(a.toString(2));//binary '1011'
console.log(a.toString(8));//octal '13'
console.log(a.toString(16));//hexadecimal 'b'

console.log("------------------------------------");

//Binary to Decimal,Octal,Hexadecimal
let b = 0b1011;// 0b defines it is a binary number
console.log(b.toString(10));//decimal '11'
console.log(b.toString(8));//octal '13'
console.log(b.toString(16));//hexadecimal 'b' 
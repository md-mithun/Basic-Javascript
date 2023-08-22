// /*for (expression 1; expression 2; expression 3) {
//     // code block to be executed
//   }
// Expression 1,2 & 3 is optional
// */
// ## 1
for (let m = 1; m <= 10; m++) {
    console.log("m= " + m);
}

// // ## 2
for (let i = 1; i <= 10;) {
    console.log("i= " + i);
    i++;
}

// // ## 3
let x = 5;
for (; x <= 100; x = x + 5) {
    console.log("x= " + x);
}

// // ## 4 Infinite loop
// /*for(;;){
//     //infinite loop
// }*/
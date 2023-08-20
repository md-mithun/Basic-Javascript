// ## Extracting string part
//There are three methods to do extract =>

// ## 1. slice( start, end)
let text = "My name is Mihtun";//"0-M 1-y 2-' ' 3-n 4-a 5-m 6-e 7-' ' 8-i 9-s 10-' ' 11-M 12-i 13-h 14-t 15-u 16-n 17"
console.log(text.slice(0,-10));//My name


// ## 2. sybstr or substring( start, end) not accepted negative value
let text1 = "My name is Mihtun";//"0-M 1-y 2-' ' 3-n 4-a 5-m 6-e 7-' ' 8-i 9-s 10-' ' 11-M 12-i 13-h 14-t 15-u 16-n 17"
console.log(text1.substr(10,17));//Mithun





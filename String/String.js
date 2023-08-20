//----length, str to array, replacing, upper or Lowar Case, strim, concatinating

// ## String length
let var1 = "Mithun";
console.log(var1.length);//6
// ## simple
let text = "My country name is \"Bangladesh\".";
console.log(text);

// ## Converting String to Array
console.log(text.split(" "));//(5) ['My', 'country', 'name', 'is', '"Bangladesh".']


// ## str.replace("value") =>Replacing string content
let text1 = "My name is Shakib";
console.log(text1.replace("Shakib", "Mithun"));

// ## UpperCase and LowarCase
let data = "JavaScript Date Objects let us work with dates";
console.log(data.toLowerCase());//javascript date objects let us work with dates
console.log(data.toUpperCase());//JAVASCRIPT DATE OBJECTS LET US WORK WITH DATES

// ## String trim()
let name = "  Mithun  ";
console.log(name.trim());//remove both sides white space


// ## String concat()
let a = "Bangla";
let b = "desh";
console.log(a.concat(b));//Bangladesh
console.log(a + b);//similar a.concat(b)

/*
/Bangladesh/i  is a regular expression.
Bangladesh  is a pattern (to be used in a search).
i  is a modifier (modifies the search to be case-insensitive).*/


let text = "My country name is Bangladesh";
//Normal search---Bangladesh and bangladesh are different because js is case sensitive language
console.log(text.search("bangladesh")); //if find return index otherwise return -1
//Using Regular Expression---Bangladesh and bangladesh are same because here no case sensitive
console.log(text.search(/bAngLadeSh/i));//it's return index

let txt = "Is this all there is?";
console.log(txt.match(/is/g));//['is', 'is']
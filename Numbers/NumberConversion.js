//all are decimal 14
const dec = 14;//X
const oct = 16;
const bin = 1110;//X
const hex = 0xE;

//dec to oct,bin,hex
console.log(`decimal(16) to bin(${dec.toString(2)})`);//dec-bin
console.log(`decimal(16) to hexa('${(dec.toString(16).toUpperCase())}')`);//dec-hex
console.log(`decimal(16) to oct(${dec.toString(8)})`);//dec-oct
console.log('-----------------------------------');
// bin,oct,hex to dec
console.log(parseInt(bin, 2));//bin-dec
console.log(parseInt(oct, 8));//oct-dec
console.log(parseInt(hex));//hex-dec
console.log('-----------------------------------');

// bin to oct, hex( bin->dec-> hex or oct)
console.log((parseInt(bin, 2)).toString(16).toUpperCase());//bin to hexa
console.log((parseInt(bin, 2)).toString(8).toUpperCase());//bin to octal
console.log('-----------------------------------');

// oct ,hex to bin (oct or hex -> decimal then ->bin)
console.log(parseInt(oct, 8).toString(2));//oct-bin
console.log(parseInt(hex).toString(2));//hex-bin
console.log('-----------------------------------');

// oct to hex (oct -> decimal -> hex)
console.log(parseInt(oct, 8).toString(16).toUpperCase());//octal-hex
// hex to oct  (hex -> decimal -> oct)
console.log(parseInt(hex).toString(8).toUpperCase());//hex-octal




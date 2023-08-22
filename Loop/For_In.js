// for in loop over an object
const country = {
    name: "Bangladesh",
    Capital: "Dhaka",
    Area: 147570
}
for (const i in country) {
    console.log(i);//print key(name,Capital,Area)
    console.log(country[i]);//print value(Bangladesh,Dhaka,147570)
}
console.log("---------------------------------");
//for in over an array
const array = [12, 57, 32, 25, 18, 44, 34];
for(x in array){
    console.log(x);//x is index number
    console.log(array[x]);//now print array element
}
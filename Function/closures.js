function temp() {
    let counter = 0;
    return function () { counter += 1; return counter }
}
const add = temp();
console.dir(add);
console.log(add());//1
console.log(add());//2
console.log(add());//3

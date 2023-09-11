// A callback is a function passed as an argument to another functio

// Example 1
function display(result) {
    console.log('Result = ' + result);
}

function calculate(num1, num2, callback) {
    let sum = num1 + num2;
    console.log(arguments);
    if (callback) {
        callback(sum);
    }
}
calculate(4, 8, display)

console.log('----------------------------------');// 

// Example 2
function calculate1(num1, num2, callback) {
    let sum = num1 + num2;
    if (callback) {
        callback(sum);
    }
}
calculate1(44, 8, function (result) {
    console.log('Result1: ' + result);
})


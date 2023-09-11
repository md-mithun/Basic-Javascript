// Functions running in parallel with other functions are called asynchronous
console.log('Display 1');

setTimeout(function () {
    console.log('Display 2');
}, 1000)

console.log('Display 3');

//-------------------------------
console.log('----------------------------');

console.log('Output 1');
setInterval(function () {
    console.log('Output 2');
}, 1500)

console.log('Output 3');

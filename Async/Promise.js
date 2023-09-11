// //Note: Promise.then() takes two arguments, a callback for success and another for failure
// // ## Example-1
// const payment = false;

// const promise = new Promise(function (success, failed) {
//     setTimeout(() => {
//         if (payment) {
//             success('Payment success');
//         } else {
//             failed('Payment failed');
//         }
//     }, 1500);
// })
// promise.then(
//     function (value) { console.log(value); },// code if successful
//     function (valu) { console.log(valu); }// code if some error
// )



// // ## Example-2
// let accept = false;
// let myPromise = new Promise(function (Resolve, Reject) {
//     console.log('Decision pending....');

//     setTimeout(function () {
//         if (accept) { Resolve("I love You to!!") }
//         else { Reject('I hate You!!') }
//     }, 2000);
// });

// myPromise
//     .then(function (value) { console.log(value) })
//     .catch(function (er) { console.log(er) })





// ## Example-3 callback pattern to promise
const pay = true;
const mark = 80;

function enroll() {
    console.log('Course enroll is running.....');
    const promise = new Promise(function (resolve, reject) {
        if (pay) {
            setTimeout(function () {
                resolve('Course enroll success.');
            }, 2000)
        } else {
            reject('Payment failed ,sorry!');
        }
    })
    return promise;
}

function progress() {
    console.log('Course is completed');

    const promise = new Promise(function (resolve, reject) {
        if (mark >= 80) {
            setTimeout(function () {
                resolve('Certificate on progress........');
            }, 1500)
        } else {
            reject('Sorry, Your mark is not enough to get certificate !');
        }
    })
    return promise;
}

function getCertificate() {
    const promise = new Promise(function (resolve) {
        resolve('Congrates! you get the certificate.');
    })
    return promise;
}

enroll()
    .then(function (value) { console.log(value) })
    .then(progress)
    .then(function (value) { console.log(value) })
    .then(getCertificate)
    .then(function (value) { console.log(value) })
    .catch(function (err) { console.log(err) });
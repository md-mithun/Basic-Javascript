// Course enroll
const payment = true;
const mark = 79;

function enroll(callback) {
    console.log('Course enroll is running.....');
    if (payment) {
        setTimeout(function () {
            console.log('Course enroll success.');
            callback();
        }, 2000)
    } else {
        console.log('Payment faild ,sorry!');

    }
}

function progress(callback) {
    console.log('Course is completed');

    if (mark >= 80) {
        setTimeout(function () {
            console.log('Certificate on progress........');
            callback();
        }, 1500)
    } else {
        console.log('Sorry, Your mark is not enough to get certificate !');
    }
}

function getCertificate() {
    console.log('Congrates! you get the certificate.');
}

enroll(function () {
    progress(getCertificate)
});
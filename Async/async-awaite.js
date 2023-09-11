

const pay = true;
if (pay) {
    var mark = 70;
}

function enroll() {
    console.log('Course enroll is running.....');
    const promise = new Promise(function (resolve, reject) {
        if (pay) {
            setTimeout(function () {
                resolve();
            }, 2000)
        } else {
            reject('Payment failed ,sorry!');
        }
    })
    return promise;
}

function progress() {
    console.log('Course is completed');
    console.log('Certificate on progress........');
    const promise = new Promise(function (resolve, reject) {
        if (mark >= 80) {
            setTimeout(function () {
                resolve();
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


// async awaite
async function course() {
    try {
        await enroll();
        await progress();
        const certificate=await getCertificate();
        console.log(certificate);
    } catch (error) {
        console.log(error);
    }
}
course();
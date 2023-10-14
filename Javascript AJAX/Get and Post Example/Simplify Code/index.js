

function sendRequest(method, url, data) {
    const promise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status >= 400) {
                //handle application error
                reject('There was an application error');
            } else {
                resolve(xhr.response);
            }
        };
        xhr.onerror = function () {
            reject('Data fetching not success,try again')
        }
        xhr.responseType = 'json';
        xhr.open(method, url);
        xhr.send(data);
    });
    return promise;
}

function getData() {
    sendRequest('GET', 'https://jsonplaceholder.typicode.com/todos/5')
        .then((data) => console.log(data))
        .catch((err) => { console.log(err) });
}



function postData(data) {
    sendRequest('POST', 'https://jsonplaceholder.typicode.com/posts', data)
        .then((data) => console.log(data))
        .catch((err) => { console.log(err) });
}



const getBtn = document.getElementById('getbtn');
const postBtn = document.getElementById('postbtn');
getBtn.addEventListener('click', getData);

postBtn.addEventListener('click', function () {
    postData(JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }))
});

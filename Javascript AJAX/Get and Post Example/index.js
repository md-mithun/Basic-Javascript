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



function getData() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        console.log(xhr.response);//{userId: 1, id: 1, title: 'delectus aut autem', completed: false}
    };
    xhr.responseType = 'json';
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    xhr.send();
}



function postData(data) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        console.log(JSON.parse(xhr.responseText));//{id: 101}
    };
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
    xhr.send(data);
}

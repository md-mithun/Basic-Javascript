

function loadData() {
    // 1.Create an XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // 2.Define a callback function
    xhr.onload = function () {
        document.getElementById('demo').innerHTML = xhr.responseText;
    }
    // 3.Open the XMLHttpRequest object
    xhr.open('GET', 'data1.txt');
    
    // 4.Send a Request to a server
    xhr.send();

}

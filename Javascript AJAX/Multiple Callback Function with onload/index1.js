// ## ---Multiple Callback Functions in AJAX--- ##

// This function sends an HTTP GET request to the specified URL and calls the
// callback function with the response.
function loadData(cFunction, url) {
    // 1.Create an XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // 2.Define a callback function
    xhr.onload = function () {
        cFunction(xhr);
    };
    // 3.Open the XMLHttpRequest object
    xhr.open('GET', url);

    // Set a custom request header.
    xhr.setRequestHeader('Mithun', 'Maryaam');

    // 4.Send a Request to a server
    xhr.send();
}

// This function displays the response text from the HTTP GET request in the
// element with the ID "demo2".
function myFunction1(xhr) {
    document.getElementById('demo1').innerHTML = xhr.responseText;
}

// This function displays the response text from the HTTP GET request in the
// element with the ID "demo3".
function myFunction2(xhr) {
    document.getElementById('demo2').innerHTML = xhr.responseText;
}

// This function sends an HTTP request to the specified URL and returns a promise.
// The promise will resolve with the response data if the request is successful,
// or reject with an error message if the request fails.
function sendRequest(method, url, data) {
    const promise = new Promise((resolve, reject) => {
      // Create a new XMLHttpRequest object.
      let xhr = new XMLHttpRequest();
  
      // Set a listener for the `onload` event. This event will be fired when
      // the request has completed, regardless of whether it was successful or not.
      xhr.onload = function () {
        // Check the status code of the response.
        if (xhr.status >= 400) {
          // If the status code is 400 or higher, then the request failed.
          // Reject the promise with an error message.
          reject('There was an application error');
        } else {
          // If the status code is 200 or lower, then the request was successful.
          // Resolve the promise with the response data.
          resolve(xhr.response);
        }
      };
  
      // Set a listener for the `onerror` event. This event will be fired if
      // an error occurs while sending or receiving the request.
      xhr.onerror = function () {
        // Reject the promise with an error message.
        reject('Data fetching not success,try again');
      };
  
      // Set the response type of the request to JSON.
      xhr.responseType = 'json';
  
      // Open the request.
      xhr.open(method, url);
  
      // Send the request.
      xhr.send(data);
    });
  
    // Return the promise.
    return promise;
  }
  
  // This function fetches the TODO item with the ID 5 from the JSONPlaceholder API
  // and logs it to the console.
  function getData() {
    // Send a GET request to the `/todos/5` endpoint.
    sendRequest('GET', 'https://jsonplaceholder.typicode.com/todos/5')
      // Handle the successful response.
      .then((data) => console.log(data))
      // Handle the error response.
      .catch((err) => console.log(err));
  }
  
  // This function posts a new TODO item to the JSONPlaceholder API and logs
  // the response to the console.
  function postData(data) {
    // Send a POST request to the `/posts` endpoint with the specified data.
    sendRequest('POST', 'https://jsonplaceholder.typicode.com/posts', data)
      // Handle the successful response.
      .then((data) => console.log(data))
      // Handle the error response.
      .catch((err) => console.log(err));
  }
  
  // Get the DOM elements for the "Get" and "Post" buttons.
  const getBtn = document.getElementById('getbtn');
  const postBtn = document.getElementById('postbtn');
  
  // Add a click listener to the "Get" button.
  getBtn.addEventListener('click', getData);
  
  // Add a click listener to the "Post" button.
  postBtn.addEventListener('click', function () {
    // Create a new TODO item object.
    const data = JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    });
  
    // Send the POST request to the JSONPlaceholder API.
    postData(data);
  });
  
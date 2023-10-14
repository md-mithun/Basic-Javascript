// This variable will store the Worker object.
let w;

/*
This function starts the Worker. If the Worker does not exist, it is created.
The function then adds a listener to the Worker's onmessage event. This listener
will update the innerHTML of the demo element with the data received from the Worker.
*/
function startWorker() {
  if (typeof (w) == "undefined") {
    w = new Worker("work.js");
  }

  w.onmessage = function (event) {
    document.getElementById('demo').innerHTML = event.data;
  };
}

/*
This function stops the Worker. If the Worker exists, it is terminated and the w
variable is set to undefined.
*/
function stopWorker() {
  if (typeof (w) !== "undefined") {
    w.terminate();
    w = undefined;
  }
}

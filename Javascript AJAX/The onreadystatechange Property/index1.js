
// ##-----The onreadystatechange Property-----##
function loadData() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 0) {
            console.log('request not initialized');
        }
        if (this.readyState == 1 && this.status == 200) {
            console.log('Server connection established');
        }
        if (this.readyState == 2 && this.status == 200) {
            console.log('request received');
        }
        if (this.readyState == 3 && this.status == 200) {
            console.log('processing request');
        }
        if (this.readyState == 4 && this.status == 200) {
            console.log('request finished and response is ready');
            document.getElementById("demo").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "data1.txt");
    xhttp.send();
}
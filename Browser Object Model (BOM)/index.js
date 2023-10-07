// ##---- JavaScript Window Screen ----##
console.log('Height ='+screen.height);
console.log('Width ='+screen.width);
console.log('Screen Color Depth = '+screen.colorDepth);
console.log('Screen Pixel Depth = '+screen.pixelDepth);
// The screen.availWidth screen.availHeight property returns the width or height of the visitor's screen, in pixels, minus interface features like the Windows Taskbar
console.log('available width= '+screen.availWidth);
console.log('available height= '+screen.availHeight);


// ##---- JavaScript Window Location ----##
// The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.
console.log('href = '+window.location.href);
console.log('hostname = '+location.hostname);
console.log('pathname = '+location.pathname);
console.log('protocol = '+location.protocol);
console.log('port = '+location.port);


// ##---- JavaScript Window History ----##
function back(){
    history.back()
}
function forward(){
    history.forward()
}

// ##---- JavaScript Window Navigator ----##
// The window.navigator object contains information about the visitor's browser.
console.log('platformName = '+navigator.platform);

// ##---- JavaScript Popup Alert ----##
function promptAlert(){
    console.clear();
console.log(window.prompt('Enter your name to write in console: ','default name'));
}

function alertMsg(){
    console.clear();
    alert('This is alert!\nfor you')
}

function confirmAlert(){
    console.clear();
    if (confirm("Press a button!")) {
  console.log("You pressed OK!");
} else {
  console.log("You pressed Cancel!");
}
}
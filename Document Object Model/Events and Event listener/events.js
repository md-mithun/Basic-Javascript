//## onchange event
function change(text) {
    document.getElementById('textInput').value = text;
}

// ## The onload events
function load() {
    console.log('onpage loaded');
}

// ## Event listener and parameter passing
const btn = document.querySelector('.listen');
btn.addEventListener('mouseover', function () {
    btn.innerHTML = 'Mouse over'
});

btn.addEventListener('mouseout', function () {
    btn.innerHTML = 'Mouse out'
});

btn.addEventListener('click', function () {
    btn.innerHTML = 'clicked'
});
btn.addEventListener('mousedown', function () {
    const event = 'button down';
    down(event);//parameter passing
});
function down(x) {
    btn.innerHTML = x;
}

// ## Event Bubbling or Event capturing
// addEventListener(event, function, useCapture); useCapture(true or false) by default false
const superDiv = document.querySelector('.super');
const subDiv = document.querySelector('.sub');
/*
subDiv.addEventListener('click',function(){
console.log('Sub div clicked');
})
superDiv.addEventListener('click',function(){
console.log('Super div clicked');
})
*/
/*output=> first print sub div clicked then super div clicked.
to change sequence use usecapture as true
*/

subDiv.addEventListener('click', function () {
    console.log('Sub div clicked');
},true)

superDiv.addEventListener('click', function () {
    console.log('Super div clicked');
},true)
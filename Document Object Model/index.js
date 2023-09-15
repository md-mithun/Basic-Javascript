// ## HTML DOM Methods
// ## note: If the element is not found, element will contain null.

// Finding HTML Element by Id
const id = document.getElementById('demo');
// console.log(id);// return -> <h1 id="demo">Javascript DOM</h1>

// Finding HTML Elements by Class Name
const classes = document.getElementsByClassName('btn');
// console.log(classes);// HTML collection

// Finding HTML Elements by Tag Name
const tags = document.getElementsByTagName('p');
// console.log(tags);// HTML collection

// Finding HTML Elements by CSS Selectors with DOM - Changing CSS
document.querySelector('.btn').style.border = '3px solid red';

document.write('<p>hi</p>')
document.write('<i>hi</i>')
//Note: Never use document.write() after the document is loaded. It will overwrite the document.



// ## Form Validation
function formValid() {
    const value = document.forms['frname']['inputname'].value;
    const display = document.getElementById('form-valid-result');
    if (value <= 10 && value >= 1) {
        display.innerHTML = value;
    } else {
        display.innerHTML = 'Invalid input';
    }
}
// # Animation making
function animation() {
    const childsBox = document.querySelector('.animate');
    let pos = 0;
    let a = setInterval(animate, 1);
    
    function animate() {
        pos++;
        console.log(pos);
        if (pos < 350) {
            childsBox.style.top = pos + 'px';
            childsBox.style.left = pos + 'px';
        } else {
            clearInterval(a);
        }
    }
}
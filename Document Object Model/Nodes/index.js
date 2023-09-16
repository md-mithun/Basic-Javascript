// Create a node
const root = document.getElementById('root');
const newList = document.createElement('li');
const text = document.createTextNode('this is new');
newList.appendChild(text);
root.appendChild(newList);

// Replace node
const list2 = document.createElement('li');
list2.innerHTML = 'Replacing ...';
const secondHreading = document.getElementById('2nd');
root.replaceChild(list2,secondHreading)
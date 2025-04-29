//Create a new HTML element and append it to the body
//create h1element
const heading = document.createElement('h1');
//set the class
heading.className = 'head';
//set the id
heading.id = 'big';
//Add innerText
heading.innerText = 'Whats up Doc?';
//add the h1 tag to the body
document.body.appendChild(heading);

const li = document.createElement('li');
li.appendChild(document.createTextNode('Gilad is in the House!'));
li.setAttribute('class', 'head');

document.querySelector('ul.collection').appendChild(li);


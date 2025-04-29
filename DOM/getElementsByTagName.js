let link = document.links;
link[1].href = 'https://www.goop.com';

const heading = document.getElementsByTagName('h2');
console.log(heading);
heading[0].style.color = 'red';
heading[1].innerText = 'The New Cola is --> Cola JS!';

const lis = document.getElementsByTagName('li');
console.log(lis[0].innerText);


// examine the document object

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// document.title = 'Hello World';
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[9]);
// document.all[9].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// getElementById
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = '3px solid #000';

// getElementsByClassname
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = '#ff0';

// console.log(li.from(items).find((_, index) => index === 2));

// for (const item of items) {
//   item.style.backgroundColor = '#f4f4f4';
// }

// for (let item = 0; item < items.length; item++) {
//   const element = items[item];
//   element.style.backgroundColor = '#f00';
// }

// getElementByTagName
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = '#ff0';

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// querySelector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = '4px solid #ccc';

// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
// });

// const input = document.querySelector('input');
// console.log(input);
// input.setAttribute('id', 'title');
// input.setAttribute('name', 'title');
// input.placeholder = 'Title';
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';
// submit.style.backgroundColor = '#ff0';
// submit.style.border = 'none';
// submit.style.borderRadius = '5px';
// submit.style.color = '#333';

// var item = document.querySelector('.list-group-item');
// item.style.color = '#f00';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// querySelectorAll
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

// traversing the DOM
// var itemList = document.querySelector('#items');
// parentNode property
// console.log(itemList.parentNode);
// console.log(itemList.previousElementSibling.previousElementSibling);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = '#ff0';

// firstChild
// console.log(itemList.firstChild);

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';
// itemList.firstElementChild.style.backgroundColor = 'purple';

// lastChild
// console.log(itemList.lastChild);

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';
// itemList.lastElementChild.style.backgroundColor = '#ff0';

// nextSibling
// console.log(itemList.nextSibling);

// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement
// var newDiv = document.createElement('div');

// add class
// newDiv.classList.add('hello');

// add id
// newDiv.id = 'hello1';

// add attr
// newDiv.setAttribute('title', 'Hello Div');

// create text node
// var newDivText = document.createTextNode('Hello World');

// add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// container.insertBefore(newDiv, h1);
// newDiv.style.fontSize = '30px';
// console.log(newDiv);

// events
// var button = document
//   .getElementById('button')
//   .addEventListener('click', buttonClick);

// function buttonClick(e) {
// document.getElementById('header-title').textContent = 'Changed';
// document.querySelector('#main').style.backgroundColor = '#f4f4f4';
// console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
// var output = document.getElementById('output');
// output.innerHTML = `<h3>${e.target.id}</h3>`;
// console.log(e.type);
// console.log(e.clientX);
// console.log(e.clientY);
// console.log(e.offsetX);
// console.log(e.offsetY);
// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// }

var button = document.getElementById('button');
var output = document.getElementById('output');
var box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);

// function runEvent(e) {
//   e.preventDefault();
//   console.log('EVENT TYPE ' + e.type);

// Array.from(e.target.selectedOptions, (option) => {
//   console.log(option.value);
// });
// console.log(e.target.value);

// console.log(e.target.value);
// output.innerHTML = `<h3>${e.target.value}</h3>`;

// output.innerHTML = `
//   <h3>MouseX: ${e.offsetX}</h3>
//   <h3>MouseY: ${e.offsetY}</h3>
// `;

// document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

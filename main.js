const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem);

// filter event
filter.addEventListener('keyup', filterItems);

// add item
function addItem(e) {
  e.preventDefault();

  // get input value
  const newItem = document.getElementById('item').value;

  // create new li element
  const li = document.createElement('li');
  li.className = 'list-group-item';
  // add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // create delete button element
  const deleteBtn = document.createElement('button');
  // add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // deleteBtn.textContent = 'X';
  // li.insertAdjacentElement('beforeend', deleteBtn);

  // append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // append button to li
  li.appendChild(deleteBtn);

  // append li to list
  itemList.appendChild(li);
  document.getElementById('item').value = '';
}

// remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// filter items
function filterItems(e) {
  // convert text to lowercase
  const text = e.target.value.toLowerCase();
  // get lis
  const items = itemList.getElementsByTagName('li');
  // convert to an array
  Array.from(items).forEach((item) => {
    const itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) !== -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

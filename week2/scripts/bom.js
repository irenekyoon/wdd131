
const input = document.querySelectory('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('_______');

const li = document.createElement('li');

const deleteButton = document.createElement('deleteButton'); //try createElement('button') if 'deleteButton' doesn't work

li.textContent = input.value;

deleteButton.textContent = '❌';

li.append(deleteButton);
list.append(li);




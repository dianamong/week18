const form = document.querySelector('.form');
const input = document.querySelector('.text');
const list = document.querySelector('.list'); 
const deleteButton = document.querySelector('.delete');

let array = [];

let createLi = (note) => {
    let li = document.createElement('li');
    li.textContent = note;
    list.append(li);
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    array.push(input.value);
    localStorage.setItem('item', array);
    createLi(input.value);
    input.value = '';
})

array.forEach(element => {
    createLi(element);
})
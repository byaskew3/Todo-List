// Selectors
const input = document.querySelector('.todo-input');
const button = document.querySelector('.todo-button');
const list = document.querySelector('.todo-list');

// Event Listeners
button.addEventListener('click', addToDo);

// Functions

function addToDo(e) {
    // prevent form submitting
    e.preventDefault();
    
    // create todo DIV
    const todo_div = document.createElement('div');
    todo_div.classList.add('todo');

    // create todo LI
    const todo_li = document.createElement('li');
    todo_li.innerText = 'hey';
    todo_li.classList.add('todo-item');
    todo_div.appendChild(todo_li);

    //create complete button
    const complete_button = document.createElement('button');
    complete_button.innerHTML = '<i class="fas fa-check-square"></i>'
    complete_button.classList.add('complete-btn');
    todo_div.appendChild(complete_button);

    //create trash button
    const trash_button = document.createElement('button');
    trash_button.innerHTML = '<i class="fas fa-trash"></i>'
    trash_button.classList.add('trash-btn');
    todo_div.appendChild(trash_button);

    // append to list
    list.appendChild(todo_div)
}
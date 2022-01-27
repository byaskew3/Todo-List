// Selectors
const input = document.querySelector('.todo-input');
const button = document.querySelector('.todo-button');
const list = document.querySelector('.todo-list');
const filter = document.querySelector('.filter-todo')

// Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
button.addEventListener('click', addToDo);
list.addEventListener('click', deleteCheck);
filter.addEventListener('click', filterToDo);

// Functions

function addToDo(e) {
    // prevent form submitting
    e.preventDefault();
    
    // create todo DIV
    const todo_div = document.createElement('div');
    todo_div.classList.add('todo');

    // create todo LI
    const todo_li = document.createElement('li');
    todo_li.innerText = input.value;
    todo_li.classList.add('todo-item');
    todo_div.appendChild(todo_li);

    // add todo to local storage
    saveLocalTodos(input.value);

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

    // Clear Todo Input Value
    input.value = '';
}

function deleteCheck(e) {
    const item = e.target;
    // Delete Task
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }

    // Check Task
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterToDo(e) {
    const todos = list.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value){
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if(!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
}

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo) {
        // create todo DIV
    const todo_div = document.createElement('div');
    todo_div.classList.add('todo');

    // create todo LI
    const todo_li = document.createElement('li');
    todo_li.innerText = todo;
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
    })
}

function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}
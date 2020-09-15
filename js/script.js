//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();

    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')

    //List item element
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    //append to div
    todoDiv.appendChild(newTodo);

    //complete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('completed-button')
    todoDiv.appendChild(completedButton);

    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-button')
    todoDiv.appendChild(deleteButton);

    //append to list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value = '';
}

//delete function
function deleteCheck(e) {
    const item = e.target;

    //delete todo
    if (item.classList[0] === 'delete-button') {
        const todo = item.parentElement;
        //animate the fall
        todo.classList.add('fall');
        //remove after animation
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }

    //mark task as completed
    if (item.classList[0] === 'completed-button') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
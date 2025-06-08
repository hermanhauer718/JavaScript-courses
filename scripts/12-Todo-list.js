// Load the todoList from localStorage when the page loads
let todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2025-05-18'
}, {
  name: 'wash dishes',
  dueDate: '2025-05-18'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index) {
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${index}, 1);
      saveToLocalStorage();
      renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });
  
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input')
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate
  });

  inputElement.value = '';
  dateInputElement.value = '';

  saveToLocalStorage();
  renderTodoList();
}

function saveToLocalStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

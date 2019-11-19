let todos = [];
let todoValue;
let id = 0;

function TodoItem(completed, remove, value, id) {
  this.completed = completed;
  this.remove = remove;
  this.value = value;
  this.id = id; 
}

function clearTodoList() {
  document.getElementById('newTodo').value = "";
}

function todoList() {
  listTodo.innerHTML = '';
  for (let todo of todos) {
    $('#listTodo').append(`<input type="text" id="newTodo" class="newTodoList" value="${todo.value}">
                           <div id="remove"><i class="fa fa-trash"></i></div>`);
  };
}

$('#add').on('click', function() {
  todoValue = document.getElementById('newTodo').value;
  if (todoValue !== '') {
    addList(todoValue);
  } 
})

function addList(todoValue) {
  id = ++id;
  let todo = new TodoItem(false, false, todoValue, id);
    todos.push(todo);
    todoList();
    clearTodoList();
    console.log(todo);
}

$('.fa-trash:before').on('click', function() {
  alert(1);
});

function remove() {
  todos.forEach( function(todo, i, todos) {
    if(todo.remove == true) {
      delete todos[i];
    }
  });
}







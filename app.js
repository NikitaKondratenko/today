let todos = [];
let todoValue;
let id = 0;
let idLi;
let counter;

function createTodoItem(completed, remove, value, id) {
  this.completed = completed;
  this.remove = remove;
  this.value = value;
  this.id = id; 
}

function clearInput() {
  document.getElementById('newTodo').value = "";
}

function createTodoList() {
  listTodo.innerHTML = '';
  for (let todo of todos) {
    $('#listTodo').append(`<li id="${todo.id}"><i class="fa fa-check" id="checkTodo"></i><input type="text"  class="newTodoList" value="${todo.value}">
                           <i class="fa fa-trash"></i></li>`);
  };
  counterTodo();
}

$('#add').on('click', function() {
  todoValue = document.getElementById('newTodo').value;
  if (todoValue !== '') {
    addTodo(todoValue);
  } 
})

$('#newTodo').on('keypress', function(e) {
  todoValue = document.getElementById('newTodo').value;
  if(e.keyCode == 13 && todoValue !== '') {
    addTodo(todoValue);
  }
})

function addTodo(todoValue) {
  id = ++id;
  let todo = new createTodoItem(false, false, todoValue, id);
    todos.push(todo);
    createTodoList();
    clearInput();
    console.log(todo);
}

$('body').on('click', '.fa-trash', function () {
  idLi = $(this).parent().attr(`id`);
  todos.forEach(function(todo) {
    if(todo.id == idLi) {
      todo.remove = true;
    }
  });
  let removeTodos = todos.filter(function(todo) {
    if(todo.remove == false) {
      return true;
    }; 
  });
  todos = removeTodos;
  createTodoList();
});

function counterTodo() {
  counterDOM.innerHTML = '';
  counter = todos.length;
  return counterDOM.innerHTML = `<p>${counter} items left</p>`;
}

$('#allTodo').on('click', function () {
  createTodoList();
  console.log(todos);
});

$('#activeTodo').on('click', function () {
  let activeTodos = todos.filter(function(todo) {
    if(todo.completed == false) {
      return true;
    }
  });
  todos = activeTodos;
  createTodoList(todos);
});

$('body').on('click', '.fa-check', function () {
  idLi = $(this).parent().attr(`id`);
  todos.forEach(function(todo) {
    if(todo.id == idLi) {
      todo.completed = true;
    }
  });
  this.style.color = '#188A00';
  this.style.opacity = '.3';
  this.style.border = '3px solid #188A00';
});







let todos = [];
let todoValue;
let id = 0;
let idLi;
let counter;
let activeTodos;

function createTodoItem(completed, remove, value, id) {
  this.completed = completed;
  this.remove = remove;
  this.value = value;
  this.id = id; 
}

function clearInput() {
  document.getElementById('newTodo').value = "";
}

function counterTodo(counterTodos) {
  counterDOM.innerHTML = '';
  counter = counterTodos.length;
  return counterDOM.innerHTML = `<p>${counter} items left</p>`;
}

function createTodoList() {
  listTodo.innerHTML = '';
  for (let todo of todos) {
    $('#listTodo').append(
      `<li id="${todo.id}">
      <i class="fa fa-check" id="checkTodo"></i>
      <input type="text"  class="newTodoList"  id="rename" value="${todo.value}">
      <i class="fa fa-trash"></i>
      </li>`
    );
  };
  counterTodos = todos;
  counterTodo(counterTodos);
}

$('#add').on('click', function() {
  todoValue = document.getElementById('newTodo').value;
  if (todoValue !== '') {
    addTodo();
  } 
})

$('#newTodo').on('keypress', function(e) {
  todoValue = document.getElementById('newTodo').value;
  if(e.keyCode == 13 && todoValue !== '') {
    addTodo();
  }
})

function addTodo() {
  id = ++id;
  let todo = new createTodoItem(false, false, todoValue, id);
    todos.push(todo);
    createTodoList();
    clearInput();
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

$('#allTodo').on('click', function() {
  createTodoList();
});

$('#clearTodo').on('click', function() {
  todos = [];
  createTodoList();
});

$('#activeTodo').on('click', function() {
  showActiveTodo();
});
function showActiveTodo() {
  activeTodos = todos.filter(function(todo) {
    if(todo.completed == false) {
      return true;
    }
  });
  listTodo.innerHTML = '';
  for (let todo of activeTodos) {
    $('#listTodo').append(
      `<li id="${todo.id}">
      <i class="fa fa-check" id="checkTodo"></i>
      <input type="text"  class="newTodoList" id="rename" value="${todo.value}">
      <i class="fa fa-trash"></i>
      </li>`
    );
  };
  counterTodos = activeTodos;
  counterTodo(counterTodos);  
}

function renameTodo() {
  $('#newTodo').on('keypress', function(e) {
    todoValue = document.getElementById('newTodo').value;
    if(e.keyCode == 13 && todoValue !== '') {
      todos.forEach(function(todo) {
        if(todo.id == idLi) {
          todo.value = renameValue;
        }
      });
    }  
  })
}


$(document).on('dblclick', `#rename`,function() {
  // todoValue = document.getElementById('newTodo').value;
  idLi = $(this).parent().attr(`id`);
  let renameValue = this.value;
  
  console.log(todos);
});

$('#completedTodo').on('click', function() {
  showCompletedTodo();
});
function showCompletedTodo() {
  let completedTodos = todos.filter(function(todo) {
    if(todo.completed == true) {
      return true;
    }
  });
  listTodo.innerHTML = '';
  for (let todo of completedTodos) {
    $('#listTodo').append(
      `<li id="${todo.id}">
      <label><i class="fa fa-check" id="checkTodo"></i></label>
      <input type="text"  class="newTodoList" value="${todo.value}">
      <i class="fa fa-trash"></i>
      </li>`
    );
  };
  counterTodos = completedTodos;
  counterTodo(completedTodos);  
}

function checkInput() {
  
}

$('body').on('click', '.fa-check', function () {
  idLi = $(this).parent().attr(`id`);
  todos.forEach(function(todo) {
    if(todo.id == idLi) {
      todo.completed = true;
    }
  });
  $(this).toggleClass('activeCheck');
  $(this).parent().addClass('activeText');
  console.log(this);
  console.log(idLi);
});

// $('#something').on('click', function() {
//   if (!$(this).hasClass('clicked')) { // если класса нет
//     $(this).addClass('clicked'); // добавляем класс
//     console.log('First click'); // код для первого клика
//   } else { // если есть
//     $(this).removeClass('clicked'); // убираем класс
//     console.log('Second click'); // код для второго клика
//   }
// });






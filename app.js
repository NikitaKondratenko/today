let todos = [];
let todoValue;
let id = 0;
let idLi;
let counter;
let activeTodos;
let toggle = true;

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

function createTodoList(arr = todos) {
  let str = ``;
  for (let todo of arr) {
    str = str +
      `<li id="${todo.id}" ${todo.completed && 'class="activeCheck"'}>
      <input type="checkbox" class="checkTodo"/>
      <input type="text"  class="newTodoList"  id="edit" value="${todo.value}">
      <i class="delete-todo">x</i>
      </li>`;
  };
  // fa fa-trash
  $('#listTodo').html(str)
  counterTodos = todos;
  counterTodo(counterTodos);
}

$('#add').on('click', function () {
  todoValue = document.getElementById('newTodo').value;
  if (todoValue !== '') {
    addTodo();
  }
})

$('#newTodo').on('keypress', function (e) {
  todoValue = document.getElementById('newTodo').value;
  if (e.keyCode == 13 && todoValue !== '') {
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

function checkAll() {
  if (toggle == false) {
    todos.forEach(function (todo) {
      todo.completed = false;
    });
  } else {
    todos.forEach(function (todo) {
      todo.completed = true;
    });
  }
}

$(document).on('click', '.checkAll', function () {
  toggle = !toggle;
  checkAll();
  createTodoList();
});

// !!!!!!!!
$('body').on('click', '.fa-trash', function () {
  idLi = $(this).parent().attr(`id`);
  todos.forEach(function (todo) {
    if (todo.id == idLi) {
      todo.remove = true;
    }
  });
  let removeTodos = todos.filter(function (todo) {
    if (todo.remove == false) {
      return true;
    };
  });
  todos = removeTodos;
  createTodoList();
});

$('#allTodo').on('click', function () {
  createTodoList();
});

$('#clearCompletedTodo').on('click', function () {
  let clearCompletedTodos = todos.filter(function (todo) {
    if (todo.completed == true) {
      return false;
    } else {
      return true;
    }
  });
  todos = clearCompletedTodos;
  createTodoList();
});

$('#activeTodo').on('click', function () {
  showActiveTodo();
});
function showActiveTodo() {
  activeTodos = todos.filter(function (todo) {
    if (todo.completed == false) {
      return true;
    }
  });
  counterTodos = activeTodos;
  counterTodo(counterTodos);
}

function editTodo() {
  console.log('funktion')
  $('#edit').on('keypress', function (e) {
    console.log('enter')
    todoValue = document.getElementById('newTodo').value;
    if (e.keyCode == 13 && todoValue !== '') {
      todos.forEach(function (todo) {
        if (todo.id == idLi) {
          todo.value = renameValue;
        }
      });
    }
  })
}
$(document).on('dblclick', `#edit`, function () {
  // todoValue = document.getElementById('newTodo').value;
  idLi = $(this).parent().attr(`id`);
  let renameValue = this.value;
  editTodo();
  // console.log(todos);
});

$('#completedTodo').on('click', function () {
  showCompletedTodo();
});
function showCompletedTodo() {
  let completedTodos = todos.filter(function (todo) {
    if (todo.completed == true) {
      return true;
    }
  });
  createTodoList(completedTodos);
  // listTodo.innerHTML = '';
  // for (let todo of completedTodos) {
  //   $('#listTodo').append(
  //     `<li id="${todo.id}">
  //     <label><i class="fa fa-check" id="checkTodo"></i></label>
  //     <input type="text"  class="newTodoList" id="edit" value="${todo.value}">
  //     <i class="fa fa-trash"></i>
  //     </li>`
  //   );
  // };
  counterTodos = completedTodos;
  counterTodo(completedTodos);
}

$('body').on('change', '.checkTodo', function () {
  idLi = $(this).parent().attr(`id`);
  let kek = $(this).prop(`checked`);
  let kek2 = $(this).is(':checked');
  console.log(`kek`, kek)
  console.log(`kek2`, kek2)

  todos.forEach(function (todo) {
    if (todo.id == idLi) {
      todo.completed = true;
    }
  });
  createTodoList();
  // $(this).toggleClass('activeCheck');
  // $(this).parent().addClass('activeText');
  // console.log(this);
  // console.log(idLi);
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






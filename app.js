// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function() {
//         this.value += +prompt('Сколько нужно добавить?', 0);
//     };

// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// console.log(accumulator.value);


// let fruits = ['Apples', 'Orange', 'Pear'];
// alert ( fruits.pop());
// alert(fruits);

// let todoValue = document.getElementsByClassName('newTodo');
// let val = todoValue.value;
// console.log(val);

add.onclick = function() {
  let todo = document.getElementById('newTodo').value;
  document.getElementById('listTodo').innerHTML = `${todo}`;
}

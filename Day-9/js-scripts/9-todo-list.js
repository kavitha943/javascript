/* Main Idea of  Javascript:
 we can 1. save the data
        2.Generate the HTML
        3.Make it interactive */

const todoList = [];
//renderTodoList();
function renderTodoList() {


  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`; //generating html
    todoListHTML += html;
  }
  console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');// this gets entire html element
  //console.log(inputElement);
  const name = inputElement.value;//this gets only value of input
  //console.log(name);
  todoList.push(name);
  console.log(todoList);
  inputElement.value = '';
  renderTodoList();
}
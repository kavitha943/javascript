/* Main Idea of  Javascript:
 we can 1. save the data
        2.Generate the HTML
        3.Make it interactive */

const todoList = [{
  name:'make dinneer',
  dueDate:'9-19-2025'
},
{
  name:'wash dishes',
  dueDate:'31-12-2025'
}
];
renderTodoList();

function renderTodoList() {


  let todoListHTML = '';

  todoList.forEach(function(todoObject,index){
    //const todoObject = todoList[i];
    //const name=todoObject.name;
    //const dueDate=todoObject.dueDate;
    const {name, dueDate}=todoObject;
    const html = `
      
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
          todoList.splice(${index},1);
          renderTodoList();
           // Whenever we update the todo list, save in localStorage.
          
          " class="delete-todo-button"
          > 
        Delete</button>
      
    `; //generating html
    todoListHTML += html;
  });
  
    

  //console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');// this gets entire html element
  //console.log(inputElement);
  const name = inputElement.value;//this gets only value of input
  //console.log(name);
  const dateInputElement=document.querySelector('.js-due-date-input');
  const dueDate= dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate= dueDate,
    name,
    dueDate
  });
  console.log(todoList);
  inputElement.value = '';
  
  renderTodoList();
  saveToStorage();
}
function saveToStorage(){
  localStorage.setItem('todoList',JSON.stringify(todoList))
}
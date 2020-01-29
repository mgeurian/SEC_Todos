document.addEventListener("DOMContentLoaded", function(){
  const form = document.querySelector('#todoForm')
  const input = document.querySelector('input[name="todo"]')
  const list = document.querySelector('#todoList')
  // load localStorage
  const localTodos = JSON.parse(localStorage.getItem("todos")) || [];
      for(let i = 0; i < localTodos.length; i++){
        let newTodo = document.createElement('li');
        let removeBtn = document.createElement('button')
        newTodo.innerText = localTodos[i];
        newTodo.appendChild(removeBtn)
        list.append(newTodo)
      }
  // remove and toggle current todos
  list.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
      let here = e.target.parentElement.innerText
      for(let i = 0; i < localTodos.length; i++){
        if(localTodos[i] === here){
          localTodos.splice(i, 1)
          localStorage.setItem("todos", JSON.stringify(localTodos))
          i--;
        }
      }
      e.target.parentElement.remove() 
      localStorage.setItem("todos", JSON.stringify(localTodos))
    } else if(e.target.tagName === 'LI'){
      e.target.style.textDecoration = "line-through"
    }
  })
  //submit new todos
  form.addEventListener('submit', function(e){
    e.preventDefault();
    let newTodo = document.createElement('li');
    let removeBtn = document.createElement('button')
    newTodo.innerText = input.value;
    newTodo.appendChild(removeBtn);
    form.reset();
    list.append(newTodo)
    localTodos.push(newTodo.innerText);
    localStorage.setItem("todos", JSON.stringify(localTodos));
  })
})


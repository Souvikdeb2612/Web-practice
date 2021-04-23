const toDo = document.getElementById('todo');
const btn = document.getElementById('btn');
const list =document.getElementById('list');


btn.onclick=(e)=>{
    const todoText = toDo.value;
    const li = document.createElement('li');
    li.innerText = todoText;
    list.append(li);
    li.onclick=(e)=>{
        e.target.remove(li);
    }
    todo.value=" ";
}
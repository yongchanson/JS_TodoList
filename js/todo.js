const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// function moveToDo(event){
//     const li = event.target.parentElement;
//     if(li.style.color === "gray"){
//         li.style.color = "lightcoral"
//     } else {
//         li.style.color = "gray"
//     }
    
//     toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //li.id가 String상태인걸 int로 변경
//     saveToDos() //다시 불러와야 삭제된게 적용됨

// }

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //li.id가 String상태인걸 int로 변경
    saveToDos() //다시 불러와야 삭제된게 적용됨
}


function paintToDo(newTodo){
    const li = document.createElement("li");
        li.id = newTodo.id;
    const span = document.createElement("span");
        span.innerText = newTodo.text;
    const button1 = document.createElement("button1");
    const button2 = document.createElement("button2");
    button1.innerText ="❌"
    button2.innerText ="🛒"
    button1.addEventListener("click", deleteToDo);
        button2.addEventListener("click", function moveToDo(event){
        const li = event.target.parentElement;
        if(span.style.color === "gray"){
            span.style.color = "lightcoral"
            span.style.textDecoration = "none"
        } else {
            span.style.color = "gray"
            span.style.textDecoration = "line-through"
        }
        
        toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //li.id가 String상태인걸 int로 변경
        saveToDos() //다시 불러와야 삭제된게 적용됨
    
    });
    li.appendChild(span);
    li.appendChild(button1);
    li.appendChild(button2);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; // input의 value을 비우기 전 값
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj)
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
  }

const input = document.getElementById("input");
const button = document.getElementById("button");
const todo_con = document.getElementById("todo_con");

button.addEventListener('click',()=>{
    const todo = input.value;
    if(todo == ''){
        window.alert("Enter a Anything");
    }
    else{
        const li = document.createElement("li");
        li.textContent = todo;
        li.classList.add("todo_item");
        todo_con.appendChild(li);
    }
    input.value = '';
})

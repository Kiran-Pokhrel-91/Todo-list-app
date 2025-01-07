let todoinput = document.querySelector(".todo-input");
let btn = document.querySelector(".btn");
let todos = document.querySelector(".todos");


btn.addEventListener("click", function () {
    let todovalue = todoinput.value.trim(); 
    if (todovalue === "") {
        alert("Add your text");
    } else {
        let newDiv = document.createElement("div");
        newDiv.classList.add("todos-items"); 

        let li = document.createElement("li");
        li.textContent = todovalue;

        let delbtn = document.createElement("button");
        delbtn.textContent = "X";

        // div bhitra li ra delete btn rakheko 
        newDiv.appendChild(li);
        newDiv.appendChild(delbtn);

        // div lai todo bhitra rakheko
        todos.appendChild(newDiv);

        // input value removed for next use
        todoinput.value = "";

        // Add event listener for delete button
        delbtn.addEventListener("click", function () {
            newDiv.remove(); // Removes the entire newDiv and its children
        });
    }
});

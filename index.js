const Task = document.getElementById("Task");
const Button = document.getElementById("Button");
const List = document.getElementById("List");

Button.addEventListener("click", addTask);

function addTask () {
    const task = Task.value.trim();
    if (task != "") {
        const li = document.createElement("li");
        li.textContent = task;


        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            li.remove();
        });
        
        li.appendChild(deleteButton);
        List.appendChild(li);
        Task.value = "";

    }
}
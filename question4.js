const tasks = [];


// add the task you wanted to add
function addTask(id, name, description) {
    const task = { id, name, description };
    tasks.push(task);
    console.log(`Task added:`, task);
    displayTasks();
}

// view tasks
function viewTasks() {
    console.log("All tasks:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
    });
}

//update or edit tasks
function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
        console.log(`Task updated:`, task);
        displayTasks();
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}


// delete the task/s of your choice
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1);
        console.log(`Task deleted:`, deletedTask[0]);
        displayTasks();
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// view tasks or display
function displayTasks() {
    const taskList = document.getElementById("todo-task-list");
    taskList.innerHTML = ""; // Clearing the list before re-rendering
    tasks.forEach(task => {
        const li = document.createElement("li");

        // information of the task you added
        li.textContent = `ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`;


        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.onclick = () => deleteTask(task.id);
        li.appendChild(deleteButton);


        const updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.classList.add("update");
        updateButton.onclick = () => {
            const newName = prompt("Enter new task name:", task.name);
            const newDescription = prompt("Enter new task description:", task.description);
            if (newName && newDescription) {
                updateTask(task.id, newName, newDescription);
            }
        };
        li.appendChild(updateButton);

        // Appending the task item to the list
        taskList.appendChild(li);
    });
}



document.getElementById("todo-task").addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = document.getElementById("todo-input");
    const id = tasks.length + 1;
    addTask(id, nameInput.value, `${nameInput.value}`);
    nameInput.value = "";
});
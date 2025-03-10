class Task {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

const tasks = [];

// Create a new task
function addTask(name, description) {
    const id = tasks.length + 1;
    const newTask = new Task(id, name, description);
    tasks.push(newTask);
    console.log(`Task added: ${JSON.stringify(newTask)}`);
}

// Read (View) all tasks
function viewTasks() {
    if (tasks.length === 0) {
        console.log('No tasks available.');
    } else {
        console.log('Task List:');
        tasks.forEach(task => console.log(task));
    }
}

// Update a task
function updateTask(id, updatedName, updatedDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = updatedName || task.name;
        task.description = updatedDescription || task.description;
        console.log(`Task updated: ${JSON.stringify(task)}`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// Delete a task
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1);
        console.log(`Task deleted: ${JSON.stringify(deletedTask[0])}`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// Example Usage
addTask('Complete Assignment', 'Finish math assignment by Friday.');
addTask('Grocery Shopping', 'Buy fruits, vegetables, and snacks.');
viewTasks();

updateTask(1, 'Complete Math Assignment', 'Submit by Thursday.');
deleteTask(2);

viewTasks();

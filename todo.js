let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const task = {
        text: taskText,
        completed: false,
        important: false // Added important property
    };
    
    tasks.push(task);
    renderTasks();

    taskInput.value = "";
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear the list before rendering

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        
        li.innerHTML = `
            <input type="checkbox" onchange="toggleCompleted(${index})" ${task.completed ? "checked" : ""}>
            ${task.text}
            <div>
                <button onclick="markImportant(${index})">
                    <i class="fas fa-star" style="color: ${task.important ? 'gold' : 'gray'};"></i>
                </button>
                <button onclick="deleteTask(${index})">
                    <i class="fas fa-trash" style="color: red; font-size: 15px"></i>
                </button>
            </div>
        `;
        
        taskList.appendChild(li);
    });
}

function toggleCompleted(index) {
    tasks[index].completed = !tasks[index].completed; // Toggle completed status
    renderTasks();
}

function markImportant(index) {
    tasks[index].important = !tasks[index].important; // Toggle important status
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function filterTasks() {
    const filter = document.getElementById("filterOptions").value;
    
    const filteredTasks = tasks.filter(task => {
        if (filter === "completed") {
            return task.completed;
        } else if (filter === "pending") {
            return !task.completed;
        } else if (filter === "important") {
            return task.important; // Filter for important tasks
        }
        return true; // Show all
    });

    renderFilteredTasks(filteredTasks);
}

function renderFilteredTasks(filteredTasks) {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear the list before rendering

    filteredTasks.forEach((task, index) => {
        const li = document.createElement("li");
        
        li.innerHTML = `
            <input type="checkbox" onchange="toggleCompleted(${index})" ${task.completed ? "checked" : ""}>
            ${task.text}
            <div>
                <button onclick="markImportant(${index})">
                    <i class="fas fa-star" style="color: ${task.important ? 'gold' : 'gray'};"></i>
                </button>
                <button onclick="deleteTask(${index})">
                    <i class="fas fa-trash" style="color: red;"></i>
                </button>
            </div>
        `;
        
        taskList.appendChild(li);
    });
}

// Function to toggle menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    // Toggle visibility
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block"; // Show menu
    } else {
        menu.style.display = "none"; // Hide menu
    }
}

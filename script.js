const taskList = document.getElementById('taskList');

function fetchTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    renderTasks(tasks);
}

async function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskPriority = document.getElementById('taskPriority').value;

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTask = {
        id: Date.now(), 
        name: taskInput.value.trim(),
        priority: taskPriority,
        status: 'pending'
    };

    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    taskInput.value = '';
    fetchTasks;
}

async function completeTask(taskId) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.map(task =>
        task.id === taskId ? { ...task, status: 'completed' } : task
    );

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    fetchTasks(); 
}

async function deleteTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    fetchTasks(); 
}

async function sortTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.sort((a, b) => {
        const priorityOrder = { low: 1, medium: 2, high: 3 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    renderTasks(tasks);
}

function renderTasks(tasks) {
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task ${task.priority}`;
        li.innerHTML = `
            <span>${task.name}</span>
            <span class="priority">[${task.priority}]</span>
            <span class="status">[${task.status}]</span>
            <button onclick="completeTask(${task.id})">Complete</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function fetchAISuggestion() {
    const suggestion = "Break down big tasks into smaller, actionable steps to improve productivity.";
    document.getElementById('aiSuggestion').innerHTML = `
        <strong>AI Suggestion:</strong>
        <p>${suggestion}</p>
    `;
}

fetchTasks();
fetchAISuggestion();

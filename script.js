const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    const dateTime = taskDate.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText} ${dateTime ? `- ${new Date(dateTime).toLocaleString()}` : ''}</span>
        <div>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
    taskDate.value = "";
}

function completeTask(button) {
    const li = button.parentElement.parentElement;
    li.classList.toggle("completed");
}

function editTask(button) {
    const li = button.parentElement.parentElement;
    const taskText = li.firstChild.textContent.split('-')[0].trim();
    const dateTime = li.firstChild.textContent.split('-')[1]?.trim() || '';

    taskInput.value = taskText;
    taskDate.value = dateTime ? new Date(dateTime).toISOString().slice(0, 16) : '';
    li.remove();
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}

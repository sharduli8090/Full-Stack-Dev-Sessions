document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const updateTaskButton = document.getElementById('update-task');
    const taskList = document.getElementById('task-list');
    const clearAllButton = document.getElementById('clear-all');
    const selectedTask = document.getElementById('selected-task');

    addTaskButton.addEventListener('click', addTask);
    updateTaskButton.addEventListener('click', updateTask);
    taskList.addEventListener('click', showTaskDetails);
    clearAllButton.addEventListener('click', clearAll);

    loadTasksFromLocalStorage();

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const task = {
                id: Date.now(),
                text: taskText
            };
            saveTaskToLocalStorage(task);
            addTaskToList(task);
            taskInput.value = '';
        }
    }

    function updateTask() {
        const taskId = updateTaskButton.dataset.id;
        const taskText = taskInput.value.trim();
        if (taskId && taskText) {
            const updatedTask = {
                id: taskId,
                text: taskText
            };
            updateTaskInList(updatedTask);
            saveUpdatedTaskToLocalStorage(updatedTask);
            taskInput.value = '';
            updateTaskButton.style.display = 'none';
            updateTaskButton.dataset.id = '';
            selectedTask.textContent = '';
        }
    }

    function showTaskDetails(e) {
        if (e.target && e.target.tagName === "LI") {
            const task = getTaskById(e.target.dataset.id);
            selectedTask.textContent = task.text;
            updateTaskButton.style.display = 'block';
            updateTaskButton.dataset.id = task.id;
            taskInput.value = task.text;
        }
    }

    function clearAll() {
        localStorage.clear();
        taskList.innerHTML = '';
        selectedTask.textContent = '';
        taskInput.value = '';
        updateTaskButton.style.display = 'none';
        updateTaskButton.dataset.id = '';
    }

    function addTaskToList(task) {
        const listItem = document.createElement('li');
        listItem.textContent = task.text;
        listItem.dataset.id = task.id;
        taskList.appendChild(listItem);
    }

    function updateTaskInList(task) {
        const listItem = document.querySelector(`li[data-id="${task.id}"]`);
        if (listItem) {
            listItem.textContent = task.text;
        }
    }

    function getTaskById(id) {
        return JSON.parse(localStorage.getItem(id));
    }

    function saveUpdatedTaskToLocalStorage(task) {
        localStorage.setItem(task.id, JSON.stringify(task));
        taskInput.value = '';
        updateTaskButton.style.display = 'none';
        updateTaskButton.dataset.id = '';
        selectedTask.textContent = '';
    }

    function saveTaskToLocalStorage(task) {
        localStorage.setItem(task.id, JSON.stringify(task));
        taskInput.value = '';
    }

    function loadTasksFromLocalStorage() {
        taskList.innerHTML = '';
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (!isNaN(key)) {
                const task = JSON.parse(localStorage.getItem(key));
                addTaskToList(task);
            }
        }
    }
});

function addTask() {
    let inputTask = document.getElementById('input');
    let taskText = inputTask.value.trim();

    if (taskText !== "") {
        let taskList = document.getElementById('task-list');

        let taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        let taskInput = document.createElement('input');
        taskInput.type = 'text';
        taskInput.value = taskText;
        taskInput.disabled = true;

        let editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function() {
            taskInput.disabled = !taskInput.disabled;
            if (taskInput.disabled) {
                editButton.textContent = 'Edit';
            } else {
                editButton.textContent = 'Save';
            }
        };

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            taskList.removeChild(taskItem);
        };

        taskItem.appendChild(taskInput);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);

        inputTask.value = "";
    }
}

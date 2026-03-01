taskInput= document.getElementById('taskInput');
addTaskButton = document.getElementById('addTaskButton');
taskList = document.getElementById('taskList');


addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value;
    // alert("Task added: " + taskText);
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }
    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);

    taskText.value="";

    alert("Task added: " + taskText);
    
});
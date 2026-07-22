const taskInput = document.getElementById('taskInput');
 const addTask = document.getElementById('btn');
  const taskList = document.getElementById('list'); 
  addTask.addEventListener('click', () => { 
    const taskText = taskInput.value; 
    if (taskText !== "") { 
        const listItem = document.createElement('li');
         listItem.textContent = taskText; 
         taskList.appendChild(listItem);
          taskInput.value = ""; 
        }
    });
const taskInput = document.getElementById('taskInput');
const addTask = document.getElementById('btn');
const taskList = document.getElementById('list');
addTask.addEventListener('click', () => {
  const taskText = taskInput.value;
  if (taskText !== "") {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    list.appendChild(listItem);
    taskInput.value = "";
  }
});
const removeTask = document.getElementById("removebtn");

removeTask.addEventListener("click", () => {
  if (taskList.lastElementChild) {
    taskList.lastElementChild.remove();
  }
});
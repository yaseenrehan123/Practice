
//#region tasks

function Task(task,date){
    this.id = Date.now(),
    this.task = task,
    this.date = date;
}

//#region refrences

const textField = document.getElementById('text-field');
const dateField = document.getElementById('date-field');
const taskContainer = document.querySelector('.list-container');
const addBtn = document.querySelector('.add-list-btn');

//#endregion

//#region addBtnFunc

addBtn.onclick = function(){
    if(textField.value === ''){
        alert('Please Write Something In The Field First!');
        return;
    }
    let taskText = textField.value;
    let taskDate = dateField.value;
    if(taskDate === ''){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;
        taskDate = today;
    }
    
    newTask = new Task(taskText,taskDate);
    tasksArray.push(newTask); // Store only data, not DOM elements
    saveTask();
    createTask(newTask);
    textField.value = '';
    dateField.value = '';
}

//#endregion

let tasksArray = JSON.parse(localStorage.getItem('saved-tasks')) || [];
tasksArray.forEach(element => {
    createTask(element);
});
function createTask(Task){ // creates task into the scene
    const task = document.createElement('div');
    task.className = 'list-item';
    task.dataset.id = Task.id;

    const taskContent = document.createElement('h1');
    taskContent.className = 'list-element';
    taskContent.textContent = Task.task;

    const taskDate = document.createElement('h1');
    taskDate.className = 'list-element';
    taskDate.textContent = Task.date;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = function(){
        removeTask(task);
    }
    
    console.log(tasksArray);
    saveTask();
    taskContainer.append(task);
    task.append(taskContent,taskDate,removeBtn);
}

function removeTask(taskElement){
    tasksArray = returnRemainingCards(taskElement);
    console.log(tasksArray);
    saveTask();
    taskElement.remove();
}
function returnRemainingCards(element){
    const taskId = element.dataset.id;
    return tasksArray.filter(task => task.id.toString() !== taskId); // Compare with stored task ID
}
function saveTask(){
    localStorage.setItem('saved-tasks',JSON.stringify(tasksArray));
}
//#endregion
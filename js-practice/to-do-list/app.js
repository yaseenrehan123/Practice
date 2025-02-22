
//#region tasks

function Task(task,date){
    this.id = Date.now(),
    this.task = task,
    this.date = date;
}

//#region refrences

const textField = document.getElementById('text-field');
const dateField = document.getElementById('date-field');
const taskContainer = document.querySelector('.task-list-container');
const addBtn = document.querySelector('.add-task-btn');

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
    createTask(newTask);
    textField.value = '';
    dateField.value = '';
}

//#endregion

let tasksArray = [];

function createTask(Task){ // creates task into the scene
    const task = document.createElement('div');
    task.className = 'task';

    const taskContent = document.createElement('h1');
    taskContent.className = 'task-element';
    taskContent.textContent = Task.task;

    const taskDate = document.createElement('h1');
    taskDate.className = 'task-element';
    taskDate.textContent = Task.date;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = function(){
        removeTask(task);
    }
    task.dataset.id = Task.id;

    tasksArray.push(task);
    console.log(tasksArray);
    taskContainer.append(task);
    task.append(taskContent,taskDate,removeBtn);
}

function removeTask(taskElement){
    tasksArray = returnRemainingCards(taskElement);
    console.log(tasksArray);
    taskElement.remove();
}
function returnRemainingCards(element){
    const taskId = element.dataset.id;
    return tasksArray.filter(task => task.dataset.id !== taskId);
}

//#endregion
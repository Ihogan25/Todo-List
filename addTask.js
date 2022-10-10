import createProject from "./createProject.js";
import projects from "../src/index.js";

const task = (()=> {
    const taskData = {
        taskTitle: document.getElementById('task-title'),
        mainTitle: document.getElementById('main-title'),
        tasksList: document.getElementById('tasks-list')
    }

    const addTask = (ev) => {
        ev.preventDefault();
        if(projects.length > 0) {
        for(let i = 0; i < projects.length; i++) {
            if(taskData.mainTitle.textContent === projects[i].title) {
                let taskCard = document.createElement('div');
                taskCard.classList.add('task');
                taskCard.innerHTML = `${taskData.taskTitle.value} <button class="del-task-btn">X</button>` ;
                projects[i].addTask(taskCard)
            }
        }
        }
        else {
            window.alert('Please create a project to add a task to.')
        }

    }

    const editTask =()=> {

    }

    return  {
        addTask,
        editTask
    }

})();


export default task;
import createProject from "./createProject.js";
import projects from "../src/index.js";
import dltObj from "./deleteFunc.js";

const task = (()=> {
    const taskData = {
        taskTitle: document.getElementById('task-title'),
        mainTitle: document.getElementById('main-title'),
        tasksList: document.getElementById('tasks-list')
    }

    //this function is used to add a task to the selected project
    const addTask = (ev) => {
        ev.preventDefault();
        if(projects.length > 0) {
        //this loop is used to check if a project is selcted or if one is made
            for(let i = 0; i < projects.length; i++) {
            //if there isa project that exists then create a project
                if(taskData.mainTitle.textContent === projects[i].title) {
                    let taskCard = document.createElement('div');
                    taskCard.classList.add('task');
                    taskCard.innerHTML = `${taskData.taskTitle.value} <button class="del-task-btn">X</button>` ;
                    projects[i].addTask(taskCard);
                }
            }
        }
        //else alert thr used to create a rproject in order for them to add a task
        else {
            window.alert('Please create a project to add a task to.')
        }
    }

    //this function allows for the user to edit a selcted task
    const editTask =()=> {

    }

    return  {
        addTask,
        editTask
    }

})();


export default task;
import projects from "../src/index.js";
import dltObj from "./deleteFunc.js";
import  {selectedProj} from './displayTasksAndProjects.js';
import { pageData } from "./displayTasksAndProjects.js";

const task = (()=> {

    const allTasks = []
    //this function is used to add a task to the selected project
    class Task {
        constructor(title, importance, date, taskCard) {
            this.title = title;
            this.importance = importance;
            this.date = date;
            this.taskCard = taskCard;
        }
        chngDate(newDate) {
            this.date = newDate;
        }
        get task() {
            return Task;
        }

    }
    const addTask = (ev) => {
        ev.preventDefault();
        if(projects.length > 0) {
            //if there isa project that exists then create a project
                if(pageData.mainTitle.innerHTML === selectedProj.proj.title) {
                    let taskCard = document.createElement('div');
                    taskCard.classList.add('task');
                    taskCard.innerHTML = `<p>${pageData.taskTitle.value}</p> 
                    <p>${pageData.taskImportance.value}</p>
                    <p>${pageData.taskDate.value}</p>
                    <button class="del-task-btn">X</button>`;
                    let task = new Task(pageData.taskTitle.value, pageData.taskImportance.value, pageData.taskDate.value, taskCard);
                    selectedProj.proj.addTask(task); 
                    allTasks.push(task);
                }

        }
        //else alert thr used to create a rproject in order for them to add a task
        else {
            window.alert('Please create a project to add a task to.')
        }
    }

    //this function allows for the user to edit a selcted task

    return  {
        addTask,
        allTasks
    }

})();


export default task;
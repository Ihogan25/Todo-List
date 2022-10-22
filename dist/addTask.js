import projects from "../src/index.js";
import  {selectedProj} from './displayTasksAndProjects.js';
import { pageData } from "./displayTasksAndProjects.js";

const task = (()=> {

    //this function is used to add a task to the selected project
    const addTask = (ev) => {
        ev.preventDefault();
        if(projects.length > 0) {
            //if there isa project that exists then create a project
                if(pageData.mainTitle.innerHTML == selectedProj.proj.title) {
                    let taskCard = document.createElement('div');
                    taskCard.classList.add('task');
                    taskCard.innerHTML = `<p>${pageData.taskTitle.value}</p> <button class="del-task-btn">X</button>` ;
                    selectedProj.proj.addTask(taskCard);  
                }
                else {
                    console.log(selectedProj.proj)
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
    }

})();


export default task;
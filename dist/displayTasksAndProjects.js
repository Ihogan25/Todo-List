import projects from "../src/index.js";
import createProject from '../dist/createProject.js';
import dltObj from "./deleteFunc.js";

let selectedProj = {
    proj: {

    },
    chngProj(newProj) {
        return this.proj = newProj;
    }
};

let pageData = {
    mainTitle: document.getElementById('main-title'),
    projectsList: document.getElementById('projects-list'),
    tasksList: document.getElementById('tasks-list'),
    projTitle: document.getElementById('project-title'),
    taskTitle: document.getElementById('task-title')
}

const display = (()=> { 
    //this function displays the slected projects tasks and changed the main header to the selected projects title
    const showProjectContent =(ev)=> {
        ev.preventDefault();
        createProject.domProjs.forEach( projCard => {
            projCard.addEventListener('click', ()=> {
                if(projects.length > 0) {
                    selectedProj.chngProj(projects[createProject.domProjs.indexOf(projCard)]);
                     pageData.mainTitle.textContent = selectedProj.proj.title;
                     display.showProjTasks(); 
                }
            })
        })
    }

    //this function is a child function to the showProject content, this shows the slected projects tasks
    const showProjTasks =()=> {
        if(projects.length > 0) {
            while (pageData.tasksList.hasChildNodes()) {
                pageData.tasksList.removeChild(pageData.tasksList.firstChild)
                }
            for(let i = 0; i < selectedProj.proj.tasks.length; i++) {
                console.log(selectedProj.proj)
                pageData.tasksList.appendChild(selectedProj.proj.tasks[i])
            }
            
        }
    }

    //returns all functions4444
    return {
        showProjectContent,
        showProjTasks,
    }
})();   

export {display, selectedProj, pageData};

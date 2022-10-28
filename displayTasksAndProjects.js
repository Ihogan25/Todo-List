import projects from "../src/index.js";
import createProject from '../dist/createProject.js';
import dltObj from "./deleteFunc.js";
import _ from 'lodash';

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
    taskTitle: document.getElementById('task-title'),
    taskDate: document.getElementById('task-date'),
    taskImportance: document.getElementById('task-importance')
}

const display = (()=> { 
    //this function displays the slected projects tasks and changed the main header to the selected projects title
    const showProjectContent =()=> {
        createProject.domProjs.forEach( projCard => {
            projCard.addEventListener('click', (ev)=> {
                ev.preventDefault()
                let projIndx = createProject.domProjs.indexOf(projCard);
                
                if(_.isEqual(selectedProj.proj, projects[projIndx]) === false) {
                    selectedProj.chngProj(projects[projIndx]);
                    pageData.mainTitle.textContent = selectedProj.proj.title;
                    showProjTasks();
                }
                else if(_.isEqual(selectedProj.proj, projects[projIndx]) === true) {
                    selectedProj.chngProj(projects[projIndx]);
                    pageData.mainTitle.textContent = selectedProj.proj.title;
                    showProjTasks();
                }

                
              
            })
        })
    }


    //this function is a child function to the showProject content, this shows the slected projects tasks
    const showProjTasks =()=> {
            while (pageData.tasksList.hasChildNodes()) {
                pageData.tasksList.removeChild(pageData.tasksList.firstChild)
                }
            for(let i = 0; i < selectedProj.proj.tasks.length; i++) {
                pageData.tasksList.appendChild(selectedProj.proj.tasks[i].taskCard)
            }
            
        
    }

    //returns all functions4444
    return {
        showProjectContent,
        showProjTasks,
    }
})();   

export {display, selectedProj, pageData};

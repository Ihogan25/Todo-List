import projects from "../src/index.js";
import createProject from '../dist/createProject.js';
import dltObj from "./deleteFunc.js";


const display = (()=> {
    const pageData = {
        mainTitle: document.getElementById('main-title'),
        projectsList: document.getElementById('projects-list'),
        tasksList: document.getElementById('tasks-list')
    }

    const addIndexies =(ev)=> {
        ev.preventDefault();
        for(let i = 0; i < projects.length; i++) {
            pageData.projectsList.children[i].dataset.index = i;
            pageData.projectsList.children[i].children[1].dataset.index = i;

        }
    }

    const showProjectContent =(ev)=> {
        ev.preventDefault();
        createProject.domProjs.forEach( projCard => {
            projCard.addEventListener('click', ()=> {
                pageData.mainTitle.textContent = projCard.firstChild.textContent;
                display.showProjTasks();  
                dltObj.taskObj()
            })
        })
    }

    const showProjTasks =()=> {
        for(let i = 0; i < projects.length; i++) {
            if(pageData.mainTitle.textContent === projects[i].title) {
                while (pageData.tasksList.hasChildNodes()) {
               pageData.tasksList.removeChild(pageData.tasksList.firstChild)
               }
               for(let j = 0; j < projects[i].tasks.length; j++) {
                pageData.tasksList.appendChild(projects[i].tasks[j])
               }

            }
        }
    }
    return {
        showProjectContent,
        showProjTasks,
        pageData,
        addIndexies
    }
})();   

export default display;
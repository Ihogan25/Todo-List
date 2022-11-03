import { create } from '../dist/create.js';
import { display, dom } from './display.js';
import dlt from './delete.js';
const projects = []
const allTasks = [];
const selectedProj = {
    proj: {}
}

// localStorage.clear()
localStorage.setItem('projects', JSON.stringify(projects));
localStorage.setItem('allTasks', JSON.stringify(allTasks));
localStorage.setItem('selectedProj', JSON.stringify(selectedProj));

const storage = (()=> {

    const loadStoredItems =()=> {
        let projs = JSON.parse(localStorage.getItem('projects'))
        if(projs.length > 0) {
            projs.forEach( project => {
                let projCard = create.domProjCard(project.title);
                dom.projData.projsList.appendChild(projCard);
            })
        }
        dlt.task()
        dlt.project()
    }

  
    const rmProjFromStorg=(val)=> {
      
    }

    const rmTaskFromStorg = () => {
        
    }

    return {
        rmProjFromStorg,
        rmTaskFromStorg,
        loadStoredItems,
    }

})()


export {storage, projects, allTasks, selectedProj}
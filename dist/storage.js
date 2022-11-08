import { create } from '../dist/create.js';
import dlt from './delete.js';
import { display, dom } from './display.js';
const projects = []
const allTasks = [];
const selectedProj = {
    proj: {},
    chngProj(newProj) {
        this.proj = newProj;
    }
}



const storage = (()=> {

    const loadStoredItems =()=> {
       if(localStorage.length > 0) {
            for(let i = 0; i < localStorage.length; i++) {
                const project = JSON.parse(localStorage.getItem(localStorage.key(i)));
                const card = create.domProjCard(project.title);
                dom.projData.projsList.innerHTML += card
            }   
            selectedProj.chngProj(JSON.parse(localStorage.getItem(localStorage.key(0))));
            dom.mainTitle.textContent = selectedProj.proj.title;
            display.showProjTasks();
            dlt.project()
            display.showProjectContent();
            dlt.task()

       }
    }

    const addTaskToProj =(proj, task)=> {
        proj.tasks.push(task);
        localStorage.setItem(proj.title, JSON.stringify(proj));

    }


    const newSelectedProject = () => {
        if(localStorage.length > 0) {
            for(let i = 0; i < localStorage.length; i++) {
                let proj = JSON.parse(localStorage.key(i));
                if(proj.title === dom.projData.projsList.children[0].firstChild.textContent) {
                    selectedProj.chngProj(JSON.parse(localStorage.getItem(proj.title)));
                }
        }
            dom.mainTitle.textContent = selectedProj.proj.title;
            display.showProjTasks()
        }
        else {
            selectedProj.chngProj({});
            dom.mainTitle.textContent = 'Create a Project!';
        }
   }

    return {
        loadStoredItems,
        newSelectedProject, addTaskToProj, addTaskToProj
    }

})()


export {storage, projects, allTasks, selectedProj}
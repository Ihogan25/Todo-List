
import {display} from "./displayTasksAndProjects.js";
import { pageData } from "./displayTasksAndProjects.js";
import _ from "lodash";
import storage from "./storage.js";


const dltObj = (()=> {
    
    //delete project func
    const projObj =()=> {
        //queries for all project buttons on the page
        let projDltBtns = document.querySelectorAll('.delete-project-btn');
        //for each delete project button add an event listener of click
        projDltBtns.forEach(btn => {
            btn.addEventListener('click', (ev)=> {
                    ev.preventDefault()
                    let indx = storage.globalItems.domProjs.indexOf(btn.parentElement);
                    if(storage.globalItems.domProjs.includes(btn.parentElement)) {
                        for(let i = 0; i < storage.globalItems.allTasks.length; i++) {
                            if(_.isEqual(storage.globalItems.allTasks[i],storage.globalItems.projects[indx].tasks[i]) ) {
                                storage.globalItems.allTasks.splice(i,1);
                            }
                        }
                        pageData.projectsList.removeChild(pageData.projectsList.children[indx]);
                        storage.rmProjFromStorg(indx);
                        if(storage.globalItems.projects.length > 0 && storage.globalItems.selectedProj.proj !== storage.globalItems.projects[indx]) {
                           storage.globalItems.selectedProj.chngProj(storage.globalItems.projects[0]);
                           pageData.mainTitle.textContent = selectedProj.proj.title;
                           display.showProjTasks();
                        }
                        else if(storage.globalItems.projects.length > 0 && storage.globalItems.selectedProj.proj === storage.globalItems.projects[indx]){
                            storage.globalItems.selectedProj.chngProj(projects[0]);
                            pageData.mainTitle.textContent = selectedProj.proj.title;
                            display.showProjTasks();
                        }
                        else{
                            storage.globalItems.selectedProj.chngProj({});

                            pageData.mainTitle.textContent = 'Create a Project!';
                            while (pageData.tasksList.hasChildNodes()) {
                            pageData.tasksList.removeChild(pageData.tasksList.firstChild)
                         }
                        }
                            
                    }
        })})
    }
    //delete tasks func
    const taskObj=()=> {
        //queries for all current delete buttons on page for the selected project
        let dtlTskBtns = document.querySelectorAll('.del-task-btn');
        // for each of those buttons add an event listener to each of them so when clicked it deletes its parent element which is a task in the selected 
        dtlTskBtns.forEach(btn => {
            btn.addEventListener('click', ()=> {
                //looping through each project to find the project in which the task belongs to
                for(let i = 0; i < storage.globalItems.selectedProj.proj.tasks.length; i++) {
                    if(storage.globalItems.selectedProj.proj.tasks[i].taskCard === btn.parentElement) {
                        let taskIndx = storage.globalItems.domProjsselectedProj.proj.tasks.indexOf(storage.globalItems.selectedProj.proj.tasks[i])
                        storage.globalItems.selectedProj.proj.rmTask(taskIndx);
                        pageData.tasksList.removeChild(pageData.tasksList.children[taskIndx]);
                        for(let i = 0; i < storage.globalItems.allTasks.length; i++) {
                            if(storage.globalItems.allTasks[i].taskCard === btn.parentElement) {
                                storage.globalItems.allTasks.splice(i, 1);
                            }
                    }
                }
        
                }
            })
        })
    }   
    //returns the delete functions 
    return {
        taskObj,
        projObj,
    }
})();
export default dltObj;
import projects from "../src/index.js";
import createProject from "./createProject.js";
import {display} from "./displayTasksAndProjects.js";
import  {selectedProj} from './displayTasksAndProjects.js';
import { pageData } from "./displayTasksAndProjects.js";
import task from "./addTask.js";
import _ from "lodash";


const dltObj = (()=> {
    
    //delete project func
    const projObj =()=> {
        //queries for all project buttons on the page
        let projDltBtns = document.querySelectorAll('.delete-project-btn');
        //for each delete project button add an event listener of click
        projDltBtns.forEach(btn => {
            btn.addEventListener('click', (ev)=> {
                    ev.preventDefault()
                    let indx = createProject.domProjs.indexOf(btn.parentElement);
                    if(createProject.domProjs.includes(btn.parentElement)) {
                        for(let i = 0; i < task.allTasks.length; i++) {
                            if(_.isEqual(task.allTasks[i],projects[indx].tasks[i]) ) {
                                task.allTasks.splice(i,1);
                            }
                            else {
                                console.log(task.allTasks[i], projects[indx].tasks[i]);
                            }
                        }
                        pageData.projectsList.removeChild(pageData.projectsList.children[indx]);
                        createProject.domProjs.splice(indx,1);
                        projects.splice(indx,1);
                        if(projects.length > 0 && selectedProj.proj !== projects[indx]) {
                           selectedProj.chngProj(projects[0]);
                           pageData.mainTitle.textContent = selectedProj.proj.title;
                           display.showProjTasks();
                        }
                        else if(projects.length > 0 && selectedProj.proj === projects[indx]){
                            selectedProj.chngProj(projects[0]);
                            pageData.mainTitle.textContent = selectedProj.proj.title;
                            display.showProjTasks();
                        }
                        else{
                            selectedProj.chngProj({});

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
                for(let i = 0; i < selectedProj.proj.tasks.length; i++) {
                    if(selectedProj.proj.tasks[i].taskCard === btn.parentElement) {
                        let taskIndx = selectedProj.proj.tasks.indexOf(selectedProj.proj.tasks[i])
                        selectedProj.proj.rmTask(taskIndx);
                        pageData.tasksList.removeChild(pageData.tasksList.children[taskIndx]);
                        for(let i = 0; i < task.allTasks.length; i++) {
                            if(task.allTasks[i].taskCard === btn.parentElement) {
                                task.allTasks.splice(i, 1);
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
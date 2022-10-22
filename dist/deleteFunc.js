import projects from "../src/index.js";
import createProject from "./createProject.js";
import {display} from "./displayTasksAndProjects.js";
import  {selectedProj} from './displayTasksAndProjects.js';
import { pageData } from "./displayTasksAndProjects.js";

const dltObj = (()=> {
    const projObj =(ev)=> {
        ev.preventDefault();
        //queries for all project buttons on the page
        let projDltBtns = document.querySelectorAll('.delete-project-btn');
        //for each delete project button add an event listener of click
        projDltBtns.forEach(btn => {
            btn.addEventListener('click', ()=> {
                if(createProject.domProjs.includes(btn.parentElement)) {
                pageData.projectsList.removeChild(pageData.projectsList.children[createProject.domProjs.indexOf(btn.parentElement)]);
                createProject.domProjs.splice(createProject.domProjs.indexOf(btn.parentElement),1);
                projects.splice(createProject.domProjs.indexOf(btn.parentElement),1); 
                if(projects.length === 0) {
                    // pageData.mainTitle.textContent = 'Create a Project!';
                    selectedProj.chngProj({})
                    pageData.mainTitle.textContent = 'Create a Project!';
                    for(let i = 0; i < pageData.tasksList.childNodes.length; i++) {
                        pageData.tasksList.removeChild(pageData.tasksList.firstChild);
                    }                
                }
                else if(projects.length > 0){
                    selectedProj.chngProj(projects[Math.floor(Math.random() * pageData.projectsList.childNodes.length)])
                    console.log(selectedProj.proj)
                    pageData.mainTitle.textContent = selectedProj.proj.title;
                    display.showProjTasks()
                    
                }
                }
            })
        })
    }

    const taskObj=()=> {
        //queries for all current delete buttons on page for the selected project
        let selectedProjDelBtn = document.querySelectorAll('.del-task-btn');
        //for each of those buttons add an event listener to each of them so when clicked it deletes its parent element which is a task in the selected 
        selectedProjDelBtn.forEach(btn => {
            btn.addEventListener('click', ()=> {
                //looping through each project to find the project in which the task belongs to
                if(selectedProj.proj.tasks.includes(btn.parentElement)) {
                    selectedProj.proj.rmTask(selectedProj.proj.tasks.indexOf(btn.parentElement));
                }
                display.showProjTasks();
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
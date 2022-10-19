import projects from "../src/index.js";
import createProject from "./createProject.js";
import display from "./displayTasksAndProjects.js";

const dltObj = (()=> {


    const projObj =(ev)=> {
        ev.preventDefault();
        //queries for all project buttons on the page
        let projDltBtns = document.querySelectorAll('.delete-project-btn');
        //projects list 
        let projList = document.getElementById('projects-list'); 
        //for each delete project button add an event listener of click
        projDltBtns.forEach(btn => {
            btn.addEventListener('click', ()=> {
                //this loop loops through the the projects array to see i
                for(let i = 0; i < projects.length; i++) {
                    //if the project button clicked parent elemnt exists delete the project and remove it from the domprojs array, projectsc array, 
                    //and the DOM element of projects list
                    if(btn.dataset.index === createProject.domProjs[i].dataset.index) {
                        createProject.domProjs.splice(i,1);
                        projects.splice(i,1);
                        projList.removeChild(projList.children[i]);
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
                let tasksList = document.getElementById('tasks-list');
                //looping through each project to find the project in which the task belongs to
                for(let i = 0; i < tasksList.childNodes.length; i++) {
                    for(let j = 0; j < projects[i].tasks.length; j++) {
                        //if the task is in the current iteration of the projects then delete the task
                        if(projects[i].tasks.includes(projects[i].tasks[j]) === 0) {
                            // projects[i].tasks.splice(j,1);
                            // display.showProjTasks();
                            console.log(projects[i].tasks[j]);
                        }
                        else {
                            console.log(1);
                        }
                    }
                }
            })
        })
    }   
    //returns the delete functions 
    return {
        taskObj,
        projObj
    }
})();

export default dltObj;




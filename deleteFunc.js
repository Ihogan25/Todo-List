import projects from "../src/index.js";
import createProject from "./createProject.js";

const dltObj = (()=> {


    const projObj =(ev)=> {
        ev.preventDefault()
        let projDltBtns = document.querySelectorAll('.delete-project-btn');
        let projList = document.getElementById('projects-list'); 
        projDltBtns.forEach(btn => {
            btn.addEventListener('click', ()=> {
                for(let i = 0; i < projects.length; i++) {
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
        let tasksList = document.getElementById('tasks-list')
        let selectedProjDelBtn = document.querySelectorAll('.del-task-btn')
        selectedProjDelBtn.forEach(btn => {
            btn.addEventListener('click', ()=> {
                for(let i = 0; i < projects.length; i++) {
                    for(let j = 0; j < projects[i].tasks.length; j++) {
                        if(btn.parentElement.textContent === projects[i].tasks[j].textContent) {
                            projects[i].tasks.splice(projects[i].tasks[j], 1);
                            tasksList.removeChild(btn.parentElement)


                        }
                    }
                }
            })
        })

    }   


    return {
        taskObj,
        projObj
    }
})();

export default dltObj;




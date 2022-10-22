import projects from '../src/index.js';
import  {selectedProj} from './displayTasksAndProjects.js';
import { pageData } from './displayTasksAndProjects.js';

const createProject = (()=> {
    const domProjs = [];



    //project class
    class Project {
        constructor(title) {
            this.title = title;
            this.tasks = [];
        }
        //add task to the project method
        addTask(task) {
            this.tasks.push(task);
        } 
        rmTask(task) {
            this.tasks.splice(task,1);
        }
        project() {
            return this;
        }
    }

    //create project function
    const addProject =(ev)=> {
        ev.preventDefault();
        //if the create project form value is not empty then create a project
        if(pageData.projTitle.value != '') {
            const project = new Project(pageData.projTitle.value);
            projects.push(project);
            let projCard = document.createElement('div');
            projCard.innerHTML = `<p>${project.title}</p> <button class="delete-project-btn" id="del-proj-btn" >X</button>`;
            projCard.classList.add('project');
            pageData.projectsList.appendChild(projCard);
            domProjs.push(projCard);
            selectedProj.chngProj(projects[projects.length - 1]); 
            pageData.mainTitle.textContent = selectedProj.proj.title
        }
        //else if the form project value is empty then alert the user to give the project a valid title
        else {
            alert('Please give your project a valid title');
        }
    }
    //returns functions
    return {
        addProject,
        domProjs
    }
})();
export default createProject;

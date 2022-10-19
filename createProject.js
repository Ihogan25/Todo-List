import projects from '../src/index.js';
const createProject = (()=> {
    const domProjs = [];

    const pageData = {
        mainTitle: document.getElementById('main-title'),
        projectsList: document.getElementById('projects-list'),
        tasksList: document.getElementById('tasks-list')
    }

    
    const formValues = {
        projTitle: document.getElementById('project-title')
    }

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
            this.tasks.splice(task);
        }
    }

    //create project function
    const addProject =(ev)=> {
        ev.preventDefault();
        //if the create project form value is not empty then create a project
        if(formValues.projTitle.value != '') {
            const project = new Project(formValues.projTitle.value);
            projects.push(project);
            let projCard = document.createElement('div');
            projCard.innerHTML = `<p>${project.title}</p> <button class="delete-project-btn" id="del-proj-btn" >X</button>`;
            projCard.classList.add('project');
            pageData.projectsList.appendChild(projCard);
            domProjs.push(projCard);
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

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


    class Project {
        constructor(title) {
            this.title = title;
            this.tasks = [];
        }
        addTask(task) {
            this.tasks.push(task);
        } 
    }
    const addProject =(ev)=> {
        ev.preventDefault()
        const project = new Project(formValues.projTitle.value);
        projects.push(project);
        let projCard = document.createElement('div');
        projCard.textContent = project.title;
        projCard.classList.add('project');
        pageData.projectsList.appendChild(projCard);
        domProjs.push(projCard);

    }


    return {
        addProject,
        domProjs
    }
})();

export default createProject;

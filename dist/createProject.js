import projects from '../src/index.js';
const createProject = (()=> {
    
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
    }


    return {
        addProject
    }
})();

export default createProject

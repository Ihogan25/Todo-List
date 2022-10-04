import './style.css';

const newProjectBtn = document.getElementById('new-project');
const projects = [];



class Project {
    constructor(title) {
        this.title = title,
        this.tasks = [];

    }
}









newProjectBtn.addEventListener('click', function(){
    let projectForm = document.getElementById('project-form');
    projectForm.style.display = 'block'
})
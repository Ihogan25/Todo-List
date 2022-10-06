import './style.css';
import './forms.css';
import forms from '../dist/showforms.js';
import createProject from '../dist/createProject.js';
const projects = [];
export default projects;




//display forms and remove forms
const newProjectBtn = document.getElementById('new-project');
const cancelProjectBtn = document.getElementById('cancel-project');
newProjectBtn.addEventListener('click', forms.showProjectForm);
cancelProjectBtn.addEventListener('click', forms.rmProjForm);
const cancelTaskBtn = document.getElementById('cancel-task');
cancelTaskBtn.addEventListener('click', forms.rmTaskForm);

//addprojects
const smbtProjBtn = document.getElementById('submit-project');
smbtProjBtn.addEventListener('click', createProject.addProject);
smbtProjBtn.addEventListener('click', forms.rmProjForm);

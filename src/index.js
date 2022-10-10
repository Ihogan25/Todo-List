import './style.css';
import './forms.css';
import forms from '../dist/showforms.js';
import createProject from '../dist/createProject.js';
import display from '../dist/displayTasksAndProjects.js';
import task from '../dist/addTask.js';
import dltObj from '../dist/deleteFunc.js';

const projects = [];
export default projects;




//display forms and remove forms
const newProjectBtn = document.getElementById('new-project');
const cancelProjectBtn = document.getElementById('cancel-project');
newProjectBtn.addEventListener('click', forms.showProjectForm);
cancelProjectBtn.addEventListener('click', forms.rmProjForm);
const cancelTaskBtn = document.getElementById('cancel-task');
cancelTaskBtn.addEventListener('click', forms.rmTaskForm);
const addTaskBtn = document.getElementById('add-task-btn');
addTaskBtn.addEventListener('click', forms.showTaskForm);

//addprojects
const smbtProjBtn = document.getElementById('submit-project');
smbtProjBtn.addEventListener('click', createProject.addProject);
smbtProjBtn.addEventListener('click', forms.rmProjForm);
smbtProjBtn.addEventListener('click', display.addIndexies)


//submit task
const smbtTaskBtn = document.getElementById('submit-task');
smbtTaskBtn.addEventListener('click', task.addTask);
smbtTaskBtn.addEventListener('click', forms.rmTaskForm);
smbtTaskBtn.addEventListener('click', display.showProjTasks);
smbtTaskBtn.addEventListener('click', dltObj.taskObj)

//show selected project content 
smbtProjBtn.addEventListener('click', display.showProjectContent);

//delete objecttfunc events
//delete project
smbtProjBtn.addEventListener('click', dltObj.projObj);

//delete task from selected project


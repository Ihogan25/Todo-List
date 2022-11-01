import './style.css';
import './forms.css';
import forms from '../dist/showforms.js';
import createProject from '../dist/createProject.js';
import { display } from '../dist/displayTasksAndProjects';
import task from '../dist/addTask.js';
import dltObj from '../dist/deleteFunc.js';
import sortTasksBy from '../dist/sortFuncs.js';
import storage from '../dist/storage';



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


//submit task
const smbtTaskBtn = document.getElementById('submit-task');
smbtTaskBtn.addEventListener('click', task.addTask);
smbtTaskBtn.addEventListener('click', forms.rmTaskForm);
smbtTaskBtn.addEventListener('click', display.showProjTasks);
smbtTaskBtn.addEventListener('click', dltObj.taskObj);



const taskImportance = document.getElementById('priority');
taskImportance.addEventListener('click', sortTasksBy.taskImportance);
const tasksWeekly = document.getElementById('tasks-weekly');
tasksWeekly.addEventListener('click', sortTasksBy.week);
const tasksDaily = document.getElementById('tasks-daily');
tasksDaily.addEventListener('click', sortTasksBy.today);



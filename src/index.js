import './style.css';
import './forms.css';
import { create } from '../dist/create.js'
import { display } from '../dist/display.js';
import  {storage, items} from '../dist/storage.js'

//on page open load items in local storage
storage.loadStoredItems()
//display forms and remove forms
const newProjectBtn = document.getElementById('new-project-btn');
newProjectBtn.addEventListener('click', display.projectForm)

const cancelProjectBtn = document.getElementById('cancel-project');
cancelProjectBtn.addEventListener('click', display.rmProjFormEv);


const addTaskBtn = document.getElementById('add-task-btn');
addTaskBtn.addEventListener('click', display.taskForm)

const cancelTaskBtn = document.getElementById('cancel-task');
cancelTaskBtn.addEventListener('click', display.rmTaskFormEv)


const smbtTaskBtn = document.getElementById('smbt-task-btn')
smbtTaskBtn.addEventListener('click', create.task);

const smbtProjBtn = document.getElementById('smbt-proj-btn');
smbtProjBtn.addEventListener('click', create.project)


const priorityBtn = document.getElementById('priority');
priorityBtn.addEventListener('click', display.tasksByPriority);

const todayBtn = document.getElementById('tasks-daily');
todayBtn.addEventListener('click', display.tasksByToday);

const weeklyBtn = document.getElementById('tasks-weekly');
weeklyBtn.addEventListener('click', display.tasksByDate)

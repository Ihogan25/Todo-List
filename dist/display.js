import da from 'date-fns/locale/da/index';
import { create } from '../dist/create.js';
import dlt from './delete.js';
import { selectedProj } from "./storage";




let dom = {
    mainTitle: document.getElementById('main-title'),
    formsCover: document.getElementById('forms-cover'),
    projData: {
        projsList: document.getElementById('projects-list'),
        projTitle: document.getElementById('project-title'),
        projForm: document.getElementById('project-form')
    },
    taskData: {
        tasksList: document.getElementById('tasks-list'),
        taskTitle: document.getElementById('task-title'),
        taskDate: document.getElementById('task-date'),
        taskPriority: document.getElementById('task-priority'),
        taskForm: document.getElementById('task-form')
    }
    
}


const display = (()=> {

    

    const rmProjForm = () => {
        dom.formsCover.style.display = 'none';
        dom.projData.projForm.style.display = 'none'
        dom.projData.projTitle.value = '';
        
    }

    const rmTaskForm = () => {
        dom.formsCover.style.display = 'none';
        dom.taskData.taskForm.style.display = 'none'
        dom.taskData.taskTitle.value = '';
        dom.taskData.taskDate.value = '';
    }


    const rmProjFormEv = (ev) => {
        ev.preventDefault()
        dom.formsCover.style.display = 'none';
        dom.projData.projForm.style.display = 'none';
        dom.projData.projTitle.value = '';
        
    }

    const rmTaskFormEv = (ev) => {
        ev.preventDefault()
        dom.formsCover.style.display = 'none';
        dom.taskData.taskForm.style.display = 'none';
        dom.taskData.taskTitle.value = '';
        dom.taskData.taskDate.value = '';
    }

    const projectForm = () => {
        dom.formsCover.style.display = 'block';
        dom.projData.projForm.style.display = 'flex';
    }

    const taskForm = ()=> {
        dom.formsCover.style.display = 'block';
        dom.taskData.taskForm.style.display = 'flex';
    }


    const showProjectContent =()=> {
        let projCards = document.querySelectorAll('.project');
        projCards.forEach( card => {
            if(card.value !== true) {
                card.value = true;
                card.addEventListener('click', ev => {
                    if (ev.currentTarget !== ev.target && ev.currentTarget === card.children[1]) {
                        console.log('did not run')  
                        return;
                    }
                    ev.preventDefault()
                    let projDomArr = Array.from(projCards);
                    let index = projDomArr.indexOf(card);
                    let project = JSON.parse(localStorage.getItem(localStorage.key(index)));
                    selectedProj.chngProj(project); 
                    dom.mainTitle.textContent = selectedProj.proj.title;
                    clearTasksList()
                    showProjTasks();
                    dlt.task()
                    console.log(selectedProj.proj)
                        
                })
            }
        })
        
    }


    const clearTasksList =()=> {
           while (dom.taskData.tasksList.firstChild) {
                dom.taskData.tasksList.removeChild(dom.taskData.tasksList.firstChild);
            }
        
    }

    const showProjTasks =()=> {
        for(let i = 0; i < selectedProj.proj.tasks.length; i++) {
            let task = selectedProj.proj.tasks[i]
            let card = create.domTaskCard(task.title, task.priority, task.date);
            dom.taskData.tasksList.innerHTML += card;
        }
    }


    const tasksByPriority =(ev)=> {
        ev.preventDefault()
        dom.mainTitle.textContent = 'Priority';
        if(localStorage.length > 0) {
            const high = [];
            const mid = [];
            const low = [];
            for(let i = 0; i < localStorage.length; i++) {
                const project = JSON.parse(localStorage.getItem(localStorage.key(i)));
                for(let j = 0; j < project.tasks.length; j++) {
                    const task = project.tasks[j]
                     switch(task.priority) {
                        case 'high':
                            high.push(task)
                            break;
                        case 'mid':
                            mid.push(task);
                            break;
                        case 'low':
                            low.push(task);
                            break
                    }
                }
            }
            display.clearTasksList()
            const sortedTasks =  high.concat(mid,low);
            for(let i = 0; i < sortedTasks.length; i++) {
                const task = sortedTasks[i];
                const taskCard = create.domTaskCard(task.title, task.priority, task.date);
                dom.taskData.tasksList.innerHTML += taskCard;
            }
           
        }
    }

    const tasksByDate =(ev)=> {
        ev.preventDefault();
        dom.mainTitle.textContent = 'Tasks By Weekly'
        const createWeekCard =(weekNum)=> {
            const week = document.createElement('div');
            week.classList.add('week');
            week.innerHTML = `<h3>Week ${weekNum}</h3>`
            return week
        };

        const week1  = createWeekCard(1);
        const week2 = createWeekCard(2);
        const week3 = createWeekCard(3);
        const week4 = createWeekCard(4);
        if(localStorage.length > 0) {
        for(let i = 0; i < localStorage.length; i++) {
            const project = JSON.parse(localStorage.getItem(localStorage.key(i)));
            for(let j = 0; j < project.tasks.length; j++) {
                const task = project.tasks[j]
                const day = parseInt(task.date.slice(8,10))
                const month = 11;
                const taskMonth = parseInt(task.date.slice(5,7))
                const taskCard = create.domTaskCard(task.title, task.priority, task.date);
                if(day > 0 && day < 8 && taskMonth === month) {
                    week1.innerHTML += taskCard
                }
                else if(day > 7 && day < 15 && taskMonth === month) {
                    week2.innerHTML += taskCard;
                }   
                else if(day > 14 && day < 22 && taskMonth === month) {
                    week3.innerHTML += taskCard
                } else if( day > 21 && day < 32 && taskMonth === month) {
                    week4.innerHTML+= taskCard
                }
            }
        }
        display.clearTasksList()
        dom.taskData.tasksList.appendChild(week1);
        dom.taskData.tasksList.appendChild(week2);
        dom.taskData.tasksList.appendChild(week3);
        dom.taskData.tasksList.appendChild(week4);
        }

    } 

    const tasksByToday =(ev)=> {
        ev.preventDefault();
        dom.mainTitle.textContent = 'Todays Tasks';
        const todaysDate = ()=> {
            const todaysDate = new Date()
            const secndDate = todaysDate.toDateString();
            const cmprDate = `2022-11-${secndDate.slice(8,10)}`
            return cmprDate;

        };
        if(localStorage.length > 0) {
        display.clearTasksList()
        for(let i = 0; i < localStorage.length; i++) {
            const project = JSON.parse(localStorage.getItem(localStorage.key(i)));
            for(let j = 0; j < project.tasks.length; j++) {
                const task = project.tasks[j]
                if(task.date === todaysDate()) {
                    const taskCard = create.domTaskCard(task.title, task.priority, task.date);
                    dom.taskData.tasksList.innerHTML += taskCard;
                }
            }
        }
    }

    }

    return {
        rmProjForm,
        rmTaskForm,
        projectForm,
        taskForm,
        showProjTasks,
        showProjectContent,
        rmProjFormEv,
        rmTaskFormEv,
        clearTasksList,
        tasksByDate,
        tasksByPriority,
        tasksByToday
    }

})();


export { display , dom}



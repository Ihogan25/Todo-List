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




    return {
        rmProjForm,
        rmTaskForm,
        projectForm,
        taskForm,
        showProjTasks,
        showProjectContent,
        rmProjFormEv,
        rmTaskFormEv,
        clearTasksList
    }

})();


export { display , dom}



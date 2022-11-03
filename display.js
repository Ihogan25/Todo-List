import sl from 'date-fns/esm/locale/sl/index.js';
import _ from 'lodash';
import { create } from '../dist/create.js';




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
        let projCards = document.querySelectorAll('.project') 
        projCards.forEach( card => {
            card.addEventListener('click', ev => {
                ev.preventDefault();
                let projDomArr = Array.from(projCards)
                let index = projDomArr.indexOf(card)
                let projs = JSON.parse(localStorage.getItem('projects'));
                let slctdProj = JSON.parse(localStorage.getItem('selectedProj'));
                slctdProj.proj = projs[index]
                dom.mainTitle.textContent = slctdProj.proj.title;
                localStorage.setItem('selectedProj', JSON.stringify(slctdProj))
                clearTasksList();
                showProjTasks()
            })
        })
    }


    const clearTasksList =()=> {
        if(dom.taskData.tasksList.hasChildNodes()) {
            while(dom.taskData.tasksList.hasChildNodes()) {
                dom.taskData.tasksList.removeChild(dom.taskData.tasksList.firstChild)
                console.log('clear')
            }
        }
    }

    const showProjTasks =()=> {
        let projs = JSON.parse(localStorage.getItem('projects'));
        let slctdProj = JSON.parse(localStorage.getItem('selectedProj'));
        for(let i = 0; i < slctdProj.proj.tasks.length; i++) {
            let task = slctdProj.proj.tasks[i]
            let card = create.domTaskCard(task.title, task.priority, task.date);
            dom.taskData.taskTitle.appendChild(card);
            console.log(card);

        }
        console.log('show tasks')
    }




    return {
        rmProjForm,
        rmTaskForm,
        projectForm,
        taskForm,
        showProjTasks,
        showProjectContent,
        rmProjFormEv,
        rmTaskFormEv
    }

})();


export { display , dom}
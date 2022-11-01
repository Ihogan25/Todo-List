import _ from 'lodash';



let pageData = {
    mainTitle: document.getElementById('main-title'),
    projectsList: document.getElementById('projects-list'),
    tasksList: document.getElementById('tasks-list'),
    projTitle: document.getElementById('project-title'),
    taskTitle: document.getElementById('task-title'),
    taskDate: document.getElementById('task-date'),
    taskImportance: document.getElementById('task-importance')
}

const display = (()=> {

    const formsData = {
        formsCover: document.getElementById('forms-cover'),
        projectForm: document.getElementById('project-form'),
        projectTitle: document.getElementById('project-title'),
        taskForm: document.getElementById('task-form'),
        taskTitle: document.getElementById('task-title'),
        taskDate: document.getElementById('task-date'),
        taskImportance: document.getElementById('task-importance')
    }


    const rmProjForm = (ev) => {
        ev.preventDefault();
        formsData.formsCover.style.display = 'none';
        formsData.projectForm.style.display = 'none'
        formsData.projectTitle.value = '';
        
    }

    const rmTaskForm = (ev) => {
        ev.preventDefault();
        formsData.formsCover.style.display = 'none';
        formsData.taskForm.style.display = 'none'
        formsData.taskTitle.value = ''
        formsData.taskDate.value = ''
    }

    const projectForm = (ev) => {
        ev.preventDefault();
        formsData.formsCover.style.display = 'block';
        formsData.projectForm.style.display = 'flex';
    }

    const taskForm = (ev)=> {
        ev.preventDefault();
        formsData.formsCover.style.display = 'block';
        formsData.taskForm.style.display = 'flex';
    }


    const showProjectContent =()=> {
        items.domProjs.forEach( projCard => {
            projCard.addEventListener('click', (ev)=> {
                ev.preventDefault()
                let projIndx = items.domProjs.indexOf(projCard);
                
                if(_.isEqual(items.selectedProj.proj, items.projects[projIndx]) === false) {
                    items.selectedProj.chngProj(items.projects[projIndx]);
                    pageData.mainTitle.textContent = items.selectedProj.proj.title;
                    showProjTasks();
                }
                else if(_.isEqual(items.selectedProj.proj, items.projects[projIndx])=== true) {
                    items.selectedProj.chngProj(items.projects[projIndx]);
                    pageData.mainTitle.textContent = items.selectedProj.proj.title;
                    showProjTasks();
                }
            })
        })
    }


    //this function is a child function to the showProject content, this shows the slected projects tasks
    const showProjTasks =()=> {
            while (pageData.tasksList.hasChildNodes()) {
                pageData.tasksList.removeChild(pageData.tasksList.firstChild)
                }
            for(let i = 0; i < items.selectedProj.proj.tasks.length; i++) {
                pageData.tasksList.appendChild(items.selectedProj.proj.tasks[i].taskCard)
            }
    }




    return {
        rmProjForm,
        rmTaskForm,
        projectForm,
        taskForm,
        showProjTasks,
        showProjectContent
    }

})();
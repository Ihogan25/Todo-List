
//display forms and remove forms
const forms = (()=> {

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

    const showProjectForm = (ev) => {
        ev.preventDefault();
        formsData.formsCover.style.display = 'block';
        formsData.projectForm.style.display = 'flex';
    }

    const showTaskForm = (ev)=> {
        ev.preventDefault();
        formsData.formsCover.style.display = 'block';
        formsData.taskForm.style.display = 'flex';
    }

    return {
        rmProjForm,
        rmTaskForm,
        showProjectForm,
        showTaskForm
    }

})();


export default forms;
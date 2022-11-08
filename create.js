import { display, dom } from "./display";
import dlt from "./delete";
import { selectedProj, projects } from "./storage";
import { storage } from "./storage";

const create =(()=> {    

    //create elements
    const domProjCard = (title)=> {
        let card = `<div class="project"><p>${title}</p><button class="dlt-proj-btn">X</button></div>`
        return card;
        
    }

    const domTaskCard =(title, priority, date)=> {
        let card = `<div class="task ${priority}"><p>${title}</p><p>${date}</p><button class="del-task-btn">X</button></div>`
        return card;
    }

      
    const  createProject = (title)=> {
        return {
          title: title,
          tasks: []
        }
      }
      
    const  createTask = (title, priority, date)=> {
        return {
                title: title,
                priority: priority,
                date: date
        }
      }
 


    //create task function
    const task = (ev) => {
        ev.preventDefault();
        const task = createTask(dom.taskData.taskTitle.value.trim(), dom.taskData.taskPriority.value, dom.taskData.taskDate.value)
        const taskCard = domTaskCard(task.title, task.priority, task.date);
        const project = JSON.parse(localStorage.getItem(selectedProj.proj.title))
        dom.taskData.tasksList.innerHTML += taskCard;
        storage.addTaskToProj(project, task);
        selectedProj.proj.tasks.push(task);
        display.rmTaskForm();
        dlt.task();
    }

    //create project function
    const project =(ev)=> {
        ev.preventDefault();
        if(dom.projData.projTitle.value !== '') {
            const project = createProject(dom.projData.projTitle.value.trim());
            localStorage.setItem(`${project.title}`, JSON.stringify(project))
            const projCard = domProjCard(project.title);
            selectedProj.proj = project;
            dom.projData.projsList.innerHTML += projCard;
            dom.mainTitle.textContent = project.title;
            selectedProj.chngProj(project);
            display.showProjectContent()
            display.rmProjForm();
            display.clearTasksList()
            dlt.project()
        }
    }


    return {
        task,
        project,
        domProjCard,
        domTaskCard
    }

})();

export {create};
import { display, dom } from "./display";
import { storage, projects, allTasks, selectedProj } from "./storage";
import dlt from "./delete";

const create =(()=> {

    //create elements
    const domProjCard = (title)=> {
        let card = document.createElement('div');
        card.classList = 'project'
        card.innerHTML = 
                        `<p>${title}</p>
                        <button class="dlt-proj-btn">X</button>`;
        return card;
        
    }

    const domTaskCard =(title, priority, date)=> {
        let card = document.createElement('div');
        card.classList = `task ${priority}`;
        card.innerHTML = 
                        `<p>${title}</p>
                        <p>${date}</p>
                        <button class="del-task-btn">X</button>`;
        return card;
    }

      
    //task Class
    class Task {
        constructor(title, priority, date) {
            this.title = title;
            this.priority = priority;
            this.date = date;
        }
    }
    //Project class
    class Project {
        constructor(title) {
            this.title = title;
            this.tasks = [];
        }
        //add task to the project method
        addTask(task) {
            this.tasks.push(task);
        } 
        rmTask(task) {
            this.tasks.splice(task,1);
        }
    }


    //create task function
    const task = (ev) => {
        ev.preventDefault();
        const projArr = JSON.parse(localStorage.getItem('projects'))
        const slctdProj = JSON.parse(localStorage.getItem('selectedProj'))
        if(projArr.length > 0) {
            for(let i = 0; i < projArr.length; i++) {
                if(projArr[i].title === slctdProj.proj.title) {
                    const task = new Task(dom.taskData.taskTitle.value.trim(),dom.taskData.taskPriority.value.trim(), dom.taskData.taskDate.value);
                    projArr[i].tasks.push(task);
                    slctdProj.proj = projArr[i];
                    let card = domTaskCard(task.title, task.priority, task.date)
                    dom.taskData.tasksList.appendChild(card)
                    localStorage.setItem('selectedProj', JSON.stringify(slctdProj))
                    localStorage.setItem('projects', JSON.stringify(projArr))
                    dlt.task();
                }
            }
        }
        else {
            window.alert('Create a project to add a task to!');
        }
        display.rmTaskForm();
        
     
    }

    //create project function
    const project =(ev)=> {
        ev.preventDefault();
        if(dom.projData.projTitle.value !== '') {
            const project = new Project(dom.projData.projTitle.value.trim());
            const projArr = JSON.parse(localStorage.getItem('projects'))
            projArr.push(project);
            localStorage.setItem('projects', JSON.stringify(projArr))
            const slctdProj = JSON.parse(localStorage.getItem('selectedProj'))
            slctdProj.proj = project
            localStorage.setItem('selectedProj', JSON.stringify(slctdProj))
            let projCard = domProjCard(project.title);
            dom.projData.projsList.appendChild(projCard);
            dom.mainTitle.textContent = project.title
            display.rmProjForm();   
            dlt.project()
            display.showProjectContent();
        }
        else {
            window.alert('Please give your project a valid title');
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
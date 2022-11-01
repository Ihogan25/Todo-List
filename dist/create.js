




const create =(()=> {

    //create elements
    const elements = () => {
        const task = document.createElement('div');
        const heading = document.createElement('h2');
        const details = document.createElement('p');
        const due = document.createElement('p');
        const priority = document.createElement('p');
        const button = document.createElement('button');
      
        return {
          tasks,
          task,
          heading,
          details,
          due,
          priority,
          button,
        };
      };
      
    //task Class
    class Task {
        constructor(title, importance, date, taskCard) {
            this.title = title;
            this.importance = importance;
            this.date = date;
            this.taskCard = taskCard;
        }
        chngDate(newDate) {
            this.date = newDate;
        }
        get task() {
            return Task;
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
        project() {
            return this;
        }
    }


    //create task function
    const task = (ev) => {
        ev.preventDefault();
        if(storage.globalItems.projects.length > 0) {
                if(pageData.mainTitle.innerHTML === storage.globalItems.selectedProj.proj.title) {
                    let taskCard = document.createElement('div');
                    taskCard.classList.add('task');
                    taskCard.innerHTML = `<p>${pageData.taskTitle.value}</p> 
                    <p>${pageData.taskImportance.value}</p>
                    <p>${pageData.taskDate.value}</p>
                    <button class="del-task-btn">X</button>`;
                    let task = new Task(pageData.taskTitle.value, pageData.taskImportance.value, pageData.taskDate.value, taskCard);
                    storage.globalItems.selectedProj.proj.addTask(task); 
                    storage.globalItems.allTasks.push(task);
                }

        }
        //else alert thr used to create a rproject in order for them to add a task
        else {
            window.alert('Please create a project to add a task to.')
        }
    }

    //create project function
    const addProject =(ev)=> {
        ev.preventDefault();
        if(pageData.projTitle.value != '') {
            
            const project = new Project(pageData.projTitle.value);
            items.projects.push(project);
            let projCard = document.createElement('div');
            projCard.innerHTML = `<p>${project.title}</p> <button class="delete-project-btn" id="del-proj-btn" >X</button>`;
            projCard.classList.add('project');
            pageData.projectsList.appendChild(projCard);
            console.log(items.domProjs.push(JSON.stringify(projCard)))
            items.selectedProj = items.projects[items.projects.length - 1]; 
            console.log(items.selectedProj.title)
            pageData.mainTitle.textContent = items.selectedProj.title;
            localStorage.setItem('items', JSON.stringify(items));
            console.log(JSON.parse(localStorage.getItem('items')))
            
            //dltObj.projObj();
            // display.showProjectContent();
            // display.showProjTasks();
            // dltObj.taskObj();
            
        }
        //else if the form project value is empty then alert the user to give the project a valid title
        else {
            alert('Please give your project a valid title');
        }
    }


})()
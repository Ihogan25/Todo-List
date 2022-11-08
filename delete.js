import { dom , display} from "./display";
import { selectedProj, storage } from "./storage";

const dlt = (()=> {
    
    //delete project func
    const project =()=> {
        let projDltBtns = document.querySelectorAll('.dlt-proj-btn');
        projDltBtns.forEach(btn => {
            btn.addEventListener('click', ev=> {
                    ev.preventDefault();
                    let btnsArr = Array.from(dom.projData.projsList.children);
                    let index = btnsArr.indexOf(btn.parentNode)
                    let key = JSON.parse(localStorage.getItem(localStorage.key(index)))
                    localStorage.removeItem(key.title);   
                    dom.projData.projsList.removeChild(dom.projData.projsList.children[index]);
                    storage.newSelectedProject();
                    display.clearTasksList();
                    display.showProjTasks();
                    dlt.task()
                    console.log(selectedProj.proj);
            })
        })
    }
    //delete tasks func
    const task=()=> {
        let taskDltBtns = document.querySelectorAll('.del-task-btn');
        taskDltBtns.forEach( btn => {
            btn.addEventListener('click', ()=> {
                let curntTasks = document.querySelectorAll('.task');
                const project = JSON.parse(localStorage.getItem(selectedProj.proj.title));
                const taskArr = Array.from(curntTasks)
                const index = taskArr.indexOf(btn.parentElement)
                project.tasks.splice(index,1);  
                dom.taskData.tasksList.removeChild(dom.taskData.tasksList.children[index]);                
                localStorage.setItem(project.title, JSON.stringify(project));
            })
        })
        
    }   
    //returns the delete functions 
    return {
        task,
        project,
    }
})();
export default dlt;
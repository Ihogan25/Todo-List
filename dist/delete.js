
import _ from "lodash";
import { dom } from "./display";


const dlt = (()=> {
    
    //delete project func
    const project =()=> {
        //queries for all project buttons on the page
        let projDltBtns = document.querySelectorAll('.dlt-proj-btn');
        //for each delete project button add an event listener of click
        projDltBtns.forEach(btn => {
            btn.addEventListener('click', ev=> {
                    ev.preventDefault()
                    let projs = JSON.parse(localStorage.getItem('projects'));
                    let slctdProj = JSON.parse(localStorage.getItem('selectedProj'))
                    for(let i = 0; i < projs.length; i++) {
                        if(projs[i].title === btn.parentElement.firstChild.textContent) {
                            projs.splice(i,1);
                            dom.projData.projsList.removeChild(dom.projData.projsList.children[i]);
                            if(projs.length  === 0) {
                                slctdProj.proj = {};
                                dom.mainTitle.textContent = 'Create a Project!';
                            }
                            else if(projs.length > 0) {
                                slctdProj.proj = projs[0] || projs[1];
                                dom.mainTitle.textContent = slctdProj.proj.title;
                            }
                        }
                    }
                    localStorage.setItem('projects', JSON.stringify(projs))
                    localStorage.setItem('selectedProj', JSON.stringify(slctdProj))
            })
        
        })
    }
    //delete tasks func
    const task=()=> {
        let taskDltBtns = document.querySelectorAll('.del-task-btn');
        taskDltBtns.forEach( btn => {
            btn.addEventListener('click', ()=> {
                let projs = JSON.parse(localStorage.getItem('projects'));
                let slctdProj = JSON.parse(localStorage.getItem('selectedProj'))
                let domTaskArr = Array.from(dom.taskData.tasksList.children);
                let index = domTaskArr.indexOf(btn.parentElement);
                console.log(index)
                if(btn.parentElement.firstChild.textContent === slctdProj.proj.tasks[index].title) {
                    slctdProj.proj.tasks.splice(index,1);
                    dom.taskData.tasksList.removeChild(dom.taskData.tasksList.children[index])
                }
                for(let i = 0; i < projs.length; i++) {
                    if(projs[i].title === slctdProj.proj.title) {
                        projs[i] = slctdProj.proj;
                    }
                }
                localStorage.setItem('projects', JSON.stringify(projs))
                localStorage.setItem('selectedProj', JSON.stringify(slctdProj))
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
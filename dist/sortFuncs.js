import projects from "../src/index.js";
import createProject from "./createProject.js";
import {display} from "./displayTasksAndProjects.js";
import  {selectedProj} from './displayTasksAndProjects.js';
import { pageData } from "./displayTasksAndProjects.js";
import task from "./addTask.js";
import _ from '/home/zillywilly/dev_projs/Todo-List/node_modules/date-fns'

const sortTasksBy =(()=> {

    const taskImportance =()=> {
        let veryImp = [];
        let imprtnt = [];
        let leastImp = [];
        for(let i = 0; i < task.allTasks.length; i++) {
            switch(task.allTasks[i].importance) {
                case 'Very Important':
                    veryImp.push(task.allTasks[i].taskCard); 
                    break;
                case 'Important':
                    imprtnt.push(task.allTasks[i].taskCard);
                    break;
                case 'Least Important':
                    leastImp.push(task.allTasks[i].taskCard)
            }
        }
        let displayArrs = veryImp.concat(imprtnt,leastImp);

        for(let i = 0; i < displayArrs.length; i++) {
            pageData.tasksList.appendChild(displayArrs[i]);
        }
        pageData.mainTitle.textContent = 'Importance';
    }

    const week =()=> {
        let date = new Date()
        date
        console.log(date.getDay(), date.getMonth());
    }

    const today =()=> {
        const date = new Date();
        let tmpDate = date.toDateString()
        let todaysDate = `${date.getFullYear()}-${date.getMonth()+1}-${tmpDate[8] + tmpDate[9]}`;
        pageData.mainTitle.textContent = "Today's Tasks";
        while (pageData.tasksList.hasChildNodes()) {
            pageData.tasksList.removeChild(pageData.tasksList.firstChild)
        };
        for(let i = 0; i < task.allTasks.length; i++) {
            if(task.allTasks[i].date == todaysDate) {
                pageData.tasksList.appendChild(task.allTasks[i].taskCard)
                console.log(task.allTasks[i].date, todaysDate)
            }
        }

    }


    return  {
        taskImportance,
        week,
        today
    }
})();

export default sortTasksBy
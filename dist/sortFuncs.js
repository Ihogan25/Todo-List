import projects from "../src/index.js";
import createProject from "./createProject.js";
import {display} from "./displayTasksAndProjects.js";
import  {selectedProj} from './displayTasksAndProjects.js';
import { pageData } from "./displayTasksAndProjects.js";
import task from "./addTask.js";
import _ from '/home/zillywilly/dev_projs/Todo-List/node_modules/date-fns'
import storage from "./storage.js";

const sortTasksBy =(()=> {

    const taskImportance =()=> {
        let veryImp = [];
        let imprtnt = [];
        let leastImp = [];
        for(let i = 0; i < storage.globalItems.allTasks.length; i++) {
            switch(storage.globalItems.allTasks[i].importance) {
                case 'Very Important':
                    veryImp.push(storage.globalItems.allTasks[i].taskCard); 
                    break;
                case 'Important':
                    imprtnt.push(storage.globalItems.allTasks[i].taskCard);
                    break;
                case 'Least Important':
                    leastImp.push(storage.globalItems.allTasks[i].taskCard)
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
        
        console.log(date.getDay(), date.getMonth());
    }

    const today =()=> {
        const date = new Date();
        let tmpDate = date.toDateString()
        let todaysDate = `${date.getFullYear()}-${date.getMonth()+1}-${tmpDate.slice(8,10)}`;
        pageData.mainTitle.textContent = "Today's Tasks";
        while (pageData.tasksList.hasChildNodes()) {
            pageData.tasksList.removeChild(pageData.tasksList.firstChild)
        };
        for(let i = 0; i < storage.globalItems.allTasks.length; i++) {
            if(storage.globalItems.allTasks[i].date == todaysDate) {r
                pageData.tasksList.appendChild(storage.globalItems.allTasks[i].taskCard)
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
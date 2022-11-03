

import _ from '/home/zillywilly/dev_projs/Todo-List/node_modules/date-fns'

const sortTasksBy =(()=> {

    const priority =()=> {
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
    
        

    }


    return  {
        taskImportance,
        week,
        today
    }
})();

export default sortTasksBy
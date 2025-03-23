let TaskManager =(function (){
    let tasks=[]
    let idCounter=1 
    return {
      addTask(title){
        tasks.push({id:idCounter++,title,completed:false})
      },
      getAllTasks(){
        return JSON.stringify(tasks,null,2)
      },
      markComplete(taskId){
        if(taskId) task.completed=true
      },
      removeTask(taskId){
        tasks= tasks.filter(task => task.id !== taskId)
      },
      getPendingTasks(){
        return tasks.filter(task=>task.completed).map(task.title)
      },
      getCompletedTasks(){
        return tasks.filter(task=> task.completed).map(task=>tassk.title)
      },
      sortTasks() {
        return tasks.map(task=>task.title).sort((a,b)=>a.localCompare(b))
      }
    }
  })
  
  TaskManager.addTask("go to gym")
function createStudentManager(){
    let  student={}
    return {
      addStudent(name){
        if(!student[name]){
          student[name]={subjects:{} }
        }
      },
      addsubject(name,subject,score){
        if(!student[name]){
          console.log("Student Not Found")
        }
        else {
          student[name].subjects[subject]=score
        }
        
      },
      updatescore(name,subject,score){
        if(!student[name]||(subject in student[name].subjects)){
          console.log("Student or subject Not Fount")
        }
        else{
          student[name].subjects[subject]=score
        }
      },
      getStudentDetails(name){
        return student[name]|| "Student Not Found"
      },
      getsortedstudents(sortby){
        return Object.entries(students).map(([name,data])=>{
          let score=Object.value(data.subjects)
          let averageScore=score.length
              return{name,averageScore}
        }).sort((a,b)=>sortby === "name"? a.name.localeCompare(b.name):b.averageScore-a.averageScore)
      },
      generateInsights(){
        let studentaverages=Object.entries(students).map(([name,data])=>{
          let score =Object.values(data.subjects);
          let avg=score.length ? score.reduce((sun,s)=>sum+s,0)/score.length:0
          return {name,averageScore:avg,failed:scores
        })
      }
        })
      }
    }
  }
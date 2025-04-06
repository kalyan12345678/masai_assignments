let employees= [
    { id: 1, name: "Alice", salary: 50000, experience: 3, department: "Engineering" },
    { id: 2, name: "Bob", salary: 75000, experience: 5, department: "Sales" },
    { id: 3, name: "Charlie", salary: 60000, experience: 2, department: "Marketing" },
    { id: 4, name: "Dave", salary: 45000, experience: 1, department: "Engineering" },
    { id: 5, name: "Eve", salary: 85000, experience: 7, department: "Engineering" }
  ]
  
  let Salarythreshold= 55000
  
  function transformEmployeeData(employees,Salarythreshold){
       return employees
         .filter(employee => employee.salary>Salarythreshold)
         .map(employee=>({
           name:employee.name,
           newsalary :employee.salary*1.1,
           experience:employee.experience
         }))
         .sort((a,b)=>b.experience-a.experience)
     
  }
  let t =transformEmployeeData(employees,Salarythreshold)
  console.log(t)
  
  
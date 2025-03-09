let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
  ];
let promis=new Promise((res,rej)=>{
  let ser= true
  setTimeout(()=>{
    if(ser){
      res(people)
    }
    else 
    rej("no")
      },0)
    

})

let count=0
function timer(sec){
   let intid= setInterval(()=>{
        count++
        console.log("this will keep running after every 1sec")//takes 5 secs to print 
        if(count==sec){
            clearInterval(intid)
            console.log("vbfuvb")
        }
      },1000)
    
}
 timer(3)
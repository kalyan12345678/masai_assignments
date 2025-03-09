function createFunctionRegistry(){
    let obj={}
    let arr=[]
    {
      return{
        registerFunction(name, fn){
          obj.push(name)
          obj.push(fn)
        },
        executeFunction(name, args, context = null){
         let bind=obj.executeFunction.bind(this.name,this.args)
         console.log(bind)
        },
        mapFunction(name, dataArray){
          let arr=obj.map((ele,i)=>{
            return ele=obj.dataArray
          })
        },
        filterFunction(name, dataArray){
          let arr=obj.filter((ele,i)=>{
            return ele==obj.dataArray
          })
        },
        reduceFunction(name, dataArray, initialValue){
          let arr=obj.reduce((acc,curr)=>{
            return acc+curr
          },{})
        },
        executeFunctionAsync(name, args, delay){
          let promis= new Promise((res,rej,)=>{
            let ser=true
         setTimeout(()=>{
          if(ser){
            res(name,args*2)
          }
          else
          rej("error")
         },delay)
        })
        promis.then((resp)=>{
          console.log(resp)
        })
        let obj1=JSON.stringify(obj)
        console.log(obj)
        
        
      }
  }
}
}
  
  const registry = createFunctionRegistry();
  registry.registerFunction("double", x => x * 2);
  console.log(registry.executeFunction("double", [5]));
  
  registry.executeFunctionAsync("double", [4], 2000).then(console.log);

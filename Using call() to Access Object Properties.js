function greet(time){

    console.log(this.user,time)
}
let obj1={
    user:"kalyan"
}
let obj2={
    user:"gopika"
}
greet.call(obj2,"good morning")
greet.call(obj1,"good afternoon")
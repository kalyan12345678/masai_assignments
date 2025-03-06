function greet(){

    console.log(this.user,this.age)
}
let obj1={
    user:"kalyan",
    age:25
}
let obj2={
    user:"gopika",
    age: 21
}
greet.call(obj2)
greet.call(obj1)

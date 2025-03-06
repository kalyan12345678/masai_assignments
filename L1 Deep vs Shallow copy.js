function deepClone(obj){
    obj1=JSON.stringify(obj)
    console.log(obj1)
    obj2=JSON.parse(obj1)
    console.log(obj2)
    obj2.hobbies.push("coding");;
    console.log(obj2)
}
let obj={ name: "Alice", hobbies: ["reading", "traveling"] }
deepClone(obj)
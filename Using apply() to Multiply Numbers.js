function mult(){
    console.log(this.a*this.b)
}
let obj={
    a:2,
    b:3
}
 mult.apply(obj)
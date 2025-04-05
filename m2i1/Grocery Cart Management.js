let arr=["Apples", "Bananas", "Bread", "Milk"]
let cart=[]
let removeditems=[]
let obj={}
let totalitems=0
for(i=0;i<arr.length;i++){
    cart.push(arr[i])
    totalitems++
    if(i==arr.length-1){
        cart.pop(arr[i])
        removeditems.push(arr[i])
        totalitems--
    }
    
}
obj.totalitems=totalitems
obj.items=cart
obj.removeditem=removeditems
console.log(obj)
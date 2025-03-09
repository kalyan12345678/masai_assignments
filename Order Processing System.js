

function createOrderManager(){
    let orders={}
    return{
      addOrder(order){
        orders.push(order)
      
       updateOrder(id, newStatus){
         
          orders.status=newStatus
       
          
        
        filterOrders(status){
          orders.filter((ele)=>{
            return ele==status
          })
        
          sortOrders(by){
            let orders=order.sort((a,b)=>{
              return a.localeCompare(b)
            })
          
            getTotalRevenue(){
              let orders = order.reduce((acc,curr)=>{
                acc=acc.price+curr.price
                return acc
              })
            }
          }
        }
       }
      }
    }
   }
    
  
  
  
  const manager = createOrderManager();
  manager.addOrder({ id: 1, customerName: "Alice", items: [{ name: "Laptop", price: 1000, quantity: 1 }], status: "pending", createdAt: new Date("2024-03-01") });
   manager.addOrder({ id: 2, customerName: "Bob", items: [{ name: "Phone", price: 500, quantity: 2 }], status: "shipped", createdAt: new Date("2024-03-02") });
  console.log(manager.filterOrders("pending"));
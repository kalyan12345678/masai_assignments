let restaurants=[
    { name: "Spice Garden", location: "Mumbai", orders: [400, 600, 800, 1200] },
    { name: "Burger Hub", location: "Delhi", orders: [500, 700, 650, 550] },
    { name: "Pasta Palace", location: "Bangalore", orders: [200, 300, 150, 250] }
  ]
let withrevenue=restaurants.map(restaurant =>{
    let total= restaurant.orders.reduce((sum,bill)=>sum+bill,0)
    return{
        name: restaurant.name,
        location: restaurant.location,
        totalrevenue: total
    }
});
let highest= withrevenue.reduce((max,restaurant)=>{
    if(restaurant.totalrevenue>max.totalrevenue){
        return restaurant
    }
    else{
        return max
    }
});
let lowrevenue= withrevenue.filter(restaurant=> restaurant.totalrevenue<highest.totalrevenue).map(restaurant=>restaurant.name)
console.log("Total revenue:")
withrevenue.forEach(restaurant=>{
    console.log(`${restaurant.name}: ₹${restaurant.totalrevenue}`)
})
console.log(`\nHighest revenue restaurant:"${highest.name}"(${highest.totalrevenue})`)
console.log("\nHighest revenue restaurant:",lowrevenue)

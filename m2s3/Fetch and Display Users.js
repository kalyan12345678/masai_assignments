let myfetch=fetch("https://jsonplaceholder.typicode.com/users")

myfetch.then(res=> {
  if (!res.ok){
    return Promise.reject('Failed to fetch user data')
  }
  return res.json()
})  
.then(users=> {
  users.forEach(user => {
    console.log(user.name); 
  });
  
})
.catch(error => {
  
  console.error('Error:', error);
});
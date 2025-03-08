// Function to simulate data fetching
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let isSuccess = Math.random() > 0.5 
        if (isSuccess) {
          resolve("Data fetched successfully!");
        } else {
          reject("Failed to fetch data");
        }
      }, 1000)
    })
  }
fetchData().then((resp)=>{
    console.log("Fetched data successfully!")
}).catch((resp)=>{
    console.log("Error fetching data:", resp)
})
  fetchData()
  
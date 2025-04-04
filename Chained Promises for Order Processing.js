
function placeOrder() { 
    return new Promise((resolve, reject) => {
      let orderId = Math.floor(Math.random() * 90) + 10
      console.log(`Order ID: ${orderId}`)
      resolve(orderId)
    })
  }
  function processOrder(orderId) {
    return new Promise((resolve, reject) => {
      let processingCode = Math.floor(Math.random() * 90) + 10
      console.log(`Processing Code: ${processingCode}`)
      resolve(processingCode)
    })
  }
  
  
  function confirmOrder(processingCode) {
    return new Promise((resolve, reject) => {
      let confirmationNumber = Math.floor(Math.random() * 90) + 10
      console.log(`Confirmation Number: ${confirmationNumber}`)
      resolve(confirmationNumber)
    })
  }
  
  function calculateFinalResult(confirmationNumber) {
    return new Promise((resolve, reject) => {
      let extraNumber = Math.floor(Math.random() * 90) + 10
      console.log(`Extra Number: ${extraNumber}`)
      let finalResult = confirmationNumber + extraNumber
      resolve(finalResult)
    })
  }

  placeOrder()
    .then((orderId) => processOrder(orderId))
    .then((processingCode) => confirmOrder(processingCode))
    .then((confirmationNumber) => calculateFinalResult(confirmationNumber))
    .then((finalResult) => {
      console.log(`Final Result: ${finalResult}`)
    })
    .catch((error) => {
      console.log(`Error: ${error}`)
    });
  

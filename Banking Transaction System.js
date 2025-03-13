function createBankAccount(initialBalance) {
    let balance = initialBalance
  
    return {
      deposit: function (amount) {
        balance += amount
        return balance
      },
      withdraw: function(amount){
        if(amount<=balance){
          balance-=amount
          return balance
        }
        else{
          return "Insufficient funds"
        }
      }
      ,
      getBalance: function () {
        return balance
      }
    };
  }
  
   const myAccount = createBankAccount(1000) 
  console.log(myAccount.deposit(500))  
  console.log(myAccount.withdraw(200))  
  console.log(myAccount.withdraw(1500)) 
  console.log(myAccount.getBalance()) 
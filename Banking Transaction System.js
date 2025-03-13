function createBankAccount(initialBalance) {
    let balance = initialBalance;
  
    return {
      deposit: function (amount) {
        balance += amount;
        return balance;
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
        return balance;
      }
    };
  }
  
   const myAccount = createBankAccount(1000);  
  console.log(myAccount.deposit(500));   // "Deposited ₹500. New balance: ₹1500"  
  console.log(myAccount.withdraw(200));  // "Withdrew ₹200. New balance: ₹1300"  
  console.log(myAccount.withdraw(1500)); // "Insufficient funds"  
  console.log(myAccount.getBalance());  // Output: 150
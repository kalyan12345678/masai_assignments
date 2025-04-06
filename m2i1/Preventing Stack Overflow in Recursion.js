function factorial(n) {
    if (typeof n !== "number" || isNaN(n)) {
      console.log("Invalid input: not a number.");
      return;
    }
  
    if (n < 0) {
      console.log("Invalid input: negative number.");
      return;
    }
  
    if (!Number.isInteger(n)) {
      console.log("Invalid input: factorial is only defined for integers.");
      return;
    }
  
    if (n === 0) {
      return 1;
    }
  
    return n * factorial(n - 1);
  }
  console.log(factorial(2))
  console.log(factorial(5))
  console.log(factorial(6))
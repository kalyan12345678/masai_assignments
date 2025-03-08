let dog = {
    name: "Buddy",
    sound: function() {
      console.log(this.name + " says woof!");
    }
  };
  
  let soundFunc = dog.sound.bind({ name: "Max" });
  soundFunc();
  
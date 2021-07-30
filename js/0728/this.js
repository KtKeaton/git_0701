const hero = {
    name: "悟空", 
    sayMyName: function() {
      console.log("A", this);   // A
  
      setTimeout(function() {
        console.log("B", this);  // B
      }, 2000)
    }
  }
  
  hero.sayMyName()
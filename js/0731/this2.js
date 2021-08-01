function hello() {
    console.log(this);  // A 印出global
  
    function world() {
      console.log(this);  // B 印出global
  
      const game = {
        name: "Zelda", 
        greeting: function() {
          console.log(this);  // 印出game物件
        }
      }
  
      game.greeting()
    }
  
    world()
  }
  
  hello()
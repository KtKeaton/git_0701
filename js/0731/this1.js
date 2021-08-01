const hero ={
    name: "Keaton",
    attack: function() {
        console.log("hi" + hero.name); //找hero物件
        console.log("hi" + this.name); //找這個物件
    } 
}

hero.attack()
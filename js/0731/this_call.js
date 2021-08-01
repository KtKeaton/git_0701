const hero = {
    HP: 100,
    power: 85, 
    attack: function() {
        console.log("ATTACK!");
    }
}


const mage = {
    HP: 70,
    power: 35, 
    attack: function() {
        console.log("SING A SONG~~~");
    }
    heal: function() {
        this.HP += 30
    }
    // heal: function(someone) {
    //     someone.HP += 30
    // }
}

console.log(hero.HP); //印出hero的HP為100

mage.heal(); //因為this指到mage，所以預測只幫自己補HP
// mage.heal(hero); //若改為參數someonr，就不用call改this

mage.heal.call(hero); //把hero傳進來
console.log(hero.HP); //把hero的HP+30


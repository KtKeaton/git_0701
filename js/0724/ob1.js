function heroCreator(name, action) {
    const hero = {}
    hero.name = name
    hero.action = action
    hero.attack = function() {
        console.log (hero.name + "發出" + hero.action)
    }

    return hero
}

const h1 = heroCreator("悟空", "龜派氣功")
console.log(h1.attack())
console.log(h1.name)

// h1.attack() //印出 悟空發出龜派氣功波
// h1.greeting() //


// function heroCreator(name, action) {
    // const hero = {}
    // hero.name = name
    // hero.attack = attack
    // hero.attack = 
    // hero.attack = function() {
    //     console.log (hero.name + "發出" + hero.attack)
    // }

    // return hero
// }

// const h1 = heroCreator("悟空", "龜派氣功")

// h1.attack()
// h1.greeting()
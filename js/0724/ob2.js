// construct 建構
// constructor 建構的傢伙 建構子
class Hero {
    constructor(name, action){
      this.name = name
      this.action = action
    }
    attack(){
      console.log(`${this.name}使用絕招${this.action}`)
    }
  }
  
  let h = new Hero("悟空", "龜派氣功")
h.attack()  // 印出 悟空使用絕招龜派氣功
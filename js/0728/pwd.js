const isValidPassword = (password) => {
    let Num = /[0-9]/
    let Eng = /[A-Z]/
    let Word = /password/

    if (password.length < 8) {
      return "false"
      } else {
          let ChkNum = Num.test(password)
          if (ChkNum == true){
            let ChkEng = Eng.test(password)
            if (ChkEng == true){
              let ChkWord = Word.test(password)
              if (ChkWord == true){
                return "false"
              } else {
                return "true"
              }
            } else {
              return "false"
            }
          } else {
            return "false"
          }
     
  }

}
    
console.log(isValidPassword("12345"));           // false
console.log(isValidPassword("123passwordxyz"));  // false
console.log(isValidPassword("helloworld"));      // false
console.log(isValidPassword("Helloworld"));      // false
console.log(isValidPassword("helloWorld2"));     // true


  // 規則：
  // 1. 密碼至少要 8 個字
  // 2. 密碼裡至少要有 1 個數字以及 1 個大寫英文字母
  // 3. 密碼裡不能有 "password" 字樣
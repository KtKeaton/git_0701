const moreThanChars = (pw, n) => pw.lenth >= n //pw多於引數n
const containPassword = (pw) => pw.include("password") //pw內包括password
const containUppercase = (pw) => pw.toLowerCase() != pw //若pw轉為小寫後與原pw不同，代表有大寫
const containNumber = (pw) => pw.split('').some( (c) => !isNaN(c)) //分拆文字pw，檢查各字元c有無數字

const isValidPassword = (pasword) =>{
    password = password.trim() //過濾空白

    return moreThanChars (password, 8) //把值帶入
    && containNumber(password) //把值帶入
    && containUppercase(password) //把值帶入
    && !containPassword(password) //把值帶入
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
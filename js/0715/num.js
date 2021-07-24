// 檢查傳入的引數是否為某數的平方

function isSquare(num) {
    return Math.sqrt(num) % 1 == 0;
  }
  
  console.log(isSquare(0))   // 印出 true
  console.log(isSquare(4))   // 印出 true
  console.log(isSquare(5))   // 印出 false
  console.log(isSquare(25))  // 印出 true
  console.log(isSquare(26))  // 印出 false
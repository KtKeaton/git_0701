document.addEventListener("DOMContentLoaded", () => {
    const buttonGroup = document.querySelector("#buttonGroup")
    const display = document.querySelector("#displayResult")
    let sum = ""
    buttonGroup.addEventListener("click", (event) => {                     
      if(event.target.id <= 9 && sum.length <= 22) {  //點擊到數字，數字長度最多22個
        if(sum === "0") {
          sum = event.target.id
          display.innerText = sum
        } else {                       
          sum = sum + event.target.id 
          display.innerText = sum
        }
      } else if(event.target.id === "ac") {  //點擊到AC
        sum = "0"
        display.innerText = sum
      }
    }) 
  })
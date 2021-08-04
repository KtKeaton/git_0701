document.addEventListener("DOMContentLoaded", () => {
  let group = document.querySelector("#buttonGroup")
  let result = document.querySelector("#displayResult")
  let total = " "
  let ochinchin = document.querySelector("#ac")
  
  group.addEventListener("click", (doing) => {
    if(total == "0"){
      total = " ";
      total = total + doing.target.id
      result.textContent = total
    }else{
      total = total + doing.target.id
      result.textContent = total
    }
    
  })
  ochinchin.addEventListener("click", (doing) => {
    total = "0";
    result.textContent = total
  })
})

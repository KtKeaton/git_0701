document.addEventListener("DOMContentLoaded", () => {
  let group = document.querySelector("#buttonGroup")
  let result = document.querySelector("#displayResult")
  let total = " "
  //父層綁監聽器
  group.addEventListener("click", (doing) => {
    //子層放target
    if (doing.target.id) {
      if (total = "0") {
        //若doing某id時數字為0，總數為doing輸入值
        total = doing.target.id
        result.textContent = total
      } else {
        //若doing某id時數字不為0，總數為已有數字+doing輸入值
        total = total + doing.target.id
        result.textContent = total
      }
    } else if (doing.target.id = "ac") {
      total = "0"
      result.textContent = total
    }
  })
})

document.addEventListener("DOMContentLoaded", () => {
  let group = document.querySelector('#buttonGroup')
  let result = document.querySelector("#displayResult")
  let total = " "
  let ac2zero = document.querySelector("#ac")
  group.addEventListener("click", (doing) => {
    if (total == "0") {
      total = "";
      total = total + doing.target.id;
      result.textContent = total;
      if (doing.target.id == "ac") {
        total = "";
        result.textContent = "0";
      }
    }
    else {
      if (doing.target.id == "buttonGroup") {
      }
      else if (doing.target.id == "ac") {
        total = "";
        result.textContent = "0";
      }
      else {
        if (total.length <= 22)
          total = total + doing.target.id;
        result.textContent = total;
      }
    }
  })

})

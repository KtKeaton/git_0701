document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#btn")
    btn.addEventListener("click", () => {
        // 換字！
      const h = document.querySelector("#hi")
        h.innerHTML = "456"
    })
})


// document.addEventListener("DOMContentLoaded", () => {
//     const h = document.querySelector("#hi")
  
//       // // 3 秒後換字！
//       setTimeout(() => {
//           h.innerHTML = "456"
//       } , 3000)
//   })

// console.log(h)})    

// document.addEventListener("DOMContentLoaded", () => {
//     const h = document.querySelector("#hi")
//     function changenum(){
//         h.innerHTML = "456"
//     }
//     setTimeout(changenum, 3000);
    
// })
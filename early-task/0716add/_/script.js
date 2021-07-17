var num = 0;

function timing(){
    num = num + 1;
    return num;
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#start-btn")
        btn.addEventListener("click", () => {        
        var tm = document.querySelector("#timer")
        setInterval(() => {tm.innerHTML = timing()} , 1000)
    })
})
//() => {tm.innerHTML = timing()+num2;}

// document.addEventListener("DOMContentLoaded", () => {
//     const h = document.querySelector("#hi")
  
//       // // 3 秒後換字！
//       setTimeout(() => {h.innerHTML = "456"} , 3000)
//   })

// console.log(h)})    

// document.addEventListener("DOMContentLoaded", () => {
//     const h = document.querySelector("#hi")
//     function changenum(){
//         h.innerHTML = "456"
//     }
//     setTimeout(changenum, 3000);
    
// })
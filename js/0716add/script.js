// let n = 0;
// function timing(){
//     n = n + 1;
//     return n;
// }


document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#start-btn")
        btn.addEventListener("click", () => {
            const tm = document.querySelector("#timer")
            setInterval(() => {tm.innerHTML = timing()}, 1000)
    })

    let n = 0;
    function timing(){
    n = n + 1;
    return n;
}
})
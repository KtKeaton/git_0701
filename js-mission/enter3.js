document.addEventListener("DOMContentLoaded", () => {
    const result = document.querySelector("#displayResult")
    const ac = document.querySelector("#ac")
    const zero = document.querySelector("#\\30 ")
    const one = document.querySelector("#\\31 ")
    const two = document.querySelector("#\\32 ")
    const three = document.querySelector("#\\33 ")
    const four = document.querySelector("#\\34 ")
    const five = document.querySelector("#\\35 ")
    const six = document.querySelector("#\\36 ")
    const seven = document.querySelector("#\\37 ")
    const eight = document.querySelector("#\\38 ")
    const nine = document.querySelector("#\\39 ")
    ac.addEventListener("click", () => {
        result.innerText = "0"
    })
    zero.addEventListener("click", () => {
        if(result.innerText == 0) {
            result.innerText = 0
        } else {
            result.innerText = result.innerText + "0"
        }
    })
    one.addEventListener("click", () => {
        if(result.innerText == 0) {
            result.innerText = 1
        } else {
            result.innerText = result.innerText + "1"
        }
    })
    two.addEventListener("click", () => {
        if(result.innerText == 0) {
            result.innerText = 2
        } else {
            result.innerText = result.innerText + "2"
        }
    })
    three.addEventListener("click", () => {
        if(result.innerText == 0) {
            result.innerText = 3
        } else {
            result.innerText = result.innerText + "3"
        }
    })
    four.addEventListener("click", () => {
        if(result.innerText == 0) {
            result.innerText = 4
        } else {
            result.innerText = result.innerText + "4"
        }
    })
    five.addEventListener("click", () => {
        if(result.innerText == 0) {
            result.innerText = 5
        } else {
            result.innerText = result.innerText + "5"
        }
    })
    six.addEventListener("click", () => {
        if(result.innerText == 0) {
            result.innerText = 6
        } else {
            result.innerText = result.innerText + "6"
        }
    })
    seven.addEventListener("click", () => {
        if(result.innerText == 0) {
            result.innerText = 7
        } else {
            result.innerText = result.innerText + "7"
        }
    })
    eight.addEventListener("click", () => {
        if(result.innerText == 0) {
            result.innerText = 8
        } else {
            result.innerText = result.innerText + "8"
        }
    })
    nine.addEventListener("click", () => {
        if(result.innerText == 0) {
            result.innerText = 9
        } else {
            result.innerText = result.innerText + "9"
        }
    })
})
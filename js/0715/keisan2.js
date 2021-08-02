let bmiCalculator = (height, weight) => {
    let niceBody = weight / ((height/100)**2)
    return Math.floor(niceBody*10)/10
}

console.log (bmiCalculator(170, 65))
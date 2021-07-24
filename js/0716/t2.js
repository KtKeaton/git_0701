
function printStars2(n){
    var hoshi = "";
    var sora = "";

    for(let i = 1; i <= n; i++){
        sora = "";
        console.log("19 : "+ sora);
        for(let j = 1; j <= n - i; j++){
            sora = sora + " ";
            console.log("21 : "+ j + " : "+ sora);
    }
}

printStars2(5);
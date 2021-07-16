// function printStars(n) {
//     var hoshi = "";
//     for (var i = 1; i<=n; i++){
//         hoshi = hoshi + "*"
//         console.log(hoshi);
//     }
    
//   }
  
//   printStars(16)
  


function printStars2(n){
    var hoshi = "";
    var sora = "";

    for(let i = 1; i <= n; i++){
        sora = "";
        for(let j = 1; j <= n - i; j++){
            sora = sora + " ";
        }
        hoshi = hoshi + "*";
        console.log(sora + hoshi);
    }
}

printStars2(5);

// function printStars2(n){
//     var hoshi = "";
//     var sora = "";

//     for(let i = 1; i <= n; i++){
        
//         sora = "";
//         hoshi = "";

//         for(let j = 1; j <= n - i; j++){
//             sora = sora + " ";
//         }
        
//         for(let k = 1; k <= i; k++){
//             hoshi = hoshi + "*";
//         }
        
//         console.log(sora + stars);

//     }
// }

// printStars2(5);
function printStars2(n) {
    var hoshi = "";
    var sora = "";
        for (var i = 1; i <= n; i++){
            sora = "";
                for (var j = 1; j <= n-i; j++){
                    sora = sora + " ";
                }
            hoshi = hoshi + "*";            
            console.log(sora+hoshi);
        }
    }

printStars2(1)


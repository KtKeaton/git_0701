//會印出5個5，因為var宣告會把前4次結果覆蓋成最後一次 //相當於此處也有 var i = 0 => 5

for (var i = 0; i < 5; i++){
    setTimeout( () => {
        console.log(i);
    }, 100)
}


//會印出0~4
for (let i = 0; i < 5; i++){
    //相當於這裡有 let i = 0
    //相當於這裡有 let i = 1
    //相當於這裡有 let i = 2
    //相當於這裡有 let i = 3
    //相當於這裡有 let i = 4
    setTimeout( () => {
        console.log(i);
    }, 100)
}

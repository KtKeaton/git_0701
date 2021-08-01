//會印出5個5
for (var i = 0; i < 5; i++){
    setTimeout( () => {
        console.log(i);
    }, 100)
}


//會印出0~4
for (let i = 0; i < 5; i++){
    setTimeout( () => {
        console.log(i);
    }, 100)
}

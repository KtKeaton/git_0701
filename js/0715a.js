function displayName(firstName, lastName){
    if (firstName === undefined && lastName === undefined) {
        console.log ("請輸入名稱")
    } else{
        if (lastName === undefined) {
            console.log ("Hello Kitty");
        } else {
            console.log("Hello" + lastName);
        }
    }
}

displayName("Hello", "Kitty")
displayName("Hello", "天線寶寶")
// displayName("Hello")
// displayName()

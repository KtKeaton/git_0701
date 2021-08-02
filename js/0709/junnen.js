var year=2000

if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    console.log("閏年")
}
 else {
     console.log("平年")
 }   
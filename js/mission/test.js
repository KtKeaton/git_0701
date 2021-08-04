const lists = [4, 2, 1, 4, 6, 8, 7]
let result = lists.map(x => {
  if (x > 3) {
    return x * 3
  } else {
    return x
  }
})
console.log(result)
document.addEventListener('DOMContentLoaded', () => {
	const btngroup = document.querySelector('#buttonGroup').querySelectorAll("button")
  //  多重選取組成array
	const result = document.querySelector("#displayResult")
	let concatNum = ""
	btngroup.forEach((ele,index) => {
  //  利用選取index來控制單一個按鍵要執行什麼，省掉多餘code。
	btngroup[index].addEventListener('click',() => {
		if (btngroup[index].id === "ac") {
			result.innerHTML = 0
			concatNum = ""
    //  歸０
		} else {
			if (concatNum.length >= 23 && btngroup[index].id !== '1') {
				return
      //  超過23字，不能輸入1以外的數字
			} else if (concatNum.length >= 26 && btngroup[index].id === '1') {
				return
      //  超過26字，不能輸入1的數字
			} else {
				concatNum = concatNum.concat(btngroup[index].innerHTML)
				result.innerHTML = concatNum
      //  用concat來連結string
			}
		}
	})
	})
})
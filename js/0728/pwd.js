const isValidPassword = (password) => {
    var regEng = /^.*[A-Z]$/;
    var regNum = /^.*[0-9]$/;
    var regPass = /password/;

    if (password.length < 8) {
        return "false!!!!!";
    } else {        
        var checkEng = regEng.test(password);
        if(checkEng == true){
            var checkNum = regNum.test(password);
            if (checkNum == true) {
                var checkPass = regPass(password);
                if (checkPass !== regPass){
                    return "True";} 
                else {
                    return "no pass";}            
            else {
                return "NO Number!!";} 
        else {
            return "No English!!";}
    }
}

    
    console.log(isValidPassword("password"));      // false    
    // console.log(isValidPassword("123passwordxyz"));  // false
    // console.log(isValidPassword("helloworld"));      // false
    // console.log(isValidPassword("Helloworld"));      // false
    // console.log(isValidPassword("helloWorld2"));     // true
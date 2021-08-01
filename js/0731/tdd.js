const moreThanChars = (chars, n) => /{.8}/.test(chars)

let result = moreThanChars("abcd", 8)
let expect = false

if (result !== expect){
    throw new Error('${result}與預期的{$expect}不符')
}

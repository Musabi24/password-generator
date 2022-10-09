let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
let passwordlength = 15
let password = " "
let password1= " "
let inputtt = document.getElementById("inputtt")
let inputt = document.getElementById("inputt")
let passwordEl =document.getElementById("password-el")
 

function genPassword(){
    inputtt.innerText = ""
    inputt.innerText = ""
    for (i = 0; i < passwordlength; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        let randomNumber1 = Math.floor(Math.random() * characters.length)
        let no = 1
        if (randomNumber === (characters.length - 1)){
            no = -1
        }
        let no1 = 1
        if (randomNumber1 ===characters.length) {                     
            no1 = -1
        }
        password = characters[randomNumber1, randomNumber1 + no1]
        console.log(characters[randomNumber, randomNumber + no])
        password1 = characters[randomNumber, randomNumber + no]
        inputt.innerText += password
        inputtt.innerText += password1

    }
}
    function copyPassword(){
        document.getElementById("password-el").value =""
        document.getElementById("password-el").value = inputt.innerText
        document.getElementById("password-el").value = inputtt.innerText
    }
function copyPasswords() {
    document.getElementById("password-el").value = ""
    document.getElementById("password-el").value = inputt.innerText
    
}

    

  
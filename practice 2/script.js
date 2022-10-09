let  person = {
    name : "walanda",
    age : 27,
    country : "kenya"
}
 function logData(){
    console.log(person.name + " is " + person.age + "years old who lives in "  + person.country)
 }
 logData()



  let age = 31
  if (age < 6){
    console.log("free")
  }else if (age < 18){
    console.log("child discount")
  }else if (age < 27) {
     console.log("student discount")
  }else if (age < 67){
    console.log("full price")
  } else {
    console.log("senior discount")
  }


  let largeCountries = ["Tuvalu" ,"India" ,"USA", "Indonesia" , "MONACO"]
  for (i = 0; i < largeCountries.length; i++){
    console.log( " - " + largeCountries [i])
  }
  largeCountries.pop()
  console.log(largeCountries)




  let largeCountry = ["Tuvalu", "India", "USA", "Indonesia", "MONACO"]
largeCountry.pop()
largeCountry.push("pakistan")
largeCountry.shift()
largeCountry.unshift("China")
console.log(largeCountry)

let dayOfMonth = 17
let weekday = "friday"

if (dayOfMonth ===13 || weekday === "friday"){
    console.log("freaky friday")
}
let hands = [ "rock", "paper", "scissor"]
 function getHand(){
   let randomIndex =  Math.floor(Math.random() * 3)
   return hands[randomIndex]
 }
 console.log(getHand())

 
 let fighters = [ "A", "B" ,"C", "D", "E", "F", "G", "H", "I" ,"J" ]
 let stageEl = document.getElementById("stage-el")
 let fightButton = document.getElementById("fightButton")
 let static = document.getElementById("static")

function fight() {
     let randomFighter1 = Math.floor(Math.random() * fighters.length)
      let randomFighter2 = Math.floor(Math.random() * fighters.length)
  console.log(fighters[randomFighter1])
  stageEl.innerText = fighters[randomFighter1]  

  static.innerText += fighters[randomFighter2]
} 
 

let fruit =[ "apple", "orange", "apple", "apple", "orange"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
 

function sortFruit(){
for (i = 0; i < fruit.length; i++){
  if (fruit [i] === "orange"){
    appleShelf.innerText += "orange"
  }else if (fruit [i] ==="apple"){
     orangeShelf.innerText  += "orange"
     }
 
   } 

}

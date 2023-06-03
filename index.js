let newCount = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(newCount)


let count = 0




function increment(){
  count += 1
  newCount.textContent = count


}


function save(){
  let newSave = count + " - "
  saveEl.textContent += newSave 
  newCount.textContent = 0
  count = 0

}
 









//----------------------------------
// let myAge = 24 
// let humanDogRatio = 5

// let myDogAge  = myAge * humanDogRatio


// console.log(myDogAge)

//----------------------------------


// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints / 4
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

//----------------------------------

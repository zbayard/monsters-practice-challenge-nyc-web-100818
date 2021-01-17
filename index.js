// GRAB DOM ELEMENTS
const monsterDiv = document.querySelector("#create-monster")
const monsterContainer = document.querySelector("#monster-container")

// EVENT LISTENERS

document.addEventListener("submit", e => {
    e.preventDefault()
    let monsterName = e.target.name.value
    let monsterAge = e.target.age.value
    let monsterDescription = e.target.description.value

    fetch(`http://localhost:3000/monsters`, {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
      name: monsterName,
      age: monsterAge,
      description: monsterDescription
      
  }),
})
.then(response => response.json())
.then(monster => {
    createMonsterCard(monster)
    e.target.reset()
  console.log('Success:', monster);
})
.catch((error) => {
  console.error('Error:', error);
});
    
})

// RENDER FUNCTIONS/DOM MANIPULATION
function createMonsterForm(){
    const monsterForm = document.createElement("form")
    monsterForm.innerHTML = 
                            `<input id = "name" placeholder = "name...">
                            <input id = "age" placeholder = "age...">
                            <input id = "description" placeholder = "description...">
                            <button> Create Monster! </button>`
    monsterDiv.append(monsterForm)
    
}

function createMonsterCard(monster){
   

   
    const monsterCardDiv = document.createElement("div")
    monsterCardDiv.innerHTML += 
            `<h2>${monster.name}</h2>
            <h4>${monster.age}</h4>
            <p>${monster.description}</p>`

    monsterContainer.append(monsterCardDiv)
    }



function renderPage(){

    createMonsterForm()
    // createMonsterCards(monster)





     

}
// getMonsterData()
renderPage()

// when page loads show the first 50 monsters w name age & description


// FETCH FUNCTIONS

fetch (`http://localhost:3000/monsters`)
.then (response => response.json())
.then (monstersArr => monstersArr.forEach((monster) => {
    createMonsterCard(monster)
}))

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 
  
  if (randomNumber === 1) {
    computerChoice = 'kamien'
  }
  if (randomNumber === 2) {
    computerChoice = 'nozyce'   
  }
  if (randomNumber === 3) {
    computerChoice = 'papier'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'Remis!'
  }
  if (computerChoice === 'kamien' && userChoice === "papier") {
    result = 'Wygrałeś!'
  }
  if (computerChoice === 'kamien' && userChoice === "nozyce") {
    result = 'Przegrałeś!'
  }
  if (computerChoice === 'papier' && userChoice === "nozyce") {
    result = 'Wygrałeś!'
  }
  if (computerChoice === 'papier' && userChoice === "kamien") {
    result = 'Przegrałeś!'
  }
  if (computerChoice === 'nozyce' && userChoice === "kamien") {
    result = 'Wygrałeś!'
  }
  if (computerChoice === 'nozyce' && userChoice === "papier") {
    result = 'Przegrałeś!'
  }
  resultDisplay.innerHTML = result
}
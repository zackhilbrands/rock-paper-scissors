let humanScore = 0
let computerScore = 0

const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")
const resultDiv = document.querySelector('.result')
const humanScoreSpan = document.querySelector('.human-score')
const computerScoreSpan = document.querySelector('.computer-score')

const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random () * 3)
    return options[randomNum]
}

//console.log(getComputerChoice())

//function getHumanChoice() {
    //let humanChoice = prompt("Rock, Paper, or Scissors?");
    //humanChoice = humanChoice.toLowerCase();
    //return humanChoice;
//}
//function getHumanChoice is not necessary, the prompt can be put in the for loop, like this below
// const humanSelection = prompt('Rock, Paper, or Scissors').toLowerCase()

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'rock') {
        const p = document.createElement('p')
        p.innerText = 'Tie! Rock and Rock!' 
        resultDiv.appendChild(p)
    }   else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        const p = document.createElement('p')
        p.innerText = 'Tie! Scissors and Scissors'
        resultDiv.appendChild(p)
    }   else if (humanChoice === 'paper' && computerChoice === 'paper') {
        const p = document.createElement('p')
        p.innerText = 'Tie! Paper and Paper'
        resultDiv.appendChild(p)
    }   else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++
        const p = document.createElement('p')
        p.innerText = 'Victory! Rock crushes Scissors'
        resultDiv.appendChild(p)
    }   else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++
        const p = document.createElement('p')
        p.innerText = 'Defeat... Paper from the top rope!'
        resultDiv.appendChild(p)
    }   else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++
        const p = document.createElement('p')
        p.innerText = 'Victory! Rock? More like pebble!'
        resultDiv.appendChild(p)
    }   else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++
        const p = document.createElement('p')
        p.innerText = 'Defeat... Cut my life into pieces...'
        resultDiv.appendChild(p)
    }   else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++
        const p = document.createElement('p')
        p.innerText = 'Victory! Scissors remain undefeated in this matchup'
        resultDiv.appendChild(p)
    }   else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++
        const p = document.createElement('p')
        p.innerText = 'Defeat! Rock does what paper cannot!'
        resultDiv.appendChild(p)
    }   
}

const logWinner = (humanScore, computerScore) =>{
    if (humanScore === 5){
        const h2 = document.createElement('h2')
        h2.innerText = 'Computer defeated!'
        resultDiv.append(h2)
    }

    else if (computerScore === 5) {
        const h2 = document.createElement('h2')
        h2.innerText = 'Human defeated!'
        resultDiv.append(h2)
    }

}

const updateScores = (humanScore, computerScore) => {
    humanScoreSpan.innerText = `Human Score: ${humanScore}`
    computerScoreSpan.innerText = `Computer Score: ${computerScore}`
}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    updateScores(humanScore, computerScore)
    logWinner(humanScore, computerScore)
    })

paperButton.addEventListener('click', () =>{
    const computerSelection = getComputerChoice()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    updateScores(humanScore, computerScore)
    logWinner(humanScore, computerScore)
    })  
    
scissorsButton.addEventListener('click', () =>{
    const computerSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    updateScores(humanScore, computerScore)
    logWinner(humanScore, computerScore)
    })


//const playGame = () => {
    //for (let i =0; i < 5; i++) {
        //const humanSelection = prompt('Rock, Paper, or Scissors').toLowerCase();
        //const computerSelection = getComputerChoice();
        //console.log(playRound(humanSelection, computerSelection))
    //}
    //if (humanScore > computerScore) {
        //return 'Human defeats Computer!'
    //}   else if (humanScore < computerScore) {
        //return 'Computer defeats Human!'
    //}   else {
        //return 'Tie!'
    //}
//}

//console.log(playGame())




    



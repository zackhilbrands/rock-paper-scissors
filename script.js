let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random () * 3)
    const computerChoice = options[randomNum]
    return computerChoice
}

//console.log(getComputerChoice())

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}
//function getHumanChoice is not necessary, the prompt can be put in the for loop, like this below
// const humanSelection = prompt('Rock, Paper, or Scissors').toLowerCase()

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'rock') {
        return 'Tie! Rock and Rock!'
    }   else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        return 'Tie! Scissors and Scissors'
    }   else if (humanChoice === 'paper' && computerChoice === 'paper') {
        return 'Tie! Paper and Paper'
    }   else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++
        return 'Victory! Rock crushes Scissors'
    }   else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++
        return 'Defeat... Paper from the top rope!'
    }   else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++
        return 'Victory! Rock? More like pebble!'
    }   else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++
        return 'Defeat... Cut my life into pieces...'
    }   else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++
        return 'Victory! Scissors remain undefeated in this matchup'
    }   else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++
        return 'Defeat! Rock does what paper cannot!'
    }   
}


const playGame = () => {
    for (let i =0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection))
    }
    if (humanScore > computerScore) {
        return 'Human defeats Computer!'
    }   else if (humanScore < computerScore) {
        return 'Computer defeats Human!'
    }   else {
        return 'Tie!'
    }
}

console.log(playGame())




    



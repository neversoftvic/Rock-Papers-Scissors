console.log('hello world');

let options = ['rock', 'paper', 'scissors'];

function getcomputerChoice() {
    let random = Math.floor(Math.random() * 3);
    return options[random];
}

function getHumanChoice() {
    let ans;
    ans = prompt('Please choose between rock/paper/scissors').toLowerCase();
    return ans;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){

    humanChoice = getHumanChoice();
    computerChoice = getcomputerChoice();

if (humanChoice === computerChoice){
     console.log("It's a tie! Nobody wins this round.");   
}
else 
{
    if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper'){
    console.log('Human wins this round!');
    humanScore++;
}
else {
    console.log('Computer wins this round!');
    computerScore++;
}
}

}

function playGame(){
    for (let i = 1; i<=5; i++){
        playRound();
    }
    if (humanScore > computerScore){
        console.log("Congratulation! human wins the game");
    }
    else{
        console.log("A.I has defeated you :)");
    }
}


playGame();


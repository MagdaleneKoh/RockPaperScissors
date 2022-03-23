let a = 1;
let b = 2;


//Create function called computerPlay that returns rock/paper/scissors randomly.

//Create function called playRound to play a single round. 
//It will take 2 parameters: playerSelection and computerSelection
//Then, return a string that declares winner. E.g. "You lose! Paper beats Rock"
//playerSelection should be case-insensitive

//Create new function called game to play 5 rounds, and keeps score and reports
//a winner or loser at the end

//use prompt to get input from user


//1st step: prompt user to enter choice
//if player doesn't enter the right words in list, prompt again.

let choiceList = ["rock", "paper", "scissors"];

function playerPlay () {

    const playerSelection = (prompt("Rock, Paper or Scissors?")).toLowerCase();

    while (choiceList.includes(playerSelection) === false) {
        const playerSelection = (prompt("Wrong spelling. Try again: Rock, Paper or Scissors?")).toLowerCase();
        if(choiceList.includes(playerSelection) === true) break;
    }   
};

//2nd step: get computer to pick a choice randomly numerically.

function computerPlay () {
    const randomChoice = Math.floor(Math.random() * (choiceList.length));
    const computerSelection = choiceList[randomChoice];
    return computerSelection;
}

//3rd step: write a function that plays a single round, with rules in it
//converting rocks, paper, and scissors to numbers for easier manipulation



//4td step: repeat until 5 rounds are played, declare losing/winning each time

//5th step: announce the final winner or loser
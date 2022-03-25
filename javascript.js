//1st step: prompt user to enter choice
//if player doesn't enter the right words in list, prompt again.
//record last choice as playerSelection

const choiceList = ["rock", "paper", "scissors"];

function playerPlay () {

    var playerSelection = (prompt("Rock, paper or scissors?")).toLowerCase();

        if (choiceList.includes(playerSelection) === true) {
            return playerSelection;
        } else {
            do
                playerSelection = (prompt(
                    "Invalid choice or spelling. Try again: Rock, paper or scissors?")).toLowerCase()
            while(choiceList.includes(playerSelection) === false);

            return(playerSelection);
            }
        };

//2nd step: get computer to pick a choice randomly.

function computerPlay () {

    const randomChoice = Math.floor(Math.random() * (choiceList.length));
    const computerSelection = choiceList[randomChoice];
    return computerSelection;
}

//3rd step: write a function that plays a single round, with rules in it
//player plays, and then computer plays
//convert both hands to numerical value
//compare both player's hand and computer's hand by subtracting computer's hand from player's
//if the result is 1 or -2, player wins; if 0, it's a tie; if else, player loses
//announce result to this effect: You lose! computer's hand beats player's hand
//if player wins instead, announce, You Win! player's hand beats computer's hand
//if it's a tie, announce, It's a tie! players hand is equal to computer's!

function playRound(playerSelection, computerSelection) {
    
    console.log(`Your choice: ${playerSelection = playerPlay()}`);
    console.log(`Opponent's choice: ${computerSelection = computerPlay()}`);

    let playerChoice = choiceList.indexOf(playerSelection);
    let computerChoice = choiceList.indexOf(computerSelection);

    let difference = playerChoice - computerChoice;

    if (difference == 1 || difference == -2) {
        playerSelection = playerSelection.replace(/^./, playerSelection[0].toUpperCase());
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return 1;
    } else if (difference == 0) {
        console.log(`It's a tie! Both of you used ${playerSelection}!`)
    } else {
        computerSelection = computerSelection.replace(/^./, computerSelection[0].toUpperCase());
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
        return -1;
    }
}

//4th step: repeat until 5 rounds are played, declare losing/winning each time
//create a function with a counter that counts to 5
//when the counter reaches 5, declare the results, and whether the player wins or loses overall

function game(){

    let playerCounter = 0;
    let computerCounter = 0;
    let tieCounter = 0;

    for (let i = 0; i < 5; i++) {

        let tempResultVal = playRound();
        if (tempResultVal == 1) {
            playerCounter += 1;
        } else if (tempResultVal == -1) {
            computerCounter += 1;
        } else {
            tieCounter += 1;
        }
    }

    console.log(
    `
    Number of battles won : ${playerCounter} Rounds
    Number of battles lost: ${computerCounter} Rounds
    Number of battles tied: ${tieCounter} Rounds
    `
    )

    if (playerCounter > computerCounter) {
        console.log(`Overall, you've won! Congratulations!`)
    } else if (computerCounter > playerCounter) {
        console.log(`Overall, you've lost! Better luck next time!`)
    } else {
        console.log(`It's a tie! You're the same level as your opponent!`)
    }
}

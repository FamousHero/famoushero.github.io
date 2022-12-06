const choices = ["rock", "paper", "scissors"]

function game(){
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; ++i)
    {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        const roundWinner = playRound(playerSelection, computerSelection)
        if(roundWinner === undefined)
            return;
        if(roundWinner === "tie")
        {
            console.log("Draw");
        }
        if(roundWinner === "player"){
            ++playerWins;
            console.log("Player wins.");
        }
        else if(roundWinner === "computer")
        {
            ++computerWins;
            console.log("Computer wins.");
        }
        let message = "player has " + playerWins + " wins. \ncomputer has " + computerWins + " wins.\n";
        console.log(message);


    }
}

function playRound(playerSelection, computerSelection)
{
    if(playerSelection === null || playerSelection === "")
        return;

    console.log(playerSelection + " " + computerSelection + "\n");

    if(playerSelection === computerSelection){
        return "tie";
    }


    if(playerSelection === "rock" && computerSelection === "scissors" 
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper")
    {
        return "player";
    }
    else 
    {
        return "computer";
    }
}

function computerPlay(){
    return choices[Math.floor(Math.random()*choices.length)];
}    

function playerPlay(){
    const message = "Choose rock, paper, or scissors (use lowercase) \nClick Ok or Cancel to exit.";
    let choice;
    while(!choices.includes(choice) && choice !== null && choice !== "")
    {
        choice = prompt(message);
    }
    return choice;
}


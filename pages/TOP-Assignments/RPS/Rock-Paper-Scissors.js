/* -------- Variable ---------- */


var choices = ["Rock", "Paper", "Scissors"];
var ResultBox = document.querySelector(".result-content");
var playerScore = 0;
var computerScore = 0;
var playerScoreContainer = document.getElementById("player-score");
var computerScoreContainer = document.getElementById("computer-score");



/* --- Page Setup ----- */
{
    let Buttons = document.getElementsByTagName('button');
    for(var i = 0; i < Buttons.length; ++i)
    {

        Buttons[i].addEventListener('click', (e)=>{
            playRound(e.target.value);
            e.stopPropagation();
        })
    }
}







/* ------------ Game Logic --------- */


function playRound(playerSelection)
{
    const computerSelection = computerPlay();
    if(playerSelection === null || playerSelection === "")
        return;

    console.log(playerSelection + " " + computerSelection + "\n");

    if(playerSelection === computerSelection){
        ResultBox.innerHTML = `<span class="text">Tied!!! You both chose ${playerSelection}</span>`;
    }


    else if(playerSelection === "Rock" && computerSelection === "Scissors" 
    || playerSelection === "Paper" && computerSelection === "Rock"
    || playerSelection === "Scissors" && computerSelection === "Paper")
    {
        playerScore++;
        ResultBox.innerHTML = `<span class="text">You Win!!! ${playerSelection} beats ${computerSelection}</span>`;
        playerScoreContainer.innerText = playerScore;
    }
    else 
    {
        computerScore++;
        ResultBox.innerHTML = `<span class= "text">You Lose. ${playerSelection} does not beat ${computerSelection}</span>`;
        computerScoreContainer.innerText = computerScore;
    }
}

function computerPlay(){
    return choices[Math.floor(Math.random()*choices.length)];
}    

/* depreciated 

function game(playerSelection){
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; ++i)
    {
        const computerSelection = computerPlay
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

function playerPlay(){
    const message = "Choose rock, paper, or scissors (use lowercase) \nClick Ok or Cancel to exit.";
    let choice;
    while(!choices.includes(choice) && choice !== null && choice !== "")
    {
        choice = prompt(message);
    }
    return choice;
}

*/

/* ---------- Page Functions ------ */


function testButton(event){
    console.log('Button Pressed');
    event.stopPropagation();
}



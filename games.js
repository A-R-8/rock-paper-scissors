function getComputerChoice()
{
    var computerturn=["Rock", "Paper", "Scissors"];
    var rand=computerturn[Math.floor(Math.random() * computerturn.length)];
    // console.log(rand);
    return rand;
}


// console.log(computerSelection);
var computerWins=0;
var playerWins=0;
var computerSelection;

function playRound(playerSelection, computerSelection)
{
    if (playerSelection=="Rock")
    {
        if (computerSelection=="Paper")
        {
            computerWins++;
            return "You Lose! Paper beats Rock";

        }
        else if (computerSelection=="Scissors")
        {
            playerWins++;
            return "You win! Rock beats Scissors";
        }
        else
        return "It's a tie!";
    }

    else if (playerSelection=="Paper")
    {
        if (computerSelection=="Scissors")
        {
            computerWins++;
            return "You Lose! Scissors beats Paper";
        }
        else if (computerSelection=="Rock")
        {
            playerWins++;
            return "You win! Paper beats Rock";
        }
        else
        return "It's a tie!";
    }

    else
    { 
     if (computerSelection=="Rock")
        {
            computerWins++;
            return "You Lose! Rock beats Scissors";
        }
        else if (computerSelection=="Paper")
        {
            playerWins++;
            return "You win! Scissors beats Paper";
        }
        else
        return "It's a tie!";
    }
    
}
function game()
{
    
    for(let i=0;i<5;i++)
    {
        computerSelection=getComputerChoice();
        

        var input=prompt("Input your choice");
        input=input.toLowerCase();
        var playerSelection=input;
        playerSelection=playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    
        console.log("Computer pick: " +computerSelection + " Your pick: " + playerSelection);
        
        var test=playRound(playerSelection, computerSelection);
        console.log(test);

        console.log("player Wins= " + playerWins);
        console.log("computer Wins= " + computerWins);

        if (playerSelection==3||computerSelection==3)
        {
            if(computerWins>playerWins)
            {
                return "Computer Won by " + computerWins + " games to "+ playerWins;
            }
            else if (playerWins>computerWins)
            {
                return "You Won by " + playerWins + " games to "+ computerWins;
            }
        }

        else if (i==4)
        {
            if(computerWins>playerWins)
            {
                return "Computer Won by " + computerWins + " games to "+ playerWins;
            }
            else if (playerWins>computerWins)
            {
                return "You Won by " + playerWins + " games to "+ computerWins;
            }
            else if (computerWins==playerWins)
            return "Its a tie!!!";

        }
    }
}
console.log(game());

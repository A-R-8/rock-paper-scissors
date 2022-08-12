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
const buttons = document.querySelectorAll('button');

var playerSelection;
const content=document.createElement('div');

const body=document.querySelector('body');
content.classList.add('content');

const result=document.createElement('p');
result.classList.add('result');

const txt=document.querySelector('.text');
var computerSelection;

function playRound()
{
computerSelection=getComputerChoice();
console.log(computerSelection);
if (playerSelection=="Rock")
{
if (computerSelection=="Paper")
{
computerWins++;
content.textContent="You Lose! Paper beats Rock ";
result.textContent=playerWins +"-"+computerWins;

}
else if (computerSelection=="Scissors")
{
playerWins++;
content.textContent="You win! Rock beats Scissors ";
result.textContent=playerWins +"-"+computerWins;
}
else
content.textContent="It's a tie! ";
result.textContent=playerWins +"-"+computerWins;
}

else if (playerSelection=="Paper")
{
if (computerSelection=="Scissors")
{
computerWins++;
content.textContent="You Lose! Scissors beats Paper";
result.textContent=playerWins +"-"+computerWins;
}
else if (computerSelection=="Rock")
{
playerWins++;
content.textContent="You win! Paper beats Rock";
result.textContent=playerWins +"-"+computerWins;
}
else
content.textContent="It's a tie!";
result.textContent=playerWins +"-"+computerWins;
}

else
{
if (computerSelection=="Rock")
{
computerWins++;
content.textContent="You Lose! Rock beats Scissors";
result.textContent=playerWins +"-"+computerWins;
}
else if (computerSelection=="Paper")
{
playerWins++;
content.textContent="You win! Scissors beats Paper";
result.textContent=playerWins +"-"+computerWins;
}
else
content.textContent="It's a tie!";
result.textContent=playerWins +"-"+computerWins;
}


}

txt.appendChild(content);
txt.appendChild(result);

function gameEnd()
{
if (playerWins==5||computerWins==5)
{ document.getElementById('Rock').disabled=true;
document.getElementById('Paper').disabled=true;
document.getElementById('Scissors').disabled=true;
let end_statement='';
if (playerWins==5)
{
end_statement= " YOU WIN " + playerWins + "-"+ computerWins;


}
else
{
end_statement= " YOU LOSE " + computerWins + "-"+ playerWins;
}
let box=document.createElement('div');
box.classList.add('box');
let end=document.createElement('div');
end.textContent="GAME OVER!" + end_statement;
box.appendChild(end);

let btn = document.createElement("button");
btn.innerHTML = "Try again";
box.appendChild(btn);
btn.onclick = () => {
window.location.reload();
}
document.body.appendChild(box);

}
}

function showPlayer()
{
var img1=document.getElementById('pl-pick')

if (playerSelection=="Rock")
{
img1.src="rock.gif";
img1.style.display = "block";


}
else if (playerSelection=="Paper")
{
img1.src="paper.gif";
img1.style.display = "block";
}
else if (playerSelection=="Scissors")
{
img1.src="scissor.gif";
img1.style.display = "block";
}
}

function showComp()
{
var img2=document.getElementById('com-pick');

if (computerSelection=="Rock")
{
img2.src="rock.gif";
img2.style.display = "block";

}
else if (computerSelection=="Paper")
{
img2.src="paper.gif";
img2.style.display = "block";
}
else if (computerSelection=="Scissors")
{
img2.src="scissor.gif";
img2.style.display = "block";
}

}

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
// and for each one we add a 'click' listener
button.addEventListener('click',()=>{

playerSelection=button.id;
playRound();
gameEnd();
showPlayer();
showComp();
});

});
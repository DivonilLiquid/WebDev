const Player1Text = document.getElementById("player1Score");
const Player2Text = document.getElementById("player2Score");

const Player1Button = document.getElementById("Player1Button");
const Player2Button = document.getElementById("Player2Button");
const ResetButton = document.getElementById("ResetButton");

const winningScoreSelect = document.getElementById("PlayTo");

let P1S =0;
let P2S =0;
let winningScore = 3;
let gameOver = false;

winningScoreSelect.addEventListener("change",function(){
    //alert(this.value);
    winningScore = parseInt(this.value);
    resetFunction();
})

Player1Button.addEventListener('click', function(){
    if(!gameOver){
        P1S++;
        Player1Text.innerText = `${P1S}`;
    }
    if(P1S === winningScore){
        Player1Text.innerText = `${P1S}`;
        /*
        We can do this but what if multiple properties to be added
        So we will use concept of classlist concept
        Player1Text.style.color = 'Green';
        Player2Text.style.color = 'Red';*/
        Player1Text.classList.add("winner");
        Player2Text.classList.add("loser");
        Player2Button.disabled = true;
        Player1Button.disabled = true;
        gameOver = true;
    }

})

Player2Button.addEventListener('click', function(){
    if(!gameOver){
        P2S++;
        Player2Text.innerText = `${P2S}`;

    }
    if(P2S === winningScore){
        Player2Text.innerText = `${P2S}`;
        /*We can do this but what if multiple properties to be added
        So we will use concept of classlist concept
        Player2Text.style.color = 'Green';
        Player1Text.style.color = 'Red';*/
        Player2Text.classList.add("winner");
        Player1Text.classList.add("loser");
        Player2Button.disabled = true;
        Player1Button.disabled = true;
        gameOver = true;
    }
})

function resetFunction(){
    P1S = 0;
    P2S = 0;
    Player1Text.innerText = `${P1S}`;
    Player2Text.innerText = `${P2S}`;
    Player1Text.classList.remove("winner","loser");
    Player2Text.classList.remove("winner","loser");
    Player2Button.disabled = false;
    Player1Button.disabled = false;
    gameOver = false;
}

ResetButton.addEventListener('click', resetFunction);
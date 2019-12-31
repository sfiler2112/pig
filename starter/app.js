/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, diceImages;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;


//console.log("dice value = " + dice);
//diceImages = ['dice-1.png', 'dice-2.png', 'dice-3.png', 'dice-4.png', 'dice-5.png', 'dice-6.png'];



document.querySelector('.dice').style.display = 'none';
    //'<img src=' + diceImages[dice - 1] + ' alt="Dice" class="dice">';

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

function switchActivePlayer() {
    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
    document.getElementById('current-' + activePlayer).textContent = 0;
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    
    document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
    document.getElementById('current-' + activePlayer).textContent = 0;
    
    document.querySelector('.dice').style.display = 'none';
    roundScore = 0;
}

document.querySelector('.btn-roll').addEventListener('click', function () {
    var dice, diceDOM;
    
    dice = Math.floor(Math.random() * 6) + 1;
    
    diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        switchActivePlayer();
    }
    
    
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    // Add current score to global score
    scores[activePlayer] += roundScore;
    
    
    // Update the UI
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    
    
    // Check if player has won game 
    
    if (scores[activePlayer] >= 10) {
        document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('winner');
        document.getElementById('name-' + activePlayer).textContent = 'Winner!';
    } else {
        switchActivePlayer();
    }
    
});


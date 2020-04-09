// rpsGame.js
// Nathan Mack, 2020

// Randomly selects the computer's move
function computerPlay() {
    var rand = Math.random() * 10;
    
    if (rand <= 3) {
        return 'paper';
    }
    else if (rand > 3 && rand <= 7) {
        return 'scissors';
    }
    else {
        return 'rock';
    }
}

// The logic behind a game round
function playRound(playerSelection, computerSelection) {
    var ps = playerSelection.toLowerCase();
    var cs = computerSelection;
    
    // Lose conditions
    if (ps === 'rock' && cs === 'paper') {
        return 'You lose, ' + cs + ' beats ' + ps + '.';
    }
    else if (ps === 'scissors' && cs ==='rock') {
        return 'You lose, ' + cs + ' beats ' + ps + '.';
    }
    else if (ps === 'paper' && cs === 'scissors') {
        return 'You lose, ' + cs + ' beats ' + ps + '.';
    }
    // Win conditions
    else if (ps === 'rock' && cs === 'scissors') {
        return 'You win, ' + ps + ' beats ' + cs + '.';
    }
    else if (ps === 'scissors' && cs ==='paper') {
        return 'You win, ' + ps + ' beats ' + cs + '.';
    }
    else if (ps === 'paper' && cs === 'rock') {
        return 'You win, ' + ps + ' beats ' + cs + '.';
    }
    // Tie condition
    else if (ps === cs) {
        return 'Tie game, ' + cs + ' ties ' + ps + '.';
    }
}

// Initial game variables
const buttons = document.querySelectorAll('button');
var n = 0;
var playerWins = 0;
var computerWins = 0;
var ties = 0;

// Modifies the score display
document.getElementById('wins').innerHTML = 'Player Wins: ' + 0;
document.getElementById('losses').innerHTML = 'Computer Wins: ' + 0;
document.getElementById('ties').innerHTML = 'Ties: ' + 0;

// Triggers the game to play for every button click
buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        let x = 5;
        let result;

        // Score tracking logic
        if (n !== x) {
            result = playRound(button.id, computerPlay());
            document.getElementById('result').innerHTML = result;
            
            // If a player wins the round
            if (result.includes('win')) {
                playerWins++;
                n++;
                document.getElementById('wins').innerHTML = 'Player Wins: ' + playerWins;
            }
            // If a player losses the round
            else if (result.includes('lose')) {
                computerWins++;
                n++
                document.getElementById('losses').innerHTML = 'Computer Wins: ' + computerWins;
            }
            // If the round is a tie
            else {
                ties++;
                n++;
                document.getElementById('ties').innerHTML = 'Ties: ' + ties;
            }
        }
        
        // Handles the end of game condition
        else if (n === x) {
            if (playerWins > computerWins) {
                document.getElementById('result').innerHTML = 'You win the game!';
            }
            else if (playerWins < computerWins) {
                document.getElementById('result').innerHTML = 'You lose the game :(';
            }
            else {
                document.getElementById('result').innerHTML = 'The game is a tie!';
            };
        };

    });
});




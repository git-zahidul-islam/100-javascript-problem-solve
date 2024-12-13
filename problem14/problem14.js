// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Game Over Example</title>
//   <style>
//     body {
//       font-family: Arial, sans-serif;
//       text-align: center;
//       margin-top: 50px;
//     }
//     .game-over {
//       display: none;
//       background-color: rgba(0, 0, 0, 0.8);
//       color: white;
//       position: fixed;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       flex-direction: column;
//     }
//     .game-over button {
//       padding: 10px 20px;
//       font-size: 16px;
//       margin-top: 20px;
//       cursor: pointer;
//     }
//   </style>
// </head>
// <body>

// <h1>Health: <span id="health">3</span></h1>
// <button id="damage-btn">Take Damage</button>

// <div class="game-over" id="game-over">
//   <h1>Game Over</h1>
//   <button id="restart-btn">Restart Game</button>
// </div>

// <script>
//   // Initial Variables
//   let health = 3;

//   // DOM Elements
//   const healthDisplay = document.getElementById('health');
//   const damageButton = document.getElementById('damage-btn');
//   const gameOverScreen = document.getElementById('game-over');
//   const restartButton = document.getElementById('restart-btn');

//   // Function to handle taking damage
//   function takeDamage() {
//     if (health > 0) {
//       health--;
//       healthDisplay.textContent = health;
//     }
//     if (health === 0) {
//       showGameOver();
//     }
//   }

//   // Function to show "Game Over" screen
//   function showGameOver() {
//     gameOverScreen.style.display = 'flex';
//   }

//   // Function to restart the game
//   function restartGame() {
//     health = 3;
//     healthDisplay.textContent = health;
//     gameOverScreen.style.display = 'none';
//   }

//   // Event Listeners
//   damageButton.addEventListener('click', takeDamage);
//   restartButton.addEventListener('click', restartGame);
// </script>

// </body>
// </html>



let health = 3;

// DOM Elements
const healthDisplay = document.getElementById('health');
const damageButton = document.getElementById('damage-btn');
const gameOverScreen = document.getElementById('game-over');
const restartButton = document.getElementById('restart-btn');

// Function to handle taking damage
function takeDamage() {
    if (health > 0) {
        health--;
        healthDisplay.textContent = health;
    }
    if (health === 0) {
        showGameOver();
    }
}

// Function to show "Game Over" screen
function showGameOver() {
    gameOverScreen.style.display = 'flex';
}

// Function to restart the game
function restartGame() {
    health = 3;
    healthDisplay.textContent = health;
    gameOverScreen.style.display = 'none';
}

// Event Listeners
damageButton.addEventListener('click', takeDamage);
restartButton.addEventListener('click', restartGame);
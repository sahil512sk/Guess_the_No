let randomNumber = Math.floor(Math.random() * 100) + 1;
let indicator = document.querySelector('.indicator');
let attempt = document.querySelector('.attempts');
let restart = document.querySelector('#restart');
let start = document.querySelector('#start');
let input = document.querySelector('#guess-input');
let submit = document.querySelector('#submit-btn');
let form = document.querySelector('#game-form');
let winOverlay = document.querySelector('#win-overlay');
let loseOverlay = document.querySelector('#lose-overlay');
let loseMessage = document.querySelector('#lose-message');
let winrestart = document.querySelector('#win-restart');
let loserestart = document.querySelector('#lose-restart');
function shuffleColor() {
   let listen = ['0', '1', '2', '3', '4', '5', '6'];
   let randomColor = '';
   for (let i = 0; i < 6; i++) {
      randomColor += listen[Math.floor(Math.random() * listen.length)];
   }
   let body_color = document.body.style.backgroundColor = '#' + randomColor;
}

start.addEventListener('click', function () {
   input.disabled = false;
   input.focus(); // Focus on input field when game starts
   submit.disabled = false;
   start.style.display = 'none';
   restart.style.display = 'inline-block';
   indicator.innerText = 'Game Begins!';
   shuffleColor();
});

form.addEventListener('submit', (e) => {
   e.preventDefault();
   let userGuess = Number(input.value);
   if (!userGuess || userGuess < 1 || userGuess > 100) {
      // alert("Please enter a valid number between 1 and 100.");
      indicator.innerText = "⚠️ Enter a number between 1 and 100";
      input.value = '';
      // return;
   } else {
      let value = Number(attempt.innerText);
      value -= 1;
      console.log(randomNumber);
      attempt.innerText = value;
      if (userGuess === randomNumber) {
         winOverlay.classList.add('show');
         input.disabled = true;
         submit.disabled = true;
         submit.style.display = 'none';
      }
      else if (value === 0) {
         loseMessage.innerText = "❌ Game Over! The correct number was " + randomNumber + ".";
         loseOverlay.classList.add('show');
         input.disabled = true;
         submit.disabled = true;
         submit.style.display = 'none';
      }
      else if (userGuess < randomNumber) {
         indicator.innerText = "🔼 Try a Higher Number";
      }
      else {
         indicator.innerText = "🔽 Try a Lower Number";
      }
      input.value = '';
   }
});

// Difficulty modes
// Easy (15 attempts)
// Hard (5 attempts)

// Prevent same guess spam
// Store previous guesses in an array.

function restartGame() {
   randomNumber = Math.floor(Math.random() * 100) + 1;
   console.log(randomNumber);
   attempt.innerText = 10;
   indicator.innerText = 'Game Begins!';
   input.disabled = false;
   input.focus(); // Focus on input field when game starts
   submit.style.display = 'inline-block';
   submit.disabled = false;
   input.value = '';
   winOverlay.classList.remove('show');
   loseOverlay.classList.remove('show');
   shuffleColor();
}

restart.addEventListener('click', restartGame);
winrestart.addEventListener('click', restartGame);
loserestart.addEventListener('click', restartGame);
var timerNum = 60;
var highscore = 0;
var question = [
    "What is 2+2",
    "Who are the founding fathers?",
    "What is your meaning of life?"
];

var timerHtml = document.querySelector('#timer');
var highscoreButton = document.querySelector('#highscore')
var bodyHtml = document.querySelector('body')
function timer() {
    var timerInterval = setInterval(function() {
    timerNum--;
    timerHtml.textContent = timerNum + " seconds left till quiz is over.";
  
      if(timerNum === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  };
  
  

 function game() {

  };

 highscoreButton.addEventListener('click', function () {
    bodyHtml.hidden
 })


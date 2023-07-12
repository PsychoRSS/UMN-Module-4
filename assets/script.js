var timerNum = 60;
var highscore = 0;
var question = [
    "What is 2+2",
    "Who are the founding fathers?",
    "What is the name of the found father that discovered the lightbulb"
];
var answers1 = ["4","12","42"];
var answers2 = ["John F Kennedy", "John Adams", "YE BOI, ALEX LARAAAAA!!!!!"];
var answers3 = ["Carl Junior", "George Washington", "Bejimen Franklin"];
  var divEl =  document.createElement('div');
  var h2El = document.createElement('h2');
  var pEl = document.createElement('p');
  var answer1 = document.createElement('button');
  var answer2 = document.createElement('button');
  var answer3 = document.createElement('button');

var finalQuest
var score = 0 
var highscoreTracker1 
var highscoreTracker2
var highscoreTracker3

var timerHtml = document.querySelector('#timer');;
var highscoreButton = document.querySelector('#highscore');
var quizDiv = document.querySelector('#quiz-start-screen');
var body = document.querySelector('body');
var startBttm = document.querySelector('#start-button');


function timer() {
    var timerInterval = setInterval(function() {
    timerNum--;
    timerHtml.textContent = timerNum + " seconds left till quiz is over.";
  
      if(timerNum === 0) {
        clearInterval(timerInterval);

      }
  
    }, 1000);
  };
  
  function questionDisplay() {
      var randoQuest = Math.floor(Math.random() * question.length);
    var finalQuest = '';
    finalQuest += question[randoQuest]
    console.log(finalQuest)
   pEl.textContent = finalQuest

   return finalQuest
  }





  function question1(event) {
    event.preventDefault()
    quickTimer = 3
    answer1.textContent = answers1[0]
    answer2.textContent = answers1[1]
    answer3.textContent = answers1[2]
    divEl.appendChild(answer1)
    divEl.appendChild(answer2)
    divEl.appendChild(answer3)

    answer1.addEventListener('click',function() {

        score++
        pEl.textContent = "CONGRATULATIONS YOU GOT A POINT!!!. Your current score is, " + score
        
        var timerInterval = setInterval(function() {
          quickTimer--;
          console.log(quickTimer)
            if(quickTimer === 0) {
              clearInterval(timerInterval);
              game()
            }
          }, 1000);
     })

    answer2.addEventListener('click',function() {
      pEl.textContent = "oof, sorry pimparooni, u got the wrong answer better luck on the next one. Your current score is, " + score
      var timerInterval = setInterval(function() {
        quickTimer--;
        console.log(quickTimer)
          if(quickTimer === 0) {
            clearInterval(timerInterval);
            game()
          }
        }, 1000);
    })

    answer3.addEventListener('click',function() {
    pEl.textContent = "CONGRATULATIONS YOU GOT A POINT!!!. Your current score is, " + score
    var timerInterval = setInterval(function() {
      quickTimer--;
      console.log(quickTimer)
        if(quickTimer === 0) {
          clearInterval(timerInterval);
          game()
        }
      }, 1000);
    })
  };

  
  function question2(event) {
    event.preventDefault()
    quickTimer = 3
    answer1.textContent = answers2[0]
    answer2.textContent = answers2[1]
    answer3.textContent = answers2[2]
    divEl.appendChild(answer1)
    divEl.appendChild(answer2)
    divEl.appendChild(answer3)

    answer1.addEventListener('click',function() {
        pEl.textContent = "oof, sorry pimparooni, u got the wrong answer better luck on the next one. Your current score is, " + score
        var timerInterval = setInterval(function() {
          quickTimer--;
          console.log(quickTimer)
            if(quickTimer === 0) {
              clearInterval(timerInterval);
              game()
            }
          }, 1000);
     })
    answer2.addEventListener('click',function() {
      score++
      pEl.textContent = "CONGRATULATIONS YOU GOT A POINT!!!. Your current score is, " + score
   
      var timerInterval = setInterval(function() {
        quickTimer--;
        console.log(quickTimer)
          if(quickTimer === 0) {
            clearInterval(timerInterval);
            game()
          }
        }, 1000);
    })
    answer3.addEventListener('click',function() {
    pEl.textContent = "CONGRATULATIONS YOU GOT A POINT!!!. Your current score is, " + score
    var timerInterval = setInterval(function() {
      quickTimer--;
      console.log(quickTimer)
        if(quickTimer === 0) {
          clearInterval(timerInterval);
          game()
        }
      }, 1000);
    })
  }


  function question3(event) {
    event.preventDefault()
    quickTimer = 3
    answer1.textContent = answers2[0]
    answer2.textContent = answers2[1]
    answer3.textContent = answers2[2]
    divEl.appendChild(answer1)
    divEl.appendChild(answer2)
    divEl.appendChild(answer3)

    answer1.addEventListener('click',function() {
        pEl.textContent = "oof, sorry pimparooni, u got the wrong answer better luck on the next one. Your current score is, " + score
        var timerInterval = setInterval(function() {
          quickTimer--;
          console.log(quickTimer)
            if(quickTimer === 0) {
              clearInterval(timerInterval);
              game()
            }
          }, 1000);
     })
    answer2.addEventListener('click',function() {
      score++
      pEl.textContent = "CONGRATULATIONS YOU GOT A POINT!!!. Your current score is, " + score
   
      var timerInterval = setInterval(function() {
        quickTimer--;
        console.log(quickTimer)
          if(quickTimer === 0) {
            clearInterval(timerInterval);
            game()
          }
        }, 1000);
    })
    answer3.addEventListener('click',function() {
    pEl.textContent = "CONGRATULATIONS YOU GOT A POINT!!!. Your current score is, " + score
    var timerInterval = setInterval(function() {
      quickTimer--;
      console.log(quickTimer)
        if(quickTimer === 0) {
          clearInterval(timerInterval);
          game()
        }
      }, 1000);
    })
  }


  // This will load the last highscores and display them
 highscoreButton.addEventListener('click', function () {
    quizDiv.hidden = true;

    var highscoreHeading = document.createElement("h1");
      highscoreHeading.textContent = "Highscores!";
    
      highscoreHeading.setAttribute('style', 'text-align:center;')

      var highschoreDiv = document.createElement("div");

      highschoreDiv.setAttribute('style', 'text-align:center; margin-top:10px');

      var highscoreLi1 = document.createElement("li");
      var highscoreLi2 = document.createElement("li");
      var highscoreLi3 = document.createElement("li");
          highscoreLi1.textContent = "1: highscoreTracker1";
          highscoreLi2.textContent = "2: highscoreTracker2";
          highscoreLi3.textContent = "3 :highscoreTracker3";

      body.appendChild(highscoreHeading);
      body.appendChild(highschoreDiv);
      highschoreDiv.appendChild(highscoreLi1);
      highschoreDiv.appendChild(highscoreLi2);
      highschoreDiv.appendChild(highscoreLi3);

  })


  function game() {
 
    quizDiv.hidden = true;
      divEl.textContent = question[0];
  
      body.appendChild(divEl);
      divEl.appendChild(h2El);
      divEl.appendChild(pEl);
  
      finalQuest = questionDisplay()
    
      if(finalQuest === question[0] ){
        question1()   
      }  else if(finalQuest = question[1]){
        question2()
      }else if (finalQuest = question[2]){
        question3()
      }
    
      timer()
    };
startBttm.addEventListener('click', game)
var readlinesync = require('readline-sync');





var score = 0;

// data of high score
var highScores = [
  {
    name: "Abhinab",
    score: 5,
  },
]
  //main questions of the game
//array of objects
var questions = [{
 question: "Do you (a)like or (b)hate your mistakes?",
  answer: "a"
}, {
  question: "Do you like (a)food companies or (b)restaurants?",
  answer: "restaurants"
}, {
  question: "will you be (a)a rationalist or (b)a skeptic?",
  answer: "skeptic"
}, {
  question: "would you become (a)a bureaucrat or (b)a entrepreneur?",
  answer: "entrepreneur"
}, {
  question: "do you prefer (a)post traumatic depression or (b)post traumatic growth?",
  answer: "post traumatic growth"
}, {
  question: "do you (a)keep going after failure or (b)quit?",
  answer: "keep going"
}];

//introduction
function welcome() {
 var userName = readlinesync.question("HI! Enter your name to find out you are anti fragile or not. ");

  console.log("Welcome "+ userName + " lets start with some questions.Answer in a or b.");
}


function play(question, answer) {
  var userAnswer = readlinesync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
  } 



console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("If all your answers are correct, then you will most probably benefit from stressors and hence you are ANTI-FRAGILE");

  console.log("Check out the high scores, if you should be there ping me and I'll update it")

  highScores.map(score => console.log(score.name, " : ", score.score))
}



welcome();
game();
showScores();

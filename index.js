//readline-sync and chalk npm packages imported.
var readlineSync = require("readline-sync");

//Welcome
console.log("--------------------------------------");
console.log('WELCOME TO "HOW MUCH DO YOU KNOW ME?"');
console.log("--------------------------------------\n");

//Function for getting Username
function getUser() {
  //Getting Name of the player and printing in the console
  var userName = readlineSync.question(
    "Before starting the game, May I know your name?\n"
  );
  console.log(
    "\nWelcome",
    userName,
    "\nYour game has started. All the best!!!\n"
  );
}

//Function Call
getUser();

//Intial Game Score
var initialScore = 0;

//Array of Object containing all questions and answers
let personalData = [
  {
    question: "1. Where do I live? ",
    correctAnswer: "Mumbai",
  },
  {
    question: "2. Who is my favourite tennis player? ",
    correctAnswer: "Rafael Nadal",
  },
  {
    question: "3. What is my favorite food? ",
    correctAnswer: "Biryani",
  },
  {
    question: "4. Which is my favorite movie? ",
    correctAnswer: "The Dark Knight",
  },
  {
    question: "5. Which is my favorite football team? ",
    correctAnswer: "Real Madrid",
  },
];

//Array of Object containing high score users
let highScoreLeaderboard = [
  {
    user: "Suyash",
    points: "10",
  },
  {
    user: "Meet",
    points: "7",
  },
  {
    user: "Pratik",
    points: "5",
  },
];

//Function for score calculation
function gameFunction(question, answer) {
  //Getting user input as an answer
  var userAnswer = readlineSync.question(question);
  //Converting to lowercase
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    //Incrementing the score if answer is right!
    initialScore = initialScore + 2;
    //message after winning the point
    console.log(
      "\nWOOOAHHH!!! You got correct answer \nYour score is :",
      initialScore,
      "\n",
      "\n-----------------\n"
    );
  } else {
    //Decrementing the score if answer is wrong!
    initialScore = initialScore - 1;
    //message after losing the point
    console.log(
      "\nSORRYYY!!! You got wrong answer \nYour score is :",
      initialScore,
      "\n-----------------\n"
    );
  }
}

//Iterating over an array and matching the right answer
for (var i = 0; i < personalData.length; i++) {
  //Function Call(With parameters passed as question and correct answer)
  gameFunction(personalData[i].question, personalData[i].correctAnswer);
}

//Goodbye text
console.log(
  "\nThanks for playing this game! \nShare this with your friends and send a screenshot if they answers all the questions \nHAVE A NICE DAY!!!\n-------------------------------\n"
);

//Iterating over scoreBoard array to display user's with highest scores!
console.log("\nOur Table Toppers\n");
for (i = 0; i < highScoreLeaderboard.length; i++) {
  //printing all user's from the leaderboard table
  console.log(
    highScoreLeaderboard[i].user + "  :  " + highScoreLeaderboard[i].points
  );
}

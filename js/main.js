// array of quiz questions to be looped through
var questionsArray = [{
    question: "Question 1: How do you write comments in JavaScript?",
    answers: {
        a: "#",
        b: "//",
        c: "REM",
        d: "None of the above"
    },
    correctAnswer: "b"
},
{
    question: "Question 2: Which of the following are not JavaScript data types?",
    answers: {
        a: "Numbers",
        b: "Strings",
        c: "Booleans",
        d: "Attributes"
    },
    correctAnswer: "d"
},

{
    question: "Question 3: Which of the following is the correct way to store data in a variable?",
    answers: {
        a: "var x = 0",
        b: "x = 0",
        c: "x = var 0",
        d: "var x + 0"
    },
    correctAnswer: "a"
},

{
    question: "Question 4: How can you access elements in an array?",
    answers: {
        a: "Elements",
        b: "Properties",
        c: "Index",
        d: "Variables"
    },
    correctAnswer: "c"
},

{
    question: "Question 5: What is a reusable block of code in JavaScript?",
    answers: {
        a: "Variable",
        b: "Function",
        c: "Object",
        d: "Array"
    },
    correctAnswer: "b"
},];

// targetting the HTML elements to work with
var startButton = document.getElementById("start-button");
var rulesPage = document.getElementById("rules-page");
var showQuiz = document.getElementById("quiz");
var quizQuestions = document.getElementById("question");
var answerBtns = document.querySelector(".answer-btns");
var answerBtn1 = document.getElementById("answer-btn1");
var answerBtn2 = document.getElementById("answer-btn2");
var answerBtn3 = document.getElementById("answer-btn3");
var answerBtn4 = document.getElementById("answer-btn4");
var quizAnswers = document.getElementById("answers");
var correctOrIncorrect = document.getElementById("correct-incorrect");
var quizTimer = document.getElementById("timer");
var resultsPage = document.getElementById("results-page");
var submitBtn = document.getElementById("submit-button");
var userScore = document.getElementById("score");
var highScoresList = document.getElementById("high-scores");
var returnHomeBtn = document.getElementById("return-btn");
var userInitials = document.getElementById("initials");
var savedScores = document.getElementById("scores-list");
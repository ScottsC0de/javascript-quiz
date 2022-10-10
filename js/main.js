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

// creating the loop of questions
var currentQuestion = 0;

// setting up timer variables
var totalTime = 0;

// set to 76 seconds since first number isn't popping up immediately
var timerCount = 76;

// when the user hits the start button
startButton.addEventListener("click", function (event) {
    startTimer();
    rulesPage.style.display = "none";
    showQuiz.style.display = "block";
    startQuiz();
});

// timer function. removes 10 seconds off the clock if answer is wrong, returns to home page if time hits 0
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        quizTimer.textContent = "Time Remaining: " + timerCount + " seconds";

        if (totalTime === timerCount) {
            clearInterval(timer);
            alert("Your time is up! Returning to home screen...");
            // return user home using the handy window.location.href
            window.location.href = "index.html";
        }
    }, 1000);
};

// starts the quiz
function startQuiz() {
    // the first set of questions
    quizQuestions.textContent = questionsArray[currentQuestion].question;
    answerBtn1.textContent = questionsArray[currentQuestion].answers.a;
    answerBtn2.textContent = questionsArray[currentQuestion].answers.b;
    answerBtn3.textContent = questionsArray[currentQuestion].answers.c;
    answerBtn4.textContent = questionsArray[currentQuestion].answers.d;
    // the check answer function is then called
    checkAnswer();
};

// checks to see if the answer is correct or incorrect
function checkAnswer() {
    // targetting every answer button
    var answerBtns = document.querySelectorAll(".answer-btns");

    // a for each method to run through the questions array and check if user answer is correct
    answerBtns.forEach(userAnswer => {
        userAnswer.addEventListener("click", function (event) {
            // stores user button click as a variable, .value targets html element value attributes
            var userAnswer = event.target.value;
            // stores correct answer from questions array as variable
            var correctAnswer = questionsArray[currentQuestion].correctAnswer;
            // checks if user button click value and the correct answer are the same
            // correct or incorrect pops up, with 10 seconds taken if answer is wrong
            if (userAnswer === correctAnswer) {
                correctOrIncorrect.textContent = "// Correct!";
            } else {
                correctOrIncorrect.textContent = "// Incorrect!"
                timerCount -= 10;
            }
            nextQuestion();
            // console log was a huge help here
            // console.log(userAnswer)
            // console.log(correctAnswer);
        })
    });
};

// displaying the rest of the questions
function nextQuestion() {
    //  if user question number is above 5, go to results page and stop timer
    currentQuestion++
    if (currentQuestion >= questionsArray.length) {
        showQuiz.style.display = "none";
        resultsPage.style.display = "block";
        quizTimer.style.display = "none";
        clearInterval(timer);
        userScore.textContent = "You Scored " + timerCount + "!";
        // if not, replace text content with next question from array
    } else {
        quizQuestions.textContent = questionsArray[currentQuestion].question;
        answerBtn1.textContent = questionsArray[currentQuestion].answers.a;
        answerBtn2.textContent = questionsArray[currentQuestion].answers.b;
        answerBtn3.textContent = questionsArray[currentQuestion].answers.c;
        answerBtn4.textContent = questionsArray[currentQuestion].answers.d;
    }

    // if timer hits 0 mid-quiz
    if (timerCount < 0) {
        clearInterval(timer);
        alert("Your time is up! Returning to home screen...");
        // brings user back to quiz start if they run out of time before finishing
        window.location.href = "index.html";
    }
};

// empty array for user initials and scores to be saved locally
var highScores = [];

// push scores into array and save them locally
function saveScore() {
    submitBtn.addEventListener("click", function (event) {
        var userSavedStuff = userInitials.value + ": " + timerCount;
        highScores.push(userSavedStuff);
        highScoresList.innerHTML = userSavedStuff;
        localStorage.setItem(highScores, JSON.stringify(highScores));
        var displayScores = JSON.parse(localStorage.getItem(highScores));
        savedScores.textContent = displayScores;
        console.log(displayScores);
    })
};

saveScore();
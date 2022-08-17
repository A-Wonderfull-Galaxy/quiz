let question = document.querySelector('#question')
let scoreText = document.querySelector('#score')
let gameTime = 30;
let timeEl = document.getElementById("gameTimer");
let choices = Array.from(document.querySelectorAll('.choice-text'))
let progressText = document.querySelector('#progressText')
let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let availableQuestions = []

// var startButton = document.getElementById('start-btn');
// var nextButton = document.getElementById('next-btn');
// var questionContainer = document.getElementById('question-container');
// var timerEl = document.getElementById('timer');
// var questionElement = document.getElementById('question');
// var answerButtonsEl = document.getElementById('answer-buttons');
// var highScoreEl = document.getElementById('high-score');
// var currentScore = 0;
// var timeInterval;
// var startTime = 60;
// var timeLeft;
// let currentQuestionIndex = 0;
// var endGameContainer = document.getElementById('end-game');
// var playerInitialsEl = document.getElementById('player-initials-el');
// var endGameTextEl = document.getElementById('end-game-text');
// var endGameScoreEl = document.getElementById('end-game-subtext');


//this are the questions being used only 5 
let questions = [
    {
        question: "How do you make a question on HTML?",
        choice1: "[button][/button]",
        choice2: "<button></button>",
        choice3: ".button",
        choice4: "#button",
        answer: 2,
    },
    {
        question: "How do you make a function on Javascript?",
        choice1: "var example = function()",
        choice2: "example()",
        choice3: ".example()",
        choice4: "var example = function",

        answer: 1,
    },
    {
        question: "How do you set a var from a DOM elements?",
        choice1: "var = example = document.getID(.exmaple)",
        choice2: "var example = querySelector('#example')",
        choice3: "document.querySelector('#example')",
        choice4: "var example = document.querySelector('#example')",

        answer: 4,
    },
    {
        question: "How do you run a function?",
        choice1: "example()",
        choice2: "example.Run()",
        choice3: "()example",
        choice4: "example().run",

        answer: 1,
    },
    {
        question: "In Javascript how do you make an event for click to passover function?",
        choice1: "example ('click' , passOverExample )",
        choice2: "example.addEventListener ('click' , passOverExample() );",
        choice3: "example.addEventListener ('click' , passOverExample );",
        choice4: "example ('click' , passOverExample() )",

        answer: 3,
    }
] 

//grabs timer and to run for the page
let gameTimer = function() {
    
       
        console.log(countdown)
    }, 1000);
}

//clock function. if time ends it stops the quiz. if answer is correct then it adds time
let gameTimeStop = function (interval) {
    let gameTime = 0;
    timeEl.textContent = gameTime;
    clearInterval(interval);
}

let SCORE_POINTS = 100
let MAX_QUESTIONS = 5
//starts the game function
let startGame = function (){
    questionCounter = 0
    score = 0
    gameTime = 30
    gameTimer()
    getNewQuestion()
}

//gets question and grabs a new question randomly
let getNewQuestion = function () {
    
    questionCounter++
    
}

//function for what each choice does and either adds time of doesnt, then sees if answer is correct or false
choices.forEach(choice => {

        }, 1000)
    })
})

//worked with chris to help me out try to redo this project

//when question is correct it increments the score
incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

// function startQuiz() {

//     startTimer();

//     displayQuestion();

//     startButton.classList.add('hide');
//     questionContainer.classList.remove('hide');

// }


startGame()

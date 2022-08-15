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
    var countdown = setInterval(function () {
        timeEl.textContent = gameTime;
        gameTime--;
        if (gameTime === 0) {
            gameTimeStop(countdown);
            return window.location.assign('./');
        } else if (gameTime < 0) {
            gameTimeStop(countdown);
            timeEl.textContent = 0;
            endGame();
        }
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
    availableQuestions = [...questions]
    gameTimer()
    getNewQuestion()
}

//gets question and grabs a new question randomly
let getNewQuestion = function () {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('./saveHighScore.html')
    } 

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice (questionsIndex, 1)

    acceptingAnswers = true
}

//function for what each choice does and either adds time of doesnt, then sees if answer is correct or false
choices.forEach(choice => {
    choice.addEventListener('click', function(e) {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        let selectedChoice = e.target
        let selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 
        'incorrect'

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
            gameTime += 10
        } else {
            gameTime -= 10
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

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

// function nextQuestion() {
//     //clear the question container to prepare to append answer options
//     clearQuestionContainer();
//     currentQuestionIndex ++;
//     displayQuestion(); 
// }

// function displayQuestion() {
//       //question if current index < index length
    
//     if (currentQuestionIndex < questions.length) {
//         //show the question and answer elements
//         answerButtonsEl.classList.remove('hide');
//         questionElement.classList.remove('hide');
//         //assign question to current question index
//         let question = questions[currentQuestionIndex].question;
//         questionElement.textContent = question;
        
    
//         //loop through answer options and append them to the container
//         questions[currentQuestionIndex].answers.forEach(answer => {
//             const button = document.createElement('button');
//             button.innerText = answer.text;
//             button.classList.add('btn-answer');

    
//             //assign a string to the correct answer if it is selected
//             if (answer.correct) {
//                 button.dataset.correct = answer.correct;
//             }

//             //call select answer function if button is clicked 
//             button.addEventListener('click', selectAnswer);

    
//             answerButtonsEl.appendChild(button);
//       })
//     }
//         else {
//             endGame(highScoreObj);
//         }
// }

startGame()

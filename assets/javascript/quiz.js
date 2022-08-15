const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')

//lets the timer be 30 seconds
let gameTime = 30;
//apends the clock to the page
var timeEl = document.getElementById("gameTimer");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

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
function gameTimer() {
    var countdown = setInterval(function () {
        timeEl.textContent = gameTime;
        gameTime--;
        if (gameTime === 0) {
            gameTimeStop(countdown);
            return window.location.assign('./saveHighScore.html');
        } else if (gameTime < 0) {
            gameTimeStop(countdown);
            timeEl.textContent = 0;
            endGame();
        }
        console.log(countdown)
    }, 1000);
}

//clock function. if time ends it stops the quiz. if answer is correct then it adds time
function gameTimeStop(interval) {
    let gameTime = 0;
    timeEl.textContent = gameTime;
    clearInterval(interval);
}

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

//starts the game function
startGame = () =>{
    questionCounter = 0
    score = 0
    gameTime = 30
    availableQuestions = [...questions]
    gameTimer()
    getNewQuestion()
}

//gets question and grabs a new question randomly
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('./saveHighScore.html')
    } 

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    
    const questionsIndex = availableQuestions.length)
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
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 
        'incorrect'

        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
            gameTime += 10
        } else {
            //
            gameTime -= 10
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

//when question is correct it increments the score
incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()

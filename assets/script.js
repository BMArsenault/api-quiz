// VARS & CONST

const question = document.getElementById('questionText');
const answers = Array.from(document.getElementsByClassName('btn-answer'));
const correctAnswerBonus = 10;
// const incorrectAnswer = -:10 seconds



var startButtonEl = document.querySelector('#btn-game')
var currentQuestionIndex = 0;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];
var timer = 60;

// Questions

const questions = [
{
    question: "Write a question in here",
    choices: [
        "Choice number 1",
        "Choice number 2",
        "Choice number 3",
        "Choice number 4",
    ],
    answer:  "Choice number 2"
},
{
    question: "Write a question in here 2",
    choices: [
        "Choice number 1",
        "Choice number 2",
        "Choice number 3",
        "Choice number 4",
    ],
    answer:  "Choice number 3"
},
{
    question: "Write a question in here 3",
    choices: [
        "Choice number 1",
        "Choice number 2",
        "Choice number 3",
        "Choice number 4",
    ],
    answer:  "Choice number 1"
},
{
    question: "Write a question in here 4",
    choices: [
        "Choice number 1",
        "Choice number 2",
        "Choice number 3",
        "Choice number 4",
    ],
    answer:  "Choice number 4"
},
{
    question: "Write a question in here 5",
    choices: [
        "Choice number 1",
        "Choice number 2",
        "Choice number 3",
        "Choice number 4",
    ],
    answer:  "Choice number 2"
},
{
    question: "Write a question in here 6",
    choices: [
        "Choice number 1",
        "Choice number 2",
        "Choice number 3",
        "Choice number 4",
    ],
    answer:  "Choice number 2"
}
]


// start game

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    timer = 60;
};


// Funcs
function creatCurrentQuestion() {

    // start timer

    // check if questions weren't skipped
    if (currentQuestionIndex < questions.length) {
    //    console.log(question[currentQuestionIndex])
    }
}

function handleClick () {
    console.log("clicked");

    creatCurrentQuestion();
}
function main () {
//add start click event listener
startButtonEl.addEventListener('click', handleClick);
}
// start

// click

// show first question
// if more questions
   //next question (creat question element)

// else
   // show score on high score page
   // save score to local storage



// attributes to timer
// var timer = 60
// var countdown = function (){
//     console.log(timer);
//     timer--;
//         if(timer === 0){
//             console.log("Time is up!");
//         }
// }
startGame ();
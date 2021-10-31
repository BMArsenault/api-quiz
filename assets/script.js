// VARS & CONST

const question = document.getElementById('questionText');
const answers = Array.from(document.getElementsByClassName('btn-answer'));
const correctAnswerBonus = 10;
// const incorrectAnswer = -:10 seconds


var startButtonEl = document.querySelector('#btn-game')
// start game at first question
var currentQuestion = 0;
// score to start at 0
var score = 0;

var questionCounter = 0;
// check available questions
let availableQuestions = [];
// timer at 60 seconds
// var timer = 60;

// Questions

const questions = [
{
    question: "Inside which HTML element do we put the JavaScript?",
    choices: [
        "<js>",
        "<scripting>",
        "<script>",
        "<javascript",
    ],
    answer:  3
},
{
    question: "What is meant by 'this' keyword in JavaScript",
    choices: [
        "It refers current object",
        "it refers previous object",
        "It is a variable which contains value",
        "None of the above",
    ],
    answer:  1
},
{
    question: "What are variables used for in JavaScript Programs?",
    choices: [
        "Storing numbers, dates, or other values",
        "Varying randomly",
        "Causing high-school algebra flashbacks",
        "None of the above",
    ],
    answer:  1
},
{
    question: "Which of the following is not JavaScript Data Types?",
    choices: [
        "Undefined",
        "Number",
        "Boolean",
        "Float",
    ],
    answer:  4
},
{
    question: "What are the types of Pop up boxes available in JavaScript?",
    choices: [
        "Alert",
        "Prompt",
        "Confirm",
        "All of the above",
    ],
    answer:  4
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
    // timer = 60 - 1 second;
    // get current question
    createNewQuestion();
};


// Funcs

function createNewQuestion() {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() = availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;

answers.forEach(answer => {
    const number = choice.answer['number'];
    choice.innerText = currentQuestion['Answer' + number];
})
};

// delete recently asked question from future question asked

availableQuestions.splice(questionIndex, 1);

// allow answer to be true




    // start timer

    // check if questions weren't skipped
    // if (currentQuestionIndex < questions.length) {
    //    console.log(question[currentQuestionIndex])
    // }

// function handleClick () {
//     console.log("clicked");

//     createNewQuestion();
// }
// function main () {
// //add start click event listener
// startButtonEl.addEventListener('click', handleClick);
// }
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
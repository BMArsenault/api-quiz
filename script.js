// VARS & CONST

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('btn-text'));
const correctAnswerBonus = 10;
const maxQuestions = 5;




// var startButtonEl = document.querySelector('#btn-game')
// start game at first question
var currentQuestion = 0;

// correct answer is true
var acceptingAnswers = true;

// score to start at 0
var score = 0;

var questionCounter = 0;
// check available questions

var availableQuestions = [];

// Questions

const questions = [
{
    question: "Inside which HTML element do we put the JavaScript?",
    choice1: "<js>",
    choice2: "<scripting>",
    choice3: "<script>",
    choice4: "<javascript",
    answer:  3
},
{
    question: "What is meant by 'this' keyword in JavaScript",
    choice1: "It refers current object",
    choice2: "it refers previous object",
    choice3: "It is a variable which contains value",
    choice4: "None of the above",
    answer:  1
},
{
    question: "What are variables used for in JavaScript Programs?",
    choice1: "Storing numbers, dates, or other values",
    choice2: "Varying randomly",
    choice3: "Causing high-school algebra flashbacks",
    choice4: "None of the above",
    answer:  1
},
{
    question: "Which of the following is not JavaScript Data Types?",
    choice1: "Undefined",
    choice2: "Number",
    choice3: "Boolean",
    choice4: "Float",
    answer:  4
},
{
    question: "What are the types of Pop up boxes available in JavaScript?",
    choice1: "Alert",
    choice2: "Prompt",
    choice3: "Confirm",
    choice4: "All of the above",
    answer:  4
},
]

// added timer to start at beginning of quiz
var timeleft = 45;
var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        alert("You are out of time!");
        window.location.assign("/");
    }
    document.getElementById("progressBar").value = 45 - timeleft;
    timeleft -= 1;
    if(selectedAnswer === 'incorrect'){
        (timeleft - 10);
    }

}, 1000);


// start game

startGame = () => {
    
    questionCounter = 0;
    score = 0;
    // show next available question
    availableQuestions = [...questions];
    // get new question
    createNewQuestion();
};


// Funcs
// enter most recent score into local storage
createNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem('mostRecentScore', score);
    return window.location.assign("/end.html");
}
// grab following questions in random order
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = availableQuestions[questionIndex];
        question.innerText = currentQuestion.question;
// attach choices with each question
    choices.forEach((choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    }));
    //remove recently asked question
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};
// add event listener for answers
choices.forEach(choice => {
    choice.addEventListener("click", (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
// applying red or green class for correct or incorrect answers
        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
            
        selectedChoice.parentElement.classList.add(classToApply);
// set timer for color to disappear after a certain amount of time before showing next question
        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            createNewQuestion();
        }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;

};


startGame ();
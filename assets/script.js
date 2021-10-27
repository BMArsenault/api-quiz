// VARS
var startButtonEl = document.querySelector('#btn-game')
var currentQuestionIndex = 0;

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



// Questions

// const question = [
// {
//     question: "Write a question in here",
//     choices: [
//         "Choice number 1",
//         "Choice number 2",
//         "Choice number 3",
//         "Choice number 4",
//     ],
//     answer:  "Choice number 3"
// },
// {
//     question: "Write a question in here",
//     choices: [
//         "Choice number 1",
//         "Choice number 2",
//         "Choice number 3",
//         "Choice number 4",
//     ],
//     answer:  "Choice number 3"
// },
// {
//     question: "Write a question in here",
//     choices: [
//         "Choice number 1",
//         "Choice number 2",
//         "Choice number 3",
//         "Choice number 4",
//     ],
//     answer:  "Choice number 3"
// },
// {
//     question: "Write a question in here",
//     choices: [
//         "Choice number 1",
//         "Choice number 2",
//         "Choice number 3",
//         "Choice number 4",
//     ],
//     answer:  "Choice number 3"
// },
// {
//     question: "Write a question in here",
//     choices: [
//         "Choice number 1",
//         "Choice number 2",
//         "Choice number 3",
//         "Choice number 4",
//     ],
//     answer:  "Choice number 3"
// },
// {
//     question: "Write a question in here",
//     choices: [
//         "Choice number 1",
//         "Choice number 2",
//         "Choice number 3",
//         "Choice number 4",
//     ],
//     answer:  "Choice number 3"
// }
// ]
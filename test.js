//             $questions = $('questions');

//             $questions.hide();

//             $($question.get(currentQuest)).fadeOut(function () {

//                 currentQuestion = currentQuest + 1;

//                 if (currentQuest == totalQuest) {
//                     var result = numcorrect()
//                     alert(result);
//                 }
//                 $(question.get(currentQuestion)).fadeIn();

//             })
//             console.log("quiz")
//             console.log("showResults")
//         }
//     }   
//         )
//     //
//     function showResults() {

//         // puts together the info
//         const answerContainers = quizContainer.querySelectorAll('.answers');

//         // correct answers
//         let numCorrect = 0;

//         theQuestions.forEach((currentQuestion, questionNumber) => {

//             // find selected answer
//             const answerContainer = answerContainers[questionNumber];
//             const selector = `input[name = question'${questionNumber}]': checked`;
//             const userAnswer = (answerContainer.querySelector(selector) || {}).value;

//             //Correct answer gets added to total of correct answers
//             if (userAnswer === currentQuestion.correctAnswer) {
//                 numCorrect++;

//                 // correct  color light green
//                 answerContainers[questionNumber].style.color = 'lightgreen';
//             }
//             else {
//                 //incorrect color pink
//                 answerContainers[questionNumber].style.color = 'pink';
//             }
//         });

//         // number of correct answers
//         resultsContainer.innerHTML = `${ numCorrect } out of ${ theQuestions.length }`;
//     }

//     (function () {
//         var sec = 60;
//         function startTimer() {
//             console.log('timer suppose to go')
//             var timer = setInterval(function () {
//                 sec--;
//                 document.getElementById('timerDisplay').innerHTML = '00:' + sec;
//                 if (sec < 0) {
//                     clearInterval(timer);
//                     alert("Time is up!")
//                 }
//             }, 1000);
//         }
//         document.getElementById('startQuiz').addEventListener('click', function () {
//             sec -= 5;
//             document.getElementById('timerDisplay').innerHTML = '00:' + sec;
//         });
//         startTimer();
//     });

// }
// quiz();
// const startButton = document.getElementById('start-btn')

// startButton.addEventlistener('click', startGame)

// function startGame(){

//     startButton.classList.add('hide')

// }

// function nextQuestion(){

// }

// function selectAnswer(){

// }

// CSS
// .body{
//background-color: white;
// }
// body.correct{
//     background-color: green;
//  }

//  body.wrong {
//      background-color: red;
//  }
//variables
var incorrect = "";
var quiz;
var quizContainer = "";
var resultsContainer = "";
var output = "";
var question;
var answer;
var correctAnswer;
var theQuestions = [
    // Questions list in an array
    {
        question: "Java and Javascript the same language?",
        answers: {
            a: 'True',
            b: 'False',
            c: 'Some of it is the same'
        },
        correctAnswer: 'a'
    },
    {
        question: "What web browser does not support Javascript?",
        answers: {
            a: 'Lynx',
            b: 'Konqueror',
            c: 'Opera',
        },
        correctAnswer: 'a'
    },

    {
        question: "What does NaN stand for in Javascript?",
        answers: {
            a: 'NewandNeccesary',
            b: 'NotaNumber',
            c: 'None of the above',
        },
        correctAnswer: 'b'
    },

    {
        question: "What name was Javascript developed under?",
        answer: {
            a: 'Ella',
            b: 'SnowMan',
            c: 'Mocha',
        },
        correctAnswer: 'c'
    },

    {
        question: "Who built Javascript?",
        answer: {
            a: 'Steve Jobs',
            b: 'Brendan Eich',
            c: 'Bill Gates',
        },
        correctAnswer: 'b'
    },

    {
        question: "How long did it take to create Javascript?",
        answer: {
            a: '10 days',
            b: '30 days',
            c: '20 days',
        },
        correctAnswer: 'a'
    },

    {
        question: "Where did the creater of Javascript work?",
        answer: {
            a: 'Microsoft',
            b: 'Netscape',
            c: 'Mozilla',
        },
        correctAnswer: 'b'
    },

    {
        question: "Javascript was developed in what year?",
        answer: {
            a: '1997',
            b: '1996',
            c: '1995',
        },
        correctAnswer: 'c'
    },

    {
        question: "Does Javascript have a integer data type?",
        answer: {
            a: 'True',
            b: 'False',
            c: 'Maybe',
        },
        correctAnswer: 'b'
    },

    {
        question: "What symbols do you use to make arrays?",
        answer: {
            a: '{}',
            b: '||',
            c: '[]',
        },
        correctAnswer: 'c'
    },
];

function quiz() {
    // stores the HTML output
    const output = "";

    // helps display questions
    theQuestions.forEach(
        (currentQuestion, question => {

            // pulls answers
            const answers = [];

            for (letter in currentQuestion.answers) {

                // add radio button to push for the answer
                answers.push(
                    `<label>
              <input type="radio" name="question${question}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                );
                const newLocal = quizContainer.innerHTML = output.join("");
            }

            //The questions will fade in and fade out one question at a time
            var totalQuestions = $('question').size();
            var currentQuestion = 0;

            $questions = $('questions');

            $questions.hide();

            $($question.get(currentQuestion)).fadeOut(function () {

                currentQuestion = currentQuestion + 1;

                if (currentQuestion == totalQuestions) {
                    var result = numcorrect()
                    alert(result);
                }
                $(question.get(currentQuestion)).fadeIn();
            })

        }
        )
    )

    //
    function showResults() {

        // puts together the info
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // correct answers
        let numCorrect = 0;

        theQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question'${questionNumber}]':checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            //Correct answer gets added to total of correct answers
            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;

                // correct  color light green
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            else {
                //incorrect color pink
                answerContainers[questionNumber].style.color = 'pink';
            }
        });

        // number of correct answers
        resultsContainer.innerHTML = `${numCorrect} out of ${theQuestions.length}`;
    }


    //The loop for the Questions
    function theQuestions(currentQuestion, questionNumber) {
        const answers = [];

        for (letter in currentQuestion.answers) {

            // radio button
            answers.push(
                `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
            );
        }

        // add this question and its answers to the output
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join('')} </div>`
        );

    };

    (function () {
        var sec = 60;
        function startTimer() {
            console.log('timer suppose to go')
            var timer = setInterval(function () {
                sec--;
                document.getElementById('timerDisplay').innerHTML = '00:' + sec;
                if (sec < 0) {
                    clearInterval(timer);
                    alert("Time is up!")
                }
            }, 1000);
        }
        document.getElementById('startQuiz').addEventListener('click', function () {
            sec -= 5;
            document.getElementById('timerDisplay').innerHTML = '00:' + sec;
        });
        startTimer();
    });

}




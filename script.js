const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionCont = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerBtns = document.getElementById('answer-btns')


let randomQuestions, currentQuestion


startBtn.addEventListener('click', startGame)

nextBtn.addEventListener('click', () => {
    currentQuestion++
    NextQuest()
})


function showWords() {
    questionEl.innerText = startWords.StartWords
}

function startGame() {
    console.log('started')//it worked at this point
    startBtn.classList.add("hide")
    //next line helps to randomize a question sorts them with math random
    randomQuestions = questions.sort(() => Math.random() - .5)
    //starts out on the first question of the question array
    currentQuestion = 0
    //puts questions back into the array
    questionCont.classList.remove('hide')
    nextBtn.classList.remove('hide')
    NextQuest()
}


//brings up the next question and resets the screen for the next question
function NextQuest() {
    document.getElementById("answer-btns").innerHTML = "";
    document.getElementById("question").innerHTML = "";
    //states the status of the  question that needs to be reset when bringing up the next question.
    showQuest(randomQuestions[currentQuestion]);

}
// shows the questions and creates the answer buttons in the JS
function showQuest(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const btn = document.createElement('answerBtns')
        btn.innerText = answer.text
        btn.classList.add('answerBtns')
        if (answer.correct) {
            btn.dataset.correct = answer.correct
        }
        btn.addEventListener('click', selectAnswer)
        answerBtns.appendChild(btn)
    });
}
//suppose to place questions in the array in the answer slots
function resetState() {
    clearStatusClass(document.body);
    // nextBtn.classList.add('hide')
    if (answerBtns.firstChild) {
        answerBtns.removeChild
            (answerBtns.nextChild)
    }
}
// //fine
function selectAnswer(e) {
    const selectedBtn = e.target

    if (correct) {
        if (randomQuestions.length > currentQuestion + 1) {
            nextBtn.classList.remove('hide');
        } else {
            stopBtn.classList.remove('hide');
        }

    }
}

//document.getElementById(correct, "true");


{
    console.log("This answer is correct!!!")

}


const questions = [
    // Questions list in an array
    {
        question: "Java and Javascript the same language?",
        answers: [
            { text: "a. True", correct: true },
            { text: "b. False", correct: false },
            { text: "c. They are languages spoken on planet Mars.", correct: false },
            { text: "d. They are types of coffee", correct: false },
        ]
    },

    {
        question: "What web browser does not support Javascript?",
        answers: [
            { text: 'a. Konqueror', correct: false },
            { text: 'b. Supercalifragilisticexpialidocious', correct: false },
            { text: 'c. Opera', correct: false },
            { text: 'd. Lynx', correct: true },
        ],
    },

    {
        question: "What does NaN stand for in Javascript?",
        answers: [
            { text: 'a. New and Neccesary', correct: false },
            { text: 'b. Not a Number', correct: true },
            { text: 'c. Nearby and Narrow-minded', correct: false },
            { text: 'd. None of the above', correct: false },
        ]
    },

    {
        question: "What name was Javascript originally developed under?",
        answers: [
            { text: 'a. Chai', correct: false },
            { text: 'b. Matcha', correct: false },
            { text: 'c. Latte', correct: true },
            { text: 'd. Mocha', correct: false },
        ],
    },

    {
        question: "Who built Javascript?",
        answers: [
            { text: 'a. Spider Man', correct: false },
            { text: 'd. Steve Jobs', correct: true },
            { text: 'b. Brendan Eich', correct: false },
            { text: 'c. Bill Gates', correct: false },
        ],
    },

    {
        question: "How long did it take to create Javascript?",
        answers: [
            { text: 'a. 10 days', correct: true },
            { text: 'b. 30 days', correct: false },
            { text: 'c. 90 days', correct: false },
            { text: 'd. 20 days', correct: false },
        ],
    },

    {
        question: "Where did the creater of Javascript work?",
        answers: [
            { text: 'a. Microsoft', correct: false },
            { text: 'b. Netscape', correct: true },
            { text: 'c. Mozilla', correct: false },
            { text: 'd. McDonalds', correct: false },
        ],
    },

    {
        question: "Javascript was developed in what year?",
        answers: [
            { text: 'a. 1997', correct: false },
            { text: 'b. 1996', correct: false },
            { text: 'c. 1995', correct: true },
            { text: 'd. 1994', correct: false },
        ],
    },

    {
        question: "Does Javascript have a integer data type?",
        answers: [
            { text: 'a. True', correct: false },
            { text: 'b. Maybe', correct: false },
            { text: 'c. False', correct: true },
            { text: 'd. The integer might date a data if they are the right type.', correct: false },
        ],
    },

    {
        question: "What symbols do you use to make arrays?",
        answers: [
            { text: 'a. {}', correct: false },
            { text: 'b. ||', correct: false },
            { text: 'c. //', correct: false },
            { text: 'd. ++', correct: true },
        ],
    },

]

var timer = 60;
var loadTimer = setInterval(function () {
    if (timer <= 0) {
        clearInterval(loadTimer);
        document.getElementById("timed").innerHTML = "Times up!!!";
    } else {
        document.getElementById("timed").innerHTML = timer + " Seconds Remaining";
    }
    timer -= 1;
}, 1000);
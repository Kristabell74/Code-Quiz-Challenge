const startBtn = document.getElementById('start-btn');
const nxtBtn = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerBtns = document.getElementById('answer-btns')


// const stopBtn = document.getElementById('stop-btn');

// const goBtn = document.getElementById('goBtn');

// const startMsg = document.getElementById ('startMsg')

// const tryBtn = document.getElementById('')

let randomQuestions, currentQuestion


startBtn.addEventListener('click', startGame)

// nextBtn.addEventListener('click', () => {
//     currentQuestion++
//     NextQuestion()
// })
// stopBtn.addEventListener('click',()=>{
//     window.close()
// })

// goBtn.addEventListener("click", NextQuestion)
// function showWords (startWords){
//     questionElement.innerText = startWords.StartWords
//}

function startGame() {
    console.log('started')//it worked at this point
    startBtn.classList.add("hide")
    //next line helps to randomize a question sorts them with math random
    randomQuestions = questions.sort(() => Math.random() - .5)
    //starts out on the first question of the question array
    currentQuestion = 0
    questionContainer.classList.remove('hide')
    NextQuestion()
}


//brings up the next question and resets the screen for the next question
function NextQuestion() {
    //states the status of the  question that needs to be reset when bringing up the next question.
    //RESET STATE() MAKES QUESTIONS DISSAPEAR
    //resetState();
    showQuestion(randomQuestions[currentQuestion]);

}
// //fine
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const btn = document.createElement('btn')
        btn.innerText = answer.text
        btn.classList.add('btn')
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
    nextBtn.classList.add('hide')
    if (answerBtns.firstChild) {
        answerBtns.removeChild
            (answerBtns.nextChild)
    }
}
// //fine
function selectAnswer(e) {
    // const selectedBtn = e.target
    // const correct = selectedBtn.dataset.correct
    // setStatusClass(document.body, correct)
    // Array.from(answerBtns.children).forEach(bt => {
    //     setStatusClass(btn, btn.dataset.correct)
    // })
    // if (correct) {
    //     if (randomQuestions.length > currentQuestion + 1) {
    //         nextBtn.classList.remove('hide');
    //     } else {
    //         stopBtn.classList.remove('hide');
    //     }
    // } else {
    //     goBtn.classList.add('hide');
}


//     function setStatusClass(element, correct) {
//         clearStatusClass(element)
//         if (correct) {
//             element.classList.add('correct')
//         } else {
//             element.classList.add('wrong')
//         }
//     }


const questions = [
    // Questions list in an array
    {
        question: "Java and Javascript the same language?",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false },
            { text: "They are both languages spoken on planet Mars.", correct: false },
            { text: "They are types of coffee", correct: false },
        ]
    },

    //     {
    //         question: "What web browser does not support Javascript?",
    //         answers: [
    //             { text: '1. Konqueror', correct: false },
    //             { text: '2. Supercalifragilisticexpialidocious', correct: false },
    //             { text: '3. Opera', correct: false },
    //             { text: '4. Lynx', correct: true },
    //         ],
    //     },

    //     {
    //         question: "What does NaN stand for in Javascript?",
    //         answers: [
    //             { text: 'a. New and Neccesary', correct: false },
    //             { text: 'b. Not a Number', correct: true },
    //             { text: 'c. Nearby and Narrow-minded', correct: false },
    //             { text: 'd. None of the above', correct: false },
    //         ]
    //     },

    //     {
    //         question: "What name was Javascript originally developed under?",
    //         answers: [
    //             { text: 'a. Ella', correct: false },
    //             { text: 'b. SnowMan', correct: false },
    //             { text: 'c. Latte', correct: true },
    //             { text: 'd. Mocha', correct: false },
    //         ],
    //     },

    //     {
    //         question: "Who built Javascript?",
    //         answers: [
    //             { text: 'a. Super Man', correct: false },
    //             { text: 'd. Steve Jobs', correct: true },
    //             { text: 'b. Brendan Eich', correct: false },
    //             { text: 'c. Bill Gates', correct: false },
    //         ],
    //     },

    //     {
    //         question: "How long did it take to create Javascript?",
    //         answers: [
    //             { text: 'a. 10 days', correct: true },
    //             { text: 'b. 30 days', correct: false },
    //             { text: 'c. 90 days', correct: false },
    //             { text: 'd. 20 days', correct: false },
    //         ],
    //     },

    //     {
    //         question: "Where did the creater of Javascript work?",
    //         answers: [
    //             { text: 'a. Microsoft', correct: false },
    //             { text: 'b. Netscape', correct: true },
    //             { text: 'c. Mozilla', correct: false },
    //             { text: 'd. McDonalds', correct: false },
    //         ],
    //     },

    //     {
    //         question: "Javascript was developed in what year?",
    //         answers: [
    //             { text: 'a. 1997', correct: false },
    //             { text: 'b. 1996', correct: false },
    //             { text: 'c. 1995', correct: true },
    //             { text: 'd. 1994', correct: false },
    //         ],
    //     },

    //     {
    //         question: "Does Javascript have a integer data type?",
    //         answers: [
    //             { text: 'a. True', correct: false },
    //             { text: 'b. Maybe', correct: false },
    //             { text: 'c. False', correct: true },
    //             { text: 'd. NULL', correct: false },
    //         ],
    //     },

    //     {
    //         question: "What symbols do you use to make arrays?",
    //         answers: [
    //             { text: 'a. {}', correct: false },
    //             { text: 'b. ||', correct: false },
    //             { text: 'c. //', correct: false },
    //             { text: 'd. []', correct: true },
    //         ],
    //     },
    // 
]
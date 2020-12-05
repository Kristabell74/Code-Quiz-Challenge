const startButton = document.getElementById('start-btn')

const nextButton = document.getElementById('next-btn')

const questionContainer = document.getElementById('question-container')

const questionElement = document.getElementById('question')

const answerButtons = document.getElementById('answer-buttons')

const nextQuestion = document.getElementById('question')

const currentQuestion = document.getElementById('question')

const showQuestions = document.getElementById('question')

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})

function startGame() {
    console.log('started')
    startButton.classList.add('hide')

    //Starts the Questions from the beginning

    currentQuestion = (i = 0; i < index; i++) {
        // hides the previous question
        questionContainer.classList.remove('hide')
        nextQuestion();

    }

    function nextQuestion() {
        showQuestions(questions[currentQuestion])

    }

    function showQuestions(question) {
        questionElement.innerText = question.question
        question.answers.ForEach(answer => {

            const button = document.createElement('button')

            button.innerText = answer.text
            button.classList.add('btn')

            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
            button.addEventListener('click', selectAnswer)
            answerButtons.appendChild(button)
        })
    }

    function resetQuiz() {
        nextButton.classList.add('hide')

        while (answerButtons.firstChild) {
            answerButtons.removeChild
                (answerButtons.firstChild)
        }


        function selectAnswer() {
            const correct = selectedButton.dataset.correct
            setStatusClass(document.body, correct)
            Array.from(answerButtons.children).forEach(button => {
                setStatusClass(button, button.dataset.correct)
            })
            if (Questions.length > currentQuestionIndex + 1) {
                nextButton.classList.remove('hide')
            } else {
                startButton.innerText = 'Restart'
                startButton.classList.remove('hide')
            }

        }

        function setStatusClass(element, correct) {
            clearStatusClass(element)
            if (correct) {
                element.classList.add('correct')
            } else {
                element.classList.add('wrong')
            }

        }
        function clearStatusClass(element) {
            element.ClassList.remove('correct')
            element.classList.remove('wrong')
        }

        const questions = [
            // Questions list in an array
            {
                question: "Java and Javascript the same language?",
                answers: [
                    { text: "True", correct: true },
                    { text: "False", correct: false },
                    { text: "Some of it is the same", correct: false },
                    { text: "They are types of coffee", correct: false },
                ]
            },

            {
                question: "What web browser does not support Javascript?",
                answers: [
                    { text: '1. Konqueror', correct: false },
                    { text: '2. Supercalifragilisticexpialidocious', correct: false },
                    { text: '3. Opera', correct: false },
                    { text: '4. Lynx', correct: true },
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
                    { text: 'a. Ella', correct: false },
                    { text: 'b. SnowMan', correct: false },
                    { text: 'c. Latte', correct: true },
                    { text: 'd. Mocha', correct: false },
                ],
            },

            {
                question: "Who built Javascript?",
                answers: [
                    { text: 'a. Super Man', correct: false },
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
                    { text: 'd. NULL', correct: false },
                ],
            },

            {
                question: "What symbols do you use to make arrays?",
                answers: [
                    { text: 'a. {}', correct: false },
                    { text: 'b. ||', correct: false },
                    { text: 'c. //', correct: false },
                    { text: 'd. []', correct: true },
                ],
            },
        ]
    }
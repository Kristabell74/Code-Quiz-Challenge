function generateQuiz(questions, timer, counter, quizContainer, resultsContainer, submitButton) {

    //code
}

function showQuestions(questions, quizContainer) {
    //stores the output and answers
    var output = [];
    var answers;
}

function showResults(questions, quizContainer, resultsContainer) {

    var answerContainers = quizContainer.querySelectorAll('.answers');

    var userAnswer = '';
    varnumcorrect = 0;
}
for (var i = o; i < questions.length; i++) {

    userAnswer = (answerContainers[i].querySelectorAll('input[name=question' + i + ']:checked') || {}).value;

    if (UserAnswer === questions[i].correctAnswer) {

        numCorrect++;


        answerContainers[i].style.color = 'purple';

    }

    else {

        answerContainers[i].style.color = 'Orange';

    }
}
resultsContainer.innerHtml = numCorrect + 'out of' + questions.length;

//Quiz Questions
showQuestions(questions, quizContainer);


//push button for results. A place for the results

submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
}

// Questions list 

var theQuestions = [

    {
        question: 'What day is it',
        answers: {
            a: 'Monday',
            b: 'Tuesday',
            c: 'Thursday',

        },
        correctAnswer: 'c'
    },
    {
        question: "what is computers?",
        answers: {

            a: 'triple',
            b: 'drink',
            c: 'pie',
        },
        correctAnswer: 'c'
    },
    {
        question: "what is computers?",
        answers: {

            a: 'triple',
            b: 'drink',
            c: 'pie',
        },
        correctAnswer: 'c'
    },
    {
        question: "what is computers?",
        answers: {

            a: 'triple',
            b: 'drink',
            c: 'pie',
        },
        correctAnswer: 'c'
    },
    {
        question: "what is computers?",
        answers: {

            a: 'triple',
            b: 'drink',
            c: 'pie',
        },
        correctAnswer: 'c'
    },
    {
        question: "what is computers?",
        answers: {

            a: 'triple',
            b: 'drink',
            c: 'pie',
        },
        correctAnswer: 'c'
    },
    {
        question: "what is computers?",
        answers: {

            a: 'triple',
            b: 'drink',
            c: 'pie',
        },
        correctAnswer: 'c'
    },
    {
        question: "what is computers?",
        answers: {

            a: 'triple',
            b: 'drink',
            c: 'pie',
        },
        correctAnswer: 'c'
    },
    {
        question: "what is computers?",
        answers: {

            a: 'triple',
            b: 'drink',
            c: 'pie',
        },
        correctAnswer: 'c'
    },
    {
        question: "what is computers?",
        answers: {

            a: 'triple',
            b: 'drink',
            c: 'pie',
        },
        correctAnswer: 'c'
    },






]
//A timer
//A Counter
//A Submit Button
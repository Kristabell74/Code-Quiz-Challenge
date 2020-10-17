function generateQuiz(question, timer, quizContainer, resultsContainer, submitButton) {

    function showQuestion(question, quizContainer) {
        //stores the output and answers

        var question;
        var wrongAnswer;
        var button;
        var correctAnswer;
        var resultsContainer;
        var timer;


        quizContainer.innerHTML = output.join('');
    }
    function showResults(question, quizContainer, resultsContainer) {

        var answerContainers = quizContainer.querySelectorAll('.answer');

        //User answer to question
        var userAnswer = '';
        //Stores number of correct answers
        var numcorrect = (i);
    }

    for (var i = o; i < question.length; i++) {

        userAnswer = (ansContainers[i].querySelectorAll('input[name=question' + i + ']:checked') || {}).value;

        if (UserAnswer === question[i].correctAnswer) {

            numCorrect++;

            // in answer correct purple
            answerContainers[i].style.color = 'purple';

        }

        else {
            //if answer incorrect orange
            answerContainers[i].style.color = 'Orange';

        }
    }
    resultsContainer.innerHtml()
    for (var i = o; i <)
        if (numberCorrect.isAuthenticated(funtion + output());

    //Quiz Questions
    showQuestion(question, quizContainer); {


    }


    //push button for results. A place for the results

    submitButton.onclick = function () {
        showResults(quest, quizContainer, resultsContainer);
    }

        //Timer with a way to subtract when the answer is incorrect
        (function () {
            //How much time for quiz
            var sec = 60;
            function startTimer() {
                var timer = setInterval(function () {
                    sec--;
                    //Start time
                    document.getElementById('timerDisplay').innerHTML = '00:' + sec;
                    if (sec < 0) {
                        clearInterval(timer);
                        alert("Time is up!")
                    }
                }, 1000);
            }
            //timer dislay
            document.getElementById('incorrect').addEventListener('click', function () {
                sec -= 5;
                document.getElementById('timerDisplay').innerHTML = '00:' + sec;
            });
            startTimer();
        })();


    // Questions list 
    var Quest = [
        {
            quest: "Java and Javascript the same language?",
            ans: {
                a: 'True',
                b: 'False',
                c: 'Some of it is the same',

            },
            correctAns: 'a'
        },
        {
            quest: "What web browser does not support Javascript?",
            ans: {

                a: 'Lynx',
                b: 'Konqueror',
                c: 'Opera',
            },
            correctAns: 'a'
        },
        {
            quest: "What does NaN stand for in Javascript?",
            ans: {

                a: 'NewandNeccesary',
                b: 'NotaNumber',
                c: 'None of the above',
            },
            correctAns: 'b'
        },
        {
            quest: "What name was Javascript developed under?",
            ans: {

                a: 'Ella',
                b: 'SnowMan',
                c: 'Mocha',
            },
            correctAns: 'c'
        },
        {
            quest: "who built Javascript?",
            ans: {

                a: 'Steve Jobs',
                b: 'Brendan Eich',
                c: 'Bill Gates',
            },
            correctAns: 'b'
        },
        {
            quest: "How long did it take to create Javascript?",
            ans: {

                a: '10 days',
                b: '30 days',
                c: '20 days',
            },
            correctAns: 'a'
        },
        {
            quest: "Where did the creater of Javascript work?",
            ans: {

                a: 'Microsoft',
                b: 'Netscape',
                c: 'Mozilla',
            },
            correctAns: 'b'
        },
        {
            quest: "Javascript was developed in what year?",
            ans: {

                a: '1997',
                b: '1996',
                c: '1995',
            },
            correctAns: 'c'
        },
        {
            quest: "Does Javascript have a integer data type?",
            ans: {

                a: 'True',
                b: 'False',
                c: 'Maybe',
            },
            correctAns: 'b'
        },
        {
            quest: "What symbols do you use to make arrays?",
            ans: {

                a: '{}',
                b: '||',
                c: '[]',
            },
            correctAns: 'c'
        },




        //Click button and get it to push into the numcorrect storage
        $(".a-button").on("click", function () {
            audioElement.answer(); Push.numCorrect
            if (correct)
            
        });

    $(".b-button").on("click", function () {
        audioElement.answer();

        $(".c-button").on("click", function () {
            audioElement.answer();
        });


    ]
    }


//A Counter
//A Submit Button
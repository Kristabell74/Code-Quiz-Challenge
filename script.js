//Variables
var pos = 0;
var correct = 0;
var quiz;
var quiz_status;
var question;
var answer;
var choices;
var chA, chB, chC;
var questions = [
    // Questions list in an array
    {
        question: "Java and Javascript the same language?",
        a: 'True',
        b: 'False',
        c: 'Some of it is the same',

        answer: 'a'
    },
    {
        question: "What web browser does not support Javascript?",
        a: 'Lynx',
        b: 'Konqueror',
        c: 'Opera',
        answer: 'a'
    },
    {
        question: "What does NaN stand for in Javascript?",
        a: 'NewandNeccesary',
        b: 'NotaNumber',
        c: 'None of the above',
        answer: 'b'
    },
    {
        question: "What name was Javascript developed under?",
        a: 'Ella',
        b: 'SnowMan',
        c: 'Mocha',
        answer: 'c'
    },
    {
        question: "Who built Javascript?",

        a: 'Steve Jobs',
        b: 'Brendan Eich',
        c: 'Bill Gates',
        answer: 'b'
    },
    {
        question: "How long did it take to create Javascript?",
        a: '10 days',
        b: '30 days',
        c: '20 days',
        answer: 'a'
    },
    {
        question: "Where did the creater of Javascript work?",
        a: 'Microsoft',
        b: 'Netscape',
        c: 'Mozilla',
        answer: 'b'
    },
    {
        question: "Javascript was developed in what year?",
        a: '1997',
        b: '1996',
        c: '1995',
        answer: 'c'
    },
    {
        question: "Does Javascript have a integer data type?",
        a: 'True',
        b: 'False',
        c: 'Maybe',
        answer: 'b'
    },
    {
        question: "What symbols do you use to make arrays?",
        a: '{}',
        b: '||',
        c: '[]',
        answer: 'c'
    },
];
(function () {
    var sec = 60;
    function startTimer() {
        var timer = setInterval(function () {
            sec--;
            document.getElementById('timerDisplay').innerHTML = '00:' + sec;
            if (sec < 0) {
                clearInterval(timer);
                alert("Time is up!")
            }
        }, 1000);
    }
    document.getElementById('incorrect').addEventListener('click', function () {
        sec -= 3;
        document.getElementById('timerDisplay').innerHTML = '00:' + sec;
    });
    startTimer();
})();

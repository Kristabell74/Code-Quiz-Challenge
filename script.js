//Variables
var pos = 0;
var correct = 0;
var quiz;
var quiz_status;
var question;
var choice;
var choices;
var chA, chB, chC;
var questions = [
    // Questions list 
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
        question: "who built Javascript?",

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

//turn getElementById into a function
function get(x) {
    return document.getElementById(x);
}
//function will get the questions to display 

function renderQuestion() {
    quiz = get("quiz");
    if (pos >= questions.length) {
        quiz.innerHTML = "<h2> You got " + correct + " of " + questions.length + " questions correct</h2> ";
        get("quiz_status").innerHTML = "Quiz Completed"
        //allows users to restart the quiz
        pos = 0;
        correct = 0;
        //Stops the questions from displaying
        return false;

    }
}

get("quiz_status").innerHtml = "Questions" + (pos + 1) + "of" + questions.length;

questions = question[pos].question;
chA = questions[pos].a;
chA = questions[pos].b;
chA = questions[pos].c;

//Display Question
quiz.innerHTML = "<h3>"; +question + "</h3>';"

//options for answer displayed and this also referenceses to the data above
quiz.innerHTML += "<label><input type='radio' name='choices' value='A'> " + chA + "</label><br>';</br>";
quiz.innerHTML += "<label><input type='radio' name='choices' value='A'> " + chB + "</label><br>';</br>";
quiz.innerHTML += "<label><input type='radio' name='choices' value='A'> " + chC + "</label><br>';</br>";
quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";

//getting the program to check the answer
function checkAnswer() {
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++);
    if (choices[i].checked) {
        choice = choices[i].values;
    }

    if (choice == questions[pos].answer) {
        correct++;
    }
}
//keeps track of correct answer
correct++;

//changes position of user
pos++;

//goes to next question
renderQuestion();

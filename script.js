//Variables
var pos = 0;
var correct = 0;
var test;
var test_status;
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
    test = get("test");
    if (pos >= questions.length) {
        test.innerHTML = "<h2> You got " + correct + " of " + questions.length + " questions correct</h2> ";
        get("test_status").innerHTML = "Test Completed"
        //allows users to restart the test
        pos = 0;
        correct = 0;
        //Stops the questions from displaying
        return false;

    }
}

get("test_status").innerHtml = "Questions" + (pos + 1) + "of" + questions.length;

questions = question[pos].question;
chA = questions[pos].a;
chA = questions[pos].b;
chA = questions[pos].c;

//Display Question
test.innerHTML = "<h3>";+question+"</h3>';"

//options for answer displayed and this also referenceses to the data above
test.innerHTML +="<label><input type='radio' name='choices' value='A'> "+chA+"</label><br>';</br>";
test.innerHTML +="<label><input type='radio' name='choices' value='A'> "+chB+"</label><br>';</br>";
test.innerHTML +="<label><input type='radio' name='choices' value='A'> "+chC+"</label><br>';</br>";
test.innerHTML +="<button onclick='checkAnswer()'>Submit Answer</button>";
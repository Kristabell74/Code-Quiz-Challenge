function generateQuiz(quest, timer, counter, quizContainer, resultsContainer, submitButton) {

    function showQuest(quest, quizContainer) {
        //stores the output and answers
        var output = [];
        var ans;


        for (var i = 0; i < quest.length; i++) {
            //answer storage
            answers = [];
            for (Letter in quest[i].answers) {
                //answer push
                ans.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ':'
                    + quest[i].ans[letter]

                    + '</label>'
                );
            }

            //this helps the output
            output.push(
                '<div class="question">' + quest[i].question + '</div>'
                + '<div class="ans">' + ans.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
    }
    function showResults(quest, quizContainer, resultsContainer) {

        var ansContainers = quizContainer.querySelectorAll('.ans');

        var userAns = '';
        varnumcorrect = 0;
    }
    for (var i = o; i < quest.length; i++) {

        userAns = (ansContainers[i].querySelectorAll('input[name=quest' + i + ']:checked') || {}).value;

        if (UserAns === quest[i].correctAns) {

            numCorrect++;


            ansContainers[i].style.color = 'purple';

        }

        else {

            ansContainers[i].style.color = 'Orange';

        }
    }
    resultsContainer.innerHtml = numCorrect + 'out of' + quest.length;

    //Quiz Questions
    showQuest(quest, quizContainer); {


    }


    //push button for results. A place for the results

    submitButton.onclick = function () {
        showResults(quest, quizContainer, resultsContainer);
    }
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
    ]
}

//A timer
//A Counter
//A Submit Button
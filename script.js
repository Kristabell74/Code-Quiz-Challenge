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
            quest: 'What day is it',
            ans: {
                a: 'Monday',
                b: 'Tuesday',
                c: 'Thursday',

            },
            correctAns: 'c'
        },
        {
            quest: "what is computers?",
            ans: {

                a: 'triple',
                b: 'drink',
                c: 'pie',
            },
            correctAns: 'c'
        },
        {
            quest: "what is computers?",
            ans: {

                a: 'triple',
                b: 'drink',
                c: 'pie',
            },
            correctAns: 'c'
        },
        {
            quest: "what is computers?",
            ans: {

                a: 'triple',
                b: 'drink',
                c: 'pie',
            },
            correctAns: 'c'
        },
        {
            quest: "what is computers?",
            ans: {

                a: 'triple',
                b: 'drink',
                c: 'pie',
            },
            correctAns: 'c'
        },
        {
            quest: "what is computers?",
            ans: {

                a: 'triple',
                b: 'drink',
                c: 'pie',
            },
            correctAns: 'c'
        },
        {
            quest: "what is computers?",
            ans: {

                a: 'triple',
                b: 'drink',
                c: 'pie',
            },
            correctAns: 'c'
        },
        {
            quest: "what is computers?",
            ans: {

                a: 'triple',
                b: 'drink',
                c: 'pie',
            },
            correctAns: 'c'
        },
        {
            quest: "what is computers?",
            ans: {

                a: 'triple',
                b: 'drink',
                c: 'pie',
            },
            correctAns: 'c'
        },
        {
            quest: "what is computers?",
            ans: {

                a: 'triple',
                b: 'drink',
                c: 'pie',
            },
            correctAns: 'c'
        },
    ]
}

//A timer
//A Counter
//A Submit Button
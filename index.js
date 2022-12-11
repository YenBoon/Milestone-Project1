function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        //code will go here
    }

    function showResults(questions, quizContainer, resultsContainer){
        //code will go here
    }

    //show the questions
    showQuestions(questions, quizContainer);

    //when user clicks submit, show results
    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);
    }
}

var myQuestions = [
    {
        question: "Who was the first President of the USA?",
        answers: {
            a: "George W. Bush",
            b: "George Washington",
            c: "Curious George",
            d: "George of the Jungle"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the name of the building the President lives in?",
        answers: {
            a: "The Black House",
            b: "The Blue House",
            c: "The White House",
            d: "The President's House"
        },
        correctAnswer: "c"
    },
    {
        question: "Which President abolished slavery?",
        answers: {
            a: "Richard Nixon",
            b: "Andrew Jackson",
            c: "John Adams",
            d: "Abraham Lincoln"
        },
        correctAnswer: "d"
    }
]

function showResults(questions, quizContainer, resultsContainer){
    // get answer containers from the quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;

    //for each question...
    for(var i = 0; i < questions.length; i++){

        //find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

        // if answer is correct
        if(userAnswer === questions[i].correctAnswer){
            //add to the number of correct answers
            numCorrect++;

            //color the answers orange
            answerContainers[i].style.color = 'orange';
        }
        //if answer is wrong or blank
        else{
            // color the answers red
            answerContainers[i].style.color = 'red';
        }
    }

    //show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + "out of" + questions.length;
}
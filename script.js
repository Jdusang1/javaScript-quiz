var startQuiz = document.querySelector("#start");
var timeEl= document.querySelector("#timer")





var questions = [
    {
        question: "what is the function of css?",
        answers: ["writing html", "styling a page", "adding to databases"],
        correctAnswer: "styling a page"
    },
    {
        question: "arrays in javaScript can be used to store?",
        answers: ["booleans", "other arrays", "strings", "numbers", "all of the above"],
        correctAnswer: "all of the above"
    },
    {
        question: "a useful tool during debugging is ?",
        answers: ["strings", "inner HTML", "console logs"],
        correctAnswer: "console logs"
    },
    {
        question: "variables store information?",
        answers: ["true", "false"],
        correctAnswer: "true"
    }

];

var score = 0;
var j = 0;
var interval;


function askQuestion() {
    document.querySelector(".questions").innerHTML = "";
    startQuiz.setAttribute("style", "display:none");
    document.querySelector(".quiz").setAttribute("style","display:block;");
    var q = questions[j].question;
    var questionEl = document.createElement("h2");
    var ans = questions[j].answers;
    questionEl.textContent = q;
    document.querySelector(".questions").appendChild(questionEl);

    for (var i = 0; i < ans.length; i++) {
        var ansBtn = document.createElement("button");
        ansBtn.textContent = ans[i];
        document.querySelector(".questions").appendChild(ansBtn);
        ansBtn.addEventListener("click", checkAnswer);
    }

};
function checkAnswer (event) {
    console.log("check");
    if (questions[j].correctAnswer === event.target.textContent){
        console.log("correct");
    } else(
        alert("correct")
    )
    if (j < questions.length) {
        j++;
        askQuestion();

        
       
        
    }
    else endGame();

};


function setTime() {
    var secondsLeft = 60;

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                alert("Times Up!");
            }
    }, 1000);
};

start.addEventListener("click", setTime);
start.addEventListener("click", askQuestion);



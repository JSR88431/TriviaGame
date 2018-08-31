// START OF TRIVIA!!


var correct = 0;
var wrong = 0;
var notAnswered = 0;
var answers = [];

var time = 20;
var isRunning = false;
var timer = setInterval(startTrivia, 1000)




//TIMER FOR THE TRIVIA
function startTrivia() {
    $("#counter").html("Time left: " + time + " sec.");
    time--;
    if (!isRunning) {
        isRunning = true;
    }

    if (time === 0) {
        clearInterval(timer);
    }
}

//STOP FUNCTION IF SUBMITTING ON TIME
function stopTimer() {
    if (time === 0) {
        clearInterval(timer);
    }
}


//SELF INVOKED FUNCTION AT PAGE LOAD
$(function () {
    $('#trivia').hide();
    $('#start').show();
});


$("#start").click(function () {
    $("#start").hide();
    $('#trivia').show();
    startTrivia();
});

// FUNCTION FOR ANSWER CHECKER
function answerChecker() {
    if (answers === "right") {
        correct++;
    } else if (answers === "wrong") {
        wrong++;
    } else {
        notAnswered++;
    }
}


//CHECK ANSWERS WHEN SUBMITTING
$("#submit").click(function () {
    stopTimer();

    answers = $("input[name='first']:checked").val();
    answerChecker();

    answers = $("input[name='second']:checked").val();
    answerChecker();

    answers = $("input[name='third']:checked").val();
    answerChecker();

    answers = $("input[name='fourth']:checked").val();
    answerChecker();

    answers = $("input[name='fifth']:checked").val();
    answerChecker();
    
    $("#trivia").hide();
    $(".correct", ".wrongs", ".notAns").show();
    

    $(".correct").html("Correct: " + correct);
    $(".wrongs").html("Wrong: " + wrong);
    $(".notAns").html("Unanswered: " + notAnswered);
});


$("#reset").click(function () {
    document.location.reload();
});
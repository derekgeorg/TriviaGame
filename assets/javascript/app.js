$(document).ready(function(){
var userAnswer;
var numCorrect = 0;
var timer;
var intervalId;
var correct;
var incorrect;
//timer function
function timeUp() {
    timer = 30;
    $("#timer").html("<h3>" + timer + "</h3>");
    intervalId = setInterval(decrease, 1000);
}
//timer decrease
function decrease(){
    timer --;
     $("#timer").html("<h3>" + timer + "</h3>");
//timer game over alert
if (timer === -1) {

    stop();
    alert("Game Over!")
    }
}
//timer stop function
function stop() {
    clearInterval(intervalId);
}
timeUp();

// question checker function
function checker(){
    var question1 = $("#form input[type='radio']:checked").val();
    var question2 = $("#form input[type='radio']:checked").val();
    var question3 = $("#form input[type='radio']:checked").val();
    var question4 = $("#form input[type='radio']:checked").val();
    var question5 = $("#form input[type='radio']:checked").val();
    console.log(question1);
}
//submit button
$("#submit").click(function(){
    checker();
    console.log("click");
});
})

//Page reveals the number of question play answered correclty and incorrectly.

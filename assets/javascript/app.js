$(document).ready(function(){



var timer;
var intervalId;
var correct;
var incorrect;

function timeUp() {
    timer = 30;
    $("#timer").html("<h3>" + timer + "</h3>");
    intervalId = setInterval(decrease, 1000);
}

function decrease(){
    timer --;
     $("#timer").html("<h3>" + timer + "</h3>");

if (timer === 0) {

    stop();
    alert("Game Over!")
    }
}

function stop() {
    clearInterval(intervalId);
}
timeUp();

function checker(){
    var question1 = $("#form input[type='radio']:checked").val();
    console.log(question1);
}
$("#submit").click(function(){
    checker();
    console.log("click");
});
})

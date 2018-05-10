// Generates random number base on parameters
function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
    }

// Assign random numbers to variables, set counters
let targetNumber = getRndInt(19,121);
let pandaNumber = getRndInt(1,13);
let wolfNumber = getRndInt(1,13);
let deerNumber = getRndInt(1,13);
let beeNumber = getRndInt(1,13);
let totalScore = 0;
let winCount = 0;
let lossCount = 0;


$(function() {

// Function to check game status
function checkWin() {
    if (totalScore === targetNumber) {
       $(".gameBanner").text("Nice job! You won!");
        winCount++;
        $("#win-display").text("Wins:   " + winCount).addClass('animated bounceInDown');
       
        resetGame();
        $(".gameBanner").addClass('animated bounceInDown win-color');

        setTimeout(function(){resetAnimation();}, 1000);

     }
    else if (totalScore > targetNumber) {
       $(".gameBanner").text("Too bad. You lost!");
       lossCount++;
       $("#lose-display").text("Losses: " + lossCount).addClass('animated bounceInDown');
      
       resetGame();
       $(".gameBanner").addClass('animated bounceInDown lose-color');

       setTimeout(function(){resetAnimation();}, 1000);
    }
};

// Function to reset game on win or lose, reassigns random numbers
function resetGame() {
    totalScore = 0;
    targetNumber = getRndInt(19,121);
    pandaNumber = getRndInt(1,13);
    wolfNumber = getRndInt(1,13);
    deerNumber = getRndInt(1,13);
    beeNumber = getRndInt(1,13);
    $(".target-number").text("Target number: " + targetNumber).addClass('animated rotateInDownRight');;
    $(".total-number").text("Total score: " + totalScore).addClass('animated rotateInDownLeft');
    $(".gameBanner").removeClass('lose-color win-color');
}

// Function to remove animtion class for reuse on click
function resetAnimation() {
    $("#win-display").removeClass('animated bounceInDown');
    $("#lose-display").removeClass('animated bounceInDown');
    $(".gameBanner").removeClass('animated bounceInDown');
    $(".target-number").removeClass('animated rotateInDownRight');
    $(".total-number").removeClass('animated rotateInDownLeft');
}


// Display target number & total score
$(".target-number").text("Target number: " + targetNumber);
$(".total-number").text("Total score: " + totalScore);
$("#win-display").text("Wins:     " + winCount);
$("#lose-display").text("Losses: " + lossCount);

// On clicks, evaluate game
$(".col").on("click", ".panda", function(){
    totalScore += pandaNumber;
    $(".total-number").text("Total score: " + totalScore);
    checkWin();
});
$(".col").on("click", ".wolf", function(){
    totalScore += wolfNumber;
    $(".total-number").text("Total score: " + totalScore);
    checkWin();

});
$(".col").on("click", ".deer", function(){
    totalScore += deerNumber;
    $(".total-number").text("Total score: " + totalScore);
    checkWin();
});
$(".col").on("click", ".bee", function(){
    totalScore += beeNumber;
    $(".total-number").text("Total score: " + totalScore);
    checkWin();
});
}); 
// VARIABLES
//---------------------------------------------------------------------------------------------------
//Crystal Variables/Object
var crystal = {
    blue: {
        name: "blue",
        value: 0
    },
    red: {
        name: "red",
        value: 0
    },
    yellow: {
        name: "yellow",
        value: 0
    },
    green: {
        name: "green",
        value: 0
    }
}

//Score Variables
var currentScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;




// Functions
//---------------------------------------------------------------------------------------------------


// Random Number Generator
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Start Game/Reset Game
var startGame = function () {
    currentScore = 0;

    targetScore = getRandom(19, 120);

    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);

    $("#your-score").html(currentScore);
    $("#target-score").html(targetScore);
}


// Add Values to Your Score
var addValues = function (crystal) {
    currentScore = currentScore + crystal.value;
    $("#your-score").html(currentScore);
    checkWin();
}


// Check If Player Won or Lost and Reset Game After Both
var checkWin = function () {
    if (currentScore > targetScore) {
        alert("You really suck at this game....You Lose!");
        lossCount++;
        $("#loss-count").html(lossCount);
        startGame();

    }
    else if (currentScore == targetScore) {
        alert("Wow, you're smart! You WIN!");
        winCount++;
        $("#win-count").html(winCount);
        startGame();
    }
}



// Main Operation/On Click Events
//---------------------------------------------------------------------------------------------------

startGame();

$("#red").on("click", function () {
    addValues(crystal.red);
});
$("#blue").on("click", function () {
    addValues(crystal.blue);
});
$("#yellow").on("click", function () {
    addValues(crystal.yellow);
});
$("#green").on("click", function () {
    addValues(crystal.green);
});


$(document).ready(function () {

// Global Variables
    var wins = 0;
    var losses = 0;
    var counter = 0;
    var targetNumber;

    $("#total-wins").html("Wins: " + wins);
    $("#total-losses").html("Losses: " + losses);

// Reset game function
    function resetGame() {

        $(".crystal-image-1").on("click", function () {

            var crystalValue = ($(".crystal-image-1").attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);

            if (counter === targetNumber) {
                resetGame();
            }
            else if (counter > targetNumber) {
                resetGame();
            }
        })

        $(".crystal-image-2").on("click", function () {

            var crystalValue = ($(".crystal-image-2").attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);

            if (counter === targetNumber) {
                resetGame();
            }
            else if (counter > targetNumber) {
                resetGame();
            }
        })

        $(".crystal-image-3").on("click", function () {

            var crystalValue = ($(".crystal-image-3").attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);

            if (counter === targetNumber) {
                resetGame();
            }
            else if (counter > targetNumber) {
                resetGame();
            }
        })

        $(".crystal-image-4").on("click", function () {

            var crystalValue = ($(".crystal-image-4").attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);

            if (counter === targetNumber) {
                resetGame();
            }
            else if (counter > targetNumber) {
                resetGame();
            }
        })

    }

// Random targetNumber between 19-120
    var targetNumber = Math.floor((Math.random() * 120) + 19);
    console.log("This is the target number: " + targetNumber);

// Push target number to dom using jquery
    $("#number-to-guess").html(targetNumber);

// Random numberOption# from 1 to 12
    var numberOption1 = Math.floor((Math.random() * 12) + 1);
    console.log("This is the crystal 1 value: " + numberOption1);
    var numberOption2 = Math.floor((Math.random() * 12) + 1);
    console.log("This is the crystal 2 value: " + numberOption2);
    var numberOption3 = Math.floor((Math.random() * 12) + 1);
    console.log("This is the crystal 3 value: " + numberOption3);
    var numberOption4 = Math.floor((Math.random() * 12) + 1);
    console.log("This is the crystal 4 value: " + numberOption4);

// Give each imageCrystal an attribute called data-crystalValue
    $(".crystal-image-1").attr("data-crystalvalue", numberOption1);
    $(".crystal-image-2").attr("data-crystalvalue", numberOption2);
    $(".crystal-image-3").attr("data-crystalvalue", numberOption3);
    $(".crystal-image-4").attr("data-crystalvalue", numberOption4);

// Click event will apply to all crystals
    $(".crystal-image-1").on("click", function () {

        var crystalValue = ($(".crystal-image-1").attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

// We add crystalValue to user's counter
        counter += crystalValue;

// When gem is clicked add its value to counter
        $('#total-score').html(counter);

// Win/lose statements
        if (counter === targetNumber) {
            counter = 0;
            wins++;
            $("#total-wins").html("Wins: " + wins);
            alert("You win!");
            $("#number-to-guess").empty();
            $("#total-score").empty();
            resetGame();
        }
        else if (counter > targetNumber) {
            counter = 0;
            losses++;
            $("#total-losses").html("Losses: " + losses);
            alert("You lose!");
            $("#number-to-guess").empty();
            $("#total-score").empty();
            resetGame();
        }
    })

    $(".crystal-image-2").on("click", function () {

        var crystalValue = ($(".crystal-image-2").attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        counter += crystalValue;

        $('#total-score').html(counter);

// Win/lose statements
        if (counter === targetNumber) {
            counter = 0;
            wins++;
            $("#total-wins").html("Wins: " + wins);
            alert("You win!");
            $("#number-to-guess").empty();
            $("#total-score").empty();
            resetGame();
        }
        else if (counter > targetNumber) {
            counter = 0;
            losses++;
            $("#total-losses").html("Losses: " + losses);
            alert("You lose!");
            $("#number-to-guess").empty();
            $("#total-score").empty();
            resetGame();
        }
    })

    $(".crystal-image-3").on("click", function () {

        var crystalValue = ($(".crystal-image-3").attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        counter += crystalValue;

        $('#total-score').html(counter);

// Win/lose statements
        if (counter === targetNumber) {
            counter = 0;
            wins++;
            $("#total-wins").html("Wins: " + wins);
            alert("You win!");
            $("#number-to-guess").empty();
            $("#total-score").empty();
            resetGame();
        }
        else if (counter > targetNumber) {
            counter = 0;
            losses++;
            $("#total-losses").html("Losses: " + losses);
            alert("You lose!");
            $("#number-to-guess").empty();
            $("#total-score").empty();
            resetGame();
        }
    })

    $(".crystal-image-4").on("click", function () {

        var crystalValue = ($(".crystal-image-4").attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        counter += crystalValue;

        $('#total-score').html(counter);

        // Win/lose statements
        if (counter === targetNumber) {
            counter = 0;
            wins++;
            $("#total-wins").html("Wins: " + wins);
            alert("You win!");
            $("#number-to-guess").empty();
            $("#total-score").empty();
            resetGame();
        }
        else if (counter > targetNumber) {
            counter = 0;
            losses++;
            $("#total-losses").html("Losses: " + losses);
            alert("You lose!");
            $("#number-to-guess").empty();
            $("#total-score").empty();
            resetGame();
        }
    })
});
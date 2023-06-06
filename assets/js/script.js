// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("id") === "roll-dice") {
                rollTheDice();
            } else if (this.getAttribute("id") === "restart") {
                resetTheScore();
                // alert("You clicked restart button");
            } else if (this.getAttribute("id") === "exit") {
                alert("You clicked exit button");
            } else if (this.getAttribute("id") === "button-one") {
                alert("You clicked play again");
            } else if (this.getAttribute("id") === "button-two") {
                alert("You clicked play again");
            }
        });
    }
});

// document.addEventListener("DOMContentLoaded", function () {
//     let rollDice = document.getElementById("roll-dice");

//     rollDice.addEventListener("click", function () {
//         if (this.getAttribute("id") === "roll-dice") {
//             rollTheDice();
//         } else if (this.getAttribute("id") === "restart") {
//             alert("You clicked restart button");
//         } else if (this.getAttribute("id") === "exit") {
//             alert("You clicked exit button");
//         } else if (this.getAttribute("class") === "play-again") {
//             alert("You clicked play again");
//         }
//     });
// });

/**
 * Function replace images by generating random number between one and six
 */
function rollTheDice() {

    let num1 = Math.floor(Math.random() * 6) + 1;
    let image1 = new Image();
    image1.src = "./assets/images/dice-" + num1 + ".png";
    let num2 = Math.floor(Math.random() * 6) + 1;
    let image2 = new Image();
    image2.src = "./assets/images/dice-" + num2 + ".png";
    let num3 = Math.floor(Math.random() * 6) + 1;
    let image3 = new Image();
    image3.src = "./assets/images/dice-" + num3 + ".png";
    let num4 = Math.floor(Math.random() * 6) + 1;
    let image4 = new Image();
    image4.src = "./assets/images/dice-" + num4 + ".png";

    let sumPlayer = num1 + num2;
    let sumCpu = num3 + num4;

    document.getElementsByTagName("img")[1].replaceWith(image1);
    document.getElementsByTagName("img")[2].replaceWith(image2);
    document.getElementsByTagName("img")[3].replaceWith(image3);
    document.getElementsByTagName("img")[4].replaceWith(image4);

    displayTheRollResult(sumPlayer, sumCpu);
    displayTheWinner(sumPlayer, sumCpu);

    // document.getElementById("player-field").innerText = `Player One score ${num1 + num2} points!`;
    // document.getElementById("cpu-field").innerText = `The CPU score ${sumCpu} points!`;

    // if (sumPlayer === sumCpu) {
    //     return document.getElementById("message").innerHTML = "DRAW!";
    // } else if (sumPlayer > sumCpu) {
    //     return document.getElementById("message").innerHTML = "Player WINS!";
    // } else {
    //     return document.getElementById("message").innerHTML = "CPU WINS!";
    // }
}

function displayTheRollResult(sumPlayer, sumCpu) {
    document.getElementById("player-field").innerText = `Player One scored ${sumPlayer} points!`;
    document.getElementById("cpu-field").innerText = `CPU scored ${sumCpu} points!`;
}


function displayTheWinner(sumPlayer, sumCpu) {
    if (sumPlayer === sumCpu) {
        return document.getElementById("message").innerHTML = "DRAW!";
    } else if (sumPlayer > sumCpu) {
        document.getElementById("message").innerHTML = "Player WINS!";
        return incrementPlayerScore();
    } else {
        document.getElementById("message").innerHTML = "CPU WINS!";
        return incrementCpuScore();
    }
}

/**
 * Gets the current player score from DOM and increments it by 1
 * and when player score reach 11 point it will display message
 */
function incrementPlayerScore() {
    let playerScore = parseInt(document.getElementById("palyer-score").innerText);
    document.getElementById("palyer-score").innerText = ++playerScore;
    if (playerScore === 11) {
        displayWinnerMessage();
    }
}

/**
 * Gets the current CPU score from DOM and increments it by 1
 * and when CPU score reach 11 point it will display message
 */
function incrementCpuScore() {
    let cpuScore = parseInt(document.getElementById("cpu-score").innerText);
    document.getElementById("cpu-score").innerText = ++cpuScore;
    if (cpuScore === 11) {
        displayLooserMessage();
    }
}

/**
 * Function display the message for the player who won the game but unhiding the div
 */
function displayWinnerMessage() {
    let winnerMessage = document.getElementById("winner");
    winnerMessage.style.display = "block";
}

/**
 * Function display the message for the player who lost the game but unhiding the div
 */
function displayLooserMessage() {
    let winnerMessage = document.getElementById("looser");
    winnerMessage.style.display = "block";
}

/**
 * This function will reset the score for player and the computer
 */
function resetTheScore() {
    let cpuScore = document.getElementById("cpu-score");
    cpuScore.innerHTML = "0";
    let playerScore = document.getElementById("palyer-score");
    playerScore.innerHTML = "0";
}
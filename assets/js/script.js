// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
// document.addEventListener("DOMContentLoaded", function () {
//     let buttons = document.getElementsByTagName("button");

//     for (let button of buttons) {
//         button.addEventListener("click", function () {
//             if (this.getAttribute("id") === "roll-dice") {
//                 alert("You clicked roll dice!");
//             } else {
//                 let gameType = this.getAttribute("id");
//                 alert(`You clicked ${gameType}`);
//             }
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    let rollDice = document.getElementById("roll-dice");

    rollDice.addEventListener("click", function () {
        if (this.getAttribute("id") === "roll-dice") {
            // alert("You clicked roll dice!");
            rollTheDice();
        }
    });
});

/**
 * Function rolls the dices by replacing images and displays the message of the winner
 */
function rollTheDice() {

    let num1 = Math.floor(Math.random() * 6) + 1;
    let image1 = new Image();
    image1.src = "assets/images/dice" + num1 + ".png";
    document.getElementsByTagName("img")[1].replaceWith(image1);

    let num2 = Math.floor(Math.random() * 6) + 1;
    let image2 = new Image();
    image2.src = "assets/images/dice" + num2 + ".png";
    document.getElementsByTagName("img")[2].replaceWith(image2);

    let num3 = Math.floor(Math.random() * 6) + 1;
    let image3 = new Image();
    image3.src = "assets/images/dice" + num3 + ".png";
    document.getElementsByTagName("img")[3].replaceWith(image3);

    let num4 = Math.floor(Math.random() * 6) + 1;
    let image4 = new Image();
    image4.src = "assets/images/dice" + num4 + ".png";
    document.getElementsByTagName("img")[4].replaceWith(image4);

    let sumPlayer = num1 + num2;
    let sumCpu = num3 + num4;

    if (sumPlayer === sumCpu) {
        document.getElementById("message").innerHTML = "DRAW!";
    } else if (sumPlayer > sumCpu) {
        document.getElementById("message").innerHTML = "Player WINS!";
    } else {
        document.getElementById("message").innerHTML = "CPU WINS!";
    }
}

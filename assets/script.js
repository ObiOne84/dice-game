
function rollTheDice() {

    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let randomNumber3 = Math.floor(Math.random() * 6) + 1;
    let randomNumber4 = Math.floor(Math.random() * 6) + 1;

    let image1 = new Image();
    image1.src = "./images/dice" + randomNumber1 + ".png";
    document.getElementById("dice-one").appendChild(image1);


    if (randomNumber1 + randomNumber2 === randomNumber3 + randomNumber4) {
        document.querySelector("h3").innerHTML = "Draw!";
    }

    else if (randomNumber1 + randomNumber2 < randomNumber3 + randomNumber4) {
        document.querySelector("h3").innerHTML
            = ("CPU WINS!");
    }

    else {
        document.querySelector("h3").innerHTML
            = ("player1" + " WINS!");
    }

}

document.getElementById("roll").addEventListener("click", rollTheDice);

function playRollDiceSound();

function randomDiceChoice();

function calculateTheScore();

function addTheScore();


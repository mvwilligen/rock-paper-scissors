console.log("Hello world!")

function getComputerChoice(max) {

    let result = "";
    let randomNumber = 1 + Math.floor(Math.random() * max);

    switch(randomNumber) {
        case 1:
            result = "rock";
            break;
        case 2:
            result = "paper";
            break;
        case 3:
            result = "scissors";
            break;
        default:
            result = "unknown";
    }
    return result;
}

function getHumanChoice() {

    let result = "";
    let answer = prompt("1:rock - 2:paper - 3:scissors");

    switch(answer) {
        case "1":
            result = "rock";
            break;
        case "2":
            result = "paper";
            break;
        case "3":
            result = "scissors";
            break;
        default:
            result = "unknown";
    }
    return result;
}

let counter = 0;
let h = 0;
let c = 0;


for (counter = 0; counter < 6; counter++) { 
    // console.log(counter, getComputerChoice(3));
    playRound();
}

function playRound() {
    let computer = getComputerChoice(3)
    let human    = getHumanChoice()

    console.log(computer, human)

    let result = ""

    if (computer == human) { result = "it is a tie" ;
    } else if (computer == "rock"     && human == "paper")    { h++; result = "human";    
    } else if (computer == "rock"     && human == "scissors") { c++; result = "computer";
    } else if (computer == "paper"    && human == "scissors") { h++; result = "human";
    } else if (computer == "paper"    && human == "rock")     { c++; result = "computer";
    } else if (computer == "scissors" && human == "rock")     { h++; result = "human";
    } else if (computer == "scissors" && human == "paper")    { c++; result = "computer";
    } else { result = "unknown"; }

    console.log("computer: " + computer + " - human: " + human + " - winner: " + result + " c:" + c + " h:" + h)

}

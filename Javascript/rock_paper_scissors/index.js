function computerPlay() {
    let rand = Math.random()
    if ( rand < 1/3) {
        return "rock";
    }
    else if ( rand < 2/3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    }
    else if ( (playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "paper" && computerSelection == "rock") || 
    (playerSelection == "scissors" && computerSelection == "paper")  ) {
        return "Player wins";
    }
    else {
        return "Computer wins";
    }
}

function game(user) {
    let computer = "";
    computer = computerPlay();
    let res= playRound(user, computer);
    const result = "The result of the match is: " + res;
    if (res === "Player wins") {
        player_wins++;
    }
    else if (res === "Computer wins") {
        computer_wins++;
    }
    return result;
}

let computer_wins = 0;
let player_wins = 0;
const options = ["rock", "paper", "scissors"]

for (const opt of options) {
    const new_button = document.querySelector(`#${opt}`);
    console.log(new_button);
    new_button.addEventListener("click", () => {
        console.log(opt);
        const res = document.querySelector("#res");
        const history = ` || Computer wins: ${computer_wins}, Player wins: ${player_wins}`
        res.textContent = game(opt) + history ;
    })
}

//let number_of_games=5;
//game(number_of_games);


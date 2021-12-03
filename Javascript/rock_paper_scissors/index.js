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

function game(rounds) {
    let user = "";
    let computer = "";
    let result = "";
    let valid_input = ["rock", "paper", "scissors"];

    for (let index = 0; index < rounds; index++) {
        user = prompt("Enter \"Rock\", \"Paper\" or \"Scissors\"." ).toLowerCase();
        while (! valid_input.includes(user) ) {
            alert("Enter a valid input man, c`mon")
            user = prompt("Enter \"Rock\", \"Paper\" or \"Scissors\"." ).toLowerCase();
        }
        computer = computerPlay();
        result = playRound(user, computer);
        alert("The result of the match is: " + result);
    }

}

let number_of_games=5;
game(number_of_games);


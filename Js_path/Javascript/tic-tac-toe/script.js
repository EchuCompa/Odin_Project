const gameBoard = (() => {
  let board = [ [" "," "," "], [" "," "," "], [" "," "," "]];
  let actual_turn = "x";
  let turns = 0;

  const Player = (name, mark, turn, ai) => {
    return {name, mark, turn, ai};
  }

  let player1 = Player("Player 1", "X", true, false);
  let player2 = Player("Player 2", "O", false, false);
  
  //Este código es horrible pero tengo que estudiar Algo2
  const actualResult = () => {
    let first_val;
    let winner= false;
    //Rows
    for (let i=0;(i<3 && !winner); i++) {
      first_val = board[i][0];
      if (first_val === " ") continue;
      winner = (first_val == board[i][1] && first_val == board[i][2]) 
    }
    if (winner) return first_val;
    
    //Columns 
    for (let i=0;(i<3 && !winner); i++) {
      first_val = board[0][i];
      if (first_val === " ") continue;
      winner = (first_val == board[1][i] && first_val == board[2][i]);
    }
    if (winner) return first_val;

    //Diagonals
    first_val = board[0][0];
    winner = (first_val == board[1][1] && first_val == board[2][2] &&
      first_val !== " ");
    if (winner) return first_val;

    first_val = board[0][2];
    winner = (first_val == board[1][1] && first_val == board[2][0] &&
      first_val !== " ");
    if (winner) return first_val;

    return turns == 9 ? "tie" : "";
  };

  const playTurn = (e) => {
    let posi = e.target.dataset.position-1;
    const res1 = actualResult();
    if (!res1) {
      if ( board[Math.floor(posi/3)][posi%3] === " " ) { //If the position wasn`t taken
        board[Math.floor(posi/3)][posi%3] = player1.turn ? player1.mark : player2.mark;
        player1.turn = !player1.turn;
        player2.turn = !player2.turn;
        displayController.updateWebBoard(board); 
        turns++;
      }
      const res = actualResult();
      if (res) {
        displayController.end_game(res);
      }
    }
  }


  const resetGame = () => {
    board = [ [" "," "," "], [" "," "," "], [" "," "," "]];
    actual_turn = "x";
    turns = 0;
    displayController.updateWebBoard(board);
  }
  return {board, player1, player2, playTurn, resetGame};
})();

const displayController = (() => {
  const web_board = Array.from(document.querySelectorAll(".position"));
  const turn = document.querySelector("#actual-turn");
  const restart = document.querySelector("#restart");
  const play_again = document.querySelector("#play")

  const updateWebBoard = (board) => {
    for (let i=0;i<9;i++) {
      web_board[i].textContent = board[Math.floor(i/3)][i%3];
    }
    const actual_player = gameBoard.player1.turn ? gameBoard.player1 : gameBoard.player2;
    turn.textContent = actual_player.name + ` (${actual_player.mark})` + " plays now";

    play_again.addEventListener("click", () => {
      restart.classList.remove("active");
      gameBoard.resetGame();
    })

  };

  const end_game = (res) => {
    turn.textContent = `The result was ${res} wins!`;
    restart.classList.toggle("active");
  }



  return {updateWebBoard, web_board, end_game};
})();

displayController.updateWebBoard(gameBoard.board);

for (let square of displayController.web_board) {
  square.addEventListener("click", gameBoard.playTurn);
}


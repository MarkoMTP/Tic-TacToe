
const createPlayer = () =>  {
let hasPlayed = false;

if(!hasPlayed ) {


  hasPlayed = true;
}




  const playerName = prompt("Player Name");
  
  let playerLetter;
  while (true) {
    playerLetter = prompt("Choose 'X' or 'O'").toUpperCase();
    if (playerLetter === 'X' || playerLetter === 'O') {
      break;
    } else {
      alert("Invalid choice. Please choose 'X' or 'O'.");
    }
  }

  let compLetter;
      if(playerLetter === 'X') {
        compLetter = 'O'
       } else {
        compLetter = 'X'
       }

  return { playerName, playerLetter, compLetter };
}

const { playerName, playerLetter, compLetter } = createPlayer();






function Gameboard() {

const row = 3;
const column = 3;
const board = [];


for(let i = 0; i < row; i++) {
board[i] = [];

for(let j = 0; j < column; j++) {
    board[i][j] = "";
    
}
}



const printBoard = () => {
  
  board.forEach(cell => {
    console.log(cell);

  })
};



  


function isBoardFull() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "") {
        // Found an empty cell, so the board is not full
        return false;
      }
    }
  }
  // All cells are filled, so the board is full
  return true;
}


function resetBoard() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = "";
    }
  }
  console.log('Board reset.');
  printBoard(board);
}







return { printBoard, board, isBoardFull, resetBoard };
};










const gameControl = () => {
  const { board, printBoard, isBoardFull , resetBoard} = Gameboard();
  let movePlayed = false;

  function playerMove() {
    movePlayed = true;

    const row = prompt('Enter row number (0-2)');
    const column = prompt('Enter column number (0-2)');

    if (board[row][column] === '') {
      board[row][column] = playerLetter;
    } else {
      alert('Already played, Please select another cell');
      movePlayed = false;
    }
  }

  function compMove() {
    let emptyCellFound = false;
   

    while (!emptyCellFound && !isBoardFull() && movePlayed) {
      const randomRow = Math.floor(Math.random() * 3);
      const randomColumn = Math.floor(Math.random() * 3);

      if (board[randomRow][randomColumn] === '') {
        board[randomRow][randomColumn] = compLetter;
        emptyCellFound = true;
      }
    };

    return { compLetter };
    }
  
function determineWinner() {
let winnerExist = false;

  
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === playerLetter &&
        board[i][1] === playerLetter &&
        board[i][2] === playerLetter
      ) {   
        winnerExist = true;
        console.log(playerName + ' wins');
        resetBoard()
     
         
      } else if (
        board[i][0] === compLetter &&
        board[i][1] === compLetter &&
        board[i][2] === compLetter
      ) {
        winnerExist = true;

        console.log('Computer wins')
        resetBoard()
         
      }
    }

  
  
    // Check columns
    for (let j = 0; j < 3; j++) {
      if (
        board[0][j] === playerLetter &&
        board[1][j] === playerLetter &&
        board[2][j] === playerLetter
      ) {
        winnerExist = true;

        console.log(playerName + ' wins')
        resetBoard()

        
      } else if (
        board[0][j] === compLetter &&
        board[1][j] === compLetter &&
        board[2][j] === compLetter
      ) {
        winnerExist = true;

        console.log('Computer wins');
        resetBoard()
        
        
      }
    }
  
    // Check diagonals
    if (
      (board[0][0] === playerLetter &&
        board[1][1] === playerLetter &&
        board[2][2] === playerLetter) ||
      (board[0][2] === playerLetter &&
        board[1][1] === playerLetter &&
        board[2][0] === playerLetter)
    ) {
      winnerExist = true;

      console.log(playerName + ' wins') ,
      resetBoard()

     
    } else if (
      (board[0][0] === compLetter &&
        board[1][1] === compLetter &&
        board[2][2] === compLetter) ||
      (board[0][2] === compLetter &&
        board[1][1] === compLetter &&
        board[2][0] === compLetter)
    ) {
      winnerExist = true;

      console.log('Computer wins'),
      resetBoard()

    } 

if(winnerExist === false && isBoardFull()) {
  console.log('It is a Draw!') 
  resetBoard()

}



  
}





  while (!isBoardFull()) {
    playerMove();
    compMove();
 
    printBoard();
   determineWinner();
  }

  console.log('Game Over');
};










gameControl()

//determine winner nam fali(uspia san da radi comp wins i player wins sutra moras draw rjesit)


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

  return { playerName, playerLetter };
}

const { playerName, playerLetter } = createPlayer();






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










return { printBoard, board, isBoardFull };
};











const gameControl = () => {
  const { board, printBoard, isBoardFull } = Gameboard();


  function playerMove() {

    

  const row = prompt('Enter row number (0-2)');
  const column = prompt('Enter column number (0-2)');

     if(board[row][column] === "") {
  board[row][column] = playerLetter ,
{row, column}
     }  
     else {
       alert('Already played, Please select another cell')
     }

}



function compChoice() {
  let emptyCellFound = false;
  while (!emptyCellFound && !isBoardFull()) {
    const randomRow = Math.floor(Math.random() * 3);
    const randomColumn = Math.floor(Math.random() * 3);

    if (board[randomRow][randomColumn] === '') {
      board[randomRow][randomColumn] = playerLetter === 'X' ? 'O' : 'X';
      emptyCellFound = true;
    }
  }
}
while(!isBoardFull()) {

playerMove()
compChoice()
printBoard()

} 

 








};


gameControl()


//jos neradi ova funckija za nastavit igrat dok nie puno i trebas play round dovrsit

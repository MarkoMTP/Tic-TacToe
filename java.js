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

 
const displayBoard = (board) => {

board.forEach(cell => {
    console.log(cell);


})


}


//  Player Moves:
//   Write a function to handle a player's move.
//   Prompt the player to enter row and column numbers for their move.
//   Validate the move to ensure it's within the valid range and the cell is not already taken.
//   Update the board with the player's move.






function playerMove(row, column, letter) {

   row = prompt('row number 0-2')
  column = prompt('column number 0-2')
  letter = prompt('letter')


  const playerChoice = board[row][column] = letter;

  const randomNum = Math.floor(Math.random() * 3)
  function getRandomSymbol() {
    const symbols = ['X', 'O'];
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
  }
  
    const randomLetter = getRandomSymbol()
   
  
  const compChoice =  board[randomNum][randomNum] = randomLetter;

return (compChoice, playerChoice)

}
 playerMove()















displayBoard(board)

return { displayBoard }



}

Gameboard()
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




function createPlayer() {
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

function playerMove() {

    

    const row = prompt('Enter row number (0-2)');
    const column = prompt('Enter column number (0-2)');
   let playerChoice = '';


       if(board[row][column] === "") {
  return  playerChoice = board[row][column] = playerLetter
       }  
       else {
        return alert('taken')
       }



 

}


function compChoice() {
    const randomNum = Math.floor(Math.random() * 3);
  
    
    function getRandompLetter() {
      const pLetters = ['X', 'O'];
      const randomIndex = Math.floor(Math.random() * pLetters.length);
      return pLetters[randomIndex];
    }
    
    const randomLetter = getRandompLetter();
    
    // Assign the letter to the board without affecting the return value
    board[randomNum][randomNum] = randomLetter;
  
    // Return the chosen letter
    return randomLetter;
  }

function playGame() {
   
   

    playerMove()
 compChoice()
   





}



playGame() 







displayBoard(board)

return { displayBoard }



}

Gameboard()
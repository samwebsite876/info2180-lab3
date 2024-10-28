document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const squares = board.querySelectorAll('div');
    const statusDiv = document.getElementById('status');
    const newGameButton = document.querySelector('.btn');
    let currentPlayer = 'X';
    let gameState = Array(9).fill(null);
    
    // Exercise 1 - Layout the board
    squares.forEach(square => square.classList.add('square'));
  
    // Exercise 2 - Add an X or O to a square when clicked
    squares.forEach((square, index) => {
      square.addEventListener('click', () => {
        if (!square.textContent) {
          square.textContent = currentPlayer;
          square.classList.add(currentPlayer);
          gameState[index] = currentPlayer;
          if (checkWinner(currentPlayer)) {
            statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
            statusDiv.classList.add('you-won');
            disableBoard();
          } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          }
        }
      });
    });
  
    // Exercise 3 - Change the style when you move your mouse over a square
    squares.forEach(square => {
      square.addEventListener('mouseover', () => square.classList.add('hover'));
      square.addEventListener('mouseout', () => square.classList.remove('hover'));
    });
  
    // Exercise 4 - Check for the winner and update the status
    function checkWinner(player) {
      const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      return winConditions.some(condition =>
        condition.every(index => gameState[index] === player)
      );
    }
  
    // Exercise 5 - Restart the game
    newGameButton.addEventListener('click', () => {
        gameState.fill(null);
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O');
            square.style.pointerEvents = 'auto';
        });
        statusDiv.textContent = 'Move your mouse over a square and click to play an X or an O.';
        statusDiv.classList.remove('you-won');
        currentPlayer = 'X';
    });
  
    // Exercise 6 - Disallow Cheating
    function disableBoard() {
      squares.forEach(square => square.style.pointerEvents = 'none');
    }
  });
  


let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let gameOver = false;
let moveCount = 0;

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

function handleClick(event) {
    if (gameOver) return;

    if (!event.target.textContent) {
        event.target.textContent = currentPlayer;
        moveCount++;
        console.log(checkWin());
        if (checkWin()) {
            gameOver = true;
            Swal.fire({
                title: `${currentPlayer} wins!`,
                width: 600,
                padding: "3em",
                color: "#716add",
                background: "#fff url(/images/4461.png_1200.png)",
                backdrop: ` rgba(0,0,123,0.4)url("/images/winning-money.gif")center top no-repeat`
            });
           
            reset()
            return;
        }
        if (moveCount === 9) {
            gameOver = true;
            alert(`It's a draw!`);
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
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

    return winConditions.some(combination => {
        const [a, b, c] = combination;
        if (
            cells[a].textContent &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {
            return true;
        }
        return false;
    });
}


function reset() {
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
    gameOver = false;
    moveCount = 0;
}


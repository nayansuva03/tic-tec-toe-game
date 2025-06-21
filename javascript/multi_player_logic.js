$(document).ready(function () {
    const First_Player = sessionStorage.getItem('First_Player');
    let StatusText = document.getElementById('statusText');
    const reset = document.getElementById('reset');
    const btn = document.getElementsByClassName('btn');
    let currentPlayer = First_Player;
    let board = ["", "", "", "", "", "", "", "", ""];
    const wincondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]

    ];

    reset.addEventListener('click', reestGame);
    Array.from(btn).forEach(buttons => buttons.addEventListener('click', btn_clicked));

    updateStatusText();

    function updateStatusText() {
        StatusText.innerText = `${currentPlayer}'s Turn!`;
    };

    function btn_clicked() {
        const btnIndex = this.getAttribute('btnindex');
        if (board[btnIndex] === "") {
            board[btnIndex] = currentPlayer;
            this.innerText = currentPlayer;
            btnIndex.disabled = true;
            changePlayer();
        }
        else {
            alert("sorry but, can't change😁");
        }
    }
    function changePlayer() {
        if (currentPlayer === 'x') {
            currentPlayer = 'o';
        }
        else if (currentPlayer === 'o') {
            currentPlayer = 'x';
        }
        updateStatusText();
        checkResults();
    }

    function checkResults() {
        for (let i = 0; i < wincondition.length; i++) {
            const [a, b, c] = wincondition[i];
            if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
                StatusText.innerText = `${board[a]} won!`;
                btn[a].classList.add("winning-cell");
                btn[b].classList.add("winning-cell");
                btn[c].classList.add("winning-cell");
                stopgame();
                return;
            }
            if (!board.includes('')) {
                StatusText.innerText = `It's a draw!`;
                stopgame();
            }

        }
    }



    function stopgame() {
        Array.from(btn).forEach(

            b => b.disabled = true
        );
    }

    function reestGame() {

        currentPlayer = First_Player;
        StatusText.innerText = `${currentPlayer}'s Turn!`;
        board = ["", "", "", "", "", "", "", "", ""];
        Array.from(btn).forEach(
            b => {
                b.innerText = "";
                b.disabled = false;
                b.classList.remove("winning-cell");
            });

    }


});

$(document).ready(function () {
    const difficulty = sessionStorage.getItem('difficulty');
    const playfirst = sessionStorage.getItem('playfirst');
    const PlayAs = sessionStorage.getItem('PlayAs');
    let StatusText = document.getElementById('statusText');
    const reset = document.getElementById('reset');
    const btn = document.getElementsByClassName('btn');
    const btns = Array.from(btn);
    let emptycell = [];
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

    let currentPlayer = null;
    let computer = null;
    let user = null;

    reset.addEventListener('click', reset_btn);

    initializeGame();

    function initializeGame() {

        // defined what sine do user want to play with.
        if (PlayAs == 'x') {
            user = 'x';
            computer = 'o';
        }
        else if (PlayAs == 'o') {
            user = 'o';
            computer = 'x';
        }
        else {
            alert('error! for playAs');
        }

        // define who will play first move computer or user if playfirst option is checked user will play first move else computer will.
        if (playfirst === 'no') {
            currentPlayer = computer;
        }
        else if (playfirst === 'yes') {
            currentPlayer = user;
        }
        else {
            alert('error! for PlayFirst');
        }


        if (currentPlayer === computer) {
            computerMovehandler();
        }
        else if (currentPlayer === user) {
            userMoveHandler();
        }
        else {
            alert('There is an error!for trafer player function');
        }
        update_statustext();
    }


    function change_player() {
        if (currentPlayer === computer) {
            currentPlayer = user;
            userMoveHandler();
        }
        else if (currentPlayer === user) {
            currentPlayer = computer;
            computerMovehandler();
        }
        else {
            alert('There is an error!for changing player');
        }
        console.log(`current player is ${currentPlayer}`)
        update_statustext();
    }

    function update_statustext() {
        if (currentPlayer === computer) {
            StatusText.innerText = `Computer's Turn`;
        }
        else if (currentPlayer === user) {
            StatusText.innerText = `Your Turn`;
        }
    }

    function check_empty_cell() {
        emptycell = [];
        btns.forEach((b, index) => {
            if (b.innerText === '') {
                emptycell.push(index);
            }
        })
        return emptycell;
    }

    function userMoveHandler() {

        btns.forEach((b, index) => {
            if (b.innerText === '') {
                b.addEventListener('click', () => {
                    b.innerText = user;
                    board[index] = user;
                    change_player();
                }, { once: true });
            }
        })
    }

    function computerMovehandler() {

        switch (difficulty) {
            case 'low':
                low_difficulty();
                break;
            case 'medium':
                mediam_difficulty();
                break;
            case 'high':
                high_difficulty();
                break;
            default:
                alert('something is wrong with the difficulty option!');
        }

    }

    function low_difficulty() {


        emptycell = check_empty_cell();

        if (emptycell.length === 0) {
            return;
        }
        else {
            const randomInd = Math.floor(Math.random() * emptycell.length);
            const notBadMove = emptycell[randomInd]
            btns[notBadMove].innerText = computer;
            board[notBadMove] = computer;
        }
    }

    function mediam_difficulty() {

    }

    function high_difficulty() {

    }

    function reset_btn() {
        emptycell = [];
        board = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = null;
        computer = null;
        user = null;
        btns.forEach(b => {
            b.innerText = '';
        })
        initializeGame();
    }


});
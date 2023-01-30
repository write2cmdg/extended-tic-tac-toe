
const newGameBtn = document.querySelector('button');
const feedback = document.querySelector('span');
const threeCB = document.querySelector('#three-cb');
const threeLbl = document.querySelector('#three-lbl');
const fiveCB = document.querySelector('.five-cb');
const fiveLbl = document.querySelector('.five-lbl');
const board = document.querySelector('.board');
const usedSqs = {};
let turns = 0, XO = "X", isXTurn = true; boardSize = 9;

newGameBtn.addEventListener('click', playNewGame);
fiveCB.addEventListener('change', board5x5);
threeCB.addEventListener('change', board3x3);

function board5x5() {
    
    feedback.textContent = "Match 4 in a row";
    boardSize = 25;
    fiveCB.classList.add('hide');
    fiveLbl.classList.add('hide');
    threeCB.classList.remove('hide');
    threeLbl.classList.remove('hide');
    
    newGameBtn.textContent = "START GAME";
    
    board.textContent = "";
    
    for (let i = 0; i < boardSize; i++) {
        const divvy = document.createElement('div');
        divvy.className = 'square5';
        board.appendChild(divvy);
    }; 
}
function board3x3() {
    
    feedback.textContent = "Match 3 in a row";
    boardSize = 9;
    fiveCB.classList.remove('hide');
    fiveLbl.classList.remove('hide');
    threeCB.classList.add('hide');
    threeLbl.classList.add('hide');
    
    newGameBtn.textContent = "START GAME";
    
    board.textContent = "";
    
    for (let i = 0; i < boardSize; i++) {
        const divvy = document.createElement('div');
        divvy.className = 'square';
        board.appendChild(divvy);
    };
    
}

function playNewGame() { 
    
    board.textContent = "";
    
    newGameBtn.textContent = "CLEAR BOARD";

    for (let i = 0; i < boardSize; i++) {
        var divvy = document.createElement('div');
        boardSize == 9 ? divvy.classList.add('square') : divvy.classList.add('square5');
        divvy.textContent = "";
        divvy.id = i;
        divvy.addEventListener('click', addXO);
        usedSqs['s' + (i)] = i;
        board.appendChild(divvy);  
    };


    isXTurn = true;
    turns = 0;

    feedback.textContent = "X's turn";
}

function addXO() {
    turns++;

    isXTurn ? feedback.textContent = "O's turn" : feedback.textContent = "X's turn";

    if (isXTurn) {
        this.textContent = 'X';
        XO = 'X';
    } else {
        this.textContent = 'O';
        XO = 'O';
    };
    
    usedSqs['s' + this.id] = XO;

    this.removeEventListener('click', addXO);

    if (turns >= 5) checkForWinner();

    isXTurn = !isXTurn;
}

function checkForWinner() {
    if (turns == boardSize) {
        feedback.textContent = 'Game over';
    }

    if (boardSize == 9) {

        if ((usedSqs.s0 == usedSqs.s1 && usedSqs.s0 == usedSqs.s2) ||
        (usedSqs.s3 == usedSqs.s4 && usedSqs.s3 == usedSqs.s5) ||
        (usedSqs.s6 == usedSqs.s7 && usedSqs.s6 == usedSqs.s8) ||
        (usedSqs.s0 == usedSqs.s3 && usedSqs.s0 == usedSqs.s6) ||
        (usedSqs.s1 == usedSqs.s4 && usedSqs.s1 == usedSqs.s7) ||
        (usedSqs.s2 == usedSqs.s5 && usedSqs.s2 == usedSqs.s8) ||
        (usedSqs.s0 == usedSqs.s4 && usedSqs.s0 == usedSqs.s8) ||
        (usedSqs.s2 == usedSqs.s4 && usedSqs.s2 == usedSqs.s6)) {

            feedback.textContent = `${XO} is the winner!`;

            for (let i = 0; i < boardSize; i++) {
                const removeSq = document.getElementById(i)
                removeSq.removeEventListener('click', addXO);
            };
        };

    } else {

        if (
        //horizontal:
        (usedSqs.s0 == usedSqs.s1 && usedSqs.s0 == usedSqs.s2 && usedSqs.s0 == usedSqs.s3) ||
        (usedSqs.s1 == usedSqs.s2 && usedSqs.s1 == usedSqs.s3 && usedSqs.s1 == usedSqs.s4) ||
        (usedSqs.s5 == usedSqs.s6 && usedSqs.s5 == usedSqs.s7 && usedSqs.s5 == usedSqs.s8) ||
        (usedSqs.s6 == usedSqs.s7 && usedSqs.s6 == usedSqs.s8 && usedSqs.s6 == usedSqs.s9) ||
        (usedSqs.s10 == usedSqs.s11 && usedSqs.s10 == usedSqs.s12 && usedSqs.s10 == usedSqs.s13) ||
        (usedSqs.s11 == usedSqs.s12 && usedSqs.s11 == usedSqs.s13 && usedSqs.s11 == usedSqs.s14) ||
        (usedSqs.s15 == usedSqs.s16 && usedSqs.s15 == usedSqs.s17 && usedSqs.s15 == usedSqs.s18) ||
        (usedSqs.s16 == usedSqs.s17 && usedSqs.s16 == usedSqs.s18 && usedSqs.s16 == usedSqs.s19) ||
        (usedSqs.s20 == usedSqs.s21 && usedSqs.s20 == usedSqs.s22 && usedSqs.s20 == usedSqs.s23) ||
        (usedSqs.s21 == usedSqs.s22 && usedSqs.s21 == usedSqs.s23 && usedSqs.s21 == usedSqs.s24) ||
        //vertical:
        (usedSqs.s0 == usedSqs.s5 && usedSqs.s0 == usedSqs.s10 && usedSqs.s0 == usedSqs.s15) ||
        (usedSqs.s5 == usedSqs.s10 && usedSqs.s0 == usedSqs.s15 && usedSqs.s0 == usedSqs.s20) ||
        (usedSqs.s1 == usedSqs.s6 && usedSqs.s1 == usedSqs.s11 && usedSqs.s1 == usedSqs.s16) ||
        (usedSqs.s6 == usedSqs.s11 && usedSqs.s6 == usedSqs.s16 && usedSqs.s6 == usedSqs.s21) ||
        (usedSqs.s2 == usedSqs.s7 && usedSqs.s2 == usedSqs.s12 && usedSqs.s2 == usedSqs.s17) ||
        (usedSqs.s7 == usedSqs.s12 && usedSqs.s7 == usedSqs.s17 && usedSqs.s7 == usedSqs.s22) ||
        (usedSqs.s3 == usedSqs.s8 && usedSqs.s3 == usedSqs.s13 && usedSqs.s3 == usedSqs.s18) ||
        (usedSqs.s8 == usedSqs.s13 && usedSqs.s8 == usedSqs.s18 && usedSqs.s8 == usedSqs.s23) ||
        (usedSqs.s4 == usedSqs.s9 && usedSqs.s4 == usedSqs.s14 && usedSqs.s4 == usedSqs.s19) ||
        (usedSqs.s9 == usedSqs.s14 && usedSqs.s9 == usedSqs.s19 && usedSqs.s9 == usedSqs.s24) ||
        //diagonal
        (usedSqs.s5 == usedSqs.s11 && usedSqs.s5 == usedSqs.s17 && usedSqs.s5 == usedSqs.s23) ||
        (usedSqs.s0 == usedSqs.s6 && usedSqs.s0 == usedSqs.s12 && usedSqs.s0 == usedSqs.s18) ||
        (usedSqs.s6 == usedSqs.s12 && usedSqs.s6 == usedSqs.s18 && usedSqs.s6 == usedSqs.s24) ||
        (usedSqs.s1 == usedSqs.s7 && usedSqs.s1 == usedSqs.s13 && usedSqs.s1 == usedSqs.s19) ||
        (usedSqs.s3 == usedSqs.s7 && usedSqs.s3 == usedSqs.s11 && usedSqs.s3 == usedSqs.s15) ||
        (usedSqs.s4== usedSqs.s8 && usedSqs.s4 == usedSqs.s12 && usedSqs.s4 == usedSqs.s16) ||
        (usedSqs.s8 == usedSqs.s12 && usedSqs.s8 == usedSqs.s16 && usedSqs.s8 == usedSqs.s20) ||
        (usedSqs.s9 == usedSqs.s13 && usedSqs.s9 == usedSqs.s17 && usedSqs.s9 == usedSqs.s21)
        ) {
            feedback.textContent = `${XO} is the winner!`;
            for (let i = 0; i < boardSize; i++) {
            const removeSq = document.getElementById(i)
                removeSq.removeEventListener('click', addXO);
            };
        }
        
    }
}






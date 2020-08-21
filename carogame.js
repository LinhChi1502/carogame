const TURN_X = "x";
const TURN_O = "o";

let size = 30;
function drawBoard() {
    let str = "";
    for (let i = 0; i < size; i++) {
        str += "<tr>";
        for (let j = 0; j < size; j++) {
            str += `<td id="cell-${i}${j}" onclick="clickCell(${i},${j})">&nbsp;&nbsp;</td>`;
        }
        str += "</tr>";
    }
    document.getElementById("board").innerHTML = str;
}

drawBoard();
let turn = TURN_X;

function clickCell(x, y) {
    let cell = document.getElementById("cell-" + x + y);
    if (cell.innerHTML === "&nbsp;&nbsp;") {
        if (turn === TURN_X) {
            cell.innerHTML = TURN_X;
            turn = TURN_O;
        } else {
            cell.innerHTML = TURN_O;
            turn = TURN_X;
        }
    } else {
        alert("Choose another position!");
    }

    checkWinHorizon(x, y);
    checkWinVertical(x, y);
    checkWinDiagonalLeft(x, y);
    checkWinDiagonalRight(x, y);
}

function getValueCell(x, y) {
    if (x >= 0 && y >= 0 && x <= size && y <= size) {
        return document.getElementById("cell-" + x + y).innerHTML;
    } else {
        return "";
    }
}

function checkWinHorizon(x, y) {
    let count = 1;
    let i = 1;
    while (getValueCell(x, y) == getValueCell(x, y + i)) {
        count += 1;
        i++;
    }
    let j = 1;
    while (getValueCell(x, y) == getValueCell(x, y - j)) {
        count += 1;
        j++;
    }

    checkGameOver(count);
}

function checkWinVertical(x, y) {
    let count = 1;
    let i = 1;
    while (getValueCell(x, y) == getValueCell(x + i, y)) {
        count += 1;
        i++;
    }
    let j = 1;
    while (getValueCell(x, y) == getValueCell(x - j, y)) {
        count += 1;
        j++;
    }

    checkGameOver(count);
}

function checkWinDiagonalLeft(x, y) {
    let count = 1;
    let i = 1;
    while (getValueCell(x, y) == getValueCell(x + i, y+i)) {
        count += 1;
        i++;
    }
    let j = 1;
    while (getValueCell(x, y) == getValueCell(x - j, y-j)) {
        count += 1;
        j++;
    }

    checkGameOver(count);
}

function checkWinDiagonalRight(x, y) {
    let count = 1;
    let i = 1;
    while (getValueCell(x, y) == getValueCell(x + i, y-i)) {
        count += 1;
        i++;
    }
    let j = 1;
    while (getValueCell(x, y) == getValueCell(x - j, y+j)) {
        count += 1;
        j++;
    }

    checkGameOver(count);
}

function checkGameOver(count) {
    if (count == 3) {
        setTimeout(function () {
            alert("Win!");
        }, 100)

    }
}


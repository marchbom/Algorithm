const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input[0])
let num = 1;
let board = Array.from({length: n}, () => Array(n).fill(0));

for(let col = n - 1; col >= 0; col--) {
    if((n - col) % 2 === 1) {
        for(let row = n - 1; row >= 0; row--) {
            board[row][col] = num++;
        }
    } else {
        for(let row = 0; row < n; row++) {
            board[row][col] = num++;
        }
    }
}

console.log(board.map(row => row.join(" ")).join("\n"));
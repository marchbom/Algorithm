const fs= require('fs')
const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let board = Array.from({ length: n }, () => Array(m).fill(0));
let num = 1;

for(let i = 0; i < m; i++) {
    let row = 0;
    let col = i;
    while(row < n && col >= 0) {
        board[row][col] = num++;
        row++;
        col--;
    }
}

for(let j = 1; j <= n; j++) {
    let row = j
    let col = m - 1;
    while(row < n && col >= 0) {
        board[row][col] = num++;
        row++;
        col--;
    }
}
board.forEach(row => console.log(row.join(" ")))
const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
const arr = Array.from({ length: n }, () => Array(n).fill(0));


for (let i = 1; i <= m; i++) {
  let [r, c] = input[i].split(" ").map(Number)
  arr[r - 1][c - 1] = 1;
}

for(let row of arr) {
    console.log(row.join(" "))
}
const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let [n,m] = input
let num = 0;
let arr = Array.from({ length: n }, () => Array(m).fill(0));

for (let col = 0; col < m; col++) {
    if (col % 2 === 0) { 
        for (let row = 0; row < n; row++) {
            arr[row][col] = num++;
        }
    } else {
        for (let row = n - 1; row >= 0; row--) {
            arr[row][col] = num++;
        }
    }
}

for (let i = 0; i < n; i++) {
    console.log(arr[i].join(" "));
}
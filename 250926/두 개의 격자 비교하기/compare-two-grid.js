const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let result = []

let arr1 = input.slice(1, 1 + n).map(line => line.trim().split(/\s+/).map(Number));
let arr2 = input.slice(1 + n, 1 + 2 * n).map(line => line.trim().split(/\s+/).map(Number));

for(let i = 0; i < n; i++) {
    let row = []
    for(let j = 0; j < m; j++) {
        row.push(arr1[i][j] === arr2[i][j] ? 0 : 1) 
    }
    result.push(row.join(" "))
}
console.log(result.join("\n"))
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input);

for(let i = 0; i < n; i++) {
    let row = []
    for(let j = 1; j <= n; j++) {
        row.push(j)
    }
    if(i % 2 !== 0) {
        row.reverse()
    }
    console.log(row.join(''))
}
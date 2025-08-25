const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');


let n = Number(input)

for(let i = 0; i < n; i++) {
    let row = []
    for(let j = 0; j < n; j++) {
        const num = (j % 2 === 0) ? (i + 1) : (n-i);
        row.push(num)
    }
    console.log(row.join(''))
}
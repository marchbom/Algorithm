const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let count = Array(11).fill(0)

for (const n of input) {
    if(n === 0) break;
    let idx = Math.floor(n / 10)
    count[idx]++;
}

for(let i = 10; i > 0; i--) {
    console.log(`${i * 10} - ${count[i]}`)
}
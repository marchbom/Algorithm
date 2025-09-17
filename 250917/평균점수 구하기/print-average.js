const fs = require('fs')
const scores = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let avg = 0;
let sum = 0
for(let i = 0; i < 8; i++) {
    sum += scores[i];
    avg = (sum / scores.length).toFixed(1)
}
console.log(avg)

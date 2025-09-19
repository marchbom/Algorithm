const fs = require('fs')
const numbers = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let count = Array(10).fill(0)


for(const num of numbers) {
    if(num === 0) break;
    let tens = Math.floor(num / 10)
    count[tens]++
}
for(let i = 1; i < 10; i++) {
    console.log(`${i} - ${count[i]}`)
}
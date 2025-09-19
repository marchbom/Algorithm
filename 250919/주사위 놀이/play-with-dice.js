const fs = require('fs')
const numbers = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let count = Array(7).fill(0)


for(const num of numbers) {
    count[num]++
}
for(let i = 1; i <= 6; i++) {
    console.log(`${i} - ${count[i]}`)
}


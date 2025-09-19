const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])
let numbers = input[1].split(" ").map(Number);

const count = Array(10).fill(0)

for(const number of numbers) {
    count[number]++
}

for(let i = 1; i < 10; i++) {
    console.log(count[i])
}
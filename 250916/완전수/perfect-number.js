const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [start, end] = input
let arr = []
let count = 0
let result = 0
for(let i = start; i <= end; i++) {
    for(let j = 1; j < i; j++) {
        if(i % j === 0) {
            result += j
        }
    }
    if(result === i) {
        count++;
    }
}
console.log(count)

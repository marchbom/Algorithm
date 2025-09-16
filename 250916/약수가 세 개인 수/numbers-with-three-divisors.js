const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [start, end] = input;
let result = 0

for(let i = start; i <= end; i++) {
    let count = 0
    for(let j = 1; j <= i; j++) {
        if(i % j === 0) {
            count++;
        }
    }
    if(count === 3) {
        result++;
    }
}
console.log(result)
const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])
let scores = input[1].split(" ").map(Number)
let sum = 0;
let avg = 0;
let result = ""
for(let i = 0; i < n; i++) {
    sum += scores[i]
}
avg = (sum / n).toFixed(1)
if(avg >= 4.0) {
    result = "Perfect"
} else if(avg >= 3.0) {
    result = "Good"
} else {
    result = "Poor"
}

console.log(avg)
console.log(result)
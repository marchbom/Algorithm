const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let result = []
let i = 0
while(input[i] !== 0) {
    if(input[i] % 2 === 0) {
        result.push((input[i] / 2))
    } else {
        result.push(input[i] + 3)
    }
    i++
}
console.log(result.join(" "))
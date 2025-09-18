const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, a2] = input
let arr = [a, a2]

for(let i = 2; i < 10; i++) {
    let next = arr[i-1] + 2 * arr[i-2]
    arr.push(next)
}

console.log(arr.join(" "))
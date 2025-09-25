const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let n = input[0]
let m = input[1]
let arr2d = []
let num = 1
for(let i = 0; i < n; i++) {
    let row = []
    for(let j = 0; j < m; j++) {
        row.push(num++)
    }
    console.log(row.join(" "))
}


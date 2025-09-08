const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number)

let n = input[0]

for(let i = 1; i <= n; i++) {
    let str = ""
    for(let j = 1; j <= i; j++) {
        str += "* "
    }
    console.log(str)
}
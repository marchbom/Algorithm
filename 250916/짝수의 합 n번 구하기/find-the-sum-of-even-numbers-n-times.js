const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = input[0]

for(let i = 1; i <= n; i++) {
    let [a, b] = input[i].split(" ").map(Number)
    let result = 0
    for(let j = a; j <= b; j++) {
        if(j % 2 === 0) {
            result += j
        }
    }
    console.log(result)
}


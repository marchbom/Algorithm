const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let a = input[0]

if(a % 3 === 0) {
    console.log("YES")
} else {
    console.log("NO")
}

if(a % 5 === 0) {
    console.log("YES")
} else {
    console.log("NO")
}
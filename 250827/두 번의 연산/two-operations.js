const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let a = Number(input[0])

if(a % 2 !== 0) {
    a = a + 3
}
if(a % 3 === 0) {
    a = a / 3
}

console.log(a)
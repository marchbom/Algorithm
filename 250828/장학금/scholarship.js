const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let m = input[0]
let l = input[1]

if(m >= 90 && l >= 95) {
    console.log(100000)
} else if (m >= 90 && l >=90) {
    console.log(50000 )
} else {
    console.log(0)
}
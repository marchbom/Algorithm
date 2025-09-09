const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let n = input[0]

for(let i = 0; i < n; i++) {
    let space = " ".repeat(i * 2)
    let str = "* ".repeat((n-i) * 2 - 1).trim()
   
    console.log(space + str)
}
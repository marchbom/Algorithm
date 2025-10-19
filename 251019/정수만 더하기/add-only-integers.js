const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let num = 0;
for(let i = 0; i < input.length; i++) {
    if(/[0-9]/.test(input[i])) {
        num += Number(input[i])
    }
}

console.log(num)

const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let a = input[0]
if(a >= 113) console.log(1)
else console.log(0)
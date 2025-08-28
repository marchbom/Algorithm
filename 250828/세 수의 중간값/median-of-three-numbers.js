const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let [a, b, c] = [input[0], input[1], input[2]]

console.log(b > a && b < c ? 1 : 0)
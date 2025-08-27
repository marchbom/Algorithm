const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n')

let [m1, e1] = input[0].split(" ").map(Number)
let [m2, e2] = input[1].split(" ").map(Number)

console.log(m1 > m2 && e1 > e2 ? 1 : 0)
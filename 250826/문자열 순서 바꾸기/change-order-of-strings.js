const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let [t, s] = [input[0], input[1]]
let tmp;

tmp = s;
s = t;
t = tmp;

console.log(t)
console.log(s)
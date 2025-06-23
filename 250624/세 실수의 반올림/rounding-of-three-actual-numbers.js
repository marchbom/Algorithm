const fs = require('fs');
let num = fs.readFileSync(0).toString().trim().split('\n')
let a = Number(num[0]);
let b = Number(num[1]);
let c = Number(num[2]);


console.log(a.toFixed(3))
console.log(b.toFixed(3))
console.log(c.toFixed(3))
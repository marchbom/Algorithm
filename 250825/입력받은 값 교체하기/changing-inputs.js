const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);

let tmp;
tmp = a;
a = b;
b = tmp;

console.log(a, b)
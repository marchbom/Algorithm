const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ");

let [a, b] = input

a = a.charCodeAt(0);
b = String.fromCharCode(b);

console.log(a, b)
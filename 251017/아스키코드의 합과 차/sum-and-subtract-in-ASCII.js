const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ");

let [a, b] = input;

a = a.charCodeAt(0);
b = b.charCodeAt(0);

console.log(a + b, Math.max(a, b) - Math.min(a, b))
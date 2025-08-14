const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let N = Number(input[0]);
let a = input[1].split(' ').map(Number)

console.log(a.map((num) => num * num).join(' '))


const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');
let a = Number(input[0])
let b = Number(input[1])
let c = Number(input[2])

let sum = a+b+c;
let avg = sum / input.length.toFixed(0);
let result = sum - avg
console.log(sum)
console.log(avg);
console.log(result)
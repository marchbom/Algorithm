const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ').map(Number);
let A = input[0]
let B = input[1];


console.log(A >= B ? 1 : 0)
console.log(A > B ? 1 : 0)
console.log(A <= B ? 1 : 0)
console.log(A < B ? 1 : 0)
console.log(A === B ? 1 : 0)
console.log(A !== B ? 1 : 0)




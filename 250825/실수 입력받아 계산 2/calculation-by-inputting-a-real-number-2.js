const fs = require('fs');
const input = fs.readFileSync(0).toString()

let a = Number(input);

console.log((a + 1.5).toFixed(2))
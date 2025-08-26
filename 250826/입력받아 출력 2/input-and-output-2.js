const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('-').map(Number).join("")

console.log(input)
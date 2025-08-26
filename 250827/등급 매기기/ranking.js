const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let score = input[0];

if(score >= 90) console.log("A")
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let n = input[0];

if(n >= 3000) console.log("book")
else if(n >= 1000) console.log("mask");
else if(n >= 500) console.log("pen");
else console.log("no")
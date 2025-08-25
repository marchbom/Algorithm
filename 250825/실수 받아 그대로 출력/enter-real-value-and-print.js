const fs = require('fs');
const N = Number(fs.readFileSync(0).toString());

console.log(N.toFixed(2))
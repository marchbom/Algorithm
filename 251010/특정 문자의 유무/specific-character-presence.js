const fs = require('fs')
const str = fs.readFileSync(0).toString().trim();

console.log(str.includes("ee") ? "Yes" : "No", str.includes("ab") ? "Yes" : "No")
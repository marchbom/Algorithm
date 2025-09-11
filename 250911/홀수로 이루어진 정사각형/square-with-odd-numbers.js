const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = 0; i < n; i++) {
    let str = ""
    let start = 11 + i * 2
    for(let j = 0; j < n; j++) {
        str += (start + j * 2) + " "
    }
    console.log(str.trim())
}
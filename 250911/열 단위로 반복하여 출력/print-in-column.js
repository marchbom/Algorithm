const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let count = ""
for(let i = 0; i < n; i++) {
    let count = ""
    for(let j = 0; j < n; j ++) {
        count += (i+1)
    }
    console.log(count)
}
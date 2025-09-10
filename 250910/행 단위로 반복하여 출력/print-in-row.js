const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = 1; i <= n; i++) {
    let num = ""
    for(let j = 1; j <= n; j++) {
        num += j
    }
    console.log(num)    
}
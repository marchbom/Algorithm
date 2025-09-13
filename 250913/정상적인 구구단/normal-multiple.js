const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = 1; i <= n; i++) {
    let row = ""
    for(let j = 1; j <= n; j++) {
        row += `${i} * ${j} = ${i * j}`
        if(j < n) row += ", "
    }
    console.log(row)
}
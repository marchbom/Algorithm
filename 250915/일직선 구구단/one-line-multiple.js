const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

for(let i = 1; i <= n; i++) {
    let str = ""
    for(let j = 1; j <= n; j++) {
        str += `${i} * ${j} = ${i * j} \n`
    }
    console.log(str.trimEnd())
}
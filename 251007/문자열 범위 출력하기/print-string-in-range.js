const fs = require('fs')
const str = fs.readFileSync(0).toString().trim()


for(let i = 2; i < str.length; i++) {
    process.stdout.write(str[i])
    if(i === 9) break;
}
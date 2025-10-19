const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim())

if(n % 2 === 0) {
    console.log(`${n} is even`)
} else {
    console.log(`${n} is odd`)
}
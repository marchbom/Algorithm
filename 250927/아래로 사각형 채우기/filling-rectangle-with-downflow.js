const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim())


for(let i = 0; i < n; i++) {
    let row = []
    for(let j = 0; j < n; j++) {
        row.push(i + 1 + j * n)
    }
    console.log(row.join(" "))
}


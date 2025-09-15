const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim())


for(let i = 0; i < n; i++) {
    let str = ""
    let num = 1;
    for(let j = n - i; j >= 1; j--) {
        if(j === 1) {
           str += `${i + 1} * ${num} = ${(i + 1) * num} `
           num++
        } else {
            str += `${i + 1} * ${num} = ${(i + 1) * num} / `
            num++
        }
    }
    console.log(str)
}
const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim());

let result = []

for(let i = 1; i <= n; i++) {
    let arr = []

    for(let j = 1; j <= i; j++) {
        if(i % j === 0) {
            arr.push(j)
        }
    }
    if(arr.length === 2) {
        result.push(i)
    }
}
console.log(result.join(" "))
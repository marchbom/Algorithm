const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('')

let N = Number(input[0])

for(let i = 1; i <= 100; i++) {
    let result = i + (i + 1)
    if(result === N) {
        console.log(i + 1)
    }
}
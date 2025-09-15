const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let m = Number(input[0])

for(let i = 1; i <= m; i++) {
    let n = Number(input[i])
    let count = 0;

    while(n !== 1) {
        if(n % 2 === 0) {
            n = n / 2   
            count++;
        } else {
            n = n * 3 + 1
            count++
        }
    }
    console.log(count)  
}
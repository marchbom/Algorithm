const fs = require('fs');
const input = fs.readFileSync(0).toString().trim()

let N = Number(input)

    let sum = 0
for(let i = 1; i <= 100; i++) {
    sum += i
    if(sum >= N) {
        console.log(i)
        break;
    }
}
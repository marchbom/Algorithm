const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let n = input[0];
let count = 0;

while(n < 1000) {
    if(n % 2 === 0) {
        n = (n * 3) + 1
        count++
    } else if(n % 2 !== 0) {
        n = (2 * n) + 2
        count++
    }
}
    console.log(count)
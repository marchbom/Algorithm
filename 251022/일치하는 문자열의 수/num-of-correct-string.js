const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let [n, a] = input[0].split(" ")
let count = 0;

for(let i = 1; i <= Number(n); i++) {
    if(input[i] === a) {
        count++;
    }
}
console.log(count)
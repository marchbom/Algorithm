const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])
let after = input[1].split(" ").map(Number)
let buy = Math.min(...after);
let sell = 0;


for(let i = 0; i < after.length; i++) {
    if(Math.max(after.indexOf(buy) < after.indexOf(after[i]))) {
        sell = after[i]
    }
}
console.log((sell - buy < 0) ? 0 : (sell - buy))
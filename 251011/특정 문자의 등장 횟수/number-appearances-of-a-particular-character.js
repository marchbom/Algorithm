const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let result = []
let count1 = 0;
let count2 = 0;

for(let i = 0; i < input.length; i++) {
    if(input[i] + input[i + 1] === "ee") {
        count1++
    }
    if(input[i] + input[i + 1] === "eb") {
        count2++
    }
}
console.log(count1, count2)
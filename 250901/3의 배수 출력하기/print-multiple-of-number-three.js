const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

let n = input[0]
let i = 1;
let result = ""

while(i <= n) {
    if(i % 3 === 0) {
        result += i + " "
    
    }
    i++ 
}
console.log(result)
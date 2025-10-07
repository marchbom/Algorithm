const fs = require('fs')
const str = fs.readFileSync(0).toString().trim().split(" ")

let result = 0
for(let i = 0; i < str.length; i++) {
    result += str[i].length
}
console.log(result)
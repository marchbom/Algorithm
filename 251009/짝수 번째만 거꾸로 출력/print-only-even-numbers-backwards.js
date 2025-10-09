const fs = require('fs')
const str = fs.readFileSync(0).toString().trim()

let result = []

for(let i = 0; i <= str.length; i++) {
    if(i % 2 !== 0) {
        result.push(str[i])
    } 
}
console.log(result.reverse().join(""))
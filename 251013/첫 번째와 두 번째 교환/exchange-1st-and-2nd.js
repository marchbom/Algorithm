const fs = require('fs')
const input = fs.readFileSync(0).toString().trim();

let str = input.split("")
let result = []

for(let s = 0; s < str.length; s++) {
    if(str[0] === str[s]) {
        result[s] = str[1]
    } else if (str[1] === str[s]) {
        result[s] = str[0]
    } else {
        result[s] = str[s]
    }
}
console.log(result.join(""))
const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let str = input.split("")
let target = str[1]
let replace = str[0]

for(let i = 0; i < str.length; i++) {
    if(str[i] === target) {
        str[i] = replace
    }
}
console.log(str.join(""))

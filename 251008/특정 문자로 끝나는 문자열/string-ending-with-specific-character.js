const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n");

let alp = input[input.length - 1];

let result = []

for(let i = 0; i < input.length -1; i++) {
    let str = input[i]
    if (str[str.length - 1] === alp) {
        result.push(str)
    }
}
console.log(result.length > 0 ? result.join("\n") : "None")

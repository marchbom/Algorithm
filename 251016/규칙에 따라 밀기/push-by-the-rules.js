const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n");

let str = input[0]
let way =input[1].split("")

for(let i = 0; i < way.length; i++) {
    if(way[i] === "L") {
        str = str.slice(1) + str[0]
    } else if(way[i] === "R") {
        str = str.slice(-1) + str.slice(0, -1)
    }
}
console.log(str)
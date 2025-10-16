const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let [str, cnt] = input[0].split(" ")
let req = input.slice(1).map(Number)

for(let i = 0; i < Number(cnt); i++) {
    if(req[i] === 1) {
        str = str.slice(1) + str[0]
    } else if (req[i] === 2) {
        str = str.slice(-1) + str.slice(0, -1)
    } else if(req[i] === 3) {
        str = str.split("").reverse().join("")
    }
    console.log(str)
}

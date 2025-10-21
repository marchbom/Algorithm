const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")


let num = 0;

for(let str of input) {
    let filterNum = str.replace(/[^0-9]/g, "")
    if(filterNum) {
        num += Number(filterNum)
    }
}
console.log(num)


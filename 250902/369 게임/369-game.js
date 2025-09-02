const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let n = input
let result = ""

for(let i = 1; i <= n; i++) {
    if(i % 3 === 0 ||  i.toString().split("").includes("3") ||  i.toString().split("").includes("6") ||  i.toString().split("").includes("9")) {
        result += 0 + " "
    } else {
        result += i + " "
    }
}
    console.log(result)
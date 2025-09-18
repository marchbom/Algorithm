const fs = require('fs')
const input = Number(fs.readFileSync(0).toString().trim().split(""))

let result = []
let count = 0
let num = 1

while(count < 2) {
    let multiple = input * num
    result.push(multiple)

    if(multiple % 5 === 0) {
        count++;
    }
    num++
}
console.log(result.join(" "))

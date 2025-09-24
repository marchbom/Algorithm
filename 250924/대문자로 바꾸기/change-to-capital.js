const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let arr = input.map(str => str.split(" "))

for(let i = 0; i < arr.length; i++) {
    let result = ""
    for(let j = 0; j < arr[i].length; j++) {
        result += arr[i][j].toUpperCase() + " "
    }
    console.log(result)
}

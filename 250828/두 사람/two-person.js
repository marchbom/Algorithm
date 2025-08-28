const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let a = input[0].split(" ");
let b = input[1].split(" ")

if ((a[0] >= 19 && a[1] === "M") || (b[0] >= 19 && b[1] === "M")) {
    console.log(1)
} else { 
    console.log(0)
}
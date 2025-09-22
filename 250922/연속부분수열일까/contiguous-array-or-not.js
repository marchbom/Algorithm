const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let [a, b] = input[0].split(" ").map(Number)
let arrA = input[1]
let arrB = input[2]


let result = arrA.includes(arrB) ? "Yes" : "No"


console.log(result)
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ")

let n = input[0]

console.log(n)
if(n < 0 ) console.log("minus")

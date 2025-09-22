const fs = require("fs")
const n = fs.readFileSync(0).toString().trim().split(" ").map(Number)

console.log(Math.max(...n))
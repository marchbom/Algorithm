const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let h = input[0]
let w = input[1]

b = Math.floor((10000 * w) / (h * h))

console.log(b)
if(b >= 25) console.log("Obesity")


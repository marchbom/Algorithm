const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b, c] = input;

console.log(input.sort((a, b) => a - b)[1])

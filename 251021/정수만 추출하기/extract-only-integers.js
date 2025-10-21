const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ")

let sum = 0
for (let str of input) {
  const match = str.match(/^[0-9]+/);
  if (match) {
    sum += Number(match[0]);
  }
}

console.log(sum);
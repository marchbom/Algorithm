const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0])

for (let i = 1; i <= n; i++) {
  let num = 1;
  let [a, b] = input[i].split(" ").map(Number);
  for (let j = a; j <= b; j++) num *= j;
  console.log(num);
}
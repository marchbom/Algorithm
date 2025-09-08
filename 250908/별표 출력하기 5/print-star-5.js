const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim());

let n = input;

for (let i = 0; i < n; i++) {
  let str = "";
  let starCount = n - i;
  for (let j = 0; j < starCount; j++) {
    str += "*".repeat(starCount);
    if (j < starCount - 1) str += " ";
  }
  console.log(str);
}
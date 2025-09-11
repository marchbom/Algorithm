const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

let num = 2;

for (let i = 0; i < n; i++) {
  let str = "";
  for (let j = 0; j < n; j++) {
    str += num + " "
    num += 2
    if(num >= 10) num = 2
  }
  console.log(str.trim());
}
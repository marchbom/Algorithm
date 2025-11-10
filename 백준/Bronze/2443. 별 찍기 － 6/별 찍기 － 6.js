const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let n = Number(input);

for (let i = 0; i < n; i++) {
  let space = i;
  let str = 2 * (n - i) - 1;
  console.log(" ".repeat(space) + "*".repeat(str));
}

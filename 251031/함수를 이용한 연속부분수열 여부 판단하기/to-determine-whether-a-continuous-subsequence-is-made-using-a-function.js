const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.
function continuous(a, b) {
  for (let i = 0; i + b.length <= a.length; i++) {
    if (a.slice(i, i + b.length).join(" ") === b.join(" ")) {
      return true;
    }
  }
  return false;
}

console.log(continuous(a, b) ? "Yes" : "No");
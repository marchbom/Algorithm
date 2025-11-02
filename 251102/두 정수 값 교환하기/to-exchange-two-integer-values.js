const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
// Please write your code here.


function change(a, b) {
    return [a, b] = [b , a].join(" ");
}

console.log(change(n, m))
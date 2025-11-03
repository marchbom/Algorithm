const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [num, ...str] = input;
const [n, m] = num.split(' ').map(Number);

const s = new Set(str.slice(0, n));
const check = str.slice(n);
let count = 0;

for (let w of check) {
  if (s.has(w)) count++;
}

console.log(count);

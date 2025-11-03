const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let n = Number(input);
let result = [];
for (let i = 2; i <= n; i++) {
  while (n % i === 0) {
    result.push(i);
    n = n / i;
  }
}
console.log(result.sort((a, b) => a - b).join('\n'));

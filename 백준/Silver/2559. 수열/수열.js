const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, k] = input[0].split(' ').map(Number);
let temp = input[1].split(' ').map(Number);

let currentSum = 0;
for(let i = 0; i < k; i++) {
  currentSum += temp[i]
}
let maxNum = currentSum;

for (let i = k; i < n; i++) {
  currentSum += temp[i] - temp[i - k];
  if(currentSum > maxNum) maxNum = currentSum;
}
console.log(maxNum);
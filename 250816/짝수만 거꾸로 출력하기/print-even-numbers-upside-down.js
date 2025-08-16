const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let N = Number(input[0])
let numArr = input[1].split(' ').map(Number);
let result = []
for(let i = 0; i < N; i++) {
    if(numArr[i] % 2 === 0) {
        result.push(numArr[i]);
    } 
}
console.log(result.reverse().join(' '))
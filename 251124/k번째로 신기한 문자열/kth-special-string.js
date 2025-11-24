const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let index = 0;
const [n, k, t] = input[index++].split(' ');
const words = [];
for (let i = 0; i < Number(n); i++) {
    words.push(input[index++]);
}
// Please Write your code here.
let result = []
for(let i = 0; i < words.length; i++) {
    if(words[i].startsWith(t)) {
    result.push(words[i]);
    }
}
result.sort()

console.log(result[k - 1])
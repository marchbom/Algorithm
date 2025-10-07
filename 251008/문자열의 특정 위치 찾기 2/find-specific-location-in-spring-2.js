const fs = require('fs')
const alp = fs.readFileSync(0).toString().trim();

const strArr = ["apple", "banana", "grape", "blueberry", "orange"];
let count = 0;
let result = []
for(const str of strArr) {
    if(str[2] === alp || str[3] === alp) {
        result.push(str)
        count++;
    }
}
if(result.length > 0) {
    console.log(result.join("\n"))
}
console.log(count)

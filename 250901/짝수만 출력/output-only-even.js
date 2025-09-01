const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);


let [a, b] = input;
let result = ""

while(a <= b) {
    if(a % 2 === 0) {
        result += a + " "
    }
    a++
}
console.log(result)
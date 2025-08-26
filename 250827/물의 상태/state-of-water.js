const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let n = input[0]

if(n < 0) {
    console.log("ice")
} else if(n >= 100) {
    console.log("vapor")
} else {
    console.log("water")
}
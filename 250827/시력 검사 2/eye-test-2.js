const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let a = input[0].toFixed(1);

if(a >= 1.0) {
    console.log("High")
} else if(a >= 0.5) {
    console.log("Middle")
} else {
    console.log("Low")
}
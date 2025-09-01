const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let [a, b] = input;

if(a > 0) {
    console.log(a.toString().repeat(b))
} else if(a < 0)  {
    console.log(0)
}

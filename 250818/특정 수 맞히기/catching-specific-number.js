const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let i = 0;
while(i < input.length) {
    if(input[i] === 25) {
        console.log("Good");
        break;
    } else if(input[i] < 25) {
        console.log("Higher") 
    } else {
        console.log("Lower")
    }
    i++;
}
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let str = input[0];

if(str === "S") console.log("Superior")
else if (str === "A") console.log("Excellent");
else if (str === "B") console.log("Good");
else if(str === "C") console.log("Usually");
else if(str === "D") console.log("Effort");
else console.log("Failure")
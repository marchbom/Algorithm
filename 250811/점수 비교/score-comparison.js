const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let [aMath, aEng] = input[0].split(' ').map(Number);
let [bMath, bEng] = input[1].split(' ').map(Number);

if(aMath > bMath && aEng > bEng) {
    return console.log('1')
} else {
    return console.log("0")
}
